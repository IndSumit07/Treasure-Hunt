// Mock data for the Treasure Hunt application

export const eventDetails = {
  title: "Treasure Hunt",
  subtitle: "A Pirate's Quest for Tech Glory",
  date: "March 15, 2024",
  time: "10:00 AM - 6:00 PM",
  location: "Tech Campus, Building A",
  description: `Ahoy, mateys! Welcome to the most thrilling tech treasure hunt of the year! 
  
  Join us for an epic adventure where technology meets pirate lore. Navigate through challenging checkpoints, solve cryptic puzzles, and compete with fellow tech enthusiasts to claim the ultimate treasure.
  
  This event combines coding challenges, problem-solving, and teamwork in a swashbuckling adventure that will test your skills and wit. Are ye brave enough to embark on this journey?`,
  rules: [
    "Teams must consist of 1-6 members",
    "All team members must register before the event",
    "Each checkpoint must be completed in sequence",
    "No external help or resources allowed during challenges",
    "Respect the event organizers and fellow participants",
    "The treasure hunt must be completed within the time limit",
    "Winners will be determined by completion time and accuracy"
  ],
  rewards: [
    {
      place: "1st Place",
      prize: "₹50,000 + Trophy + Swag Kit",
      icon: "🏆"
    },
    {
      place: "2nd Place",
      prize: "₹30,000 + Trophy + Swag Kit",
      icon: "🥈"
    },
    {
      place: "3rd Place",
      prize: "₹20,000 + Trophy + Swag Kit",
      icon: "🥉"
    },
    {
      place: "All Participants",
      prize: "Certificate + Exclusive Merchandise",
      icon: "🎁"
    }
  ]
};

export const timeline = [
  {
    id: 1,
    title: "Registration Opens",
    time: "8:00 AM",
    description: "Check-in at the main entrance. Collect your team kit and event map.",
    icon: "scroll",
    details: "Bring your registration confirmation and valid ID. Team leaders must check in all members."
  },
  {
    id: 2,
    title: "Opening Ceremony",
    time: "9:30 AM",
    description: "Welcome address and event briefing by the organizers.",
    icon: "compass",
    details: "Learn about the rules, checkpoints, and safety guidelines. Get your first clue!"
  },
  {
    id: 3,
    title: "Treasure Hunt Begins",
    time: "10:00 AM",
    description: "The adventure starts! Navigate to your first checkpoint.",
    icon: "map",
    details: "Use your map and clues to find checkpoints. Complete challenges to earn the next clue."
  },
  {
    id: 4,
    title: "Checkpoint 1: Code Island",
    time: "10:00 AM - 11:30 AM",
    description: "Solve coding challenges to unlock the next location.",
    icon: "scroll",
    details: "Test your programming skills with algorithmic puzzles and debugging challenges."
  },
  {
    id: 5,
    title: "Checkpoint 2: Database Bay",
    time: "11:30 AM - 1:00 PM",
    description: "Navigate through database queries and data structures.",
    icon: "compass",
    details: "Master SQL queries and optimize database operations to proceed."
  },
  {
    id: 6,
    title: "Lunch Break",
    time: "1:00 PM - 2:00 PM",
    description: "Refuel at the mess hall. Complimentary lunch for all participants.",
    icon: "map",
    details: "Enjoy a hearty meal and strategize with your team for the remaining challenges."
  },
  {
    id: 7,
    title: "Checkpoint 3: API Archipelago",
    time: "2:00 PM - 3:30 PM",
    description: "Build and integrate APIs to unlock secret passages.",
    icon: "scroll",
    details: "Create RESTful APIs and handle authentication to access hidden treasures."
  },
  {
    id: 8,
    title: "Checkpoint 4: Frontend Fortress",
    time: "3:30 PM - 5:00 PM",
    description: "Design and implement UI components to reveal the final clue.",
    icon: "compass",
    details: "Showcase your frontend skills with React, CSS, and responsive design."
  },
  {
    id: 9,
    title: "Final Challenge",
    time: "5:00 PM - 5:45 PM",
    description: "The ultimate test! Combine all your skills to claim the treasure.",
    icon: "map",
    details: "A comprehensive challenge that tests everything you've learned."
  },
  {
    id: 10,
    title: "Closing Ceremony",
    time: "6:00 PM",
    description: "Winner announcement and prize distribution.",
    icon: "scroll",
    details: "Celebrate with fellow pirates and collect your well-deserved rewards!"
  }
];

