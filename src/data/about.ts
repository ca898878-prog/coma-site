export type Person = {
  name: string;
  role: string;
  headshot?: string; // 👈 add this
  location?: string;
  from?: string;
  since?: string;
  family?: string;
  hobbies?: string[];
  bio: string;
};



export const EXECUTIVE_COMMITTEE: Person[] = [
  {
    name: "Stephen John",
    role: "President",
    headshot: "/team/stephen-john.jpg",
    location: "Powell, Ohio",
    from: "Kottayam, Kerala",
    since: "Ohio since 2015",
    family: "Wife: Nicey • Daughter: Anjali",
    hobbies: ["Portrait Photography", "Road trips"],
    bio:
    "Stephen lives in Powell, Ohio, with his wife Nicey and daughter Anjali. He is from Kottayam and has lived in Ohio from 2015 onwards. His hobbies are Portrait Photography and road trips. He works as a data analyst and is also a clergyman who serves as the chairman of the Anglican Church of India Synod. "},
  {
    name: "Rajesh Rajan",
    role: "Vice President",
    headshot: "/team/rajesh-rajan.jpg",
    location: "Dublin, Ohio",
    from: "Pandalam, Kerala",
    since: "Columbus since 2021 (Ohio ~9 years)",
    family: "Wife: Mauja • Kids: Devika, Dhinan • Pet: Meeka",
    hobbies: ["Travel", "Dance", "Family time"],
    bio:
      "Rajesh lives in Dublin, Ohio with his wife Mauja and kids Devika and Dhinan. He also has a pet dog named Meeka. He is from Pandalam and spent most of his life in New York. He has lived in Ohio for the past nine years and has been in Columbus since 2021. He enjoys traveling, dancing, and spending time with his family.",
  },
  {
    name: "Parvathy Harilal",
    role: "General Secretary",
    headshot: "/team/parvathy-harilal.jpeg",
    location: "Powell, Ohio",
    from: "Trivandrum, Kerala",
    since: "Moved to Columbus in late 2023",
    family: "Husband: Jordan • Son: Jonathan",
    hobbies: [],
    bio:
      "Parvathy lives in Powell, Ohio with her husband Jordan and son Jonathan. She is from Trivandrum and moved from New York to Columbus in late 2023.",
  },
  {
    name: "Linda Chan",
    role: "Joint Secretary",
    headshot: "/team/linda-chan.jpeg",
    location: "Dublin, Ohio",
    from: "Calicut, Kerala",
    since: "Columbus since 2019",
    family: "Husband: Anil • Son: Evaan",
    hobbies: [
      "Painting",
      "Photography",
      "Cinematography",
      "Cooking",
      "Travel",
      "Dance",
      "Music",
      "Classical guitar",
      "Edakkya",
    ],
    bio:
      "Linda lives in Dublin, Ohio with her husband Anil and son Evaan. She and her husband are from Calicut and have been in Columbus since 2019. She is pursuing her career in Digital Video Production and Art from Columbus State Community College. She is an artist and passionate about paintings, photography, cinematography, cooking, travelling, dance, and music. She can play classical guitar and Edakkya as well.",
  },
  {
    name: "Rohit Suresh",
    role: "Treasurer",
    headshot: "/team/rohit-suresh.jpeg",
    from: "Roots: Palakkad • Grew up: Coimbatore",
    since: "Associated with COMA since 2023",
    family: "Wife: Sujitha",
    hobbies: ["Music", "Guitar", "Piano", "Bass"],
    bio:
      "Rohit lives in Delaware, Ohio with his wife Sujitha and has been associated with COMA since 2023. Both he and his wife have their roots in Palakkad but grew up in Coimbatore. He is passionate about music and can play the guitar, piano and the bass.",
  },
];

