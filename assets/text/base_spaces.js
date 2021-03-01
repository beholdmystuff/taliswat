var spaces =
{
    Base:
    {
        Outer:
        {
            City:
            [
                {description: "VISIT THE DOCTOR: Heal up to two lives at the cost of one gold each."},
                {description: "VISIT THE ALCHEMIST: Discard any number of Objects you have and gain one gold for each."},
                {description: "VISIT THE ENCHANTRESS (Roll 1 die):"},
                {roll: [{line: "Turned into a Toad.", values: [1]},
                    {line: "Lose 1 Strength.", values:[2]},
                    {line: "Lose 1 Craft.", values: [3]},
                    {line: "Gain 1 Craft.", values:[4]},
                    {line: "Gain 1 Strength.", values: [5]},
                    {line: "Gain 1 Spell.", values: [6]}]}
            ],
            Fields:
            [
                {description: "DRAW 1 CARD"},
                {description: "Do not draw a card if there is already one in this space."},
                {draw: {count: 1, limit: 1, deck: "Adventure"}}
            ],
            Hills:
            [
                {description: "DRAW 1 CARD"},
                {description: "Do not draw a card if there is already one in this space."},
                {draw: {count: 1, limit: 1, deck: "Adventure"}}
            ],
            Plains:
            [
                {description: "DRAW 1 CARD"},
                {description: "Do not draw a card if there is already one in this space."},
                {draw: {count: 1, limit: 1, deck: "Adventure"}}
            ],
            Woods:
            [
                {description: "DRAW 1 CARD"},
                {description: "Do not draw a card if there is already one in this space."},
                {draw: {count: 1, limit: 1, deck: "Adventure"}}
            ],
            Tavern:
            [
                {description: "ROLL 1 DIE"},
                {roll: [{line: "Get drunk and collapse in a corner; miss 1 turn.", values: [1]},
                    {line: "Get tipsy and fight a farmer with Strength 3.", values: [2]},
                    {line: "Gamble and lose 1 gold.", values: [3]},
                    {line: "Gamble and win 1 gold.", values: [4]},
                    {line: "A wizard offers to teleport you to any other space in this Region as your next move.", values: [5]},
                    {line: "A boatman offers to ferry you to the Temple as your next move.", values: [6]}]}
            ],
            Ruins:
            [
                {description: "DRAW 2 CARDS"},
                {description: "If there are any cards already in this space, draw only enough to take the total to two cards."},
                {draw: {count: 2, limit: 2, deck: "Adventure"}}
            ],
            Forest:
            [
                {description: "ROLL 1 DIE"},
                {roll: [{line: "Attacked by a brigand with Strength 4.", values:[1]},
                    {line: "Lost; lose your next turn.", values: [2, 3]},
                    {line: "Safe; no effect.", values: [4, 5]},
                    {line: "A ranger guides you out, gain 1 Craft.", values: [6]}]}
            ],
            Village:
            [
                {description: "VISIT THE BLACKSMITH (Purchase any, if available):", text:["Helmet (2G)", "Sword (2G)", "Axe (3G)", "Shield (3G)", "Armour (4G)"]},
                {description: "VISIT THE HEALER: Heal up to your life value at the cost of one gold each."},
                {description: "VISIT THE MYSTIC (Roll 1 die):"},
                {roll: [{line: "Become evil.", values: [1]},
                    {line: "Ignored.", values:[2, 3]},
                    {line: "Become good.", values:[4]},
                    {line: "Gain 1 Craft.", values:[5]},
                    {line: "Gain 1 Spell.", values:[6]}]}
            ],
            Graveyard:
            [
                {description: "BASED ON ALIGNMENT"},
                {description: "GOOD: Lose one life."},
                {description: "NEUTRAL: Replenish fate up to your fate value at the cost of one gold each."},
                {description: "EVIL: Either replenish fate up to your fate value for free, or pray by rolling one die:"},
                {roll: [{line: "Ignored.", values:[1, 2, 3, 4]},
                    {line: "Gain 1 fate.", values:[5]},
                    {line: "Gain 1 Spell.", values:[6]}]}
            ],
            Sentinel:
            [
                {description: "DRAW 1 CARD"},
                {description: "Do not draw a card if there is already one in this space."},
                {description: "If you are crossing to the Middle Region, do not draw a card. Instead, you must first defeat the Sentinel with Strength 9. Do not fight the Sentinel when crossing from the Middle Region."},
                {draw: {count: 1, limit: 1, deck: "Adventure"}}
            ],
            Chapel:
            [
                {description: "BASED ON ALIGNMENT"},
                {description: "EVIL: Lose one life."},
                {description: "NEUTRAL: Heal up to your life value at the cost of one gold each."},
                {description: "GOOD: Either heal up to your life value for free, or pray by rolling 1 die:"},
                {roll:[{line: "Ignored.", values:[1, 2, 3, 4]},
                    {line: "Gain 1 life.", values: [5]},
                    {line: "Gain 1 Spell.", values: [6]}]}
            ],
            Crags:
            [
                {description: "ROLL 1 DIE"},
                {roll: [{line: "Attacked by a Spirit with Craft 4.", values: [1]},
                    {line: "Lost; lose your next turn.", values:[2, 3]},
                    {line: "Safe; no effect.", values:[4, 5]},
                    {line: "A barbarian leads you out; gain 1 Strength.", values:[6]}]}
            ],
        },
        Middle:
        {
            "Warlock's Cave":
            [
                {description: "YOU MAY ROLL 1 DIE TO ACCEPT A QUEST"},
                {roll:[{line: "Take 1 life from another character.", values:[1]},
                    {line: "Kill 1 Enemy.", values:[2]},
                    {line: "Deliver (discard) 1 Follower.", values:[3]},
                    {line: "Deliver (discard) 1 Magic Object.", values:[4]},
                    {line: "Deliver (discard) 3 gold.", values:[5]},
                    {line: "Deliver (discard) 2 gold.", values:[6]}]},
                {description: "When you complete the quest, the Warlock immediately teleports you back here and gives you a Talisman, if available, as your reward."}
            ],
            Desert:
            [
                {description: "LOSE 1 LIFE THEN DRAW 1 CARD"},
                {description: "Do not draw a card if there is already one in this space."},
                {draw: {count: 1, limit: 1, deck: "Adventure"}}
            ],
            Oasis:
            [
                {description: "DRAW 2 CARDS"},
                {description: "If there are any cards already in this space, draw only enough to take the total to two cards."},
                {draw: {count: 2, limit: 2, deck: "Adventure"}}
            ],
            Temple:
            [
                {description: "PRAY: ROLL 2 DICE"},
                {roll:[{line: "Lose 2 lives.", values:[2]},
                    {line: "Lose 1 life.", values:[3]},
                    {line: "Lose 1 Follower.", values:[4]},
                    {line: "Enslaved: stay here until you roll a 4, 5, or 6 for your move.", values:[5]},
                    {line: "Gain 1 Strength.", values:[6]},
                    {line: "Gain 1 Craft.", values:[7]},
                    {line: "Gain 1 Spell.", values:[8, 9]},
                    {line: "Gain a Talisman.", values:[10]},
                    {line: "Gain 2 fate.", values:[11]},
                    {line: "Gain 2 lives.", values:[12]}]}
            ],
            Runes:
            [
                {description: "DRAW 1 CARD"},
                {description: "Do not draw a card if there is already one in this space."},
                {description: "Any creatures that you fight here add 2 to their attack rolls."},
                {draw: {count: 1, limit: 1, deck: "Adventure"}}
            ],
            Castle:
            [
                {description: "ROYAL DOCTOR"},
                {description: "Heal up to your life value at the cost of one gold each."},
                {description: "If you have the Prince or Princess, heal up to two lives for free."}
            ],
            "Portal of Power":
            [
                {description: "DRAW 1 CARD"},
                {description: "Do not draw a card if there is already one in this space. If you are crossing to the Plain of Peril, do not draw a card. Instead, you must first use Craft to pick the lock or Strength to force it."},
                {description: "Choose which ability you are using and roll two dice. If the total is equal to or less than your chosen ability, move to the Plain of Peril. If it is higher, remain here and lose one from that ability."},
                {draw: {count: 1, limit: 1, deck: "Adventure"}}
            ],
            "Black Knight":
            [
                {description: "SUFFER ONE PENALTY"},
                {description: "Either pay one gold or lose one life."}
            ],
            "Hidden Valley":
            [
                {description: "YOU MUST HAVE A TALISMAN TO ENTER"},
                {description: "You can only enter if you have a Talisman. If you do not have one, you must turn back. The Crown of Command can only be reached from this space."},
            ],
            Hills:
            [
                {description: "DRAW 1 CARD"},
                {description: "Do not draw a card if there is already one in this space."},
                {draw: {count: 1, limit: 1, deck: "Adventure"}}
            ],
            "Cursed Glade":
            [
                {description: "Strength and Craft derived from Objects and Magic Objects do not count on this space, nor may you use Magic Objects or cast Spells."}
            ],
            Chasm:
            [
                {description: "Roll one die for yourself, and one for each of your Followers."},
                {description: "If a 1 or 2 is rolled for yourself, lose 1 life. If a 1 or 2 is rolled for a Follower, it is killed."}
            ]
        },
        Inner:
        {
            "Valley of Fire":
            [
                {description: "YOU MUST HAVE A TALISMAN TO ENTER"},
                {description: "You can only enter if you have a Talisman. If you do not have one, you must turn back. The Crown of Command can only be reached from this space."}
            ],
            "Werewolf Den":
            [
                {description: "FIGHT THE WEREWOLF"},
                {description: "Roll two dice for the Werewolf's Strength, then fight it. If you lose, lose one life and you fight the same Werewolf again on your next turn. You cannot move on until you have defeated the Werewolf."}
            ],
            Death:
            [
                {description: "DICE WITH DEATH"},
                {description: "Roll two dice for yourself and then two dice for Death. If the scores are equal: Dice with Death again on your next turn. If your score is lower: Lose one life and Dice with Death again on your next turn. If your score is higher: You may move on your next turn."}
            ],
            Crypt:
            [
                {description: "ROLL 3 DICE"},
                {description: "Subtract your Strength from the total and move directly to:"},
                {roll: [{line: "Crypt", values:[0]},
                    {line: "Plain of Peril", values:[1]},
                    {line: "Portal of Power", values:[2, 3]},
                    {line: "Warlock's Cave", values:[4, 5]},
                    {line: "City", values:[6]}]}
            ],
            "Plain of Peril":
            [
                {description: "STOP HERE"},
                {description: "Move only one space per turn."}
            ],
            Mines:
            [
                {description: "ROLL 3 DICE"},
                {description: "Subtract your Craft from the total and move directly to:"},
                {roll: [{line: "Mines", values:[0]},
                    {line: "Plain of Peril", values:[1]},
                    {line: "Portal of Power", values:[2, 3]},
                    {line: "Warlock's Cave", values:[4, 5]},
                    {line: "Tavern", values:[6]}]}
            ],
            "Vampire's Tower":
            [
                {description: "SUFFER BLOOD LOSS"},
                {description: "Roll one die to determine how many lives the Vampire takes."},
                {description: "You may discard any number of Followers to avoid this loss of life."},
                {description: "Each Follower you discard prevents the loss of one life."},
                {roll: [{line: "Lose 1 life", values:[1, 2]},
                    {line: "Lose 2 lives", values:[3, 4]},
                    {line: "Lose 3 lives", values:[3, 4]}]}
            ],
            Pits:
            [
                {description: "FIGHT THE PITFIENDS"},
                {description: "Roll one die and fight that many Pitfiends with Strength 4 each, one-by-one, until you either lose a life or defeat all of the Pitfiends. You may move on the turn after all are defeated."},
            ],
            "Crown of Command":
            [
                {description: "The Ending has yet to be revealed."}
            ]
        }
    }
}
