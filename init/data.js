const sampleListings = [
  // ── TRENDING ──
  {
    title: "Beachfront Paradise in Cancun",
    description: "Step directly onto the sandy beach from your private deck. This stunning beachfront villa offers breathtaking ocean views, a private pool, and world-class amenities. Perfect for families or groups seeking a luxury coastal escape.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800" },
    price: 20000,
    location: "Cancun",
    country: "Mexico",
    category: "Trending",
    geometry: { type: "Point", coordinates: [-86.8515, 21.1619] }
  },
  {
    title: "Safari Lodge in the Serengeti",
    description: "Experience the magic of the African wilderness from this exclusive safari lodge. Wake up to the sounds of wildlife, enjoy guided game drives, and fall asleep under a canopy of stars. A once-in-a-lifetime adventure awaits.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800" },
    price: 40000,
    location: "Serengeti",
    country: "Tanzania",
    category: "Trending",
    geometry: { type: "Point", coordinates: [34.8333, -2.3333] }
  },
  {
    title: "Secluded Beach House in Costa Rica",
    description: "Nestled between lush jungle and a pristine private beach, this tropical hideaway is the ultimate escape. Enjoy surfing, snorkeling, and incredible biodiversity right at your doorstep.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800" },
    price: 18000,
    location: "Manuel Antonio",
    country: "Costa Rica",
    category: "Trending",
    geometry: { type: "Point", coordinates: [-84.1541, 9.3938] }
  },

  // ── ROOMS ──
  {
    title: "Cozy Studio in the Heart of Paris",
    description: "A beautifully designed studio apartment just minutes from the Eiffel Tower. Perfect for solo travelers or couples exploring the City of Light. Enjoy authentic Parisian charm with all modern comforts.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800" },
    price: 8000,
    location: "Paris",
    country: "France",
    category: "Rooms",
    geometry: { type: "Point", coordinates: [2.3522, 48.8566] }
  },
  {
    title: "Stylish Room in Bali Villa",
    description: "A private room in a stunning Balinese villa surrounded by rice terraces. Enjoy access to a shared infinity pool, daily breakfast, and a serene tropical garden. The perfect base for exploring Ubud.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=800" },
    price: 4500,
    location: "Ubud",
    country: "Indonesia",
    category: "Rooms",
    geometry: { type: "Point", coordinates: [115.2625, -8.5069] }
  },

  // ── ICONIC CITIES ──
  {
    title: "Modern Loft in Downtown Manhattan",
    description: "Stay in the heart of New York City in this sleek, modern loft. Floor-to-ceiling windows offer stunning skyline views. Steps away from Times Square, Central Park, and world-class dining.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800" },
    price: 22000,
    location: "New York City",
    country: "United States",
    category: "Iconic Cities",
    geometry: { type: "Point", coordinates: [-74.0060, 40.7128] }
  },
  {
    title: "Modern Apartment in Tokyo",
    description: "Experience Tokyo like a local from this centrally located apartment in Shinjuku. Walking distance to major attractions, restaurants, and the famous Shinjuku Gyoen garden. Minimalist design meets ultimate comfort.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?w=800" },
    price: 15000,
    location: "Tokyo",
    country: "Japan",
    category: "Iconic Cities",
    geometry: { type: "Point", coordinates: [139.6917, 35.6895] }
  },
  {
    title: "Luxury Penthouse in Los Angeles",
    description: "Perched atop a luxury tower in Beverly Hills, this stunning penthouse offers panoramic views of the LA skyline and Pacific Ocean. A rooftop terrace, private elevator, and designer interiors define this extraordinary space.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?w=800" },
    price: 45000,
    location: "Los Angeles",
    country: "United States",
    category: "Iconic Cities",
    geometry: { type: "Point", coordinates: [-118.2437, 34.0522] }
  },

  // ── MOUNTAINS ──
  {
    title: "Mountain Retreat in Aspen",
    description: "A luxurious mountain cabin surrounded by snow-capped peaks and pine forests. World-class skiing is right outside your door in winter, while summer brings incredible hiking and mountain biking trails.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800" },
    price: 25000,
    location: "Aspen",
    country: "United States",
    category: "Mountains",
    geometry: { type: "Point", coordinates: [-106.8175, 39.1911] }
  },
  {
    title: "Ski-In Ski-Out Chalet in the Swiss Alps",
    description: "This dream alpine chalet sits directly on the piste in Verbier, one of Europe's finest ski resorts. Cozy up by the fireplace after a day on the slopes and enjoy stunning panoramic mountain views from every room.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?w=800" },
    price: 35000,
    location: "Verbier",
    country: "Switzerland",
    category: "Mountains",
    geometry: { type: "Point", coordinates: [7.2272, 46.0958] }
  },

  // ── CASTLES ──
  {
    title: "Historic Villa in Tuscany",
    description: "A beautifully restored 16th-century villa set among olive groves and vineyards in the rolling Tuscan hills. Enjoy private wine tastings, a heated pool, and breathtaking countryside views that look like a painting.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800" },
    price: 30000,
    location: "Florence",
    country: "Italy",
    category: "Castles",
    geometry: { type: "Point", coordinates: [11.2558, 43.7696] }
  },
  {
    title: "Royal Castle Estate in Scotland",
    description: "Live like Scottish royalty in this magnificent 14th-century castle surrounded by the rugged Highlands. Complete with a grand hall, four-poster beds, and a private loch, this is a truly unforgettable stay.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?w=800" },
    price: 50000,
    location: "Scottish Highlands",
    country: "United Kingdom",
    category: "Castles",
    geometry: { type: "Point", coordinates: [-4.2026, 57.4596] }
  },

  // ── AMAZING POOLS ──
  {
    title: "Luxury Villa in the Maldives",
    description: "An overwater villa perched above a turquoise lagoon with direct access to a vibrant coral reef. Glass floors reveal the ocean below, while your private infinity pool merges seamlessly with the horizon.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800" },
    price: 75000,
    location: "North Male Atoll",
    country: "Maldives",
    category: "Amazing Pools",
    geometry: { type: "Point", coordinates: [73.5093, 4.1755] }
  },
  {
    title: "Private Island Retreat in Fiji",
    description: "Have an entire tropical island to yourself. This exclusive private island retreat features a stunning infinity pool, powdery white sand beaches, and a dedicated staff including a private chef and butler.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?w=800" },
    price: 90000,
    location: "Mamanuca Islands",
    country: "Fiji",
    category: "Amazing Pools",
    geometry: { type: "Point", coordinates: [177.0832, -17.6509] }
  },

  // ── CAMPING ──
  {
    title: "Secluded Treehouse in Portland",
    description: "Perched among ancient Douglas fir trees, this magical treehouse offers a unique forest escape just 30 minutes from Portland. Fall asleep to birdsong and wake up to misty mountain views.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800" },
    price: 9000,
    location: "Portland",
    country: "United States",
    category: "Camping",
    geometry: { type: "Point", coordinates: [-122.6765, 45.5231] }
  },
  {
    title: "Lakeside Cabin at Lake Tahoe",
    description: "A charming rustic cabin right on the shores of crystal-clear Lake Tahoe. Perfect for kayaking, fishing, and hiking in summer, or snowshoeing in winter. A true four-seasons outdoor paradise.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800" },
    price: 12000,
    location: "Lake Tahoe",
    country: "United States",
    category: "Camping",
    geometry: { type: "Point", coordinates: [-120.0324, 39.0968] }
  },
  {
    title: "Eco Treehouse in Costa Rica",
    description: "Reconnect with nature in this sustainable treehouse deep in the Costa Rican rainforest. Solar powered, surrounded by howler monkeys and toucans, with a breathtaking canopy walkway right outside your door.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?w=800" },
    price: 7500,
    location: "Monteverde",
    country: "Costa Rica",
    category: "Camping",
    geometry: { type: "Point", coordinates: [-84.8282, 10.3071] }
  },

  // ── FARMS ──
  {
    title: "Charming Cottage in the Cotswolds",
    description: "A quintessentially English stone cottage nestled in the rolling hills of the Cotswolds. Wake up to the smell of fresh bread, explore picturesque villages, and enjoy long walks through golden countryside.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?w=800" },
    price: 11000,
    location: "Cotswolds",
    country: "United Kingdom",
    category: "Farms",
    geometry: { type: "Point", coordinates: [-1.8433, 51.8330] }
  },
  {
    title: "Vineyard Estate in Bordeaux",
    description: "Stay in a charming farmhouse at the heart of a working vineyard in the Bordeaux wine region. Enjoy private wine tastings, harvest season tours, and gourmet farm-to-table dinners under the stars.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800" },
    price: 16000,
    location: "Bordeaux",
    country: "France",
    category: "Farms",
    geometry: { type: "Point", coordinates: [-0.5792, 44.8378] }
  },

  // ── ARCTIC ──
  {
    title: "Glass Igloo in Finnish Lapland",
    description: "Sleep under the Northern Lights in a heated glass igloo in the heart of Finnish Lapland. Fall asleep watching the aurora borealis dance overhead. Reindeer safaris and husky rides available just outside your door.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800" },
    price: 28000,
    location: "Rovaniemi",
    country: "Finland",
    category: "Arctic",
    geometry: { type: "Point", coordinates: [25.7294, 66.5039] }
  },

  // ── DOMES ──
  {
    title: "Geodesic Dome in the Atacama Desert",
    description: "Stargaze from your bed in this stunning geodesic dome in the world's clearest skies. The Atacama Desert offers unparalleled astronomical views, unique landscapes, and complete silence. A truly otherworldly experience.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800" },
    price: 22000,
    location: "San Pedro de Atacama",
    country: "Chile",
    category: "Domes",
    geometry: { type: "Point", coordinates: [-68.1993, -22.9087] }
  },

  // ── BOATS ──
  {
    title: "Luxury Houseboat in Amsterdam",
    description: "Experience Amsterdam like never before from this beautifully designed houseboat moored in one of the city's iconic canals. Enjoy canal views from your floating living room, steps from world-class museums and restaurants.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800" },
    price: 13000,
    location: "Amsterdam",
    country: "Netherlands",
    category: "Boats",
    geometry: { type: "Point", coordinates: [4.9041, 52.3676] }
  },
];

module.exports = { data: sampleListings };