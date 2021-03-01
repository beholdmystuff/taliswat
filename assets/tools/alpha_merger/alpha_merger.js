const fs = require('fs');
const sharp = require('sharp');

const sourceDir = "./minis/";

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function parsse(file)
{
    return new Promise(async (resolve, reject) =>
    {
        try
        {
            let rgb = await sharp(sourceDir + "rgb/" + file);
            let meta = await rgb.metadata(); // for resize

            let alpha = await sharp(sourceDir + "alpha/" + file); //alpha merging
            // alpha = await alpha.resize(meta.width, meta.height).rotate(180); //city boards
            alpha = await alpha.resize(meta.width, meta.height); //minis

            let buffer = await alpha.toBuffer(); //for alpha merging
            await rgb.joinChannel(buffer); // for alpha merging
            // await rgb.rotate(180).toFile(sourceDir + "rgba/" + file); //city boards
            await rgb.toFile(sourceDir + "rgba/" + file);

            setTimeout(resolve, 1000);
        }
        catch (error)
        {
            console.log(error);
            resolve();
        }
    })
}

console.log("Parsing:");
let dir = fs.readdirSync(sourceDir + "rgb/");
let fileNumber = 1;
dir.forEach(async file =>
{
    await parsse(file);
    console.log(Math.floor((fileNumber / dir.length) * 100) + "%");
    fileNumber += 1;
});
