import { children, splitProps } from "solid-js";

export const Link = (props) => {
    const resolved = children(() => props.children);

    if (props.external) {
        return (
            <a 
                href={props.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                class={`${props.class || ""}`}
            >
                {resolved()}
            </a>
        );
    } else {
        return (
            <a 
                href={props.href} 
                class={`${props.class || ""}`}
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