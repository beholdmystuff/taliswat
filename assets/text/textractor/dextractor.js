let fs = require("fs");

module.exports = function()
{
    let expansions = [
        { name: "Talisman", file: "Base"},
        { name: "The Ancient Beasts", file: "AncientBeasts"},
        { name: "The Blood Moon", file: "Bloodmoon"},
        { name: "The Cataclysm", file: "Cataclysm"},
        { name: "The City", file: "City"},
        { name: "The Clockwork Kingdom", file: "ClockworkKingdom"},
        { name: "The Dragon", file: "Dragon"},
        { name: "The Deep Realm", file: "DeepRealm"},
        { name: "The Dungeon", file:  "Dungeon"},
        { name: "The Firelands", file:  "Firelands"},
        { name: "The Frostmarch", file: "Frostmarch"},
        { name: "The Harbinger", file: "Harbinger"},
        { name: "The Highland", file:  "Highland"},
        { name: "The Nether Realm", file:  "Nether"},
        { name: "The Reaper", file: "Reaper"},
        { name: "The Sacred Pool", file: "SacredPool"},
        { name: "The Sacred Pool", file: "Spirit"},
        { name: "The Woodland", file: "Woodland"}
        //+Deck.txt
    ];

    let deckNameRegex = /\[(.*?)\]/gms;
    let cleanVeryUglyNewlines = new RegExp("(?:\\\\n)?\\\\\\r(?:\\n)?", "gms");
    let cleanPauseRegex = new RegExp("----------", "gms");
    let cleanNewLinesRegex = new RegExp("\\\\n\\\\n(?:\\\\n\\\\n)?", "gms");
    let cleanTsRegex = new RegExp("\\t", "gms");
    let cardData = {};

    let rev1 = fs.readFileSync("input/merged.txt", "utf8");

    //iterate each expnasion
    expansions.forEach(function(expansion)
    {
        if (!(expansion.name in cardData))
            cardData[expansion.name] = {};

        console.log("Expansion:", expansion.name);
        let deckLabel;

        //iterate expansion deck file
        let deckFile = fs.readFileSync("input/decks/" + expansion.file + "Deck.txt", "utf8");
        let char = '\n';
        let i = j = 0;
        while ((j = deckFile.indexOf(char, i)) !== -1)
        {
            let line = deckFile.substring(i, j);

            if (line.match(deckNameRegex))
            {
                line.replace(deckNameRegex, function(m, g1, g2)
                {
                    deckLabel = g1;
                    console.log("DECK:", deckLabel);
                });

                if (!(deckLabel in cardData[expansion.name]))
                    cardData[expansion.name][deckLabel] = {};
            }
            else
            {
                if (line.length > 1)
                {
                    line = line.replace("\r", "").split(" ")[0].trim();

                    //match card name
                    let card = {};
                    cardNameRegex = new RegExp('DEFSTRING\\(CARDTEXT_NAME_' + line + '(?:\\s+)?,(?:\\s+)?"(.*?)"\\)', "gms");

                    rev1.replace(cardNameRegex, function(m, g1)
                    {
                        card.name = g1;
                    });

                    card.count = 1;

                    //match card description
                    cardDescriptionRegex = new RegExp('DEFSTRING\\(CARDTEXT_DESC_' + line + '(?:\\s+)?,(?:\\s+)?"?(.*?)"\\)', "gms");
                    rev1.replace(cardDescriptionRegex, function(m, g1)
                    {
                        let description = g1.replace("%s", card.name);
                        description = description.replace(cleanVeryUglyNewlines, "\\n");
                        description = description.replace(cleanPauseRegex, "");
                        description = description.replace(cleanNewLinesRegex, "\\n");
                        description = description.replace(/\\\\/g, "");
                        description = description.replace(cleanTsRegex, "");

                        let label = deckLabel.toLowerCase();
                        if (label != "destiny" && label != "quest_rewards" && label != "warlock" &&
                            label != "shattered_omen" && label != "armageddon_omen" && label != "dead_omen" &&
                            label != "armageddon_omen" && label != "path" && path != "beast_reward")
                        {
                            card.file = line.toLowerCase();
                        }

                        card.description = [];
                        description.split("\\n").forEach(function(chunk)
                        {
                            card.description.push(chunk.replace(/\\/gms, ""));
                        });
                    });

                    // if (card.name == "undefined" || card.name == undefined)
                    //     console.log("WTF", line);
                    if(!(card.name in cardData[expansion.name][deckLabel]))
                        cardData[expansion.name][deckLabel][card.name] = card;
                    else
                        cardData[expansion.name][deckLabel][card.name].count += 1;
                }

            }

            i = j + 1;
        }
    });

    fs.writeFileSync("output/cards.json",  JSON.stringify(cardData, null, 2));
}
