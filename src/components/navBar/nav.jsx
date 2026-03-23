import { A } from "@solidjs/router";
import { createSignal, Show } from "solid-js";
import { Sidebar } from "./sidebar";

export default function Nav() {

    const [open, setOpen] = createSignal(false);

    return (
        <>
            <Sidebar open={open} setOpen={setOpen}></Sidebar>


            <div class='sticky top-0 py-10 px-40 h-24 w-full flex justify-between text-gs-20 tracking-wide text-sm'>
                <A href='/'>Home</A>
                <div class='flex gap-12'>
                    <A href='/about'>About</A>
                    <p>Projects</p>
                    <button class='hover:cursor-pointer' onClick={() => setOpen(true)}>More...</button>
                </div>

            </div>
        </>
    )
}