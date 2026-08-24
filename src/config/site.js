export default {
    title: "Alex Yan",
    description: 'Portfolio website',
    lang: 'en-US',
    author: {
        name: "Alex Yan",
        organization: 'University of Waterloo',
        location: 'Ontario, Canada',
        shortBio: 'a student, programmer, and gamer',
        avatar: '/flower.jpg'
    },
    nav: [
        [
            { label: 'About', href: '/about' },
            { label: 'Projects', href: '/projects' },
            { label: 'Posts', href: '/posts' }
        ],
        [
            { label: 'Resume', href: '/resume.pdf', external: true },
            { label: 'Homepage', href: 'https://ai.home-bcp.pages.dev/', external: true },
        ]
    ],
    social: {
        github: `https://github.com/imaegg11`,
        linkedin: 'https://www.linkedin.com/',
        // email: `mailto:contact@domain.com`
    },
    ctas: {

    },
    assets: {
        logo: '',
        favicon: '',
    },
    meta: {

    },
    about_me: {
        interests: [
            {
                title: "Video Games That I've Enjoyed",
                items: ["Minecraft", "War Thunder", "Aviassembly", "Bad North"],
                selected: {
                    item: "War Thunder",
                    img: "/wt.png",
                    caption: '"Terrible game. 0/10 would not recommend."',
                }
            },
            {
                title: "Sports That I Follow",
                items: ["Formula 1", "NHL (Maple Leafs)", "Any Canadian Team That's Close To Winning"],
            },
            {
                title: "Favourite Songs",
                items: ["Faded - Alan Walker", "High Hopes - Josie Edwards", "Idea 12 - Gibran Alcocer", "We Are The People - Empire Of The Sun"],
            },
            {
                title: "Favourite Movies / Shows",
                items: ["Shaolin Soccer", "Wild Robot", "Your Name", "Avatar: The Last Airbender"],
                selected: {
                    item: "Wild Robot",
                    img: "/wild_robot.jpg",
                }

            },
        ],
        experience: [
            {
                place: "William Lyon Mackenzie C.I",
                years: "Sep. 2022 - Jun. 2026",
                location: "Toronto, ON",
                description: "MACS Program"
            },
            {
                place: "University of Waterloo",
                years: "Incoming Sep. 2026",
                location: "Waterloo, ON",
                description: "Software Engineering, Co-op"
            },
        ]
    }
}