import { useContext } from "solid-js";
import { Sidebar } from "./sidebar";

import site from "~/config/site";
import { Link } from "~/utils/link";
import { SidebarContext } from "~/utils/context";
import { useLocation } from "@solidjs/router";

export default function Nav() {

    const { open, setOpen } = useContext(SidebarContext)

    const getLoc = () => useLocation().pathname;

    return (
        <>
            <Sidebar open={open} setOpen={setOpen}></Sidebar>

            {/* TODO: Fix this crap, can't get blur bg to look nice */}
            <div class='sticky z-100 top-0 py-10 px-40 h-24 w-full flex justify-between text-gs-20 tracking-wide text-sm'
                classList={{
                    'backdrop-blur-md': getLoc() !== '/'
                }}
            >
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