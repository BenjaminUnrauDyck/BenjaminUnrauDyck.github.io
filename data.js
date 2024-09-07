export const githubUsername = "BenjaminUnrauDyck";

export const Name = "Benjamin";
export const LastName = "Unrau Dyck";
export const FullName = `${Name} ${LastName}`;
export const mail = "benjaminunrau07@gmail.com`;

// Meta information
export const metaTitle = "Benjamin Unrau Dyck's Portfolio";
export const metaDescription = "Explore the portfolio of Benjamin Unrau Dyck, showcasing skills in software engineering, project management, and more.";
export const metaKeywords = "Benjamin Unrau Dyck, software engineer, portfolio, project management, certifications, web development";
export const metaAuthor = "Benjamin Unrau Dyck";

// Contact information
export const contactInfo = `I'm just an email or a message away on any platform. Send me an email at ${mail}, or find me on LinkedIn, Twitter, Facebook, or Instagram. Let’s start a conversation about your ideas or just enjoy a casual chat.`;

export const bio = [
    "I am a 23-year-old Computer Science student with a strong foundation in software development, specializing in backend technologies. I am particularly interested in Quality Assurance (QA), with a growing passion for automation and AI. My multilingual skills in German, English, and Spanish, combined with my growing technical expertise, make me a valuable asset in diverse, collaborative environments.",
];

export const languages = [
    {
        title: "German Communication",
        skillName: "German",
        color: "1",
        percentage: "100",
    },
    {
        title: "English Communication",
        skillName: "English",
        color: "2",
        percentage: "100",
    },
    {
        title: "Spanish Communication",
        skillName: "Spanish",
        color: "3",
        percentage: "90",
    }
];

export const skills = {
    "Programming and Scripting Languages": [
        {
            skillName: "Java",
            imagePath: "images/skills/java_logo.png",
        },
        {
            skillName: "Python",
            imagePath: "images/skills/python_logo.png",
        },
        {
            skillName: "JavaScript",
            imagePath: "images/skills/javascript_logo.png",
        },
        {
            skillName: "CSS",
            imagePath: "images/skills/css_logo.png",
        },
        {
            skillName: "C++",
            imagePath: "images/skills/c++_logo.png",
        }
    ],
    "Database Management Systems": [
        {
            skillName: "MySQL",
            imagePath: "images/skills/mysql_logo.png",
            description: "A relational database management system used for storing and retrieving data efficiently."
        }
    ],
    "Version Control and CI/CD Tools": [
        {
            skillName: "Git",
            imagePath: "images/skills/git_logo.png",
            description: "Version control system to track changes in source code during software development."
        }
    ]
};

export const experience = [
    {
        title: "WPG.srl",
        duration: "April 2023 - Present",
        subtitle: "Internship",
        details: [
            "Worked on a project utilizing OpenAI-Azure integration to develop a personalized AI coding assistant based on company guidelines.",
            "Conducted research on fine-tuning AI models and optimizing performance.",
            "Applied prompt engineering and instruction set development for enhanced AI functionalities."
        ],
        tags: ["AI", "OpenAI", "Azure", "Prompt Engineering", "QA"],
        icon: "briefcase",
    }
];

export const education = [
    {
        title: "Bachelor’s Degree in Computer Science",
        duration: "July 2021 - Present",
        subtitle: "Facultad Politécnica de la Universidad Nacional de Asunción (FP-UNA)",
        details: [
            "Pursuing a curriculum covering database management, object-oriented programming, and software development methodologies.",
            "Participated in academic projects, demonstrating leadership and problem-solving skills.",
            "Volunteered at university events, gaining hands-on experience in event management and technical support."
        ],
        tags: ["Algorithms", "Software Engineering", "Programming Languages", "Web Development", "Team Leadership"],
        icon: "graduation-cap",
    }
];

export const footer = [
    {
        label: "Dev Profiles",
        data: [
            {
                text: "GitHub",
                link: "https://github.com/BenjaminUnrauDyck",
            }
        ],
    },
    {
        label: "Resources",
        data: [
            {
                text: "Send me a mail",
                link: "mailto:benjaminunrau07@gmail.com",
            },
            {
                text: "Download Resume",
                link: "assets\\Benjamin_Unrau.pdf",
                target: "_blank"
            }
        ],
    },
    {
        label: "Social Profiles",
        data: [
            {
                text: "LinkedIn",
                link: "https://www.linkedin.com/in/benjamin-unrau-dyck/",
            },
            {
                text: "WhatsApp",
                link: "https://wa.me/595986361808",
            }
        ],
    },
    {
        label: "Copyright Text",
        data: [
            "Made with &hearts; by Benjamin Unrau Dyck.",
            "&copy; No Copyrights. Feel free to use this template."
        ],
    }
];
