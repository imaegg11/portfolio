export default {
    title: import.meta.env.PUBLIC_NAME,
    description: 'Portfolio website',
    lang: 'en-US',
    author: {
        name: import.meta.env.PUBLIC_NAME,
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
            { label: 'Resume', href: '/resume' },
            { label: 'Homepage', href: 'https://ai.home-bcp.pages.dev/', external: true },
        ]
    ],
    social: {
        github: `https://github.com/${import.meta.env.PUBLIC_GITHUB}`,
        linkedin: 'https://www.linkedin.com/',
        email: `mailto:${import.meta.env.PUBLIC_EMAIL}`
    },
    ctas: {

    },
    assets: {
        logo: '',
        favicon: '',
    },
    meta: {

    }
}