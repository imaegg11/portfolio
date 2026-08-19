import { useParams } from "@solidjs/router";
import { HttpStatusCode } from "@solidjs/start";
import { For } from "solid-js";
import NotFound from "~/components/not_found";
import Tag from "~/components/projects/tag";

import { get_mdx } from "~/utils/get_mdx";
import Icon from "~/utils/icon";
import trim from "~/utils/trim";
import { IconLink, Link } from "~/utils/link";

export default function Project() {
    const params = useParams();

    const content = get_mdx(params.slug, 'projects')
    const frontmatter = content.frontmatter

    if (!content) {
        return (
            <>
                <HttpStatusCode code={404} />
                <NotFound></NotFound>
            </>
        )
    }

    return (
        <div class='lg:px-60 px-8 mt-4 mb-8'>
            <p class='text-3xl'>{frontmatter.title}</p>

            <Link href='/projects'
                class='flex text-xs text-gs-50 my-4 ml-8 hover:cursor-pointer underline-animation-container w-fit [&:hover>span:nth-child(1)]:-translate-x-2'
            >
                <span class='transition-all'>←</span> <span class='underline-animation w-fit ml-2'>Back</span>
            </Link>

            <div class='mt-4 lg:px-50 md:px-30'>
                <div>
                    <Link class='w-full frame-wrapper p-4 rounded-md' title={`View full image at: ${window.location.origin}/projects/${frontmatter.image.url}`} href={`/projects/${frontmatter.image.url}`}>
                        <img class='rounded-sm w-full'
                            src={`/projects/${trim(frontmatter.image.url)[0]}_sanitized${trim(frontmatter.image.url)[1]}`}
                            alt={frontmatter.image.alt}
                        ></img>
                    </Link>

                    <div class='flex gap-2 mt-4 lg:mx-8 items-center justify-between'>
                        <div class='flex gap-2'>
                            <div class='h-6 flex items-center'>
                                {Icon.tag(18)}
                            </div>
                            <div class='flex flex-wrap gap-2'>
                                <For each={frontmatter.tags}>
                                    {(tag) => (
                                        <Tag name={tag}></Tag>
                                    )}
                                </For>
                            </div>
                        </div>
                        <IconLink href={frontmatter.external}
                            external={true}
                        >{Icon.github()}</IconLink>
                    </div>

                </div>
                <div class='mt-4 mb-16 *:[all:revert] [&_:is(h1,h2,h3)]:text-accent-30 [&_li]:list-["-"] [&_li]:pl-4 [&_p]:leading-relaxed'>
                    <content.default components={{
                        a: (props) => (
                            <Link href={props.href}
                                class='hover:text-accent-30 transition-all'
                                external={true}
                            >{props.children}</Link>
                        )
                    }}></content.default>
                </div>
            </div>
        </div>
    )

}