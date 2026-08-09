export default function Tag(props) {
    const name = () => props.name

    const color_palette = [
        '#f2cdcd',
        '#cba6f7',
        '#f38ba8',
        '#f9e2af',
        '#a6e3a1',
        '#89dceb',
        '#b4befe'
    ]

    const color = color_palette[Math.floor(Math.random() * color_palette.length)]

    // I wonder where this idea was taken from 🤔

    return (
        <div class='px-2 py-1 bg-gs-90 rounded-md text-xs shrink-0'
            style={{ "color": color }}
        >
            {name()}
        </div>
    )
}