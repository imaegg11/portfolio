import site from "~/config/site";

import { Link } from "~/utils/link";
import Icon from "~/utils/icon";

export default function AboutMe() {
    const name = site.author.name;

    return  (
        <div>
            <p class='text-3xl'>About Me</p>
            <div class='grid gap-4 grid-cols-[1fr_2fr] mt-8'>
                <div class="frame-wrapper p-4">
                    <img class='object-cover h-full' src={site.author.avatar}></img>
                </div>
                <div class='px-8 mt-4 leading-relaxed tracking-wide space-y-4'>
                    <p>
                        Hello! I'm {name.split(" ")[0]} and I am a incoming student to the University of Waterloo studying software engineering. Having picked up programming at the start of the COVID pandemic, I have since been fascinated by this field.
                    </p>
                    <p>
                        As a programmer, I am well versed in both Python and Javascript. Some personal projects that I have made include a fully customizable homepage, typehere (a persistent local typing playground) and chess built entirely from scratch using pygame. In addition, I have also helped to maintain metropolis.
                    </p>
                    <p>
                        Currently, I am hoping to explore more about neural networks and machine learning in general. Outside of developing, I also enjoy to game with friends and just chill. 
                    </p>
                    <div class='mt-8 text-sm flex gap-6 items-center'>
                        <Link
                            href={site.social.github}
                            external={true}
                            class='flex items-center gap-2 hover:text-accent-30 transition-all'
                        >
                            {Icon.github()} Github
                        </Link>

                        <div class="w-px h-5 bg-current text-gs-70 rotate-20"></div>

                        <Link
                            href={site.social.linkedin}
                            external={true}
                            class='flex items-center gap-2 hover:text-accent-30 transition-all'
                        >
                            {Icon.linkedin()}
                            Linkedin
                        </Link>

                        {/* <div class="w-px h-5 bg-current text-gs-70 rotate-20"></div> */}

                        {/* <Link
                            href={site.social.email}
                            external={true}
                            class='flex items-center gap-2 hover:text-accent-30 transition-all'
                        >
                            {Icon.email()}
                            Email
                        </Link> */}
                    </div>
                </div>
            </div>
        </div>
    )
}