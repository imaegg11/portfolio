import { For } from "solid-js";
import { twMerge } from "tailwind-merge";
import Tag from "./tag";
import Icon from "~/utils/icon";
import { Link } from "~/utils/link";
import trim from "~/utils/trim";

export function ProjectTile(props) {

    const proj = props.project 
    const frontmatter = proj.frontmatter

    const aspect = frontmatter.aspect

    let ex_class = ''

    const col_span = ['lg:col-span-1', 'lg:col-span-2', 'lg:col-span-3']
    const row_span = ['lg:row-span-1', 'lg:row-span-2', 'lg:row-span-3', 'lg:row-span-4', 'lg:row-span-5']

    if (aspect) {
        ex_class = `${col_span[aspect[0] - 1]} ${row_span[aspect[2] - 1]} lg:grid lg:grid-cols-[3fr_4fr]`
    }

    return (
        <Link href={`/project/${frontmatter.slug}`}
            class={twMerge('overflow-hidden border border-gs-90 rounded-xl cursor-pointer select-none', ex_class, props.class)}
        >
            <img class='object-cover'
                classList={{
                    'w-full': !aspect,
                    'lg:h-full': aspect
                }}
                src={`${trim(frontmatter.image.url)[0]}_sanitized${trim(frontmatter.image.url)[1]}`} alt={frontmatter.image.alt}></img>
            <div class='p-4'>
                <p class='text-xl'>{frontmatter.title}</p>
                <p class='text-sm line-clamp-4'
                    classList={{
                        'lg:line-clamp-8': aspect,
                    }}
                >
                    {frontmatter.description}
                </p>
                <div class='flex gap-2 mt-4 items-center'>
                    <div class='my-auto'>
                        {Icon.tag(18)}
                    </div>
                    <div class='flex flex-wrap gap-2 max-h-6 overflow-hidden'>
                        <For each={frontmatter.tags}>
                            {(item) => {
                                return <Tag name={item}></Tag>
                            }}
                        </For>
                    </div>
                </div>
            </div>
        </Link>
    )
}