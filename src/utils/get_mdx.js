export function get_all_mdx(location) {
    const pages = import.meta.glob(`/src/config/**/*.mdx`, {
        eager: true
    });

    const filtered_paths = Object.keys(pages).filter((item) => item.startsWith(`/src/config/${location}/`))

    return filtered_paths.reduce((obj, item) => {
        obj[item] = pages[item]
        return obj
    }, {})
}

export function get_mdx(slug, location) {
    const pages = get_all_mdx(location)

    let content = undefined 

    for (let key of Object.keys(pages)) {
        if (pages[key].frontmatter?.slug == slug) {
            content = pages[key]
            break
        }
    }

    return content
}