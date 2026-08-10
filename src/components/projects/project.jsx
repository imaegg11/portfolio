import { For } from "solid-js";
import { twMerge } from "tailwind-merge";
import Tag from "./tag";
import Icon from "~/utils/icon";


export function Project(props) {

    const aspect = () => props.aspect;
    let ex_class = ''

    const col_span = ['lg:col-span-1', 'lg:col-span-2', 'lg:col-span-3']
    const row_span = ['lg:row-span-1', 'lg:row-span-2', 'lg:row-span-3', 'lg:row-span-4', 'lg:row-span-5']

    if (aspect()) {
        ex_class = `${col_span[aspect()[0] - 1]} ${row_span[aspect()[2] - 1]} lg:grid lg:grid-cols-[3fr_4fr]`
    }

    const pos = ['wt_sanitized.png', 'wild_robot_sanitized.jpg', 'flower_sanitized.jpg']

    // temp
    if (import.meta.env.PROD) {
        for (let i = 0; i < pos.length; i++) {
            pos[i] = 'projects/' + pos[i]
        }
    }

    const tags = ['Multiplayer', 'Military', 'Vehicle Combat', 'War Simulation', 'Free-to-play', 'Strategy']

    return (
        <div class={twMerge('overflow-hidden border border-gs-90 rounded-xl cursor-pointer select-none', ex_class, props.class)}>
            <img class='object-cover'
                classList={{
                    'w-full': !aspect(),
                    'lg:h-full': aspect()
                }}
                src={pos[Math.floor(Math.random() * 3)]}></img>
            <div class='p-4'>
                <p class='text-xl'>War Thunder</p>
                <p class='text-sm line-clamp-4'
                    classList={{
                        'lg:line-clamp-8': aspect(),
                    }}
                >
                    War Thunder is a free-to-play online multiplayer military combat game that allows players to take control of a massive variety of historically inspired vehicles, including aircraft, tanks, helicopters, and naval ships from the early 20th century to the modern era. The game focuses on realistic combined-arms warfare, where players engage in large-scale battles using strategy, teamwork, and knowledge of their vehicles’ strengths and weaknesses.

                    Featuring thousands of accurately modeled vehicles from numerous nations, War Thunder offers multiple game modes ranging from arcade-style battles to highly realistic simulations. Players can research and unlock new vehicles, upgrade their lineups, and progress through detailed technology trees representing different military forces. With its emphasis on historical accuracy, tactical gameplay, and intense PvP combat, War Thunder provides an immersive battlefield experience for fans of military history, vehicle simulation, and competitive online warfare.
                </p>
                <div class='flex gap-2 mt-4 items-center'>
                    <div class='my-auto'>
                        {Icon.tag(18)}
                    </div>
                    <div class='flex flex-wrap gap-2 max-h-6 overflow-hidden'>
                        <For each={tags}>
                            {(item) => {
                                return <Tag name={item}></Tag>
                            }}
                        </For>
                    </div>
                </div>
            </div>
        </div>
    )
}