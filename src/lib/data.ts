import { IProject } from "@/types";

export const PROJECTS: IProject[] = [
    {
        title: 'Bureaucritic',
        slug: 'bureaucritic',
        liveUrl: 'https://bureaucritic.varshith.tech/', // Add your live URL here
        sourceCode: 'https://github.com/var-code-5/bureaucritic',
        year: 2025,
        description: `
      Bureaucritic is a comprehensive administrative management system designed to streamline bureaucratic processes and event management. The platform provides an intuitive interface for managing organizational events, participant registration, and administrative workflows.<br/><br/>
      
      Key Features:<br/>
      <ul>
        <li>📋 Event Management: Complete event lifecycle management with registration and participant tracking</li>
        <li>👥 Participant Management: Efficient handling of participant data and registration details</li>
        <li>📊 Administrative Dashboard: Centralized control panel for managing all system operations</li>
        <li>📱 Responsive Design: Fully optimized for desktop, tablet, and mobile devices</li>
        <li>⚡ Performance Optimized: Built with Next.js App Router for optimal loading speeds</li>
        <li>🔍 Search & Filter: Advanced filtering capabilities for participant and event data</li>
        <li>📄 Report Generation: Automated generation of event reports and participant summaries</li>
      </ul><br/>
      
      Technical Highlights:
      <ul>
        <li>Implemented modern Next.js 13+ App Router architecture</li>
        <li>Developed reusable components with TypeScript for type safety</li>
        <li>Integrated server-side rendering for improved SEO and performance</li>
        <li>Built responsive UI components with modern CSS frameworks</li>
        <li>Configured efficient data management and state handling</li>
      </ul>
      `,
        role: `
      Full-Stack Developer<br/>
      Led the complete development process:
      <ul>
        <li>🏗️ Architecture: Designed scalable application structure using Next.js App Router</li>
        <li>🎨 Frontend: Developed responsive UI components with modern design principles</li>
        <li>⚙️ Backend: Implemented server-side logic for data management and API routes</li>
        <li>🔧 Configuration: Set up development environment and build processes</li>
        <li>🚀 Deployment: Configured deployment pipeline and hosting setup</li>
      </ul>
      `,
        techStack: [
            'Next.js',
            'TypeScript',
            'React',
            'Tailwind CSS',
            'Node.js',
            'Express',
            'PostgreSQL',
            'Groq'
        ],
        thumbnail: '/projects/bureaucritic/1.png',
        longThumbnail: '/projects/bureaucritic/1.png', 
        images: [
            '/projects/bureaucritic/1.png',
            '/projects/bureaucritic/2.png',
            '/projects/bureaucritic/3.png',
        ],
    },
    {
        title: 'Riviera',
        slug: 'riviera',
        techStack: [
            'React',
            'Redux',
            'Next.js',
            'Tailwind CSS',
            'Framer Motion',
            'debouncing',
            'Api Integration',
        ],
        thumbnail: '/projects/riviera/1.png',
        longThumbnail: '/projects/riviera/1.png',
        images: [
            '/projects/riviera/1.png',
            '/projects/riviera/3.png',
            '/projects/riviera/4.png',
            '/projects/riviera/5.png',
            '/projects/riviera/6.png',
        ],
        liveUrl: 'https://riviera.varshith.tech/',
        year: 2025,
        description: `Riviera 2025, VIT Vellore's premier Annual International Sports and Cultural Festival. With thousands of participants from colleges worldwide for three days of exhilarating events, competitions, and performances.`,
        role: `As the frontend developer in a team of two people, I: <br/>
        - Developed the frontend using React, Redux, Next.js, and Tailwind CSS.<br/>
        - Implemented debouncing techniques for efficient API calls. Decreasing the load on the server and improving response times by 30%.<br/>
        - Integrated APIs for dynamic data handling.<br/>
        - Ensured responsive design for optimal user experience across devices.`,
    },
    {
        title: 'Enrollment Site',
        slug: 'enrollment-site',
        techStack: [
            'Next.js',
            'Django',
            'Postgressql',
            'Tailwind CSS',
        ],
        thumbnail: '/projects/recruitments/1.png',
        longThumbnail: '/projects/recruitments/1.jpg',
        images: [
            '/projects/recruitments/1.png',
            '/projects/recruitments/2.png',
            '/projects/recruitments/3.png',
            '/projects/recruitments/4.png',
            '/projects/recruitments/5.png',
            '/projects/recruitments/6.png',
        ],
        liveUrl: 'https://recruitments.varshith.tech/',
        year: 2025,
        description:
            'A recruitment platform designed to streamline the hiring process for companies and candidates(Current instance is of the GDSC club). The platform allows companies to post job openings, manage applications, and communicate with candidates efficiently.',
        role: `As a full-stack developer I:<br/>
        - developed the platform end-to-end using Next.js, PostgreSQL and Tailwind CSS.<br/>
        - Implemented Anti-cheat mechanisms to ensure fair evaluations.<br/>
        - Integrated Django for backend services, ensuring secure and efficient data handling.<br/>
        - Ensured smooth user experience with lower latency for 5k+ concurrent users.<br/>`,
    },
    {
        title: 'AO3 Chrome Extension',
        slug: 'ao3-chrome-extension',
        techStack: [
            'React.js',
            'Tailwind CSS',
            'Express.js',
            'PostgreSQL',
        ],
        thumbnail: '/projects/AO3/1.png',
        longThumbnail: '/projects/AO3/1.png',
        images: [
            '/projects/AO3/1.png',
            '/projects/AO3/2.png',
            '/projects/AO3/3.png',
            '/projects/AO3/4.png',
            '/projects/AO3/5.png',
        ],
        sourceCode: 'https://github.com/GDGVIT/ao3-chrome-extension',
        year: 2024,
        description:
            'AO3 Chrome Extension is a browser extension designed to enhance the user experience on Archive of Our Own (AO3). The extension provides features like recommendations, bookmarking, and improved navigation for AO3 users.',
        role: `As the Backend developer, I:<br/>
        - Built the backend using Express.js and PostgreSQL.<br/>
        - Custom API for fetching and parsing the A03 website`,
    },
    {
        title: 'DevBoard',
        slug: 'devboard',
        techStack: [
            'Next.js',
            'Tailwind CSS',
            'Gorilla Mux',
            'MongoDB',
            'Redis'
        ],
        thumbnail: '/projects/devboard/1.png',
        longThumbnail: '/projects/devboard/1.png',
        images: [
            '/projects/devboard/1.png',
            '/projects/devboard/2.png',
            '/projects/devboard/3.png',
        ],
        liveUrl: 'https://devboard-frontend-ten.vercel.app/',
        year: 2025,
        description:
            'I developed DevBoard, a collaborative platform for developers make custom github widgets. The platform allows users to create, share, and customize widgets that display GitHub statistics and information in a visually appealing way.',
        role: `Backend Developer<br/>
        - Currently under Development<br/>`,
    },
    {
    title: 'Travelio MCP',
    slug: 'travelio-mcp',
    sourceCode: 'https://github.com/var-code-5/travelio-mcp',
    year: 2025,
    description: `
      Travelio is an advanced AI-powered travel planning application that revolutionizes how users create personalized travel itineraries. Built with a robust MCP (Model-Control-Presentation) architecture, the system integrates multiple AI providers to deliver intelligent travel recommendations and seamless planning experiences.<br/><br/>
      
      Key Features:<br/>
      <ul>
        <li>🤖 AI-Powered Itinerary Generation: Custom travel plans using Google Gemini, OpenAI, and Groq APIs</li>
        <li>💬 Interactive Chatbot Interface: Conversational travel planning through CLI and API endpoints</li>
        <li>🗄️ PostgreSQL Database: Robust data storage for travel information, user preferences, and itineraries</li>
        <li>🏗️ MCP Architecture: Scalable Model-Control-Presentation design for maintainable code</li>
        <li>🔄 Database Migrations: Alembic-powered schema management with version control</li>
        <li>📊 Multi-AI Integration: Supports multiple AI providers for enhanced recommendation accuracy</li>
        <li>⚡ Fast Package Management: UV-powered dependency management for optimal performance</li>
      </ul><br/>
      
      Technical Highlights:
      <ul>
        <li>Implemented sophisticated MCP server architecture for scalable travel data processing</li>
        <li>Designed modular API structure with clean separation of concerns</li>
        <li>Integrated multiple AI providers (Gemini, OpenAI, Groq) with fallback mechanisms</li>
        <li>Built comprehensive database schema with efficient migration system</li>
        <li>Developed interactive chatbot interface for natural language travel planning</li>
        <li>Created automated database seeding and testing infrastructure</li>
      </ul>
      `,
    role: `
      Backend Developer & System Architect<br/>
      Led the complete backend development and system design:
      <ul>
        <li>🏛️ Architecture Design: Implemented scalable MCP architecture with clean separation of layers</li>
        <li>🤖 AI Integration: Configured multiple AI providers (Google Gemini, OpenAI, Groq) with intelligent routing</li>
        <li>🗃️ Database Engineering: Designed PostgreSQL schema with Alembic migrations for travel data management</li>
        <li>🔌 API Development: Built comprehensive REST API endpoints for travel planning functionality</li>
        <li>💬 Chatbot Implementation: Developed conversational interface for natural language travel queries</li>
        <li>🧪 Testing Framework: Implemented pytest-based testing suite for reliable code quality</li>
        <li>📦 DevOps Setup: Configured UV package management and automated deployment processes</li>
        <li>📚 Documentation: Created comprehensive setup guides and API documentation</li>
      </ul>
      `,
    techStack: [
        'Python 3.13+',
        'PostgreSQL',
        'Google Gemini API',
        'OpenAI API',
        'Groq API',
        'Alembic',
        'pytest',
        'UV Package Manager',
        'MCP Architecture',
        'REST API',
        'CLI Interface',
        'Database Migrations',
    ],
    thumbnail: '/projects/travelio/1.png',
    longThumbnail: '/projects/travelio/1.png',
    images: [
        '/projects/travelio/1.png',
    ],
}
];
