import Background from "~/components/index/background";

export default function About() {
    const svg_width = "18"

    const name = import.meta.env.PUBLIC_NAME;

    return (
        <div class='px-60 mt-4'>
            <p class='text-3xl'>About Me</p>
            <div class='grid gap-4 grid-cols-[1fr_2fr] mt-8'>
                <div class="frame-wrapper p-4">
                    <img class='object-cover h-full' src='/flower.jpg'></img>
                </div>
                <div class='px-8 mt-4 leading-relaxed tracking-wide space-y-4'>
                    <p>
                        Hello! I'm {name.split(" ")[0]} and I am currently a student at the University of Toronto studying computer science. Having picked up programming at the start of the COVID pandemic, I have since been fascinated by this field.
                    </p>
                    <p>
                        As a programmer, I am well versed in both Python and Javascript. Some personal projects that I have made include a fully customizable homepage, typehere (a persistent local typing playground) and chess built entirely from scratch using pygame. In addition, I have also helped to maintain metropolis.
                    </p>
                    <p>
                        Currently, I am hoping to explore more about neural networks and machine learning in general. Outside of developing, I also enjoy to game with friends and just chill. Please hesitate when trying to reach out to me.
                    </p>
                    <div class='mt-8 text-sm flex gap-6 items-center'>
                        <a href='http://www.github.com' class='flex items-center gap-2 hover:text-accent-30 transition-all'>
                            <svg xmlns="http://www.w3.org/2000/svg" width={svg_width} height={svg_width} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                            Github
                        </a>
                        <div class="w-px h-5 bg-current text-gs-70 rotate-20"></div>
                        <a href='http://www.github.com' class='flex items-center gap-2 hover:text-accent-30 transition-all'>
                            <svg xmlns="http://www.w3.org/2000/svg" width={svg_width} height={svg_width} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 11v5"></path><path d="M8 8v.01"></path><path d="M12 16v-5"></path><path d="M16 16v-3a2 2 0 1 0 -4 0"></path><path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z"></path></svg>
                            Linkedin
                        </a>
                        <div class="w-px h-5 bg-current text-gs-70 rotate-20"></div>
                        <a href='http://www.github.com' class='flex items-center gap-2 hover:text-accent-30 transition-all'>
                            <svg xmlns="http://www.w3.org/2000/svg" width={svg_width} height={svg_width} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" /><rect x="2" y="4" width="20" height="16" rx="2" /></svg>
                            contact[at][thisdomain]
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
