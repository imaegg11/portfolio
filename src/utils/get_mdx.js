export function get_mdx(slug, location) {
    const pages = import.meta.glob(`/src/config/**/*.mdx`, {
        eager: true
    });

    const content = pages[`/src/config/${location}/${slug}.mdx`]

    return content
}