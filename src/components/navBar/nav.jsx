import { createSignal } from "solid-js";
import { Sidebar } from "./sidebar";

import site from "~/config/site";
import { Link } from "~/utils/link";

export default function Nav() {

    const [open, setOpen] = createSignal(false);

    return (
        <>
            <Sidebar open={open} setOpen={setOpen}></Sidebar>

            <div class='sticky top-0 py-10 px-40 h-24 w-full flex justify-between text-gs-20 tracking-wide text-sm'>
                <a href='/'>Home</a>
                <div class='flex gap-12'>
                    <For each={site.nav[0].slice(0, 2)}>
                        {(item) => <Link href={item.href}>{item.label}</Link>}
                    </For>
                    <button class='hover:cursor-pointer' onClick={() => setOpen(true)}>More...</button>
                </div>

            </div>
        </>
    )
}