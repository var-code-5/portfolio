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
        title: 'Real Estate',
        slug: 'property-pro',
        techStack: [
            'React.js',
            'Redux',
            'Tailwind CSS',
            'React i18n',
            'Framer Motion',
        ],
        thumbnail: '/projects/thumbnail/property-pro.jpg',
        longThumbnail: '/projects/long/property-pro.jpg',
        images: [
            '/projects/images/property-pro-1.png',
            '/projects/images/property-pro-2.png',
            '/projects/images/property-pro-3.png',
        ],
        liveUrl: 'https://demo.propertypro.siphertech.com/',
        year: 2023,
        description:
            'PropertyPro is a real estate management platform offering users a seamless experience to explore, manage, and view property listings. The application emphasizes accessibility and responsive design, ensuring a smooth interface across devices.',
        role: `As the frontend developer, I:<br/>
        - Built the frontend using React, Redux, RTK Query, Framer Motion, and Tailwind CSS.<br/>
        - Integrated dynamic state management for efficient handling of property data.<br/>
        - Implemented multi-language support with React i18n to cater to diverse audiences.<br/>
        - Enhanced user interaction with animations and transitions using Framer Motion.`,
    },
    {
        title: 'Consulting Finance',
        slug: 'crenotive',
        techStack: ['HTML', 'CSS & SCSS', 'Javascript', 'Bootstrap'],
        thumbnail: '/projects/thumbnail/consulting-finance.jpg',
        longThumbnail: '/projects/long/consulting-finance.jpg',
        images: [
            '/projects/images/consulting-finance-1.png',
            '/projects/images/consulting-finance-2.png',
            '/projects/images/consulting-finance-3.png',
        ],
        sourceCode: 'https://github.com/Tajmirul/crenotive',
        liveUrl: 'https://crenotive.netlify.app/',
        year: 2023,
        description:
            'I developed Crenotive, a portfolio website using Html, SASS, and jQuery to showcase services and expertise. The design focuses on responsive user experience and effective presentation of professional achievements.',
        role: ``,
    },
    {
        title: 'devLinks',
        slug: 'devLinks',
        techStack: ['Next.js', 'Formik', 'Drag & Drop', 'Tailwind CSS'],
        thumbnail: '/projects/thumbnail/devLinks.jpg',
        longThumbnail: '/projects/long/devLinks.jpg',
        images: [
            '/projects/images/devLinks-1.png',
            '/projects/images/devLinks-2.png',
            '/projects/images/devLinks-3.png',
        ],
        sourceCode: 'https://github.com/Tajmirul/devsLink',
        liveUrl: 'https://devlinks-demo.vercel.app/auth/signin',
        year: 2023,
        description: `One of the most challenging projects in Frontend Mentor.<br/><br/>

            I developed a LinkSharing App as part of the Frontend Mentor challenge, utilizing React, Redux, and Tailwind CSS to create a responsive and feature-rich platform. The app allows users to share, save, and explore links, with a focus on intuitive design and smooth navigation. Advanced state management ensures efficient data handling for user interactions.`,
        role: ``,
    },
];
