const properties = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3"
    ],
    location: "Bangalore, India",
    title: "Modern apartment with city view",
    rating: "4.8",
    price: "₹3,500",
    guests: "4 guests",
    bedrooms: "2 bedrooms",
    beds: "2 beds",
    host: "Rahul",
    categories: ["City","Amazing Views",]
  },

  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    images:[
        
        "https://images.unsplash.com/photo-1778726444642-3f374cbffef5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1760067538299-3f58e7a99fc5?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1767348923171-f5535f88fb39?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],  
    location: "Goa, India",
    title: "Beautiful beach house",
    rating: "4.9",
    price: "₹5,200",
    guests: "2 Guests",
    bedrooms: "1 bedrooms",
    beds: "1 bed",
    host: "Alice",
    categories: ["Beach"]
  },

  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1644027622521-d0ca669c40d7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    images:[
        
        "https://images.unsplash.com/photo-1778726444642-3f374cbffef5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1760067538299-3f58e7a99fc5?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1721714808874-35bcb03a8277?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],  
    location: "Coorg, India",
    title: "Peaceful cabin in nature",
    rating: "4.7",
    price: "₹2,800",
    guests: "5 Guests",
    bedrooms: "3 bedrooms",
    beds: "3 bed",
    host: "Gokul",
    categories: [
        "Cabins",
        "Trending",
        "Countryside"

    ]
  },

  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
    images:[
        
        "https://images.unsplash.com/photo-1659720879268-818dea77efaa?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1767348923171-f5535f88fb39?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],  
    location: "Kerala, India",
    title: "Luxury villa with pool",
    rating: "4.8",
    price: "₹25,000",
    guests: "8 Guests",
    bedrooms: "6 bedrooms",
    beds: "7 beds",
    host: "Lee",
    categories: ["Homes","Trending"]
  },
    {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1659720879153-24703db812c5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    images:[
        
        "https://images.unsplash.com/photo-1670770775739-af91e964cde9?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1767348923171-f5535f88fb39?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],  
    location: "Kerala, India",
    title: "Luxury villa with pool",
    rating: "3.0",
    price: "₹25,000",
    guests: "8 Guests",
    bedrooms: "6 bedrooms",
    beds: "7 beds",
    host: "Wong",
    categories: ["Villa"]
  },
    {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1780269197656-baf0c41f8867?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    images:[
        
        "https://images.unsplash.com/photo-1659720879268-818dea77efaa?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1767348923171-f5535f88fb39?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],  
    location: "Kerala, India",
    title: "Luxury villa with pool",
    rating: "5.0",
    price: "₹25,000",
    guests: "8 Guests",
    bedrooms: "6 bedrooms",
    beds: "7 beds",
    host: "Tom",
    categories: ["Villa","Trending"]
  },
    {
    id: 7,
    image:
      "https://plus.unsplash.com/premium_photo-1734549547989-805c0885dd9c?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    images:[
        
        "https://images.unsplash.com/photo-1659720879268-818dea77efaa?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1767348923171-f5535f88fb39?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],  
    location: "Kerala, India",
    title: "Luxury villa with pool",
    rating: "4.0",
    price: "₹25,000",
    guests: "8 Guests",
    bedrooms: "6 bedrooms",
    beds: "7 beds",
    host: "Hari",
    categories: ["Villa","Castles"]
  },
    {
    id: 8,
    image:
      "https://plus.unsplash.com/premium_photo-1736194027680-bb88156ee144?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    images:[
        
        "https://images.unsplash.com/photo-1659720879268-818dea77efaa?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1767348923171-f5535f88fb39?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],  
    location: "Kerala, India",
    title: "Luxury villa with pool",
    rating: "3.5",
    price: "₹25,000",
    guests: "8 Guests",
    bedrooms: "6 bedrooms",
    beds: "7 beds",
    host: "Ali",
    categories: ["Villa"]
  },
    {
    id: 9,
    image:
      "https://images.unsplash.com/photo-1564013434775-f71db0030976?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    images:[
        
        "https://images.unsplash.com/photo-1659720879268-818dea77efaa?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1767348923171-f5535f88fb39?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],  
    location: "Kerala, India",
    title: "Luxury villa with pool",
    rating: "4.5",
    price: "₹25,000",
    guests: "8 Guests",
    bedrooms: "6 bedrooms",
    beds: "7 beds",
    host: "Arjun",
    categories: ["Villa","Trending"]
  },
    {
    id: 10,
    image:
      "https://plus.unsplash.com/premium_photo-1689609950069-2961f80b1e70?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWlyYm5iJTIwaG91c2V8ZW58MHx8MHx8fDA%3D",
    images:[
        
        "https://images.unsplash.com/photo-1659720879268-818dea77efaa?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1767348923171-f5535f88fb39?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],  
    location: "Kerala, India",
    title: "Luxury villa with pool",
    rating: "4.9",
    price: "₹25,000",
    guests: "8 Guests",
    bedrooms: "6 bedrooms",
    beds: "7 beds",
    host: "Vishnu",
    categories: ["Villa","Homes","Amazing Views","Trending"]
  }
];


export default properties;