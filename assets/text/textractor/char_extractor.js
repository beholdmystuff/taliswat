let fs = require("fs");

module.exports = function()
{
    let expansions = [
        { name: "Talisman", filename: "base_chars.txt"},
        { name: "Character Packs", filename: "charpacks_chars.txt"},
        { name: "The Ancient Beasts", filename: "ancientbeasts_chars.txt"},
        { name: "The Blood Moon", filename: "bloodmoon_chars.txt"},
        { name: "The Cataclysm", filename: "cataclysm_chars.txt"},
        { name: "The City", filename: "city_chars.txt"},
        { name: "The Clockwork Kingdom", filename: "clockwork_chars.txt"},
        { name: "The Dragon", filename: "dragon_chars.txt"},
        { name: "The Dungeon", filename:  "dungeon_chars.txt"},
        { name: "The Firelands", filename:  "firelands_chars.txt"},
        { name: "The Frostmarch", filename: "frostmarch_chars.txt"},
        { name: "The Harbinger", filename: "harbinger_chars.txt"},
        { name: "The Highland", filename:  "highland_chars.txt"},
        { name: "The Realm of Souls", filename:  "realmofsouls_chars.txt"},
        { name: "The Reaper", filename: "reaper_chars.txt"},
        { name: "The Sacred Pool", filename: "sacredpool_chars.txt"},
        { name: "The Woodland", filename: "woodland_chars.txt"}
    ];

    let classRegex = /DEFSTRING.CHARACTER_CARD_(.*?),.*?SPECIAL ABILITIES\\n\\n.*?(\w.*?)Start:\s(.*?)\s.*?Alignment:\s(.*?)"/gsm;
    let chars = {};
    expansions.forEach(function(expansion)
    {

        let charString = fs.readFileSync("input/" + expansion.filename, "utf8");
        let expansionObj = [];

        charString.replace(classRegex, function(m, g1, g2, g3, g4)
        {
            let charName = g1.replace("CHARACTER", "").replace("CHAR", "");
            let charNameSplit = charName.split("_");
            console.log(charNameSplit);
            charName = "";
            let fileName = "";
            for (let i = 0, l = charNameSplit.length; i < l; i++)
            {
                let segment = charNameSplit[i];
                if (segment.length == 0)
                    continue;

                if (i > 0)
                {
                    charName += " ";
                    fileName += "_";
                }

                charName += segment.charAt(0) + segment.slice(1).toLowerCase();
                fileName += segment.toLowerCase();
            }

            let description = g2.replace(/\\n\\n/g, "</br>").replace(/\r\n/g, "</br>").replace(/\\/g, "").replace(/<\/br>/g, "<\/br><\/br>").replace(/<\/br><\/br><\/br><\/br>/g, "<\/br><\/br>");

            let classObj = {description: description, start: g3, alignment: g4, filePrefix: fileName,
                            strength: 0, craft: 0, life: 0, fate: 0};
            expansionObj[charName] = classObj
        });

        //sort alphabetically
        let sorted = {}
        Object.keys(expansionObj).sort().forEach(function(key, i)
        {
            sorted[key] = expansionObj[key];
        })

        chars[expansion.name] = sorted;
    });

    fs.writeFileSync("output/chars.js", "var chars = " + JSON.stringify(chars));
}
