let fs = require("fs");

function parse(regex, filename, shift)
{
    let path = "/space_positions/";
    let spaceString = fs.readFileSync("input" + path + filename + ".txt", "utf8");
    let outputString = "/* " + filename.toUpperCase() + " BOARD */\n";

    spaceString.replace(regex, function(m, g1, g2, g3, g4, g5)
    {
        outputString += g1 + "{\n";
        outputString += "     width: " + g2 + ";\n";
        outputString += "    height: " + g3 + ";\n";
        let top = parseInt(g4.replace("px", ""));
        let left = parseInt(g5.replace("px", ""));
        outputString += "       top: " + (top + shift[0]) + "px;\n";
        outputString += "      left: " + (left + shift[1]) + "px;\n}\n";

        console.log(g1, g2, g3, g4, g5);
    });

    fs.writeFileSync("output" + path + filename + ".txt", outputString, )
}

parse(/(\..*?)\{(?:.*?)width:\s?(.*?);(?:.*?)height:\s?(.*?);(?:.*?)top:\s?(.*?);(?:.*?)left:\s?(.*?);/gms, "city", [885,1110]);
parse(/(\..*?)\{(?:.*?)width:\s?(.*?);(?:.*?)height:\s?(.*?);(?:.*?)top:\s?(.*?);(?:.*?)left:\s?(.*?);/gms, "dungeon", [885,-2675]);
parse(/(\..*?)\{(?:.*?)width:\s?(.*?);(?:.*?)height:\s?(.*?);(?:.*?)top:\s?(.*?);(?:.*?)left:\s?(.*?);/gms, "highland", [-1105,1115]);
parse(/(\..*?)\{(?:.*?)width:\s?(.*?);(?:.*?)height:\s?(.*?);(?:.*?)top:\s?(.*?);(?:.*?)left:\s?(.*?);/gms, "woodland", [-1105,-2680]);

//top: 45px; left: 50px;
//top: -840px; left: -1060px;

//top: -840px; left: 2735px;
//top: 45px; left: 60px;

// top: 1150px; left: -300px;
// top: 45px; left: 815px;

// top: 1140px; left: 4100px;
// top: 35px; left: 1420px;
