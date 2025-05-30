const projects = {
  "Web Development": {
    "Full Stack": [
      {
        title: "E-commerce Platform",
        image: "https://images.unsplash.com/photo-1744646366936-874cf4a39b96?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D",
        liveSite: "https://example.com",
        industry: "Retail",
        published: "2024",
        deliverables: ["React", "Node.js", "MongoDB"],
        description: "A full-featured e-commerce platform with real-time inventory management."
      },
      {
        title: "Social Media Dashboard",
        image: "https://images.unsplash.com/photo-1747901718793-23dd4b160332?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D",
        liveSite: "https://example.com",
        industry: "Social Media",
        published: "2024",
        deliverables: ["Next.js", "Express", "PostgreSQL"],
        description: "Comprehensive social media management dashboard with analytics."
      }
    ],
    "Frontend": [
      {
        title: "Portfolio Website",
        image: "/images/project3.jpg",
        liveSite: "https://example.com",
        industry: "Creative",
        published: "2024",
        deliverables: ["React", "GSAP", "Tailwind"],
        description: "Interactive portfolio website with smooth animations."
      },
      {
        title: "Landing Page",
        image: "/images/project4.jpg",
        liveSite: "https://example.com",
        industry: "Marketing",
        published: "2024",
        deliverables: ["Vue.js", "SCSS", "Webpack"],
        description: "High-converting landing page with A/B testing."
      }
    ],
    "Backend": [
      {
        title: "API Gateway",
        image: "/images/project5.jpg",
        liveSite: "https://example.com",
        industry: "Technology",
        published: "2024",
        deliverables: ["Node.js", "Redis", "Docker"],
        description: "Scalable API gateway with rate limiting and caching."
      },
      {
        title: "Microservices Platform",
        image: "/images/project6.jpg",
        liveSite: "https://example.com",
        industry: "Enterprise",
        published: "2024",
        deliverables: ["Go", "Kubernetes", "gRPC"],
        description: "Distributed microservices architecture with service discovery."
      }
    ]
  },
  "AI/ML": {
    "Computer Vision": [
      {
        title: "Object Detection System",
        image: "/images/project7.jpg",
        liveSite: "https://example.com",
        industry: "Security",
        published: "2024",
        deliverables: ["Python", "TensorFlow", "OpenCV"],
        description: "Real-time object detection for security cameras."
      },
      {
        title: "Face Recognition App",
        image: "/images/project8.jpg",
        liveSite: "https://example.com",
        industry: "Biometrics",
        published: "2024",
        deliverables: ["PyTorch", "Dlib", "Flask"],
        description: "Face recognition system with emotion detection."
      }
    ],
    "Natural Language Processing": [
      {
        title: "Chatbot Platform",
        image: "/images/project9.jpg",
        liveSite: "https://example.com",
        industry: "Customer Service",
        published: "2024",
        deliverables: ["Python", "BERT", "FastAPI"],
        description: "AI-powered customer service chatbot."
      },
      {
        title: "Text Analysis Tool",
        image: "/images/project10.jpg",
        liveSite: "https://example.com",
        industry: "Analytics",
        published: "2024",
        deliverables: ["NLTK", "spaCy", "Django"],
        description: "Advanced text analysis and sentiment detection."
      }
    ],
    "Predictive Analytics": [
      {
        title: "Sales Forecasting",
        image: "/images/project11.jpg",
        liveSite: "https://example.com",
        industry: "Retail",
        published: "2024",
        deliverables: ["Python", "Scikit-learn", "Pandas"],
        description: "Machine learning model for sales prediction."
      },
      {
        title: "Risk Assessment System",
        image: "/images/project12.jpg",
        liveSite: "https://example.com",
        industry: "Finance",
        published: "2024",
        deliverables: ["XGBoost", "NumPy", "Flask"],
        description: "AI-powered risk assessment for financial services."
      }
    ]
  },
  "UI/UX": {
    "Mobile Design": [
      {
        title: "Fitness App UI",
        image: "/images/project13.jpg",
        liveSite: "https://example.com",
        industry: "Health",
        published: "2024",
        deliverables: ["Figma", "Adobe XD", "Prototyping"],
        description: "User-centered fitness tracking app design."
      },
      {
        title: "Food Delivery App",
        image: "/images/project14.jpg",
        liveSite: "https://example.com",
        industry: "Food",
        published: "2024",
        deliverables: ["Sketch", "Principle", "User Testing"],
        description: "Intuitive food delivery app interface."
      }
    ],
    "Web Design": [
      {
        title: "E-learning Platform",
        image: "/images/project15.jpg",
        liveSite: "https://example.com",
        industry: "Education",
        published: "2024",
        deliverables: ["Figma", "Adobe XD", "Wireframing"],
        description: "Engaging e-learning platform design."
      },
      {
        title: "SaaS Dashboard",
        image: "/images/project16.jpg",
        liveSite: "https://example.com",
        industry: "Technology",
        published: "2024",
        deliverables: ["Sketch", "InVision", "User Research"],
        description: "Clean and functional SaaS dashboard design."
      }
    ],
    "Brand Identity": [
      {
        title: "Brand Guidelines",
        image: "/images/project17.jpg",
        liveSite: "https://example.com",
        industry: "Branding",
        published: "2024",
        deliverables: ["Illustrator", "Photoshop", "Typography"],
        description: "Comprehensive brand identity system."
      },
      {
        title: "Logo Design System",
        image: "/images/project18.jpg",
        liveSite: "https://example.com",
        industry: "Branding",
        published: "2024",
        deliverables: ["Illustrator", "Brand Strategy", "Color Theory"],
        description: "Versatile logo design system with variations."
      }
    ]
  },
  "Blockchain": {
    "DeFi": [
      {
        title: "DEX Platform",
        image: "/images/project19.jpg",
        liveSite: "https://example.com",
        industry: "Finance",
        published: "2024",
        deliverables: ["Solidity", "Web3.js", "React"],
        description: "Decentralized exchange platform."
      },
      {
        title: "Yield Farming Protocol",
        image: "/images/project20.jpg",
        liveSite: "https://example.com",
        industry: "Finance",
        published: "2024",
        deliverables: ["Solidity", "Hardhat", "Ethers.js"],
        description: "Automated yield farming protocol."
      }
    ],
    "NFT": [
      {
        title: "NFT Marketplace",
        image: "/images/project21.jpg",
        liveSite: "https://example.com",
        industry: "Art",
        published: "2024",
        deliverables: ["Solidity", "IPFS", "Next.js"],
        description: "NFT marketplace for digital art."
      },
      {
        title: "NFT Game Assets",
        image: "/images/project22.jpg",
        liveSite: "https://example.com",
        industry: "Gaming",
        published: "2024",
        deliverables: ["Solidity", "Unity", "Web3"],
        description: "NFT-based game asset system."
      }
    ],
    "Smart Contracts": [
      {
        title: "DAO Platform",
        image: "/images/project23.jpg",
        liveSite: "https://example.com",
        industry: "Governance",
        published: "2024",
        deliverables: ["Solidity", "OpenZeppelin", "React"],
        description: "Decentralized autonomous organization platform."
      },
      {
        title: "Supply Chain Tracking",
        image: "/images/project24.jpg",
        liveSite: "https://example.com",
        industry: "Logistics",
        published: "2024",
        deliverables: ["Solidity", "Chainlink", "Node.js"],
        description: "Blockchain-based supply chain tracking system."
      }
    ]
  }
};

export default projects;
