// ============================================================
// VOYAGER AI — MOCK DATA STORE
// mockData.js
//
// 30 flights across 10 popular routes
// 30 hotels across 10 popular destinations
// Structured to mirror real Amadeus / Duffel API response shapes
// ============================================================

const MOCK_DB = {

  // ── FLIGHTS ─────────────────────────────────────────────────────────────
  // Each route has 3 options: best value, fastest, cheapest
  // Fields mirror Duffel API: slices, segments, total_amount, etc.

  flights: [

    // ── NYC → PARIS ──────────────────────────────────────────────────────
    {
      id: "flt_jfk_cdg_001",
      route: { from: "JFK", to: "CDG", fromCity: "New York", toCity: "Paris" },
      airline: "Air France", airlineCode: "AF", flightNumber: "AF 006",
      depart: "10:30", arrive: "23:45+1", duration: "7h 15m", stops: "Non-stop",
      cabin: "Economy", aircraft: "Boeing 777-300ER",
      price: 487, baseFare: 399, taxes: 88,
      seats: 14, baggage: "1 checked bag included",
      tag: "best", tagLabel: "Best Value",
      amenities: ["Wi-Fi", "USB Power", "Meal Included", "Entertainment"],
      loyaltyPartner: "Flying Blue",
      carbonKg: 412
    },
    {
      id: "flt_jfk_cdg_002",
      route: { from: "JFK", to: "CDG", fromCity: "New York", toCity: "Paris" },
      airline: "Delta Air Lines", airlineCode: "DL", flightNumber: "DL 264",
      depart: "17:15", arrive: "07:30+1", duration: "8h 15m", stops: "Non-stop",
      cabin: "Economy", aircraft: "Airbus A350-900",
      price: 521, baseFare: 432, taxes: 89,
      seats: 22, baggage: "1 checked bag included",
      tag: "fast", tagLabel: "Most Popular",
      amenities: ["Wi-Fi", "USB Power", "Meal Included", "Entertainment", "Power Outlet"],
      loyaltyPartner: "SkyMiles",
      carbonKg: 398
    },
    {
      id: "flt_jfk_cdg_003",
      route: { from: "JFK", to: "CDG", fromCity: "New York", toCity: "Paris" },
      airline: "Norse Atlantic", airlineCode: "N0", flightNumber: "N0 401",
      depart: "22:00", arrive: "12:15+1", duration: "8h 15m", stops: "Non-stop",
      cabin: "Economy", aircraft: "Boeing 787-9",
      price: 318, baseFare: 259, taxes: 59,
      seats: 6, baggage: "Carry-on only",
      tag: "cheap", tagLabel: "Cheapest",
      amenities: ["Entertainment", "USB Power"],
      loyaltyPartner: null,
      carbonKg: 389
    },

    // ── NYC → LONDON ─────────────────────────────────────────────────────
    {
      id: "flt_jfk_lhr_001",
      route: { from: "JFK", to: "LHR", fromCity: "New York", toCity: "London" },
      airline: "British Airways", airlineCode: "BA", flightNumber: "BA 178",
      depart: "22:00", arrive: "10:00+1", duration: "7h 00m", stops: "Non-stop",
      cabin: "Economy", aircraft: "Boeing 777-200ER",
      price: 542, baseFare: 449, taxes: 93,
      seats: 18, baggage: "1 checked bag included",
      tag: "best", tagLabel: "Best Value",
      amenities: ["Wi-Fi", "Meal Included", "Entertainment", "USB Power"],
      loyaltyPartner: "Avios",
      carbonKg: 378
    },
    {
      id: "flt_jfk_lhr_002",
      route: { from: "JFK", to: "LHR", fromCity: "New York", toCity: "London" },
      airline: "Virgin Atlantic", airlineCode: "VS", flightNumber: "VS 003",
      depart: "21:30", arrive: "09:25+1", duration: "6h 55m", stops: "Non-stop",
      cabin: "Economy", aircraft: "Airbus A350-1000",
      price: 589, baseFare: 495, taxes: 94,
      seats: 31, baggage: "1 checked bag included",
      tag: "fast", tagLabel: "Fastest",
      amenities: ["Wi-Fi", "Meal Included", "Entertainment", "USB Power", "Bar"],
      loyaltyPartner: "Flying Club",
      carbonKg: 362
    },
    {
      id: "flt_jfk_lhr_003",
      route: { from: "JFK", to: "LHR", fromCity: "New York", toCity: "London" },
      airline: "Level", airlineCode: "IB", flightNumber: "IB 4173",
      depart: "12:05", arrive: "01:45+1", duration: "7h 40m", stops: "1 stop (MAD)",
      cabin: "Economy", aircraft: "Airbus A330-200",
      price: 287, baseFare: 229, taxes: 58,
      seats: 4, baggage: "Carry-on only",
      tag: "cheap", tagLabel: "Cheapest",
      amenities: ["Entertainment"],
      loyaltyPartner: null,
      carbonKg: 445
    },

    // ── LONDON → DUBAI ───────────────────────────────────────────────────
    {
      id: "flt_lhr_dxb_001",
      route: { from: "LHR", to: "DXB", fromCity: "London", toCity: "Dubai" },
      airline: "Emirates", airlineCode: "EK", flightNumber: "EK 003",
      depart: "14:30", arrive: "00:45+1", duration: "7h 15m", stops: "Non-stop",
      cabin: "Economy", aircraft: "Airbus A380-800",
      price: 612, baseFare: 510, taxes: 102,
      seats: 42, baggage: "30kg checked bag included",
      tag: "best", tagLabel: "Best Value",
      amenities: ["Wi-Fi", "Meal Included", "Entertainment", "USB Power", "Bar"],
      loyaltyPartner: "Skywards",
      carbonKg: 521
    },
    {
      id: "flt_lhr_dxb_002",
      route: { from: "LHR", to: "DXB", fromCity: "London", toCity: "Dubai" },
      airline: "British Airways", airlineCode: "BA", flightNumber: "BA 107",
      depart: "21:45", arrive: "08:15+1", duration: "7h 30m", stops: "Non-stop",
      cabin: "Economy", aircraft: "Boeing 787-9",
      price: 578, baseFare: 479, taxes: 99,
      seats: 11, baggage: "1 checked bag included",
      tag: "fast", tagLabel: "Evening Departure",
      amenities: ["Wi-Fi", "Meal Included", "Entertainment", "USB Power"],
      loyaltyPartner: "Avios",
      carbonKg: 508
    },
    {
      id: "flt_lhr_dxb_003",
      route: { from: "LHR", to: "DXB", fromCity: "London", toCity: "Dubai" },
      airline: "flydubai", airlineCode: "FZ", flightNumber: "FZ 983",
      depart: "06:10", arrive: "16:55", duration: "9h 45m", stops: "1 stop (SOF)",
      cabin: "Economy", aircraft: "Boeing 737 MAX 8",
      price: 342, baseFare: 278, taxes: 64,
      seats: 9, baggage: "Carry-on only",
      tag: "cheap", tagLabel: "Cheapest",
      amenities: ["USB Power"],
      loyaltyPartner: null,
      carbonKg: 589
    },

    // ── LAHORE → LONDON ──────────────────────────────────────────────────
    {
      id: "flt_lhe_lhr_001",
      route: { from: "LHE", to: "LHR", fromCity: "Lahore", toCity: "London" },
      airline: "Pakistan International", airlineCode: "PK", flightNumber: "PK 785",
      depart: "02:30", arrive: "08:15", duration: "8h 45m", stops: "Non-stop",
      cabin: "Economy", aircraft: "Boeing 777-200LR",
      price: 698, baseFare: 580, taxes: 118,
      seats: 28, baggage: "30kg checked bag included",
      tag: "best", tagLabel: "Best Value",
      amenities: ["Meal Included", "Entertainment", "USB Power"],
      loyaltyPartner: "PIA Rewards",
      carbonKg: 634
    },
    {
      id: "flt_lhe_lhr_002",
      route: { from: "LHE", to: "LHR", fromCity: "Lahore", toCity: "London" },
      airline: "Qatar Airways", airlineCode: "QR", flightNumber: "QR 629",
      depart: "08:15", arrive: "18:40", duration: "10h 25m", stops: "1 stop (DOH)",
      cabin: "Economy", aircraft: "Airbus A350-900",
      price: 742, baseFare: 619, taxes: 123,
      seats: 16, baggage: "30kg checked bag included",
      tag: "fast", tagLabel: "Premium Experience",
      amenities: ["Wi-Fi", "Meal Included", "Entertainment", "USB Power", "Power Outlet"],
      loyaltyPartner: "Privilege Club",
      carbonKg: 712
    },
    {
      id: "flt_lhe_lhr_003",
      route: { from: "LHE", to: "LHR", fromCity: "Lahore", toCity: "London" },
      airline: "Turkish Airlines", airlineCode: "TK", flightNumber: "TK 714",
      depart: "16:45", arrive: "08:30+1", duration: "11h 45m", stops: "1 stop (IST)",
      cabin: "Economy", aircraft: "Boeing 777-300ER",
      price: 521, baseFare: 428, taxes: 93,
      seats: 7, baggage: "20kg checked bag included",
      tag: "cheap", tagLabel: "Cheapest",
      amenities: ["Meal Included", "Entertainment", "USB Power"],
      loyaltyPartner: "Miles&Smiles",
      carbonKg: 798
    },

    // ── DUBAI → SINGAPORE ────────────────────────────────────────────────
    {
      id: "flt_dxb_sin_001",
      route: { from: "DXB", to: "SIN", fromCity: "Dubai", toCity: "Singapore" },
      airline: "Emirates", airlineCode: "EK", flightNumber: "EK 352",
      depart: "08:30", arrive: "21:20", duration: "7h 50m", stops: "Non-stop",
      cabin: "Economy", aircraft: "Airbus A380-800",
      price: 589, baseFare: 489, taxes: 100,
      seats: 55, baggage: "30kg checked bag included",
      tag: "best", tagLabel: "Best Value",
      amenities: ["Wi-Fi", "Meal Included", "Entertainment", "USB Power", "Bar"],
      loyaltyPartner: "Skywards",
      carbonKg: 578
    },
    {
      id: "flt_dxb_sin_002",
      route: { from: "DXB", to: "SIN", fromCity: "Dubai", toCity: "Singapore" },
      airline: "Singapore Airlines", airlineCode: "SQ", flightNumber: "SQ 497",
      depart: "22:15", arrive: "11:30+1", duration: "8h 15m", stops: "Non-stop",
      cabin: "Economy", aircraft: "Boeing 787-10",
      price: 634, baseFare: 529, taxes: 105,
      seats: 19, baggage: "30kg checked bag included",
      tag: "fast", tagLabel: "5-Star Airline",
      amenities: ["Wi-Fi", "Meal Included", "Entertainment", "USB Power", "Power Outlet"],
      loyaltyPartner: "KrisFlyer",
      carbonKg: 561
    },
    {
      id: "flt_dxb_sin_003",
      route: { from: "DXB", to: "SIN", fromCity: "Dubai", toCity: "Singapore" },
      airline: "Air Arabia", airlineCode: "G9", flightNumber: "G9 512",
      depart: "14:40", arrive: "05:30+1", duration: "9h 50m", stops: "1 stop (AUH)",
      cabin: "Economy", aircraft: "Airbus A320neo",
      price: 312, baseFare: 249, taxes: 63,
      seats: 3, baggage: "Carry-on only",
      tag: "cheap", tagLabel: "Cheapest",
      amenities: ["USB Power"],
      loyaltyPartner: null,
      carbonKg: 645
    },

    // ── PARIS → NEW YORK ─────────────────────────────────────────────────
    {
      id: "flt_cdg_jfk_001",
      route: { from: "CDG", to: "JFK", fromCity: "Paris", toCity: "New York" },
      airline: "Air France", airlineCode: "AF", flightNumber: "AF 007",
      depart: "11:15", arrive: "13:30", duration: "8h 15m", stops: "Non-stop",
      cabin: "Economy", aircraft: "Boeing 777-300ER",
      price: 498, baseFare: 409, taxes: 89,
      seats: 21, baggage: "1 checked bag included",
      tag: "best", tagLabel: "Best Value",
      amenities: ["Wi-Fi", "Meal Included", "Entertainment", "USB Power"],
      loyaltyPartner: "Flying Blue",
      carbonKg: 401
    },
    {
      id: "flt_cdg_jfk_002",
      route: { from: "CDG", to: "JFK", fromCity: "Paris", toCity: "New York" },
      airline: "United Airlines", airlineCode: "UA", flightNumber: "UA 976",
      depart: "13:45", arrive: "16:10", duration: "8h 25m", stops: "Non-stop",
      cabin: "Economy", aircraft: "Boeing 767-400ER",
      price: 544, baseFare: 449, taxes: 95,
      seats: 8, baggage: "1 checked bag included",
      tag: "fast", tagLabel: "Afternoon Departure",
      amenities: ["Wi-Fi", "Meal Included", "Entertainment", "USB Power"],
      loyaltyPartner: "MileagePlus",
      carbonKg: 418
    },
    {
      id: "flt_cdg_jfk_003",
      route: { from: "CDG", to: "JFK", fromCity: "Paris", toCity: "New York" },
      airline: "Corsair", airlineCode: "SS", flightNumber: "SS 732",
      depart: "08:00", arrive: "10:45", duration: "9h 45m", stops: "1 stop (FDF)",
      cabin: "Economy", aircraft: "Airbus A330-300",
      price: 279, baseFare: 219, taxes: 60,
      seats: 5, baggage: "Carry-on only",
      tag: "cheap", tagLabel: "Cheapest",
      amenities: ["Entertainment"],
      loyaltyPartner: null,
      carbonKg: 489
    },

    // ── LONDON → NEW YORK ────────────────────────────────────────────────
    {
      id: "flt_lhr_jfk_001",
      route: { from: "LHR", to: "JFK", fromCity: "London", toCity: "New York" },
      airline: "British Airways", airlineCode: "BA", flightNumber: "BA 177",
      depart: "11:30", arrive: "14:25", duration: "8h 55m", stops: "Non-stop",
      cabin: "Economy", aircraft: "Boeing 747-400",
      price: 529, baseFare: 438, taxes: 91,
      seats: 33, baggage: "1 checked bag included",
      tag: "best", tagLabel: "Best Value",
      amenities: ["Wi-Fi", "Meal Included", "Entertainment", "USB Power"],
      loyaltyPartner: "Avios",
      carbonKg: 388
    },
    {
      id: "flt_lhr_jfk_002",
      route: { from: "LHR", to: "JFK", fromCity: "London", toCity: "New York" },
      airline: "American Airlines", airlineCode: "AA", flightNumber: "AA 108",
      depart: "16:20", arrive: "19:10", duration: "8h 50m", stops: "Non-stop",
      cabin: "Economy", aircraft: "Boeing 777-200ER",
      price: 561, baseFare: 465, taxes: 96,
      seats: 12, baggage: "1 checked bag included",
      tag: "fast", tagLabel: "Evening Arrival",
      amenities: ["Wi-Fi", "Meal Included", "Entertainment", "USB Power"],
      loyaltyPartner: "AAdvantage",
      carbonKg: 374
    },
    {
      id: "flt_lhr_jfk_003",
      route: { from: "LHR", to: "JFK", fromCity: "London", toCity: "New York" },
      airline: "Aer Lingus", airlineCode: "EI", flightNumber: "EI 104",
      depart: "09:45", arrive: "13:20", duration: "9h 35m", stops: "1 stop (DUB)",
      cabin: "Economy", aircraft: "Airbus A330-200",
      price: 341, baseFare: 278, taxes: 63,
      seats: 17, baggage: "Carry-on only",
      tag: "cheap", tagLabel: "Cheapest",
      amenities: ["Meal Included", "Entertainment"],
      loyaltyPartner: "AerClub",
      carbonKg: 441
    },

    // ── SINGAPORE → SYDNEY ───────────────────────────────────────────────
    {
      id: "flt_sin_syd_001",
      route: { from: "SIN", to: "SYD", fromCity: "Singapore", toCity: "Sydney" },
      airline: "Singapore Airlines", airlineCode: "SQ", flightNumber: "SQ 221",
      depart: "21:45", arrive: "08:55+1", duration: "8h 10m", stops: "Non-stop",
      cabin: "Economy", aircraft: "Airbus A380-800",
      price: 621, baseFare: 519, taxes: 102,
      seats: 38, baggage: "30kg checked bag included",
      tag: "best", tagLabel: "Best Value",
      amenities: ["Wi-Fi", "Meal Included", "Entertainment", "USB Power", "Power Outlet"],
      loyaltyPartner: "KrisFlyer",
      carbonKg: 512
    },
    {
      id: "flt_sin_syd_002",
      route: { from: "SIN", to: "SYD", fromCity: "Singapore", toCity: "Sydney" },
      airline: "Qantas", airlineCode: "QF", flightNumber: "QF 002",
      depart: "23:55", arrive: "11:20+1", duration: "8h 25m", stops: "Non-stop",
      cabin: "Economy", aircraft: "Airbus A380-800",
      price: 658, baseFare: 549, taxes: 109,
      seats: 24, baggage: "30kg checked bag included",
      tag: "fast", tagLabel: "Premium Carrier",
      amenities: ["Wi-Fi", "Meal Included", "Entertainment", "USB Power", "Bar"],
      loyaltyPartner: "Qantas Frequent Flyer",
      carbonKg: 498
    },
    {
      id: "flt_sin_syd_003",
      route: { from: "SIN", to: "SYD", fromCity: "Singapore", toCity: "Sydney" },
      airline: "Jetstar Asia", airlineCode: "3K", flightNumber: "3K 717",
      depart: "07:30", arrive: "18:55", duration: "8h 25m", stops: "Non-stop",
      cabin: "Economy", aircraft: "Airbus A320",
      price: 287, baseFare: 229, taxes: 58,
      seats: 5, baggage: "Carry-on only",
      tag: "cheap", tagLabel: "Cheapest",
      amenities: ["USB Power"],
      loyaltyPartner: null,
      carbonKg: 534
    },

    // ── ISTANBUL → PARIS ─────────────────────────────────────────────────
    {
      id: "flt_ist_cdg_001",
      route: { from: "IST", to: "CDG", fromCity: "Istanbul", toCity: "Paris" },
      airline: "Turkish Airlines", airlineCode: "TK", flightNumber: "TK 1827",
      depart: "07:30", arrive: "10:15", duration: "3h 45m", stops: "Non-stop",
      cabin: "Economy", aircraft: "Airbus A321neo",
      price: 219, baseFare: 178, taxes: 41,
      seats: 44, baggage: "20kg checked bag included",
      tag: "best", tagLabel: "Best Value",
      amenities: ["Meal Included", "Entertainment", "USB Power"],
      loyaltyPartner: "Miles&Smiles",
      carbonKg: 198
    },
    {
      id: "flt_ist_cdg_002",
      route: { from: "IST", to: "CDG", fromCity: "Istanbul", toCity: "Paris" },
      airline: "Air France", airlineCode: "AF", flightNumber: "AF 1783",
      depart: "14:20", arrive: "17:05", duration: "3h 45m", stops: "Non-stop",
      cabin: "Economy", aircraft: "Airbus A320",
      price: 248, baseFare: 204, taxes: 44,
      seats: 12, baggage: "1 checked bag included",
      tag: "fast", tagLabel: "Afternoon Flight",
      amenities: ["Meal Included", "Entertainment"],
      loyaltyPartner: "Flying Blue",
      carbonKg: 195
    },
    {
      id: "flt_ist_cdg_003",
      route: { from: "IST", to: "CDG", fromCity: "Istanbul", toCity: "Paris" },
      airline: "Pegasus", airlineCode: "PC", flightNumber: "PC 1204",
      depart: "05:45", arrive: "08:40", duration: "3h 55m", stops: "Non-stop",
      cabin: "Economy", aircraft: "Boeing 737-800",
      price: 138, baseFare: 108, taxes: 30,
      seats: 7, baggage: "Carry-on only",
      tag: "cheap", tagLabel: "Cheapest",
      amenities: [],
      loyaltyPartner: null,
      carbonKg: 201
    },
  ],

  // ── HOTELS ──────────────────────────────────────────────────────────────
  // 3 options per destination: luxury, mid-range, budget-boutique
  // Fields mirror Booking.com / Expedia API response shapes

  hotels: [

    // ── PARIS ────────────────────────────────────────────────────────────
    {
      id: "htl_paris_001",
      destination: "Paris",
      name: "Hôtel Le Burgundy", stars: 5, area: "Opéra / Madeleine",
      address: "6-8 Rue Duphot, 75001 Paris",
      pricePerNight: 580, currency: "USD",
      rating: 9.4, reviewCount: "2,847",
      reviewLabel: "Exceptional",
      highlights: ["Rooftop pool with Eiffel Tower views", "Michelin-starred restaurant", "30-second walk to Madeleine"],
      amenities: ["Pool", "Spa", "Restaurant", "Bar", "Concierge", "Gym", "Room Service", "Valet"],
      roomTypes: [
        { name: "Deluxe Room", size: "32m²", price: 580, cancellation: "Free cancellation until 48h before" },
        { name: "Superior Room", size: "40m²", price: 720, cancellation: "Free cancellation until 48h before" },
        { name: "Junior Suite", size: "65m²", price: 1200, cancellation: "Non-refundable" }
      ],
      checkIn: "15:00", checkOut: "12:00",
      tag: "luxury", tagLabel: "Luxury Pick",
      lateCheckin: true, earlyCheckin: false
    },
    {
      id: "htl_paris_002",
      destination: "Paris",
      name: "Hôtel des Grands Boulevards", stars: 4, area: "Grands Boulevards",
      address: "17 Boulevard Poissonnière, 75002 Paris",
      pricePerNight: 280, currency: "USD",
      rating: 9.1, reviewCount: "1,542",
      reviewLabel: "Superb",
      highlights: ["Buzzing rooftop bar", "5 min walk to Pompidou Centre", "Award-winning Italian restaurant"],
      amenities: ["Restaurant", "Bar", "Concierge", "Room Service", "Gym"],
      roomTypes: [
        { name: "Classic Room", size: "22m²", price: 280, cancellation: "Free cancellation until 24h before" },
        { name: "Superior Room", size: "28m²", price: 340, cancellation: "Free cancellation until 24h before" },
        { name: "Suite", size: "52m²", price: 620, cancellation: "Non-refundable" }
      ],
      checkIn: "14:00", checkOut: "11:00",
      tag: "best", tagLabel: "Best Value",
      lateCheckin: true, earlyCheckin: false
    },
    {
      id: "htl_paris_003",
      destination: "Paris",
      name: "Generator Paris", stars: 3, area: "Canal Saint-Martin",
      address: "9-11 Place du Colonel Fabien, 75010 Paris",
      pricePerNight: 89, currency: "USD",
      rating: 8.2, reviewCount: "6,234",
      reviewLabel: "Very Good",
      highlights: ["Iconic rooftop terrace", "Trendy Canal Saint-Martin neighbourhood", "Budget-friendly"],
      amenities: ["Bar", "Cafe", "Luggage Storage", "24h Reception"],
      roomTypes: [
        { name: "Private Double", size: "16m²", price: 89, cancellation: "Free cancellation until 24h before" },
        { name: "Private Twin", size: "16m²", price: 99, cancellation: "Free cancellation until 24h before" }
      ],
      checkIn: "14:00", checkOut: "10:00",
      tag: "budget", tagLabel: "Budget Pick",
      lateCheckin: true, earlyCheckin: false
    },

    // ── LONDON ───────────────────────────────────────────────────────────
    {
      id: "htl_london_001",
      destination: "London",
      name: "The Savoy", stars: 5, area: "Strand / Covent Garden",
      address: "Strand, London WC2R 0EZ",
      pricePerNight: 720, currency: "USD",
      rating: 9.5, reviewCount: "3,102",
      reviewLabel: "Exceptional",
      highlights: ["Legendary Thames-side landmark since 1889", "Gordon Ramsay restaurant", "10 min walk to Trafalgar Square"],
      amenities: ["Pool", "Spa", "Restaurant", "Bar", "Concierge", "Gym", "Room Service", "Butler Service"],
      roomTypes: [
        { name: "Classic Room", size: "30m²", price: 720, cancellation: "Free cancellation until 72h before" },
        { name: "Superior Room", size: "38m²", price: 890, cancellation: "Free cancellation until 72h before" },
        { name: "River View Suite", size: "80m²", price: 1950, cancellation: "Non-refundable" }
      ],
      checkIn: "15:00", checkOut: "12:00",
      tag: "luxury", tagLabel: "Iconic Luxury",
      lateCheckin: true, earlyCheckin: true
    },
    {
      id: "htl_london_002",
      destination: "London",
      name: "citizenM Tower of London", stars: 4, area: "Tower Hill / City",
      address: "40 Trinity Square, London EC3N 4DJ",
      pricePerNight: 189, currency: "USD",
      rating: 9.0, reviewCount: "4,891",
      reviewLabel: "Superb",
      highlights: ["Walking distance to Tower of London", "Stunning rooftop bar views of the Thames", "Award-winning design hotel"],
      amenities: ["Bar", "Cafe", "Gym", "24h Canteen", "Rooftop Terrace"],
      roomTypes: [
        { name: "MoodRoom", size: "14m²", price: 189, cancellation: "Free cancellation until 24h before" }
      ],
      checkIn: "14:00", checkOut: "12:00",
      tag: "best", tagLabel: "Best Value",
      lateCheckin: true, earlyCheckin: false
    },
    {
      id: "htl_london_003",
      destination: "London",
      name: "Point A Hotel Shoreditch", stars: 3, area: "Shoreditch / East London",
      address: "199 Bishopsgate, London EC2M 3TY",
      pricePerNight: 98, currency: "USD",
      rating: 8.4, reviewCount: "2,341",
      reviewLabel: "Very Good",
      highlights: ["Heart of Shoreditch nightlife and restaurants", "Step from Liverpool St. station", "Smart budget design"],
      amenities: ["Bar", "24h Reception", "Luggage Storage"],
      roomTypes: [
        { name: "Point Room", size: "12m²", price: 98, cancellation: "Free cancellation until 24h before" },
        { name: "Bigger Room", size: "16m²", price: 119, cancellation: "Free cancellation until 24h before" }
      ],
      checkIn: "14:00", checkOut: "11:00",
      tag: "budget", tagLabel: "Budget Pick",
      lateCheckin: true, earlyCheckin: false
    },

    // ── DUBAI ────────────────────────────────────────────────────────────
    {
      id: "htl_dubai_001",
      destination: "Dubai",
      name: "Atlantis The Palm", stars: 5, area: "Palm Jumeirah",
      address: "Crescent Road, The Palm, Dubai",
      pricePerNight: 490, currency: "USD",
      rating: 9.2, reviewCount: "8,341",
      reviewLabel: "Exceptional",
      highlights: ["Aquaventure Waterpark included", "Private beach", "Over 20 restaurants onsite"],
      amenities: ["Waterpark", "Beach", "Pool", "Spa", "Multiple Restaurants", "Bar", "Gym", "Kids Club"],
      roomTypes: [
        { name: "Ocean Room", size: "42m²", price: 490, cancellation: "Free cancellation until 48h before" },
        { name: "Terrace Room", size: "52m²", price: 620, cancellation: "Free cancellation until 48h before" },
        { name: "Palm Suite", size: "140m²", price: 1800, cancellation: "Non-refundable" }
      ],
      checkIn: "15:00", checkOut: "12:00",
      tag: "luxury", tagLabel: "Iconic Luxury",
      lateCheckin: true, earlyCheckin: false
    },
    {
      id: "htl_dubai_002",
      destination: "Dubai",
      name: "Rove Downtown Dubai", stars: 3, area: "Downtown Dubai",
      address: "Sheikh Mohammed Bin Rashid Blvd, Dubai",
      pricePerNight: 145, currency: "USD",
      rating: 8.9, reviewCount: "5,621",
      reviewLabel: "Superb",
      highlights: ["Walking distance to Burj Khalifa & Dubai Mall", "Rooftop pool with skyline views", "Best value in Downtown"],
      amenities: ["Pool", "Gym", "Restaurant", "Bar", "24h Deli"],
      roomTypes: [
        { name: "Cozy Room", size: "22m²", price: 145, cancellation: "Free cancellation until 24h before" },
        { name: "Roving Room", size: "26m²", price: 175, cancellation: "Free cancellation until 24h before" }
      ],
      checkIn: "15:00", checkOut: "12:00",
      tag: "best", tagLabel: "Best Value",
      lateCheckin: true, earlyCheckin: false
    },
    {
      id: "htl_dubai_003",
      destination: "Dubai",
      name: "ibis Dubai Mall of the Emirates", stars: 2, area: "Al Barsha",
      address: "Sheikh Zayed Road, Al Barsha 1, Dubai",
      pricePerNight: 72, currency: "USD",
      rating: 8.0, reviewCount: "3,441",
      reviewLabel: "Very Good",
      highlights: ["Connected to Mall of the Emirates via covered walkway", "Easy Metro access", "Clean and modern"],
      amenities: ["Restaurant", "Bar", "24h Reception", "Gym"],
      roomTypes: [
        { name: "Standard Room", size: "17m²", price: 72, cancellation: "Free cancellation until 24h before" }
      ],
      checkIn: "14:00", checkOut: "12:00",
      tag: "budget", tagLabel: "Budget Pick",
      lateCheckin: true, earlyCheckin: false
    },

    // ── SINGAPORE ────────────────────────────────────────────────────────
    {
      id: "htl_singapore_001",
      destination: "Singapore",
      name: "Marina Bay Sands", stars: 5, area: "Marina Bay",
      address: "10 Bayfront Avenue, Singapore 018956",
      pricePerNight: 620, currency: "USD",
      rating: 9.3, reviewCount: "12,441",
      reviewLabel: "Exceptional",
      highlights: ["Iconic infinity pool on 57th floor", "Direct access to Shoppes at Marina Bay Sands", "Panoramic city and sea views"],
      amenities: ["Infinity Pool", "Casino", "Spa", "Multiple Restaurants", "Gym", "Concierge", "Butler Service"],
      roomTypes: [
        { name: "Deluxe Room", size: "42m²", price: 620, cancellation: "Free cancellation until 48h before" },
        { name: "Premier Room", size: "52m²", price: 780, cancellation: "Free cancellation until 48h before" },
        { name: "Sands Suite", size: "120m²", price: 2100, cancellation: "Non-refundable" }
      ],
      checkIn: "15:00", checkOut: "11:00",
      tag: "luxury", tagLabel: "Iconic Luxury",
      lateCheckin: true, earlyCheckin: false
    },
    {
      id: "htl_singapore_002",
      destination: "Singapore",
      name: "Naumi Hotel Singapore", stars: 4, area: "City Hall / Civic District",
      address: "41 Seah Street, Singapore 188396",
      pricePerNight: 225, currency: "USD",
      rating: 9.1, reviewCount: "1,987",
      reviewLabel: "Superb",
      highlights: ["Rooftop pool with infinity edge", "Walk to Raffles Hotel and National Museum", "Boutique luxury at mid-range price"],
      amenities: ["Rooftop Pool", "Restaurant", "Bar", "Gym", "Concierge"],
      roomTypes: [
        { name: "Deluxe Room", size: "28m²", price: 225, cancellation: "Free cancellation until 24h before" },
        { name: "Grand Deluxe", size: "36m²", price: 290, cancellation: "Free cancellation until 24h before" }
      ],
      checkIn: "15:00", checkOut: "12:00",
      tag: "best", tagLabel: "Best Value",
      lateCheckin: true, earlyCheckin: false
    },
    {
      id: "htl_singapore_003",
      destination: "Singapore",
      name: "The Pod @ Beach Road", stars: 3, area: "Bugis / Arab Street",
      address: "289 Beach Road, Singapore 199554",
      pricePerNight: 78, currency: "USD",
      rating: 8.5, reviewCount: "3,128",
      reviewLabel: "Very Good",
      highlights: ["Unique pod-style design rooms", "Great MRT access", "Vibrant Arab Street food scene steps away"],
      amenities: ["Cafe", "Luggage Storage", "24h Reception", "Laundry"],
      roomTypes: [
        { name: "Cosy Pod", size: "8m²", price: 78, cancellation: "Free cancellation until 24h before" },
        { name: "Private Room", size: "16m²", price: 112, cancellation: "Free cancellation until 24h before" }
      ],
      checkIn: "14:00", checkOut: "11:00",
      tag: "budget", tagLabel: "Budget Pick",
      lateCheckin: true, earlyCheckin: false
    },

    // ── NEW YORK ─────────────────────────────────────────────────────────
    {
      id: "htl_nyc_001",
      destination: "New York",
      name: "The Plaza Hotel", stars: 5, area: "Midtown / Central Park South",
      address: "768 5th Ave, New York, NY 10019",
      pricePerNight: 890, currency: "USD",
      rating: 9.4, reviewCount: "4,201",
      reviewLabel: "Exceptional",
      highlights: ["Legendary landmark on Central Park", "Michelin-star dining at The Palm Court", "Walking distance to MoMA"],
      amenities: ["Spa", "Fitness Center", "Multiple Restaurants", "Bar", "Concierge", "Butler Service", "Room Service"],
      roomTypes: [
        { name: "Deluxe Room", size: "38m²", price: 890, cancellation: "Free cancellation until 72h before" },
        { name: "Park View Suite", size: "90m²", price: 2200, cancellation: "Non-refundable" }
      ],
      checkIn: "15:00", checkOut: "12:00",
      tag: "luxury", tagLabel: "Iconic Luxury",
      lateCheckin: true, earlyCheckin: true
    },
    {
      id: "htl_nyc_002",
      destination: "New York",
      name: "Arlo NoMad", stars: 4, area: "NoMad / Midtown South",
      address: "11 East 31st Street, New York, NY 10016",
      pricePerNight: 229, currency: "USD",
      rating: 8.8, reviewCount: "2,918",
      reviewLabel: "Superb",
      highlights: ["Stunning rooftop bar with Empire State Building views", "Walking distance to Madison Square Garden", "Trendy design hotel"],
      amenities: ["Rooftop Bar", "Restaurant", "Gym", "24h Concierge"],
      roomTypes: [
        { name: "Cozy Room", size: "19m²", price: 229, cancellation: "Free cancellation until 24h before" },
        { name: "Roomy Room", size: "26m²", price: 289, cancellation: "Free cancellation until 24h before" }
      ],
      checkIn: "15:00", checkOut: "12:00",
      tag: "best", tagLabel: "Best Value",
      lateCheckin: true, earlyCheckin: false
    },
    {
      id: "htl_nyc_003",
      destination: "New York",
      name: "Pod 51 Hotel", stars: 2, area: "Midtown East",
      address: "230 East 51st Street, New York, NY 10022",
      pricePerNight: 119, currency: "USD",
      rating: 8.1, reviewCount: "5,421",
      reviewLabel: "Very Good",
      highlights: ["Walking distance to UN and Grand Central", "Compact but smartly designed", "Excellent transit access"],
      amenities: ["Cafe", "Rooftop Deck", "Luggage Storage", "24h Reception"],
      roomTypes: [
        { name: "Pod Bunk", size: "8m²", price: 119, cancellation: "Free cancellation until 24h before" },
        { name: "Pod Queen", size: "14m²", price: 149, cancellation: "Free cancellation until 24h before" }
      ],
      checkIn: "15:00", checkOut: "12:00",
      tag: "budget", tagLabel: "Budget Pick",
      lateCheckin: true, earlyCheckin: false
    },
  ],

  // ── ROUTE ALIASES ───────────────────────────────────────────────────────
  // Maps city names / common strings to IATA codes for fuzzy matching
  routeAliases: {
    "new york": "JFK", "nyc": "JFK", "jfk": "JFK", "new york city": "JFK",
    "paris": "CDG", "cdg": "CDG",
    "london": "LHR", "lhr": "LHR", "heathrow": "LHR",
    "dubai": "DXB", "dxb": "DXB",
    "lahore": "LHE", "lhe": "LHE",
    "singapore": "SIN", "sin": "SIN",
    "sydney": "SYD", "syd": "SYD",
    "istanbul": "IST", "ist": "IST",
    "tokyo": "NRT", "nrt": "NRT",
    "bangkok": "BKK", "bkk": "BKK",
  },

  // ── DESTINATION ALIASES ─────────────────────────────────────────────────
  destAliases: {
    "CDG": "Paris", "JFK": "New York", "LHR": "London", "DXB": "Dubai",
    "LHE": "Lahore", "SIN": "Singapore", "SYD": "Sydney", "IST": "Istanbul",
    "NRT": "Tokyo", "BKK": "Bangkok",
  }
};
