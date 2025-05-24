const background = [
    {
        eduCards: [
            {
                id: 1,
                title: 'Master of Computer Applications',
                degree: 'Computer Science',
                detail: "I've completed my master's degree in Computer Science from a Visvesvaraya Technological University, where I gained a strong foundation in programming, algorithms, data structures, and software development.",
                year: '2023 - 2025',
                grade: 'CGPA 8.1/10'
            },
            {
                id: 2,
                title: 'Bachelor of computer applications',
                degree: 'Computer Science',
                detail: "I've completed my bachelor's degree in Computer Science from a Mahatma Gandhi Vidyapeeth, where I gained a strong foundation in programming, algorithms, data structures, and software development.",
                year: '2019 - 2022',
                grade: 'CGPA 7.5/10'
            },
            {
                id: 3,
                title: 'Intermediate',
                degree: 'Science',
                detail: "I completed my intermediate education with a focus on science subjects, including Mathematics, Physics, and Chemistry, which provided me with a solid foundation for my further studies in Computer Science.",
                year: '2018 - 2019',
                grade: '58%'
            },
            {
                id: 3,
                title: 'Higher Secondary',
                degree: 'Science',
                detail: "I completed my higher secondary education with a focus on science subjects, including Mathematics, Physics, and Chemistry, which provided me with a solid foundation for my further studies in Computer Science.",
                year: '2017 - 2018',
                grade: '68%'
            }
        ],
        expCards: [
            {
                id: 1,
                title: 'Jobify',
                role: 'Full Stack',
                url: 'https://jobify.live',
                desc: 'As a frontend developer, I use React, Next & JavaScript to build user interfaces for web applications.',
                year: '11/2024 - Present',
                location: 'Bangalore'
            }
        ]
    }
];

// Export the data directly for client-side imports
export default background[0]; // Export the first item directly since it contains all the data

// Keep the API handler for server-side rendering
export function handler(req, res) {
    res.status(200).json(background[0])
}
