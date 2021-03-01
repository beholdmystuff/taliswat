let fs = require("fs");

module.exports = function()
{
    let expansions = [
        { name: "Talisman", filename: "base_spells.txt"},
        { name: "The Clockwork Kingdom", filename: "clockwork_spells.txt"},
        { name: "The Dungeon", filename:  "dungeon_spells.txt"},
        { name: "The Firelands", filename:  "firelands_spells.txt"},
        { name: "The Frostmarch", filename: "frostmarch_spells.txt"},
        { name: "The Nether Realm", filename: "netherrealm_spells.txt"},
        { name: "The Realm of Souls", filename:  "realmofsouls_spells.txt"},
        { name: "The Reaper", filename: "reaper_spells.txt"},
        { name: "The Sacred Pool", filename: "sacredpool_spells.txt"},
        { name: "The Woodland", filename: "woodland_spells.txt"}
    ];

    let spellRegex = /DEFSTRING\(CARDTEXT_DESC_(.*?),(?:\s+)?"?(.*?)"\)/gms;
    let spells = {};
    expansions.forEach(function(expansion)
    {

        let spellString = fs.readFileSync("input/" + expansion.filename, "utf8");
        let expansionObj = [];

        spellString.replace(spellRegex, function(m, g1, g2)
        {
            let spellNameSplit = g1.split("_");
            spellName = "";
            let fileName = "";
            for (let i = 0, l = spellNameSplit.length; i < l; i++)
            {
                if (i > 0)
                {
                    spellName += " ";
                    fileName += "_";
                }

                let segment = spellNameSplit[i];
                spellName += segment.charAt(0) + segment.slice(1).toLowerCase();

                fileName += segment.toLowerCase();
            }

            let spellObj = {description: g2, spell: spellName, filePrefix: fileName, copies: 1};
            expansionObj[spellName] = spellObj
        });

        //sort alphabetically
        let sorted = {}
        Object.keys(expansionObj).sort().forEach(function(key, i)
        {
            sorted[key] = expansionObj[key];
        })

        spells[expansion.name] = sorted;
    });

    fs.writeFileSync("output/spells.js", "var spells = " + JSON.stringify(spells));
}
