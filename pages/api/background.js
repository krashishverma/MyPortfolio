const background = [
    {
        eduCards: [
            {
                id: 0,
                title: "Visvesvaraya Technological University",
                degree: "Master of Computer Applications (MCA)",
                detail: "Pursuing MCA from VTU.",
                year: "2023–2025 (expected)",
              },
              {
                id: 1,
                title: "Mahatma Gandhi Vidyapeeth",
                degree: "Bachelor of Computer Applications (BCA)",
                detail: "Completed BCA from Mahatma Gandhi Vidyapeeth.",
                year: "Completed in 2022",
              },
              {
                id: 2,
                title: "Swami SS Inter College",
                degree: "Intermediate",
                detail: "Completed Intermediate at Swami SS Inter College.",
                year: "Completed in 2019",
              },
              {
                id: 3,
                title: "Swami SS School",
                degree: "High School",
                detail: "Completed High School at Swami SS School.",
                year: "Completed in 2017",
              },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'Jobify',
                role: 'Full Stack',
                url: 'https://jobify.live',
                desc: 'As a frontend developer, I use React, Next & JavaScript to build user interfaces for web applications.',
                year: '11/2024 - Present',
                location: 'Bangalore'
            },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