export const GENERAL_COMMITTEE: Person[] = [
  {
    name: "Nicey Vakasseril",
    role: "Advisor",
    headshot: "/team/nicey-vakasseril.jpeg",
    location: "Powell, Ohio",
    from: "Trivandrum, Kerala",
    since: "Ohio since 2015",
    family: "Husband: Stephen • Daughter: Anjali",
    hobbies: ["Reading", "Driving", "Movies"],
    bio:
      "Nicey lives in Powell, Ohio, with her husband Stephen and daughter Anjali. She is from Trivandrum and has been living in Ohio since 2015. Her hobbies are reading, driving and watching movies.",
  },
  {
    name: "Sudheesh Vasudevan",
    role: "Youth Coordinator",
    headshot: "/team/sudheesh-vasudevan.jpg",
    location: "Plain City, Ohio",
    from: "Kottarakkara, Kerala",
    since: "Columbus since 2016",
    family: "Wife: Lekshmi • Kids: Gaurinanda, Gautham",
    hobbies: ["Travel", "Road trips"],
    bio:
      "Sudheesh lives with his wife Lekshmi, daughter Gaurinanda and son Gautham in Plain City, Ohio. He is from Kottarakkara and is in Columbus from 2016 onwards. He likes travel and road trips. He works as a Senior Software Developer.",
  },
  {
    name: "Gaurinanda Sudheesh Lekshmi",
    role: "Web Design",
    headshot: "/team/gaurinanda-sudheesh.jpeg",
    location: "Plain City, Ohio",
    family: "Parents: Lekshmi & Sudheesh • Brother: Gautham",
    hobbies: ["Reading", "Friends & family time"],
    bio:
      "Gaurinanda Sudheesh Lekshmi lives in Plain City with her mom Lekshmi, dad Sudheesh and brother Gautham. She is a junior at Dublin Jerome High School. She likes to read and spend time with friends and family in her free time.",
  },
  {
    name: "Rahul RP",
    role: "Photography Club",
    headshot: "/team/rahul-rp.jpeg",
    location: "Delaware, Ohio",
    from: "Trivandrum, Kerala",
    family: "Wife: Gayathri • Son: Dhyan",
    hobbies: ["Technology", "Automation", "Photography", "Filmmaking"],
    bio:
      "Rahul lives in Delaware, Ohio with his wife Gayathri and son Dhyan, hailing from Trivandrum. With a passion for technology, automation, and creative storytelling, he thrives at the intersection of software development, photography, and filmmaking. Beyond the tech world, he has a deep interest in photography and cinematography, capturing moments that tell compelling stories. Whether it’s live event photography, short films, or creative visual storytelling, he enjoys bringing ideas to life through the lens.",
  },
  {
    name: "Amalu Joseph",
    role: "Lady Secretary",
    headshot: "/team/amalu-joseph.jpeg",
    location: "Lewis Center, Ohio",
    since: "Columbus since 2012",
    family: "Husband: Dijo • Daughter: Diya",
    hobbies: [],
    bio:
      "Amalu Joseph resides in Lewis Center with her husband Dijo and daughter Diya. Amalu moved to Columbus in 2012.",
  },
  {
    name: "Rakesh Vijayakrishnan",
    role: "Sports Coordinator",
    headshot: "/team/rakesh-vijayakrishnan.jpeg",
    location: "Delaware, Ohio",
    from: "Malappuram, Kerala",
    since: "Ohio since 2015",
    family: "Wife: Gayathri • Son: Avyaan",
    hobbies: [],
    bio:
      "Rakesh lives in Delaware, Ohio, with his wife Gayathri, and their son Avyaan. Originally from Malappuram, Kerala, he’s been enjoying the Ohio life since 2015!",
  },
  {
    name: "Prahlad T Indira",
    role: "Newsletter",
    headshot: "/team/prahlad-indira.jpg",
    since: "Active with COMA since 2013",
    family: "Wife: Vidya • Son: Amogh",
    hobbies: ["Music", "Travel", "Biking"],
    bio:
      "Prahlad, a music enthusiast, has been an active member of COMA since 2013, and lives with his wife Vidya and son Amogh in Lewis Center, OH. Prahlad loves to travel and enjoys biking.",
  },
  {
    name: "Bimal Sebastian",
    role: "Food Coordinator",
    headshot: "/team/bimal-sebastian.jpg",
    location: "Columbus, Ohio",
    since: "Columbus since 2019",
    family: "Wife: Vinney • Kids: Hazel (5), Ezy (2)",
    hobbies: ["Soccer (Columbus Tuskers)", "Cooking"],
    bio:
      "Bimal lives in Columbus, Ohio, with his wife Vinney, and their kids Hazel (5) and Ezy (2). He is in Columbus from 2019 onwards. He is a player in the Columbus Tuskers soccer team and is also a good chef.",
  },
  {
    name: "Aslam Abubacker",
    role: "Volunteer Coordinator",
    headshot: "/team/aslam-abubacker.jpg",
    location: "Plain City, Ohio",
    from: "Ernakulam, Kerala",
    since: "Columbus since 2012",
    family: "Wife: Shinimol • Kids: Minha, Ayaan",
    hobbies: [],
    bio:
      "Aslam lives in Plain City with his wife Shinimol and their children Minha and Ayaan. He has been in Columbus since 2012 and is originally from Ernakulam, Kerala.",
  },
];

