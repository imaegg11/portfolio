import { Show } from "solid-js"
import site from "~/config/site"

export default function Interests() {
    const categories = site.about_me.interests;

    return (
        <div class='px-8 mt-8 mb-16 text-base leading-relaxed tracking-wide'>
            <div class='mb-8 space-y-2'>
                <p class='text-sm uppercase tracking-[0.22em] text-gs-70'>A few things I like</p>
                <p>
                    A short list of some of things I like. Not a comprehensive list, with no particular ordering.
                </p>
            </div>

            <div class='grid gap-8 grid-cols-2'>
                {categories.map((category) => (
                    <div class='space-y-3 border-t border-gs-80 pt-4 px-4'>
                        <p class='text-lg'>{category.title}</p>
                        <div class='grid' 
                            classList={{
                                'grid-cols-2': category.selected
                            }}
                        >
                            <ol class='space-y-1 pl-5 marker:text-accent-30 list-[">"]'>
                                {category.items.map((item) => (
                                    <li class='pl-4'
                                        classList={{
                                            "marker:text-gs-50 list-['–']": category.selected?.item != item,
                                            "text-accent-20": category.selected?.item == item
                                        }}
                                    >{item}</li>
                                ))}
                            </ol>
                            <Show when={category.selected}>
                                <div class='space-y-2'>
                                    <Show when={category.selected.img}>
                                        <img class='max-h-32 mx-auto' src={category.selected.img}></img>
                                    </Show>
                                    <Show when={category.selected.caption}>
                                        <p class='text-gs-50 text-center text-xs rounded-md'>{category.selected.caption}</p>
                                    </Show>
                                </div>
                            </Show>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}