import fs from "fs";
import path from "path"
import sharp from "sharp";

const dir = "./public/projects"
const files = fs.readdirSync(dir)

for (let file of files) {
    const file_dir = `${dir}/${file}`;
    const output = file_dir.slice(0, -path.extname(file_dir).length) + "_sanitized" + path.extname(file_dir);

    const { width, height } = await sharp(file_dir).metadata();

    if (height >= width / 3 * 2) {
        const calc_height = Math.floor(width / 3 * 2);
        const offset = Math.floor((height - calc_height) / 2);

        await sharp(file_dir)
            .extract({
                left: 0,
                top: offset,
                height: calc_height,
                width: width
            })
            .toFile(output);

    } else {
        const calc_width = Math.floor(height / 2 * 3);
        const offset = Math.floor((width - calc_width) / 2);

        await sharp(file_dir)
            .extract({
                left: offset,
                top: 0,
                height: height,
                width: calc_width
            })
            .toFile(output);
    }
}

console.log("Finished sanitizing image(s)")