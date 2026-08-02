import site from "~/config/site"

export default function Experience() {
    return (
        <div class='px-8 mt-8 mb-16 text-base leading-relaxed tracking-wide'>
            <div class='mb-8 space-y-2'>
                <p class='text-sm uppercase tracking-[0.22em] text-gs-70'>Where I have been</p>
                <p>
                    A short history about me.
                </p>
            </div>
            <div class=''>
                <For each={site.about_me.experience}>
                    {(item, index) => {
                        return (
                            <div class='grid grid-cols-[auto_1fr] w-[50vw]'>
                                <div class='w-8 flex justify-center relative'
                                    classList={{
                                        'after:content-[""] after:absolute after:top-0 after:-bottom-6 after:w-0.5 after:bg-accent-40': index() != site.about_me.experience.length - 1
                                    }}
                                >
                                    <div class='w-4 h-4 rounded-full bg-accent-40 border-bg border-2 z-10'></div>
                                </div>
                                <div class='ml-4 mb-4'>
                                    <p class='text-xl'>{item.place}</p>
                                    <p class='text-gs-50 text-sm'>{item.years} • {item.location}</p>
                                    <p class='text-sm'>{item.description}</p>
                                </div>
                            </div>
                        )
                    }}
                </For>
            </div>
        </div>
    )
}