export const IMPORTANT_LINKS = [
  { label: "Bylaws (PDF)", href: "/docs/coma-bylaws.pdf" },
  { label: "Nonprofit Documents", href: "/docs/nonprofit-docs" },
];

export type Sponsor = {
  name: string;
  logoUrl: string;
  href?: string;
  tier?: "Platinum" | "Gold" | "Silver" | "Bronze" | "Community";
};

export const SPONSORS: Sponsor[] = [
  {
    name: "Grange Insurance",
    tier: "Platinum",
    logoUrl: "/images/sponsors/grange-insurance.png",
    href: "https://www.grangeinsurance.com",
  },
  {
    name: "India Grocers",
    tier: "Silver",
    logoUrl: "/images/sponsors/india-grocers-silver.png",
    // href: "https://...", // optional
  },
  {
    name: "New York Life",
    tier: "Gold",
    logoUrl: "/images/sponsors/new-york-life.png",
  },
  {
    name: "Dev Care Solutions",
    tier: "Gold",
    logoUrl: "/images/sponsors/dev-care-solutions.jpg",
  },
  {
    name: "Bhavani",
    tier: "Bronze",
    logoUrl: "/images/sponsors/bhavani.png",
  },
  {
    name: "Sony Joseph",
    tier: "Community",
    logoUrl: "/images/sponsors/sony-joseph.jpg",
  },
  {
    name: "Abraham Eappen",
    tier: "Community",
    logoUrl: "/images/sponsors/abraham-eappen.png",
  },
  {
    name: "Awadh",
    tier: "Community",
    logoUrl: "/images/sponsors/awadh.jpg",
  },
  {
    name: "Courtney Eaglin",
    tier: "Community",
    logoUrl: "/images/sponsors/courtney-eaglin.jpg",
  },
   {
    name: "Best Brains",
    tier: "Community",
    logoUrl: "/images/sponsors/best-brains.jpg",
  },
];

