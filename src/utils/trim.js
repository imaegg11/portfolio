// Yes I'm lazy

export default function trim(path) {
    const extname = path.split(".").at(-1)
    
    return [path.slice(0, -extname.length - 1), `.${extname}`]
}