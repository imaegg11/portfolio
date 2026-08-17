// Why is this needed? Because someday I'm going to make two things have the same slug and wonder why its broken for the next three days

import { it, expect } from 'vitest';
import fs from "fs";
import fm from 'front-matter';

function check_dupe() {
    const dir = "./src/config/projects/"

    const files = fs.readdirSync(dir);

    const slugs = {}

    for (let file of files) {
        const content = fm(fs.readFileSync(dir + file, 'utf-8'))
        const slug = content.attributes.slug 

        if (slug in slugs) slugs[slug].push(file)
        else slugs[slug] = [file]
        
    }

    const dupes = Object.entries(slugs).filter(item => item[1].length > 1)

    return dupes
}

it('duplicate slug check', () => {
    const dupe_slugs = check_dupe()

    let err_string = "Found duplicate slugs:"
    
    for (let dupe of dupe_slugs) {
        err_string += `\n\t${dupe[0]} found for following files: ${dupe[1].join(", ")}`
    }

    err_string += "\n\n"

    expect(dupe_slugs, err_string).toEqual([]) // Eh, it's good enough
})