export const mapLocations = [
  {
    id: 1,
    name: "Registration Deck",
    coordinates: { x: 20, y: 30 },
    type: "start",
    hint: "Your journey begins here, brave sailor!",
    description: "Check in and receive your adventure kit"
  },
  {
    id: 2,
    name: "Code Island",
    coordinates: { x: 35, y: 45 },
    type: "checkpoint",
    hint: "Where algorithms meet the seven seas...",
    description: "Solve coding challenges to proceed",
    challenge: "Implement a binary search algorithm"
  },
  {
    id: 3,
    name: "Database Bay",
    coordinates: { x: 55, y: 35 },
    type: "checkpoint",
    hint: "Data flows like ocean currents here...",
    description: "Master database queries",
    challenge: "Optimize a complex SQL query"
  },
  {
    id: 4,
    name: "API Archipelago",
    coordinates: { x: 70, y: 55 },
    type: "checkpoint",
    hint: "Islands connected by invisible bridges...",
    description: "Build and integrate APIs",
    challenge: "Create a secure authentication endpoint"
  },
  {
    id: 5,
    name: "Frontend Fortress",
    coordinates: { x: 50, y: 70 },
    type: "checkpoint",
    hint: "Where beauty meets functionality...",
    description: "Design stunning interfaces",
    challenge: "Build a responsive component library"
  },
  {
    id: 6,
    name: "Treasure Cove",
    coordinates: { x: 80, y: 80 },
    type: "finish",
    hint: "X marks the spot! The treasure awaits...",
    description: "Complete the final challenge to claim victory"
  }
];

export const pricingPlans = [
  {
    id: 1,
    name: "Single Adventurer",
    price: 299,
    teamSize: 1,
    features: [
      "Individual registration",
      "Event kit and merchandise",
      "Access to all checkpoints",
      "Lunch and refreshments",
      "Certificate of participation",
      "Networking opportunities"
    ],
    popular: false
  },
  {
    id: 2,
    name: "Crew Package",
    price: 1499,
    teamSize: "2-6",
    pricePerPerson: 250,
    features: [
      "Team registration (2-6 members)",
      "Event kits for all members",
      "Access to all checkpoints",
      "Team lunch and refreshments",
      "Certificates for all members",
      "Priority support",
      "Team photo session",
      "Exclusive team merchandise"
    ],
    popular: true,
    savings: "Save ₹49 per person!"
  }
];

export const faqs = [
  {
    question: "What should I bring to the event?",
    answer: "Bring your laptop, charger, valid ID, registration confirmation, and a spirit of adventure! We'll provide everything else."
  },
  {
    question: "Can I participate alone?",
    answer: "Absolutely! You can register as a single adventurer or form a team of up to 6 members."
  },
  {
    question: "What if my team member can't make it?",
    answer: "You can replace team members up to 24 hours before the event by contacting our support team."
  },
  {
    question: "Is there a refund policy?",
    answer: "Full refunds are available up to 7 days before the event. After that, we offer 50% refunds up to 48 hours before."
  },
  {
    question: "What technologies will be covered?",
    answer: "The challenges will cover JavaScript, Python, SQL, REST APIs, React, and general problem-solving skills."
  },
  {
    question: "Are there any prerequisites?",
    answer: "Basic programming knowledge is recommended, but challenges are designed for various skill levels."
  }
];
