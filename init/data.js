const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
    category: "Amazing Pools"
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
    category:"Iconic Cities"
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
    category:"Mountains"
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
    category:"Castles"
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 800,
    location: "Portland",
    country: "United States",
    category:"Camping"
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
    category:"Boats"
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
    category: "Rooms"
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
    category: "Trending"
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
    category: "Farms"
  },
  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
    category: "Arctic"
  },
  {
    title: "Historic Canal House",
    description:
      "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
    category: "Domes"
  },
  {
    title: "Private Island Retreat",
    description:
      "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 10000,
    location: "Fiji",
    country: "Fiji",
    category: "Amazing Pools"
  },
  {
    title: "Charming Cottage in the Cotswolds",
    description:
      "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "Cotswolds",
    country: "United Kingdom",
    category: "Rooms"
  },
  {
    title: "Historic Brownstone in Boston",
    description:
      "Step back in time in this elegant historic brownstone located in the heart of Boston.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2200,
    location: "Boston",
    country: "United States",
    category: "Iconic Cities"
  },
  {
    title: "Beachfront Bungalow in Bali",
    description:
      "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Bali",
    country: "Indonesia",
    category: "Trending"
  },
  {
    title: "Mountain View Cabin in Banff",
    description:
      "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Banff",
    country: "Canada",
    category: "Mountains"
  },
  {
    title: "Art Deco Apartment in Miami",
    description:
      "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Miami",
    country: "United States",
    category: "Amazing Pools"
  },
  {
    title: "Tropical Villa in Phuket",
    description:
      "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Phuket",
    country: "Thailand",
    category: "Iconic Cities"
  },
  {
    title: "Historic Castle in Scotland",
    description:
      "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Scottish Highlands",
    country: "United Kingdom",
    category: "Castles"
  },
  {
    title: "Desert Oasis in Dubai",
    description:
      "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 5000,
    location: "Dubai",
    country: "United Arab Emirates",
    category: "Domes"
  },
  {
    title: "Rustic Log Cabin in Montana",
    description:
      "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1100,
    location: "Montana",
    country: "United States",
    category: "Farms"
  },
  {
    title: "Beachfront Villa in Greece",
    description:
      "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Mykonos",
    country: "Greece",
    category: "Camping"
  },
  {
    title: "Eco-Friendly Treehouse Retreat",
    description:
      "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 750,
    location: "Costa Rica",
    country: "Costa Rica",
    category: "Iconic Cities"
  },
  {
    title: "Historic Cottage in Charleston",
    description:
      "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Charleston",
    country: "United States",
    category: "Mountains"
  },
  {
    title: "Modern Apartment in Tokyo",
    description:
      "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Tokyo",
    country: "Japan",
    category: "Trending"
  },
  {
    title: "Lakefront Cabin in New Hampshire",
    description:
      "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "New Hampshire",
    country: "United States",
    category: "Arctic"
  },
  {
    title: "Luxury Villa in the Maldives",
    description:
      "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 6000,
    location: "Maldives",
    country: "Maldives",
    category: "Mountains"
  },
  {
    title: "Ski Chalet in Aspen",
    description:
      "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Aspen",
    country: "United States",
    category: "Camping"
  },
  {
    title: "Secluded Beach House in Costa Rica",
    description:
      "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Costa Rica",
    country: "Costa Rica",
    category: "Amazing Pools"
  },
  {
    title: "Luxury Lakeview Villa",
    description: "A beautiful luxury villa overlooking a peaceful lake with spacious rooms and stunning views.",
    image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d"
    },
    price: 4200,
    location: "Udaipur",
    country: "India",
    category: "Amazing Pools"
},

{
    title: "Cozy Forest Cabin",
    description: "A peaceful wooden cabin surrounded by dense forests, perfect for a relaxing getaway.",
    image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8"
    },
    price: 2800,
    location: "Manali",
    country: "India",
    category: "Mountains"
},

{
    title: "Royal Heritage Palace",
    description: "Stay in a magnificent heritage property inspired by the royal architecture of Rajasthan.",
    image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1599661046289-e31897846e41"
    },
    price: 5500,
    location: "Jaipur",
    country: "India",
    category: "Castles"
},

{
    title: "Modern City Apartment",
    description: "A stylish apartment in the heart of the city, close to restaurants, shopping and major attractions.",
    image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
    },
    price: 2200,
    location: "Mumbai",
    country: "India",
    category: "Iconic Cities"
},

{
    title: "Riverside Camping Retreat",
    description: "Enjoy peaceful nights beside a river with comfortable tents and beautiful natural surroundings.",
    image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7"
    },
    price: 1600,
    location: "Rishikesh",
    country: "India",
    category: "Camping"
},

