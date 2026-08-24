import { children, splitProps } from "solid-js";

export const Link = (props) => {
    const resolved = children(() => props.children);

    if (props.external) {
        return (
            <a 
                target="_blank" 
                rel="noopener noreferrer external" 
                {...props}
            >
                {resolved()}
            </a>
        );
    } else if (props.public) {
        return (
            <a 
                rel="external"
                {...props}
            >
                {resolved()}
            </a>
        );
    } else {
        return (
            <a 
                {...props}
            >
                {resolved()}
            </a>
        );
    }
};

export const IconLink = (props) => {
    const [local, others] = splitProps(props, ["class"]);

    return (
        <Link 
            {...others} 
            class={`cursor-pointer hover:bg-accent-30/30 p-2 rounded-md grid place-items-center transition-all ${local.class || ""}`}
        />
    );
};