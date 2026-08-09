import site from "~/config/site"
import { Link } from "~/utils/link"
import Icon from "~/utils/icon"

export function Sidebar(props) {

    const hash = import.meta.env.PROD ? __COMMIT_HASH__ : "b34ccafb125a47776e967262e0106e0930f39477"
    const short = hash.slice(0, 7)
    const commit_url = `https://github.com/imaegg11/portfolio/commit/${hash}`

    return (
        <div>
            <div
                onClick={() => props.setOpen(false)}
                class={(props.open() ? 'backdrop-blur-sm z-110 ' : '-z-10') + ' fixed inset-0 transition-all duration-300 ease-in-out'}>
            </div>

            <div class={(props.open() ? 'translate-x-0' : 'translate-x-full') + ' fixed right-0 z-120 w-64 h-screen bg-bg border-l-border border-l transition-transform duration-300 ease-in-out p-6'}>
                <div class='h-full flex flex-col justify-between'>
                    <div class='space-y-4 select-none'>
                        <div class='w-full flex justify-between'>
                            <p class='text-lg'>Navigation</p>
                            <div class="hover:bg-accent-30/15 transition-all p-1 rounded-md cursor-pointer grid place-items-center" onClick={() => props.setOpen(false)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" ><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                            </div>
                        </div>

                        <div class='*:px-4 space-y-4 *:cursor-pointer *:transition-all *:hover:text-accent-30'>
                            <For each={site.nav}>
                                {(section) =>
                                    <>
                                        <hr></hr>
                                        <For each={section}>
                                            {(link) =>
                                                <div class='w-min'>
                                                    <Link href={link.href} onClick={() => !link.external ? props.setOpen(false) : 0} external={link.external}>
                                                        {link.label}
                                                    </Link>
                                                </div>
                                            }
                                        </For>
                                    </>
                                }
                            </For>
                        </div>
                    </div>

                    <div class="text-gs-60 text-xs">
                        <p>© 2026 imaegg11</p>

                        <div class='flex'>
                            <p>Current build version: </p>
                            <Link
                                href={commit_url}
                                external={true}
                                class="flex items-center hover:text-accent-30 transition-colors"
                                title={`View deployment commit ${hash}`}
                            >
                                {Icon.commit()}
                                <p>{short}</p>
                            </Link>
                        </div>

                        <p>

                            <Link
                                href="https://v2.jasoncameron.dev/abacus/"
                                external={true}
                                class="hover:text-accent-30 transition-colors"
                            >
                                123,456,789
                            </Link> views and counting
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}