{
    title: "Traditional Countryside Farm",
    description: "A charming farmhouse surrounded by green fields, fruit trees and peaceful countryside.",
    image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1500076656116-558758c991c1"
    },
    price: 1900,
    location: "Punjab",
    country: "India",
    category: "Farms"
},

{
    title: "Luxury Houseboat Stay",
    description: "Relax on a beautifully designed houseboat while enjoying peaceful views of the surrounding waters.",
    image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1540946485063-a40da27545f8"
    },
    price: 3500,
    location: "Srinagar",
    country: "India",
    category: "Boats"
},

{
    title: "Glass Dome Retreat",
    description: "Experience a unique stay inside a transparent dome surrounded by beautiful natural scenery.",
    image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739"
    },
    price: 3200,
    location: "Kasauli",
    country: "India",
    category: "Domes"
},

{
    title: "Snowy Arctic Cabin",
    description: "A warm and comfortable cabin surrounded by snowy landscapes, perfect for a winter escape.",
    image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73"
    },
    price: 4800,
    location: "Tromso",
    country: "Norway",
    category: "Arctic"
},

{
    title: "Elegant Downtown Room",
    description: "A comfortable private room with modern interiors and convenient access to the city center.",
    image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1566665797739-1674de7a421a"
    },
    price: 1800,
    location: "Delhi",
    country: "India",
    category: "Rooms"
},
{
    title: "Sunset Beachside Villa",
    description: "A peaceful villa with beautiful sunset views, spacious interiors and a relaxing outdoor area.",
    image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2"
    },
    price: 3800,
    location: "Goa",
    country: "India",
    category: "Trending"
},

{
    title: "Mountain View Cottage",
    description: "A cozy cottage surrounded by mountains with fresh air, scenic views and a peaceful atmosphere.",
    image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739"
    },
    price: 2900,
    location: "Manali",
    country: "India",
    category: "Mountains"
},

{
    title: "Luxury Poolside Retreat",
    description: "A luxurious retreat featuring a private swimming pool, elegant rooms and beautiful surroundings.",
    image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1564501049412-61c2a3083791"
    },
    price: 5200,
    location: "Alibaug",
    country: "India",
    category: "Amazing Pools"
},

{
    title: "Historic Fort Residence",
    description: "Experience history in a beautifully restored property surrounded by impressive traditional architecture.",
    image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1606298855672-3efb63017be8"
    },
    price: 4500,
    location: "Jodhpur",
    country: "India",
    category: "Castles"
},

{
    title: "Peaceful Farm Cottage",
    description: "A charming countryside stay surrounded by green fields, trees and beautiful natural landscapes.",
    image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1500076656116-558758c991c1"
    },
    price: 2100,
    location: "Nashik",
    country: "India",
    category: "Farms"
},

{
    title: "Riverside Tent Camp",
    description: "Enjoy an adventurous camping experience beside a peaceful river surrounded by nature.",
    image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1475483768296-6163e08872a1"
    },
    price: 1400,
    location: "Rishikesh",
    country: "India",
    category: "Camping"
},

{
    title: "Luxury City Suite",
    description: "A modern and elegant suite located close to major attractions, restaurants and shopping areas.",
    image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1590490360182-c33d57733427"
    },
    price: 3400,
    location: "Bengaluru",
    country: "India",
    category: "Iconic Cities"
},

{
    title: "Lake Houseboat Escape",
    description: "A comfortable houseboat offering a relaxing stay with beautiful views across the calm lake.",
    image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1540946485063-a40da27545f8"
    },
    price: 3600,
    location: "Srinagar",
    country: "India",
    category: "Boats"
},

{
    title: "Luxury Glass Dome",
    description: "Stay in a stylish glass dome surrounded by nature with panoramic views of the landscape.",
    image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739"
    },
    price: 4100,
    location: "Munnar",
    country: "India",
    category: "Domes"
},

{
    title: "Snow Valley Lodge",
    description: "A warm and comfortable lodge surrounded by snowy mountains and beautiful winter scenery.",
    image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73"
    },
    price: 4300,
    location: "Reykjavik",
    country: "Iceland",
    category: "Arctic"
},

{
    title: "Modern Private Room",
    description: "A bright and comfortable private room with modern furniture and easy access to the city.",
    image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1566665797739-1674de7a421a"
    },
    price: 1700,
    location: "Pune",
    country: "India",
    category: "Rooms"
},

{
    title: "City Lights Apartment",
    description: "A stylish apartment offering spectacular city views with modern amenities and comfortable interiors.",
    image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
    },
    price: 2700,
    location: "Hyderabad",
    country: "India",
    category: "Iconic Cities"
},

