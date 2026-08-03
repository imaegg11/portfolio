import { Project } from "~/components/projects/project"

export default function Projects() {
    return (
        <div class='px-60 mt-4'>
            <p class='text-3xl'>Projects</p>
            {/* <p class="text-center mt-50 w-full text-sm text-gs-50">Nothing here for now. Come back when there's more :)</p> */}
        
            <div class='grid grid-cols-3 gap-4 mt-4 mx-4 *:aspect-square'>
                <Project></Project>
                <Project></Project>
                <Project></Project>
                <Project></Project>
            </div>
        </div>
    )
}