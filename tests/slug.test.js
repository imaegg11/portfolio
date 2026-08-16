// Why is this needed? Because someday I'm going to make two things have the same slug and wonder why its broken for the next three days

import { it, expect } from 'vitest';
import fs from "fs";
import fm from 'front-matter';

function check_dupe() {
    const dir = "./src/config/projects/"

    const files = fs.readdirSync(dir);

    const slugs = new Set([])

    for (let file of files) {
        const content = fm(fs.readFileSync(dir + file, 'utf-8'))
        const slug = content.attributes.slug 

        if (slugs.has(slug)) return true
        else slugs.add(slug)
    }

    return false
}

it('duplicate slug check', () => {
    expect(check_dupe()).toBeFalsy() // Update later to explain which ones
})