let fs = require("fs");

module.exports = function()
{
    let expansions = [
        { name: "Talisman", filename: "base_cards.txt"},
        // { name: "The Ancient Beasts", filename: "ancientbeasts_cards.txt"},
        // { name: "The Blood Moon", filename: "bloodmoon_cards.txt"},
        { name: "The City", filename: "city_cards.txt"},
        // { name: "The Cataclysm", filename: "cataclysm_cards.txt"},
        // { name: "The Clockwork Kingdom", filename: "clockwork_cards.txt"},
        // { name: "The Dragon", filename: "dragon_cards.txt"},
        { name: "The Dungeon", filename:  "dungeon_cards.txt"},
        // { name: "The Firelands", filename:  "firelands_cards.txt"},
        // { name: "The Frostmarch", filename: "frostmarch_cards.txt"},
        // { name: "The Harbinger", filename: "harbinger_cards.txt"},
        { name: "The Highland", filename:  "highland_cards.txt"},
        // { name: "The Realm of Souls", filename:  "realmofsouls_cards.txt"},
        // { name: "The Reaper", filename: "reaper_cards.txt"},
        // { name: "The Sacred Pool", filename: "sacredpool_cards.txt"},
        { name: "The Woodland", filename: "woodland_cards.txt"}
    ];

    let cardRegex = /DEFSTRING\(CARDTEXT_DESC_(.*?),(?:\s+)?"?(.*?)"\)/gms;
    let cards = {};
    expansions.forEach(function(expansion)
    {

        let cardString = fs.readFileSync("input/" + expansion.filename, "utf8");
        let expansionObj = [];

        cardString.replace(cardRegex, function(m, g1, g2)
        {
            let cardNameSplit = g1.split("_");
            cardName = "";
            let fileName = "";
            for (let i = 0, l = cardNameSplit.length; i < l; i++)
            {
                if (i > 0)
                {
                    cardName += " ";
                    fileName += "_";
                }

                let segment = cardNameSplit[i];
                cardName += segment.charAt(0) + segment.slice(1).toLowerCase();

                fileName += segment.toLowerCase();
            }

            // let description = g2.replace("\n\n----------\n\n", "").replace("%s\n", "").replace("\n\n", "").replace("\\n", "");
            // console.log(description);

            let cardObj = {description: g2, card: cardName, filePrefix: fileName};
            expansionObj[cardName] = cardObj
        });

        //sort alphabetically
        let sorted = {}
        Object.keys(expansionObj).sort().forEach(function(key, i)
        {
            sorted[key] = expansionObj[key];
        })

        cards[expansion.name] = sorted;
    });

    fs.writeFileSync("output/cards.js", "var cards = " + JSON.stringify(cards, null, 2));
}
