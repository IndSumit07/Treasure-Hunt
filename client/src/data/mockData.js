// Mock data for the Treasure Hunt application

export const eventDetails = {
  title: "Treasure Hunt",
  subtitle: "A Pirate's Quest for Tech Glory",
  date: "January 15, 2026",
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
    title: "Start: Football Ground",
    time: "January 15, 9:00 AM",
    description: "Gather at the Football Ground for the opening briefing and team check-in.",
    icon: "map",
    details: "Collect your starter kit, meet your team, and receive the first encrypted clue."
  },
  {
    id: 2,
    title: "Checkpoint 1: KC Ground",
    time: "January 15, 10:30 AM",
    description: "Navigate to KC Ground for the first physical and logic challenge.",
    icon: "compass",
    details: "Solve the riddle hidden in the field to unlock the coordinates for the next location."
  },
  {
    id: 3,
    title: "Checkpoint 2: AB 10",
    time: "January 15, 12:00 PM",
    description: "Proceed to Academic Block 10 for a debugging showdown.",
    icon: "scroll",
    details: "Find the hidden QR codes in the lab and fix the bugged code snippets to proceed."
  },
  {
    id: 4,
    title: "Checkpoint 3: CSED",
    time: "January 15, 2:00 PM",
    description: "Reach the Computer Science Department for algorithm optimization tasks.",
    icon: "compass",
    details: "Optimize the provided pathfinding algorithm to reveal the secret passkey."
  },
  {
    id: 5,
    title: "Checkpoint 4: AB 1",
    time: "January 15, 3:30 PM",
    description: "Head to Academic Block 1 for the system design challenge.",
    icon: "scroll",
    details: "Draft a scalable architecture for the pirate ship's communication system."
  },
  {
    id: 6,
    title: "Grand Finale: Chai Ki Tapri",
    time: "January 15, 5:00 PM",
    description: "Race to the finish line at Chai Ki Tapri for the final submission.",
    icon: "map",
    details: "Submit your final treasure key, enjoy refreshments, and await the winner announcement!"
  }
];

export const mapLocations = [
  {
    id: 1,
    name: "Football Ground",
    coordinates: { x: 20, y: 30 },
    type: "start",
    hint: "Your journey begins on the green field...",
    description: "Registration and Initial Briefing"
  },
  {
    id: 2,
    name: "KC Ground",
    coordinates: { x: 35, y: 45 },
    type: "checkpoint",
    hint: "Look for the open space near the center...",
    description: "First technical challenge awaits",
    challenge: "Physical & Logic Puzzle Combo"
  },
  {
    id: 3,
    name: "AB 10",
    coordinates: { x: 55, y: 35 },
    type: "checkpoint",
    hint: "Academic Block 10 holds the next clue...",
    description: "Debugging Challenge",
    challenge: "Fix the broken code snippets"
  },
  {
    id: 4,
    name: "CSED",
    coordinates: { x: 70, y: 55 },
    type: "checkpoint",
    hint: "The heart of computer science...",
    description: "Algorithm Design",
    challenge: "Optimize the sorting algorithm"
  },
  {
    id: 5,
    name: "AB 1",
    coordinates: { x: 50, y: 70 },
    type: "checkpoint",
    hint: "Back to the beginning blocks...",
    description: "System Design",
    challenge: "Design a scalable architecture"
  },
  {
    id: 6,
    name: "Chai Ki Tapri",
    coordinates: { x: 80, y: 80 },
    type: "finish",
    hint: "Celebrate with a warm cup!",
    description: "Final submission and celebrations"
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
