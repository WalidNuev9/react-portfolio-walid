import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";

export const HERO_CONTENT = `I am a passionate Full-Stack Web Developer, skilled in building intelligent web applications using ReactJS, Node.js, and RESTful APIs. Experienced in
leveraging AI tools and frameworks to enhance user experiences and optimize system performance. With a passion for creating
scalable AI-driven solutions.`;

export const ABOUT_TEXT = `👋 Hi there! I’m a Full-Stack Developer with expertise in ReactJS, Node.js, and RESTful APIs, certified by 3W Academy and skilled in building scalable web solutions that optimize performance. My background spans technical innovation—like integrating Firebase/SQL databases and exploring AI/LLM tools—and cross-functional roles, including boosting client ROI as a Media Buyer and reducing workplace incidents as a QHSE Officer. With a Diploma in Business Management,
 I merge technical precision with strategic problem-solving to deliver user-centric applications. 
Passionate about collaborative environments and continuous learning, I thrive on transforming complex challenges into efficient, future-ready solutions. Let’s connect and create something impactful!`;

export const EXPERIENCES = [
  {
    year: "Jun 2021 - Sep 2023",
    role: "Media Buyer & Ads Manager",
    company: "PUB+",
    description: `- Managed end-to-end digital advertising campaigns (Facebook, Tiktok Ads) for diverse clients, achieving a 22% average ROI increase through data-driven optimizations.
        -Conducted A/B testing and audience segmentation, boosting user engagement by 35% and reducing cost-per-click (CPC) by 18%.`,
    technologies: ["Digital Advertising", "A/B Testing", "Audience Segmentation"],
  },
  {
    year: "Jul 2019 - Dec 2020",
    role: "QHSE Officer",
    company: "TENSIFT TRAD (OCP Group Site)",
    description: `- Conducted 50+ risk assessments and implemented corrective actions, reducing workplace incidents by 40%.
          - Led 15+ training sessions on safety protocols, ensuring compliance with ISO 45001 and local regulations.`,
    technologies: ["Risk Assessment", "Training", "Safety Protocols"],
  },
  {
    year: "Oct 2016 - Aug 2018",
    role: "Surveillance & Alarm Systems Installer",
    company: "S.A.R.L Mr. Robot",
    description: `- Designed and installed customized security systems for 30+ commercial clients, enhancing facility safety.
            - Provided post-installation technical support, achieving a 95% client satisfaction rate.`,
    technologies: ["Security", "Installation", "Technical Support"],
  },
  {
    year: "April 2016 - June 2016",
    role: "Internship HR Management",
    company: "OCP Group, Jorf Alasfar",
    description: `- Assisted in the development of HR policies and procedures during internship, ensuring alignment with organizational goals.
        - Participated in the organization of training programs, helping facilitate skill development in line with business needs.`,
    technologies: ["HR", "Management", "Training"],
  },
];

export const PROJECTS = [
  {
    title: "Ai-Commerce Powered Website",
    image: project1,
    description:
      "Comprehensive e-commerce platform with personalized product recommendations powered by AI algorithms. Key Technologies: Frontend: React.js or Angular with Tailwind CSS Backend: Node.js with Express Database: Supabase for product and user data Additional: Stripe for payment processing, JWT for authentication, Redis for caching AI Integration: TensorFlow.js for recommendation engine",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
    link: "https://w-ai-commerce.netlify.app/",
    github: "https://github.com/WalidNuev9/Ai-Commerce",
  },
  {
    title: "WA_AI_Assistant",
    image: project2,
    description:
      "AI Chatbot Interface using React for the front end and NodeJS for the back end, integrating OpenAI's ChatGPT API for natural language processing.",
    technologies: ["HTML", "CSS", "React", "OpenAI's ChatGPT API"],
    link: "https://wa-ai-assistant.netlify.app/",
    github: "https://github.com/WalidNuev9/WA_AI_Assistant",
  },
  {
    title: "Coin-brutal-insight",
    image: project3,
    description:
      "A neo-brutalist crypto asset tracker that fetches data from CoinCap API, displaying cryptocurrencies ranked by market cap with detailed price history graphs when you click on an asset.",
    technologies: ["LOVABLE.Dev", "HTML", "CSS", "React", "Vite", "CoinCap API"],
    link: "https://preview--coin-brutal-insight.lovable.app/",
    github: "https://github.com/WalidNuev9/coin-brutal-insight",
  },
  {
    title: "AI Chatbot With Node.js & The ChatGPT API",
    image: project4,
    description:
      "ChatGPT API integred in a chatbot with Node.js. The chatbot is powered by the GPT-3.5 Turbo model. a general chatbot that can talk about anything. Able to answer questions, generate code, tell jokes, and much more. It's essentially ChatGPT, but within your own application with a Node.js wrapper. Chat right within your terminal",
    technologies: ["HTML", "CSS", "NodeJS", "OpenAI API", "Bolt"],
    github: "https://github.com/WalidNuev9/ai-chatbot-nodejs",
  },
  {
    title: "TaskFlow V0",
    image: project5,
    description:
      "application web minimaliste permettant aux utilisateurs de créer, organiser et suivre des projets en gérant des tâches sous forme de cartes sur des tableaux. La version 0 vise à valider les concepts clés : gestion de projets, organisation par colonnes (listes), création/modification/suppression de tâches, et collaboration en temps réel entre utilisateurs sur un même tableau.",
    technologies: ["HTML", "CSS", "Typescript", "React", "Node.js", "Supabase"],
    github: "https://github.com/WalidNuev9/Task-Flow",
  },
];

export const CONTACT = {
  address: "El Jadida, Grand Casablanca, Morocco",
  phoneNo: "+212 617930524",
  email: "Wbelegchour@gmail.com",
  github: "https://github.com/WalidNuev9",
  linkedin: "https://www.linkedin.com/in/walid-belegchour-5a929a157/",
};
