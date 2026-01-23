const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description: "Escape to this charming beachfront cottage for a relaxing getaway.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b" },
    price: 15000,
    location: "Malibu",
    country: "United States",
    category: "Amazing Pools",
    geometry: {
    type: "Point",
    coordinates: [77.2090, 28.6139]
},

  },
  {
    title: "Modern Loft in Downtown",
    description: "Stay in the heart of the city in this stylish loft apartment.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470" },
    price: 12000,
    location: "New York City",
    country: "United States",
    category: "Iconic Cities",
    geometry: {
    type: "Point",
    coordinates: [77.2090, 28.6139]
},
  },
  {
    title: "Mountain Retreat",
    description: "Peaceful mountain cabin surrounded by nature.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d" },
    price: 10000,
    location: "Aspen",
    country: "United States",
    category: "Mountains",
    geometry: {
    type: "Point",
    coordinates: [77.2090, 28.6139]
},
  },
  {
    title: "Historic Villa in Tuscany",
    description: "Beautifully restored villa in Tuscany.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1566073771259-6a8506099945" },
    price: 25000,
    location: "Florence",
    country: "Italy",
    category: "Castles",
    geometry: {
    type: "Point",
    coordinates: [77.2090, 28.6139]
},
  },
  {
    title: "Secluded Treehouse Getaway",
    description: "Treehouse retreat in nature.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4" },
    price: 8000,
    location: "Portland",
    country: "United States",
    category: "Camping",
    geometry: {
    type: "Point",
    coordinates: [77.2090, 28.6139]
},
  },
  {
    title: "Beachfront Paradise",
    description: "Step onto the sandy beach from your door.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9" },
    price: 20000,
    location: "Cancun",
    country: "Mexico",
    category: "Trending",
    geometry: {
    type: "Point",
    coordinates: [77.2090, 28.6139]
},
  },
  {
    title: "Rustic Cabin by the Lake",
    description: "Perfect for outdoor enthusiasts.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b" },
    price: 9000,
    location: "Lake Tahoe",
    country: "United States",
    category: "Camping",
    geometry: {
    type: "Point",
    coordinates: [77.2090, 28.6139]
},
  },
  {
    title: "Luxury Penthouse with City Views",
    description: "Panoramic city views.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd" },
    price: 35000,
    location: "Los Angeles",
    country: "United States",
    category: "Iconic Cities",
    geometry: {
    type: "Point",
    coordinates: [77.2090, 28.6139]
},
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description: "Swiss Alps chalet.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb" },
    price: 30000,
    location: "Verbier",
    country: "Switzerland",
    category: "Mountains",
    geometry: {
    type: "Point",
    coordinates: [77.2090, 28.6139]
},
  },
  {
    title: "Safari Lodge in the Serengeti",
    description: "Wildlife adventure.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e" },
    price: 40000,
    location: "Tanzania",
    country: "Tanzania",
    category: "Trending",
    geometry: {
    type: "Point",
    coordinates: [77.2090, 28.6139]
},
  },
  {
    title: "Private Island Retreat",
    description: "Entire island experience.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972" },
    price: 10000,
    location: "Fiji",
    country: "Fiji",
    category: "Amazing Pools",
    geometry: {
    type: "Point",
    coordinates: [77.2090, 28.6139]
},
  },
  {
    title: "Charming Cottage in the Cotswolds",
    description: "Quaint countryside stay.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f" },
    price: 12000,
    location: "Cotswolds",
    country: "United Kingdom",
    category: "Farms",
    geometry: {
    type: "Point",
    coordinates: [77.2090, 28.6139]
},
  },
  {
    title: "Historic Castle in Scotland",
    description: "Live like royalty.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98" },
    price: 40000,
    location: "Scotland",
    country: "United Kingdom",
    category: "Castles",
    geometry: {
    type: "Point",
    coordinates: [77.2090, 28.6139]
},
  },
  {
    title: "Eco-Friendly Treehouse Retreat",
    description: "Forest escape.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7" },
    price: 7500,
    location: "Costa Rica",
    country: "Costa Rica",
    category: "Camping",
    geometry: {
    type: "Point",
    coordinates: [77.2090, 28.6139]
},
  },
  {
    title: "Modern Apartment in Tokyo",
    description: "Central Tokyo stay.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1480796927426-f609979314bd" },
    price: 20000,
    location: "Tokyo",
    country: "Japan",
    category: "Iconic Cities",
    geometry: {
    type: "Point",
    coordinates: [77.2090, 28.6139]
},
  },
  {
    title: "Luxury Villa in the Maldives",
    description: "Overwater villa.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000" },
    price: 60000,
    location: "Maldives",
    country: "Maldives",
    category: "Amazing Pools",
    geometry: {
    type: "Point",
    coordinates: [77.2090, 28.6139]
},
  },
  {
    title: "Secluded Beach House in Costa Rica",
    description: "Private beach house.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2" },
    price: 18000,
    location: "Costa Rica",
    country: "Costa Rica",
    category: "Trending",
    geometry: {
    type: "Point",
    coordinates: [77.2090, 28.6139]
},
  }
];

module.exports = { data: sampleListings };
