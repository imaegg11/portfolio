import { Project } from "~/components/projects/project"

export default function Projects() {
    return (
        <div class='lg:px-60 px-8 mt-4 mb-8'>
            <p class='text-3xl'>Projects</p>
            {/* <p class="text-center mt-50 w-full text-sm text-gs-50">Nothing here for now. Come back when there's more :)</p> */}
        
            <div class='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-8 mx-4'>
                <Project aspect='3/1'></Project>
                <Project></Project>
                <Project></Project>
                <Project></Project>
            </div>
        </div>
    )
}