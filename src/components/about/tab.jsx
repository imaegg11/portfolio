import { Show } from "solid-js"
import { createStore } from "solid-js/store"

import Experience from "./tabs/experience";
import Interests from "./tabs/interests";
import Skills from "./tabs/skills";
import { Dynamic } from "solid-js/web";

export default function Tab() {

    const [store, setStore] = createStore({
        content: {
            Experience: Experience,
            Skills: Skills,
            Interests: Interests
        }, 
        active: "Experience"
    })

    return (
        <div class='mt-12 text-[18px]'>
            <div class='flex space-x-8 px-8 items-center'>
                <For each={Object.keys(store.content)}>
                    {(key, index) => (
                        <>
                            <Show when={index() != 0}>
                                <div class="w-px h-6 bg-current text-gs-70 rotate-20"></div>
                            </Show>

                            <p onClick={() => setStore("active", key)} class={`${store.active == key ? 'text-accent-30' : ''} cursor-pointer hover:text-accent-30 transition-colors`}>{key}</p>
                        </>
                    )}
                </For>
            </div>
            <div class='px-8 mt-8'>
                <Dynamic component={store.content[store.active]}></Dynamic>
            </div>
        </div>
    )
} 