export const TRUSTEES: Person[] = [
  {
    name: "Girish Manoharan",
    role: "Trustee",
    headshot: "/team/girish-manoharan.jpeg",
    location: "Dublin, Ohio",
    from: "Kollam, Kerala",
    since: "Active COMA member since inception",
    family: "Wife: Deepthi • Kids: Akash, Shreya",
    hobbies: ["Badminton", "Movies", "Portrait photography"],
    bio:
      "Girish lives in Dublin, Ohio with his wife Deepthi and two kids, Akash and Shreya. He is from Kollam and has been an active COMA member since inception. Girish enjoys playing badminton, watching movies, and at times, portrait photography.",
  },
  {
    name: "Manjula Nair",
    role: "Trustee",
    headshot: "/team/manjula-nair.jpg",
    location: "Powell, Ohio",
    from: "Trivandrum, Kerala",
    since: "Columbus since 2001",
    family: "Sons: Adithya (Nandu), Arvind (Kannan)",
    hobbies: ["Movies", "Music (old classics)", "Travel"],
    bio:
      "Manjula has been in Columbus since 2001 and lives in Powell now. She has been part of the COMA community since she came to Columbus, even before it became an official organization. Manjula considers the community members as her family and the feeling has been reciprocated time and time again. She is a huge movie buff and has a bad habit of getting into heated discussions about movies—her friends find it hilarious. She loves music, is a huge fan of old classics, and dreams of traveling the world someday.",
  },
  {
    name: "Ajoy Kumar",
    role: "Trustee",
    headshot: "/team/ajoy-kumar.jpg",
    location: "Dublin, Ohio",
    from: "Nagercoil",
    since: "Columbus since 1995 • President (2016)",
    family: "Wife: Beena • Kids: Arjun, Arvind",
    hobbies: ["Watching sports", "Running"],
    bio:
      "Ajoy has been in Columbus since 1995 and currently lives in Dublin, Ohio with his wife Beena. Ajoy is from Nagercoil, and Beena is from Kanjirappally. They have two kids, Arjun and Arvind. Ajoy has been an active member of COMA since its inception and was president in 2016. Ajoy enjoys watching sports and running.",
  },
  {
    name: "Siva Ramaswami",
    role: "Trustee",
    headshot: "/team/siva-ramaswami.jpg",
    location: "Westerville, Ohio",
    from: "Coimbatore",
    since: "Involved since 2009 • Trustee since 2021 • President (2013)",
    family: "Spouse: Suchi",
    hobbies: ["Cricket", "Chess", "Malayalam movies", "Malayalam language & culture"],
    bio:
      "Siva has been involved with the association since 2009, way before COMA was officially formed. He has been one of the COMA trustees since 2021 and was the president in 2013. He hails from Coimbatore and has a great love for Malayalam and its culture. He is an ardent fan of cricket, especially matches involving India, and also loves following chess and watching Malayalam movies in his spare time.",
  },
  {
    name: "Rajiv Thomas",
    role: "Trustee",
    headshot: "/team/rajiv-thomas.jpg",
    location: "New Albany, Ohio",
    from: "Hometown: Kumbanad • Grew up: Delhi",
    since: "Columbus ~20 years • Auditor (2016–2020) • Trustee since 2021",
    family: "Spouse: Vineetha • Kids: Noah, Luke",
    hobbies: ["Racquetball", "Foodie", "Finance"],
    bio:
      "Rajiv lives in New Albany with his better half Vineetha and spirited two kids, Noah and Luke. His hometown is Kumbanad, but he mostly grew up in Delhi. He has lived in Columbus for almost 20 years. He is passionate about finance and helping community organizations thrive responsibly. He served as the auditor for COMA for 5 years between 2016–2020 and has been a trustee since 2021. Rajiv enjoys playing racquetball and is also a foodie—he’s proud to be part of COMA and loves being first in line for the delicious food at COMA events!",
  },
   {
    name: "Ravi Hariharan",
    role: "Auditor",
    headshot: "/team/ravi-hariharan.jpeg",
    location: "Powell, Ohio",
    from: "Ernakulam, Kerala",
    since: "COMA member since 2014",
    family: "Wife: Ramya • Kids: Sahana, Saanav",
    hobbies: ["Movies", "Music", "Cricket", "Ping pong", "Pickleball"],
    bio:
      "Ravi lives in Powell, OH with his wife Ramya and kids, Sahana and Saanav. He is from Ernakulam and has been a member of COMA since 2014. Ravi is a movie and music enthusiast and loves to play cricket, ping pong, and pickle ball.",
  },
];


