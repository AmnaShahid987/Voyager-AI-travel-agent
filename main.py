from fastapi import FastAPI
from pydantic import BaseModel
import re
import datetime

# 2. Define a Pydantic model named TextRequest
class TextRequest(BaseModel):
    text: str

# 3. Instantiate the FastAPI application
app = FastAPI()

# 4. Define a POST endpoint using the @app.post("/process-text") decorator

@app.post("/process-text")
async def process_text(request: TextRequest):
  
def parse_flight_query(text_input):
    
    #Extracts flight details (origin, destination, dates, trip type) from a natural language query and generates prompts for missing information.
    
    # Initialize parameters
    origin = None
    destination = None
    departure_date = None
    arrival_date = None
    trip_type = None # 'one-way' or 'return'
    no_of_passengers = None
    no_of_children = None

    missing_information = []

  # Convert input to lowercase for easier matching
    text_input_lower = text_input.lower()
 # Regex patterns for cities (simplified for this example, can be expanded)
    city_patterns = {
        'london': ['london'],
        'paris': ['paris'],
        'new york': ['new york', 'nyc'],
        'sydney': ['sydney'],
        'dubai': ['dubai'],
        'singapore': ['singapore']
    }

# Step 4: Extract origin and destination
    # Prioritize 'from X' and 'to Y'
    from_match = re.search(r'from\s+([a-zA-Z\s]+?)(?:\s+to|\s+on|\s+for|$)', text_input_lower)
    if from_match:
        potential_origin = from_match.group(1).strip()
        for city, aliases in city_patterns.items():
            if any(alias in potential_origin for alias in aliases):
                origin = city.title()
                break

    to_match = re.search(r'to\s+([a-zA-Z\s]+?)(?:\s+from|\s+on|\s+for|$)', text_input_lower)
    if to_match:
        potential_destination = to_match.group(1).strip()
        for city, aliases in city_patterns.items():
            if any(alias in potential_destination for alias in aliases):
                destination = city.title()
                break

    # If only one location is found, infer its role
    if not origin and not destination:
        # Look for general city names if no 'from/to' patterns are found
        found_cities = []
        for city, aliases in city_patterns.items():
            if any(alias in text_input_lower for alias in aliases):
                found_cities.append(city.title())

        if len(found_cities) == 1:
            # If only one city, assume it's destination by default
            destination = found_cities[0]
        elif len(found_cities) >= 2:
            # If multiple cities without 'from/to', take first as origin, second as destination
            origin = found_cities[0]
            destination = found_cities[1]
          
    # Step 5 & 6: Extract dates
    today = datetime.date.today()
    dates_found = []

    # Common date formats (MM/DD/YYYY, DD-MM-YYYY, YYYY-MM-DD)
    date_regex = r'(\d{1,2}[-/]\d{1,2}[-/]\d{2,4}|\d{4}[-/]\d{1,2}[-/]\d{1,2})'
    matches = re.findall(date_regex, text_input_lower)

    for dt_str in matches:
        try:
            if len(dt_str.split('/')[-1]) == 2: # MM/DD/YY
                year = int('20' + dt_str.split('/')[-1])
                month = int(dt_str.split('/')[0])
                day = int(dt_str.split('/')[1].split('-')[0]) # Handle DD-MM-YY also
            elif len(dt_str.split('-')[-1]) == 2: # DD-MM-YY
                year = int('20' + dt_str.split('-')[-1])
                month = int(dt_str.split('-')[1])
                day = int(dt_str.split('-')[0])
            elif len(dt_str.split('/')[0]) == 4: # YYYY/MM/DD
                year = int(dt_str.split('/')[0])
                month = int(dt_str.split('/')[1])
                day = int(dt_str.split('/')[2])
            elif len(dt_str.split('-')[0]) == 4: # YYYY-MM-DD
                year = int(dt_str.split('-')[0])
                month = int(dt_str.split('-')[1])
                day = int(dt_str.split('-')[2])
            else: # MM/DD/YYYY
                month = int(dt_str.split('/')[0])
                day = int(dt_str.split('/')[1])
                year = int(dt_str.split('/')[2])
            dates_found.append(datetime.date(year, month, day))
        except ValueError:
            pass

    # Relative dates
    if 'tomorrow' in text_input_lower:
        dates_found.append(today + datetime.timedelta(days=1))
    if 'next week' in text_input_lower:
        dates_found.append(today + datetime.timedelta(weeks=1))
    # Can add more complex relative date parsing here

    dates_found.sort()

    if len(dates_found) >= 1:
        departure_date = dates_found[0].strftime('%Y-%m-%d')
    if len(dates_found) >= 2:
        arrival_date = dates_found[1].strftime('%Y-%m-%d')

    # Step 7: Determine trip type
    if 'return' in text_input_lower or 'round trip' in text_input_lower or arrival_date:
        trip_type = 'return'
    elif 'one way' in text_input_lower:
        trip_type = 'one-way'
    else:
        # Default to one-way if no explicit return keywords and no second date
        trip_type = 'one-way'

    # Step 8: Check for missing critical information
    if not origin:
        missing_information.append('origin city')
    if not destination:
        missing_information.append('destination city')
    if not departure_date:
        missing_information.append('departure date')

    # Step 9: Construct prompt
    prompt = ''
    if missing_information:
        prompt = f"I'm missing some information. Please tell me the {', '.join(missing_information)}."
    else:
        prompt = "I have enough information to search for your flight!"

    return {
        'origin': origin,
        'destination': destination,
        'departure_date': departure_date,
        'arrival_date': arrival_date,
        'trip_type': trip_type,
        'prompt': prompt
    }