{
    title: "Hidden Mountain Chalet",
    description: "A beautiful wooden chalet tucked away in the mountains, ideal for a quiet weekend getaway.",
    image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1542718610-a1d656d1884c"
    },
    price: 3300,
    location: "Shimla",
    country: "India",
    category: "Mountains"
},

{
    title: "Private Pool Villa",
    description: "A spacious private villa with a beautiful pool, comfortable bedrooms and a relaxing outdoor space.",
    image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811"
    },
    price: 6000,
    location: "Lonavala",
    country: "India",
    category: "Amazing Pools"
},

{
    title: "Royal Stone Castle",
    description: "A unique historic stay featuring traditional stone architecture and beautiful surrounding landscapes.",
    image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1506377585622-bedcbb027afc"
    },
    price: 4700,
    location: "Edinburgh",
    country: "Scotland",
    category: "Castles"
},

{
    title: "Forest Camping Haven",
    description: "A peaceful campsite surrounded by tall trees and natural beauty, perfect for outdoor lovers.",
    image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7"
    },
    price: 1300,
    location: "Jim Corbett",
    country: "India",
    category: "Camping"
},

{
    title: "Countryside Organic Farm",
    description: "Relax in a beautiful farmhouse surrounded by farmland, gardens and peaceful countryside views.",
    image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1464226184884-fa280b87c399"
    },
    price: 2300,
    location: "Dehradun",
    country: "India",
    category: "Farms"
},

{
    title: "Luxury Sailing Boat",
    description: "A stylish boat stay offering a unique experience with beautiful water views and comfortable interiors.",
    image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13"
    },
    price: 3900,
    location: "Mumbai",
    country: "India",
    category: "Boats"
},

{
    title: "Northern Lights Cabin",
    description: "A cozy cabin surrounded by snowy landscapes, offering an unforgettable winter experience.",
    image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73"
    },
    price: 4900,
    location: "Tromso",
    country: "Norway",
    category: "Arctic"
},

{
    title: "Luxury Dome in the Hills",
    description: "A peaceful dome stay in the hills with panoramic views, comfortable interiors and a private outdoor area.",
    image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1500534623283-312aade485b7"
    },
    price: 3700,
    location: "Coorg",
    country: "India",
    category: "Domes"
},
{
    title: "Luxury Beachfront Villa",
    description:
        "Enjoy a peaceful stay in this beautiful beachfront villa with stunning ocean views and easy access to the beach.",
    image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=800&q=60",
    },
    price: 2800,
    location: "Goa",
    country: "India",
},

{
    title: "Cozy Mountain Cabin",
    description:
        "A warm and peaceful mountain cabin surrounded by nature, perfect for a relaxing escape from the city.",
    image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=800&q=60",
    },
    price: 1400,
    location: "Manali",
    country: "India",
},

{
    title: "Modern City Apartment",
    description:
        "Stay in a stylish modern apartment located close to the city's popular attractions, restaurants, and shopping areas.",
    image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Dubai",
    country: "United Arab Emirates",
},

{
    title: "Seaside Cottage Retreat",
    description:
        "Relax in this charming seaside cottage offering beautiful views, comfortable rooms, and a peaceful atmosphere.",
    image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Alibaug",
    country: "India",
},

{
    title: "Elegant Apartment in Paris",
    description:
        "Experience Paris from this elegant apartment located in a convenient neighborhood near major attractions.",
    image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=60",
    },
    price: 2200,
    location: "Paris",
    country: "France",
},

{
    title: "Luxury Villa in Santorini",
    description:
        "Enjoy spectacular sea views and a relaxing atmosphere in this beautiful luxury villa overlooking Santorini.",
    image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=60",
    },
    price: 3200,
    location: "Santorini",
    country: "Greece",
},

{
    title: "Forest Cabin Retreat",
    description:
        "Escape into nature with this cozy forest cabin surrounded by trees and peaceful hiking trails.",
    image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=800&q=60",
    },
    price: 1100,
    location: "Rishikesh",
    country: "India",
},

{
    title: "Historic Home in Rome",
    description:
        "Stay in a charming historic home and explore the beautiful streets, architecture, and culture of Rome.",
    image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1529260830199-42c24126f198?auto=format&fit=crop&w=800&q=60",
    },
    price: 1900,
    location: "Rome",
    country: "Italy",
},

{
    title: "Tropical Beach Villa",
    description:
        "Enjoy a tropical getaway in this comfortable villa located near beautiful beaches and crystal-clear waters.",
    image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Phuket",
    country: "Thailand",
},

{
    title: "Modern Loft in London",
    description:
        "A stylish urban loft offering a comfortable stay in the heart of London, perfect for exploring the city.",
    image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=60",
    },
    price: 2100,
    location: "London",
    country: "United Kingdom",
},
];

module.exports = { data: sampleListings };
