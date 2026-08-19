import { For, Show } from "solid-js"
import { ProjectTile } from "~/components/projects/project"
import { get_all_mdx } from "~/utils/get_mdx"

export default function Projects() {

    const projects = get_all_mdx('projects')
    const get_index = (key) => {
        return projects[key]?.frontmatter?.index ?? Number.MAX_SAFE_INTEGER
    }

    return (
        <div class='lg:px-60 px-8 mt-4 mb-16'>
            <p class='text-3xl'>Projects</p>

            <Show when={Object.keys(projects).length !== 0} fallback={<p class="text-center mt-50 w-full text-sm text-gs-50">Nothing here for now. Come back when there's more :)</p>}>
                <div class='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-8 mx-4'>
                    <For each={Object.keys(projects).sort((a, b) => get_index(a) - get_index(b))}>
                        {(key) => (
                            <ProjectTile project={projects[key]}></ProjectTile>
                        )}
                    </For>
                </div>
            </Show>

        </div>
    )
}