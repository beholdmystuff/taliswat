var cards = {
  "Talisman": {
    "SPELLS": {
      "Acquisition": {
        "name": "Acquisition",
        "count": 1,
        "file": "acquisition",
        "description": [
          "Cast at the start of your turn, before you move. Take one Object of your choice or one gold from any character."
        ]
      },
      "Alchemy": {
        "name": "Alchemy",
        "count": 1,
        "file": "alchemy",
        "description": [
          "Cast at the start of your turn, before you move. Convert any number of Objects you have into gold. Discard the chosen Objects and gain 1 gold for each."
        ]
      },
      "Counterspell": {
        "name": "Counterspell",
        "count": 2,
        "file": "counterspell",
        "description": [
          "Cast as required. Negate the effects of any Spell just cast, including the Command Spell."
        ]
      },
      "Destroy Magic": {
        "name": "Destroy Magic",
        "count": 1,
        "file": "destroy_magic",
        "description": [
          "Cast at the start or end of your turn. No character, including yourself, may cast a Spell or use any Magic Object until the start of your next turn."
        ]
      },
      "Destruction": {
        "name": "Destruction",
        "count": 2,
        "file": "destruction",
        "description": [
          "Cast at the start of your turn, or when you have just completed your move. This Spell will remove any faceup Adventure Card from the board."
        ]
      },
      "Divination": {
        "name": "Divination",
        "count": 1,
        "file": "divination",
        "description": [
          "Cast at the start of your turn, before you move. Take one secret look at the top five cards on the Adventure deck."
        ]
      },
      "Healing": {
        "name": "Healing",
        "count": 2,
        "file": "healing",
        "description": [
          "Cast as required. By casting it on yourself or any other character the recipient is healed up to their life value."
        ]
      },
      "Hex": {
        "name": "Hex",
        "count": 1,
        "file": "hex",
        "description": [
          "Cast at the start of your turn, before you move. Place this card on any space in the Outer or Middle Region not already occupied by a character. It remains for 3 complete rounds, after which it is placed on the discard pile. Any character landing on the Hex loses a life."
        ]
      },
      "Immobility": {
        "name": "Immobility",
        "count": 2,
        "file": "immobility",
        "description": [
          "Cast at the start of a character's turn, before they move. If cast on the character whose turn it is, they are immobilised (may do nothing apart from negating this Spell) for the duration of that turn. If cast on a creature, it cannot be attacked but may be evaded until the end of the turn."
        ]
      },
      "Invisibility": {
        "name": "Invisibility",
        "count": 1,
        "file": "invisibility",
        "description": [
          "Cast as required. You may evade any creature or character until the end of the turn."
        ]
      },
      "Mesmerism": {
        "name": "Mesmerism",
        "count": 1,
        "file": "mesmerism",
        "description": [
          "Cast at the start of your turn, before you move. Take one Follower of your choice from any character."
        ]
      },
      "Nullify": {
        "name": "Nullify",
        "count": 1,
        "file": "nullify",
        "description": [
          "Cast at any time on any character. That character must discard all of their Spells."
        ]
      },
      "Preservation": {
        "name": "Preservation",
        "count": 1,
        "file": "preservation",
        "description": [
          "Cast as required, on any character, Follower or Enemy. It prevents a character from losing a life or a Follower from being killed. When cast on an Enemy, it prevents it from being killed, and the attack is considered a stand-off."
        ]
      },
      "Psionic Blast": {
        "name": "Psionic Blast",
        "count": 2,
        "file": "psionic_blast",
        "description": [
          "Cast on yourself when you are about to engage in battle. Add your starting Craft to your Strength until the end of the battle."
        ]
      },
      "Random": {
        "name": "Random",
        "count": 2,
        "file": "random",
        "description": [
          "Cast on any character at any time.",
          "They roll 1 die to determine",
          "the effect on them:",
          "1) Become a Toad for 3 turns",
          "2) Lose all Strength*     ",
          "3) Lose all Craft*",
          "4) Lose all gold   ",
          "5) Gain 1 Strength",
          "6) Gain 1 life",
          "* Excluding starting values and any gained through Followers and Objects."
        ]
      },
      "Teleport": {
        "name": "Teleport",
        "count": 2,
        "file": "teleport",
        "description": [
          "Cast on yourself instead of rolling the die for movement. Teleport to any other space in the same Region. This Spell cannot be cast in the Inner Region."
        ]
      },
      "Temporal Warp": {
        "name": "Temporal Warp",
        "count": 1,
        "file": "temporal_warp",
        "description": [
          "Cast at the start of your turn, before you move. You may take three successive turns instead of one before play passes to the next player."
        ]
      }
    },
    "PURCHASE": {
      "Mule": {
        "name": "Mule",
        "count": 4,
        "file": "mule",
        "description": [
          "The Mule can carry an extra four Objects for you.",
          "If you lose the Mule, leave any surplus Objects of your choice in the space you are in."
        ]
      },
      "Armour": {
        "name": "Armour",
        "count": 4,
        "file": "armour",
        "description": [
          "If you are defeated in battle and lose a life, roll 1 die. If you roll a 4, 5 or 6, the Armour protected you and you did not lose that life, though you still lost the battle."
        ]
      },
      "Axe": {
        "name": "Axe",
        "count": 4,
        "file": "axe",
        "description": [
          "Add 1 to your Strength during battle.",
          "You may build a Raft when you are in the Woods or the Forest."
        ]
      },
      "Sword": {
        "name": "Sword",
        "count": 3,
        "file": "sword",
        "description": [
          "Add 1 to your Strength during battle."
        ]
      },
      "Water Bottle": {
        "name": "Water Bottle",
        "count": 4,
        "file": "water_bottle",
        "description": [
          "You do not lose a life in the Desert."
        ]
      },
      "Helmet": {
        "name": "Helmet",
        "count": 4,
        "file": "helmet",
        "description": [
          "If you are defeated in battle and lose a life, roll 1 die. If you roll a 6, the Helmet protected you and you did not lose that life, though you still lost the battle."
        ]
      },
      "Shield": {
        "name": "Shield",
        "count": 4,
        "file": "shield",
        "description": [
          "If you are defeated in battle and lose a life, roll 1 die. If you roll a 5 or 6, the Shield protected you and you did not lose that life, though you still lost the battle."
        ]
      },
      "Raft": {
        "name": "Raft",
        "count": 1,
        "file": "raft",
        "description": [
          "On your next turn, instead of your normal move, you may choose to cross the River to a space opposite the one you are in.",
          "Whether you cross or not, you lose the Raft, as it cannot be carried with you."
        ]
      }
    },
    "TALISMAN": {
      "Talisman": {
        "name": "Talisman",
        "count": 4,
        "file": "talisman",
        "description": [
          "You may only enter the Valley of Fire if you have one of the fabled Talismans."
        ]
      }
    },
    "ADVENTURE": {
      "Angel": {
        "name": "Angel",
        "count": 1,
        "file": "angel",
        "description": [
          "If you are of good alignment, you gain one life. If you are evil, you lose one life. There is no effect if you are neutral. The Angel then departs to the discard pile."
        ]
      },
      "Blizzard": {
        "name": "Blizzard",
        "count": 1,
        "file": "blizzard",
        "description": [
          "Winter has come with a vengeance and a Blizzard envelops the land. For two rounds, all characters, no matter what Region they are in, may only move one space per turn. The Blizzard then abates to the discard pile."
        ]
      },
      "Book of Spells": {
        "name": "Book of Spells",
        "count": 1,
        "file": "book_of_spells",
        "description": [
          "You have found the fabled Book of Spells. You gain your full complement of Spells, according to your current Craft. The Book then vanishes to the discard pile."
        ]
      },
      "Devil": {
        "name": "Devil",
        "count": 1,
        "file": "devil",
        "description": [
          "You are visited by a Devil. If you are of evil alignment, you gain 1 life. If you are good, you lose 1 life. There is no effect if you are neutral. The Devil then departs."
        ]
      },
      "Evil Darkness": {
        "name": "Evil Darkness",
        "count": 1,
        "file": "evil_darkness",
        "description": [
          "An Evil Darkness from the nether worlds sweeps the land. All characters except those of evil alignment must miss one turn. The Darkness then vanishes to the discard pile."
        ]
      },
      "Imp": {
        "name": "Imp",
        "count": 1,
        "file": "imp",
        "description": [
          "You meet a mischievous Imp.",
          "Roll one die to determine where he teleports you:",
          "1) Crags      2) Forest",
          "3) Tavern       4) Ruins",
          "5) Hidden Valley   6) Cursed Glade",
          "The Imp then teleports himself off to the discard pile."
        ]
      },
      "Magical Vortex": {
        "name": "Magical Vortex",
        "count": 1,
        "file": "magical_vortex",
        "description": [
          "A Magical Vortex absorbs all Spells from every character. Each character's Spells and the Magical Vortex are discarded."
        ]
      },
      "Market Day": {
        "name": "Market Day",
        "count": 1,
        "file": "market_day",
        "description": [
          "It's Market Day across the land.",
          "Clockwise starting with yourself, all characters may immediately buy available Objects at these prices:",
          "   Sword 1G           Shield 2G         ",
          "   Helmet 1G          Water Bottle 1G",
          "Mule 2G              Raft 3G         ",
          "Market Day then packs off to the discard pile."
        ]
      },
      "Mephistopheles": {
        "name": "Mephistopheles",
        "count": 1,
        "file": "mephistopheles",
        "description": [
          "You have been encountered by Mephistopheles on a mission to this land. If you are evil, gain 1 Craft. If you are good or neutral, he converts you to evil. He then returns to his own dark kingdom."
        ]
      },
      "Pestilence": {
        "name": "Pestilence",
        "count": 1,
        "file": "pestilence",
        "description": [
          "Pestilence has befouled this Region. All characters in this Region must lose 1 life. The Pestilence then vanishes to the discard pile."
        ]
      },
      "Raiders": {
        "name": "Raiders",
        "count": 1,
        "file": "raiders",
        "description": [
          "A band of Raiders attacks you and steals all your gold. They immediately stash the gold at the Oasis and retreat to their hide-out."
        ]
      },
      "Siren": {
        "name": "Siren",
        "count": 1,
        "file": "siren",
        "description": [
          "A Siren's song can be heard throughout the Region. All characters in this Region must miss their next turn. The Siren's song then fades to the discard pile."
        ]
      },
      "Storm": {
        "name": "Storm",
        "count": 1,
        "file": "storm",
        "description": [
          "A Storm sweeps through this Region. All characters in this Region must miss 1 turn. The Storm then abates to the discard pile."
        ]
      },
      "Hag": {
        "name": "Hag",
        "count": 1,
        "file": "cursed_by_a_hag",
        "description": [
          "You must take her as a Follower. All other Followers immediately leave you - discard them. You may have no other Followers until you rid yourself of the Hag by visiting the Village Mystic (even if he ignores you)."
        ]
      },
      "Poltergeist": {
        "name": "Poltergeist",
        "count": 1,
        "file": "poltergeist",
        "description": [
          "A Poltergeist has attached itself to you. You must take it as a Follower. Its only effect is to slow your movement to 1 space per turn. You can only rid yourself of it by crossing the River, either by bridge, raft or ferry.",
          "You must then discard it."
        ]
      },
      "Ape": {
        "name": "Ape",
        "count": 1,
        "file": "ape",
        "description": [
          "Ape",
          "A savage Ape is terrorising this area.  It will remain here until it is killed."
        ]
      },
      "Bandit": {
        "name": "Bandit",
        "count": 2,
        "file": "bandit",
        "description": [
          "Bandit",
          "A Bandit is marauding in this area. He will not attack if you pay 1 gold. He will remain here until he is killed."
        ]
      },
      "Bear": {
        "name": "Bear",
        "count": 1,
        "file": "bear",
        "description": [
          "Bear",
          "A ferocious Bear is running amok in this area. It will remain here until killed."
        ]
      },
      "Doppelganger": {
        "name": "Doppelganger",
        "count": 1,
        "file": "doppelganger",
        "description": [
          "Doppelganger",
          "The Doppelganger always has the same total Strength as its opponent, including any bonuses. If you kill it, gain 1 Strength, but you must discard",
          "it instead of taking it as a trophy. It will remain here until it is killed."
        ]
      },
      "Dragon": {
        "name": "Dragon",
        "count": 3,
        "file": "dragon",
        "description": [
          "Dragon",
          "A fearsome Dragon is terrorising this area. It will remain here until it is killed."
        ]
      },
      "Giant": {
        "name": "Giant",
        "count": 1,
        "file": "giant",
        "description": [
          "Giant",
          "An immense Giant has set up residence in this area. He will remain here until he is killed."
        ]
      },
      "Goblin": {
        "name": "Goblin",
        "count": 2,
        "file": "goblin",
        "description": [
          "Goblin",
          "A Goblin is laying waste to this area. It will remain here until it is killed."
        ]
      },
      "Hobgoblin": {
        "name": "Hobgoblin",
        "count": 2,
        "file": "hobgoblin",
        "description": [
          "Hobgoblin",
          "A brutal Hobgoblin is stalking this area. It will remain here until it is killed."
        ]
      },
      "Lion": {
        "name": "Lion",
        "count": 1,
        "file": "lion",
        "description": [
          "Lion",
          "A Lion is preying on everything in this area. It will remain here until it is killed."
        ]
      },
      "Ogre": {
        "name": "Ogre",
        "count": 2,
        "file": "ogre",
        "description": [
          "Ogre",
          "An Ogre has decided this area is easy pickings. It will remain here until it is killed."
        ]
      },
      "Serpent": {
        "name": "Serpent",
        "count": 1,
        "file": "serpent",
        "description": [
          "Serpent",
          "A Serpent has made its home in this area. It will remain here until it is killed."
        ]
      },
      "Wild Boar": {
        "name": "Wild Boar",
        "count": 2,
        "file": "wild_boar",
        "description": [
          "Wild Boar",
          "There is a Wild Boar roaming this area. It will remain here until it is killed."
        ]
      },
      "Wolf": {
        "name": "Wolf",
        "count": 1,
        "file": "wolf",
        "description": [
          "Wolf",
          "A vicious Wolf now dwells in this area. It will remain here until it is killed."
        ]
      },
      "Demon": {
        "name": "Demon",
        "count": 1,
        "file": "demon",
        "description": [
          "Demon",
          "A Demon has appeared from the underworld to cause chaos in this area. It will remain here until it is killed."
        ]
      },
      "Ghost": {
        "name": "Ghost",
        "count": 2,
        "file": "ghost",
        "description": [
          "Ghost",
          "A Ghost materialises in (roll 1 die):",
          "1) City                 2) Village",
          "3) Graveyard       4) Chapel",
          " 5) Castle              6) Temple",
          "It now haunts this area and will remain here until it is killed."
        ]
      },
      "Lemure": {
        "name": "Lemure",
        "count": 2,
        "file": "lemure",
        "description": [
          "Lemure",
          "This lowly creature from the Underworld pounces at you from the shadows. It will remain here until it is killed."
        ]
      },
      "Shadow": {
        "name": "Shadow",
        "count": 2,
        "file": "shadow",
        "description": [
          "Shadow",
          "A Shadow is lurking in the dark corners of this area. It will remain here until killed."
        ]
      },
      "Spectre": {
        "name": "Spectre",
        "count": 1,
        "file": "spectre",
        "description": [
          "Spectre",
          "A Spectre has appeared in this area. It will remain here until it is killed."
        ]
      },
      "Wraith": {
        "name": "Wraith",
        "count": 2,
        "file": "wraith",
        "description": [
          "Wraith",
          "A Wraith is wreaking havoc in this area. It will remain until it is killed."
        ]
      },
      "Enchanter": {
        "name": "Enchanter",
        "count": 1,
        "file": "enchanter",
        "description": [
          "An Enchanter seeks an able adventurer. To the first character landing here with a Craft of 4 or more he will grant one of the following wishes of their choice, then vanish: Gain one Spell, gold, Strength, Craft, life, or fate; or teleport to any space in this Region."
        ]
      },
      "Fairy": {
        "name": "Fairy",
        "count": 1,
        "file": "fairy",
        "description": [
          "A Fairy seeks a champion. To the first good character landing here she will grant one of the following wishes of their choice, then vanish: Gain one Spell, gold, Strength, Craft, life, or fate; or teleport to any other space in this Region."
        ]
      },
      "Healer": {
        "name": "Healer",
        "count": 1,
        "file": "healer",
        "description": [
          "A Healer has made his home here for the rest of the game. He will heal up to 2 lives per visit for any character landing here, free of charge."
        ]
      },
      "Hermit": {
        "name": "Hermit",
        "count": 1,
        "file": "hermit",
        "description": [
          "Roll 1 die and place the Hermit on the indicated space:",
          "1) Crypt                 2) Plain of Peril",
          "3) Cursed Glade    4) Oasis            ",
          "5) Crags                6) Forest           ",
          "He will give the first character to visit him there a Talisman, if available, and then vanish to the discard pile."
        ]
      },
      "Instructor": {
        "name": "Instructor",
        "count": 1,
        "file": "instructor",
        "description": [
          "The Instructor will remain here for the rest of the game. The Instructor is happy to teach you for a price. For every 3 gold you pay, you must miss 1 turn and gain either 1 point of",
          "Strength or Craft."
        ]
      },
      "Mage": {
        "name": "Mage",
        "count": 1,
        "file": "mage",
        "description": [
          "A kindly Mage has made his home here for the rest of the game. He will give one Spell per visit to each good character landing here, if their Craft allows."
        ]
      },
      "Phantom": {
        "name": "Phantom",
        "count": 1,
        "file": "phantom",
        "description": [
          "A Phantom will haunt this space until it has granted the first evil character to visit it one of the following wishes of their choice whereupon it will vanish: Gain one Spell, gold, Strength, Craft, life, or fate; or teleport to any other space in this Region."
        ]
      },
      "Sorcerer": {
        "name": "Sorcerer",
        "count": 1,
        "file": "sorcerer",
        "description": [
          "A Sorcerer has set up shop here and will remain for the rest of the game. He sells Spells at the price of 1 gold per Spell - but only to those whose Craft allows. You may only buy one Spell per visit."
        ]
      },
      "Witch": {
        "name": "Witch",
        "count": 1,
        "file": "witch",
        "description": [
          "A Witch lurks in this space for the rest of the game. If you land here roll 1 die:",
          "1) Become a Toad for 3 turns",
          " 2) Lose 1 life",
          " 3) Gain 1 Strength",
          " 4) Gain 1 Craft",
          " 5) Gain 1 Spell",
          " 6) Replenish fate up to your fate value"
        ]
      },
      "Alchemist": {
        "name": "Alchemist",
        "count": 1,
        "file": "alchemist",
        "description": [
          "The Alchemist can convert any number of Objects you have into gold. Each item will turn into 1 gold. He cannot reverse the procedure."
        ]
      },
      "Gnome": {
        "name": "Gnome",
        "count": 1,
        "file": "gnome",
        "description": [
          "You need only roll 1 die when opening the Portal of Power by Craft and 2 dice in the Mines.",
          "You need not roll the die in the Crags unless you wish to. If you choose to roll, you must accept the result.",
          "You may evade creatures and characters in the Hills."
        ]
      },
      "Guide": {
        "name": "Guide",
        "count": 2,
        "file": "guide",
        "description": [
          "You need not roll the die in the Chasm, Crags or Forest unless you wish to. If you choose to roll, you must accept the result."
        ]
      },
      "Maiden": {
        "name": "Maiden",
        "count": 1,
        "file": "maiden",
        "description": [
          "Add 2 to your Craft."
        ]
      },
      "Mercenary": {
        "name": "Mercenary",
        "count": 1,
        "file": "mercenary",
        "description": [
          "If you want the Mercenary as your Follower, pay 1 gold. If not, he waits here for a character willing to pay him.",
          "While he is your Follower he will add 3 to your Strength in battle until the end of the turn provided you pay 1 gold. You may only pay 1 gold once per turn."
        ]
      },
      "Mule": {
        "name": "Mule",
        "count": 1,
        "file": "mule",
        "description": [
          "The Mule can carry an extra four Objects for you.",
          "If you lose the Mule, leave any surplus Objects of your choice in the space you are in."
        ]
      },
      "Pixie": {
        "name": "Pixie",
        "count": 1,
        "file": "pixie",
        "description": [
          "You need not roll the die in the Forest unless you wish to. If you choose to roll, you must accept the result.",
          "You may evade creatures and characters in the Woods."
        ]
      },
      "Unicorn": {
        "name": "Unicorn",
        "count": 1,
        "file": "unicorn",
        "description": [
          "Add 1 to your Strength and 1 to your Craft."
        ]
      },
      "Prince": {
        "name": "Prince",
        "count": 1,
        "file": "prince",
        "description": [
          "You may have up to 2 lives per visit healed at the Castle for free.",
          "You may exchange the Prince for 3 gold at the Castle. If you do this, you must place him on the discard pile."
        ]
      },
      "Princess": {
        "name": "Princess",
        "count": 1,
        "file": "princess",
        "description": [
          "You may have up to 2 lives per visit healed at the Castle for free.",
          "You may exchange the Princess for 3 gold at the Castle. If you do this, you must place her on the discard pile."
        ]
      },
      "Amulet": {
        "name": "Amulet",
        "count": 1,
        "file": "amulet",
        "description": [
          "You cannot cast Spells, including the Command Spell.",
          "No Spells will affect you,",
          "other than the Command Spell."
        ]
      },
      "Cross": {
        "name": "Cross",
        "count": 1,
        "file": "cross",
        "description": [
          "If you are evil, you do not lose a life in the Chapel; if you are good, you do not lose a life in the Graveyard.",
          "You may choose to automatically destroy any Spirits without resorting to psychic combat. Spirits destroyed in this manner cannot be kept as trophies."
        ]
      },
      "Holy Grail": {
        "name": "Holy Grail",
        "count": 1,
        "file": "holy_grail",
        "description": [
          "No evil character may have the",
          "Holy Grail.",
          "Add 1 to your Craft.",
          "You do not lose a life in the Desert."
        ]
      },
      "Magic Belt": {
        "name": "Magic Belt",
        "count": 1,
        "file": "magic_belt",
        "description": [
          "Add 1 to your Strength."
        ]
      },
      "Orb of Knowledge": {
        "name": "Orb of Knowledge",
        "count": 1,
        "file": "orb_of_knowledge",
        "description": [
          "Whenever you have to draw Adventure Cards, you may discard one card of your choice that you do not wish to encounter and draw one more card to replace it, which you must encounter."
        ]
      },
      "Potion of Strength": {
        "name": "Potion of Strength",
        "count": 1,
        "file": "potion_of_strength",
        "description": [
          "When you drink the potion it will increase your Strength by 2 until the end of the turn. Once you have drunk it, place it on the discard pile."
        ]
      },
      "Ring": {
        "name": "Ring",
        "count": 1,
        "file": "ring",
        "description": [
          "Add 1 to your Strength and 1 to your Craft."
        ]
      },
      "Solomon's Crown": {
        "name": "Solomon's Crown",
        "count": 1,
        "file": "solomons_crown",
        "description": [
          "Add 2 to your Craft."
        ]
      },
      "Talisman": {
        "name": "Talisman",
        "count": 2,
        "file": "talisman",
        "description": [
          "You may only enter the Valley of Fire if you have one of the fabled Talismans."
        ]
      },
      "Wand": {
        "name": "Wand",
        "count": 1,
        "file": "wand",
        "description": [
          "You may always have at least 1 Spell if your Craft allows (gain a Spell each time you cast your last Spell)."
        ]
      },
      "Holy Lance": {
        "name": "Holy Lance",
        "count": 1,
        "file": "holy_lance",
        "description": [
          "",
          "No evil character may have the",
          "Holy Lance.",
          "Add 1 to your Strength during battle.",
          "Add 3 to your Strength during battle",
          "against Dragons."
        ]
      },
      "Runesword": {
        "name": "Runesword",
        "count": 1,
        "file": "runesword",
        "description": [
          "",
          "No good character may have the Runesword.",
          "Add 1 to your Strength during battle.",
          "When you use the Runesword in battle to defeat an Enemy or another character and then cause them to lose a life, you gain 1 life."
        ]
      },
      "Bag of Gold": {
        "name": "Bag of Gold",
        "count": 8,
        "file": "bag_of_gold",
        "description": [
          "Exchange immediately for 1 gold and then place this card on the discard pile."
        ]
      },
      "Raft": {
        "name": "Raft",
        "count": 1,
        "file": "raft",
        "description": [
          "On your next turn, instead of your normal move, you may choose to cross the River to a space opposite the one you are in.",
          "Whether you cross or not, you lose the Raft, as it cannot be carried with you."
        ]
      },
      "Two Bags of Gold": {
        "name": "Two Bags of Gold",
        "count": 3,
        "file": "two_bags_of_gold",
        "description": [
          "Exchange immediately for 2 gold and then place this card on the discard pile."
        ]
      },
      "Water Bottle": {
        "name": "Water Bottle",
        "count": 1,
        "file": "water_bottle",
        "description": [
          "You do not lose a life in the Desert."
        ]
      },
      "Armour": {
        "name": "Armour",
        "count": 1,
        "file": "armour",
        "description": [
          "If you are defeated in battle and lose a life, roll 1 die. If you roll a 4, 5 or 6, the Armour protected you and you did not lose that life, though you still lost the battle."
        ]
      },
      "Helmet": {
        "name": "Helmet",
        "count": 1,
        "file": "helmet",
        "description": [
          "If you are defeated in battle and lose a life, roll 1 die. If you roll a 6, the Helmet protected you and you did not lose that life, though you still lost the battle."
        ]
      },
      "Shield": {
        "name": "Shield",
        "count": 1,
        "file": "shield",
        "description": [
          "If you are defeated in battle and lose a life, roll 1 die. If you roll a 5 or 6, the Shield protected you and you did not lose that life, though you still lost the battle."
        ]
      },
      "Axe": {
        "name": "Axe",
        "count": 1,
        "file": "axe",
        "description": [
          "Add 1 to your Strength during battle.",
          "You may build a Raft when you are in the Woods or the Forest."
        ]
      },
      "Sword": {
        "name": "Sword",
        "count": 2,
        "file": "sword",
        "description": [
          "Add 1 to your Strength during battle."
        ]
      },
      "Cave": {
        "name": "Cave",
        "count": 1,
        "file": "cave",
        "description": [
          "The Cave will remain here for the rest of the game. See what you discover inside by rolling 1 die:",
          "1) Attacked by a Dragon - Strength 7",
          "2) Attacked by a Goblin - Strength 2",
          "3) Lost for 1 turn",
          "4-5) Gain 2 gold",
          "6) Gain 3 gold"
        ]
      },
      "Fountain of Wisdom": {
        "name": "Fountain of Wisdom",
        "count": 1,
        "file": "fountain_of_wisdom",
        "description": [
          "Four Craft points are found here. You may drink from the Fountain once per visit and take one Craft from the Fountain to add to your own Craft. When all four have been taken, the Fountain vanishes."
        ]
      },
      "Magic Portal": {
        "name": "Magic Portal",
        "count": 1,
        "file": "magic_portal",
        "description": [
          "The Magic Portal will remain here for the rest of the game. You may pass through it if you wish. Roll 1 die to determine where you are teleported to:",
          "1) Crags    2) Village",
          "3) City    4) Warlock's Cave",
          "5) Temple    6) Plain of Peril"
        ]
      },
      "Magic Stream": {
        "name": "Magic Stream",
        "count": 1,
        "file": "magic_stream",
        "description": [
          "Four Strength points are found here. You may drink at the Stream once per visit and increase your Strength by taking one Strength from the Stream. When all 4 have been taken, the Stream vanishes."
        ]
      },
      "Market": {
        "name": "Market",
        "count": 1,
        "file": "market",
        "description": [
          "A Market has set up here for the rest of the game. On each visit you may buy available Objects at these prices: Sword 1G, Helmet 1G, Water Bottle 1G, Shield 2G, Mule 2G, Raft 3G."
        ]
      },
      "Marsh": {
        "name": "Marsh",
        "count": 1,
        "file": "marsh",
        "description": [
          "The Marsh will remain here for the rest of the game. Whenever you land here, if your Strength is less than 5 you must miss one turn."
        ]
      },
      "Maze": {
        "name": "Maze",
        "count": 1,
        "file": "maze",
        "description": [
          "The Maze will remain here for the rest of the game. Whenever you land here, if your Craft is less than 5 you must miss one turn."
        ]
      },
      "Shrine": {
        "name": "Shrine",
        "count": 1,
        "file": "shrine",
        "description": [
          "The Shrine will remain here for the rest of the game. Roll 1 die to pray with the following results:",
          " 1) Ignored",
          " 2) Gain 1 fate",
          " 3) Gain 1 gold",
          " 4) Gain 1 Spell",
          " 5) Gain 1 life",
          " 6) Teleport to any space in the same Region"
        ]
      }
    }
  },
  "The Ancient Beasts": {
    "ADVENTURE": {},
    "BEASTS": {
      "Amarok": {
        "name": "Amarok",
        "count": 1,
        "file": "amarok",
        "description": [
          "",
          "~Having witnessed many beasts young and old have their lives cut short. The Beast King has stepped forth onto the battlefield to strike back against those who wish to slay his kin. Man has built cages and walls around nature, Amarok will return the wilds.~",
          "Amarok rolls two dice in battle and adds them together for his attack roll.",
          "If you attack Amarok, reveal cards from the top of the Adventure deck until you reveal an Animal. Place the Animal on his space, then fight them together, discard all other cards revealed this way.",
          "Whenever an Animal is attacked, Amarok will come to defend it. He moves to that space and fights alongside that Animal.",
          "If Amarok successfully defends an Animal, it joins his pack, and is placed on Amarok's card. Amarok adds 1 to his attack roll in battle or psychic combat for each Animal in his pack.",
          "If you kill Amarok, take the Shard of the Wild Beast Reward."
        ]
      },
      "Ambrades": {
        "name": "Ambrades",
        "count": 1,
        "file": "primordius",
        "description": [
          "",
          "~There are those who say it was a creature who drank from carelessly discarded potions. Some say it emerged from a stream corrupted by dark magic. Others say it is much more ancient than many would believe. Whatever its origin, one thing is for certain, its hunger for anything to add to its mass is almost impossible to fulfil.~",
          "At the end of each round, Ambrades moves one space to the nearest Beast. If there are no Beasts in play it moves towards the nearest character instead.",
          "If Ambrades lands on a space with a Beast, it attempts to absorb the Beast. Roll 1 die:",
          "1) Nothing Happens. 2-3) Weaken the Beast. 4-5) Weaken the Beast twice. 6) Kill the Beast.",
          "If Ambrades kills the Beast this way place it onto Ambrades.",
          "Ambrades adds 4 to his attack roll for each Beast he has absorbed.",
          "If Ambrades lands on a space with a character, that character is killed and Ambrades gains 1 life.",
          "When Ambrades has absorbed 3 Beasts, he reaches the Apex.",
          "Each time you defeat Ambrades, you gain 1 life and you may take the Rewards on the other Beasts absorbed by Ambrades as though you killed them. Then remove them from the game.",
          "If you kill Ambrades, take the Primal Origin Beast Reward."
        ]
      },
      "Atropa": {
        "name": "Atropa",
        "count": 1,
        "file": "atropa",
        "description": [
          "",
          "~There are rumours a dark magic fills the trees of the swamp, some even bore life. It is also said that these trees protect this magical domain, guarding it from those who would desecrate it.~",
          "After you resolve a battle or psychic combat with Atropa, choose a different Region, and move Atropa to a space within that Region.",
          "Whenever a character spends fate in the same Region as Atropa, Atropa heals 1 life and the Aspect of the Mire is returned to the deck.",
          "Any characters in the same Region as Atropa may not gain or replenish fate.",
          "Each time you defeat Atropa, you may choose to replenish fate up to your fate value, remove a life from Atropa, teleport to any space with the same name, or receive the Aspect of the Mire Beast Reward.",
          "If you kill Atropa, take both the Aspect of the Mire and Atropa's Husk Beast Rewards."
        ]
      },
      "Deimos": {
        "name": "Deimos",
        "count": 1,
        "file": "demios",
        "description": [
          "",
          "~Embroiled in an eternal sibling rivalry, the Twins roam around the regions in an attempt to gain favour with the gods, standing apart from each other's efforts until brought face to face with one another.~",
          "When Deimos is revealed, Phobos is drawn from the deck as well, then Deimos becomes frenzied.",
          "At the end of each round, Deimos moves 3 spaces clockwise and if frenzied; an additional space.",
          "The Twins alternate being calm and frenzied. If frenzied, their Strength and Craft values are doubled, and their effects do not take place. If either loses a life, it becomes frenzied and the other calm.",
          "If the Twins are ever across the Storm River from one another, they will exchange places, and whichever is frenzied will take a life from the other. Their temperament is then swapped.",
          "When characters in the same Region as Deimos trade-in trophies to gain Strength, reduce the number of Strength points needed by 1.",
          "If Phobos is killed, Deimos becomes permanently frenzied.",
          "If you defeat Deimos, take the Deimos' Wrath Beast Reward."
        ]
      },
      "Ganymai": {
        "name": "Ganymai",
        "count": 1,
        "file": "ganymai",
        "description": [
          "",
          "~Deep beneath the current of the Storm River stirs a dormant life force. Emerging gracefully above the surface and on to the land, it begins blindly weaving a path forward, never straying too far from the comfort of the waters.~",
          "At the end of each round, Ganymai crosses the Storm River to the space which is furthest clockwise.",
          "Each time Ganymai moves, it leaves behind a Wellspring Terrain card. When Ganymai moves onto a Wellspring it heals 1 life, then moves 1 space clockwise.",
          "Characters on the same space as, or adjacent to Ganymai at the end of their turn may remove 1 life from Ganymai to heal 1 life or replenish 1 fate.",
          "If a character would be killed whilst on the same space as, or adjacent to Ganymai, that character may choose to kill Ganymai to prevent their death and heal 1 life."
        ]
      },
      "Jurassus": {
        "name": "Jurassus",
        "count": 1,
        "file": "jurassus",
        "description": [
          "",
          "~Sealed long ago by the power of magic, Jurassus learned to pollute the arcane forces that bound him. Through the pollution he manifests, consuming the magic of the land, and spreading his plague.~",
          "At the end of each round, every character (not in the Inner Region) is moved one space closer to Jurassus for each Spell and Magic Object they have.",
          "If Jurassus moves a character onto his space, they lose 1 life for each Spell and Magic Object they have. Jurassus then places a Cursed Glade Terrain card on the closest space that is not already a Cursed Glade.",
          "Jurassus adds 1 to his attack roll for all Spells and Magic Objects held by all characters on a Cursed Glade.",
          "If Jurassus attempts to place a Cursed Glade Terrain card and there are none available, Jurassus reaches the Apex, draining the land of all magic and life.",
          "If you kill Jurassus, take the Magical Blight Beast Reward."
        ]
      },
      "Kallind": {
        "name": "Kallind",
        "count": 1,
        "file": "kallind",
        "description": [
          "",
          "~Guardian and ancestor of the Dragons, Kallind was enraged at the defilement of the sacred Dragon Realm and the royal Dragon Tower. The Smouldering Titan seeks its revenge on the heroes of Talisman, rendering those who stand in its path into smouldering heaps of ash.~",
          "Whilst a Dragon is on the board, Kallind cannot be encountered.",
          "Dragons in the same Region as Kallind add 3 to their attack scores.",
          "For each point of life Kallind is missing, increase its Strength and Craft by 2. ",
          "Each time you encounter Kallind, you are engulfed by the protective ash cloud and must lose 1 life.",
          "At the end of each round, Kallind heals 1 life and moves up to 4 spaces towards the nearest Dragon if able.",
          "When Kallind comes to rest, it consumes the area in a choking hot ash cloud. Any Followers in that space are killed, and all other Adventure cards remaining which are not Dragons are discarded. Any characters in the space must lose 1 life.",
          "If you defeat Kallind, you may encounter it again immediately.",
          "If you kill Kallind, take the Glaive of Kallind Beast Reward."
        ]
      },
      "Kernos": {
        "name": "Kernos",
        "count": 1,
        "file": "kernos",
        "description": [
          "",
          "~In the Great Silence, a mighty Runelord was lain to rest. Their body was salvaged and scattered throughout the land as idols to worship. Aeons passed and with the resurgence of magic across the land, the etched stones began to glow with the power imbued within them, reawakening that which once lay within.~",
          "Kernos starts with five Runic tokens.",
          "Kernos' life is equal to the number of Runic tokens it holds.",
          "At the end of each round, Kernos is drawn towards the nearest character (not in the Inner Region) that has a Spell, move Kernos one space per Spell that character holds. If there is a tie or no characters with a Spell, Kernos does not move. Place a Runes Terrain card wherever Kernos ends its turn.",
          "If you are defeated by Kernos, return any Runic tokens you have instead of losing a life. You are then transported to another Runes space chosen by the character to your right.",
          "Each time you defeat Kernos, the Runelord rewards you with a Runic token. Add 1 to your attack roll on Runes spaces for each Runic token you have.",
          "If you kill Kernos, place the Shrine of Kernos on your space and take the Runelord's Tablet Beast Reward."
        ]
      },
      "Su'Rua Tu": {
        "name": "Su'Rua Tu",
        "count": 1,
        "file": "khepri",
        "description": [
          "",
          "~Having fled her original nest that was brought to ruin in a natural disaster, the Hive Queen now terrorises the surface. Drawn to the power and warmth emitting from the Crown of Command, she wishes to establish a new hive, one that will engulf the whole Land of Talisman so that none shall harm her brood.~",
          "At the end of each round, Su'Rua Tu moves 3 spaces clockwise and 1 additional space for each space she moves through containing a Brood token.",
          "Any characters Su'Rua Tu passes whilst moving lose 1 life and must miss their next turn trapped in her web.",
          "When Su'Rua Tu lands on a space, she places 1 Brood token on that space, she then discards all faceup Enemies on that space and places an additional Brood token down for each Enemy discarded.",
          "Characters on spaces with Brood tokens reduce their rolls by 1 for each Brood token on that space.",
          "After a characters ends their turn on a space with a Brood token, remove any Brood tokens there.",
          "If there is a Brood token on each space in Su'Rua Tu's Region, she reaches the Apex.",
          "Each time you defeat Su'Rua Tu, take a Deadly Poison Beast Reward.",
          "If you kill Su'Rua Tu, take the Queen Crest Beast Reward."
        ]
      },
      "Moroz": {
        "name": "Moroz",
        "count": 1,
        "file": "wodan",
        "description": [
          "",
          "~Tired of the seasonal rules that restrict his time on this land. His cold heart desires to create an eternal winter so that he may roam freely forever more.~",
          "After a character (not in the Inner Region) draws an Event, Moroz moves to their space.",
          "Characters in the same Region as Moroz may only move 1 space per turn.",
          "If defeated by Moroz, in addition to losing 1 life, you must miss your next turn.",
          "Each time you defeat Moroz, take a Frozen Winds Beast Reward.",
          "If you kill Moroz, take the Blizzard Beard Beast Reward."
        ]
      },
      "Nuguasha": {
        "name": "Nuguasha",
        "count": 1,
        "file": "echidna",
        "description": [
          "",
          "~The Mother of Monsters has arisen into a land of opportunity. She devours the creatures of the realm, preparing herself to spawn a new generation of monsters.~",
          "At the end of each round, Nuguasha moves to the nearest Enemy on the board and devours it (placing the card onto Nuguasha). If there are multiple Enemies on the space, one is chosen at random. Any characters on the space lose 1 life.",
          "Each card on Nuguasha symbolises another head she has grown and adds 1 to her attack rolls.",
          "Once Nuguasha has amassed 20 Enemies on her card, she will move 1 space closer to the Chasm per turn. If she is on the Chasm and has 20 or more cards Nuguasha reaches the Apex, spawning horrors which decimate the land.",
          "Each time you defeat Nuguasha, remove one of her heads and immediately exchange it for either a Strength or Craft. If Nuguasha had only one head remaining, she is killed.",
          "If you kill Nuguasha, take the Heart of Monsters Beast Reward."
        ]
      },
      "Phobos": {
        "name": "Phobos",
        "count": 1,
        "file": "phobos",
        "description": [
          "",
          "~Embroiled in an eternal sibling rivalry, the Twins roam around the regions in an attempt to gain favour with the gods, standing apart from each other's efforts until brought face to face with one another.~",
          "When Phobos is revealed, Deimos is drawn from the deck as well, then Phobos becomes frenzied.",
          "At the end of each round, Phobos moves 3 spaces clockwise and if frenzied; an additional space.nThe Twins alternate being calm and frenzied. If frenzied, their Strength and Craft values are doubled, and their effects do not take place. If either loses a life, it becomes frenzied and the other calm.",
          "If the Twins are ever across the Storm River from one another, they will exchange places, and whichever is frenzied will take a life from the other. Their temperament is then swapped.",
          "When characters in the same Region as Phobos trade-in trophies to gain Craft, reduce the number of Craft points needed by 1.",
          "If Deimos is killed, Phobos becomes permanently frenzied.",
          "If you defeat Phobos, take the Phobos' Fury Beast Reward."
        ]
      },
      "Thrano": {
        "name": "Thrano",
        "count": 1,
        "file": "thrano",
        "description": [
          "",
          "~One of few that remain of a species that have existed since a time before recorded history and long thought to be just myth. This horned terror has ventured out of its hidden home to explore and assert its dominance over this unfamiliar land. Those foolish enough to stand against this Beast should not underestimate the wrath it will bring down upon them.~",
          "At the end of each round, Thrano rolls two dice for movement, then moves that many spaces towards the closest character and continues in that direction around the board.",
          "Any characters Thrano passes whilst moving must lose 1 life, or discard a Follower. Thrano will then miss his next turn.",
          "If you defeat Thrano in battle, take a Wild Ivory Beast Reward. If you defeat Thrano in psychic combat, gain 1 Strength."
        ]
      },
      "Trovius": {
        "name": "Trovius",
        "count": 1,
        "file": "cancer",
        "description": [
          "",
          "~A shimmering mountain of treasure assimilated over generations into Trovius' carapace can be seen for miles.~",
          "At the end of each round, Trovius rolls 2 dice. The first die will cause Trovius to move that many spaces clockwise. The second determines how many spaces Trovius moves counter-clockwise.",
          "Trovius assimilates any Objects laying faceup on the spaces he moves through, adding them to his carapace.",
          "Any characters Trovius passes whilst moving are forced to relinquish 1 Object as an offering, those who don't suffer his wrath and lose 1 life.",
          "If you defeat Trovius, the attack counts as a stand-off unless your attack score wins by more points than the number of Objects Trovius has.",
          "If Trovius' carapace has 20 Objects he will achieve the Apex.",
          "Each time you defeat Trovius, you may take an Object from his treasure cache.",
          "If you kill Trovius, take the Carapace of Burden Beast Reward, along with any Objects remaining in his cache."
        ]
      },
      "Virgil": {
        "name": "Virgil",
        "count": 1,
        "file": "virgil",
        "description": [
          "",
          "~The origin of man, worshipped for the primal forms of combat. An arm for each style mastered. Every hand armed with a Weapon; every Weapon mastered to perfection. A duel against this titan would be like duelling against an army.~",
          "When Virgil is revealed, remove all Weapons from all spaces and characters and place them on Virgil.",
          "At the end of each round, Virgil moves 1 space counter-clockwise.",
          "All Weapon modifiers on Weapons held by Virgil will be used by him in battle or psychic combat. Ignore any extra effects.",
          "If Virgil lands on the Temple and there are no Weapons on that space, remove all Weapons from all characters and place them on Virgil. If no Weapons are removed this way, Virgil reaches the Apex.",
          "Each time you defeat Virgil, take a Duel Order Beast Reward and any Weapon from him.",
          "If you kill Virgil, you may take any Weapons from him. You also receive the Asura Regalia Beast Reward."
        ]
      },
      "Zephyr": {
        "name": "Zephyr",
        "count": 1,
        "file": "zephyr",
        "description": [
          "",
          "~Never faltering or ending, its destruction knows no bias. Its winds blow with enough force to wipe away a whole village in an instant. Constantly on the move, it neither knows, nor cares for anything that may be in its path.~",
          "At the end of each round, Zephyr moves 1 space clockwise, and 1 additional space for each card currently on its space.",
          "Zephyr will remove 1 life from each character it moves through.",
          "When Zephyr moves, it brings any cards from its original space with it. Depositing them on the space it moves to.",
          "Before encountering Zephyr in battle or psychic combat, lose 1 life for each Armour and Weapon you have.",
          "If Zephyr passes the space it started its movement on, Zephyr reaches the Apex, completing the Eternal Storm.",
          "If you kill Zephyr, take the Eternal Spark Beast Reward."
        ]
      }
    },
    "TERRAIN": {
      "Cursed Glade": {
        "name": "Cursed Glade",
        "count": 6,
        "file": "terrain_cursed_glade",
        "description": [
          "DRAW 1 CARD",
          "Do not draw a card if there is already one in this space.",
          "Strength and Craft derived from Objects and Magic Objects do not count on this space, nor may you use Magic Objects or cast Spells."
        ]
      },
      "Runes": {
        "name": "Runes",
        "count": 2,
        "file": "terrain_runes",
        "description": [
          "DRAW 1 CARD",
          "Do not draw a card if there is already one in this space.",
          "Any creatures that you fight here add 2 to their attack rolls."
        ]
      },
      "Shrine of Kernos": {
        "name": "Shrine of Kernos",
        "count": 1,
        "file": "terrain_shrine_of_kernos",
        "description": [
          "PRAY: ROLL 2 DICE",
          "2-4) Discard all of your Spells and miss your next turn.",
          "5-6) Discard a Spell, if you are unable; lose 1 life instead.",
          "7-8) Place a Runes Terrain card.",
          "9-10) Gain 1 Craft or 1 Spell if your Craft allows.",
          "11+) Gain 1 Craft then gain your full complement of Spells, according to your Craft."
        ]
      },
      "Wellspring": {
        "name": "Wellspring",
        "count": 4,
        "file": "terrain_wellspring",
        "description": [
          "HEAL 1 LIFE THEN DRAW 2 CARDS",
          "If there are any cards already in this space, draw only enough to take the total to two cards.",
          "Enemies on or adjacent to a Wellspring add 1 to their attack score."
        ]
      }
    },
    "BEAST_REWARD": {
      "Aspect of the Mire": {
        "name": "Aspect of the Mire",
        "count": 1,
        "file": "aspect_of_the_mire",
        "description": [
          "~This simple boon serves as a reminder of your atrocities.~",
          "Increase your fate value by 1.",
          "Whenever a character lands on the Cursed Glade, you may replenish fate up to your fate value."
        ]
      },
      "Asura Regalia": {
        "name": "Asura Regalia",
        "count": 1,
        "file": "asura_regalia",
        "description": [
          "~An ancient symbol takes root within your soul, it fills with you with the desire for battle. For each Weapon held, a hand appears, ready to wield another.~",
          "You may use any number of Weapons in battle or psychic combat.",
          "Whenever you land on a space with another character, you must attack them instead of encountering the space."
        ]
      },
      "Atropa's Husk": {
        "name": "Atropa's Husk",
        "count": 1,
        "file": "atropas_husk",
        "description": [
          "~The Husk offers protection against the power of destiny.~",
          "If you are defeated in battle or psychic combat and just lost a life, replenish 1 fate then roll 1 die.",
          "If the result is less than or equal to your current fate, you are protected and you did not lose that life, though you still lost the attack."
        ]
      },
      "Blizzard Beard": {
        "name": "Blizzard Beard",
        "count": 1,
        "file": "blizzard_beard",
        "description": [
          "~While Moroz is defeated his curse lives on, for all except the one who holds his head.~",
          "All other characters in your Region may only move 1 space per turn.",
          "If you defeat another character in battle, they must miss their next turn."
        ]
      },
      "Carapace of Burden": {
        "name": "Carapace of Burden",
        "count": 1,
        "file": "carapace_of_burden",
        "description": [
          "~The large shell weighs nothing and slowly absorbs any Objects placed onto it.~",
          "You have no inventory limit.",
          "If you are defeated in battle and just lost a life, roll 1 die. If you roll a 6, the Carapace protected you and you did not lose that life, though you still lost the battle. You may add 1 to this roll for each Object you are carrying."
        ]
      },
      "Deadly Poison": {
        "name": "Deadly Poison",
        "count": 4,
        "file": "deadly_poison",
        "description": [
          "~A poison which is especially effective against the Ancient Beasts which Su'Rua Tu uses to protect her brood.~",
          "If you defeat a character in battle or psychic combat and cause them to lose a life, you may discard this card to force them to lose an additional life.",
          "If you defeat a Beast in battle or psychic combat and weaken it, you may discard this card and weaken it an additional time."
        ]
      },
      "Deimos' Wrath": {
        "name": "Deimos' Wrath",
        "count": 1,
        "file": "demios_wrath",
        "description": [
          "~You are overcome with a lust for power and domination.~",
          "Increase your Strength value by 2.",
          " Your Object carrying limit is increased by 4."
        ]
      },
      "Duel Order": {
        "name": "Duel Order",
        "count": 3,
        "file": "duel_order",
        "description": [
          "~Invoke the Ancient Rites, claim the approval of Asura.~",
          "Instead of moving normally, you may teleport to the same space as another character and attack them. Neither character may use Weapons or Armour in this battle or psychic combat. In addition to any other rewards, the winner gains 1 Strength in battle or 1 Craft in psychic combat."
        ]
      },
      "Eternal Spark": {
        "name": "Eternal Spark",
        "count": 1,
        "file": "eternal_spark",
        "description": [
          "~A shard of the Eternal Storm. A fraction of power that few could ever hope to control.~",
          "Whenever you are encountered by a character, they lose 1 life for each Armour and Weapon they have."
        ]
      },
      "Frozen Winds": {
        "name": "Frozen Winds",
        "count": 3,
        "file": "frozen_winds",
        "description": [
          "~The passive power of Moroz can become so cold it can become solid enough to reach out and take it. This frozen power can protect your body from the coldest of storms.~",
          "If an effect limits your movement to 1 space per turn, you may add up to 3 to your movement.",
          "You may discard this card to force all other characters in this Region to miss 1 turn."
        ]
      },
      "Glaive of Kallind": {
        "name": "Glaive of Kallind",
        "count": 1,
        "file": "glaive_of_kallind",
        "description": [
          "~The tail of Kallind resonates in the presence of any Ancient Beasts.~",
          "If you defeat a Beast in battle or psychic combat and cause it to lose a life, you may absorb a part of its soul by placing 1 Soul Fragment token on this card.",
          "Add 1 to your attack score for each Soul Fragment token on this card.",
          "If there are 10 or more Soul Fragment tokens are on this card, you win the game."
        ]
      },
      "Heart of Monsters": {
        "name": "Heart of Monsters",
        "count": 1,
        "file": "heart_of_monsters",
        "description": [
          "~A writhing heart with a maw of teeth. Feeding it the flesh of the living empowers the user.~",
          "Whenever you land on a space with any Enemies, you may remove them and place them on this card.",
          "Add 1 to your attack roll for each Enemy on this card."
        ]
      },
      "Magical Blight": {
        "name": "Magical Blight",
        "count": 1,
        "file": "magical_blight",
        "description": [
          "~Too proud of his grand creation for it to perish with him, Jurassus gifts his conqueror the secrets of his plague magic.~",
          "You cannot be affected by Spells, and Magic Objects cannot be used against you.",
          "You are unaffected by the Cursed Glade space.",
          "Increase your Spell limit by 3."
        ]
      },
      "Phobos' Fury": {
        "name": "Phobos' Fury",
        "count": 1,
        "file": "phobos_fury",
        "description": [
          "~A manifestation of the primitive will and thirst for knowledge.~",
          "Increase your Craft value by 1.",
          "You may hold 1 more Spell than your Craft allows.",
          "At the start of your turn, you may gain 1 Spell if your Craft allows."
        ]
      },
      "Primal Origin": {
        "name": "Primal Origin",
        "count": 1,
        "file": "origin",
        "description": [
          "~The core of a monstrosity that has pillaged the land clean of life.~",
          "Whenever you kill an Enemy, you may gain 1 Strength, 1 Craft or 1 life instead of taking it as a trophy."
        ]
      },
      "Queen Crest": {
        "name": "Queen Crest",
        "count": 1,
        "file": "queen_crest",
        "description": [
          "~The Crown of Su'Rua Tu. You can sense the brood around the land of Talisman, they offer themselves in submission to your will.~",
          "When taken, place 3 Brood tokens on this card. When Brood tokens are removed from the board, place them on this card.",
          "You may spend 1 life or 1 fate to place a Brood token from this card on your space.",
          "At the end of your turn you may remove a Brood token from your space to replenish 1 life or fate.",
          "You may add 1 to your roll for each Brood token your space."
        ]
      },
      "Runelord's Tablet": {
        "name": "Runelord's Tablet",
        "count": 1,
        "file": "runelords_tablet",
        "description": [
          "~A symbol of recognition awarded by the last Runelord that allows greater manipulation of the ancient runes.~",
          "Add 2 to your attack roll on Runes spaces for each Runic token you have, instead of 1.",
          "After rolling the die when praying, you may add 1 to the result for each Runic token you have."
        ]
      },
      "Shard of the Wild": {
        "name": "Shard of the Wild",
        "count": 1,
        "file": "shard_of_the_wild",
        "description": [
          "~Inside you can hear the creatures in the Realm of Souls; crying in anguish to protect their kin.~",
          "Add 1 to your attack roll in battle for each Animal on the board and in the discard pile."
        ]
      },
      "Wild Ivory": {
        "name": "Wild Ivory",
        "count": 1,
        "file": "wild_ivory",
        "description": [
          "~Contained inside is the wrath of the world. Being near the Ivory fills you with the will of calamity.~",
          "You may roll two dice for your movement and choose one of the results to use for your move.",
          "You may add your movement roll to your Strength in battle."
        ]
      }
    }
  },
  "The Blood Moon": {
    "SPELLS": {
      "Exorcise": {
        "name": "Exorcise",
        "count": 1,
        "file": "exorcise",
        "description": [
          "Cast when you have just completed your move. Discard 1 Spirit in any Region.",
          "If it is Day, you may take the Spirit as a trophy instead of discarding it."
        ]
      },
      "Reanimate": {
        "name": "Reanimate",
        "count": 1,
        "file": "reanimate",
        "description": [
          "Cast on an Enemy you just killed (place this card on the Enemy). The reanimated Enemy becomes your Follower and adds its Strength or Craft to yours during 1 battle or psychic combat of your choice. Then, discard this card and the reanimated Enemy."
        ]
      },
      "Drain Life": {
        "name": "Drain Life",
        "count": 1,
        "file": "drain_life",
        "description": [
          "Cast on an Enemy you are about to encounter. Discard the Enemy and heal an amount of life equal to the Enemy's Strength or Craft."
        ]
      },
      "Benediction": {
        "name": "Benediction",
        "count": 1,
        "file": "benediction",
        "description": [
          "Cast on any character at the start of their turn. The character gains 2 lives.",
          "If it is Day, the character gains an additional 2 lives."
        ]
      },
      "Burial Rites": {
        "name": "Burial Rites",
        "count": 1,
        "file": "burial_rites",
        "description": [
          "Cast at the start of your turn. If it is Day, roll 1 die to pray with the same results as at the Chapel. If it is Night, roll 1 die to pray with the same results as at the Graveyard."
        ]
      },
      "Feral Hunger": {
        "name": "Feral Hunger",
        "count": 1,
        "file": "feral_hunger",
        "description": [
          "Cast when a character is about to engage a creature in battle or psychic combat. The creature automatically rolls a 6 for its attack roll.",
          "If it is Night, all creatures automatically roll a 6 for their attack rolls until the start of your next turn."
        ]
      },
      "Solstice Ritual": {
        "name": "Solstice Ritual",
        "count": 1,
        "file": "solstice_ritual",
        "description": [
          "Cast at any time to flip the Time Card."
        ]
      },
      "Haunting Poltergeist": {
        "name": "Haunting Poltergeist",
        "count": 1,
        "file": "haunting_poltergeist",
        "description": [
          "Cast on any character at the start of their turn. The character must take this card as a Follower and only moves 1 space per turn. The character must discard this card if they cross the River, either by bridge, raft, or ferry."
        ]
      },
      "Curse of the Werewolf": {
        "name": "Curse of the Werewolf",
        "count": 2,
        "file": "curse_of_the_werewolf",
        "description": [
          "Cast on any character at the start of their turn. If the character is not a Lycanthrope, they become a Lycanthrope. If the character is a Lycanthrope, they must roll 1 die on the Werewolf's chart."
        ]
      }
    },
    "ADVENTURE": {
      "Aegis of Daylight": {
        "name": "Aegis of Daylight",
        "count": 1,
        "file": "aegis_of_daylight",
        "description": [
          "When revealed, flip the Time Card to Day.",
          "Whenever a character is defeated by a creature, the attack is considered a stand-off instead.",
          "Discard this card when Night falls."
        ]
      },
      "All Hallow's Eve": {
        "name": "All Hallow's Eve",
        "count": 1,
        "file": "all_hallows_eve",
        "description": [
          "When revealed, flip the Time Card to Night.",
          "Whenever a character visits a Stranger or Place, they may gain 2 gold.",
          "Discard this card when Day breaks."
        ]
      },
      "Blinding Radiance": {
        "name": "Blinding Radiance",
        "count": 1,
        "file": "blinding_radiance",
        "description": [
          "When revealed, flip the Time Card to Day.",
          "Characters may evade Enemies instead of attacking them.",
          "Discard this card when Night falls."
        ]
      },
      "Children of the Night": {
        "name": "Children of the Night",
        "count": 1,
        "file": "children_of_the_night",
        "description": [
          "When revealed, flip the Time Card to Night.",
          "Whenever a character encounters a space with instructions to draw 1 or more Adventure Cards, they must draw 1 more card than required.",
          "Discard this card when Day breaks."
        ]
      },
      "Divine Retribution": {
        "name": "Divine Retribution",
        "count": 1,
        "file": "divine_retribution",
        "description": [
          "When revealed, flip the Time Card to Day.",
          "Whenever a character kills an Enemy during their turn, they may take an extra turn (each character may only do this once per round).",
          "Discard this card when Night falls."
        ]
      },
      "Fright Night": {
        "name": "Fright Night",
        "count": 1,
        "file": "fright_night",
        "description": [
          "When revealed, flip the Time Card to Night.",
          "Whenever a character moves into a space that has an Enemy, they must end their move there instead of moving the full distance as indicated by the die roll.",
          "Discard this card when Day breaks."
        ]
      },
      "Guiding Light": {
        "name": "Guiding Light",
        "count": 1,
        "file": "guiding_light",
        "description": [
          "When revealed, flip the Time Card to Day.",
          "Whenever a character rolls a die for their move, they may move any number of spaces up to their die roll, instead of moving the full distance as indicated by their die roll.",
          "Discard this card when Night falls."
        ]
      },
      "Holy Day": {
        "name": "Holy Day",
        "count": 1,
        "file": "holy_day",
        "description": [
          "When revealed, flip the Time Card to Day.",
          "After a character rolls the die when praying, they may add up to 3 to the score.",
          "Discard this card when Night falls."
        ]
      },
      "Luminous Blessing": {
        "name": "Luminous Blessing",
        "count": 1,
        "file": "luminous_blessing",
        "description": [
          "When revealed, flip the Time Card to Day.",
          "Whenever a character starts their turn, they may either heal 1 life or replenish 1 fate.",
          "Discard this card when Night falls."
        ]
      },
      "Midnight Howl": {
        "name": "Midnight Howl",
        "count": 1,
        "file": "midnight_howl",
        "description": [
          "When revealed, flip the Time Card to Night.",
          "Whenever a character is defeated by an Enemy in battle or psychic combat, in addition to losing 1 life, they must roll 1 die on the Werewolf's chart.",
          "Discard this card when Day breaks."
        ]
      },
      "Moon Mist": {
        "name": "Moon Mist",
        "count": 1,
        "file": "moon_mist",
        "description": [
          "When revealed, flip the Time Card to Night.",
          "Whenever a character rolls a die for their movement, they must roll an additional die and use the lowest result for their move.",
          "Discard this card when Day breaks."
        ]
      },
      "Morning Song": {
        "name": "Morning Song",
        "count": 1,
        "file": "morning_song",
        "description": [
          "When revealed, flip the Time Card to Day.",
          "Whenever a character has just completed their move, they may discard any Adventure Cards of their choice on their space.",
          "Discard this card when Night falls."
        ]
      },
      "Night of the Pumpkin King": {
        "name": "Night of the Pumpkin King",
        "count": 1,
        "file": "night_of_the_pumpkin_king",
        "description": [
          "When revealed, flip the Time Card to Night.",
          "All Fields spaces are considered to be \"Draw 3 Cards\" spaces. If there are already any cards in the Fields space, draw only enough to take the total to 3 cards.",
          "Discard this card when Day breaks."
        ]
      },
      "Triumphant Daybreak": {
        "name": "Triumphant Daybreak",
        "count": 1,
        "file": "triumphant_daybreak",
        "description": [
          "When revealed, flip the Time Card to Day.",
          "Whenever a character engages a creature in battle or psychic combat, they may add 2 to their attack score.",
          "Discard this card when Night falls."
        ]
      },
      "Vampiric Thirst": {
        "name": "Vampiric Thirst",
        "count": 1,
        "file": "vampiric_thirst",
        "description": [
          "When revealed, flip the Time Card to Night.",
          "Whenever a character kills an Enemy, they may gain 1 life.",
          "Discard this card when Day breaks."
        ]
      },
      "Witching Hour": {
        "name": "Witching Hour",
        "count": 1,
        "file": "witching_hour",
        "description": [
          "When revealed, flip the Time Card to Night.",
          "Whenever a character starts their turn, they may gain their full complement of Spells, according to their current Craft.",
          "Discard this card when Day breaks."
        ]
      },
      "Restless Dead": {
        "name": "Restless Dead",
        "count": 1,
        "file": "restless_dead",
        "description": [
          "Take all trophies from all characters and shuffle them. Starting with your space and continuing clockwise, place 1 Enemy faceup in each space until all of the cards have been placed. Then discard this card."
        ]
      },
      "Growing Suspicions": {
        "name": "Growing Suspicions",
        "count": 1,
        "file": "growing_suspicions",
        "description": [
          "Each character must roll 1 die and subtract 1 from their score for each Lycanthrope character in play (to a minimum of 1):",
          "1) Lose 2 lives",
          "2-3) Lose 1 life",
          "4-5) Miss 1 turn",
          "6) No effect",
          "Then discard this card."
        ]
      },
      "Boneyard": {
        "name": "Boneyard",
        "count": 1,
        "file": "boneyard",
        "description": [
          "The Boneyard will remain here for the rest of the game. Once per visit, if the top card on the discard pile is an Enemy, you must place it on this space."
        ]
      },
      "Haunted Hamlet": {
        "name": "Haunted Hamlet",
        "count": 1,
        "file": "haunted_hamlet",
        "description": [
          "The Hamlet will remain here for the rest of the game.",
          "If you visit the Hamlet during the Day, it is treated as if you were visiting the Village.",
          "If you visit the Hamlet during the Night, you must move 1 Spirit from any Region to this space."
        ]
      },
      "Twilight Forest": {
        "name": "Twilight Forest",
        "count": 1,
        "file": "twilight_forest",
        "description": [
          "If it is Day, flip the Time Card to Night; then discard this card.",
          "If it is Night, roll 1 die and draw that number of Adventure Cards. Place 1 Adventure Card of your choice on this space and then discard the rest."
        ]
      },
      "Balefire Dragon": {
        "name": "Balefire Dragon",
        "count": 1,
        "file": "balefire_dragon",
        "description": [
          "Balefire Dragon",
          "Before you engage the Dragon in battle, it makes a breath attack; roll 1 die. If the result is equal to or higher than your Craft, you must discard all other cards in this Region. It will remain here until it is killed."
        ]
      },
      "Crawling Hand": {
        "name": "Crawling Hand",
        "count": 2,
        "file": "crawling_hand",
        "description": [
          "Crawling Hand",
          "If you do not kill the Crawling Hand, roll 1 die and move it that number of spaces clockwise."
        ]
      },
      "Direwolf": {
        "name": "Direwolf",
        "count": 3,
        "file": "direwolf",
        "description": [
          "Direwolf",
          "If you are defeated, in addition to losing 1 life, you become a Lycanthrope. It will remain here until it is killed."
        ]
      },
      "Fire Giant": {
        "name": "Fire Giant",
        "count": 1,
        "file": "fire_giant",
        "description": [
          "Fire Giant",
          "If you do not kill the Fire Giant, roll 1 die and move him that number of spaces clockwise. For each space he moves onto, any characters there lose 1 life and any cards there are discarded."
        ]
      },
      "Fire Salamander": {
        "name": "Fire Salamander",
        "count": 1,
        "file": "fire_salamander",
        "description": [
          "Fire Salamander",
          "When revealed, discard all other cards in this Region. It will remain here until it is killed."
        ]
      },
      "Flesh Golem": {
        "name": "Flesh Golem",
        "count": 1,
        "file": "flesh_golem",
        "description": [
          "Flesh Golem",
          "The Golem's Strength is equal to the number of trophy points you have (to a minimum of 1). If you kill the Golem, gain 1 Strength, but you must discard it instead of taking it as a trophy. It will remain here until it is killed."
        ]
      },
      "Herald of the Dawn": {
        "name": "Herald of the Dawn",
        "count": 1,
        "file": "herald_of_the_dawn",
        "description": [
          "Herald of the Dawn",
          "When revealed, flip the Time Card to Day.",
          "Good characters may automatically evade the Herald of the Dawn instead of attacking it. It will remain here until it is killed."
        ]
      },
      "Lurking Horror": {
        "name": "Lurking Horror",
        "count": 1,
        "file": "lurking_horror",
        "description": [
          "Lurking Horror",
          "If you attack the Lurking Horror during the Night, you cannot roll a die for your attack roll. It will remain here until it is killed."
        ]
      },
      "Night Stalker": {
        "name": "Night Stalker",
        "count": 1,
        "file": "night_stalker",
        "description": [
          "Night Stalker",
          "If you are defeated during the Night, you do not lose a life. Instead, you must take the Night Stalker as a Follower with the following effect: You lose 1 life at the start of each of your turns. Discard the Night Stalker when Day breaks."
        ]
      },
      "Pit Fiend Shirker": {
        "name": "Pit Fiend Shirker",
        "count": 1,
        "file": "pit_fiend_shirker",
        "description": [
          "Pit Fiend Shirker",
          "You may move the Shirker to any other space in this Region instead of attacking it."
        ]
      },
      "Scarecrow": {
        "name": "Scarecrow",
        "count": 1,
        "file": "scarecrow",
        "description": [
          "Scarecrow",
          "When revealed, place the Scarecrow in a Fields space of your choice in any Region. It will remain there until it is killed."
        ]
      },
      "Swamp Creature": {
        "name": "Swamp Creature",
        "count": 1,
        "file": "swamp_creature",
        "description": [
          "Swamp Creature",
          "A creature from the swamp is menacing this area. It will remain here until it is killed."
        ]
      },
      "Umbral Drake": {
        "name": "Umbral Drake",
        "count": 1,
        "file": "umbral_drake",
        "description": [
          "Umbral Drake",
          "You may evade the Dragon during the Day. It will remain here until it is killed."
        ]
      },
      "Wolfen": {
        "name": "Wolfen",
        "count": 2,
        "file": "wolfen",
        "description": [
          "Wolfen",
          "If you are defeated, in addition to losing 1 life, you must roll 1 die on the Werewolf's chart. It will remain here until it is killed."
        ]
      },
      "Crypt Wyvern": {
        "name": "Crypt Wyvern",
        "count": 1,
        "file": "crypt_wyvern",
        "description": [
          "Crypt Wyvern",
          "It will remain here until it is killed. If you are defeated, in addition to your losing 1 life, the Dragon drops you in the Graveyard."
        ]
      },
      "Duskwood Wraith": {
        "name": "Duskwood Wraith",
        "count": 2,
        "file": "duskwood_wraith",
        "description": [
          "Duskwood Wraith",
          "If it is Night, add 1 to the Wraith's attack score. It will remain here until it is killed."
        ]
      },
      "Eventide Invoker": {
        "name": "Eventide Invoker",
        "count": 1,
        "file": "eventide_invoker",
        "description": [
          "Eventide Invoker",
          "When revealed, flip the Time Card to Night. If you kill the Invoker, flip the Time Card to Day. He will remain here until he is killed."
        ]
      },
      "Harvest Horror": {
        "name": "Harvest Horror",
        "count": 3,
        "file": "harvest_horror",
        "description": [
          "Harvest Horror",
          "A minion of the Pumpkin King has claimed this area for its master. It will remain here until it is killed."
        ]
      },
      "Headless Horseman": {
        "name": "Headless Horseman",
        "count": 1,
        "file": "headless_horseman",
        "description": [
          "Headless Horseman",
          "If you are defeated, the Horseman will move to your space at the end of your movement next turn."
        ]
      },
      "Lunar Witch": {
        "name": "Lunar Witch",
        "count": 2,
        "file": "lunar_witch",
        "description": [
          "Lunar Witch",
          "If you kill the Witch during the Night, you may gain 1 Spell, if your Craft allows. She will remain here until she is killed."
        ]
      },
      "Mummy": {
        "name": "Mummy",
        "count": 1,
        "file": "mummy",
        "description": [
          "Mummy",
          "A rotting Mummy roams this area in search of his tomb. If you are defeated and lose 1 life, your wounds become infected and you must lose 1 additional life. It will remain here until it is killed."
        ]
      },
      "Mummy King": {
        "name": "Mummy King",
        "count": 1,
        "file": "mummy_king",
        "description": [
          "Mummy King",
          "If you kill the Mummy King, you may look through the discard pile and take one Object of your choice. It will remain here until it is killed."
        ]
      },
      "Night Gaunt": {
        "name": "Night Gaunt",
        "count": 1,
        "file": "night_gaunt_bm",
        "description": [
          "Night Gaunt",
          "If you kill the Night Gaunt during the Night, flip the Time Card to Day and gain 1 Craft. It will remain here until it is killed."
        ]
      },
      "Sepulchre Spectre": {
        "name": "Sepulchre Spectre",
        "count": 2,
        "file": "sepulchre_spectre",
        "description": [
          "Sepulchre Spectre",
          "When revealed, move all Spirits in every Region to this space. It will remain here until it is killed."
        ]
      },
      "Vampire Bats": {
        "name": "Vampire Bats",
        "count": 1,
        "file": "vampire_bats",
        "description": [
          "Vampire Bats",
          "A swarm of Vampire Bats swoops down on you. If you defeat them, the attack counts as a stand-off unless your attack score wins by 2 or more points. The swarm will remain here until it is killed."
        ]
      },
      "Vampire Prince": {
        "name": "Vampire Prince",
        "count": 1,
        "file": "vampire_prince",
        "description": [
          "Vampire Prince",
          "An imperious Vampire Prince dominates this area. If you are defeated, in addition to losing 1 life, he will kill 1 of your Followers at random. If you have none, you lose 1 additional life instead. He will remain here until he is killed."
        ]
      },
      "Zombie Dragon": {
        "name": "Zombie Dragon",
        "count": 1,
        "file": "zombie_dragon",
        "description": [
          "Zombie Dragon",
          "A dreadful Zombie Dragon is terrorising this area. It will remain here until it is killed."
        ]
      },
      "Cairn Caretaker": {
        "name": "Cairn Caretaker",
        "count": 1,
        "file": "cairn_caretaker",
        "description": [
          "The Caretaker will remain here for the rest of the game. You may discard any of your trophies to gain 1 Strength or Craft for each."
        ]
      },
      "Cauldron Crone": {
        "name": "Cauldron Crone",
        "count": 1,
        "file": "cauldron_crone",
        "description": [
          "The Cauldron Crone will remain here for the rest of the game. Roll 1 die:",
          "1) Become a Toad for 3 turns",
          "2) Lose 2 lives         3) Lose 1 life",
          "4) Heal 1 life       5) Heal 2 lives",
          "6) Heal up to your life value"
        ]
      },
      "Corpse Collector": {
        "name": "Corpse Collector",
        "count": 1,
        "file": "corpse_collector",
        "description": [
          "When revealed, draw 8 Adventure Cards and place any Enemies on this card as trophies; then discard the rest. Once per visit, you may take one trophy of your choice from this card. When all trophies have been taken, discard this card. The trophies do not count towards the number of cards on this space."
        ]
      },
      "Dawn Bringer": {
        "name": "Dawn Bringer",
        "count": 1,
        "file": "dawn_bringer",
        "description": [
          "Gain 2 fate; then all other characters in this Region may gain 1 fate.",
          "If it is Night, flip the Time Card to Day; then discard this card."
        ]
      },
      "Deranged Alchemist": {
        "name": "Deranged Alchemist",
        "count": 1,
        "file": "deranged_alchemist",
        "description": [
          "Roll 1 die:",
          "1) Become a Toad for 3 turns",
          "2) Lose 1 Craft",
          "3) Lose 1 Strength",
          "4) Gain 1 Strength",
          "5) Gain 1 Craft",
          "6) You may change any or all Strength points you have into Craft points, or vice versa; then discard this card"
        ]
      },
      "Fallen Adventurer": {
        "name": "Fallen Adventurer",
        "count": 1,
        "file": "fallen_adventurer",
        "description": [
          "If it is Night, the corpse springs to life and attacks you with Strength 4.",
          "If it is Day, you may take one Object of your choice from the Purchase deck for free; then discard this card."
        ]
      },
      "Ghostwood Ent": {
        "name": "Ghostwood Ent",
        "count": 1,
        "file": "ghostwood_ent",
        "description": [
          "You may discard one of your trophies to gain your full complement of Spells, according to your current Craft. Once a character chooses to do so, discard this card."
        ]
      },
      "Lantern Sprite": {
        "name": "Lantern Sprite",
        "count": 1,
        "file": "lantern_sprite",
        "description": [
          "The Lantern Sprite will remain here for the rest of the game. Take a secret look at the top card on the Adventure deck and place it facedown in front of any character of your choice. At the start of that character's next turn, they must place the card on top of the Adventure deck."
        ]
      },
      "Mischievous Devil": {
        "name": "Mischievous Devil",
        "count": 1,
        "file": "mischievous_devil",
        "description": [
          "Roll 1 die:",
          "1-2) You must give one of your Objects to another character of your choice",
          "3-4) You must ditch one of your Objects at random",
          "5-6) Take one Object of your choice from any character, then discard this card"
        ]
      },
      "Night Carriage": {
        "name": "Night Carriage",
        "count": 1,
        "file": "night_carriage",
        "description": [
          "If it is Day, roll 1 die and move the Carriage that many spaces clockwise.",
          "If it is Night, immediately move to any other space in this Region; then discard this card."
        ]
      },
      "Peasant Mob": {
        "name": "Peasant Mob",
        "count": 1,
        "file": "peasant_mob",
        "description": [
          "If you are a Lycanthrope, you are killed!",
          "If you are not a Lycanthrope, you may move the Peasant Mob to any space with an Adventure Card; then discard all other Adventure Cards on that space."
        ]
      },
      "The Phantom": {
        "name": "The Phantom",
        "count": 1,
        "file": "the_phantom",
        "description": [
          "When revealed, draw 8 Adventure Cards and place any Followers on this card; then discard the rest. Once per visit, you may take one Follower of your choice from this card. When all Followers have been taken, discard this card. The Followers do not count towards the number of cards on this space."
        ]
      },
      "Black Cat": {
        "name": "Black Cat",
        "count": 1,
        "file": "black_cat",
        "description": [
          "You must take the Cat as a Follower and discard all of your fate. You cannot replenish or gain fate. You may discard the Cat if you roll a 1 during your turn."
        ]
      },
      "Champion of Light": {
        "name": "Champion of Light",
        "count": 1,
        "file": "champion_of_light",
        "description": [
          "No Evil character may have the Champion of Light.",
          "If it is Day, you may roll an additional die in battle and psychic combat and add the result to your attack score.",
          "If it is Night, you may discard the Champion to flip the Time Card to Day."
        ]
      },
      "Disciple of Darkness": {
        "name": "Disciple of Darkness",
        "count": 1,
        "file": "disciple_of_darkness",
        "description": [
          "No good character may have the Disciple of Darkness.",
          "During the Night, you may always have at least 1 Spell if your Craft allows (gain a Spell each time you cast your last Spell).",
          "If it is Day, you may discard the Disciple to flip the Time Card to Night."
        ]
      },
      "Fortune Teller": {
        "name": "Fortune Teller",
        "count": 1,
        "file": "fortune_teller",
        "description": [
          "At the start of your turn, you may take a secret look at the top card on the Adventure deck."
        ]
      },
      "Keeper of the Vigil": {
        "name": "Keeper of the Vigil",
        "count": 2,
        "file": "keeper_of_the_vigil",
        "description": [
          "When revealed, flip the Time Card to Day.",
          "After you draw an Adventure Card, you may discard it and draw another Adventure Card to replace it, which you must encounter. The Keeper of the Vigil then departs to the discard pile."
        ]
      },
      "Lost Soul": {
        "name": "Lost Soul",
        "count": 1,
        "file": "lost_soul",
        "description": [
          "After you visit the Chapel or Graveyard, you may discard the Lost Soul to gain 1 Strength, Craft, life, fate, or Spell, if your Craft allows."
        ]
      },
      "Red Riding Hood": {
        "name": "Red Riding Hood",
        "count": 1,
        "file": "red_riding_hood",
        "description": [
          "After you have completed your move, you must move the closest Enemy in your Region to your space. If two or more Enemies are an equal distance away, you choose which Enemy is moved."
        ]
      },
      "The Bride": {
        "name": "The Bride",
        "count": 1,
        "file": "the_bride",
        "description": [
          "The Bride will become your Follower if you discard one of your trophies.",
          "Whenever you attack another character, you may choose to make the attack psychic combat. You may not do this when you are attacked by another character."
        ]
      },
      "Torchbearer": {
        "name": "Torchbearer",
        "count": 1,
        "file": "torchbearer",
        "description": [
          "When revealed, flip the Time Card to Day.",
          "If you are defeated by a creature, you suffer all the penalties but you may immediately attack the creature again instead of ending your turn. You may only do this once per turn."
        ]
      },
      "Witch Finder": {
        "name": "Witch Finder",
        "count": 1,
        "file": "witch_finder",
        "description": [
          "After you encounter a space with instructions to draw one or more Adventure Cards and have drawn the required number of cards, you may draw one additional card if there are no Enemies on your space."
        ]
      },
      "Wolf Slayer": {
        "name": "Wolf Slayer",
        "count": 1,
        "file": "wolf_slayer",
        "description": [
          "No Lycanthrope character may have the Wolf Slayer.",
          "If it is Day, add 2 to your Strength.",
          "If it is Night, add 2 to your Craft."
        ]
      },
      "Doomsword": {
        "name": "Doomsword",
        "count": 1,
        "file": "doomsword",
        "description": [
          "Add 3 to your Strength during battle. If you roll a 1 for your attack roll, you are automatically defeated regardless of your attack score."
        ]
      },
      "Ghostwood Wand": {
        "name": "Ghostwood Wand",
        "count": 1,
        "file": "ghostwood_wand",
        "description": [
          "Whenever a Spirit is placed in the discard pile, you may gain 1 Spell, if your Craft allows."
        ]
      },
      "Hammer of Light": {
        "name": "Hammer of Light",
        "count": 1,
        "file": "hammer_of_light",
        "description": [
          "Add 1 to your Strength during battle.",
          "If it is Day, add 3 to your Strength during battle instead."
        ]
      },
      "Holy Water": {
        "name": "Holy Water",
        "count": 1,
        "file": "holy_water",
        "description": [
          "No evil character may have the Holy Water.",
          "You do not lose a life in the Desert.",
          "You may discard the Holy Water to discard any Enemies you are about to engage in psychic combat."
        ]
      },
      "Hungering Artefact": {
        "name": "Hungering Artefact",
        "count": 1,
        "file": "hungering_artefact",
        "description": [
          "At the end of your turn, you must discard all Adventure Cards on your space."
        ]
      },
      "Living Doll": {
        "name": "Living Doll",
        "count": 1,
        "file": "living_doll",
        "description": [
          "You must take the Doll and ditch all of your other Objects. You may have no other Objects until you visit the Alchemist in the City and discard this Object to gain a gold."
        ]
      },
      "Pharaoh's Crown": {
        "name": "Pharaoh's Crown",
        "count": 1,
        "file": "pharaohs_crown",
        "description": [
          "If you engage a creature in battle or psychic combat, you may force the creature to reroll its attack roll. You may only do this once per turn."
        ]
      },
      "Self-Portrait": {
        "name": "Self-Portrait",
        "count": 1,
        "file": "self_portrait_bm",
        "description": [
          "When revealed, place 4 lives on this card. Whenever you lose a life, you may discard 1 life from the Portrait instead. Discard this card when all its lives have been discarded."
        ]
      },
      "Shadow Dagger": {
        "name": "Shadow Dagger",
        "count": 1,
        "file": "shadow_dagger",
        "description": [
          "Add 1 to your Craft during psychic combat.",
          "If it is Night, add 3 to your Craft during psychic combat instead."
        ]
      },
      "Sun Shield": {
        "name": "Sun Shield",
        "count": 1,
        "file": "sun_shield",
        "description": [
          "If you are defeated in battle or psychic combat, roll 1 die (if it is Day, you may add up to 3 to the score):",
          "1-5) You lose the attack as normal",
          "6) You do not lose the attack; it is considered a stand-off instead"
        ]
      },
      "Syphoning Sceptre": {
        "name": "Syphoning Sceptre",
        "count": 1,
        "file": "syphoning_sceptre",
        "description": [
          "If you defeat a character in battle or psychic combat, you may take one of their Strength or Craft points and add it to your own instead of your normal reward."
        ]
      },
      "Witch's Broom": {
        "name": "Witch's Broom",
        "count": 1,
        "file": "witchs_broom",
        "description": [
          "Whenever you move during the Night, you may move any number of spaces up to your die roll instead of moving the full distance as indicated by the die roll."
        ]
      },
      "Book of the Dead": {
        "name": "Book of the Dead",
        "count": 1,
        "file": "book_of_the_dead",
        "description": [
          "Whenever you kill an Enemy in psychic combat, you may place it on this card instead of keeping it as a trophy. You may discard any Enemies on this card to add their Craft to yours during a psychic combat of your choice."
        ]
      },
      "Nightshroud": {
        "name": "Nightshroud",
        "count": 1,
        "file": "nightshroud",
        "description": [
          "If it is Night, you may evade any creatures or characters."
        ]
      },
      "Prayer Book": {
        "name": "Prayer Book",
        "count": 1,
        "file": "prayer_book",
        "description": [
          "After rolling the die when praying, you may add up to 3 to the score."
        ]
      },
      "Tricks and Treats": {
        "name": "Tricks and Treats",
        "count": 2,
        "file": "tricks_and_treats",
        "description": [
          "If you land on another character, you may take one Object of your choice from them and then give them this card. This counts as your encounter for the turn."
        ]
      },
      "Wolfsbane": {
        "name": "Wolfsbane",
        "count": 2,
        "file": "wolfsbane",
        "description": [
          "After rolling the die for the Werewolf's chart, you may add up to 2 to the score.",
          "If you are a Lycanthrope, you may discard the Wolfsbane to discard your Lycanthrope Card."
        ]
      },
      "Wooden Stake": {
        "name": "Wooden Stake",
        "count": 2,
        "file": "wooden_stake",
        "description": [
          "You may discard the Stake when you are about to engage a creature in battle or psychic combat to automatically roll a 6 for your attack roll."
        ]
      },
      "City of Shadows": {
        "name": "City of Shadows",
        "count": 1,
        "file": "city_of_shadows",
        "description": [
          "If it is Day, roll 1 die; if it is Night, roll 2 dice:",
          "1-2) Attacked by a Vampire Prince with Craft 9",
          "3-5) Roll 1 die on the Werewolf's chart",
          "6-8) Gain 1 Spell",
          "9-11) Gain 1 Craft",
          "12) Gain a Talisman; then discard this card"
        ]
      },
      "Gypsy Caravan": {
        "name": "Gypsy Caravan",
        "count": 1,
        "file": "gypsy_caravan",
        "description": [
          "Once per visit, you may pay 3 gold to do the following:",
          "If it is Day, gain 1 Strength. If it is Night, gain 1 Craft. Then roll 1 die and move the Caravan that many spaces clockwise."
        ]
      },
      "Laboratory": {
        "name": "Laboratory",
        "count": 1,
        "file": "laboratory",
        "description": [
          "You may reanimate one of your trophies (place this card on the Enemy). The reanimated Enemy becomes your Follower and adds its Strength or Craft to yours during a battle or psychic combat of your choice; then discard this card and the reanimated Enemy."
        ]
      },
      "Raging Volcano": {
        "name": "Raging Volcano",
        "count": 1,
        "file": "raging_volcano",
        "description": [
          "Roll 1 die:",
          "1-2) Lose 1 life",
          "3-4) Discard all other Adventure Cards in this Region",
          "5-6) Discard all Adventure Cards (including this card) in every Region"
        ]
      },
      "Sacred Ground": {
        "name": "Sacred Ground",
        "count": 1,
        "file": "sacred_ground",
        "description": [
          "The Sacred Ground will remain here for the rest of the game.",
          "If it is Day, roll 1 die to pray with the same results as at the Chapel.",
          "If it is Night, roll 1 die to pray with the same results as at the Graveyard."
        ]
      },
      "Treasure Trove": {
        "name": "Treasure Trove",
        "count": 2,
        "file": "treasure_trove",
        "description": [
          "When revealed, roll 2 dice and place that much gold on this card. Once per visit, you may take up to 2 gold from this card. When all gold has been taken, discard this card."
        ]
      },
      "Wall of Fire": {
        "name": "Wall of Fire",
        "count": 1,
        "file": "wall_of_fire",
        "description": [
          "Any character who enters this space during their move must end their movement.",
          "If you do not have a Talisman, lose 1 life. If you have a Talisman, gain 1 Strength and 1 Craft and then discard this card."
        ]
      }
    }
  },
  "The Cataclysm": {
    "SPELLS": {
      "Astral Construction": {
        "name": "Astral Construction",
        "count": 1,
        "file": "arcane_construction",
        "description": [
          "Cast on a space in your Region where a character has just ended their move. Place a Settlement, Outpost, Highway, Monastery, or Bonefield Terrain card on that space."
        ]
      },
      "Astral Journey": {
        "name": "Astral Journey",
        "count": 1,
        "file": "astral_journey",
        "description": [
          "Cast on yourself at the start of your turn. Your turn immediately ends and you gain 1 Strength and 1 Craft."
        ]
      },
      "Blink": {
        "name": "Blink",
        "count": 2,
        "file": "blink_spell",
        "description": [
          "Cast after a character completes their move, on any character. Teleport that character 1 space in any direction."
        ]
      },
      "Curse of Rust": {
        "name": "Curse of Rust",
        "count": 1,
        "file": "curse_of_rust",
        "description": [
          "Cast after you have completed your move, on a character in your space. That character rolls 1 die for each of their Objects. On a 1, 2, or 3, that Object is discarded."
        ]
      },
      "Death Pact": {
        "name": "Death Pact",
        "count": 1,
        "file": "death_pact",
        "description": [
          "Cast on yourself when you would lose any amount of life. Choose another character to lose that amount of life instead. Then you lose 1 Strength and 1 Craft. "
        ]
      },
      "Miser's Grasp": {
        "name": "Miser's Grasp",
        "count": 1,
        "file": "misers_grasp",
        "description": [
          "Cast on another character when they attempt to take an Object or Follower from you. Cancel that effect and take 1 Object or Follower from that character."
        ]
      },
      "Mutation": {
        "name": "Mutation",
        "count": 2,
        "file": "mutation",
        "description": [
          "Cast on yourself at any time. Add 5 to your Strength or Craft until the end of the turn."
        ]
      },
      "Reclamation": {
        "name": "Reclamation",
        "count": 1,
        "file": "reclamation",
        "description": [
          "Cast on any character when they are about to draw Adventure cards. Take 1 card from the Adventure discard pile and place it on top of the Adventure deck."
        ]
      }
    },
    "ADVENTURE": {
      "Apocalypse Storm": {
        "name": "Apocalypse Storm",
        "count": 1,
        "file": "apocalypse_storm",
        "description": [
          "A remnant of the apocalypse still threatens the world. Discard all faceup Adventure cards, Terrain cards, and Denizens in each Region with a character (not the Inner Region). "
        ]
      },
      "Chance Meeting": {
        "name": "Chance Meeting",
        "count": 2,
        "file": "chance_meeting",
        "description": [
          "You meet a familiar face upon the road. Draw one Denizen and visit it. Afterwards, move that Denizen to the Tavern, Village, Graveyard, Chapel, City, or Castle. "
        ]
      },
      "Dead Magic": {
        "name": "Dead Magic",
        "count": 2,
        "file": "dead_magic_cata",
        "description": [
          "The Cataclysm rent the weave of magic long ago and it is still not fully repaired. For the next three rounds, characters cannot cast Spells or use Magic Objects."
        ]
      },
      "Divine Blessings": {
        "name": "Divine Blessings",
        "count": 1,
        "file": "divine_blessings",
        "description": [
          "Holy power radiates from the realms above, granting boons to the worthy. Gain 1 Strength or 1 Craft. Then choose another character to gain 1 Strength and 1 Craft. "
        ]
      },
      "Market Day": {
        "name": "Market Day",
        "count": 1,
        "file": "market_day_cataclysm",
        "description": [
          "It's Market Day across the land! Clockwise, starting with yourself, all characters may buy available Objects  at these prices:",
          "Scroll (1G)",
          "Haversack (1G)",
          "Shovel (2G)",
          "Crystal Sceptre (3G)",
          "Healer's Kit (1G)",
          "Whetstone (2G)",
          "Map (2G)"
        ]
      },
      "Rebirth": {
        "name": "Rebirth",
        "count": 1,
        "file": "rebirth",
        "description": [
          "Mystic light shines down from the heavens, restoring the world where it touches. Each character heals up to their life value and replenishes fate up to their fate value."
        ]
      },
      "Rebuilding": {
        "name": "Rebuilding",
        "count": 1,
        "file": "rebuilding",
        "description": [
          "Starting with yourself and continuing clockwise, each character may pay 1 gold to place a Settlement, Monastery, Bonefield, Outpost, or Highway Terrain card on a space in their Region."
        ]
      },
      "Scavenging": {
        "name": "Scavenging",
        "count": 2,
        "file": "scavenging",
        "description": [
          "Discard the top 5 cards of any Adventure deck. Then take the top Object from the discard pile of that deck."
        ]
      },
      "Void Demon": {
        "name": "Void Demon",
        "count": 1,
        "file": "void_demon",
        "description": [
          "Void Demon",
          "If your Strength is lower than your Craft, you must fight in battle. Otherwise, you must fight in psychic combat. If you are defeated, lose 1 Strength or 1 Craft and place the counter on this card. If you defeat the Void Demon, you may gain all counters on this card instead of taking it as a trophy."
        ]
      },
      "Blightwood Slaver": {
        "name": "Blightwood Slaver",
        "count": 2,
        "file": "blightwood_slaver",
        "description": [
          "Blightwood Slaver",
          "When drawn, place the Slaver on the Forest. Then place either 1 of your Followers or 1 faceup Stranger in any Region on the Forest."
        ]
      },
      "Blightwood Terror": {
        "name": "Blightwood Terror",
        "count": 1,
        "file": "blightwood_terror",
        "description": [
          "Blightwood Terror",
          "This horrible mutant rolls 3 dice and adds them together for its attack roll. If you defeat the Terror, gain 2 Strength instead of taking it as a trophy."
        ]
      },
      "Ironscale Dragon": {
        "name": "Ironscale Dragon",
        "count": 1,
        "file": "ironscale_dragon",
        "description": [
          "Ironscale Dragon",
          "This Dragon has survived the catacylsm and will not fall so easily to your sword. If you defeat the Dragon, roll 1 die for it. If you roll a 4, 5, or 6, the attack counts as a stand-off. If you roll a 1, 2, or 3, you may take an Armour from the Purchase deck."
        ]
      },
      "Junk Golem": {
        "name": "Junk Golem",
        "count": 1,
        "file": "junk_golem",
        "description": [
          "Junk Golem",
          "The Junk Golem's Strength is equal to the number of Objects held by all characters. When you defeat the Golem, take 1 Object of your choice from another character instead of taking the Golem as a trophy."
        ]
      },
      "Queen of Ashes": {
        "name": "Queen of Ashes",
        "count": 1,
        "file": "queen_of_ashes",
        "description": [
          "Queen of Ashes",
          "When drawn, place the Queen of Ashes on the Oasis. Then each character must place 1 of their Objects on the Oasis. The Queen adds 1 to her attack score for each Object on her space. If you are defeated by the Queen of Ashes, you must ditch 1 Object."
        ]
      },
      "Rusthill Marauders": {
        "name": "Rusthill Marauders",
        "count": 2,
        "file": "rusthill_marauders",
        "description": [
          "Rusthill Marauders",
          "When you draw the Rusthill Marauders, discard one faceup Place in any Region."
        ]
      },
      "Undying Horde": {
        "name": "Undying Horde",
        "count": 1,
        "file": "undying_horde",
        "description": [
          "Undying Horde",
          "When the Undying Horde is drawn, each character must place all of their Strength trophies on this space."
        ]
      },
      "Abomination Wraith": {
        "name": "Abomination Wraith",
        "count": 1,
        "file": "abomination_wraith",
        "description": [
          "Abomination Wraith",
          "The combined souls of a thousand dead, eager to add more to their multitude. The Abomination Wraith rolls 3 dice and adds them together for its attack roll. If you defeat the Wraith, gain 2 Craft instead of taking it as a trophy."
        ]
      },
      "Aeon Demon": {
        "name": "Aeon Demon",
        "count": 1,
        "file": "aeon_demon",
        "description": [
          "Aeon Demon",
          "It exists between time, altering events to suit its infernal will. If you defeat the Aeon Demon, you may choose 1 Event in the discard pile and encounter it."
        ]
      },
      "Ancient Lich": {
        "name": "Ancient Lich",
        "count": 1,
        "file": "ancient_lich",
        "description": [
          "Ancient Lich",
          "When the Lich is drawn, it corrupts the tapestry of magic. Each character must discard all of their Spells. If a character discards 1 Spell, they lose 1 life. If a character discards 2 Spells, they lose 1 Craft. If a character discards 3 Spells, they are turned into a slimy little Toad for 3 turns."
        ]
      },
      "Ashfield Looters": {
        "name": "Ashfield Looters",
        "count": 2,
        "file": "ashfield_looters",
        "description": [
          "Ashfield Looters",
          "When drawn, place the Looters on the Oasis. Then place 1 of your Objects on the Oasis."
        ]
      },
      "Blightwood Rabble": {
        "name": "Blightwood Rabble",
        "count": 1,
        "file": "blightwood_rabble",
        "description": [
          "Blightwood Rabble",
          "When drawn, place the Rabble on the Forest. Then each character must place 1 of their Followers on the Forest. The Rabble adds 1 to its attack score for each Follower on its space. If you are defeated by the Rabble, you must ditch 1 Follower."
        ]
      },
      "Mongrel Sprite": {
        "name": "Mongrel Sprite",
        "count": 1,
        "file": "mongrel_sprite",
        "description": [
          "Mongrel Sprite",
          "While many fae fled to other worlds to escape the apocalypse, a few remained behind and have become pathetic shadows of their former selves. When you encounter the Sprite, you may pay 1 gold to evade it. If you do, gain 1 fate."
        ]
      },
      "Astral Spirit": {
        "name": "Astral Spirit",
        "count": 1,
        "file": "astral_spirit",
        "description": [
          "The echo of one long dead, given new life. When you encounter the Astral Spirit, you may choose a Stranger in any discard pile and place it on this space. If you do, discard the Astral Spirit."
        ]
      },
      "Fugitive Demon": {
        "name": "Fugitive Demon",
        "count": 1,
        "file": "fugitive_demon",
        "description": [
          "You encounter one of the fallen, who has been hiding from the forces of heaven since the end of the world. You may either pay 1 fate to gain 1 life, or pay 1 life to gain 1 fate."
        ]
      },
      "Junk Dealer": {
        "name": "Junk Dealer",
        "count": 1,
        "file": "junk_dealer",
        "description": [
          "When you visit the Junk Dealer, you may discard 1 of your Objects at random to take 1 Object of your choice from the Purchase deck. The Junk Dealer then moves 4 spaces clockwise."
        ]
      },
      "Order of Josephine": {
        "name": "Order of Josephine",
        "count": 1,
        "file": "order_of_josephine",
        "description": [
          "They venerate a long-lost saint and have embraced her mission of restoration. You may heal up to 2 life. If you do, another character of your choice gains 1 life."
        ]
      },
      "Brakwater Traders": {
        "name": "Brakwater Traders",
        "count": 1,
        "file": "brakwater_traders",
        "description": [
          "You may buy available Objects at these prices before the Traders move 4 spaces clockwise:",
          "Water Bottle (1G)",
          "Healer's Kit (2G)",
          "Haversack (2G)",
          "Psychic Crystal (2G)",
          "Map (3G)",
          "Shovel (3G)",
          "Personal Journal (3G)",
          "Crystal Sceptre (3G)"
        ]
      },
      "Barrowtown Hunter": {
        "name": "Barrowtown Hunter",
        "count": 1,
        "file": "barrowtown_hunter",
        "description": [
          "The residents of Barrowtown have sworn to cleanse the world of evil. Instead of rolling for movement, you may move to any space in your Region with a faceup Enemy."
        ]
      },
      "Brakwater Diver": {
        "name": "Brakwater Diver",
        "count": 1,
        "file": "brakwater_diver",
        "description": [
          "When you cross the Storm River, you may roll 1 die. On a 1, discard the Brakwater Diver. On a 5 or 6, you may take the top Object in the Adventure discard pile."
        ]
      },
      "Deadlands Survivor": {
        "name": "Deadlands Survivor",
        "count": 1,
        "file": "deadlands_survivor",
        "description": [
          "You do not lose a life in the Desert.",
          "You may add 1 to each of your die rolls while in the Crags or Forest."
        ]
      },
      "Havenville Recruiter": {
        "name": "Havenville Recruiter",
        "count": 1,
        "file": "havenville_recruiter",
        "description": [
          "All are welcome in Havenville. At the start of your turn, if the top card of the Adventure discard pile is a Follower, you may take it. If you do, give 1 of your Followers to another character."
        ]
      },
      "Rotsnout Dog": {
        "name": "Rotsnout Dog",
        "count": 1,
        "file": "rotsnout_dog",
        "description": [
          "At the start of your turn, if the top card of the Adventure discard pile is an Enemy, you may take it as a trophy. If you do, discard 1 of your trophies."
        ]
      },
      "Broken Relic": {
        "name": "Broken Relic",
        "count": 1,
        "file": "broken_relic",
        "description": [
          "You sense a latent power within. When a character draws an Object from the Adventure deck, you may discard the Relic to take that Object."
        ]
      },
      "Personal Invitation": {
        "name": "Personal Invitation",
        "count": 1,
        "file": "personal_invitation",
        "description": [
          "When you draw Denizen cards, you may discard one card of your choice and draw another card to replace it, which you must keep."
        ]
      },
      "Ashfield Hideout": {
        "name": "Ashfield Hideout",
        "count": 1,
        "file": "ashfield_hideout",
        "description": [
          "Roll 1 die. If you roll above your Strength, gain 1 Strength and discard 1 Object. If you roll equal to or less than your Strength, gain 2 gold and discard this card. "
        ]
      },
      "Astral Rift": {
        "name": "Astral Rift",
        "count": 1,
        "file": "astral_rift",
        "description": [
          "Creative energies pour through the Rift, rebuilding what once was. When you encounter the Astral Rift, you may choose 1 Place in any discard pile and add it to this space. If you do, discard this card."
        ]
      },
      "Blightwood Shrine": {
        "name": "Blightwood Shrine",
        "count": 1,
        "file": "blightwood_shrine",
        "description": [
          "A fetid den of mutation. Roll 1 die. If you roll above your Craft, gain 1 Craft and discard 1 Follower. If you roll equal to or less than your Craft, gain 1 Spell and discard this card. "
        ]
      },
      "Havenville": {
        "name": "Havenville",
        "count": 1,
        "file": "havenville",
        "description": [
          "When you draw this card, place a Settlement Terrain card on your space. Then place all Followers in the Adventure discard pile on this card. When a character visits Havenville, they may take 1 Follower on this card. Once all Followers have been taken, Havenville is abandoned to the discard pile."
        ]
      },
      "Trashtown": {
        "name": "Trashtown",
        "count": 1,
        "file": "trashtown",
        "description": [
          "When you draw this card, place a Settlement Terrain card on your space. Then place all Objects in the Adventure discard pile on this card. When a character visits Trashtown, they may take 1 Object on this card. Once all Objects have been taken, Trashtown crumbles away to the discard pile."
        ]
      },
      "Meeting Place": {
        "name": "Meeting Place",
        "count": 1,
        "file": "meeting_place",
        "description": [
          "Draw 4 Denizens and place them on this card when you draw it. When you visit the Meeting Place, visit 1 Denizen on it. When no Denizens remain on this card, discard it. "
        ]
      }
    },
    "TALISMAN": {
      "False Talisman": {
        "name": "False Talisman",
        "count": 1,
        "file": "false_talisman",
        "description": [
          "The Talisman is cursed! You must take it. You cannot enter the Valley of Fire until you gain another Talisman. You may then discard the False Talisman."
        ]
      },
      "Spellbound Talisman": {
        "name": "Spellbound Talisman",
        "count": 1,
        "file": "spellbound_talisman",
        "description": [
          "You may only enter the Valley of Fire if you have one of the fabled Talismans.",
          "Spells will not affect you while you are in the Inner Region, other than the Command Spell."
        ]
      },
      "Talisman of Censure": {
        "name": "Talisman of Censure",
        "count": 1,
        "file": "talisman_of_censure",
        "description": [
          "You may only enter the Valley of Fire if you have one of the fabled Talismans.",
          "Other characters must roll 2 additional dice when passing through the Portal of Power."
        ]
      },
      "Talisman of Power": {
        "name": "Talisman of Power",
        "count": 1,
        "file": "talisman_of_power",
        "description": [
          "You may only enter the Valley of Fire if you have one of the fabled Talismans.",
          "Add 2 to your Strength while in the Middle or Inner Region."
        ]
      },
      "Talisman of Protection": {
        "name": "Talisman of Protection",
        "count": 1,
        "file": "talisman_of_protection",
        "description": [
          "You may only enter the Valley of Fire if you have one of the fabled Talismans.",
          "You cannot lose more than 1 life per turn while in the Inner Region."
        ]
      },
      "Talisman of Wisdom": {
        "name": "Talisman of Wisdom",
        "count": 1,
        "file": "talisman_of_wisdom",
        "description": [
          "You may only enter the Valley of Fire if you have one of the fabled Talismans.",
          "Add 2 to your Craft while in the Middle or Inner Region."
        ]
      }
    },
    "WARLOCK": {
      "Champion of People": {
        "name": "Champion of People",
        "count": 1,
        "description": [
          "When you visit a Stranger or encounter a Denizen, put 1 fate token on this card. You may complete this quest at the end of your turn if you have 2 or more fate tokens on it.",
          "\"If you are to be a true hero, you must win the hearts of those you claim to protect. Go out and meet with them, talk with them, and show that you are worthy to be their champion.\""
        ]
      },
      "Face Thy Rivals": {
        "name": "Face Thy Rivals",
        "count": 1,
        "description": [
          "When you attack another character, place 1 fate token on this card. You may complete this quest at the end of your turn if you have 2 or more fate tokens on it.",
          "\"Only by challenging your greatest rivals can you prove yourself worthy of the treasures I hold in trust.\""
        ]
      },
      "Hunt Them Down": {
        "name": "Hunt Them Down",
        "count": 1,
        "description": [
          "When you attack an Enemy in battle or psychic combat, put 1 fate token on this card. You may complete this quest at the end of your turn if you have 2 or more fate tokens on it.",
          "\"Horrible monsters stalk the land. Seek them out and engage them bravely. Then I will give you what you long for.\""
        ]
      },
      "Travel the World": {
        "name": "Travel the World",
        "count": 1,
        "description": [
          "When you visit a Place, put 1 fate token on this card. You may complete this quest at the end of your turn if you have 2 or more fate tokens on it.",
          "\"How can I give my prize to someone who has seen so little of the world? Go, travel, and return to me with a tale or two.\""
        ]
      },
      "Unveil Treasures": {
        "name": "Unveil Treasures",
        "count": 1,
        "description": [
          "When you draw an Object, put 1 fate token on this card. You may complete this quest at the end of your turn if you have 2 or more fate tokens on it.",
          "\"Somewhere under the dust and mud of many ages lays what you seek. Go out and dig until you see the glitter of gold.\""
        ]
      },
      "Witness the Strange": {
        "name": "Witness the Strange",
        "count": 1,
        "description": [
          "When you encounter an Event, put 1 fate token on this card. You may complete this quest at the end of your turn if you have 2 or more fate tokens on it.",
          "\"You are young and inexperienced in the ways of the world. Return to me once you have seen true wonders and marvels.\""
        ]
      }
    },
    "TERRAIN": {
      "Bonefield": {
        "name": "Bonefield",
        "count": 1,
        "file": "terrain_bonefield",
        "description": [
          "BASED ON ALIGNMENT",
          "If you are evil, gain 1 life.",
          "If you are good, lose 1 life.",
          "If you are neutral, you may pay 1 gold to gain 1 life."
        ]
      },
      "Highway": {
        "name": "Highway",
        "count": 4,
        "file": "terrain_highway",
        "description": [
          "DRAW 1 CARD",
          "Do not draw a card if there is already one in this space. When rolling for movement while on this space, you may add or subtract 1 from your result (to a minimum of 1)."
        ]
      },
      "Monastery": {
        "name": "Monastery",
        "count": 1,
        "file": "terrain_monastery",
        "description": [
          "BASED ON ALIGNMENT",
          "If you are good, gain 1 fate.",
          "If you are evil, lose 1 life.",
          "If you are neutral, you may pay 1 gold to gain 1 fate."
        ]
      },
      "Outpost": {
        "name": "Outpost",
        "count": 2,
        "file": "terrain_outpost",
        "description": [
          "DRAW 2 CARDS",
          "If there are any cards already in this space, draw only enough to take the total to two cards.",
          "If you fight any creatures here, add 2 to your attack roll."
        ]
      },
      "Settlement": {
        "name": "Settlement",
        "count": 2,
        "file": "terrain_settlement",
        "description": [
          "VISIT THE SETTLEMENT",
          "Draw one Denizen and add it to this space.",
          "Then encounter one Denizen on this space."
        ]
      }
    },
    "DENIZEN": {
      "Alchemist": {
        "name": "Alchemist",
        "count": 1,
        "file": "denizen_alchemist",
        "description": [
          "Any",
          "You may discard any number of your Objects and gain 1 gold for each Object discarded.",
          "If the Alchemist would be discarded, shuffle him back into the Denizen deck instead."
        ]
      },
      "Apprentice Healer": {
        "name": "Apprentice Healer",
        "count": 1,
        "file": "denizen_apprentice_healer",
        "description": [
          "Chapel - Village",
          "1) The Healer botches the job. Lose 1 life.",
          "2) The Healer says that your wounds are far beyond her powers.",
          "3-5) Heal 1 life.",
          "6) While her back is turned, you may steal her supplies. If you do, take a Healer's Kit from the Purchase deck and discard this card.",
          "After visiting the Apprentice Healer, you may pay 1 gold to visit her again."
        ]
      },
      "Auctioneer": {
        "name": "Auctioneer",
        "count": 1,
        "file": "denizen_auctioneer",
        "description": [
          "City",
          "Each character secretly spends any amount of gold, then reveals the number of spent gold. All characters who spent the most gold may take 1 card of their choice from the Purchase deck. If no character spent any gold, you may take 1 card of your choice from the Purchase deck, then discard this card."
        ]
      },
      "Barmaid": {
        "name": "Barmaid",
        "count": 1,
        "file": "denizen_barmaid",
        "description": [
          "City - Tavern - Village",
          "1) Get drunk and collapse in a corner. Miss 1 turn.",
          "2) Tip her. Lose 1 gold.",
          "3) Have a good time!",
          "4-5) Hearty meal. Gain 1 life.",
          "6) Strange brews. Gain 1 Strength or 1 Craft.",
          "After visiting the Barmaid, you may spend 1 gold to visit her again."
        ]
      },
      "Bard": {
        "name": "Bard",
        "count": 1,
        "file": "denizen_bard",
        "description": [
          "City - Tavern - Village",
          "1) He is quite a charming fellow. Ditch 1 of your Followers at random.",
          "2) His music is horrid. Move 1 space in any direction.",
          "3) What a wonderful song!",
          "4-5) His music is inspiring. Each character may accept a Warlock Quest.",
          "6) He reveals himself as a demigod and grants you a Talisman. Take 1 Talisman of your choice from the Talisman deck, then discard this card."
        ]
      },
      "Beggar": {
        "name": "Beggar",
        "count": 1,
        "file": "denizen_beggar",
        "description": [
          "City - Tavern - Village",
          "If you have any gold, lose 1 gold. If you have no gold, gain 1 gold."
        ]
      },
      "Black Knight": {
        "name": "Black Knight",
        "count": 1,
        "file": "denizen_black_knight",
        "description": [
          "Castle",
          "You may pay 1 gold to choose a character to lose 1 life. If you do not, then you lose 1 life.",
          "If the Black Knight would be discarded, move him to the Castle instead."
        ]
      },
      "Blacksmith": {
        "name": "Blacksmith",
        "count": 1,
        "file": "denizen_blacksmith",
        "description": [
          "Castle - City - Village",
          "Purchase any of the following Objects for the listed cost:",
          "Helmet (1G)",
          "Sword (1G)",
          "Whetstone (1G)",
          "Axe (2G)",
          "Shield (2G)",
          "Shovel (2G)",
          "Bow (3G)",
          "Spiked Shield (3G)",
          "Armour (4G)",
          "Greatsword (4G)"
        ]
      },
      "Boatman": {
        "name": "Boatman",
        "count": 1,
        "file": "denizen_boatman",
        "description": [
          "Any",
          "1) He is Death! Lose 1 life or kill 1 Follower, then discard this card.",
          "2) You help him bail out his boat. Lose 1 turn.",
          "3) Have a nice chat about fishing.",
          "4-5) You may move to the Village, Tavern, or City as your next move.",
          "6) You may move to the Chapel, Graveyard, or Castle as your next move.",
          "After you are ferried to a space by the Boatman, move him to your space."
        ]
      },
      "Captain of the Guard": {
        "name": "Captain of the Guard",
        "count": 1,
        "file": "denizen_captain_of_the_guard",
        "description": [
          "Castle - City",
          "1) He doesn't like your look and tosses you in jail. Miss your next turn.",
          "2) He has you escorted home. Return to your starting space.",
          "3) Move along, citizen.",
          "4-5) He sends guards to patrol the countryside. Discard all Enemies in this Region.",
          "6) Curfew. Each character must pay 1 gold or return to their starting space."
        ]
      },
      "Chapelwarden": {
        "name": "Chapelwarden",
        "count": 1,
        "file": "denizen_chapelwarden",
        "description": [
          "Chapel",
          "^Good:^ Heal up to your life value or roll 1 die to pray:",
          "1-4) Ignored.",
          "5) Gain 1 life.",
          "6) Gain 1 Spell.",
          "^Neutral:^ Heal up to your life value at the cost of 1 gold each.",
          "^Evil:^ Lose 1 life.",
          "If the Chapelwarden would be discarded, move them to the Chapel instead."
        ]
      },
      "Corrupt Chaplain": {
        "name": "Corrupt Chaplain",
        "count": 1,
        "file": "denizen_corrupt_chaplain",
        "description": [
          "Chapel - Graveyard",
          "^Good:^ Heal 1 life at the cost of 1 gold or roll 1 die to pray:",
          "1) Become evil.",
          "2-4) Ignored.",
          "5-6) Heal 1 life.",
          "^Neutral:^ Heal 1 life at the cost of 1 gold.",
          "^Evil:^ Heal 1 life."
        ]
      },
      "Cult Leader": {
        "name": "Cult Leader",
        "count": 1,
        "file": "denizen_cult_leader",
        "description": [
          "Graveyard - Village",
          "^Evil:^ Replenish 1 fate or roll 1 die to pray. You may discard 1 Follower to add 2 to the result:",
          "1) Lose 1 life.",
          "2-3) Ignored.",
          "4-5) Gain 1 fate.",
          "6) Gain 1 Spell.",
          "7) Lose 1 life and gain 1 Strength or 1 Craft.",
          "^Neutral:^ Discard 1 Follower or become evil.",
          "^Good:^ Discard all of your Followers or become evil."
        ]
      },
      "Dark Being": {
        "name": "Dark Being",
        "count": 1,
        "file": "denizen_dark_being",
        "description": [
          "City - Graveyard",
          "^Evil:^ Replenish fate up to your fate value or roll 1 die to pray:",
          "1) All characters lose 1 fate.",
          "2-3) Ignored.",
          "4-5) Gain 1 fate.",
          "6) Take 1 fate from every other character.",
          "^Neutral:^ Choose another character to lose 1 fate.",
          "^Good:^ Each good character loses all of their fate."
        ]
      },
      "Doctor": {
        "name": "Doctor",
        "count": 1,
        "file": "denizen_doctor",
        "description": [
          "Castle - City",
          "Heal up to 2 life at the cost of 1 gold each."
        ]
      },
      "Enchantress": {
        "name": "Enchantress",
        "count": 1,
        "file": "denizen_enchantress",
        "description": [
          "City",
          "1) You are turned into a slimy little Toad for 3 turns.",
          "2) Lose 1 Strength.",
          "3) Lose 1 Craft.",
          "4) Gain 1 Craft.",
          "5) Gain 1 Strength.",
          "6) Gain 1 Spell.",
          "If the Enchantress would be discarded, move her to the City instead."
        ]
      },
      "Enlightened Monk": {
        "name": "Enlightened Monk",
        "count": 1,
        "file": "denizen_enlightened_monk",
        "description": [
          "Chapel - Village",
          "^Good:^ Heal up to your life value or roll 1 die to pray:",
          "1) Lose 1 Craft.",
          "2-3) Ignored.",
          "4-5) Gain 1 Spell.",
          "6) Gain 1 Craft.",
          "^Neutral:^ Heal 1 life.",
          "^Evil:^ Lose 1 Craft."
        ]
      },
      "Faerie Caravan": {
        "name": "Faerie Caravan",
        "count": 1,
        "file": "denizen_faerie_caravan",
        "description": [
          "Starting with yourself and continuing clockwise, each character must pass 1 Object, Follower, or Spell to the character to their right, if able. Then each character must pass 1 life, 1 fate, or 1 gold to the character to their right."
        ]
      },
      "Famous Brawler": {
        "name": "Famous Brawler",
        "count": 1,
        "file": "denizen_famous_brawler",
        "description": [
          "City - Tavern",
          "The Brawler would be happy to give you some pointers if you buy him a drink. You may pay him 1 gold to roll 1 die and add your Strength to the result.",
          "1-5) He has a mean left hook! Lose 1 life.",
          "6-8) He teaches you a thing or two. Gain 1 fate.",
          "9-12) Draw. Gain 1 Strength.",
          "13+) Crowned the new Champion. Each other character must give you 1 Object or Follower. Then discard this card."
        ]
      },
      "Farmer": {
        "name": "Farmer",
        "count": 1,
        "file": "denizen_farmer",
        "description": [
          "Tavern - Village",
          "1) He convinces you to help him at his farm. Move to a Fields of your choice and miss 2 turns.",
          "2) The Farmer attacks you with a Strength of 3.",
          "3) Have a nice chat about the weather.",
          "4-5) He offers to sell you his best produce for 1 gold. If you accept, heal 1 life.",
          "6) You win his only Mule in a bet. Take a Mule from the Purchase deck and discard this card."
        ]
      },
      "Fortune Teller": {
        "name": "Fortune Teller",
        "count": 1,
        "file": "denizen_fortune_teller",
        "description": [
          "Tavern - Village",
          "1) She curses you. Lose all of your fate.",
          "2) She foretells terrible things to come. During your next turn you must subtract 1 from all of your rolls, to a minimum of 1.",
          "3) She tells you that you will meet someone nice.",
          "4-5) She gives you a glimpse of the future. Look at the top 4 cards of the Adventure deck and put them back in any order.",
          "6) She sees greatness in your future. Gain 2 fate."
        ]
      },
      "Gambler": {
        "name": "Gambler",
        "count": 1,
        "file": "denizen_gambler",
        "description": [
          "City - Tavern",
          "1) Bet more than you have. Place 1 of your Objects on this card.",
          "2) Get dealt a bad hand. Lose 1 gold.",
          "3) Break even.",
          "4-5) Get a winning hand. Gain 1 gold.",
          "6) Royal Flush! Gain 3 gold and take all Objects on this card. Then discard this card.",
          "After visiting the Gambler, you may pay 1 gold to visit him again."
        ]
      },
      "Gold Lender": {
        "name": "Gold Lender",
        "count": 1,
        "file": "denizen_gold_lender",
        "description": [
          "City",
          "1) He insists that you owe him money. Either lose all of your gold or lose 1 life.",
          "2) You are forced to fill out a pile of forms before he rejects your application. Lose 1 turn.",
          "3) He ignores you.",
          "4-5) He approves your application. Gain 1 gold.",
          "6) He feels you are a worthy investment. Gain 3 gold."
        ]
      },
      "Gravedigger": {
        "name": "Gravedigger",
        "count": 1,
        "file": "denizen_gravedigger",
        "description": [
          "Graveyard",
          "^Evil:^ You may pay 1 gold to take the top Enemy in the discard pile as a trophy.",
          "^Neutral:^ You may discard any number of trophies and gain 1 gold for each trophy discarded.",
          "^Good:^ Discard 1 of your trophies."
        ]
      },
      "Gravetender": {
        "name": "Gravetender",
        "count": 1,
        "file": "denizen_gravetender",
        "description": [
          "Graveyard",
          "^Evil:^ Replenish fate up to your fate value or roll 1 die to pray:",
          "1-4) Ignored.",
          "5) Gain 1 fate.",
          "6) Gain 1 Spell.",
          "^Neutral:^ Replenish fate up to your fate value at the cost of 1 gold each.",
          "^Good:^ Lose 1 life.",
          "If the Gravetender would be discarded, move them to the Graveyard instead."
        ]
      },
      "Inquisitor": {
        "name": "Inquisitor",
        "count": 1,
        "file": "denizen_inquisitor",
        "description": [
          "City - Chapel",
          "^Good:^ Heal 1 life or roll 1 die to pray:",
          "1) Lose 1 life.",
          "2-4) Ignored.",
          "5-6) Choose an evil character to lose 1 life.",
          "^Neutral:^ Become good or lose 1 life.",
          "^Evil:^ Lose 2 life."
        ]
      },
      "Itinerant Priest": {
        "name": "Itinerant Priest",
        "count": 1,
        "file": "denizen_itinerant_priest",
        "description": [
          "City - Chapel - Graveyard",
          "^Good:^ Heal 1 life.",
          "^Neutral:^ You may become good or evil.",
          "^Evil:^ Replenish 1 fate."
        ]
      },
      "Master Builder": {
        "name": "Master Builder",
        "count": 1,
        "file": "denizen_master_builder",
        "description": [
          "Castle - City - Village",
          "You may pay the Master Builder any number of gold. For every 2 gold you pay, place a Settlement, Outpost, Monastery, or Highway Terrain card on any space in this Region."
        ]
      },
      "Master Healer": {
        "name": "Master Healer",
        "count": 1,
        "file": "denizen_master_healer",
        "description": [
          "City - Chapel - Village",
          "Heal up to your life value at the cost of 1 gold each.",
          "You may also buy a Healer's Kit for 1 gold."
        ]
      },
      "Mayor": {
        "name": "Mayor",
        "count": 1,
        "file": "denizen_mayor",
        "description": [
          "City - Village",
          "1) He has you confined. Lose your next turn.",
          "2-3) Ignored.",
          "4) He offers you a bounty. You may discard a trophy to gain gold equal to the Enemy's Strength or Craft.",
          "5) He will send guards after your enemies. You may pay him 1 gold to return another character to their starting space.",
          "6) He offers to introduce you to his royal cousin. Move to the Castle as your next move."
        ]
      },
      "Monster Hunter": {
        "name": "Monster Hunter",
        "count": 1,
        "file": "denizen_monster_hunter",
        "description": [
          "Castle - City - Tavern",
          "You may pay 2 gold to take a faceup Enemy in this Region as a trophy."
        ]
      },
      "Old Wizard": {
        "name": "Old Wizard",
        "count": 1,
        "file": "denizen_old_wizard",
        "description": [
          "City - Tavern",
          "1) He doesn't wish to be bothered. You are turned into a slimy little Toad for 3 turns.",
          "2) He thinks you are not worthy of magic. Discard 1 of your Spells or Magic Objects.",
          "3) You leave him alone.",
          "4-5) He offers to teleport you to any space in this Region as your next move.",
          "6) He shares some knowledge with you. Take a Scroll or a Personal Journal from the Purchase deck."
        ]
      },
      "Royal Emissary": {
        "name": "Royal Emissary",
        "count": 1,
        "file": "denizen_royal_emissary",
        "description": [
          "Castle - City",
          "1) Her guards attack you with a Strength of 5.",
          "2) She demands gifts. Lose 1 gold or miss 1 turn.",
          "3) You are beneath her notice.",
          "4-5) She grants you an audience. Gain 1 gold or 1 Spell.",
          "6) She invites you to join her court. Search the Denizen deck for a Denizen of your choice, add it to this space and visit it. If you roll a die for this Denizen, add 2 to your result."
        ]
      },
      "Sage": {
        "name": "Sage",
        "count": 1,
        "file": "denizen_sage",
        "description": [
          "City - Chapel - Graveyard",
          "You may pay 1 gold to choose a character to become an alignment of your choice."
        ]
      },
      "Shopkeeper": {
        "name": "Shopkeeper",
        "count": 1,
        "file": "denizen_shopkeeper",
        "description": [
          "City",
          "Purchase any of the following Objects for the listed cost:",
          "(1G)",
          "Whetstone, Water Bottle, Healer's Kit, Scroll",
          "(2G)",
          "Haversack, Helmet, Map, Shovel",
          "(3G)",
          "Mule, Psychic Crystal, Personal Journal, Crystal Sceptre"
        ]
      },
      "Swindler": {
        "name": "Swindler",
        "count": 1,
        "file": "denizen_swindler",
        "description": [
          "City - Tavern - Village",
          "1-2) He swindles you good. Discard 1 Object or Follower at random.",
          "3-4) You avoid his schemes.",
          "5) You outswindle the Swindler. Take an Object of your choice from the Purchase deck.",
          "6) You reveal the Swindler to the public. They drive him out (discard him) and reward you with a Talisman."
        ]
      },
      "Temple Priest": {
        "name": "Temple Priest",
        "count": 1,
        "file": "denizen_temple_priest",
        "description": [
          "Chapel - Graveyard",
          "Roll 2 dice to pray:",
          "2) Lose 2 life.",
          "3) Lose 1 life.",
          "4) Discard 1 Follower.",
          "5) Discard 1 Object.",
          "6) Replenish 1 fate.",
          "7) Heal 1 life.",
          "8) Gain 1 Craft.",
          "9) Gain 1 Strength.",
          "10) Gain 1 Spell.",
          "11) Gain 2 fate.",
          "12) Gain 2 life."
        ]
      },
      "Village Mystic": {
        "name": "Village Mystic",
        "count": 1,
        "file": "denizen_village_mystic",
        "description": [
          "Village",
          "1) Become evil.",
          "2-3) Ignored.",
          "4) Become good.",
          "5) Gain 1 Craft.",
          "6) Gain 1 Spell.",
          "If the Village Mystic would be discarded, move them to the Village instead."
        ]
      },
      "Waggoner": {
        "name": "Waggoner",
        "count": 1,
        "file": "denizen_wagoner",
        "description": [
          "Any",
          "You may pay 1 gold to the Waggoner for a ride. If you do, roll 3 dice for movement on your next turn; you may end your movement at any time during this move.",
          "After using the Waggoner, move him to the City, Tavern, Village, Graveyard, Chapel, or Castle."
        ]
      },
      "Wanderer": {
        "name": "Wanderer",
        "count": 1,
        "file": "denizen_wanderer",
        "description": [
          "1) They bring with them tidings of woe. All characters lose 1 fate.",
          "2) They give you bad travel advice. Move only 1 space on your next turn.",
          "3) They tell you a very tall tale about their travels.",
          "4-5) They offer to sell you a Map for 1 gold.",
          "6) They decide to retire and gives you their old gear. Take a Haversack and a Water Bottle from the Purchase deck."
        ]
      }
    },
    "REMNANT": {
      "Ancient Vault": {
        "name": "Ancient Vault",
        "count": 1,
        "file": "ancient_vault",
        "description": [
          "Reveal the top 10 cards of the Adventure deck. Take all revealed Objects and discard the rest. If you reveal no Objects, gain 3 gold instead."
        ]
      },
      "Hidden Power": {
        "name": "Hidden Power",
        "count": 1,
        "file": "hidden_power",
        "description": [
          "While exploring the ruins of the past, you are suddenly overcome by a mysterious and powerful force. Gain 2 Strength or 2 Craft."
        ]
      },
      "Lost Knowledge": {
        "name": "Lost Knowledge",
        "count": 1,
        "file": "lost_knowledge",
        "description": [
          "You discover an ancient library, filled with the lore of lost ages. Roll 1 die:",
          "1) Lose 1 Craft.",
          "2) Lose 1 turn.",
          "3-4) Gain 1 Spell.",
          "5-6) Gain 1 Craft."
        ]
      },
      "Demon of Decay": {
        "name": "Demon of Decay",
        "count": 1,
        "file": "demon_of_decay",
        "description": [
          "Demon of Decay",
          "All that this demon touches turns to rot and decay. When you encounter the Demon of Decay, you must discard 1 Object."
        ]
      },
      "Giant Fly": {
        "name": "Giant Fly",
        "count": 1,
        "file": "giant_fly",
        "description": [
          "Giant Fly",
          "The smell of the City has attracted this foul thing.",
          "It will remain here until it is killed."
        ]
      },
      "Scavenging Beasts": {
        "name": "Scavenging Beasts",
        "count": 1,
        "file": "scavenging_beasts",
        "description": [
          "Scavenging Beasts",
          "These hungry creatures smell the stench of death upon you. When you defeat them, you must discard 1 of your other trophies. They will remain here until killed."
        ]
      },
      "Ravenous Wraith": {
        "name": "Ravenous Wraith",
        "count": 1,
        "file": "ravenous_wraith",
        "description": [
          "Ravenous Wraith",
          "A spirit of eternal hunger that seeks to feed the void within its twisted heart. When you encounter the Wraith, you must discard 1 Follower. "
        ]
      },
      "Ageless Talisman": {
        "name": "Ageless Talisman",
        "count": 1,
        "file": "ageless_talisman",
        "description": [
          "You may only enter the Valley of Fire if you have one of the fabled Talismans.",
          "While a character is on the Crown of Command, add 5 to both your Strength and Craft."
        ]
      },
      "Cataclysm Blade": {
        "name": "Cataclysm Blade",
        "count": 1,
        "file": "cataclysm_blade",
        "description": [
          "Legend holds that this was one of the weapons that brought about the end of the world. Before rolling, you may ditch the Cataclysm Blade to add 5 to your attack roll in battle or psychic combat."
        ]
      },
      "Broken Armour": {
        "name": "Broken Armour",
        "count": 1,
        "file": "broken_armour_cata",
        "description": [
          "If you visit the City, Village, or Castle, you may pay 1 gold and discard this card to take any Armour from the Purchase deck."
        ]
      },
      "Broken Weapon": {
        "name": "Broken Weapon",
        "count": 1,
        "file": "broken_weapon_cata",
        "description": [
          "If you visit the City, Village, or Castle, you may pay 1 gold and discard this card to take any Weapon from the Purchase deck."
        ]
      },
      "Rusty Boomstick": {
        "name": "Rusty Boomstick",
        "count": 1,
        "file": "rusty_boomstick",
        "description": [
          "After rolling the die in battle, you may discard 1 Object (including this one) to add 2 to your attack score."
        ]
      },
      "Salvage": {
        "name": "Salvage",
        "count": 3,
        "file": "salvage",
        "description": [
          "You may discard this card when you visit a Denizen to gain 1 gold."
        ]
      },
      "Steam Wagon": {
        "name": "Steam Wagon",
        "count": 1,
        "file": "steam_wagon",
        "description": [
          "This Object does not count towards your carrying limit.",
          "You may reroll the die for your movement, but must accept the new result."
        ]
      },
      "Treasure Chest": {
        "name": "Treasure Chest",
        "count": 1,
        "file": "treasure_chest_cata",
        "description": [
          "Roll 1 die to open the Chest:",
          "1-2) Trap! Lose 1 life.",
          "3-4) Treasure! Gain 2 gold.",
          "5-6) Ancient Relic! Either take the top Object in the discard pile or gain 1 Talisman. After the Chest is opened, it crumbles to the discard pile.",
          "If you have the Treasure Map you may add up to 3 to the score."
        ]
      },
      "Treasure Map": {
        "name": "Treasure Map",
        "count": 1,
        "file": "treasure_map_cata",
        "description": [
          "When you draw an Object, place 1 gold on the Map. At any time, you may discard the Treasure Map to gain all gold on it."
        ]
      },
      "Mysterious Elixir": {
        "name": "Mysterious Elixir",
        "count": 1,
        "file": "mysterious_elixir",
        "description": [
          "Discard the Elixir to roll 1 die:",
          "1) Lose 1 Strength.",
          "2) Lose 1 life.",
          "3-4) Gain 1 life.",
          "5-6) Gain 1 Strength."
        ]
      },
      "Orb of Time": {
        "name": "Orb of Time",
        "count": 1,
        "file": "orb_of_time",
        "description": [
          "Place 3 fate on the Orb when you draw it. Once per round, at the start of your turn, you may spend 1 fate from this card to take two successive turns instead of one before play passes to the next player. When there is no fate left on this card, place 3 fate on it and pass it to the character to your left."
        ]
      },
      "Broken Spire": {
        "name": "Broken Spire",
        "count": 1,
        "file": "broken_spire",
        "description": [
          "Roll 2 dice:",
          "2-3) Cursed! You are turned into a slimy little Toad for 3 turns. Discard this card.",
          "4-5) Time Trap! Lose 1 turn.",
          "6-7) Mouldy Scroll. Gain 1 Spell.",
          "8-9) Odd Potion. Gain 1 Craft.",
          "10-11) Spellbook. Gain 2 Spells.",
          "12) Wizard's Lab. Gain 2 Craft and 1 Spell. Then discard this card."
        ]
      },
      "Haunted Castle": {
        "name": "Haunted Castle",
        "count": 1,
        "file": "haunted_castle",
        "description": [
          "Roll 2 dice:",
          "2-3) Evil Spirits. Discard 1 Object or Follower along with this card.",
          "4-5) Nightmares. Lose 1 turn.",
          "6-8) The Armoury. Take a Weapon from the Purchase deck.",
          "9) Training Yard. Gain 1 Strength.",
          "10-11) Treasury. Gain 4 gold.",
          "12) Haunted Crypts. Gain 2 Strength, gain 1 Talisman, and discard this card."
        ]
      },
      "Ruined City": {
        "name": "Ruined City",
        "count": 1,
        "file": "ruined_city",
        "description": [
          "You find a city from before the apocalypse, half sunk in the mire. Roll 2 dice to see what you find:",
          "2-3) Collapse! Lose 2 life and discard this card.",
          "4-7) Wander the empty streets.",
          "8-9) A hidden cache. Gain 2 gold.",
          "10-12) Ancient shop. Take 1 Object of your choice from the Purchase deck and discard this card."
        ]
      },
      "Rune Gate": {
        "name": "Rune Gate",
        "count": 1,
        "file": "rune_gate",
        "description": [
          "On your next turn, instead of your normal move, you may teleport to any other faceup Rune Gate or any Runes space.",
          "Once the Rune Gate has been used, it vanishes to the discard pile."
        ]
      },
      "Toxic Spring": {
        "name": "Toxic Spring",
        "count": 1,
        "file": "toxic_spring",
        "description": [
          "Place a total of 2 Strength and 2 Craft here when drawn. You may drink at the Spring once per visit by losing 1 life to gain either 1 Strength or 1 Craft by taking the appropriate counter. When all 4 counters have been taken, discard the Toxic Spring."
        ]
      }
    },
    "PURCHASE": {
      "Bow": {
        "name": "Bow",
        "count": 2,
        "file": "bow",
        "description": [
          "At the start of battle, you may roll 1 die and add the result to your attack score. You may only do this once per battle.",
          "Whenever you use the Bow, you must either discard 1 gold or discard the Bow."
        ]
      },
      "Crystal Sceptre": {
        "name": "Crystal Sceptre",
        "count": 2,
        "file": "crystal_sceptre",
        "description": [
          "When you attack another character you may choose to make the attack psychic combat.",
          "You may not do this when you are attacked by another character."
        ]
      },
      "Greatsword": {
        "name": "Greatsword",
        "count": 2,
        "file": "greatsword",
        "description": [
          "Add 2 to your Strength during battle."
        ]
      },
      "Haversack": {
        "name": "Haversack",
        "count": 2,
        "file": "haversack",
        "description": [
          "You can carry 1 extra Object. If you lose the Haversack, leave any surplus Objects of your choice in the space you are in.",
          "When you are required to ditch, discard, or otherwise lose another Object, you may discard the Haversack to cancel the effect."
        ]
      },
      "Healer's Kit": {
        "name": "Healer's Kit",
        "count": 2,
        "file": "healers_kit",
        "description": [
          "When you lose 1 or more life, you may roll 1 die. If you roll a 6, prevent all loss of life. If you roll a 1, discard this card."
        ]
      },
      "Map": {
        "name": "Map",
        "count": 2,
        "file": "map",
        "description": [
          "After rolling the dice in the Mines, subtract 2 from the total."
        ]
      },
      "Personal Journal": {
        "name": "Personal Journal",
        "count": 2,
        "file": "personal_journal",
        "description": [
          "When you turn in trophies for Strength or Craft, reduce the amount of Strength or Craft points you need by 1."
        ]
      },
      "Psychic Crystal": {
        "name": "Psychic Crystal",
        "count": 2,
        "file": "psychic_crystal",
        "description": [
          "Add 1 to your Craft during psychic combat."
        ]
      },
      "Scroll": {
        "name": "Scroll",
        "count": 2,
        "file": "scroll",
        "description": [
          "You may discard the Scroll at any time to gain 1 Spell, if your Craft allows."
        ]
      },
      "Shovel": {
        "name": "Shovel",
        "count": 2,
        "file": "shovel",
        "description": [
          "After rolling the dice in the Crypt, subtract 2 from the total."
        ]
      },
      "Spiked Shield": {
        "name": "Spiked Shield",
        "count": 2,
        "file": "spiked_shield",
        "description": [
          "When you are attacked in battle by another character, that character loses 1 life.",
          "If you are defeated in battle and just lost a life, roll 1 die. If you roll a 5 or 6, prevent that loss of life."
        ]
      },
      "Whetstone": {
        "name": "Whetstone",
        "count": 2,
        "file": "whetstone",
        "description": [
          "Add 1 to your Strength in battle if you are using a Weapon."
        ]
      }
    }
  },
  "The City": {
    "EMPORIUM": {
      "Scroll": {
        "name": "Scroll",
        "count": 3,
        "file": "scroll",
        "description": [
          "You may discard the Scroll at any time to gain 1 Spell, if your Craft allows."
        ]
      },
      "Mirror Shield": {
        "name": "Mirror Shield",
        "count": 3,
        "file": "mirror_shield",
        "description": [
          "If you are defeated in psychic combat and just lost a life, roll 1 die. If you roll a 5 or 6, the Shield protected you and you did not lose that life, though you still lost the psychic combat."
        ]
      },
      "Crystal Sceptre": {
        "name": "Crystal Sceptre",
        "count": 3,
        "file": "crystal_sceptre",
        "description": [
          "When you attack another character you may choose to make the attack psychic combat.",
          "You may not do this when you are attacked by another character."
        ]
      },
      "Psychic Crystal": {
        "name": "Psychic Crystal",
        "count": 3,
        "file": "psychic_crystal",
        "description": [
          "Add 1 to your Craft during psychic combat."
        ]
      },
      "Magic Ring": {
        "name": "Magic Ring",
        "count": 2,
        "file": "magic_ring",
        "description": [
          "Add 1 to your Strength and 1 to your Craft."
        ]
      },
      "Spellbook": {
        "name": "Spellbook",
        "count": 2,
        "file": "spellbook",
        "description": [
          "At the start of your turn you may gain 1 Spell, if your Craft allows."
        ]
      }
    },
    "STABLES": {
      "Mule": {
        "name": "Mule",
        "count": 2,
        "file": "mule",
        "description": [
          "The Mule can carry an extra four Objects for you.",
          "If you lose the Mule, leave any surplus Objects of your choice in the space you are in."
        ]
      },
      "Riding Horse": {
        "name": "Riding Horse",
        "count": 2,
        "file": "riding_horse",
        "description": [
          "You may roll 2 dice and add them together to determine how far you can move."
        ]
      },
      "Warhorse": {
        "name": "Warhorse",
        "count": 2,
        "file": "warhorse",
        "description": [
          "Add your Craft value to your Strength during battle.",
          "If you lose a life during any battle or psychic combat, you must discard the Warhorse."
        ]
      },
      "Horse and Cart": {
        "name": "Horse and Cart",
        "count": 2,
        "file": "horse_and_cart",
        "description": [
          "The Horse and Cart can carry an extra 8 Objects for you. If you lose the Horse and Cart, you must leave any surplus Objects of your choice in the space you are in."
        ]
      }
    },
    "PETS": {
      "Fang": {
        "name": "Fang",
        "count": 1,
        "file": "fang",
        "description": [
          "Once per battle or psychic combat, you may reroll your attack roll.",
          "Fang cannot be taken by another character's special ability or Spell."
        ]
      },
      "Fez": {
        "name": "Fez",
        "count": 1,
        "file": "fez",
        "description": [
          "Whenever you land on a space with instructions to draw 1 or more Adventure Cards, before you encounter the space you may move 1 faceup Adventure Card in the same Region to your space. You may only do this once per turn."
        ]
      },
      "Glitter": {
        "name": "Glitter",
        "count": 1,
        "file": "glitter",
        "description": [
          "You always have at least 1 Spell, regardless of your Craft. If, at any time, you do not have a Spell, gain 1 Spell."
        ]
      },
      "Hopper": {
        "name": "Hopper",
        "count": 1,
        "file": "hopper",
        "description": [
          "Whenever you land on a space with a card or character, you may move to the next space continuing in the same direction you are moving (clockwise or counterclockwise)."
        ]
      },
      "Lucky": {
        "name": "Lucky",
        "count": 1,
        "file": "lucky",
        "description": [
          "At the start of your turn, you may replenish 1 fate."
        ]
      },
      "Luna": {
        "name": "Luna",
        "count": 1,
        "file": "luna",
        "description": [
          "Whenever you pay a fate to reroll a die, you choose which result on the die to use instead of rolling it."
        ]
      },
      "Singe": {
        "name": "Singe",
        "count": 1,
        "file": "singe",
        "description": [
          "Add 1 to your Strength and 1 to your Craft.",
          "If you are defeated by an Enemy Dragon, you must discard Singe."
        ]
      },
      "Stinker": {
        "name": "Stinker",
        "count": 1,
        "file": "stinker",
        "description": [
          "Instead of attacking an Enemy, you may place it in the next space clockwise or counterclockwise. You may only do this once per turn."
        ]
      },
      "Stompy": {
        "name": "Stompy",
        "count": 1,
        "file": "stompy",
        "description": [
          "After you have finished moving, you may discard 1 Adventure Card on your space."
        ]
      },
      "Terrance": {
        "name": "Terrance",
        "count": 1,
        "file": "terrance",
        "description": [
          "Instead of rolling the die for your movement, you may move 1 space."
        ]
      },
      "Wart": {
        "name": "Wart",
        "count": 1,
        "file": "wart",
        "description": [
          "After you resolve an encounter with another character, the character must roll a die.",
          "If they roll a 1, they are turned into a slimy little Toad for 3 turns."
        ]
      },
      "Whiskers": {
        "name": "Whiskers",
        "count": 1,
        "file": "whiskers",
        "description": [
          "Whenever you encounter a space with instructions to draw 1 or more Adventure Cards, you may draw 1 extra Adventure Card and place it in that space."
        ]
      }
    },
    "ARMOURY": {
      "Battle Axe": {
        "name": "Battle Axe",
        "count": 2,
        "file": "battle_axe",
        "description": [
          "Add 3 to your Strength during battle.",
          "If you defeat another character in battle and force them to lose a life, the character cannot use Armour to prevent the loss of life."
        ]
      },
      "Bow": {
        "name": "Bow",
        "count": 2,
        "file": "bow",
        "description": [
          "At the start of battle, you may roll 1 die and add the result to your attack score. You may only do this once per battle.",
          "Whenever you use the Bow, you must either discard 1 gold or discard the Bow."
        ]
      },
      "Flail": {
        "name": "Flail",
        "count": 2,
        "file": "flail",
        "description": [
          "You may roll 2 dice during battle and add them together to determine your attack roll.",
          "If you roll doubles, your opponent cannot add their attack roll to their attack score."
        ]
      },
      "Full Plate": {
        "name": "Full Plate",
        "count": 2,
        "file": "full_plate",
        "description": [
          "Add 1 to your Strength during battle.",
          "If you are defeated in battle, roll 1 die:",
          "1-3) You lose the attack as normal.",
          "4-6) You do not lose the battle, it is considered a stand-off instead."
        ]
      },
      "Greatsword": {
        "name": "Greatsword",
        "count": 2,
        "file": "greatsword",
        "description": [
          "Add 2 to your Strength during battle."
        ]
      },
      "Stiletto": {
        "name": "Stiletto",
        "count": 2,
        "file": "stiletto",
        "description": [
          "Add 1 to your Strength during battle."
        ]
      }
    },
    "POTIONS": {
      "Healing Potion": {
        "name": "Healing Potion",
        "count": 1,
        "file": "healing_potion",
        "description": [
          "You may discard this potion at any time to heal 1 life or prevent a Follower from being killed."
        ]
      },
      "Vial of Poison": {
        "name": "Vial of Poison",
        "count": 1,
        "file": "vial_of_poison",
        "description": [
          "If you defeat a character in battle or psychic combat and cause them to lose a life, you may discard this potion and force them to lose an additional life."
        ]
      },
      "Potion of Strength": {
        "name": "Potion of Strength",
        "count": 1,
        "file": "potion_of_strength",
        "description": [
          "When you drink the potion it will increase your Strength by 2 until the end of the turn. Once you have drunk it, place it on the discard pile."
        ]
      },
      "Unstable Potion": {
        "name": "Unstable Potion",
        "count": 1,
        "file": "unstable_potion",
        "description": [
          "",
          "You may discard this potion at any time to roll 1 die:",
          "1) Become a Toad for 3 turns",
          "2) Lose 1 Strength",
          "3) Lose 1 Craft",
          "4) Gain 1 life",
          "5) Gain 1 Craft",
          "6) Gain 1 Strength"
        ]
      },
      "Invisibility Potion": {
        "name": "Invisibility Potion",
        "count": 1,
        "file": "invisibility_potion",
        "description": [
          "You may discard this potion at any time to evade any creature or character until the end of the turn."
        ]
      },
      "Elixir of Might": {
        "name": "Elixir of Might",
        "count": 1,
        "file": "elixir_of_might",
        "description": [
          "You may drink the Elixir of Might at any time.",
          "When you do, roll 1 die:",
          "1) Poison; lose 1 life",
          "2-5) Gain 1 Strength",
          "6) Gain 2 Strength",
          "The empty vessel is then placed on the discard pile."
        ]
      },
      "Elixir of Vitality": {
        "name": "Elixir of Vitality",
        "count": 1,
        "file": "elixir_of_vitality",
        "description": [
          "You may drink the Elixir of Vitality at any time. When you do, roll 1 die:",
          "1) Poison, lose 1 life",
          "2-5) Gain 1 life",
          "6) Gain 2 life"
        ]
      },
      "Elixir of Rage": {
        "name": "Elixir of Rage",
        "count": 1,
        "file": "elixir_of_rage",
        "description": [
          "You may drink the Elixir of Rage at any time. When you do, roll 1 die:",
          "1-2) Poison, lose 1 life",
          "3-6) Add 3 to your Strength until the end of the turn",
          "The empty vessel is then placed on the discard pile."
        ]
      },
      "Flight Potion": {
        "name": "Flight Potion",
        "count": 1,
        "file": "flight_potion",
        "description": [
          "You may discard this potion instead of rolling the die for your movement to move to any other space in the same Region."
        ]
      },
      "Dragon's Blood": {
        "name": "Dragon's Blood",
        "count": 1,
        "file": "dragons_blood",
        "description": [
          "You may discard this potion at any time.",
          "When you drink it you must lose 1 life, but your Strength value is doubled until the end of the turn."
        ]
      },
      "Phoenix Potion": {
        "name": "Phoenix Potion",
        "count": 1,
        "file": "phoenix_potion",
        "description": [
          "You may discard this potion when you lose your last life to immediately heal all of your lives."
        ]
      },
      "Spellbound Potion": {
        "name": "Spellbound Potion",
        "count": 1,
        "file": "spellbound_potion",
        "description": [
          "You may discard this potion at any time to gain 1 Spell, if your Craft allows."
        ]
      },
      "Renewal Potion": {
        "name": "Renewal Potion",
        "count": 1,
        "file": "renewal_potion",
        "description": [
          "You may discard this potion at any time to discard any of your Spells and then draw an equal number of Spells."
        ]
      },
      "Elixir of Wrath": {
        "name": "Elixir of Wrath",
        "count": 1,
        "file": "elixir_of_wrath",
        "description": [
          "You may drink the Elixir of Wrath at any time. When you do, roll 1 die:",
          "1-2) Poison, lose 1 life",
          "3-6) Add 3 to your Craft until the end of the turn",
          "The empty vessel is then placed on the discard pile."
        ]
      },
      "Elixir of Wisdom": {
        "name": "Elixir of Wisdom",
        "count": 1,
        "file": "elixir_of_wisdom",
        "description": [
          "You may drink the Elixir of Wisdom at any time.",
          "When you do, roll 1 die:",
          "1) Poison; lose 1 life",
          "2-5) Gain 1 Craft",
          "6) Gain 2 Craft",
          "The empty vessel is then placed on the discard pile."
        ]
      },
      "Elixir of Destiny": {
        "name": "Elixir of Destiny",
        "count": 1,
        "file": "elixir_of_destiny",
        "description": [
          "You may drink the Elixir of Destiny at any time. When you do, roll 1 die:",
          "1) Poison; lose 1 life",
          "2-5) Gain 1 fate",
          "6) Gain 2 fate",
          "The empty vessel is then placed on the discard pile."
        ]
      }
    },
    "WANTED": {
      "Wanted:\\nGood Character": {
        "name": "Wanted:\\nGood Character",
        "count": 1,
        "file": "wanted_good_character",
        "description": [
          "If you defeat a good character in battle or psychic combat, you may immediately claim this bounty in addition to your normal reward: roll 1 die and gain that amount of gold."
        ]
      },
      "Wanted:\\nNeutral Character": {
        "name": "Wanted:\\nNeutral Character",
        "count": 2,
        "file": "wanted_neutral_character",
        "description": [
          "If you defeat a neutral character in battle or psychic combat, you may immediately claim this bounty in addition to your normal reward: roll 1 die and gain that amount of gold."
        ]
      },
      "Wanted:\\nEvil Character": {
        "name": "Wanted:\\nEvil Character",
        "count": 3,
        "file": "wanted_evil_character",
        "description": [
          "If you defeat an evil character in battle or psychic combat, you may immediately claim this bounty in addition to your normal reward: roll 1 die and gain that amount of gold."
        ]
      },
      "Wanted:\\nAnimal": {
        "name": "Wanted:\\nAnimal",
        "count": 2,
        "file": "wanted_animal",
        "description": [
          "When you claim this bounty, gain gold equal to the amount of trophy points you discard from Enemy Animals."
        ]
      },
      "Wanted:\\nConstruct": {
        "name": "Wanted:\\nConstruct",
        "count": 1,
        "file": "wanted_construct",
        "description": [
          "When you claim this bounty, gain gold equal to the amount of trophy points you discard from Enemy Constructs."
        ]
      },
      "Wanted:\\nCultist": {
        "name": "Wanted:\\nCultist",
        "count": 1,
        "file": "wanted_cultist",
        "description": [
          "When you claim this bounty, gain gold equal to the amount of trophy points you discard from Enemy Cultists."
        ]
      },
      "Wanted:\\nDragon": {
        "name": "Wanted:\\nDragon",
        "count": 1,
        "file": "wanted_dragon",
        "description": [
          "When you claim this bounty, gain gold equal to the amount of trophy points you discard from Enemy Dragons."
        ]
      },
      "Wanted:\\nElemental": {
        "name": "Wanted:\\nElemental",
        "count": 1,
        "file": "wanted_elemental",
        "description": [
          "When you claim this bounty, gain gold equal to the amount of trophy points you discard from Enemy Elementals."
        ]
      },
      "Wanted:\\nMonster": {
        "name": "Wanted:\\nMonster",
        "count": 2,
        "file": "wanted_monster",
        "description": [
          "When you claim this bounty, gain gold equal to the amount of trophy points you discard from Enemy Monsters."
        ]
      },
      "Wanted:\\nSpirit": {
        "name": "Wanted:\\nSpirit",
        "count": 4,
        "file": "wanted_spirit",
        "description": [
          "When you claim this bounty, gain gold equal to the amount of trophy points you discard from Enemy Spirits."
        ]
      }
    },
    "CITY": {
      "Charity": {
        "name": "Charity",
        "count": 1,
        "file": "charity",
        "description": [
          "The character with the most gold must give 1 gold to the character with the least gold.",
          "If there is a tie, the current player chooses. Then discard this card."
        ]
      },
      "City Patrol": {
        "name": "City Patrol",
        "count": 1,
        "file": "city_patrol",
        "description": [
          "The City Patrol is trying to maintain law and order in this area.",
          "Discard all faceup cards in this Region (including this card)."
        ]
      },
      "Corrupt Sheriff": {
        "name": "Corrupt Sheriff",
        "count": 1,
        "file": "corrupt_sheriff",
        "description": [
          "You may bribe the Sheriff by paying up to 3 gold. You must then roll 1 die and add 1 to the result for each gold you paid:",
          "1-2) You are thrown in Jail.",
          "3-4) You are safe.",
          "5-6) Choose any character and throw them in Jail.",
          "The Sheriff then departs to the discard pile."
        ]
      },
      "Crowded Streets": {
        "name": "Crowded Streets",
        "count": 1,
        "file": "crowded_streets",
        "description": [
          "For 2 rounds, whenever characters encounter a street space, they draw 3 cards instead of only 1. If any cards are already on the space, only draw enough to take the total to 3.",
          "The Crowded Streets then disperse to the discard pile."
        ]
      },
      "Discount Day": {
        "name": "Discount Day",
        "count": 1,
        "file": "discount_day",
        "description": [
          "For 2 rounds, whenever characters buy a card from a shop they may pay 1 gold less (to a minimum of 1).",
          "The Discount Day then expires to the discard pile."
        ]
      },
      "Drunken Revelry": {
        "name": "Drunken Revelry",
        "count": 1,
        "file": "drunken_revelry",
        "description": [
          "All characters roll 1 die.",
          "The character with the lowest result (reroll ties) is thrown in Jail. Then discard this card."
        ]
      },
      "Festival": {
        "name": "Festival",
        "count": 1,
        "file": "festival",
        "description": [
          "For 2 rounds, all characters in this Region may only move 1 space per turn.",
          "The Festival then marches off to the discard pile."
        ]
      },
      "Free Samples": {
        "name": "Free Samples",
        "count": 1,
        "file": "free_samples",
        "description": [
          "An alchemist is handing out free samples of his latest concoctions.",
          "Gain 3 Potion Cards for free, then discard this card."
        ]
      },
      "Grumpy Wizard": {
        "name": "Grumpy Wizard",
        "count": 1,
        "file": "grumpy_wizard",
        "description": [
          "You must draw Spells until you reveal one that can be cast on a character. The Spell is immediately cast on your character ignoring any restrictions (treat the Spell as if the next player cast it on your character). Then discard this card along with the drawn Spells."
        ]
      },
      "Lost!": {
        "name": "Lost!",
        "count": 1,
        "file": "lost",
        "description": [
          "You must miss 1 turn asking for directions, then discard this card. The next time you move, you may teleport to any other space in the City instead of moving normally."
        ]
      },
      "Lottery": {
        "name": "Lottery",
        "count": 1,
        "file": "lottery",
        "description": [
          "All characters roll 1 die.",
          "The character with the highest result (reroll ties) gains an amount of gold equal to their final die roll.",
          "Then discard this card."
        ]
      },
      "Loyal Companion": {
        "name": "Loyal Companion",
        "count": 1,
        "file": "loyal_companion",
        "description": [
          "A stray pet has chosen to follow you as its new master.",
          "Gain 1 Pet Card for free, then discard this card."
        ]
      },
      "Taxation": {
        "name": "Taxation",
        "count": 1,
        "file": "taxation",
        "description": [
          "Roll 1 die to see who a tax of 2 gold has been levied on:",
          "1-2) All good characters.",
          "3-4) All neutral characters.",
          "5-6) All evil characters.",
          "If a character cannot pay, they are thrown in Jail.",
          "The Tax is then lifted to the discard pile."
        ]
      },
      "Trading Day": {
        "name": "Trading Day",
        "count": 1,
        "file": "trading_day",
        "description": [
          "It's Trading Day across the land.",
          "Clockwise starting with yourself, characters in this Region may purchase one card from any shop deck (if able).",
          "The Trading Day then ends and moves to the discard pile."
        ]
      },
      "Travelling Bazaar": {
        "name": "Travelling Bazaar",
        "count": 2,
        "file": "travelling_bazaar",
        "description": [
          "Take all other cards on street spaces, shuffle them, and place the cards facedown on top of the base game Adventure deck."
        ]
      },
      "Bravo": {
        "name": "Bravo",
        "count": 1,
        "file": "bravo",
        "description": [
          "Bravo",
          "A Bravo challenges you to a battle with a side bet on the outcome. If you are defeated, in addition to losing 1 life, you lose 1 gold.",
          "If you defeat him, gain 1 gold.",
          "He will remain here until he is killed."
        ]
      },
      "City Rat": {
        "name": "City Rat",
        "count": 2,
        "file": "city_rat",
        "description": [
          "City Rat",
          "A foul City Rat is infesting this space.",
          "It will remain here until it is killed."
        ]
      },
      "City Watch": {
        "name": "City Watch",
        "count": 2,
        "file": "city_watch",
        "description": [
          "City Watch",
          "You may evade the City Watch instead of attacking them.",
          "If you are defeated, you do not lose a life. Instead, you are thrown into Jail.",
          "They will remain here until they are killed."
        ]
      },
      "Clockwork Cabinet": {
        "name": "Clockwork Cabinet",
        "count": 1,
        "file": "clockwork_cabinet",
        "description": [
          "Clockwork Cabinet",
          "If you defeat the Clockwork Cabinet in battle, you may keep it as a Follower instead of a trophy.",
          "While the Cabinet is your Follower, you may carry an extra 4 Objects.",
          "It will remain here until it is defeated."
        ]
      },
      "Clockwork Dragon": {
        "name": "Clockwork Dragon",
        "count": 1,
        "file": "clockwork_dragon",
        "description": [
          "Clockwork Dragon",
          "If you kill the Clockwork Dragon, you may gain a Talisman instead of taking it as a trophy.",
          "It will remain here until it is killed."
        ]
      },
      "Feral Pet": {
        "name": "Feral Pet",
        "count": 1,
        "file": "feral_pet",
        "description": [
          "Feral Pet",
          "If you defeat the Feral Pet in battle, you may discard it instead of keeping it as a trophy to gain 1 Pet Card for free.",
          "It will remain here until it is defeated."
        ]
      },
      "Giant Fly": {
        "name": "Giant Fly",
        "count": 1,
        "file": "giant_fly",
        "description": [
          "Giant Fly",
          "The smell of the City has attracted this foul thing.",
          "It will remain here until it is killed."
        ]
      },
      "Giant Rat": {
        "name": "Giant Rat",
        "count": 1,
        "file": "giant_rat",
        "description": [
          "Giant Rat",
          "A Giant Rat lurks in this area. It will remain here until it is killed."
        ]
      },
      "Fire Elemental": {
        "name": "Fire Elemental",
        "count": 1,
        "file": "fire_elemental",
        "description": [
          "Fire Elemental",
          "When revealed, discard all other cards in this space.",
          "It will remain here until it is killed."
        ]
      },
      "Air Elemental": {
        "name": "Air Elemental",
        "count": 1,
        "file": "air_elemental",
        "description": [
          "Air Elemental",
          "If you are defeated, in addition to losing 1 life, you are blown away 1 die roll clockwise around the board and then immediately end your turn.",
          "The Elemental will remain here until it is killed."
        ]
      },
      "Water Elemental": {
        "name": "Water Elemental",
        "count": 1,
        "file": "water_elemental",
        "description": [
          "Water Elemental",
          "If you are defeated, in addition to losing 1 life, 1 of your Followers, chosen at random, is washed away to a space 1 die roll clockwise around the board.",
          "The Elemental will remain here until it is killed."
        ]
      },
      "Heretic Priest": {
        "name": "Heretic Priest",
        "count": 1,
        "file": "heretic_priest",
        "description": [
          "Heretic Priest",
          "If you are defeated, in addition to losing 1 life, you must roll 1 die to pray with the same results as the High Temple.",
          "He will remain here until he is killed."
        ]
      },
      "Sneakthief": {
        "name": "Sneakthief",
        "count": 1,
        "file": "sneakthief",
        "description": [
          "Sneakthief",
          "If you kill the Sneakthief you may discard this card instead of keeping it as a trophy to take 1 Object from another character.",
          "He will remain here until he is killed."
        ]
      },
      "Night Guard": {
        "name": "Night Guard",
        "count": 2,
        "file": "night_guard",
        "description": [
          "Night Guard",
          "You may evade the Night Guard instead of attacking them. If you are defeated, you do not lose a life. Instead, you are thrown in Jail.",
          "They will remain here until they are killed."
        ]
      },
      "Apparition": {
        "name": "Apparition",
        "count": 1,
        "file": "apparition",
        "description": [
          "Apparition",
          "A spectral Apparition is haunting this area. It will remain here until it is killed."
        ]
      },
      "Assassin": {
        "name": "Assassin",
        "count": 1,
        "file": "assassin_stranger",
        "description": [
          "You may pay up to 3 gold, then choose a character to lose 1 life for each gold you paid.",
          "Once a character has chosen to do so, discard this card."
        ]
      },
      "Barterer": {
        "name": "Barterer",
        "count": 1,
        "file": "barterer",
        "description": [
          "You may discard 1 of your Objects to take 1 Object of your choice from the Armoury or Magic Emporium deck.",
          "Once a character has chosen to do so, discard this card."
        ]
      },
      "Beggar King": {
        "name": "Beggar King",
        "count": 1,
        "file": "beggar_king",
        "description": [
          "You may pay up to 3 gold. You must then roll 1 die and add 1 to the result for each gold you paid:",
          "1-2) You are cursed for your stinginess; turn into a Toad for 3 turns.",
          "3-4) You are thanked for your generosity.",
          "5-6) All other characters must give you 1 of their Objects, then discard this card."
        ]
      },
      "Cutpurse": {
        "name": "Cutpurse",
        "count": 1,
        "file": "cutpurse",
        "description": [
          "Roll 1 die. If the result is equal to or higher than your Craft, lose 1 gold. If it is lower than your Craft, gain an amount of gold equal to the difference, then discard this card."
        ]
      },
      "Dung Sweeper": {
        "name": "Dung Sweeper",
        "count": 2,
        "file": "dung_sweeper",
        "description": [
          "A Dung Sweeper offers you a job. If you accept, gain 3 gold, but you must miss your next turn doing the dirty work.",
          "Once a character has chosen to do so, discard this card."
        ]
      },
      "Grifter": {
        "name": "Grifter",
        "count": 1,
        "file": "grifter",
        "description": [
          "Roll 1 die (place anything you lose on this card):",
          "1-2) Lose 1 Object.",
          "3-4) Lose 1 gold.",
          "5-6) Take any Objects and gold on the Grifter, then discard this card.",
          "Objects on the Grifter do not count towards the number of cards on this space."
        ]
      },
      "Madcap": {
        "name": "Madcap",
        "count": 1,
        "file": "madcap",
        "description": [
          "The Madcap will remain here for the rest of the game. Roll 1 die and change to that alignment:",
          "1-2) Evil",
          "3-4) Neutral",
          "5-6) Good",
          "If you change into the same alignment, you may take another turn after this one."
        ]
      },
      "Philosopher": {
        "name": "Philosopher",
        "count": 1,
        "file": "philosopher_stranger",
        "description": [
          "You may pay 1 gold and miss 1 turn to gain 1 Craft. Once a character has chosen to do so, discard this card."
        ]
      },
      "Pied Piper": {
        "name": "Pied Piper",
        "count": 1,
        "file": "pied_piper",
        "description": [
          "Roll 2 dice and move the Piper that many spaces clockwise around the board.",
          "Any Enemies in a space the Piper moves through must move along with the Piper."
        ]
      },
      "Racketeer": {
        "name": "Racketeer",
        "count": 1,
        "file": "racketeer",
        "description": [
          "Roll 1 die.",
          "If the result is equal to or higher than your Craft, discard 1 of your Objects.",
          "If it is lower than your Craft, take 1 card from any shop deck for free, then discard this card."
        ]
      },
      "Shady Dealer": {
        "name": "Shady Dealer",
        "count": 1,
        "file": "shady_dealer",
        "description": [
          "Lose 1 gold. Then roll 1 die:",
          "1-3) You may pay 1 gold to roll again.",
          "4-6) Gain a Talisman; the Shady Dealer then vanishes to the discard pile."
        ]
      },
      "Spendthrift": {
        "name": "Spendthrift",
        "count": 1,
        "file": "spendthrift",
        "description": [
          "When revealed, roll 2 dice and place that much gold on this card.",
          "Once per visit, you may take 2 gold from this card. When all the gold has been taken, discard this card."
        ]
      },
      "Street Sage": {
        "name": "Street Sage",
        "count": 1,
        "file": "street_sage",
        "description": [
          "The Street Sage will remain here for the rest of the game.",
          "Draw 3 City Cards, place 1 facedown in front of you, and discard the other cards.",
          "You may place your facedown City Card on top of its deck at the start of any character's turn."
        ]
      },
      "Temporal Mage": {
        "name": "Temporal Mage",
        "count": 1,
        "file": "temporal_mage",
        "description": [
          "You may pay 3 gold to take 3 successive turns before play passes to the next player.",
          "Once a character has done so, discard this card."
        ]
      },
      "Weapon Master": {
        "name": "Weapon Master",
        "count": 1,
        "file": "weapon_master",
        "description": [
          "You may pay 1 gold and miss 1 turn to gain 1 Strength. Once a character has chosen to do so, discard this card."
        ]
      },
      "Demagogue": {
        "name": "Demagogue",
        "count": 1,
        "file": "demagogue",
        "description": [
          "You may change your alignment at will. However, you may only have 1 alignment at any given time.",
          "If you pray, you must ditch the Demagogue."
        ]
      },
      "Gremlin": {
        "name": "Gremlin",
        "count": 1,
        "file": "gremlin",
        "description": [
          "You must take the Gremlin as a Follower. Whenever you gain an Object you must first roll 1 die:",
          "1-2) Discard the Object and lose 1 life.",
          "3-4) The Object is ditched on your current space.",
          "5-6) You keep the Object and you may discard the Gremlin."
        ]
      },
      "Haggler": {
        "name": "Haggler",
        "count": 1,
        "file": "haggler",
        "description": [
          "You may trade with a character that you land on by exchanging any 1 Object of yours for 1 Object of theirs."
        ]
      },
      "Jailer": {
        "name": "Jailer",
        "count": 1,
        "file": "jailer",
        "description": [
          "Whenever you defeat a character whose alignment is different from your own, you may throw them in Jail instead of claiming your normal reward.",
          "If you are thrown in Jail, you may discard the Jailer to cancel the effect."
        ]
      },
      "Panhandler": {
        "name": "Panhandler",
        "count": 1,
        "file": "panhandler",
        "description": [
          "If you land on a character, that character must either give you 1 gold or 1 Object of their choice.",
          "The Panhandler then joins that character as a Follower."
        ]
      },
      "Physician": {
        "name": "Physician",
        "count": 1,
        "file": "physician",
        "description": [
          "At the start of your turn before you move, you may pay 1 gold to heal 1 life. You may do this once per turn."
        ]
      },
      "Scribe": {
        "name": "Scribe",
        "count": 1,
        "file": "scribe",
        "description": [
          "If you have 2 or more Spells, you may keep a Spell after you cast it and discard 1 of your other Spells in its place.",
          "The Scribe then wanders off to the discard pile."
        ]
      },
      "Sellsword": {
        "name": "Sellsword",
        "count": 1,
        "file": "sellsword",
        "description": [
          "If you pay 1 gold, the Sellsword will fight in your place with a Strength of 3. If the Sellsword wins, the creature is killed or the opposing character loses 1 life. If the Sellsword loses, he is killed and your turn immediately ends. Enemies killed may be taken as trophies."
        ]
      },
      "Trophy Hunter": {
        "name": "Trophy Hunter",
        "count": 1,
        "file": "trophy_hunter",
        "description": [
          "Add 1 to your attack score if your opponent matches any of your Wanted Posters.",
          "Whenever you claim the bounty on a Wanted Poster, you gain 1 additional gold."
        ]
      },
      "Urchin": {
        "name": "Urchin",
        "count": 1,
        "file": "urchin",
        "description": [
          "You may roll 2 dice for your movement in the City and add them together to determine how far you move."
        ]
      },
      "Brew Stein": {
        "name": "Brew Stein",
        "count": 1,
        "file": "brew_stein",
        "description": [
          "You do not lose a life in the Desert.",
          "You may discard the Stein during your turn to heal 1 life."
        ]
      },
      "Everfull Purse": {
        "name": "Everfull Purse",
        "count": 1,
        "file": "everfull_purse",
        "description": [
          "If you do not have any gold at the start of your turn, you may gain 1 gold."
        ]
      },
      "Broken Armour": {
        "name": "Broken Armour",
        "count": 1,
        "file": "broken_armour",
        "description": [
          "If you visit the Armoury, you may pay 2 gold and discard this card to take a Full Plate from the Armoury deck."
        ]
      },
      "Broken Sword": {
        "name": "Broken Sword",
        "count": 1,
        "file": "broken_sword",
        "description": [
          "If you visit the Armoury, you may pay 1 gold and discard this card to take a Greatsword from the Armoury deck."
        ]
      },
      "Crooked Scales": {
        "name": "Crooked Scales",
        "count": 1,
        "file": "crooked_scales",
        "description": [
          "Whenever you encounter a card or space and pay a total of 2 or more gold, you may pay 1 gold less."
        ]
      },
      "Hourglass": {
        "name": "Hourglass",
        "count": 1,
        "file": "hourglass",
        "description": [
          "If you are instructed to miss 1 or more turns, you may discard the Hourglass to cancel the effect.",
          "You may discard the Hourglass at the end of your turn to immediately take another turn."
        ]
      },
      "Assassins' Conclave": {
        "name": "Assassins' Conclave",
        "count": 1,
        "file": "assassins_conclave",
        "description": [
          "You may pay 1 gold to choose 1 faceup Enemy in any Region and take it as a trophy.",
          "Once a character has chosen to do so, discard this card."
        ]
      },
      "Black Market": {
        "name": "Black Market",
        "count": 2,
        "file": "black_market",
        "description": [
          "You may pay 1 gold to take 1 card from any shop deck, then roll 1 die:",
          "1-3) You must immediately discard the card, and you are thrown in jail.",
          "4-6) You are safe.",
          "Once a character has chosen to do so, discard this card."
        ]
      },
      "Cutbacks": {
        "name": "Cutbacks",
        "count": 1,
        "file": "cutbacks",
        "description": [
          "You may discard any of your Followers and gain 1 gold for each.",
          "Once a character has chosen to do so, discard this card."
        ]
      },
      "Den of Thieves": {
        "name": "Den of Thieves",
        "count": 1,
        "file": "den_of_thieves",
        "description": [
          "You may pay 1 gold to take 1 Object of your choice from another character.",
          "Once a character has chosen to do so, discard this card."
        ]
      },
      "Gambling Hall": {
        "name": "Gambling Hall",
        "count": 1,
        "file": "gambling_hall",
        "description": [
          "You may pay 1 gold to gamble. If you choose to do so, roll 1 die:",
          "1) Lose all of your gold.",
          "2) Lose 3 gold.",
          "3) Lose 1 gold.",
          "4) Gain 1 gold.",
          "5) Gain 3 gold.",
          "6) Gain 6 gold, then discard this card."
        ]
      },
      "Merchants' Quarter": {
        "name": "Merchants' Quarter",
        "count": 1,
        "file": "merchants_quarter",
        "description": [
          "You may buy 1 Object of your choice from the Purchase deck for 1 gold.",
          "Once a character has chosen to do so, discard this card."
        ]
      },
      "Pantheon": {
        "name": "Pantheon",
        "count": 1,
        "file": "pantheon",
        "description": [
          "Once per visit to the Pantheon, you may change your alignment. When all 3 alignments have been chosen, the Pantheon tumbles to the discard pile."
        ]
      },
      "Pawnshop": {
        "name": "Pawnshop",
        "count": 1,
        "file": "pawnshop",
        "description": [
          "The Pawnshop will remain here for the rest of the game.",
          "You may either sell any of your Objects for 1 gold each (place the Objects on this card) or buy any Objects on this card for 2 gold each.",
          "The Objects do not count towards the number of cards on this space."
        ]
      },
      "Rune Gate": {
        "name": "Rune Gate",
        "count": 1,
        "file": "rune_gate",
        "description": [
          "On your next turn, instead of your normal move, you may teleport to any other faceup Rune Gate or any Runes space.",
          "Once the Rune Gate has been used, it vanishes to the discard pile."
        ]
      },
      "Shortcut": {
        "name": "Shortcut",
        "count": 2,
        "file": "shortcut",
        "description": [
          "You may immediately move to any shop.",
          "Once a character has chosen to do so, discard this card."
        ]
      },
      "Six-Fates Inn": {
        "name": "Six-Fates Inn",
        "count": 1,
        "file": "six_fates_inn",
        "description": [
          "The Inn will remain here for the rest of the game. You may either roll 1 die with the same results as at the Tavern or buy a Water Bottle from the Purchase deck for 1 gold."
        ]
      },
      "Wanted List": {
        "name": "Wanted List",
        "count": 1,
        "file": "wanted_list",
        "description": [
          "Draw 4 Wanted Posters and place them on this card when revealed. Once per visit, you may gain 1 Wanted Poster of your choice from this card. When all 4 Posters have been taken, the Wanted List crumbles to the discard pile. The Posters do not count towards the number of cards on this space."
        ]
      },
      "Wishing Well": {
        "name": "Wishing Well",
        "count": 1,
        "file": "wishing_well",
        "description": [
          "You may pay 1 gold. If you choose to do so, roll 1 die and add 1 to the result for each fate you have:",
          "1-3) Nothing happens.",
          "4-6) Gain 1 fate.",
          "7+) Take 1 card from any shop deck for free; then discard this card."
        ]
      }
    }
  },
  "The Clockwork Kingdom": {
    "ADVENTURE": {
      "Aggressive Taxation": {
        "name": "Aggressive Taxation",
        "count": 1,
        "file": "aggressive_taxation",
        "description": [
          "For the next 5 rounds if any player would spend gold they must spend 1 additional gold."
        ]
      },
      "Animate Room": {
        "name": "Animate Room",
        "count": 1,
        "file": "animate_room",
        "description": [
          "You fight a Construct with Strength equal to the number of Objects in all discard piles. If you defeat the Construct, take an Object from any discard pile."
        ]
      },
      "Dangerous Contraband": {
        "name": "Dangerous Contraband",
        "count": 1,
        "file": "dangerous_contraband",
        "description": [
          "After several dangerous incidents, all Inventions have been deemed to be too dangerous for public use. All players must discard all of their Inventions or fight against a Guard with a Strength of 4."
        ]
      },
      "Dissonance": {
        "name": "Dissonance",
        "count": 1,
        "file": "dissonance",
        "description": [
          "For the next 3 rounds Harmonies can't trigger."
        ]
      },
      "Explosive Experiment": {
        "name": "Explosive Experiment",
        "count": 1,
        "file": "explosive_experiment",
        "description": [
          "You may spend any number of gold. For each gold spent, reveal 10 cards from the top of the Adventure deck. If you reveal equal to or less than 3 Objects, you may draw that many Materials and craft them into an Invention. Otherwise, lose 1 life for each additional Object drawn (above 3). Then discard all revealed cards."
        ]
      },
      "Harmonic Convergence": {
        "name": "Harmonic Convergence",
        "count": 1,
        "file": "harmonic_convergence",
        "description": [
          "For the next 3 rounds, all Harmonies will trigger when Inventions are crafted."
        ]
      },
      "Inventor's Guild": {
        "name": "Inventor's Guild",
        "count": 1,
        "file": "inventors_guild",
        "description": [
          "Starting with you and continuing clockwise, each player may put any number of Materials they own forward to this card. When a total of 3 Materials have been put forward, craft the cards together and give a copy of that card to each player equal to the number of Materials they put forward. If 3 Materials are not reached, discard any Materials put forward."
        ]
      },
      "Magical Pollution": {
        "name": "Magical Pollution",
        "count": 1,
        "file": "magical_pollution",
        "description": [
          "Each player in this Region must roll a die for each Invention they own, if the result is odd, discard that Invention."
        ]
      },
      "Malfunction": {
        "name": "Malfunction",
        "count": 1,
        "file": "malfunction",
        "description": [
          "Roll a die for each Invention you own, if the result is odd, lose 1 life and discard that Invention."
        ]
      },
      "Recycling": {
        "name": "Recycling",
        "count": 1,
        "file": "recycling",
        "description": [
          "Take all Materials from the Material discard pile and shuffle them. Place these cards on top of the Adventure deck. Then draw an additional card and encounter it."
        ]
      },
      "Clockwork Queen": {
        "name": "Clockwork Queen",
        "count": 1,
        "file": "clockwork_queen",
        "description": [
          "Clockwork Queen",
          "Add 1 to The Clockwork Queen's attack roll for each other card with \"Clockwork\" in its name in the same Region.",
          "When this Enemy is defeated, you may take 1 card from the top of the Material deck."
        ]
      },
      "Clockwork Sentinel": {
        "name": "Clockwork Sentinel",
        "count": 1,
        "file": "clockwork_sentinel",
        "description": [
          "Clockwork Sentinel",
          "The Sentinel cannot be evaded. Any character who enters this space during their move must end their movement and encounter this space.",
          "When this Enemy is defeated, you may take 1 card from the top of the Material deck."
        ]
      },
      "Bone Golem": {
        "name": "Bone Golem",
        "count": 1,
        "file": "bone_golem",
        "description": [
          "Bone Golem",
          "If you defeat the Bone Golem, roll 1 die. If you roll a 4, 5, or 6, the attack counts as a stand-off instead."
        ]
      },
      "Clockwork Cabinet": {
        "name": "Clockwork Cabinet",
        "count": 1,
        "file": "clockwork_cabinet",
        "description": [
          "Clockwork Cabinet",
          "If you defeat the Clockwork Cabinet in battle, you may keep it as a Follower instead of a trophy.",
          "While the Cabinet is your Follower, you may carry an extra 4 Objects.",
          "It will remain here until it is defeated."
        ]
      },
      "Clockwork Dragon": {
        "name": "Clockwork Dragon",
        "count": 1,
        "file": "clockwork_dragon",
        "description": [
          "Clockwork Dragon",
          "If you kill the Clockwork Dragon, you may gain a Talisman instead of taking it as a trophy.",
          "It will remain here until it is killed."
        ]
      },
      "Clockwork Knight": {
        "name": "Clockwork Knight",
        "count": 1,
        "file": "clockwork_knight",
        "description": [
          "Clockwork Knight",
          "When this Enemy is defeated, you may take 1 card from the top of the Material deck."
        ]
      },
      "Clockwork Soldier": {
        "name": "Clockwork Soldier",
        "count": 1,
        "file": "clockwork_soldier",
        "description": [
          "Clockwork Soldier",
          "When this Enemy is defeated, you may take 1 card from the top of the Material deck."
        ]
      },
      "Lava Golem": {
        "name": "Lava Golem",
        "count": 1,
        "file": "lava_golem",
        "description": [
          "Lava Golem",
          "If you are defeated and you own a Talisman, you do not lose a life."
        ]
      },
      "Mud Golem": {
        "name": "Mud Golem",
        "count": 1,
        "file": "mud_golem",
        "description": [
          "Mud Golem",
          "While in battle with the Mud Golem, ignore any effects from the space you are on."
        ]
      },
      "Paper Dragon": {
        "name": "Paper Dragon",
        "count": 1,
        "file": "paper_dragon",
        "description": [
          "Paper Dragon",
          "If Paper Dragon is the target of a Spell, discard it."
        ]
      },
      "Runic Renegade": {
        "name": "Runic Renegade",
        "count": 1,
        "file": "rune_renegade",
        "description": [
          "Runic Renegade",
          "Add 1 to the Runic Renegade's attack roll for each card with \"Clockwork\" in its name and each Invention in your inventory."
        ]
      },
      "Runic Fanatic": {
        "name": "Runic Fanatic",
        "count": 1,
        "file": "runic_fanatic",
        "description": [
          "Runic Fanatic",
          "Add 1 to the Runic Fanatic's attack roll for each card with \"Clockwork\" in its name and each Invention in your inventory."
        ]
      },
      "Sand Golem": {
        "name": "Sand Golem",
        "count": 1,
        "file": "sand_golem",
        "description": [
          "Sand Golem",
          "If you encounter the Sand Golem while on a Desert space, its Strength is doubled."
        ]
      },
      "Trash Heap Golem": {
        "name": "Trash Heap Golem",
        "count": 1,
        "file": "trash_heap_golem",
        "description": [
          "Trash Heap Golem",
          "The Trash Heap Golem adds 1 to its attack roll for each Object in the discard pile. If you kill it, take any Object from the Material deck discard pile, but you must discard it instead of taking it as a trophy."
        ]
      },
      "Arcane Automaton": {
        "name": "Arcane Automaton",
        "count": 1,
        "file": "arcane_golem",
        "description": [
          "Arcane Automaton",
          "Before engaging the Arcane Automaton in psychic combat, you must place all of your Spells onto it. The Arcane Automaton adds 1 to its attack score for each Spell placed on it."
        ]
      },
      "Clockwork Spider": {
        "name": "Clockwork Spider",
        "count": 1,
        "file": "clockwork_spider",
        "description": [
          "Clockwork Spider",
          "When you enter the space with the Clockwork Spider, you must end your movement.",
          "When this Enemy is defeated, you may take 1 card from the top of the Material deck."
        ]
      },
      "Paper Doll": {
        "name": "Paper Doll",
        "count": 1,
        "file": "paper_doll",
        "description": [
          "Paper Doll",
          "If Paper Doll is the target of a Spell, discard it."
        ]
      },
      "Runic Revolutionary": {
        "name": "Runic Revolutionary",
        "count": 1,
        "file": "runic_revolutionary",
        "description": [
          "Runic Revolutionary",
          "Add 1 to the Runic Revolutionary's attack roll for each card with \"Clockwork\" in its name and each Invention in your inventory."
        ]
      },
      "Rust Automaton": {
        "name": "Rust Automaton",
        "count": 1,
        "file": "rust_golem",
        "description": [
          "Rust Automaton",
          "Any Weapons or Armour used to fight the Rust Automaton must be discarded after the psychic combat is resolved."
        ]
      },
      "Arc Sail Pilot": {
        "name": "Arc Sail Pilot",
        "count": 1,
        "file": "arc_sail_pilot",
        "description": [
          "You may pay 1 gold for the Arc Sail Pilot to take you to any other available space on the board outside of the Inner Region, the Arc Sail Pilot will also move to that space."
        ]
      },
      "Clockwork Canary": {
        "name": "Clockwork Canary",
        "count": 1,
        "file": "clockwork_canary",
        "description": [
          "Secretly check the top card of the Adventure deck. If it is an Object, you may take it. If it is an Event, discard the Canary."
        ]
      },
      "Clockwork Guardian": {
        "name": "Clockwork Guardian",
        "count": 1,
        "file": "clockwork_guardian",
        "description": [
          "Roll 1 die, on an odd result you lose a turn. On an even result you take an additional turn, the Guardian then crumbles into dust."
        ]
      },
      "Clockwork Spellcrafter": {
        "name": "Clockwork Spellcrafter",
        "count": 1,
        "file": "clockwork_spellcrafter",
        "description": [
          "You may discard 3 Spells. If you do, take any Spell you wish from the Spell deck, shuffle it, then the Spellcrafter crumbles into dust (discard). Otherwise, draw 1 Spell (if your Craft allows)."
        ]
      },
      "Excavator": {
        "name": "Excavator",
        "count": 1,
        "file": "excavator",
        "description": [
          "The Excavator offers you a job, if you accept reveal 10 cards from the top of the Adventure deck then miss your next turn. For each Object revealed, take 1 Material from the top of the Material deck. If no Objects are revealed the mine has dried up and the Excavator retires to the discard pile. Then discard the revealed cards."
        ]
      },
      "Jewel Crafter": {
        "name": "Jewel Crafter",
        "count": 1,
        "file": "jewel_crafter",
        "description": [
          "You may pay 1 gold to turn one of your Materials into an Invention. If you don't own any Materials, he moves shop looking for business in the discard pile."
        ]
      },
      "Scrap Salvager": {
        "name": "Scrap Salvager",
        "count": 1,
        "file": "scrap_salvager",
        "description": [
          "You may pay 1 gold and take any Material in the Material deck discard pile. If there are no Materials in that discard pile, then discard this card."
        ]
      },
      "Trinketeer": {
        "name": "Trinketeer",
        "count": 1,
        "file": "trinketeer",
        "description": [
          "You may pay 1 gold and place a Trinketeer token on any non-Trinket Object you own. That card is a Trinket. If you don't own any non-Trinket Objects he moves shop, looking for business in the discard pile."
        ]
      },
      "Amateur Inventor": {
        "name": "Amateur Inventor",
        "count": 1,
        "file": "amateur_inventor",
        "description": [
          "At the start of your turn, you may give the Amateur Inventor a Material of your choice in order to discard one of your Inventions and craft a new card from the top 3 Materials from the Material deck."
        ]
      },
      "Clockwork Defender": {
        "name": "Clockwork Defender",
        "count": 3,
        "file": "clockwork_defender",
        "description": [
          "If you would lose a battle you may discard the Clockwork Defender, that battle becomes a stand-off instead."
        ]
      },
      "Clockwork Dog": {
        "name": "Clockwork Dog",
        "count": 1,
        "file": "clockwork_dog",
        "description": [
          "If you engage an Enemy in battle and you have a Bone Material card, you may ditch the Bone after you make your attack roll to automatically win the battle regardless of your attack score."
        ]
      },
      "Runic Enthusiast": {
        "name": "Runic Enthusiast",
        "count": 2,
        "file": "runic_enthusiast",
        "description": [
          "No character owning an Invention or a card with \"Clockwork\" in the name may take the Runic Enthusiast as a Follower. Add 2 to your Strength and Craft in battle or psychic combat against Construct Enemies and players with an Invention."
        ]
      },
      "Spare Part Hunter": {
        "name": "Spare Part Hunter",
        "count": 1,
        "file": "spare_part_hunter",
        "description": [
          "This animal companion has a nose for shiny Objects. Whenever you exchange any Spare Parts card, you may choose to take another Material."
        ]
      },
      "Clockwork Hand": {
        "name": "Clockwork Hand",
        "count": 1,
        "file": "clockwork_hand",
        "description": [
          "Add 1 to your Strength in battle. When instructed to miss a turn you may discard this card instead."
        ]
      },
      "Inventor's Kit": {
        "name": "Inventor's Kit",
        "count": 1,
        "file": "inventors_kit",
        "description": [
          "You may craft Objects with 1 Ingredient less to a minimum of one."
        ]
      },
      "Spare Parts": {
        "name": "Spare Parts",
        "count": 15,
        "file": "spare_parts",
        "description": [
          "Immediately draw and take the top card of the Material deck then discard this card."
        ]
      },
      "Spare Parts Cache": {
        "name": "Spare Parts Cache",
        "count": 4,
        "file": "spare_parts_cache",
        "description": [
          "Immediately draw and take the top two cards of the Material deck then discard this card."
        ]
      },
      "Wind-Up Mouse": {
        "name": "Wind-Up Mouse",
        "count": 2,
        "file": "wind_up_mouse",
        "description": [
          "At the start of your turn, you may ditch this card then roll one die and move the Mouse that many spaces clockwise. While it's moving, if the Mouse lands on the same space as a character, that character must ditch one random Object on their space."
        ]
      },
      "Auction House": {
        "name": "Auction House",
        "count": 2,
        "file": "auction_house",
        "description": [
          "Reveal the top card of the Material deck. Starting with you, each player may place a bid equal to the amount of gold they own that is also higher than the last bid placed. This continues until each player won't bid any higher. The player that bid the highest takes the Material, and spends gold equal to the bid.",
          "If nobody places a bid, the Auction House closes down (discard)."
        ]
      },
      "Cradle of Innovation": {
        "name": "Cradle of Innovation",
        "count": 2,
        "file": "cradle_of_innovation",
        "description": [
          "Choose another player, that player moves to your space. Draw 2 cards from the top of the Material deck. The Materials are crafted into an Invention which each player will get a copy of. Then fight each other in psychic combat. The winner instead of regular rewards will take all Inventions from the other player. Then discard this card."
        ]
      },
      "Runic Refuge": {
        "name": "Runic Refuge",
        "count": 1,
        "file": "runic_refuge",
        "description": [
          "Hideout of the Runic Rebellion. If you have any Inventions, discard them all and draw a Spell for each discarded in this way (if your Craft allows), or fight the Runic Rebellion with a Strength of 12. If you defeat the Rebellion, Gain 1 Strength and 1 Craft then discard this card. If you don't have any Inventions you may draw 1 Spell (if your Craft allows)."
        ]
      },
      "Scrapheap": {
        "name": "Scrapheap",
        "count": 1,
        "file": "scrapheap",
        "description": [
          "A great pile of scrap Materials are watched over by the Scrap Merchants. For a price they will let you take something away. Discard 1 of your Materials and draw the top 2 cards from the Material deck, you may then take one away with you and discard the other."
        ]
      }
    },
    "SPELLS": {
      "Animate Object": {
        "name": "Animate Object",
        "count": 1,
        "file": "animate_object",
        "description": [
          "Cast when you are about to engage in battle if you are wielding a Weapon. Choose an equipped Weapon, it fights in your place with Strength equal to what it adds in battle to a minimum of 1. If the Weapon wins the battle the creature is killed or the opposing character must lose 1 life. If the Weapon loses, your turn immediately ends. Enemies killed may be taken as trophies."
        ]
      },
      "Arcaneum Tempus": {
        "name": "Arcaneum Tempus",
        "count": 1,
        "file": "arcaneum_tempus",
        "description": [
          "Cast at any time. Until the end of the round, characters cannot miss turns (though their turns will end as normal if instructed to miss a turn) and characters cannot gain extra turns."
        ]
      },
      "Clockwork Cadence": {
        "name": "Clockwork Cadence",
        "count": 1,
        "file": "clockwork_cadence",
        "description": [
          "Cast when a player is about to craft an Invention. Until the end of the turn all Materials will apply Harmony effects."
        ]
      },
      "Clockwork Simulacrum": {
        "name": "Clockwork Simulacrum",
        "count": 1,
        "file": "clockwork_simulacrum",
        "description": [
          "Cast at any time on an Invention a character on your space owns. Make a copy of the Invention and take it."
        ]
      },
      "Force Meld": {
        "name": "Force Meld",
        "count": 1,
        "file": "force_meld",
        "description": [
          "Cast on any other character at any time. Choose up to 3 Materials that character owns and craft them into an Invention which that character must take."
        ]
      },
      "Metashift": {
        "name": "Metashift",
        "count": 1,
        "file": "metashift",
        "description": [
          "Cast at the start of another character's turn, you and that character swap the Materials you own."
        ]
      },
      "Reversion": {
        "name": "Reversion",
        "count": 1,
        "file": "reversion",
        "description": [
          "Cast at the start of a character's turn. Dismantle an Invention that character has, take the Materials used to craft the Invention in the Material discard pile if possible and add them to that character."
        ]
      },
      "Tactile Telekinesis": {
        "name": "Tactile Telekinesis",
        "count": 1,
        "file": "tactile_telekinesis",
        "description": [
          "Use your Craft instead of Strength in battle until the end of your turn."
        ]
      }
    },
    "MATERIAL": {
      "Adamantite": {
        "name": "Adamantite",
        "count": 1,
        "file": "mat_adamantite",
        "description": [
          "'This Object cannot be dismantled.'"
        ]
      },
      "Blackpowder": {
        "name": "Blackpowder",
        "count": 1,
        "file": "mat_blackpowder",
        "description": [
          "'Once per battle you may dismantle this card to add 5 to your attack roll.'",
          "^Harmony, Eternal Fire:^",
          "'Dismantle this card when taken and lose 1 life.'"
        ]
      },
      "Bone": {
        "name": "Bone",
        "count": 3,
        "file": "mat_bone",
        "description": [
          "The best treat for a best friend."
        ]
      },
      "Bronze": {
        "name": "Bronze",
        "count": 5,
        "file": "mat_bronze",
        "description": [
          "'^Weapon^ Add 1 to your Strength during battle.'"
        ]
      },
      "Cold Iron": {
        "name": "Cold Iron",
        "count": 2,
        "file": "mat_cold_iron",
        "description": [
          "'^Weapon^ Add 1 to your Strength during battle. If you defeat another character in battle or psychic combat they must miss their next turn.'"
        ]
      },
      "Crystal": {
        "name": "Crystal",
        "count": 3,
        "file": "mat_crystal",
        "description": [
          "'Your Spell limit is increased by 1.'"
        ]
      },
      "Dark Steel": {
        "name": "Dark Steel",
        "count": 2,
        "file": "mat_dark_steel",
        "description": [
          "'^Weapon^ Add 2 to your Strength during battle.'",
          "^Harmony, Bronze/Cold Iron:^",
          "'^Weapon^ Add 4 to your Strength during battle.'"
        ]
      },
      "Demonic Hide": {
        "name": "Demonic Hide",
        "count": 2,
        "file": "mat_demonic_hide",
        "description": [
          "'^Armour^ If you are defeated in psychic combat and just lost a life, roll 1 die. On a 5+, you are protected, but still lost the psychic combat.'",
          "^Harmony, Holy Blood:^",
          "'Dismantle this card when you take it.",
          "You may discard any Followers to add 1 to your Strength and Craft until end of turn.'"
        ]
      },
      "Draconic Scale": {
        "name": "Draconic Scale",
        "count": 2,
        "file": "mat_draconic_scale",
        "description": [
          "'You may use this card when you engage a character in battle. Roll 1 die, on a 6 they lose 1 life.'",
          "^Harmony, Mythril/Leather:^",
          "'^Armour^ If you are defeated in battle and just lost a life, roll 1 die. On a 4+, you are protected, but still lost the battle.",
          "You are not affected by a Dragon's breath attack.'"
        ]
      },
      "Ent Wood": {
        "name": "Ent Wood",
        "count": 2,
        "file": "mat_ent_wood",
        "description": [
          "'^Weapon^ Add 1 to your Craft during psychic combat.'",
          "^Harmony, Wood:^",
          "'^Weapon^ Add 3 to your Craft during psychic combat.'"
        ]
      },
      "Eternal Fire": {
        "name": "Eternal Fire",
        "count": 1,
        "file": "mat_eternal_fire",
        "description": [
          "'This Object is a Talisman.'"
        ]
      },
      "Faerie Dust": {
        "name": "Faerie Dust",
        "count": 2,
        "file": "mat_faerie_dust",
        "description": [
          "'^Trinket:^ This Object does not count towards your carrying limit.'",
          "^Harmony, Nymph Hair:^",
          "'^Trinket:^",
          "If you land on the Woods or the Forest you replenish 1 fate.'"
        ]
      },
      "Geode": {
        "name": "Geode",
        "count": 4,
        "file": "mat_geode",
        "description": [
          "'If you visit the Alchemist in the City, you may discard this card to gain 4 gold.'"
        ]
      },
      "Glimmer Cloth": {
        "name": "Glimmer Cloth",
        "count": 1,
        "file": "mat_glimmer_cloth",
        "description": [
          "'You may evade in battle or psychic combat.'",
          "^Harmony, Mythril:^",
          "'When you attack a character or creature in battle they may not roll a die to add to their Strength.'"
        ]
      },
      "Gold": {
        "name": "Gold",
        "count": 1,
        "file": "mat_gold",
        "description": [
          "'If you lose an attack against another character, they must take this instead of their normal reward.'"
        ]
      },
      "Holy Blood": {
        "name": "Holy Blood",
        "count": 2,
        "file": "mat_holy_blood",
        "description": [
          "'^Weapon^ Adds 3 in battle or psychic combat against Demons, Dragons, Spirits and Undead'.",
          "^Harmony, Demonic Hide:^",
          "'Dismantle this card when you take it.",
          "^Weapon^ Adds 3 in battle or psychic combat against Demons, Dragons, Spirits and Undead'."
        ]
      },
      "Ivory": {
        "name": "Ivory",
        "count": 1,
        "file": "mat_ivory",
        "description": [
          "'When you draw an Enemy, you may discard it and replace it with any other faceup Enemy on the board with higher Strength or Craft respectively.'"
        ]
      },
      "Leather": {
        "name": "Leather",
        "count": 5,
        "file": "mat_leather",
        "description": [
          "'^Armour^ If you are defeated in battle and just lost a life, roll 1 die. If you roll a 6+, you did not lose that life, though you still lost the battle.'"
        ]
      },
      "Mythril": {
        "name": "Mythril",
        "count": 1,
        "file": "mat_mythril",
        "description": [
          "'^Armour^ If you are defeated in battle and just lost a life, roll 1 die. If you roll a 4+, you did not lose that life, though you still lost the battle.'"
        ]
      },
      "Nymph Hair": {
        "name": "Nymph Hair",
        "count": 2,
        "file": "mat_nymph_hair",
        "description": [
          "'If you would gain a fate gain an additional fate.'"
        ]
      },
      "Parchment": {
        "name": "Parchment",
        "count": 4,
        "file": "mat_parchment",
        "description": [
          "'Add 1 to your Craft during psychic combat.'",
          "^Harmony, Crystal/Rune Stone:^",
          "'Whenever you draw a Spell you do not wish to keep, you may discard it and draw another one to replace it, which you must keep.'"
        ]
      },
      "Pegasus Feather": {
        "name": "Pegasus Feather",
        "count": 1,
        "file": "mat_pegasus_feather",
        "description": [
          "'At the start of your turn you may cross the Storm River instead of your normal move.'"
        ]
      },
      "Soul Stone": {
        "name": "Soul Stone",
        "count": 1,
        "file": "mat_phantom_stone",
        "description": [
          "'When taken this card becomes a Follower instead of an Object.'",
          "^Harmony, Demonic Hide:^",
          "'When taken this card becomes a Follower instead of an Object.",
          "Add 3 to your attack roll in battle or psychic combat.'"
        ]
      },
      "Resonant Quartz": {
        "name": "Resonant Quartz",
        "count": 1,
        "file": "mat_resonant_quartz",
        "description": [
          "When applied as a Material, this adds no new effects to the new card but this will trigger Harmonies on the other Materials used."
        ]
      },
      "Rune Stone": {
        "name": "Rune Stone",
        "count": 3,
        "file": "mat_rune_stone",
        "description": [
          "'^Weapon^ Add 1 to your Craft during psychic combat.",
          "If you win in psychic combat with this equipped you may take a Spell card.'",
          "^Harmony, Rune Stone:^",
          "'You may gain 1 Spell at the start of your turn (if your Craft allows).'"
        ]
      },
      "Storm Core": {
        "name": "Storm Core",
        "count": 2,
        "file": "mat_stormcore",
        "description": [
          "'You may dismantle this card to take an additional turn after this one.'",
          "^Harmony, Cold Iron:^",
          "'You may dismantle this card to immediately end your turn, then take an additional turn after this one.'"
        ]
      },
      "Tanglethorn": {
        "name": "Tanglethorn",
        "count": 1,
        "file": "mat_tanglethorn",
        "description": [
          "'A sharp exterior surrounds the Object.'",
          "^Harmony, Blackpowder:^",
          "'Once per battle, you may dismantle this card to add 3 to your attack roll.'"
        ]
      },
      "Venom": {
        "name": "Venom",
        "count": 2,
        "file": "mat_venom",
        "description": [
          "'If you defeat a character in battle or psychic combat and cause them to lose a life, you may force them to lose 1 additional life.'",
          "^Harmony, Tanglethorn:^",
          "'If you are defeated by a character in battle and would lose a life you force that character to lose 1 life as well.'"
        ]
      },
      "Void Rock": {
        "name": "Void Rock",
        "count": 1,
        "file": "mat_void_rock",
        "description": [
          "'You are immune to Spells (except the Command Spell) and you cannot cast Spells.'",
          "^Harmony, Rune Stone/Ent Wood/Crystal:^",
          "'You are immune to Spells (except the Command Spell).'"
        ]
      },
      "Wood": {
        "name": "Wood",
        "count": 4,
        "file": "mat_wood",
        "description": [
          "A strong and stable chunk of timber."
        ]
      }
    }
  },
  "The Dragon": {
    "GRILIPUS": {
      "Deadly Rivals": {
        "name": "Deadly Rivals",
        "count": 1,
        "file": "deadly_rivals",
        "description": [
          "Choose 2 Dragons from any Regions and discard them, along with this card. If there are less than 2 Dragons on the board, discard this card without any effect."
        ]
      },
      "Dragon Decree": {
        "name": "Dragon Decree",
        "count": 1,
        "file": "dragon_decree",
        "description": [
          "Draw and place 1 card from the Dragon King's deck faceup on each space in this Region that has a dragon scale (discard any Events without resolving their effect), then discard this card.",
          "If Grilipus is the Dragon King, this Event affects every Region."
        ]
      },
      "Dragon Fury": {
        "name": "Dragon Fury",
        "count": 1,
        "file": "dragon_fury",
        "description": [
          "For 2 rounds, characters draw 2 dragon tokens at the start of their turns instead of only 1 dragon token, then discard this card."
        ]
      },
      "Dragon Sleep": {
        "name": "Dragon Sleep",
        "count": 1,
        "file": "dragon_sleep",
        "description": [
          "Place a sleep token on all Dragons in every Region that do not already have a sleep token, then discard this card."
        ]
      },
      "Temple Raid": {
        "name": "Temple Raid",
        "count": 2,
        "file": "temple_raid",
        "description": [
          "Draw 4 cards from the Dragon King's deck and place them faceup on the Temple (discard any Events without resolving their effects), then discard this card."
        ]
      },
      "Sacrificial Stone": {
        "name": "Sacrificial Stone",
        "count": 1,
        "file": "sacrificial_stone",
        "description": [
          "The Stone will remain here for the rest of the game. Draw 1 card from the Adventure deck and place it on this space. If you draw a Dragon, you are killed. Otherwise encounter the card normally."
        ]
      },
      "Amethyst Dragon": {
        "name": "Amethyst Dragon",
        "count": 1,
        "file": "amethyst_dragon",
        "description": [
          "Amethyst Dragon",
          "A powerful Amethyst Dragon uses its vast arcane skill to dominate this Region. It will remain here until it is killed."
        ]
      },
      "Arboreal Dragon": {
        "name": "Arboreal Dragon",
        "count": 1,
        "file": "arboreal_dragon",
        "description": [
          "Arboreal Dragon",
          "If you kill the Dragon, you may gain your full complement of Spells, according to your current Craft. It will remain here until it is killed."
        ]
      },
      "Carrion Drake": {
        "name": "Carrion Drake",
        "count": 1,
        "file": "carrion_drake",
        "description": [
          "Carrion Drake",
          "If you are defeated, you do not lose a life. Instead, you must discard all of your trophies. It will remain here until it is killed."
        ]
      },
      "Dracolich": {
        "name": "Dracolich",
        "count": 1,
        "file": "dracolich",
        "description": [
          "Dracolich",
          "If you are defeated, in addition to losing 1 life, place 1 life counter on this card. If the Dracolich is defeated and has any life counters, it is not killed and it loses 1 life counter instead. It will remain here until it is killed."
        ]
      },
      "Emerald Dragon": {
        "name": "Emerald Dragon",
        "count": 1,
        "file": "emerald_dragon",
        "description": [
          "Emerald Dragon",
          "The Dragon cannot be evaded. It will remain here until it is killed."
        ]
      },
      "Green Dragon": {
        "name": "Green Dragon",
        "count": 2,
        "file": "green_dragon",
        "description": [
          "Green DragonIf you are defeated, you do not lose a life. Instead, you must place all of your Spells on this card faceup. If you kill the Dragon, you may take any Spells on this card, if your Craft allows, then discard the rest. The Spells do not count towards the number of cards on this space. It will remain here until it is killed."
        ]
      },
      "Mist Dragon": {
        "name": "Mist Dragon",
        "count": 1,
        "file": "mist_dragon",
        "description": [
          "Mist Dragon",
          "Before you engage the Dragon in psychic combat, roll 2 dice. You must use the lowest result for your attack roll and the Dragon uses the highest result for its attack roll. It will remain here until it is killed."
        ]
      },
      "Nether Drake": {
        "name": "Nether Drake",
        "count": 1,
        "file": "nether_drake",
        "description": [
          "Nether Drake",
          "If you pay a fate to reroll your attack roll and you roll a lower result, you are killed. It will remain here until it is killed."
        ]
      },
      "Plague Dragon": {
        "name": "Plague Dragon",
        "count": 1,
        "file": "plague_dragon",
        "description": [
          "Plague Dragon",
          "Before you engage the Dragon in psychic combat, it makes a breath attack; roll 1 die. If the result is equal to or higher than your Strength you lose 1 Strength. It will remain here until it is killed."
        ]
      },
      "Shadow Dragon": {
        "name": "Shadow Dragon",
        "count": 1,
        "file": "shadow_dragon",
        "description": [
          "Shadow Dragon",
          "Before you engage the Dragon in psychic combat, it makes a breath attack; roll 1 die. If the result is equal to or higher than your Strength, you must subtract the result from your attack score. It will remain here until it is killed."
        ]
      },
      "Slumbering Dragon": {
        "name": "Slumbering Dragon",
        "count": 1,
        "file": "slumbering_dragon",
        "description": [
          "Slumbering Dragon",
          "Place a sleep token on the Dragon when revealed. It will remain here until it is killed."
        ]
      },
      "Spectral Dragon": {
        "name": "Spectral Dragon",
        "count": 1,
        "file": "spectral_dragon",
        "description": [
          "Spectral Dragon",
          "Before you engage the Dragon in psychic combat, it makes a breath attack; roll 1 die. If the result is equal to or higher than your Strength, you must discard all of your Spells. It will remain here until it is killed."
        ]
      },
      "Swamp Dragon": {
        "name": "Swamp Dragon",
        "count": 1,
        "file": "swamp_dragon",
        "description": [
          "Swamp Dragon",
          "Before you engage the Dragon in psychic combat, it makes a breath attack; roll 1 die. If the result is equal to or higher than your Strength, you must move 1 space next turn instead of moving normally. It will remain here until it is killed."
        ]
      },
      "Vampiric Dragon": {
        "name": "Vampiric Dragon",
        "count": 1,
        "file": "vampiric_dragon",
        "description": [
          "Vampiric Dragon",
          "If you are defeated, in addition to losing 1 life, the Dragon will kill 1 of your Followers at random. If you have none, you lose 1 additional life instead. It will remain here until it is killed."
        ]
      },
      "Vapour Dragon": {
        "name": "Vapour Dragon",
        "count": 1,
        "file": "vapour_dragon",
        "description": [
          "Vapour Dragon",
          "Before you engage the Dragon in psychic combat, it makes a breath attack; roll 1 die. If the result is equal to or higher than your Strength you must miss your next turn. It will remain here until it is killed."
        ]
      },
      "Venomous Dragon": {
        "name": "Venomous Dragon",
        "count": 1,
        "file": "venomous_dragon",
        "description": [
          "Venomous Dragon",
          "Before you engage the Dragon in psychic combat, it makes a breath attack; roll 1 die. If the result is equal to or higher than your Strength you lose 2 additional life if you are defeated. It will remain here until it is killed."
        ]
      },
      "Woodland Drake": {
        "name": "Woodland Drake",
        "count": 1,
        "file": "woodland_drake",
        "description": [
          "Woodland Drake",
          "If the Dragon is encountered in the Woods, add 3 to its attack roll. It will remain here until it is killed."
        ]
      },
      "Wyrmling": {
        "name": "Wyrmling",
        "count": 2,
        "file": "wyrmling",
        "description": [
          "Wyrmling",
          "If you attack and do not kill the Wyrmling, move this card to another Dragon of your choice. If there are no other Dragons on the board, it will flee to the discard pile instead."
        ]
      },
      "Zombie Dragon": {
        "name": "Zombie Dragon",
        "count": 1,
        "file": "zombie_dragon",
        "description": [
          "Zombie Dragon",
          "A dreadful Zombie Dragon is terrorising this area. It will remain here until it is killed."
        ]
      },
      "Grilipus Druid": {
        "name": "Grilipus Druid",
        "count": 3,
        "file": "grilipus_druid",
        "description": [
          "Grilipus Druid",
          "If Grilipus is the Dragon King, add 3 to the Cultist's attack roll. He will remain here until he is killed."
        ]
      },
      "Grilipus Druidess": {
        "name": "Grilipus Druidess",
        "count": 2,
        "file": "grilipus_druidess",
        "description": [
          "Grilipus Druidess",
          "If Grilipus is the Dragon King, add 3 to the Cultist's attack roll. She will remain here until she is killed."
        ]
      },
      "Grilipus Shaman": {
        "name": "Grilipus Shaman",
        "count": 4,
        "file": "grilipus_shaman",
        "description": [
          "Grilipus Shaman",
          "If Grilipus is the Dragon King, add 3 to the Cultist's attack roll. He will remain here until he is killed."
        ]
      },
      "Celestial Dragon": {
        "name": "Celestial Dragon",
        "count": 1,
        "file": "celestial_dragon",
        "description": [
          "You may either heal up to your life value or replenish fate up to your fate value. The Dragon then flies off to the discard pile."
        ]
      },
      "Spell Caller": {
        "name": "Spell Caller",
        "count": 1,
        "file": "spell_caller",
        "description": [
          "The Spell Caller will remain here for the rest of the game. You may take the top Spell from the discard pile, if your Craft allows.",
          "You cannot cast the Spell during the same round that you took it from the discard pile."
        ]
      },
      "Sprite Dragon": {
        "name": "Sprite Dragon",
        "count": 1,
        "file": "sprite_dragon",
        "description": [
          "Draw 4 Spells and place them on this card faceup when revealed. Once per visit, you may take a Spell of your choice from this card, if your Craft allows. When all 4 Spells have been taken, the Dragon flies off to the discard pile. The Spells do not count towards the number of cards on this space."
        ]
      },
      "St. George": {
        "name": "St. George",
        "count": 1,
        "file": "st_george",
        "description": [
          "You may move St. George to any space with a Dragon Card. You must then choose 1 Dragon Card on that space and discard it."
        ]
      },
      "Dragonet": {
        "name": "Dragonet",
        "count": 1,
        "file": "dragonet",
        "description": [
          "Add your Craft value to your Strength during battle with Dragons."
        ]
      },
      "Mystic Dragon": {
        "name": "Mystic Dragon",
        "count": 1,
        "file": "mystic_dragon",
        "description": [
          "At the start of your turn, you may gain 1 Spell, if your Craft allows."
        ]
      },
      "Verdant Witch": {
        "name": "Verdant Witch",
        "count": 1,
        "file": "verdant_witch",
        "description": [
          "Whenever you draw Spells, you may draw one more card than required. You must then discard one Spell that you do not wish to keep."
        ]
      },
      "Woodland Elf": {
        "name": "Woodland Elf",
        "count": 1,
        "file": "woodland_elf",
        "description": [
          "Instead of rolling the die for your move, you may teleport to the Woods in any Region."
        ]
      },
      "Dragonfire Skull": {
        "name": "Dragonfire Skull",
        "count": 1,
        "file": "dragonfire_skull",
        "description": [
          "If you engage a character or creature in battle or psychic combat, you may discard the Skull after you make your attack roll to automatically win the battle or psychic combat regardless of your attack score."
        ]
      },
      "Dragonskull Wand": {
        "name": "Dragonskull Wand",
        "count": 1,
        "file": "dragonskull_wand",
        "description": [
          "You may discard one of your dragon scales to gain your full complement of Spells, according to your current Craft."
        ]
      },
      "Dragon Charm": {
        "name": "Dragon Charm",
        "count": 1,
        "file": "dragon_charm",
        "description": [
          "When you have just completed your move, you may move one dragon scale in the same Region to your space. You may only do this once per round.",
          "You may discard one of your dragon scales to evade any Dragons until the end of the turn."
        ]
      },
      "Dragon Lore": {
        "name": "Dragon Lore",
        "count": 1,
        "file": "dragon_lore",
        "description": [
          "Whenever you draw Dragon Cards, you may discard one card of your choice that you do not wish to encounter and draw one more card from the same deck to replace it, which you must encounter.",
          "If you are defeated by a Cultist, you must ditch the Dragon Lore."
        ]
      },
      "Psionic Wand": {
        "name": "Psionic Wand",
        "count": 1,
        "file": "psionic_wand",
        "description": [
          "You may use your Craft instead of your Strength during battle."
        ]
      },
      "Wand of Terror": {
        "name": "Wand of Terror",
        "count": 1,
        "file": "wand_of_terror",
        "description": [
          "You may use the Wand when you are about to engage an Enemy in battle or psychic combat. Roll 2 dice. If the score is equal to or higher than the Enemy's Strength or Craft, move the Enemy to any other space in this Region. If it is lower, resolve the attack normally."
        ]
      },
      "Cave of Bones": {
        "name": "Cave of Bones",
        "count": 1,
        "file": "cave_of_bones",
        "description": [
          "The Cave will remain here for the rest of the game. Draw 1 dragon token. If you draw a dragon scale that matches the Dragon King, you may immediately claim it. Otherwise resolve the dragon token normally."
        ]
      },
      "Dragonspire": {
        "name": "Dragonspire",
        "count": 1,
        "file": "dragonspire",
        "description": [
          "The Dragonspire will remain here for the rest of the game. Roll 1 die. You may add 1 to the score for each dragon scale in this Region and for each dragon scale you have:",
          "1-7) Suffer the Dragon Rage of the Dragon King",
          "8-14) Draw 1 dragon token",
          "15-21) Move to the Plain of Peril",
          "22+) Move to the Crown of Command"
        ]
      },
      "Grilipus Coven": {
        "name": "Grilipus Coven",
        "count": 1,
        "file": "grilipus_coven",
        "description": [
          "The Coven will remain here for the rest of the game. You may discard one of your Spells to claim one dragon scale from any Draconic Lord Card. If you do not discard a Spell, you must draw a dragon token instead."
        ]
      },
      "Tranquil Glade": {
        "name": "Tranquil Glade",
        "count": 1,
        "file": "tranquil_glade",
        "description": [
          "The Glade will remain here for the rest of the game. You may miss your next turn to heal life up to your life value."
        ]
      },
      "Verdant Altar": {
        "name": "Verdant Altar",
        "count": 1,
        "file": "verdant_altar",
        "description": [
          "The Altar will remain here for the rest of the game. Roll 2 dice and pray here with the same results as at the Temple. If you are enslaved, you must miss your next turn instead.",
          "If Grilipus is the Dragon King, you may add up to 3 to the score."
        ]
      }
    },
    "VARTHRAX": {
      "Castle Raid": {
        "name": "Castle Raid",
        "count": 2,
        "file": "castle_raid",
        "description": [
          "Draw 4 cards from the Dragon King's deck and place them faceup on the Castle (discard any Events without resolving their effects), then discard this card."
        ]
      },
      "Deadly Rivals": {
        "name": "Deadly Rivals",
        "count": 1,
        "file": "deadly_rivals",
        "description": [
          "Choose 2 Dragons from any Regions and discard them, along with this card. If there are less than 2 Dragons on the board, discard this card without any effect."
        ]
      },
      "Dragon Sleep": {
        "name": "Dragon Sleep",
        "count": 1,
        "file": "dragon_sleep",
        "description": [
          "Place a sleep token on all Dragons in every Region that do not already have a sleep token, then discard this card."
        ]
      },
      "Fire Storm": {
        "name": "Fire Storm",
        "count": 1,
        "file": "fire_storm",
        "description": [
          "Discard all cards on every space in this Region, then discard this card.",
          "If Varthrax is the Dragon King, this Event affects every Region."
        ]
      },
      "Reign of Fire": {
        "name": "Reign of Fire",
        "count": 1,
        "file": "reign_of_fire",
        "description": [
          "Clockwise starting with yourself, all characters take 1 dragon scale from a Draconic Lord of their choice and place it on their space following the normal rules, until all dragon scales on each Draconic Lord has been placed on the board, then discard this card."
        ]
      },
      "Dragonspine Pass": {
        "name": "Dragonspine Pass",
        "count": 1,
        "file": "dragonspine_pass",
        "description": [
          "Dragonspine Pass will remain here for the rest of the game. Roll 1 die. If the result is equal to or higher than the number of Dragons in this Region, you may teleport to any other space in this Region. If it is lower, you must move a Dragon of your choice in this Region to this space."
        ]
      },
      "Amphiptere": {
        "name": "Amphiptere",
        "count": 1,
        "file": "amphiptere",
        "description": [
          "Amphiptere",
          "Before you engage the Amphiptere in battle, it makes a breath attack; if you have any Armour you lose 1 life.",
          "It will remain here until it is killed."
        ]
      },
      "Black Dragon": {
        "name": "Black Dragon",
        "count": 1,
        "file": "black_dragon",
        "description": [
          "Black Dragon",
          "You may not use any Armour during battle unless it is a Magic Object. It will remain here until it is killed."
        ]
      },
      "Brimstone Wyvern": {
        "name": "Brimstone Wyvern",
        "count": 1,
        "file": "brimstone_wyvern",
        "description": [
          "Brimstone Wyvern",
          "A Brimstone Wyvern's sulphurous stench permeates the scorch-marked landscape. It will remain here until it is killed."
        ]
      },
      "Cloud Dragon": {
        "name": "Cloud Dragon",
        "count": 1,
        "file": "cloud_dragon",
        "description": [
          "Cloud Dragon",
          "A monstrous Cloud Dragon is terrorising this area. It will remain here until it is killed."
        ]
      },
      "Dragon Matriarch": {
        "name": "Dragon Matriarch",
        "count": 1,
        "file": "dragon_matriarch",
        "description": [
          "Dragon Matriarch",
          "Add 1 to the Dragon's attack score for all other faceup Dragons in every Region. It will remain here until it is killed."
        ]
      },
      "Dragon Toad": {
        "name": "Dragon Toad",
        "count": 1,
        "file": "dragon_toad",
        "description": [
          "Dragon Toad",
          "If your attack roll is lower than the Dragon's attack roll, you are turned into a Toad for 3 turns after the battle is resolved. It will remain here until it is killed."
        ]
      },
      "Dragon Whelp": {
        "name": "Dragon Whelp",
        "count": 2,
        "file": "dragon_whelp",
        "description": [
          "Dragon Whelp",
          "If you attack and do not kill the Whelp, move this card to another Dragon of your choice. If there are no other Dragons on the board, it will flee to the discard pile instead."
        ]
      },
      "Exalted Dragon": {
        "name": "Exalted Dragon",
        "count": 1,
        "file": "exalted_dragon",
        "description": [
          "Exalted Dragon",
          "Add 1 to the Dragon's attack score for each dragon scale on every Draconic Lord Card. If you kill the Dragon, you may claim 1 dragon scale from each Draconic Lord Card. It will remain here until it is killed."
        ]
      },
      "Fire Drake": {
        "name": "Fire Drake",
        "count": 1,
        "file": "fire_drake",
        "description": [
          "Fire Drake",
          "Before you engage the Dragon in battle, it makes a breath attack; roll 1 die. If the result is equal to or higher than your Craft you lose 1 life. It will remain here until it is killed."
        ]
      },
      "Hydra Dragon": {
        "name": "Hydra Dragon",
        "count": 1,
        "file": "hydra_dragon",
        "description": [
          "Hydra Dragon",
          "If you defeat the Dragon, the attack counts as a stand-off unless your attack score wins by 3 or more points. It will remain here until it is killed."
        ]
      },
      "Inferno Dragon": {
        "name": "Inferno Dragon",
        "count": 1,
        "file": "inferno_dragon",
        "description": [
          "Inferno Dragon",
          "Before you engage the Dragon in battle, it makes a breath attack; each character in this space must roll 1 die. If a character's result is equal to or higher than their Craft they must lose 1 life. It will remain here until it is killed."
        ]
      },
      "Ivory Dragon": {
        "name": "Ivory Dragon",
        "count": 1,
        "file": "ivory_dragon",
        "description": [
          "Ivory Dragon",
          "You may not use any Weapon during battle unless it is a Magic Object. It will remain here until it is killed."
        ]
      },
      "Mountain Dragon": {
        "name": "Mountain Dragon",
        "count": 1,
        "file": "mountain_dragon",
        "description": [
          "Mountain Dragon",
          "Before you engage the Dragon in battle, it makes a breath attack;",
          "roll 1 die.",
          "If the result is equal to or higher than your Craft you lose 1 life. It will remain here until it is killed."
        ]
      },
      "Red Dragon": {
        "name": "Red Dragon",
        "count": 2,
        "file": "red_dragon",
        "description": [
          "Red DragonIf you are defeated, you do not lose a life. Instead, you must place 1 of your Followers on this card. If you kill the Dragon, you may take any Followers on this card then discard the rest. The Followers do not count towards the number of cards on this space. It will remain here until it is killed."
        ]
      },
      "Ruby Dragon": {
        "name": "Ruby Dragon",
        "count": 1,
        "file": "ruby_dragon",
        "description": [
          "Ruby Dragon",
          "The Dragon cannot be evaded. It will remain here until it is killed."
        ]
      },
      "Storm Dragon": {
        "name": "Storm Dragon",
        "count": 1,
        "file": "storm_dragon",
        "description": [
          "Storm Dragon",
          "Before you engage the Dragon in battle, it makes a breath attack; if you have any Armour or Weapons you lose 1 life. It will remain here until it is killed."
        ]
      },
      "Swordscale Dragon": {
        "name": "Swordscale Dragon",
        "count": 1,
        "file": "swordscale_dragon",
        "description": [
          "Swordscale Dragon",
          "If you kill the Dragon, you may take a Sword from the Purchase deck. It will remain here until it is killed."
        ]
      },
      "Two-Headed Dragon": {
        "name": "Two-Headed Dragon",
        "count": 1,
        "file": "two_headed_dragon",
        "description": [
          "Two-Headed Dragon",
          "The Dragon rolls 2 dice and adds them together to determine its attack roll. It will remain here until it is killed."
        ]
      },
      "Volcanic Dragon": {
        "name": "Volcanic Dragon",
        "count": 1,
        "file": "volcanic_dragon",
        "description": [
          "Volcanic Dragon",
          "Before you engage the Dragon in battle, it makes a breath attack; roll 1 die. If the result is equal to or higher than your Craft you must discard all other cards on this space. It will remain here until it is killed."
        ]
      },
      "Wyvern": {
        "name": "Wyvern",
        "count": 1,
        "file": "wyvern",
        "description": [
          "Wyvern",
          "This foul creature has made its lair here. It will remain here until it is killed."
        ]
      },
      "Varthrax Zealot": {
        "name": "Varthrax Zealot",
        "count": 4,
        "file": "varthrax_zealot",
        "description": [
          "Varthrax Zealot",
          "If Varthrax is the Dragon King, add 3 to the Cultist's attack roll. He will remain here until he is killed."
        ]
      },
      "Varthrax Warlord": {
        "name": "Varthrax Warlord",
        "count": 2,
        "file": "varthrax_warlord",
        "description": [
          "Varthrax Warlord",
          "If Varthrax is the Dragon King, add 3 to the Cultist's attack roll. He will remain here until he is killed."
        ]
      },
      "Varthrax Warrior": {
        "name": "Varthrax Warrior",
        "count": 3,
        "file": "varthrax_warrior",
        "description": [
          "Varthrax Warrior",
          "If Varthrax is the Dragon King, add 3 to the Cultist's attack roll. He will remain here until he is killed."
        ]
      },
      "Dragon Speaker": {
        "name": "Dragon Speaker",
        "count": 1,
        "file": "dragon_speaker",
        "description": [
          "The Dragon Speaker will remain here for the rest of the game. Draw the top 5 cards from the Dragon King's deck and place them back on top of the deck in any order you wish."
        ]
      },
      "Dream Singer": {
        "name": "Dream Singer",
        "count": 1,
        "file": "dream_singer",
        "description": [
          "Place a total of 4 sleep tokens here when revealed. Once per visit you may take 1 sleep token from the Dream Singer and place it on an Enemy in any Region. When all 4 have been taken, the Dream Singer departs to the discard pile."
        ]
      },
      "Martial Artist": {
        "name": "Martial Artist",
        "count": 1,
        "file": "martial_artist_stranger",
        "description": [
          "The Martial Artist will remain here for the rest of the game. You may discard any number of your dragon scales. Gain 1 Strength or Craft for each dragon scale you discard."
        ]
      },
      "Battle Seeker": {
        "name": "Battle Seeker",
        "count": 1,
        "file": "battle_seeker",
        "description": [
          "If you move into a space that has one or more Enemies, you may end your move there, instead of moving the full distance as indicated by the die roll."
        ]
      },
      "Dragon Stalkers": {
        "name": "Dragon Stalkers",
        "count": 1,
        "file": "dragon_stalkers",
        "description": [
          "If you defeat a Dragon during your turn, you may take an extra turn. You may only do this once per round."
        ]
      },
      "Firelands Envoy": {
        "name": "Firelands Envoy",
        "count": 1,
        "file": "firelands_envoy",
        "description": [
          "Whenever you encounter a dragon scale, you may draw a Dragon Card from any deck instead of matching the dragon scale on your space."
        ]
      },
      "Wyrm Slayer": {
        "name": "Wyrm Slayer",
        "count": 1,
        "file": "wyrm_slayer",
        "description": [
          "Add 2 to your Strength during battle.",
          "While the Wyrm Slayer is your Follower, you cannot evade Dragons."
        ]
      },
      "Banner of Valour": {
        "name": "Banner of Valour",
        "count": 1,
        "file": "banner_of_valour",
        "description": [
          "Each of your Followers adds 1 to your Strength during battle.",
          "Any Follower that fights in your place adds 3 to their Strength.",
          "You must ditch the Banner if you do not have any Followers."
        ]
      },
      "Dragonscale Shirt": {
        "name": "Dragonscale Shirt",
        "count": 1,
        "file": "dragonscale_shirt",
        "description": [
          "You are not affected by a Dragon's breath attack.",
          "If you are defeated in battle or psychic combat, you may discard one of your dragon scales. If you choose to do so, the attack is considered a stand-off instead."
        ]
      },
      "Dragon Bane": {
        "name": "Dragon Bane",
        "count": 1,
        "file": "dragon_bane",
        "description": [
          "Double your Strength value during battle against Dragons.",
          "If you are defeated by a Dragon, you must ditch the Dragon Bane."
        ]
      },
      "Dragon Helm": {
        "name": "Dragon Helm",
        "count": 1,
        "file": "dragon_helm",
        "description": [
          "Add 1 to your Strength during battle.",
          "You are not affected by a Dragon's breath attack."
        ]
      },
      "Dragon Talon": {
        "name": "Dragon Talon",
        "count": 1,
        "file": "dragon_talon",
        "description": [
          "Each dragon scale that matches your opponent adds 2 to your attack score instead of 1 during battle and psychic combat."
        ]
      },
      "Exorcist's Blade": {
        "name": "Exorcist's Blade",
        "count": 1,
        "file": "exorcists_blade",
        "description": [
          "You may use your Strength instead of your Craft during psychic combat."
        ]
      },
      "Holy Lance": {
        "name": "Holy Lance",
        "count": 1,
        "file": "holy_lance",
        "description": [
          "",
          "No evil character may have the",
          "Holy Lance.",
          "Add 1 to your Strength during battle.",
          "Add 3 to your Strength during battle",
          "against Dragons."
        ]
      },
      "Dragon Hatchery": {
        "name": "Dragon Hatchery",
        "count": 1,
        "file": "dragon_hatchery",
        "description": [
          "The Hatchery will remain here for the rest of the game. Take the top 3 cards from the Dragon King's deck without looking at them or changing their order, and place them on top of the Adventure deck.",
          "If Varthrax is the Dragon King, take 6 cards from his deck instead of only 3 cards."
        ]
      },
      "Great Portal": {
        "name": "Great Portal",
        "count": 1,
        "file": "great_portal",
        "description": [
          "The Portal will remain here for the rest of the game. Roll 1 die. You may add your Strength, Craft, and 1 to the score for each dragon scale you have:",
          "1-7) Lose 1 life and miss your next turn",
          "8-14) Miss your next turn",
          "15-21) Move to the Plain of Peril",
          "22+) Move to the Crown of Command"
        ]
      },
      "Temple of Varthrax": {
        "name": "Temple of Varthrax",
        "count": 1,
        "file": "temple_of_varthrax",
        "description": [
          "The Temple will remain here for the rest of the game. The Dragon Cultists demand an offering; discard 1 of your Followers. If you have none, lose 1 life instead."
        ]
      },
      "Varthrax War Council": {
        "name": "Varthrax War Council",
        "count": 1,
        "file": "varthrax_war_council",
        "description": [
          "The War Council will remain here for the rest of the game. You may discard one of your Followers to claim one dragon scale from any Draconic Lord Card. If you do not discard a Follower, you must draw a dragon token instead."
        ]
      }
    },
    "CADORUS": {
      "Dragon Dawn": {
        "name": "Dragon Dawn",
        "count": 1,
        "file": "dragon_dawn",
        "description": [
          "Discard sleep tokens on all Dragons in every Region, then discard this card."
        ]
      },
      "Dragon Rage": {
        "name": "Dragon Rage",
        "count": 1,
        "file": "dragon_rage",
        "description": [
          "You suffer the Dragon Rage of the Dragon King, then discard this card.",
          "If Cadorus is the Dragon King, all characters suffer his Dragon Rage."
        ]
      },
      "Fiery Onslaught": {
        "name": "Fiery Onslaught",
        "count": 1,
        "file": "fiery_onslaught",
        "description": [
          "Take the top 5 cards from the Dragon King's deck without looking at them or changing their order, and place them on top of the Adventure deck, then discard this card.",
          "If Cadorus is the Dragon King, take 10 cards from his deck instead of only 5 cards."
        ]
      },
      "Surprise Attack": {
        "name": "Surprise Attack",
        "count": 1,
        "file": "surprise_attack",
        "description": [
          "A Dragon grabs you and drops you to the ground! Roll 1 die and move that many spaces counter-clockwise, then lose 1 life. The Dragon then flies off to the discard pile."
        ]
      },
      "Village Raid": {
        "name": "Village Raid",
        "count": 2,
        "file": "village_raid",
        "description": [
          "Draw 4 cards from the Dragon King's deck and place them faceup on the Village (discard any Events without resolving their effects), then discard this card."
        ]
      },
      "Cadorus Acolyte": {
        "name": "Cadorus Acolyte",
        "count": 4,
        "file": "cadorus_acolyte",
        "description": [
          "Cadorus Acolyte",
          "If your Strength is lower than your Craft, you must fight in battle. Otherwise you must fight in psychic combat.",
          "If Cadorus is the Dragon King, add 3 to the Cultist's attack roll. She will remain here until she is killed."
        ]
      },
      "Cadorus Archpriest": {
        "name": "Cadorus Archpriest",
        "count": 2,
        "file": "cadorus_archpriest",
        "description": [
          "Cadorus Archpriest",
          "If your Strength is lower than your Craft, you must fight in battle. Otherwise you must fight in psychic combat.",
          "If Cadorus is the Dragon King, add 3 to the Cultist's attack roll. He will remain here until he is killed."
        ]
      },
      "Cadorus Priestess": {
        "name": "Cadorus Priestess",
        "count": 3,
        "file": "cadorus_priestess",
        "description": [
          "Cadorus Priestess",
          "If your Strength is lower than your Craft, you must fight in battle. Otherwise you must fight in psychic combat.",
          "If Cadorus is the Dragon King, add 3 to the Cultist's attack roll. She will remain here until she is killed."
        ]
      },
      "Eastern Dragon": {
        "name": "Eastern Dragon",
        "count": 1,
        "file": "eastern_dragon",
        "description": [
          "Eastern Dragon",
          "If your Strength is lower than your Craft, you must fight in battle. Otherwise you must fight in psychic combat.",
          "If you are defeated, in addition to losing 1 life, you must ditch 1 Magic Object at random.",
          "It will remain here until it is killed."
        ]
      },
      "Amber Dragon": {
        "name": "Amber Dragon",
        "count": 1,
        "file": "amber_dragon",
        "description": [
          "Amber Dragon",
          "Before you engage the Dragon in battle, it makes a breath attack; roll 1 die. If the result is equal to or higher than your Strength you must miss your next turn. It will remain here until it is killed."
        ]
      },
      "Ancient Dragon": {
        "name": "Ancient Dragon",
        "count": 1,
        "file": "ancient_dragon",
        "description": [
          "Ancient Dragon",
          "If you are defeated, in addition to losing 1 life, you suffer the Dragon Rage of the Dragon King. It will remain here until it is killed."
        ]
      },
      "Bronze Dragon": {
        "name": "Bronze Dragon",
        "count": 1,
        "file": "bronze_dragon",
        "description": [
          "Bronze Dragon",
          "A mighty Bronze Dragon has made its lair in this area. It will remain here until it is killed."
        ]
      },
      "Desert Drake": {
        "name": "Desert Drake",
        "count": 1,
        "file": "desert_drake",
        "description": [
          "Desert Drake",
          "It will remain here until it is killed. If you are defeated, in addition to losing 1 life, the Dragon drops you in the Desert space of your choice."
        ]
      },
      "Dragon's Lair": {
        "name": "Dragon's Lair",
        "count": 1,
        "file": "dragons_lair",
        "description": [
          "Dragon's Lair",
          "If you kill the Dragon you may loot its lair: Draw the top 5 cards from the Cadorus deck and take 1 Object of your choice, then discard the remaining cards. It will remain here until it is killed."
        ]
      },
      "Frost Drake": {
        "name": "Frost Drake",
        "count": 1,
        "file": "frost_drake_dragon",
        "description": [
          "Frost Drake",
          "Before you engage the Dragon in battle, it makes a breath attack; roll 1 die. If the result is equal to or higher than your Strength you must miss your next turn. It will remain here until it is killed."
        ]
      },
      "Miser Dragon": {
        "name": "Miser Dragon",
        "count": 1,
        "file": "miser_dragon",
        "description": [
          "Miser Dragon",
          "You venture inside the den of a Miser Dragon and awaken the beast! If you kill the Dragon, you loot its hoard; roll 1 die and gain that much gold. The Dragon will remain here until it is killed."
        ]
      },
      "Wyvern Fledgling": {
        "name": "Wyvern Fledgling",
        "count": 2,
        "file": "wyvern_fledgling",
        "description": [
          "Wyvern Fledgling",
          "If you attack and do not kill the Fledgling, move this card to another Dragon of your choice. If there are no other Dragons on the board, it will flee to the discard pile instead."
        ]
      },
      "Copper Wyvern": {
        "name": "Copper Wyvern",
        "count": 2,
        "file": "copper_wyvern",
        "description": [
          "Copper Wyvern",
          "A Copper Wyvern is attacking everything in this area. It will remain here until it is killed."
        ]
      },
      "Covetous Dragon": {
        "name": "Covetous Dragon",
        "count": 1,
        "file": "covetous_dragon",
        "description": [
          "Covetous DragonIf you are defeated, you do not lose a life. Instead, you must place one of your Objects on this card. If you kill the Dragon, you may take any Objects on this card then discard the rest. The Objects do not count towards the number of cards on this space. It will remain here until it is killed."
        ]
      },
      "Ethereal Drake": {
        "name": "Ethereal Drake",
        "count": 1,
        "file": "ethereal_drake",
        "description": [
          "Ethereal Drake",
          "If you defeat the Dragon, roll 1 die. If you roll a 1 or 2, the attack counts as a stand-off. It will remain here until it is killed."
        ]
      },
      "Gilded Dragon": {
        "name": "Gilded Dragon",
        "count": 1,
        "file": "gilded_dragon",
        "description": [
          "Gilded Dragon",
          "Before you engage the Dragon in psychic combat, it makes a breath attack; roll 1 die. If the result is equal to or higher than your Craft you are automatically defeated. It will remain here until it is killed."
        ]
      },
      "Gold Dragon": {
        "name": "Gold Dragon",
        "count": 2,
        "file": "gold_dragon",
        "description": [
          "Gold Dragon",
          "If you are defeated, you do not lose a life. Instead, you must place all of your gold on this card. If you kill the Dragon, you may take any gold on this card then discard the rest. It will remain here until it is killed."
        ]
      },
      "Radiant Dragon": {
        "name": "Radiant Dragon",
        "count": 1,
        "file": "radiant_dragon",
        "description": [
          "Radiant Dragon",
          "Before you engage the Dragon in psychic combat, it makes a breath attack; roll 1 die. If the result is equal to or higher than your Craft, you must discard all of your fate. It will remain here until it is killed."
        ]
      },
      "Topaz Dragon": {
        "name": "Topaz Dragon",
        "count": 1,
        "file": "topaz_dragon",
        "description": [
          "Topaz Dragon",
          "The Dragon cannot be evaded. It will remain here until it is killed."
        ]
      },
      "Dragonfire Warlock": {
        "name": "Dragonfire Warlock",
        "count": 1,
        "file": "dragonfire_warlock",
        "description": [
          "The first character to visit the Warlock and discard one of their dragon scales gains a Talisman. The Warlock departs to the discard pile once the Talisman has been collected."
        ]
      },
      "Dragonwing Flyer": {
        "name": "Dragonwing Flyer",
        "count": 1,
        "file": "dragonwing_flyer",
        "description": [
          "The Dragonwing Flyer will remain here for the rest of the game. On your next turn, instead of rolling the die for your move, you may teleport to any other space that has a dragon scale or faceup Dragon Card in any Region."
        ]
      },
      "Dragon Spirits": {
        "name": "Dragon Spirits",
        "count": 1,
        "file": "dragon_spirits",
        "description": [
          "Once per visit, you may either take a dragon scale in this Region and place it on this card, or take a dragon scale on this card and place it on any space in this Region that does not already have a dragon scale. The Dragon Spirits fade to the discard pile if 4 dragon scales are placed on this card."
        ]
      },
      "Faerie Dragon": {
        "name": "Faerie Dragon",
        "count": 1,
        "file": "faerie_dragon",
        "description": [
          "The Faerie Dragon will grant one of the following wishes of your choice, then vanish to the discard pile: Gain one Spell, gold, Strength, Craft, life, or fate; or teleport to any other space in this Region."
        ]
      },
      "Shrine Priest": {
        "name": "Shrine Priest",
        "count": 1,
        "file": "shrine_priest",
        "description": [
          "The Shrine Priest will remain here for the rest of the game. You must choose to either kill one of your Followers or lose a life. If you kill a Follower, you become evil. If you have a Follower and choose to lose a life instead, you become good."
        ]
      },
      "Dragon Rider": {
        "name": "Dragon Rider",
        "count": 1,
        "file": "dragon_rider",
        "description": [
          "Instead of rolling the die for your move, you may discard one of your dragon scales to teleport to any other space in the same Region."
        ]
      },
      "Hoard Thief": {
        "name": "Hoard Thief",
        "count": 1,
        "file": "hoard_thief",
        "description": [
          "Whenever you encounter an Enemy you may gain 2 gold. You may only do this once per turn."
        ]
      },
      "Luck Dragon": {
        "name": "Luck Dragon",
        "count": 1,
        "file": "luck_dragon",
        "description": [
          "At the start of your turn, you may replenish 1 fate.",
          "You may discard the Dragon at any time to replenish fate up to your fate value."
        ]
      },
      "Treasure Hunter": {
        "name": "Treasure Hunter",
        "count": 1,
        "file": "treasure_hunter",
        "description": [
          "If you move into a space that contains one or more Objects, you may end your move there, instead of moving the full distance as indicated by the die roll. The Treasure Hunter departs to the discard pile if you lose a battle or psychic combat."
        ]
      },
      "Crown of Domination": {
        "name": "Crown of Domination",
        "count": 1,
        "file": "crown_of_domination",
        "description": [
          "You may enslave 1 Dragon you encounter instead of attacking it in psychic combat (place it on this card). You may discard the Crown and the enslaved Dragon to add its Craft to yours until the end of the turn."
        ]
      },
      "Dragon Amulet": {
        "name": "Dragon Amulet",
        "count": 1,
        "file": "dragon_amulet",
        "description": [
          "All of your dragon scales are considered to match your opponent during battle and psychic combat."
        ]
      },
      "Dragon Bracelet": {
        "name": "Dragon Bracelet",
        "count": 1,
        "file": "dragon_bracelet",
        "description": [
          "As long as you have the Dragon Bracelet, you count as having a total of 7 Strength (even if your Strength is actually higher). You cannot count any bonuses to your Strength from other Objects, Followers, Spells, or special abilities."
        ]
      },
      "Golden Gauntlet": {
        "name": "Golden Gauntlet",
        "count": 1,
        "file": "golden_gauntlet",
        "description": [
          "Add 2 to your Strength."
        ]
      },
      "Hand of Midas": {
        "name": "Hand of Midas",
        "count": 1,
        "file": "hand_of_midas",
        "description": [
          "The Hand of Midas can convert any number of Objects and Followers you have into gold. Discard the chosen Objects and Followers and gain 1 gold for each. You cannot reverse the procedure."
        ]
      },
      "Magic Tankard": {
        "name": "Magic Tankard",
        "count": 1,
        "file": "magic_tankard",
        "description": [
          "Whenever you visit the Tavern, you may heal up to your life value before you roll the die.",
          "You do not lose a life in the Desert."
        ]
      },
      "Wyvern Staff": {
        "name": "Wyvern Staff",
        "count": 1,
        "file": "wyvern_staff",
        "description": [
          "You may enslave 1 Dragon you encounter instead of attacking it in battle (place it on this card). You may discard the Staff and the enslaved Dragon to add its Strength to yours until the end of the turn."
        ]
      },
      "Dragon Eggs": {
        "name": "Dragon Eggs",
        "count": 1,
        "file": "dragon_eggs",
        "description": [
          "You may discard the Dragon Eggs at the Warlock's Cave to gain a Talisman.",
          "If you are defeated by a Dragon, you must ditch the Dragon Eggs."
        ]
      },
      "Dragon Tears": {
        "name": "Dragon Tears",
        "count": 1,
        "file": "dragon_tears",
        "description": [
          "If you visit the Alchemist in the City, you may discard the Dragon Tears to gain 5 gold."
        ]
      },
      "Cadorus Conclave": {
        "name": "Cadorus Conclave",
        "count": 1,
        "file": "cadorus_conclave",
        "description": [
          "The Conclave will remain here for the rest of the game. You may discard one of your Objects to claim one dragon scale from any Draconic Lord Card. If you do not discard an Object, you must draw a dragon token instead."
        ]
      },
      "Dragon Roost": {
        "name": "Dragon Roost",
        "count": 1,
        "file": "dragon_roost",
        "description": [
          "The Roost will remain here for the rest of the game. Draw 1 dragon token. If you draw a dragon scale, place it on any space in this Region that does not already have a dragon scale. Otherwise resolve the dragon token normally."
        ]
      },
      "Shrine of Cadorus": {
        "name": "Shrine of Cadorus",
        "count": 1,
        "file": "shrine_of_cadorus",
        "description": [
          "The Shrine will remain here for the rest of the game. The Dragon Cultists demand an offering; discard all of your gold. If you have none, lose 1 life instead."
        ]
      },
      "Treasure Hoard": {
        "name": "Treasure Hoard",
        "count": 1,
        "file": "treasure_hoard",
        "description": [
          "Place a total of 8 gold here when revealed. Once per visit, you may take 2 gold from the Hoard. When all 8 gold have been taken, the Treasure Hoard is exhausted to the discard pile."
        ]
      }
    },
    "DRACONIC_LORDS": {
      "Cadorus": {
        "name": "Cadorus",
        "count": 1,
        "file": "cadorus",
        "description": [
          "A character confronting Cadorus must choose whether to attack using Strength or Craft. ",
          "Each time they defeat Cadorus they must remove one life from this card and immediately attack him again. ",
          "If the character is defeated, in addition to losing a life, their turn ends and they must suffer the Dragon Rage effect.",
          "If a character removes Cadorus's last life, they win the game! ",
          "If another character has already removed some of Cadorus's lives, then a character only needs to remove Cadorus's remaining lives to win the game."
        ]
      },
      "Grilipus": {
        "name": "Grilipus",
        "count": 1,
        "file": "grilipus",
        "description": [
          "A character confronting Grilipus must choose whether to attack using Strength or Craft. ",
          "Each time they defeat Grilipus they must remove one life from this card and immediately attack him again. ",
          "If the character is defeated, in addition to losing a life, their turn ends and they must suffer the Dragon Rage effect.",
          "If a character removes Grilipus's last life, they win the game! ",
          "If another character has already removed some of Grilipus's lives, then a character only needs to remove Grilipus's remaining lives to win the game."
        ]
      }
    }
  },
  "The Deep Realm": {
    "BRIDGE": {
      "The Geminax": {
        "name": "The Geminax",
        "count": 1,
        "file": "the_geminax",
        "description": [
          "You find yourself caught between warring twins, damned to fight an eternal battle below the earth. Roll 2 dice. If the total is even, you escape unharmed. If it is odd, lose 1 life and miss your next turn. If you roll doubles, you defeat them both; gain 1 Strength or 1 Craft."
        ]
      },
      "Turncoat": {
        "name": "Turncoat",
        "count": 1,
        "file": "turncoat",
        "description": [
          "One of your Followers has decided that your quest is far too dangerous and that you are far too rich. Ditch 1 random Follower and 1 random Object."
        ]
      },
      "Falling Slab": {
        "name": "Falling Slab",
        "count": 1,
        "file": "falling_slab",
        "description": [
          "A huge piece of masonry comes crashing down from above. You must kill 1 of your Followers at random and lose 1 life. "
        ]
      },
      "Jinx": {
        "name": "Jinx",
        "count": 1,
        "file": "jinx",
        "description": [
          "You must take her as a Follower. If you pay a fate and reroll the same result, you are killed! You may discard the Jinx if you visit the Soothsayer."
        ]
      },
      "Cave Troll": {
        "name": "Cave Troll",
        "count": 1,
        "file": "cave_troll",
        "description": [
          "Cave Troll",
          "A horrible Cave Troll is rampaging through this area. If you defeat the Cave Troll, roll 1 die. If you roll a 1 or 2, the foul thing regenerates and the attack counts as a stand-off. It will remain here until it is killed."
        ]
      },
      "City Rat": {
        "name": "City Rat",
        "count": 1,
        "file": "city_rat",
        "description": [
          "City Rat",
          "A foul City Rat is infesting this space.",
          "It will remain here until it is killed."
        ]
      },
      "Crawling Slime": {
        "name": "Crawling Slime",
        "count": 1,
        "file": "crawling_slime_elemental",
        "description": [
          "Crawling Slime",
          "A Crawling Slime smothers this area. Any Weapon used to fight it must be discarded after the battle is resolved. It will remain here until it is killed."
        ]
      },
      "Giant Rat": {
        "name": "Giant Rat",
        "count": 1,
        "file": "giant_rat",
        "description": [
          "Giant Rat",
          "A Giant Rat lurks in this area. It will remain here until it is killed."
        ]
      },
      "Zombie Knight": {
        "name": "Zombie Knight",
        "count": 1,
        "file": "zombie_knight",
        "description": [
          "Zombie Knight",
          "If you defeat the Zombie Knight in battle, you may keep it as a Follower instead of a trophy. The Zombie will add its Strength to yours for one battle, after which it decays to the discard pile. It will remain here until killed."
        ]
      },
      "Dragon Wraith": {
        "name": "Dragon Wraith",
        "count": 1,
        "file": "dragon_wraith",
        "description": [
          "Dragon Wraith",
          "You may not use Armour or Weapons, cast Spells, or spend fate while in psychic combat with the Dragon Wraith. It will remain here until killed."
        ]
      },
      "Shadowsoul": {
        "name": "Shadowsoul",
        "count": 1,
        "file": "shadowsoul",
        "description": [
          "Shadowsoul",
          "You may not pay fate to reroll dice during psychic combat with the Shadowsoul. It will remain here until it is killed."
        ]
      },
      "Sneakthief": {
        "name": "Sneakthief",
        "count": 1,
        "file": "sneakthief",
        "description": [
          "Sneakthief",
          "If you kill the Sneakthief you may discard this card instead of keeping it as a trophy to take 1 Object from another character.",
          "He will remain here until he is killed."
        ]
      },
      "Vampire Bats": {
        "name": "Vampire Bats",
        "count": 1,
        "file": "vampire_bats",
        "description": [
          "Vampire Bats",
          "A swarm of Vampire Bats swoops down on you. If you defeat them, the attack counts as a stand-off unless your attack score wins by 2 or more points. The swarm will remain here until it is killed."
        ]
      },
      "Wraith": {
        "name": "Wraith",
        "count": 1,
        "file": "wraith",
        "description": [
          "Wraith",
          "A Wraith is wreaking havoc in this area. It will remain until it is killed."
        ]
      },
      "Trapsmith": {
        "name": "Trapsmith",
        "count": 1,
        "file": "trapsmith",
        "description": [
          "An expert trapsmith has offered to join you on your journey. When you draw a Trap you may pay 1 gold to discard the Trap with no effect."
        ]
      },
      "Pharaoh's Crown": {
        "name": "Pharaoh's Crown",
        "count": 1,
        "file": "pharaohs_crown",
        "description": [
          "If you engage a creature in battle or psychic combat, you may force the creature to reroll its attack roll. You may only do this once per turn."
        ]
      },
      "Tome of Ages": {
        "name": "Tome of Ages",
        "count": 1,
        "file": "tome_of_ages",
        "description": [
          "If you are instructed to miss 1 or more turns, you may pay 1 fate to cancel the effect.",
          "Once per round while you are on the Crown of Command, you may take 2 successive turns before play passes to the next player."
        ]
      },
      "Broken Sword": {
        "name": "Broken Sword",
        "count": 1,
        "file": "broken_sword",
        "description": [
          "If you visit the Armoury, you may pay 1 gold and discard this card to take a Greatsword from the Armoury deck."
        ]
      },
      "Chest": {
        "name": "Chest",
        "count": 1,
        "file": "chest",
        "description": [
          "You may roll 1 die to open the Chest. If the result is less than or equal to your Craft, gain 3 gold.",
          "If the result is higher than your Craft, you are jabbed by a poisoned needle and lose 1 life.",
          "The Chest then crumbles to the discard pile."
        ]
      },
      "Akbar's Revenge": {
        "name": "Akbar's Revenge",
        "count": 1,
        "file": "akbars_revenge",
        "description": [
          "You can only disable this ancient mechanism if you have a Talisman. If you do not, lose 1 life and you must escape on your next turn."
        ]
      }
    },
    "TUNNEL": {
      "Portcullis": {
        "name": "Portcullis",
        "count": 2,
        "file": "portcullis",
        "description": [
          "A huge Portcullis slams down in front of you. You must find another way around it. Take the top 2 cards of the Tunnel deck and add them facedown to the bottom of your stack of Tunnel cards. Then discard this card."
        ]
      },
      "Sliding Walls": {
        "name": "Sliding Walls",
        "count": 1,
        "file": "sliding_walls",
        "description": [
          "The ceiling and walls start to close in on you. Roll 2 dice.",
          "If the score is equal to or less than your Strength, you hold the walls apart and are safe. If it is higher, you lose 1 life."
        ]
      },
      "Sphinx of Khayu": {
        "name": "Sphinx of Khayu",
        "count": 1,
        "file": "sphinx_of_khayu",
        "description": [
          "The statue blocks your way and will only move aside if you solve its riddle. Roll 2 dice. If the score is equal to or less than your Craft, you solve the riddle and discard this card. If it is higher, you must try again on your next turn if you choose to press on."
        ]
      },
      "Turing's Enigma": {
        "name": "Turing's Enigma",
        "count": 1,
        "file": "turings_enigma",
        "description": [
          "A magic puzzle lock guards the way. Roll 3 dice. If each result is different, you solve the puzzle; discard this card. If you roll any doubles, you lose 1 life and must roll again. If you roll triples, you are killed!"
        ]
      },
      "Feral Pet": {
        "name": "Feral Pet",
        "count": 1,
        "file": "feral_pet",
        "description": [
          "Feral Pet",
          "If you defeat the Feral Pet in battle, you may discard it instead of keeping it as a trophy to gain 1 Pet Card for free.",
          "It will remain here until it is defeated."
        ]
      },
      "Giant Rat": {
        "name": "Giant Rat",
        "count": 1,
        "file": "giant_rat",
        "description": [
          "Giant Rat",
          "A Giant Rat lurks in this area. It will remain here until it is killed."
        ]
      },
      "Living Statue": {
        "name": "Living Statue",
        "count": 1,
        "file": "living_statue",
        "description": [
          "Living Statue",
          "A Living Statue thunders into this area. If you defeat the Living Statue, the attack counts as a stand-off unless you defeat it with a Weapon that is a Magic Object."
        ]
      },
      "Plague Rat": {
        "name": "Plague Rat",
        "count": 1,
        "file": "plague_rat",
        "description": [
          "Plague Rat",
          "This disgusting abomination blocks your path. If you are defeated and lose 1 life, your wounds become infected and you must lose 1 additional life. It will remain here until killed."
        ]
      },
      "Rat Pack": {
        "name": "Rat Pack",
        "count": 1,
        "file": "rat_pack",
        "description": [
          "Rat Pack",
          "Roll 2 dice to determine the total Strength of the Rat Pack. If you kill them, gain 1 Strength, but you must discard them instead of taking them as a trophy. They will remain here until killed."
        ]
      },
      "Void Minotaur": {
        "name": "Void Minotaur",
        "count": 1,
        "file": "void_minotaur",
        "description": [
          "Void Minotaur",
          "If the Minotaur defeats you in battle, in addition to losing 1 life, you must also lose 1 Strength. Then place 1 Strength counter on this card. Add 1 to the Minotaur's Strength for each counter on this card. It will remain here until killed."
        ]
      },
      "Crypt Wyvern": {
        "name": "Crypt Wyvern",
        "count": 1,
        "file": "crypt_wyvern",
        "description": [
          "Crypt Wyvern",
          "It will remain here until it is killed. If you are defeated, in addition to your losing 1 life, the Dragon drops you in the Graveyard."
        ]
      },
      "Dracolich": {
        "name": "Dracolich",
        "count": 1,
        "file": "dracolich",
        "description": [
          "Dracolich",
          "If you are defeated, in addition to losing 1 life, place 1 life counter on this card. If the Dracolich is defeated and has any life counters, it is not killed and it loses 1 life counter instead. It will remain here until it is killed."
        ]
      },
      "Harbinger Wraith": {
        "name": "Harbinger Wraith",
        "count": 1,
        "file": "harbinger_wraith",
        "description": [
          "Harbinger Wraith",
          "It promises doom to the world. When you encounter it, lose all of your fate and discard all of your Spells. It will remain here until killed."
        ]
      },
      "Rage Demon": {
        "name": "Rage Demon",
        "count": 1,
        "file": "rage_demon",
        "description": [
          "Rage Demon",
          "The Rage Demon rolls 2 dice during psychic combat and adds them together to determine its attack roll. It will remain here until killed."
        ]
      },
      "Tomb Warden": {
        "name": "Tomb Warden",
        "count": 1,
        "file": "tomb_warden",
        "description": [
          "Tomb Warden",
          "A dire Tomb Warden is guarding the resting place of his lord. If you kill it, gain a Talisman or 3 gold, but you must discard it instead of taking it as a trophy.",
          "It will remain here until it is killed."
        ]
      },
      "Will o' the Wisps": {
        "name": "Will o' the Wisps",
        "count": 1,
        "file": "will_o_the_wisps",
        "description": [
          "Will o' the Wisps",
          "Roll 2 dice to determine the total Craft of these lost souls. If you kill them, gain 1 Craft, but you must discard them instead of taking them as a trophy. They will remain here until killed."
        ]
      },
      "Horn of Dread": {
        "name": "Horn of Dread",
        "count": 1,
        "file": "horn_of_dread",
        "description": [
          "A hundred evil souls are trapped within the horn, eager to bring death and despair whenever they are released. When you encounter a character or are encountered by a character you may roll 2 dice to see what happens:",
          "2) You are killed",
          "3-5) You lose 1 life",
          "6-8) They lose 1 life",
          "9-11) They lose 2 life",
          "12) They are killed"
        ]
      },
      "Stygian Talisman": {
        "name": "Stygian Talisman",
        "count": 1,
        "file": "stygian_talisman",
        "description": [
          "You may only enter the Valley of Fire if you have one of the fabled Talismans.",
          "Other characters cannot heal or gain life while you are at the Crown of Command."
        ]
      }
    }
  },
  "The Dungeon": {
    "SPELLS": {
      "Craft": {
        "name": "Craft",
        "count": 2,
        "file": "craft",
        "description": [
          "Cast on yourself at the start of your turn. Gain 1 Craft."
        ]
      },
      "Divine Intervention": {
        "name": "Divine Intervention",
        "count": 2,
        "file": "divine_intervention",
        "description": [
          "Cast when you are defeated in battle or psychic combat. The attack is considered a stand-off instead."
        ]
      },
      "Finger of Death": {
        "name": "Finger of Death",
        "count": 1,
        "file": "finger_of_death",
        "description": [
          "Cast on any character or creature who you are about to engage in battle.",
          "If cast on a character, they lose 2 lives. If cast on a creature, it is killed.",
          "Enemies killed may be taken as trophies."
        ]
      },
      "Magic Portal Spell": {
        "name": "Magic Portal Spell",
        "count": 2,
        "file": "magic_portal_spell",
        "description": [
          "Cast at the start of your turn, before you move. Roll 1 die to determine where the Magic Portal leads to:",
          "1) Crags             2) Village     ",
          "3) City                4) Castle     ",
          "5) Temple     6) Warlock's Cave",
          "You may move to this space instead of taking your normal move."
        ]
      },
      "Magic Shell": {
        "name": "Magic Shell",
        "count": 1,
        "file": "magic_shell",
        "description": [
          "Cast on yourself at the start or end of your turn. No Spells or Magic Objects will affect you until the start of your next turn, including the Command Spell. However, you cannot cast any Spells or use any Magic Objects until the start of your next turn."
        ]
      },
      "Restoration": {
        "name": "Restoration",
        "count": 2,
        "file": "restoration",
        "description": [
          "Cast as required, on any character or Follower, to prevent a character from losing a life or a Follower from being killed."
        ]
      },
      "Spell Call": {
        "name": "Spell Call",
        "count": 2,
        "file": "spell_call",
        "description": [
          "Cast immediately after any character casts a Spell. Instead of placing the Spell on the discard pile, you may take it."
        ]
      },
      "Strength": {
        "name": "Strength",
        "count": 2,
        "file": "strength",
        "description": [
          "Cast on yourself at the start of your turn. Gain 1 Strength."
        ]
      },
      "Summon Storm": {
        "name": "Summon Storm",
        "count": 1,
        "file": "summon_storm",
        "description": [
          "Cast at any time during your turn on any space in your Region.",
          "Discard all Enemy Animals and Monsters on the space."
        ]
      },
      "Temporal Vortex": {
        "name": "Temporal Vortex",
        "count": 1,
        "file": "temporal_vortex",
        "description": [
          "Cast at the start of your turn, before you move. You may take 2 successive turns before play passes to the next player.",
          "If you are instructed to lose your turn you may cast this Spell to cancel the loss, instead of the Spell's normal effect."
        ]
      },
      "Twist of Fate": {
        "name": "Twist of Fate",
        "count": 2,
        "file": "twist_of_fate",
        "description": [
          "Cast after you pay a fate but before you reroll the die.",
          "You choose which die result you will use instead of rerolling it."
        ]
      },
      "Weakness": {
        "name": "Weakness",
        "count": 2,
        "file": "weakness",
        "description": [
          "Cast at any time on a character or creature. The target's Strength is lowered by 3 until the end of the turn.",
          "A character's Strength may not be lowered below their Strength value."
        ]
      }
    },
    "DUNGEON": {
      "Cave-In": {
        "name": "Cave-In",
        "count": 1,
        "file": "cave_in",
        "description": [
          "All characters in the Dungeon must roll 1 die to determine what happens to them:",
          "1-2) Lose 1 life",
          "3-4) Miss your next turn",
          "5-6) Nothing happens",
          "The Cave-In then rumbles to the discard pile."
        ]
      },
      "Fire": {
        "name": "Fire",
        "count": 1,
        "file": "fire",
        "description": [
          "A Fire rages, destroying all cards of a certain type in this Region. Roll 1 die:",
          "1-2) Place cards",
          "3-4) Stranger cards",
          "5-6) Enemy cards",
          "The Fire then burns out to the discard pile."
        ]
      },
      "Green Mist": {
        "name": "Green Mist",
        "count": 1,
        "file": "green_mist",
        "description": [
          "A strange vapour corrodes all of your equipment. Discard all of your Armour and Weapons.",
          "The Green Mist then dissipates to the discard pile."
        ]
      },
      "Lone Dwarf": {
        "name": "Lone Dwarf",
        "count": 1,
        "file": "lone_dwarf",
        "description": [
          "Roll 1 die to determine how he reacts to you:",
          "1) Attacks you with Strength 4",
          "2) Move backwards 2 spaces",
          "3) Lose 1 gold",
          "4) Gain 1 gold",
          "5) Move forwards 2 spaces",
          "6) Joins you as a Follower; add 2 to your result at the Treasure Chamber"
        ]
      },
      "Magic Mirror": {
        "name": "Magic Mirror",
        "count": 1,
        "file": "magic_mirror",
        "description": [
          "Gain 1 Spell, if your Craft allows.",
          "The Magic Mirror then shatters to the discard pile."
        ]
      },
      "Sliding Walls": {
        "name": "Sliding Walls",
        "count": 1,
        "file": "sliding_walls",
        "description": [
          "The ceiling and walls start to close in on you. Roll 2 dice.",
          "If the score is equal to or less than your Strength, you hold the walls apart and are safe. If it is higher, you lose 1 life."
        ]
      },
      "Trap Door": {
        "name": "Trap Door",
        "count": 1,
        "file": "trap_door",
        "description": [
          "Move your character to the Dungeon Entrance or any faceup Dungeon Door. The Trap Door is then discarded."
        ]
      },
      "Battle Hulk": {
        "name": "Battle Hulk",
        "count": 2,
        "file": "battle_hulk",
        "description": [
          "Battle Hulk",
          "You may evade the Battle Hulk instead of attacking it. It will remain here until it is killed."
        ]
      },
      "Bloodroot": {
        "name": "Bloodroot",
        "count": 1,
        "file": "bloodroot",
        "description": [
          "Bloodroot",
          "If you kill the Bloodroot, you may heal up to 2 lives.",
          "It will remain here until it is killed."
        ]
      },
      "Bronze Dragon": {
        "name": "Bronze Dragon",
        "count": 1,
        "file": "bronze_dragon",
        "description": [
          "Bronze Dragon",
          "A mighty Bronze Dragon has made its lair in this area. It will remain here until it is killed."
        ]
      },
      "Cave Goblin": {
        "name": "Cave Goblin",
        "count": 3,
        "file": "cave_goblin",
        "description": [
          "Cave Goblin",
          "A foul Cave Goblin is rummaging through this area. It will remain here until it is killed."
        ]
      },
      "Cave Troll": {
        "name": "Cave Troll",
        "count": 2,
        "file": "cave_troll",
        "description": [
          "Cave Troll",
          "A horrible Cave Troll is rampaging through this area. If you defeat the Cave Troll, roll 1 die. If you roll a 1 or 2, the foul thing regenerates and the attack counts as a stand-off. It will remain here until it is killed."
        ]
      },
      "Colossal Ogre": {
        "name": "Colossal Ogre",
        "count": 1,
        "file": "colossal_ogre",
        "description": [
          "Colossal Ogre",
          "A frenzied Colossal Ogre is brutalising everyone in this area. It will remain here until it is killed."
        ]
      },
      "Crawling Slime": {
        "name": "Crawling Slime",
        "count": 2,
        "file": "crawling_slime",
        "description": [
          "Crawling Slime",
          "A Crawling Slime smothers this area. Any Weapon used to fight it must be discarded after the battle is resolved. It will remain here until it is killed."
        ]
      },
      "Gargoyle": {
        "name": "Gargoyle",
        "count": 1,
        "file": "gargoyle",
        "description": [
          "Gargoyle",
          "A Gargoyle is preying on everyone in this area. It will remain here until it is killed."
        ]
      },
      "Gate Smasher": {
        "name": "Gate Smasher",
        "count": 1,
        "file": "gate_smasher",
        "description": [
          "Gate Smasher",
          "If you do not kill the Gate Smasher, roll 1 die for each faceup Adventure Card in this Region. On a roll of 1 or 2 the Adventure Card is crushed to the discard pile. It will remain here until it is killed."
        ]
      },
      "Giant Beetle": {
        "name": "Giant Beetle",
        "count": 2,
        "file": "giant_beetle",
        "description": [
          "Giant Beetle",
          "A Giant Beetle inhabits this area. If you are defeated, in addition to losing 1 life, it will kill one of your Followers at random. If you have none you must lose 1 additional life instead. It will remain here until it is killed."
        ]
      },
      "Giant Rat": {
        "name": "Giant Rat",
        "count": 3,
        "file": "giant_rat",
        "description": [
          "Giant Rat",
          "A Giant Rat lurks in this area. It will remain here until it is killed."
        ]
      },
      "Giant Worm": {
        "name": "Giant Worm",
        "count": 2,
        "file": "giant_worm",
        "description": [
          "Giant Worm",
          "A Giant Worm skulks in this area. It will remain here until it is killed."
        ]
      },
      "Gnoll": {
        "name": "Gnoll",
        "count": 3,
        "file": "gnoll",
        "description": [
          "Gnoll",
          "A snarling Gnoll is roving through this area. It will remain here until it is killed."
        ]
      },
      "Goblin Ambusher": {
        "name": "Goblin Ambusher",
        "count": 1,
        "file": "goblin_ambusher",
        "description": [
          "Goblin Ambusher",
          "A sinister Goblin Ambusher is preparing traps throughout this area. If you are defeated, in addition to losing 1 life, you fall into a pit trap and land on the Dungeon Entrance. It will remain here until it is killed."
        ]
      },
      "Goblin King": {
        "name": "Goblin King",
        "count": 1,
        "file": "goblin_king",
        "description": [
          "Goblin King",
          "An unruly Goblin King has established his throne in this area. Add 1 to the Goblin King's Strength during battle for all other faceup Enemy cards that have the word \"Goblin\" or \"Hobgoblin\" in their title, in all Regions. It will remain here until it is killed."
        ]
      },
      "Goblin Marauders": {
        "name": "Goblin Marauders",
        "count": 3,
        "file": "goblin_marauders5",
        "description": [
          "Goblin Marauders",
          "Goblin Marauders are overwhelming this area. They will remain here until they are killed."
        ]
      },
      "Goblin Sniper": {
        "name": "Goblin Sniper",
        "count": 2,
        "file": "goblin_sniper",
        "description": [
          "Goblin Sniper",
          "A Goblin Sniper is lurking in the darkness. Roll 1 die. If the result is higher than your Craft, you cannot roll a die for your attack roll. It will remain here until it is killed."
        ]
      },
      "Goblin Trapsmith": {
        "name": "Goblin Trapsmith",
        "count": 1,
        "file": "goblin_trapsmith",
        "description": [
          "Goblin Trapsmith",
          "A Goblin Trapsmith uses his net to entangle his victims. You must roll 1 extra die for your attack roll and use the lowest result. It will remain here until it is killed."
        ]
      },
      "Goblin Tunneler": {
        "name": "Goblin Tunneler",
        "count": 2,
        "file": "goblin_tunneler",
        "description": [
          "Goblin Tunneler",
          "A Goblin Tunneler is digging passages in this area. If you kill the Goblin Tunneler, on your next turn you may choose to move to any Tunnel space in the Dungeon instead of taking your normal move. It will remain here until it is killed."
        ]
      },
      "Grinder": {
        "name": "Grinder",
        "count": 2,
        "file": "grinder",
        "description": [
          "Grinder",
          "A mindless Grinder is running amok in this area. It will remain here until it is killed."
        ]
      },
      "Hobgoblin": {
        "name": "Hobgoblin",
        "count": 1,
        "file": "hobgoblin",
        "description": [
          "Hobgoblin",
          "A brutal Hobgoblin is stalking this area. It will remain here until it is killed."
        ]
      },
      "Kobold Brute": {
        "name": "Kobold Brute",
        "count": 2,
        "file": "kobold_brute",
        "description": [
          "Kobold Brute",
          "A hostile Kobold Brute is patrolling this area. It will remain here until it is killed."
        ]
      },
      "Living Statue": {
        "name": "Living Statue",
        "count": 2,
        "file": "living_statue",
        "description": [
          "Living Statue",
          "A Living Statue thunders into this area. If you defeat the Living Statue, the attack counts as a stand-off unless you defeat it with a Weapon that is a Magic Object."
        ]
      },
      "Mimic": {
        "name": "Mimic",
        "count": 1,
        "file": "mimic",
        "description": [
          "Mimic",
          "The Mimic always has the same total Strength as its opponent, including any bonuses. If you kill it, gain 1 Strength, but you must discard it instead of taking it as a trophy. It will remain here until it is killed."
        ]
      },
      "Miser Dragon": {
        "name": "Miser Dragon",
        "count": 1,
        "file": "miser_dragon",
        "description": [
          "Miser Dragon",
          "You venture inside the den of a Miser Dragon and awaken the beast! If you kill the Dragon, you loot its hoard; roll 1 die and gain that much gold. The Dragon will remain here until it is killed."
        ]
      },
      "Umbra Spider": {
        "name": "Umbra Spider",
        "count": 2,
        "file": "umbra_spider",
        "description": [
          "Umbra Spider",
          "An Umbra Spider is infesting this area. It will remain here until it is killed."
        ]
      },
      "Black Elf": {
        "name": "Black Elf",
        "count": 2,
        "file": "black_elf",
        "description": [
          "Black Elf",
          "A cruel Black Elf is roving in this area. She will remain here until she is killed."
        ]
      },
      "Blight Haunt": {
        "name": "Blight Haunt",
        "count": 2,
        "file": "blight_haunt",
        "description": [
          "Blight Haunt",
          "A Blight Haunt appears. Roll 1 die to find out where:",
          "1) This space                 2) Ruins  ",
          "3) Dungeon Entrance      4) Cell   ",
          "5) Monster Pit     6) Cursed Glade",
          "It now haunts this area and will remain until it is killed."
        ]
      },
      "Crypt Keeper": {
        "name": "Crypt Keeper",
        "count": 1,
        "file": "crypt_keeper",
        "description": [
          "Crypt Keeper",
          "If you kill the Crypt Keeper you may search his tomb for treasure. Draw the top 5 Adventure Cards and take 1 Object of your choice. Discard the remaining cards. It will remain here until it is killed."
        ]
      },
      "Dark Acolyte": {
        "name": "Dark Acolyte",
        "count": 2,
        "file": "dark_acolyte",
        "description": [
          "Dark Acolyte",
          "A Dark Acolyte is performing an evil ritual in this area. He will remain here until he is killed."
        ]
      },
      "Death Knight": {
        "name": "Death Knight",
        "count": 2,
        "file": "death_knight",
        "description": [
          "Death Knight",
          "A baneful Death Knight is challenging everyone in this area. It will remain here until it is killed."
        ]
      },
      "Gate Keeper": {
        "name": "Gate Keeper",
        "count": 1,
        "file": "gate_keeper",
        "description": [
          "Gate Keeper",
          "If you kill the Gate Keeper you may immediately teleport to one of the following spaces of your choice:",
          "         Oasis                  Village",
          "           City                    Temple",
          "Warlock's Cave           Ruins",
          "It will remain here until it is killed."
        ]
      },
      "Lesser Demon": {
        "name": "Lesser Demon",
        "count": 1,
        "file": "lesser_demon",
        "description": [
          "Lesser Demon",
          "A minion of evil has been sent to prowl in this area. It will remain here until it is killed."
        ]
      },
      "Night Mare": {
        "name": "Night Mare",
        "count": 2,
        "file": "night_mare",
        "description": [
          "Night Mare",
          "A terrible Night Mare haunts this area. It will remain here until it is killed."
        ]
      },
      "Phantom Hound": {
        "name": "Phantom Hound",
        "count": 2,
        "file": "phantom_hound",
        "description": [
          "Phantom Hound",
          "A Phantom Hound is hunting in this area. It will remain here until it is killed."
        ]
      },
      "Rune Dancer": {
        "name": "Rune Dancer",
        "count": 2,
        "file": "rune_dancer",
        "description": [
          "Rune Dancer",
          "A Rune Dancer is weaving enchantments throughout this area. If you kill the Rune Dancer, you may gain your full complement of Spells, according to your current Craft. She will remain here until she is killed."
        ]
      },
      "Servant of Darkness": {
        "name": "Servant of Darkness",
        "count": 2,
        "file": "servant_of_darkness",
        "description": [
          "Servant of Darkness",
          "A servant of the Lord of Darkness has claimed this area for his master. He will remain here until he is killed."
        ]
      },
      "Shadow": {
        "name": "Shadow",
        "count": 1,
        "file": "shadow",
        "description": [
          "Shadow",
          "A Shadow is lurking in the dark corners of this area. It will remain here until killed."
        ]
      },
      "Shadow Stalker": {
        "name": "Shadow Stalker",
        "count": 2,
        "file": "shadow_stalker",
        "description": [
          "Shadow Stalker",
          "A Shadow Stalker is silently hunting for prey in this area. It will remain here until it is killed."
        ]
      },
      "Soulbinder": {
        "name": "Soulbinder",
        "count": 2,
        "file": "soulbinder",
        "description": [
          "Soulbinder",
          "You may not pay fate to reroll dice during psychic combat with the Soulbinder. It will remain here until it is killed."
        ]
      },
      "Spirit of Vengeance": {
        "name": "Spirit of Vengeance",
        "count": 1,
        "file": "spirit_of_vengeance",
        "description": [
          "Spirit of Vengeance",
          "If you are defeated, in addition to losing 1 life, you must take the Spirit of Vengeance as a Follower. While it is your Follower, whenever you land on a character, you must attack him. If you win, you may force them to take the Spirit of Vengeance instead of your normal reward."
        ]
      },
      "Tinker Imp": {
        "name": "Tinker Imp",
        "count": 2,
        "file": "tinker_imp",
        "description": [
          "Tinker Imp",
          "Before you engage the Tinker Imp in psychic combat, one of your Objects, chosen at random, is teleported to a space 1 die roll clockwise around the board. The Tinker Imp will remain here until it is killed."
        ]
      },
      "Tomb Warden": {
        "name": "Tomb Warden",
        "count": 2,
        "file": "tomb_warden",
        "description": [
          "Tomb Warden",
          "A dire Tomb Warden is guarding the resting place of his lord. If you kill it, gain a Talisman or 3 gold, but you must discard it instead of taking it as a trophy.",
          "It will remain here until it is killed."
        ]
      },
      "Vampire Bats": {
        "name": "Vampire Bats",
        "count": 3,
        "file": "vampire_bats",
        "description": [
          "Vampire Bats",
          "A swarm of Vampire Bats swoops down on you. If you defeat them, the attack counts as a stand-off unless your attack score wins by 2 or more points. The swarm will remain here until it is killed."
        ]
      },
      "Vampire Prince": {
        "name": "Vampire Prince",
        "count": 1,
        "file": "vampire_prince",
        "description": [
          "Vampire Prince",
          "An imperious Vampire Prince dominates this area. If you are defeated, in addition to losing 1 life, he will kill 1 of your Followers at random. If you have none, you lose 1 additional life instead. He will remain here until he is killed."
        ]
      },
      "Vassal of Darkness": {
        "name": "Vassal of Darkness",
        "count": 2,
        "file": "vassal_of_darkness",
        "description": [
          "Vassal of Darkness",
          "The Vassal of Darkness has a Craft of 3 if you are evil, a Craft of 6 if you are neutral, or a Craft of 9 if you are good. If you kill it, gain 1 Craft, but you must discard it instead of taking it as a trophy. It will remain here until it is killed."
        ]
      },
      "Armoursmith": {
        "name": "Armoursmith",
        "count": 1,
        "file": "armoursmith",
        "description": [
          "The Armoursmith will grant the first character who visits him one Armour of their choice from the Purchase deck for free. The Armoursmith will then withdraw to the discard pile."
        ]
      },
      "Dungeon Keeper": {
        "name": "Dungeon Keeper",
        "count": 1,
        "file": "dungeon_keeper",
        "description": [
          "The Dungeon Keeper captures all of your Followers (place them on this card). You may purchase any Followers on this card for 1 gold each. The Dungeon Keeper moves on to the discard pile when there are no Followers on his card."
        ]
      },
      "Oracle": {
        "name": "Oracle",
        "count": 1,
        "file": "oracle",
        "description": [
          "The Oracle will remain here for the rest of the game.",
          "Draw the top 5 cards from the Dungeon deck and place them on top of the Dungeon deck in any order you wish."
        ]
      },
      "Sister of Fate": {
        "name": "Sister of Fate",
        "count": 1,
        "file": "sister_of_fate",
        "description": [
          "The Sister of Fate will remain here for the rest of the game. She will replenish up to 2 fate per visit, free of charge."
        ]
      },
      "Weaponsmith": {
        "name": "Weaponsmith",
        "count": 1,
        "file": "weaponsmith",
        "description": [
          "The Weaponsmith will grant the first character who visits him one Weapon of their choice from the Purchase deck for free.",
          "The Weaponsmith will then depart to the discard pile."
        ]
      },
      "Faithful Hound": {
        "name": "Faithful Hound",
        "count": 1,
        "file": "faithful_hound",
        "description": [
          "The Hound may fight in your place with a Strength of 3.",
          "If the Hound wins, the creature is killed or the opposing character must lose 1 life. If the Hound loses, it is killed and your turn immediately ends. Enemies killed may be taken as trophies."
        ]
      },
      "Holy Avenger": {
        "name": "Holy Avenger",
        "count": 1,
        "file": "holy_avenger",
        "description": [
          "No evil character may have the Holy Avenger.",
          "Whenever you land on an evil character you must attack them and add 3 to your attack roll. If you win, gain 1 Strength and 1 Craft in addition to your normal reward.",
          "The Holy Avenger then ascends to the discard pile."
        ]
      },
      "Hunchback": {
        "name": "Hunchback",
        "count": 1,
        "file": "hunchback",
        "description": [
          "During movement, you may move any number of spaces up to your die roll, instead of moving the full distance as indicated by the die roll.",
          "You must discard the Hunchback when you exit the Dungeon."
        ]
      },
      "Miner": {
        "name": "Miner",
        "count": 1,
        "file": "miner",
        "description": [
          "The Miner can carry an extra four Objects for you if you pay him 1 gold. If you do not pay him, he wanders off to the discard pile.",
          "If you lose the Miner, leave any surplus Objects of your choice in the space you are in."
        ]
      },
      "Tunnel Fighter": {
        "name": "Tunnel Fighter",
        "count": 1,
        "file": "tunnel_fighter",
        "description": [
          "Add 1 to your Strength during battle.",
          "Add 3 to your Strength instead of 1 during battles in the Dungeon."
        ]
      },
      "Wise Man": {
        "name": "Wise Man",
        "count": 1,
        "file": "wise_man",
        "description": [
          "Add 1 to your Craft.",
          "The Wise Man will join another character if they encounter you, unless you evade the character."
        ]
      },
      "Amulet of Speed": {
        "name": "Amulet of Speed",
        "count": 1,
        "file": "amulet_of_speed",
        "description": [
          "Whenever you roll a 1 for your move, you may reroll the die. If you roll a 6 for your move, you may discard the Amulet of Speed and teleport to any other space in the same Region."
        ]
      },
      "Anointed Robe": {
        "name": "Anointed Robe",
        "count": 1,
        "file": "anointed_robe",
        "description": [
          "No evil character may have the Anointed Robe.",
          "Whenever you use Armour and roll a die to prevent the loss of life, you may add 1 to the score.",
          "After rolling the die when praying, you may add 1 to the score."
        ]
      },
      "Blood Stone": {
        "name": "Blood Stone",
        "count": 1,
        "file": "blood_stone",
        "description": [
          "If you have 2 or more lives, you may lose 1 life during your turn to roll 1 die:",
          "1) The Blood Stone shatters to the discard pile",
          "2) Lose 1 life",
          "3) Heal 1 life",
          "4) Gain 1 fate",
          "5-6) Gain 1 Spell",
          "You may only do this once per turn."
        ]
      },
      "Book of Diablerie": {
        "name": "Book of Diablerie",
        "count": 1,
        "file": "book_of_diablerie",
        "description": [
          "No good character may have the Book of Diablerie.",
          "Add 2 to your Craft.",
          "During your turn, you may discard 1 Follower to gain 1 Spell, if your Craft allows. You may only do this once per turn."
        ]
      },
      "Crystal of Power": {
        "name": "Crystal of Power",
        "count": 1,
        "file": "crystal_of_power",
        "description": [
          "Add 2 to your Craft during psychic combat."
        ]
      },
      "Elixir of Rage": {
        "name": "Elixir of Rage",
        "count": 1,
        "file": "elixir_of_rage",
        "description": [
          "You may drink the Elixir of Rage at any time. When you do, roll 1 die:",
          "1-2) Poison, lose 1 life",
          "3-6) Add 3 to your Strength until the end of the turn",
          "The empty vessel is then placed on the discard pile."
        ]
      },
      "Elixir of Wrath": {
        "name": "Elixir of Wrath",
        "count": 1,
        "file": "elixir_of_wrath",
        "description": [
          "You may drink the Elixir of Wrath at any time. When you do, roll 1 die:",
          "1-2) Poison, lose 1 life",
          "3-6) Add 3 to your Craft until the end of the turn",
          "The empty vessel is then placed on the discard pile."
        ]
      },
      "Gauntlet of Might": {
        "name": "Gauntlet of Might",
        "count": 1,
        "file": "gauntlet_of_might",
        "description": [
          "Add 2 to your Strength during battle."
        ]
      },
      "Goblin Slayer": {
        "name": "Goblin Slayer",
        "count": 1,
        "file": "goblin_slayer",
        "description": [
          "",
          "Add 1 to your Strength during battle.",
          "Add 3 to your Strength instead of 1 in battle against Enemy cards that have the word \"Goblin\" or \"Hobgoblin\" in their title."
        ]
      },
      "Gold Seeker": {
        "name": "Gold Seeker",
        "count": 1,
        "file": "gold_seeker",
        "description": [
          "Whenever you exchange any Bag of Gold card, you gain 2 additional gold.",
          "You may discard the Gold Seeker at the Ruins to gain 3 gold."
        ]
      },
      "Scroll of Exile": {
        "name": "Scroll of Exile",
        "count": 1,
        "file": "scroll_of_exile",
        "description": [
          "The Scroll may be used against any Enemy you are about to encounter.",
          "Instead of encountering the Enemy, it is exiled to the discard pile, along with this card."
        ]
      },
      "Shield of Faith": {
        "name": "Shield of Faith",
        "count": 1,
        "file": "shield_of_faith",
        "description": [
          "No evil character may have the Shield of Faith.",
          "If you are defeated in battle or psychic combat and just lost a life, roll 1 die. If you roll a 5 or 6, the Shield protected you and you did not lose that life, though you still lost the attack."
        ]
      },
      "Soul Drinker": {
        "name": "Soul Drinker",
        "count": 1,
        "file": "soul_drinker",
        "description": [
          "No good character may have the Soul Drinker.",
          "You may roll 2 dice in battle and choose which result to use for your attack roll.",
          "If you roll doubles, the Soul Drinker will kill one of your Followers at random and melt to the discard pile."
        ]
      },
      "Spell Ring": {
        "name": "Spell Ring",
        "count": 1,
        "file": "spell_ring",
        "description": [
          "The Ring has 1 Spell (take a Spell from the Spell deck, look at it, and place it on this card). The Ring will cast the Spell whenever you wish (treat the Spell as though you had cast it). When you use the Spell, both it and the Ring vanish to the discard pile."
        ]
      },
      "Talisman": {
        "name": "Talisman",
        "count": 1,
        "file": "talisman",
        "description": [
          "You may only enter the Valley of Fire if you have one of the fabled Talismans."
        ]
      },
      "Casket": {
        "name": "Casket",
        "count": 1,
        "file": "casket",
        "description": [
          "You may roll 1 die to see what the Casket contains:",
          " 1-2) Poisoned needle; lose 1 life",
          "3) Gas trap; lose your next turn",
          "4) Gain 2 gold",
          "5) Gain 1 Spell",
          "6) Gain a Talisman",
          "The Casket then crumbles to the discard pile."
        ]
      },
      "Chest": {
        "name": "Chest",
        "count": 1,
        "file": "chest",
        "description": [
          "You may roll 1 die to open the Chest. If the result is less than or equal to your Craft, gain 3 gold.",
          "If the result is higher than your Craft, you are jabbed by a poisoned needle and lose 1 life.",
          "The Chest then crumbles to the discard pile."
        ]
      },
      "Oaths of Vengeance": {
        "name": "Oaths of Vengeance",
        "count": 1,
        "file": "oaths_of_vengeance",
        "description": [
          "Add 2 to your Strength during battles in the Dungeon.",
          "Add 2 to your Craft during psychic combat in the Dungeon."
        ]
      },
      "Three Bags of Gold": {
        "name": "Three Bags of Gold",
        "count": 1,
        "file": "three_bags_of_gold",
        "description": [
          "Exchange immediately for 3 gold and then place this card on the discard pile."
        ]
      },
      "Torch": {
        "name": "Torch",
        "count": 2,
        "file": "torch",
        "description": [
          "You may roll two dice for your movement in the Dungeon and choose one of the results to use for your move."
        ]
      },
      "Two Bags of Gold": {
        "name": "Two Bags of Gold",
        "count": 3,
        "file": "two_bags_of_gold",
        "description": [
          "Exchange immediately for 2 gold and then place this card on the discard pile."
        ]
      },
      "Weighted Dice": {
        "name": "Weighted Dice",
        "count": 1,
        "file": "weighted_dice",
        "description": [
          "You may use Weighted Dice before you roll the die for your move or attack roll.",
          "You choose which result on the die to use instead of rolling it. The Weighted Dice then roll off to the discard pile."
        ]
      },
      "Passageway": {
        "name": "Passageway",
        "count": 1,
        "file": "passageway",
        "description": [
          "The Passageway will remain here for the rest of the game. You may pass through it if you wish. Roll 1 die to determine where you emerge:",
          "1) Any Tunnel space",
          "2) Crags",
          "3) Forest",
          "4) Ruins",
          "5) Castle",
          "6) Warlock's Cave"
        ]
      },
      "Rune Gate": {
        "name": "Rune Gate",
        "count": 1,
        "file": "rune_gate",
        "description": [
          "On your next turn, instead of your normal move, you may teleport to any other faceup Rune Gate or any Runes space.",
          "Once the Rune Gate has been used, it vanishes to the discard pile."
        ]
      },
      "Secret Passage": {
        "name": "Secret Passage",
        "count": 1,
        "file": "secret_passage",
        "description": [
          "The Secret Passage will remain here for the rest of the game. You may pass through if you wish. Roll 1 die to determine where you emerge:",
          "1) Dungeon Entrance",
          "2) Guard Room",
          "3) Library",
          "4) Cell",
          "5) Kitchen",
          "6) Treasure Chamber"
        ]
      },
      "Snake Pit": {
        "name": "Snake Pit",
        "count": 1,
        "file": "snake_pit",
        "description": [
          "The Snake Pit will remain here for the rest of the game. Roll 1 die.",
          "If the result is higher than your Strength, you fall into the Snake Pit and must either discard 1 Follower or lose 1 life.",
          "If the result is equal to or less than your Strength, you cross the Snake Pit unscathed."
        ]
      },
      "Tinker Forge": {
        "name": "Tinker Forge",
        "count": 1,
        "file": "tinker_forge",
        "description": [
          "The Tinker Forge will remain here for the rest of the game.",
          "Gain 3 gold but you must miss your next turn if your Craft is less than 5."
        ]
      }
    },
    "ADVENTURE": {
      "Dark Denizens": {
        "name": "Dark Denizens",
        "count": 2,
        "file": "dark_denizens",
        "description": [
          "For 2 rounds following this turn, whenever a character is instructed to draw Adventure Cards, they must draw Dungeon Cards instead.",
          "The Dark Denizens then retreat to the discard pile."
        ]
      },
      "Trap Door": {
        "name": "Trap Door",
        "count": 2,
        "file": "trap_door",
        "description": [
          "Move your character to the Dungeon Entrance or any faceup Dungeon Door. The Trap Door is then discarded."
        ]
      },
      "Burrow Worm": {
        "name": "Burrow Worm",
        "count": 1,
        "file": "burrow_worm",
        "description": [
          "Burrow Worm",
          "A gruesome Burrow Worm erupts in this area. If you are defeated, in addition to losing 1 life, you fall into its burrow and land on the Dungeon Entrance. It will remain here until it is killed."
        ]
      },
      "Dungeon Door": {
        "name": "Dungeon Door",
        "count": 2,
        "file": "dungeon_door",
        "description": [
          "The Dungeon Door will remain here for the rest of the game. On your next turn, instead of your normal move, you may move to the Dungeon Entrance."
        ]
      },
      "Rune Gate": {
        "name": "Rune Gate",
        "count": 3,
        "file": "rune_gate",
        "description": [
          "On your next turn, instead of your normal move, you may teleport to any other faceup Rune Gate or any Runes space.",
          "Once the Rune Gate has been used, it vanishes to the discard pile."
        ]
      }
    },
    "TREASURE": {
      "Aegis": {
        "name": "Aegis",
        "count": 1,
        "file": "aegis",
        "description": [
          "You may use Aegis if your attack score is less than your opponent's. To do so, roll 1 die:",
          "1-3) You lose the attack as normal",
          "4-6) You do not lose the attack; it is considered a stand-off instead"
        ]
      },
      "Bag of Holding": {
        "name": "Bag of Holding",
        "count": 1,
        "file": "bag_of_holding",
        "description": [
          "The Bag can carry an extra 8 Objects for you. If you lose an attack, the victor may not take either the Bag or any Object stored inside. Similarly, neither may be taken by any character's special ability or Spell. If you lose the Bag, you also lose any Object stored inside."
        ]
      },
      "Book of Lore": {
        "name": "Book of Lore",
        "count": 1,
        "file": "book_of_lore",
        "description": [
          "Add 1 to your Craft.",
          "At the start of your turn, you may gain 1 Spell, if your Craft allows."
        ]
      },
      "Cloak of Feathers": {
        "name": "Cloak of Feathers",
        "count": 1,
        "file": "cloak_of_feathers",
        "description": [
          "Whenever you pay a fate to reroll the die for your move, you may replenish 1 fate.",
          "Instead of moving normally, you may discard the Cloak of Feathers to teleport to any space in the same Region."
        ]
      },
      "Clockwork Owl": {
        "name": "Clockwork Owl",
        "count": 1,
        "file": "clockwork_owl",
        "description": [
          "During movement, you may move any number of spaces up to your die roll, instead of moving the full distance as indicated by the die roll."
        ]
      },
      "Elixir of Life": {
        "name": "Elixir of Life",
        "count": 1,
        "file": "elixir_of_life",
        "description": [
          "You may drink from the Elixir of Life whenever you lose a life. To do so, roll 1 die:",
          "1) The Elixir drains to the discard pile",
          "2) Lose 1 life",
          "3) Nothing happens",
          "4-5) Heal 1 life",
          "6) Heal 2 life"
        ]
      },
      "Orb of Prophesy": {
        "name": "Orb of Prophesy",
        "count": 1,
        "file": "orb_of_prophesy",
        "description": [
          "Whenever you draw Adventure Cards, you may draw one more card than required. You must then discard one card that you do not wish to encounter."
        ]
      },
      "Talisman": {
        "name": "Talisman",
        "count": 1,
        "file": "talisman",
        "description": [
          "You may only enter the Valley of Fire if you have one of the fabled Talismans."
        ]
      },
      "Totem Staff": {
        "name": "Totem Staff",
        "count": 1,
        "file": "totem_staff",
        "description": [
          "You may hold 1 more Spell than your Craft allows.",
          "During your turn, you may discard 1 trophy to heal up to 2 life. You may only do this once per turn."
        ]
      }
    }
  },
  "The Firelands": {
    "SPELLS": {
      "Burning Curiosity": {
        "name": "Burning Curiosity",
        "count": 1,
        "file": "burning_curiosity",
        "description": [
          "Cast at the beginning of any character's turn. Look at the top 5 cards of the Adventure deck. Burn 3 of those cards. Place all remaining cards back on top of the Adventure deck in any order."
        ]
      },
      "Conflagration": {
        "name": "Conflagration",
        "count": 1,
        "file": "conflagration",
        "description": [
          "Cast after you have rolled for movement but before you move. Either burn 1 faceup Adventure Card in your Region, or burn 1 Follower or Object possessed by another character in your Region."
        ]
      },
      "Crack the Earth": {
        "name": "Crack the Earth",
        "count": 2,
        "file": "crack_the_earth",
        "description": [
          "Cast at the start of your turn on a space in your Region. Place a fireland token on that space. All characters on that space must lose 1 life."
        ]
      },
      "Curse of Flame": {
        "name": "Curse of Flame",
        "count": 1,
        "file": "curse_of_flame",
        "description": [
          "Cast on another character at the start of their turn. Until the end of their turn, burn all cards they draw and all Followers and Objects they gain. When they end their movement place a fireland token on their space."
        ]
      },
      "Desolation": {
        "name": "Desolation",
        "count": 1,
        "file": "desolation",
        "description": [
          "Cast at the start of your turn on any space in your Region. You bring destruction upon that space, reducing it to dirt and rubble. Place a Desert or Ruins Terrain Card on that space."
        ]
      },
      "Disguise": {
        "name": "Disguise",
        "count": 1,
        "file": "disguise",
        "description": [
          "Cast at any time. Until the end of this turn you may evade any creature or character and you may change your alignment at will. When the turn ends you return to your previous alignment."
        ]
      },
      "Evil Eye": {
        "name": "Evil Eye",
        "count": 1,
        "file": "evil_eye",
        "description": [
          "Cast at any time on a character in your space. They lose all of their fate and miss 1 turn."
        ]
      },
      "Extinguish": {
        "name": "Extinguish",
        "count": 2,
        "file": "extinguish",
        "description": [
          "Cast at any time. Until the start of your next turn, all of your cards gain ÷ and you do not lose lives from fireland tokens."
        ]
      },
      "Fiery Retribution": {
        "name": "Fiery Retribution",
        "count": 1,
        "file": "fire_retribution",
        "description": [
          "Cast when you are defeated in battle or psychic combat, even if you are killed. Burn all your Spells, Objects and Followers. Burn the Enemy that defeated you. If you were defeated by a character, they must lose 2 lives and burn 1 Object and 1 Follower of your choice, and 1 Spell at random."
        ]
      },
      "Restore the World": {
        "name": "Restore the World",
        "count": 2,
        "file": "restore_the_world",
        "description": [
          "Cast at the start of your turn on any space in your Region. Remove 1 Terrain Card and all fireland tokens from that space."
        ]
      },
      "Spell Scorch": {
        "name": "Spell Scorch",
        "count": 1,
        "file": "spell_scorch",
        "description": [
          "Cast as required. Burn a Spell as it is being cast but before it takes effect, or force a character to burn 1 of their Spells at random."
        ]
      },
      "Suleiman's Command": {
        "name": "Suleiman's Command",
        "count": 1,
        "file": "suleimans_command",
        "description": [
          "Cast at the start of your turn on a faceup Spirit or Elemental in your Region. Either discard that Enemy or move it to any other space (not in the Inner Region)."
        ]
      },
      "Terramorph": {
        "name": "Terramorph",
        "count": 2,
        "file": "terramorph",
        "description": [
          "Cast at the start of your turn on any space in your Region. Roll 1 die to see what that space transforms into:",
          "1) Desert   4) Hills",
          "2) Crags   5) Fields",
          "3) Forest   6) Woods",
          " Place the appropriate Terrain Card on that space."
        ]
      },
      "Upheaval": {
        "name": "Upheaval",
        "count": 1,
        "file": "upheaval",
        "description": [
          "Cast at the start of your turn on any space in your Region. The earth shifts and heaves upward. Place a Crags or Hills Terrain Card on that space."
        ]
      },
      "Verdant Growth": {
        "name": "Verdant Growth",
        "count": 1,
        "file": "verdant_growth",
        "description": [
          "Cast at the start of your turn on any space in your Region. The area bursts with trees, vines and underbrush. Place a Forest or Woods Terrain Card on that space."
        ]
      }
    },
    "ADVENTURE": {
      "City in Flames": {
        "name": "City in Flames",
        "count": 1,
        "file": "city_in_flames",
        "description": [
          "The Ifrit have laid siege to the City, reducing the gates to smouldering rubble. Place a fireland token and a Ruins Terrain Card on the City space. Then discard this card."
        ]
      },
      "Emerging Volcano": {
        "name": "Emerging Volcano",
        "count": 1,
        "file": "emerging_volcano",
        "description": [
          "An entire mountain, wreathed in flame, has erupted from the earth. Place a Crags Terrain Card and a fireland token on this space. Then discard this card."
        ]
      },
      "Eruption": {
        "name": "Eruption",
        "count": 1,
        "file": "eruption",
        "description": [
          "The earth bursts open, spewing lava and noxious fumes. Each character on a space with a fireland token must lose 1 life and burn 1 of their cards. If there are no fireland tokens in play, place a fireland token on each character's space. The Eruption then dies down and is placed on the discard pile."
        ]
      },
      "Flame Rift": {
        "name": "Flame Rift",
        "count": 5,
        "file": "flame_rift",
        "description": [
          "The ground splits open, releasing flame and Ifrit into the world. Burn all Adventure Cards in this space and the top 3 cards of the Adventure deck. Place a fireland token on this space. The ground then closes and Flame Rift is placed on the discard pile."
        ]
      },
      "Ifrit Hoard": {
        "name": "Ifrit Hoard",
        "count": 2,
        "file": "ifrit_hoard",
        "description": [
          "Reveal the top 5 cards of the Adventure deck. You may take any of the Objects revealed. Burn all remaining cards. If you reveal no Objects, place a fireland token on your space."
        ]
      },
      "Ifrit Invasion": {
        "name": "Ifrit Invasion",
        "count": 3,
        "file": "ifrit_invasion",
        "description": [
          "Roll 1 die to see where the Invasion takes place:",
          "1) Castle   4) Chapel",
          "2) Village   5) Graveyard",
          "3) Tavern   6) Sentinel",
          "Place a fireland token and a Ruins Terrain Card on that space. If that space is not on the board, roll again. The Invasion then marches to the discard pile."
        ]
      },
      "Magma Storm": {
        "name": "Magma Storm",
        "count": 1,
        "file": "magma_storm",
        "description": [
          "Magma rains from the sky, turning the world into ash. Burn all faceup cards in this Region and the top 6 cards of the Adventure deck. The Storm then abates to the discard pile."
        ]
      },
      "Mirage": {
        "name": "Mirage",
        "count": 2,
        "file": "mirage",
        "description": [
          "The character to your left rolls 1 die and moves you that many spaces in any direction. You encounter the space you land on. The Mirage then fades and is placed on the discard pile."
        ]
      },
      "Restoring Rains": {
        "name": "Restoring Rains",
        "count": 2,
        "file": "restoring_rains",
        "description": [
          "A gentle rain brings refreshment to the land. Discard 1 fireland token from a space in your Region. Then all characters in your Region heal 1 life and the Rains flow off to the discard pile."
        ]
      },
      "Rise of the Phoenix": {
        "name": "Rise of the Phoenix",
        "count": 1,
        "file": "rise_of_the_phoenix",
        "description": [
          "The Phoenix rises, bringing rebirth to the land. Choose one: All characters heal all of their lives; all characters replenish all of their fate; shuffle all burnt cards back into their respective decks."
        ]
      },
      "Sandstorm": {
        "name": "Sandstorm",
        "count": 1,
        "file": "sandstorm",
        "description": [
          "A violent storm has buried this space in sand. Place a Desert Terrain Card on this space. The Sandstorm then dissipates to the discard pile."
        ]
      },
      "Temple in Flames": {
        "name": "Temple in Flames",
        "count": 1,
        "file": "temple_in_flames",
        "description": [
          "The Ifrit have brought their wrath upon the great Temple. Place a fireland token and a Ruins Terrain Card on the Temple space. Then discard this card."
        ]
      },
      "Ifrit Emir": {
        "name": "Ifrit Emir",
        "count": 1,
        "file": "ifrit_emir",
        "description": [
          "Ifrit Emir",
          "The Ifrit Emir leads the armies of the Firelands with skill and cunning. All other faceup Enemy cards with \"Ifrit\" in their title add 1 to their attack roll. He will remain here until killed."
        ]
      },
      "Ifrit Envoy": {
        "name": "Ifrit Envoy",
        "count": 1,
        "file": "ifrit_envoy",
        "description": [
          "Ifrit Envoy",
          "When you encounter the Ifrit Envoy you may pay 1 gold to move him to another character in your Region, who must then discard 1 of their Followers."
        ]
      },
      "Ifrit Invader": {
        "name": "Ifrit Invader",
        "count": 4,
        "file": "ifrit_invader",
        "description": [
          "Ifrit Invader",
          "When you encounter the Ifrit Invader, place 1 fireland token on your space and burn the top 3 cards of the Adventure deck. He will remain here until killed."
        ]
      },
      "Ifrit Raider": {
        "name": "Ifrit Raider",
        "count": 3,
        "file": "ifrit_raider",
        "description": [
          "Ifrit Raider",
          "An Ifrit Raider is burning and pillaging this space. Add 1 to the Raider's attack roll for each fireland token in this Region. He will remain here until killed."
        ]
      },
      "Ifrit Shapeshifter": {
        "name": "Ifrit Shapeshifter",
        "count": 1,
        "file": "ifrit_shapeshifter",
        "description": [
          "Ifrit Shapeshifter",
          "Whenever an Enemy card is burnt place a fate token on this card. Add 1 to the Shapeshifter's attack roll for each fate token on it. You cannot encounter the Ifrit Shapeshifter if there are no fate tokens on it. It remains here until killed."
        ]
      },
      "Ifrit Sheikh": {
        "name": "Ifrit Sheikh",
        "count": 1,
        "file": "ifrit_sheikh",
        "description": [
          "Ifrit Sheikh",
          "Whenever a character draws an Enemy card with \"Ifrit\" in its title, they must place 1 fireland token on the space closest to the Sheikh which does not have a fireland token. If 2 spaces are equally close, that character chooses. The Sheikh will remain here until killed."
        ]
      },
      "Ifrit Sorceress": {
        "name": "Ifrit Sorceress",
        "count": 1,
        "file": "ifrit_sorceress",
        "description": [
          "Ifrit Sorceress",
          "The Ifrit Sorceress will not stop until all the mystic knowledge of the surface world has been turned to ash. Before a character in this Region can cast a Spell, they must burn 1 of their other Spells and the top card of the Spell deck. She will remain here until killed."
        ]
      },
      "Ifrit Sultan": {
        "name": "Ifrit Sultan",
        "count": 1,
        "file": "ifrit_sultan",
        "description": [
          "Ifrit Sultan",
          "A character in the same Region as the Ifrit Sultan at the start of their turn must either place 1 fireland token on their space or burn 1 of their cards. When the Ifrit Sultan is defeated remove all fireland tokens from this Region. He will remain here until killed."
        ]
      },
      "Ifrit Sultana": {
        "name": "Ifrit Sultana",
        "count": 1,
        "file": "ifrit_sultana",
        "description": [
          "Ifrit Sultana",
          "The beautiful and terrifying Ifrit Sultana has claimed this world as her plaything. At the start of their turn each character must draw the top card of the Adventure deck. If the card is ÷, place it back on top of the deck, otherwise, burn it. She will remain here until killed."
        ]
      },
      "Cultist of Flame": {
        "name": "Cultist of Flame",
        "count": 1,
        "file": "cultist_of_flame",
        "description": [
          "Cultist of Flame",
          "When the Cultist of Flame is defeated, burn 1 card from the top of the Adventure deck for each fireland token on the board. He will remain here until killed."
        ]
      },
      "Brass Horseman": {
        "name": "Brass Horseman",
        "count": 1,
        "file": "brass_horseman",
        "description": [
          "The Brass Horseman will direct you to the Place you most desire. On your next turn, instead of moving normally, you may teleport to any space with a faceup Place card."
        ]
      },
      "Djinn Sultan": {
        "name": "Djinn Sultan",
        "count": 1,
        "file": "djinn_sultan",
        "description": [
          "This powerful Djinn will grant you a wish before vanishing to the discard pile. Pick one: Gain 4 gold; kill 1 faceup Enemy and take it as a trophy; gain your full complement of Spells; heal all your lives; replenish all your fate; or take 1 Object, Follower, or random Spell from another character."
        ]
      },
      "Harbinger of Flame": {
        "name": "Harbinger of Flame",
        "count": 1,
        "file": "harbinger_of_flame",
        "description": [
          "The Harbinger brings promises of flame and despair. Take all ÷ cards in the Adventure deck discard pile, shuffle them together, and place them on the top of the Adventure deck. Then the Harbinger mysteriously vanishes off to the discard pile."
        ]
      },
      "Leper": {
        "name": "Leper",
        "count": 1,
        "file": "leper",
        "description": [
          "Characters that land on the Leper or are on a space to which the Leper is moved must roll 1 die. On a roll of 1 or 2 they must lose either a Follower or 1 life. The Leper then shambles on. Roll 1 die and move him that many spaces clockwise."
        ]
      },
      "Marid Sultana": {
        "name": "Marid Sultana",
        "count": 1,
        "file": "marid_sultana",
        "description": [
          "The Sultana of the Marid has come to aid the world against the Ifrit. If you beseech her help, you may move 1 fireland token from any space to this card, where it will do no harm. When this card has 4 fireland tokens on it, she returns to the waters to rest; discard her along with all fireland tokens on this card."
        ]
      },
      "Nefarious Vizier": {
        "name": "Nefarious Vizier",
        "count": 1,
        "file": "nefarious_vizier",
        "description": [
          "The Vizier attempts to sway you with evil counsel. If you are good, you must lose 1 Craft. If you are neutral, you must either become evil or lose 1 Craft. If you are evil, gain 1 Craft, and the Vizier moves on to the discard pile."
        ]
      },
      "Questing Prince": {
        "name": "Questing Prince",
        "count": 1,
        "file": "questing_prince",
        "description": [
          "A foreign Prince is looking for a wondrous artefact to bring back to his kingdom. He rewards the first character to discard a Magic Object here with 4 gold and then journeys away to the discard pile."
        ]
      },
      "Bound Ifrit": {
        "name": "Bound Ifrit",
        "count": 1,
        "file": "bound_ifrit",
        "description": [
          "You secure the services of a captured Ifrit. You may have the Bound Ifrit burn 1 Adventure Card in your space before you encounter it. After you do so, it escapes 6 spaces counter-clockwise."
        ]
      },
      "Camel": {
        "name": "Camel",
        "count": 2,
        "file": "camel",
        "description": [
          "The Camel can carry an extra 4 Objects for you. If you lose the Camel, leave any surplus Objects of your choice in the space you are in.",
          "You do not lose a life in the Desert."
        ]
      },
      "Devout Blacksmith": {
        "name": "Devout Blacksmith",
        "count": 1,
        "file": "devout_blacksmith",
        "description": [
          "This blacksmith can touch fire without being harmed. He happily offers his aid against the Ifrit. At the start of your turn you may either burn 1 of your Objects to take 1 Object from the discard pile or burn 1 of your Magic Objects to take 1 Magic Object from the discard pile."
        ]
      },
      "Loyal Vizier": {
        "name": "Loyal Vizier",
        "count": 1,
        "file": "loyal_vizier",
        "description": [
          "No evil character may have the Loyal Vizier.",
          "Add 1 to your Craft.",
          "If you are about to lose your last life, you may lose 1 Craft instead."
        ]
      },
      "Old Man of the Sea": {
        "name": "Old Man of the Sea",
        "count": 1,
        "file": "old_man_of_the_sea",
        "description": [
          "You must take him as a Follower. At the start of your turn, lose 1 Craft or 1 Strength and place it on this card. If you cannot, you must lose 1 life instead. You may discard him by visiting the Tavern. When you lose the Old Man of the Sea, you gain all Craft and Strength on this card."
        ]
      },
      "Royal Masons": {
        "name": "Royal Masons",
        "count": 1,
        "file": "royal_masons",
        "description": [
          "When your turn ends you may either remove a Ruins Terrain Card from your space or pay 1 gold to place a Graveyard or Chapel Terrain Card on your space."
        ]
      },
      "Taleweaver": {
        "name": "Taleweaver",
        "count": 1,
        "file": "taleweaver",
        "description": [
          "When you gain Taleweaver draw 3 cards from the bottom of any Adventure deck, look at them, and place them facedown on Taleweaver. At the start of any character's turn you may take 1 card from Taleweaver and place it on top of the Adventure deck. When the last card on Taleweaver is removed pass this Follower to the character to your right."
        ]
      },
      "Atlas of Al-Balkhi": {
        "name": "Atlas of Al-Balkhi",
        "count": 1,
        "file": "atlas_of_albalkhi",
        "description": [
          "Al-Balkhi was the greatest cartographer the world has ever known; this atlas is his greatest work. During your turn you may spend 1 fate to move 1 Terrain Card and/or 1 fireland token from one space in your Region to any other space in your Region."
        ]
      },
      "Brass Bottle": {
        "name": "Brass Bottle",
        "count": 1,
        "file": "brass_bottle",
        "description": [
          "When you draw a Spirit or Elemental, you may bind it instead of fighting it. If you do, place that Enemy on this card. You may discard this Enemy to cast the top Spell on the Spell discard pile. Burn the Spell afterward. You may only have 1 Enemy on this card at a time."
        ]
      },
      "Enchanted Map": {
        "name": "Enchanted Map",
        "count": 1,
        "file": "enchanted_map",
        "description": [
          "Instead of rolling for movement on your turn, you may teleport to another space with the same name as your current space."
        ]
      },
      "Eternal Talisman": {
        "name": "Eternal Talisman",
        "count": 1,
        "file": "eternal_talisman",
        "description": [
          "You may only enter the Valley of Fire if you have one of the fabled Talismans."
        ]
      },
      "Firelands Scourge": {
        "name": "Firelands Scourge",
        "count": 1,
        "file": "firelands_scourge",
        "description": [
          "A favourite of Ifrit slavers. When you defeat a character in battle or psychic combat and choose to take a life, that character must also burn one of their Followers."
        ]
      },
      "Flying Carpet": {
        "name": "Flying Carpet",
        "count": 1,
        "file": "flying_carpet",
        "description": [
          "If you roll a 6 for your move, you may teleport to any other space in this Region instead of moving normally."
        ]
      },
      "Inferno Spear": {
        "name": "Inferno Spear",
        "count": 1,
        "file": "inferno_spear",
        "description": [
          "Add 2 to your Strength during battle.",
          "When you defeat a character in battle and choose to take a life, that character must also burn one of their Objects."
        ]
      },
      "Magic Lamp": {
        "name": "Magic Lamp",
        "count": 1,
        "file": "magic_lamp",
        "description": [
          "The genie of the lamp is slave to no man for long; use your wishes wisely. Place 3 fate on the Magic Lamp when you draw it. After you roll, you may spend 1 fate from this card to change the result of 1 die to a result of your choice. When there is no more fate on this card immediately place 3 fate on the Magic Lamp and pass it to the character to your left."
        ]
      },
      "Magic Shovel": {
        "name": "Magic Shovel",
        "count": 1,
        "file": "magic_shovel",
        "description": [
          "This simple looking shovel is able to do the work of a hundred years in a single day. During your turn you may lose 1 life to place a Hills, Fields, or Plains Terrain Card on your space."
        ]
      },
      "Orb of Flames": {
        "name": "Orb of Flames",
        "count": 1,
        "file": "orb_of_flames",
        "description": [
          "Whenever you draw Adventure Cards, you may draw 1 more card than required. If you do so, you must then burn 1 of these cards, if able."
        ]
      },
      "Shamshir of Khamsin": {
        "name": "Shamshir of Khamsin",
        "count": 1,
        "file": "shamshir_of_khamsin",
        "description": [
          "Add 2 to your Strength during battle.",
          "Once during your turn, when you win a battle while not in the Inner Region, you may immediately move 1 space and encounter the space you land on."
        ]
      },
      "Wand of Cinders": {
        "name": "Wand of Cinders",
        "count": 1,
        "file": "wand_of_cinders",
        "description": [
          "At the start of your turn you may burn 1 of your Spells to draw a Spell, if your Craft allows."
        ]
      },
      "Suleiman's Seal": {
        "name": "Suleiman's Seal",
        "count": 1,
        "file": "suleimans_seal",
        "description": [
          "You may automatically defeat a Spirit or Elemental in your space. If you do, place this card on the Temple space. If you cannot, discard it instead.",
          "You cannot take this card from the Temple unless you pay 1 fate."
        ]
      },
      "Dousing Rod": {
        "name": "Dousing Rod",
        "count": 1,
        "file": "dousing_rod",
        "description": [
          "During your turn you may remove 1 fireland token from your space. Then place this card on the Village. If you cannot, discard it instead.",
          "You cannot take this card from the Village unless you are visiting the Mystic and you pay 1 gold."
        ]
      },
      "Ifrit Cloak": {
        "name": "Ifrit Cloak",
        "count": 1,
        "file": "ifrit_cloak",
        "description": [
          "You do not lose life from fireland tokens.",
          "If you lose a battle or psychic combat against an Enemy with \"Ifrit\" in its title you must discard this Object."
        ]
      },
      "Ifrit Gold": {
        "name": "Ifrit Gold",
        "count": 2,
        "file": "ifrit_gold",
        "description": [
          "These coins will never melt in a smelter's furnace, making them impossible to counterfeit. Exchange immediately for 3 gold and then place this card on the discard pile."
        ]
      },
      "Scimitar": {
        "name": "Scimitar",
        "count": 2,
        "file": "scimitar",
        "description": [
          "Add 1 to your Strength during battle.",
          "If you roll a 6 on your attack roll you may add 2 to the result."
        ]
      },
      "Seeds of Paradise": {
        "name": "Seeds of Paradise",
        "count": 1,
        "file": "seeds_of_paradise",
        "description": [
          "After moving, you may place a Woods Terrain Card on your space. Then place this card on the Forest. If you cannot, discard it instead.",
          "You cannot take this card from the Forest unless you pay 1 fate."
        ]
      },
      "Simurgh Feather": {
        "name": "Simurgh Feather",
        "count": 1,
        "file": "simurgh_feather",
        "description": [
          "Only gifted to those who aid the Simurgh in some vital task, the feather makes the one who holds it immune to all but the hottest of flames. All of your cards gain ÷."
        ]
      },
      "Taweez Amulet": {
        "name": "Taweez Amulet",
        "count": 1,
        "file": "taweez_amulet",
        "description": [
          "Elementals will not attack you, though you may choose to attack them. You may discard this card during your turn to remove all fireland tokens from your space."
        ]
      },
      "Winter Oil": {
        "name": "Winter Oil",
        "count": 1,
        "file": "winter_oil",
        "description": [
          "At any time you may give all of your Objects ÷ for the rest of the turn. Then place this card on the City. If you cannot, discard it instead. You cannot take this card from the City unless you are visiting the Alchemist and you pay 1 gold."
        ]
      },
      "Caves of Wonder": {
        "name": "Caves of Wonder",
        "count": 1,
        "file": "caves_of_wonder",
        "description": [
          "A magical place filled with wealth beyond imagining and danger beyond comprehension. When encountered, draw 3 Adventure Cards and add them to this space."
        ]
      },
      "City of the Ifrit": {
        "name": "City of the Ifrit",
        "count": 1,
        "file": "city_of_the_ifrit",
        "description": [
          "One of the Ifrit's greatest cities has risen from the depths of the world and will stay here for the rest of the game. Lose 1 life and then roll 1 die:",
          "1) Burn 1 of your Objects",
          "2) Burn 1 of your Followers",
          "3) Burn 1 of your Spells",
          "4) Gain 1 fate",
          "5) Gain 1 Strength",
          "6) Gain 1 Craft"
        ]
      },
      "House of Wisdom": {
        "name": "House of Wisdom",
        "count": 1,
        "file": "house_of_wisdom",
        "description": [
          "This library contains the knowledge of countless generations. You may miss your next turn to either draw 1 Spell, if your Craft allows, or discard 1 Spell to gain 1 Craft."
        ]
      },
      "Lava Pools": {
        "name": "Lava Pools",
        "count": 1,
        "file": "lava_pools",
        "description": [
          "Burning pockets of magma fill this space. Roll 1 die. If you roll above your Craft, burn 1 Object. If you roll above your Strength, burn 1 Follower."
        ]
      },
      "Sacrificial Altar": {
        "name": "Sacrificial Altar",
        "count": 1,
        "file": "sacrificial_altar",
        "description": [
          "You may burn 1 of your trophies to pray. If you do, roll 1 die and add up to 1 for each point of Strength or Craft the trophy has:",
          "1-3) Nothing happens",
          "4-5) Gain 1 fate or 1 life",
          "6-7) Gain 1 fate and 1 life",
          "8-9) Gain 2 fate and 2 lives",
          "10-11) Gain 3 fate and 3 lives",
          "12+) Gain 1 Strength and 1 Craft"
        ]
      },
      "The Grand Bazaar": {
        "name": "The Grand Bazaar",
        "count": 1,
        "file": "the_grand_bazaar",
        "description": [
          "You may reveal the top 5 cards of the Adventure deck, then pay up to 5 gold. Encounter 1 revealed card for each gold you paid, in any order you wish. Discard any remaining cards."
        ]
      },
      "Wasteland": {
        "name": "Wasteland",
        "count": 1,
        "file": "wasteland",
        "description": [
          "War has devastated this space and its denizens have long since fled. When encountered, discard all other faceup Adventure Cards on this space and on each adjacent space."
        ]
      }
    },
    "TERRAIN": {
      "Chapel": {
        "name": "Chapel",
        "count": 1,
        "file": "terrain_chapel",
        "description": [
          "BASED ON ALIGNMENT",
          "EVIL: Lose one life.",
          "NEUTRAL: Heal up to your life value at the cost of one gold each.",
          "GOOD: Either heal up to your life value for free, or pray by rolling 1 die:",
          "1-4) Ignored. 5) Gain 1 life. 6) Gain 1 Spell."
        ]
      },
      "Crags": {
        "name": "Crags",
        "count": 2,
        "file": "terrain_crags",
        "description": [
          "ROLL 1 DIE",
          "1) Attacked by a Spirit with Craft 4.",
          "2-3) Lost; lose your next turn.",
          "4-5) Safe; no effect.",
          "6) A barbarian leads you out; gain 1 Strength."
        ]
      },
      "Desert": {
        "name": "Desert",
        "count": 3,
        "file": "terrain_desert",
        "description": [
          "LOSE 1 LIFE THEN DRAW 1 CARD",
          "Do not draw a card if there is already one in this space."
        ]
      },
      "Fields": {
        "name": "Fields",
        "count": 2,
        "file": "terrain_fields",
        "description": [
          "DRAW 1 CARD",
          "Do not draw a card if there is already one in this space."
        ]
      },
      "Forest": {
        "name": "Forest",
        "count": 2,
        "file": "terrain_forest",
        "description": [
          "ROLL 1 DIE",
          "1) Attacked by a brigand with Strength 4.",
          "2-3) Lost; lose your next turn.",
          "4-5) Safe.",
          "6) A ranger guides you out, gain 1 Craft."
        ]
      },
      "Graveyard": {
        "name": "Graveyard",
        "count": 1,
        "file": "terrain_graveyard",
        "description": [
          "BASED ON ALIGNMENT",
          "GOOD: Lose one life.",
          "NEUTRAL: Replenish fate up to your fate value at the cost of one gold each.",
          "EVIL: Either replenish fate up to your fate value for free, or pray by rolling one die:",
          "1-4) Ignored. 5) Gain 1 fate. 6) Gain 1 Spell."
        ]
      },
      "Hills": {
        "name": "Hills",
        "count": 2,
        "file": "terrain_hills",
        "description": [
          "DRAW 1 CARD",
          "Do not draw a card if there is already one in this space."
        ]
      },
      "Plains": {
        "name": "Plains",
        "count": 1,
        "file": "terrain_plains",
        "description": [
          "DRAW 1 CARD",
          "Do not draw a card if there is already one in this space."
        ]
      },
      "Ruins": {
        "name": "Ruins",
        "count": 3,
        "file": "terrain_ruins",
        "description": [
          "DRAW 2 CARDS",
          "If there are any cards already in this space, draw only enough to take the total to two cards."
        ]
      },
      "Woods": {
        "name": "Woods",
        "count": 1,
        "file": "terrain_woods",
        "description": [
          "DRAW 1 CARD",
          "Do not draw a card if there is already one in this space."
        ]
      }
    }
  },
  "The Frostmarch": {
    "SPELLS": {
      "Black Ice": {
        "name": "Black Ice",
        "count": 1,
        "file": "black_ice",
        "description": [
          "Cast on any space (except the Inner Region) after a character rolled a die for movement but before they move. Until the start of your next turn, any character landing on this space must move to the next space, continuing in the same direction (clockwise or counterclockwise)."
        ]
      },
      "Bolster": {
        "name": "Bolster",
        "count": 2,
        "file": "bolster",
        "description": [
          "Cast on yourself when you are about to engage in battle or psychic combat. Roll 1 die and add the result to your attack score."
        ]
      },
      "Brainwave": {
        "name": "Brainwave",
        "count": 2,
        "file": "brainwave",
        "description": [
          "Cast on yourself at any time. Your Craft value is doubled until the end of the turn."
        ]
      },
      "Energize": {
        "name": "Energize",
        "count": 2,
        "file": "energize",
        "description": [
          "Cast on yourself at any time. Your Strength value is doubled until the end of the turn."
        ]
      },
      "Freeze": {
        "name": "Freeze",
        "count": 1,
        "file": "freeze",
        "description": [
          "Cast on a creature or character you are about to engage in battle or psychic combat. The creature or character cannot roll a die for their attack roll."
        ]
      },
      "Hydra Spell": {
        "name": "Hydra Spell",
        "count": 1,
        "file": "hydra_spell",
        "description": [
          "Cast as required. Any Spell that has just been cast on a character will also affect any other characters of your choice (including your own character). Treat the Spell as if it was cast individually on each character, ignoring Region and timing restrictions."
        ]
      },
      "Marked for Glory": {
        "name": "Marked for Glory",
        "count": 1,
        "file": "marked_for_glory",
        "description": [
          "Cast on yourself when you are about to make a die roll. After rolling, you may add up to 6 to the result of the die roll."
        ]
      },
      "Metamorph": {
        "name": "Metamorph",
        "count": 1,
        "file": "metamorph",
        "description": [
          "Cast on an Enemy who is about to engage in battle or psychic combat. Discard the Enemy and replace it with another faceup Enemy from any Region (both Enemies must have the same encounter number)."
        ]
      },
      "Obliterate": {
        "name": "Obliterate",
        "count": 1,
        "file": "obliterate",
        "description": [
          "Cast at the start of your turn, or when you have just completed your move. Remove all faceup Adventure Cards from this Region and place them on the discard pile."
        ]
      },
      "Path of Destiny": {
        "name": "Path of Destiny",
        "count": 2,
        "file": "path_of_destiny",
        "description": [
          "Cast on any character that does not have a quest at the start of their turn. That character must draw and accept a Warlock Quest Card."
        ]
      },
      "Syphon Strength": {
        "name": "Syphon Strength",
        "count": 1,
        "file": "syphon_strength",
        "description": [
          "Cast on any character with at least 1 Strength counter at the start of their turn. The character must lose 1 Strength, and your character gains 1 Strength."
        ]
      },
      "Time Steal": {
        "name": "Time Steal",
        "count": 2,
        "file": "time_steal",
        "description": [
          "Cast on any character at the start of their turn. That character must immediately end their turn. Then, you immediately take an additional turn."
        ]
      },
      "Toadify!": {
        "name": "Toadify!",
        "count": 2,
        "file": "toadify",
        "description": [
          "Cast on a creature or character you are about to engage in battle. Roll 1 die:",
          "1) The Spell backfires and you are turned into a Toad for 3 turns",
          "2-3) No effect",
          "4-6) If cast on a creature, its Strength",
          "is reduced to 1 until the end of the turn. If cast on a character, they are turned into a Toad for 3 turns"
        ]
      },
      "Vortex": {
        "name": "Vortex",
        "count": 1,
        "file": "vortex",
        "description": [
          "Cast on any character in your Region",
          "at the start of their turn. Instead of moving normally, the character must roll 1 die to determine where they move:",
          "1) Crags       2) Tavern             ",
          "3) City          4) Castle              ",
          " 5) Temple     6) Portal of Power"
        ]
      }
    },
    "ADVENTURE": {
      "Divine Protection": {
        "name": "Divine Protection",
        "count": 1,
        "file": "divine_protection",
        "description": [
          "For the next 2 rounds (including this turn), characters do not lose life if creatures defeat them in battle or psychic combat."
        ]
      },
      "Fate Bound": {
        "name": "Fate Bound",
        "count": 1,
        "file": "fate_bound",
        "description": [
          "The Norns have determined the destiny of each character. All characters, no matter what Region they are in, must discard all of their fate. Then discard this card."
        ]
      },
      "Howl of the Wendigo": {
        "name": "Howl of the Wendigo",
        "count": 1,
        "file": "howl_of_the_wendigo",
        "description": [
          "All characters, no matter what Region they are in, must attack a character they land on. If a character defeats another character, they must choose to take a life as their reward. Once this happens, the Howl then echoes to the discard pile."
        ]
      },
      "Planeswalker": {
        "name": "Planeswalker",
        "count": 1,
        "file": "planeswalker",
        "description": [
          "A Planeswalker offers to teleport you to any space in the Outer Region or Middle Region. Whether or not you accept, roll 1 die to see where the Planeswalker teleports to:",
          "1) Discard pile   2) Portal of Power",
          "3) Chasm            4) Forest               ",
          "5) Crags              6) Village              "
        ]
      },
      "Ragnarok": {
        "name": "Ragnarok",
        "count": 1,
        "file": "ragnarok",
        "description": [
          "The final destiny of the gods has arrived! Discard all faceup Enemies, Places, and Strangers in all Regions."
        ]
      },
      "Snowdrifts": {
        "name": "Snowdrifts",
        "count": 1,
        "file": "snowdrifts",
        "description": [
          "All characters in this Region must roll 1 die. If the result is higher than your Craft, lose 1 life and miss your next turn.",
          "The Snowdrifts then melt away to the discard pile."
        ]
      },
      "Ymir's Glow": {
        "name": "Ymir's Glow",
        "count": 1,
        "file": "ymirs_glow",
        "description": [
          "Starting with yourself, each character may gain their full complement of Spells, according to their current Craft.",
          "Ymir's Glow then darkens to the discard pile."
        ]
      },
      "Eastern Dragon": {
        "name": "Eastern Dragon",
        "count": 1,
        "file": "eastern_dragon",
        "description": [
          "Eastern Dragon",
          "If your Strength is lower than your Craft, you must fight in battle. Otherwise you must fight in psychic combat.",
          "If you are defeated, in addition to losing 1 life, you must ditch 1 Magic Object at random.",
          "It will remain here until it is killed."
        ]
      },
      "Basilisk": {
        "name": "Basilisk",
        "count": 1,
        "file": "basilisk",
        "description": [
          "Basilisk",
          "The Basilisk rolls 2 dice for its attack roll and uses the highest result. If it rolls doubles, you are killed.",
          "It will remain here until it is killed."
        ]
      },
      "Frost Drake": {
        "name": "Frost Drake",
        "count": 1,
        "file": "frost_drake",
        "description": [
          "Frost Drake",
          "A formidable Frost Drake is raiding this area. It will remain here until it is killed."
        ]
      },
      "Frost Giant": {
        "name": "Frost Giant",
        "count": 1,
        "file": "frost_giant",
        "description": [
          "Frost Giant",
          "A titanic Frost Giant is lumbering around this area. He will remain here until he is killed."
        ]
      },
      "Glory Seeker": {
        "name": "Glory Seeker",
        "count": 2,
        "file": "glory_seeker",
        "description": [
          "Glory Seeker",
          "If you are defeated, in addition to losing 1 life, you must discard all of your quests.",
          "If you defeat the Glory Seeker, you may accept 1 Warlock Quest.",
          "He will remain here until he is killed."
        ]
      },
      "Griffon": {
        "name": "Griffon",
        "count": 1,
        "file": "griffon",
        "description": [
          "Griffon",
          "A Griffon is terrorising this space and will attack anyone who enters. It will remain here until it is killed."
        ]
      },
      "Icecap Elk": {
        "name": "Icecap Elk",
        "count": 1,
        "file": "icecap_elk",
        "description": [
          "Icecap Elk",
          "A majestic Icecap Elk is grazing in this area. It will remain here until it is killed."
        ]
      },
      "Ice Bear": {
        "name": "Ice Bear",
        "count": 1,
        "file": "ice_bear",
        "description": [
          "Ice Bear",
          "A voracious Ice Bear is running amok",
          "in this area. It will remain here until it is killed."
        ]
      },
      "Pack of Wolves": {
        "name": "Pack of Wolves",
        "count": 1,
        "file": "pack_of_wolves",
        "description": [
          "Pack of Wolves",
          "Roll 1 extra die for the Wolves' attack roll and use the highest result. It will remain here until it is killed."
        ]
      },
      "Sky Screecher": {
        "name": "Sky Screecher",
        "count": 1,
        "file": "sky_screecher",
        "description": [
          "Sky Screecher",
          "If your attack roll is lower than your Craft, you are automatically defeated.",
          "It will remain here until it is killed."
        ]
      },
      "Snow Goblin": {
        "name": "Snow Goblin",
        "count": 2,
        "file": "snow_goblin",
        "description": [
          "Snow Goblin",
          "A ravening Snow Goblin is laying waste to this area. It will remain",
          "here until it is killed."
        ]
      },
      "Winter Wolf": {
        "name": "Winter Wolf",
        "count": 1,
        "file": "winter_wolf",
        "description": [
          "Winter Wolf",
          "A lone Winter Wolf is hunting in this area. It will remain here until it is killed."
        ]
      },
      "Yeti": {
        "name": "Yeti",
        "count": 1,
        "file": "yeti",
        "description": [
          "Yeti",
          "Before you engage the Yeti in battle you must roll 1 die. If the result is less than your Craft, you dodge the boulder it throws at you.",
          "If the result is equal or higher, lose 1 life. It will remain here until it is killed."
        ]
      },
      "Apparition": {
        "name": "Apparition",
        "count": 2,
        "file": "apparition",
        "description": [
          "Apparition",
          "A spectral Apparition is haunting this area. It will remain here until it is killed."
        ]
      },
      "Barrow Wight": {
        "name": "Barrow Wight",
        "count": 1,
        "file": "barrow_wight",
        "description": [
          "Barrow Wight",
          "A Barrow Wight will attack anyone who trespasses in this area. It will remain here until it is killed."
        ]
      },
      "Chillbane": {
        "name": "Chillbane",
        "count": 1,
        "file": "chillbane",
        "description": [
          "Chillbane",
          "A horrifying Chillbane is attacking everything in this area.",
          "It will remain here until it is killed."
        ]
      },
      "Chill Wraith": {
        "name": "Chill Wraith",
        "count": 2,
        "file": "chill_wraith",
        "description": [
          "Chill Wraith",
          "If you are defeated, in addition to losing 1 life, you must miss your next turn. It will remain here until it is killed."
        ]
      },
      "Cryomancer": {
        "name": "Cryomancer",
        "count": 1,
        "file": "cryomancer",
        "description": [
          "Cryomancer",
          "If you are defeated, in addition to losing 1 life, you must miss your next turn. He will remain here until he is killed."
        ]
      },
      "Ice Elemental": {
        "name": "Ice Elemental",
        "count": 1,
        "file": "ice_elemental",
        "description": [
          "Ice Elemental",
          "A giant Ice Elemental is drifting through this area. It will remain here until it is killed."
        ]
      },
      "Lich": {
        "name": "Lich",
        "count": 1,
        "file": "lich",
        "description": [
          "Lich",
          "If you are defeated, in addition to losing 1 life, place 1 life counter on this card.",
          "If the Lich is defeated and has any life counters, it is not killed and it loses 1 life counter instead.",
          "It will remain here until it is killed."
        ]
      },
      "Medusa": {
        "name": "Medusa",
        "count": 1,
        "file": "medusa",
        "description": [
          "Medusa",
          "If you are defeated, you do not lose a life. Instead, you must miss your next 2 turns.",
          "It will remain here until it is killed."
        ]
      },
      "Rimespawn": {
        "name": "Rimespawn",
        "count": 1,
        "file": "rimespawn",
        "description": [
          "Rimespawn",
          "A terrible Rimespawn is lurking in this area. It will remain here until it is killed."
        ]
      },
      "Shiver Nymph": {
        "name": "Shiver Nymph",
        "count": 1,
        "file": "shiver_nymph",
        "description": [
          "Shiver Nymph",
          "A mischievous Shiver Nymph is frolicking in this area. If your Craft is higher than 2, the Shiver Nymph will flee 1 space clockwise instead of fighting you.",
          "Otherwise it will remain here until it",
          "is killed."
        ]
      },
      "Trickster": {
        "name": "Trickster",
        "count": 1,
        "file": "trickster",
        "description": [
          "Trickster",
          "If you are defeated, in addition to losing 1 life, you must ditch 1 Object at random.",
          "If you defeat the Trickster, you may take 1 Object of your choice from any character in the same Region.",
          "He will remain here until he is killed."
        ]
      },
      "Centaur": {
        "name": "Centaur",
        "count": 1,
        "file": "centaur",
        "description": [
          "Roll 1 die to determine how the Centaur reacts to you:",
          "1-2) Attacks you; lose 1 life",
          "3-4) Ignores you",
          "5-6) Joins you as a Follower; you may discard any Enemy you are about to encounter. The Centaur will then canter off to the discard pile."
        ]
      },
      "Dwarf Smith": {
        "name": "Dwarf Smith",
        "count": 1,
        "file": "dwarf_smith",
        "description": [
          "The Dwarf Smith will grant the first character who visits him one Weapon or Armour of their choice from the Purchase deck for free.",
          "He will then depart to the discard pile."
        ]
      },
      "Goblin Sapper": {
        "name": "Goblin Sapper",
        "count": 1,
        "file": "goblin_sapper",
        "description": [
          "You may pay 1 gold to move the Sapper to any space with an Adventure Card. You must then choose 1 Adventure Card on that space and discard it."
        ]
      },
      "Lore Master": {
        "name": "Lore Master",
        "count": 1,
        "file": "lore_master",
        "description": [
          "Gain your full complement of Spells, according to your current Craft.",
          "If you gain 3 Spells during a visit, the Lore Master departs to the discard pile to find a new apprentice."
        ]
      },
      "Pedlar": {
        "name": "Pedlar",
        "count": 2,
        "file": "pedlar",
        "description": [
          "A Pedlar has set up his stall here. You may buy available items at these prices:",
          "Sword 1G     Water Bottle 1G",
          "Axe 2G      Raft 1G",
          "Helmet 1G      Mule 2G",
          "Shield 2G      Spell 2G",
          "Then roll 1 die and move him that many spaces clockwise around the board."
        ]
      },
      "Pegasus": {
        "name": "Pegasus",
        "count": 1,
        "file": "pegasus",
        "description": [
          "Pegasus, the winged horse, offers you a ride to any other space in the same Region.",
          "Whether or not you accept the ride, Pegasus then flies off to the discard pile."
        ]
      },
      "Talismonger": {
        "name": "Talismonger",
        "count": 1,
        "file": "talismonger",
        "description": [
          "The Talismonger will remain here for the rest of the game. Roll 1 die:",
          "1) Become a Toad for 3 turns",
          "2) Lose Strength*",
          "3) Lose Craft*",
          "4) Gain 1 Strength",
          "5) Gain 1 Craft",
          "6) Gain a Talisman",
          "* All but Strength and Craft values and points gained from Followers and Objects"
        ]
      },
      "Champion": {
        "name": "Champion",
        "count": 1,
        "file": "champion",
        "description": [
          "The Champion may fight in your place with a Strength of 3.",
          "If the Champion wins, the creature is killed or the opposing character must lose 1 life.",
          "If the Champion loses, she is killed and your turn immediately ends. Enemies killed may be taken as trophies."
        ]
      },
      "Herbalist": {
        "name": "Herbalist",
        "count": 1,
        "file": "herbalist",
        "description": [
          "Whenever you land on the Forest or Woods, you may heal 1 life."
        ]
      },
      "Hieromartyr": {
        "name": "Hieromartyr",
        "count": 1,
        "file": "hieromartyr",
        "description": [
          "If you are defeated in battle or psychic combat, you may discard the Hieromartyr instead of losing life."
        ]
      },
      "Porter": {
        "name": "Porter",
        "count": 2,
        "file": "porter",
        "description": [
          "If you want the Porter as your Follower, pay 1 gold. If not, he waits here for a character willing to pay him.",
          "While he is your Follower, he can carry an extra four Objects for you. If you lose the Porter, leave any surplus Objects of your choice in the space you are in."
        ]
      },
      "Ancient Artefact": {
        "name": "Ancient Artefact",
        "count": 1,
        "file": "ancient_artefact",
        "description": [
          "Roll 1 die when you are about to engage in battle or psychic combat:",
          "1) It explodes (discard) and you lose 1 life",
          "2) It explodes (discard)",
          "3-4) It fails to work",
          "5) Add 1 to your attack roll",
          "6) Add 3 to your attack roll"
        ]
      },
      "Bag of Carrying": {
        "name": "Bag of Carrying",
        "count": 1,
        "file": "bag_of_carrying",
        "description": [
          "The Bag can carry an extra 4 Objects for you.",
          "If you lose an attack, the victor may not take either the Bag or any Object stored inside.",
          "Similarly, neither may be taken by",
          "any character's special ability or Spell. If you lose the Bag, you also lose any Object stored inside."
        ]
      },
      "Book of Wizardry": {
        "name": "Book of Wizardry",
        "count": 1,
        "file": "book_of_wizardry",
        "description": [
          "You may discard the Book during your turn to gain your full complement of Spells, according to your current Craft."
        ]
      },
      "Celestial Bauble": {
        "name": "Celestial Bauble",
        "count": 1,
        "file": "celestial_bauble",
        "description": [
          "No evil character may have the Celestial Bauble.",
          "When you engage an Enemy in psychic combat, you may discard the Bauble after you make your attack roll to automatically win the psychic combat, regardless of your attack score."
        ]
      },
      "Chalice of Shadow": {
        "name": "Chalice of Shadow",
        "count": 1,
        "file": "chalice_of_shadow",
        "description": [
          "No good character may have the Chalice of Shadow.",
          "Add 1 to your Strength.",
          "You do not lose a life in the Desert."
        ]
      },
      "Horn of Summoning": {
        "name": "Horn of Summoning",
        "count": 1,
        "file": "horn_of_summoning",
        "description": [
          "You may blow the Horn whenever you land on a space with instructions to draw 1 or more Adventure Cards.",
          "Before you encounter the space, you may move 1 faceup Enemy in the same Region to your space.",
          "You may only do this once per turn."
        ]
      },
      "Winged Boots": {
        "name": "Winged Boots",
        "count": 1,
        "file": "winged_boots",
        "description": [
          "Whenever you roll a 6 for your move, you may cross the Storm River as if you were using a Raft."
        ]
      },
      "Frostbite": {
        "name": "Frostbite",
        "count": 1,
        "file": "frostbite",
        "description": [
          "Add 1 to your Strength during battle.",
          "If you defeat a character in battle and choose to take a life, the character must also miss their next turn."
        ]
      },
      "Ice Fang": {
        "name": "Ice Fang",
        "count": 1,
        "file": "ice_fang",
        "description": [
          "Add 1 to your Craft during psychic combat.",
          "If you defeat a character in psychic combat and choose to take a life, the character must also miss their next turn."
        ]
      },
      "Astrolabe": {
        "name": "Astrolabe",
        "count": 1,
        "file": "astrolabe",
        "description": [
          "Whenever an Event is drawn, you may choose to be unaffected by it, although all other characters are affected as normal."
        ]
      },
      "Bag of Gold": {
        "name": "Bag of Gold",
        "count": 5,
        "file": "bag_of_gold",
        "description": [
          "Exchange immediately for 1 gold and then place this card on the discard pile."
        ]
      },
      "False Grail": {
        "name": "False Grail",
        "count": 1,
        "file": "false_grail",
        "description": [
          "You must take the Grail and discard all of your quests.",
          "You may not accept any quests until you rid yourself of the Grail by visiting the Castle. You may then discard it."
        ]
      },
      "Lucky Charm": {
        "name": "Lucky Charm",
        "count": 2,
        "file": "lucky_charm",
        "description": [
          "You may discard the Charm when you are about to make a die roll. You choose which result on the die to use instead of rolling it."
        ]
      },
      "Royal Decree": {
        "name": "Royal Decree",
        "count": 1,
        "file": "royal_decree",
        "description": [
          "The Decree may be used on any Stranger or Place you are about to encounter.",
          "The Stranger or Place is banished to the discard pile, along with this card."
        ]
      },
      "Treasure Chest": {
        "name": "Treasure Chest",
        "count": 2,
        "file": "treasure_chest",
        "description": [
          "You may discard the Chest during your turn to draw the top 5 Adventure Cards and take 1 Object of your choice. Discard the remaining cards.",
          "If you do not draw any Objects, gain 3 gold instead. If you have the Treasure Map, you may draw 10 Adventure Cards instead of 5."
        ]
      },
      "Treasure Map": {
        "name": "Treasure Map",
        "count": 2,
        "file": "treasure_map",
        "description": [
          "You may discard the Treasure Map during your turn to roll 1 die and gain that much gold."
        ]
      },
      "Two Bags of Gold": {
        "name": "Two Bags of Gold",
        "count": 2,
        "file": "two_bags_of_gold",
        "description": [
          "Exchange immediately for 2 gold and then place this card on the discard pile."
        ]
      },
      "Helm of Warding": {
        "name": "Helm of Warding",
        "count": 1,
        "file": "helm_of_warding",
        "description": [
          "If you are defeated in psychic combat and just lost a life, roll 1 die. If you roll a 6, the Helm protected you and you did not lose that life, though you still lost the psychic combat."
        ]
      },
      "Mirror Shield": {
        "name": "Mirror Shield",
        "count": 1,
        "file": "mirror_shield",
        "description": [
          "If you are defeated in psychic combat and just lost a life, roll 1 die. If you roll a 5 or 6, the Shield protected you and you did not lose that life, though you still lost the psychic combat."
        ]
      },
      "Poisoned Dagger": {
        "name": "Poisoned Dagger",
        "count": 1,
        "file": "poisoned_dagger",
        "description": [
          "Add 1 to your Strength during battle.",
          "If you roll a 1 for your attack roll during battle, you may roll an additional die and add the result to your attack score."
        ]
      },
      "Altar": {
        "name": "Altar",
        "count": 1,
        "file": "altar",
        "description": [
          "The Altar will remain here for the rest of the game. Roll 1 die to pray with the following results:",
          "1) Miss your next turn",
          "2) Ignored",
          "3) Gain 1 fate",
          "4) Gain 1 life",
          "5) Gain 1 Spell",
          "6) Immediately take another turn"
        ]
      },
      "Arcane Archive": {
        "name": "Arcane Archive",
        "count": 2,
        "file": "arcane_archive",
        "description": [
          "The Archive will remain here for the rest of the game.",
          "You may either discard any number of Spells you have and gain 1 gold for each, or buy 1 Spell for 1 gold, if your Craft allows.",
          "You may only buy 1 Spell per visit."
        ]
      },
      "Ice Queen's Palace": {
        "name": "Ice Queen's Palace",
        "count": 1,
        "file": "ice_queens_palace",
        "description": [
          "The Palace will remain here for the rest of the game. Roll 1 die:",
          "1) Become a slimy little Toad for 3 turns",
          "2-3) Ignored",
          "4) Gain 1 life",
          "5) Gain 1 Spell",
          "6) Teleport to any other space in this Region"
        ]
      },
      "Lake of Visions": {
        "name": "Lake of Visions",
        "count": 2,
        "file": "lake_of_visions",
        "description": [
          "Randomly draw 4 Warlock Quests and place them on this card. Once per visit, you may accept 1 quest of your choice from this card. When all 4 quests have been taken, the Lake drains to the discard pile.",
          "The quests do not count towards the number of cards on this space."
        ]
      },
      "Mystic Portal": {
        "name": "Mystic Portal",
        "count": 1,
        "file": "mystic_portal",
        "description": [
          "The Mystic Portal will remain here for the rest of the game. You may pass through it if you wish. Roll 1 die and add your Craft to determine where you are teleported to:",
          "2) Stay here    3) Crags  ",
          "4) City             5) Village",
          " 6) Castle         7) Temple",
          "8+) Any space listed on this card"
        ]
      },
      "Transmutor": {
        "name": "Transmutor",
        "count": 1,
        "file": "transmutor",
        "description": [
          "Roll 1 die:",
          "1-2) Become a slimy little Toad for 3 turns",
          "3-4) The Transmutor explodes to the",
          "discard pile",
          "5-6) You may change any or all Strength points you have (except those derived from Objects or Followers) into Craft points, or vice versa"
        ]
      }
    },
    "WARLOCK": {
      "Roll One Die to Accept a Quest": {
        "name": "Roll One Die to Accept a Quest",
        "count": 1,
        "description": [
          "1) Take 1 life from another character",
          "2) Kill 1 Enemy",
          "3) Deliver (discard) 1 Follower",
          "4) Deliver (discard) 1 Magic Object",
          "5) Deliver (discard) 3 gold",
          " 6) Deliver (discard) 2 gold",
          " \"Which do you believe",
          "guides your life, random",
          "chance or inescapable",
          "destiny? Spin the wheel,",
          "and let us find out!\""
        ]
      },
      "Lose Your Next Two Turns": {
        "name": "Lose Your Next Two Turns",
        "count": 1,
        "description": [
          "\"I will tell you a secret.",
          "You possess the Talisman",
          "already, but it is hidden",
          "from you by your ceaseless",
          " noise and constant",
          "running. Stop and quiet",
          "your thoughts and you",
          "will find it. It dwells in the",
          "silence and the stillness.\""
        ]
      },
      "Give Another Character One Gold": {
        "name": "Give Another Character One Gold",
        "count": 1,
        "description": [
          "To complete this quest,",
          "you must encounter a",
          "character that you land",
          "on and give them 1 gold.",
          "The other character must",
          "accept it. You may not",
          "attack or use any special",
          "ability on the character",
          "during this encounter.",
          "\"You come before me",
          "reeking of greed. Rid",
          "yourself of it. If you",
          "seek conquest, you",
          "must first look to the",
          "well-being of others.\""
        ]
      },
      "Deliver Two Objects": {
        "name": "Deliver Two Objects",
        "count": 1,
        "description": [
          "\"Perhaps they are mere",
          "trinkets to you, but to me",
          "they are more than",
          "diamonds. But no more",
          "questions! Give them to",
          "me or do not. If you would",
          "have this Talisman, that",
          "is the price I demand!\""
        ]
      },
      "Deliver Two Followers": {
        "name": "Deliver Two Followers",
        "count": 1,
        "description": [
          "\"If you would possess a",
          "Talisman, you will walk a",
          "very lonely path. The seeds",
          "of jealousy and greed will",
          "lurk in the hearts of your",
          "allies. There are some who",
          "cannot be trusted. These",
          "you must cast aside, or",
          "they will betray you.\""
        ]
      },
      "Lose One Craft": {
        "name": "Lose One Craft",
        "count": 1,
        "description": [
          "To complete this quest, you must discard 1 point of Craft you have gained - your Craft may not be reduced below your Craft value.",
          "\"You are not yet ready for a Talisman. Your mind is too willful, too proud. You must learn what it is to be broken and humbled. Then you will give the Talisman its proper respect. And the Talisman shall, in turn, respect you.\""
        ]
      },
      "Lose One Strength": {
        "name": "Lose One Strength",
        "count": 1,
        "description": [
          "To complete this quest,",
          "you must discard 1",
          "point of Strength you have",
          "gained - your Strength may",
          "not be reduced below",
          "your Strength value.",
          "\"Who are you underneath",
          "the disguise you wear to",
          "deceive the world? Who are",
          "you when you are beaten",
          "and exhausted, and all",
          "seems lost? Only when",
          "you have discovered these",
          "answers for yourself will",
          "you merit a Talisman.\""
        ]
      },
      "Lose One Life": {
        "name": "Lose One Life",
        "count": 1,
        "description": [
          "You may only lose 1",
          "life to complete this",
          "quest if you currently",
          "have at least 2 life.",
          "\"For what you ask there",
          "can be but one price.",
          "Bare your arm before",
          "my knife. If you wish to",
          "have this Talisman, then",
          "I will have your blood.\""
        ]
      },
      "Defeat the Sentinel": {
        "name": "Defeat the Sentinel",
        "count": 1,
        "description": [
          "\"Travel the path to the",
          "Mid-Realm and you will",
          "find your way blocked by",
          "a towering stone sentinel.",
          "Ever vigilant, it destroys",
          "all who would pass. But",
          "it protects another secret",
          "as well. Hidden deep",
          "within its stone heart",
          "dwells a Talisman, a fitting",
          "reward for any who can",
          "defeat such a creature.\""
        ]
      },
      "Visit the Mystic": {
        "name": "Visit the Mystic",
        "count": 1,
        "description": [
          "\"If I am to give you a Talisman, I will require raw materials. What I need can be found in the home of the Mystic who dwells within the Village. I care not how you acquire these items, but I warn you. By the time you leave, you may not be the same person you are now.\""
        ]
      },
      "Visit the Enchantress": {
        "name": "Visit the Enchantress",
        "count": 1,
        "description": [
          "\"There is a woman you",
          "must visit, a powerful",
          "Enchantress who dwells",
          "within the City. Bring her",
          "this book and she can",
          "give you your Talisman.",
          "however, it would be wise",
          "to mind your manners.",
          "Cross her and you may not",
          "walk away on two feet!\""
        ]
      },
      "Visit the Alchemist": {
        "name": "Visit the Alchemist",
        "count": 1,
        "description": [
          "\"Simple fool! You already",
          "possess the Talisman you",
          "seek, but you cannot see",
          "it! Go to the Alchemist",
          "who dwells within the City.",
          "Even as his fire refines",
          "mundane materials to pure",
          "gold, so too will it reveal",
          "that which you seek.\""
        ]
      },
      "Visit the Black Knight": {
        "name": "Visit the Black Knight",
        "count": 1,
        "description": [
          "\"There is one so adept in",
          "the ways of combat that he",
          "cannot be defeated. Face",
          "him and he will extract his",
          "price, be it gold or blood.",
          " The heart of this knight",
          "no longer holds enough",
          "honour to use the power",
          "of a Talisman. But perhaps",
          "enough honour is still",
          "buried under his Armour",
          "to pass the Talisman to",
          "another, one who is fit",
          "to wield the power.\""
        ]
      },
      "Visit the Tavern": {
        "name": "Visit the Tavern",
        "count": 1,
        "description": [
          "\"Searched every sacred",
          "shrine, have you?",
          "Scrutinized every ancient",
          "place and found no hint",
          "of the Talisman? Fool!",
          "It hides within a crowd.",
          "The Talisman wishes to",
          "dwell in a place of life,",
          "camaraderie, and laughter!",
          " Within the Tavern, look",
          "closely at the ornament",
          "above the door. Then you",
          "will have what you seek.\""
        ]
      },
      "Pray at the Temple": {
        "name": "Pray at the Temple",
        "count": 1,
        "description": [
          "\"Do not give in to your",
          "pride or it shall be your",
          "undoing. Only by the",
          "will of forces far beyond",
          "your comprehension will",
          "you succeed. Supplicate",
          "yourself before these",
          "powers and the way will",
          "be made clear to you.\""
        ]
      },
      "Deliver One Weapon": {
        "name": "Deliver One Weapon",
        "count": 1,
        "description": [
          "\"Do you think your",
          "armaments are what",
          "make you powerful? Ha!",
          "They are your greatest",
          "weakness! True power",
          "comes from a very different",
          "source, and you shall",
          "not have the Talisman",
          "until you rid yourself of",
          "your trifling delusions.\""
        ]
      },
      "Deliver One Armour": {
        "name": "Deliver One Armour",
        "count": 1,
        "description": [
          "\"What you believe protects you is what keeps you from your desire. To possess the Talisman you must cast off your defences and allow yourself to be vulnerable to its risks.\""
        ]
      },
      "Kill One Dragon": {
        "name": "Kill One Dragon",
        "count": 1,
        "description": [
          "\"The road you wish to travel shall require courage. I wonder if you are truly brave. Go and look into the eyes of the dragon, and see whose heart is stronger. If you are victorious, the Talisman is yours.\""
        ]
      },
      "Kill One Animal": {
        "name": "Kill One Animal",
        "count": 1,
        "description": [
          "\"Indeed, who could be",
          "trusted to guard such a",
          "treasure, until a worthy",
          "soul came to claim it? No",
          "one but a beast of nature",
          "could be charged with",
          "such a task. The heart of",
          "an animal does not hold",
          "the lust for power that",
          "dwells within others, more",
          "civilized creatures.\""
        ]
      },
      "Kill One Spirit": {
        "name": "Kill One Spirit",
        "count": 1,
        "description": [
          "\"Do me this favour and",
          "I will gladly grant your",
          "request. The shade of my",
          "dearest friend, who lingers",
          "on in this world even",
          "after death, is trapped by",
          "diabolical magics. Free",
          "this spirit for me. Let this",
          "poor soul finally have",
          "eternal rest, and this",
          "Talisman shall be yours.\""
        ]
      },
      "Kill One Monster": {
        "name": "Kill One Monster",
        "count": 1,
        "description": [
          "\"And who are you to make such a request of me? What good have you done for the world? Seek out what is wicked in this land and strike it down in the name of righteousness. only then shall I grant your wish.\""
        ]
      },
      "Gain One Strength": {
        "name": "Gain One Strength",
        "count": 1,
        "description": [
          "\"Should I give you a",
          "Talisman when so many",
          "would kill you to possess",
          "it? No, I shall not doom",
          "you to death. Only when",
          "you are strong enough to",
          "protect yourself from all",
          "threats, will I allow you",
          "to take such a risk.\""
        ]
      },
      "Gain One Craft": {
        "name": "Gain One Craft",
        "count": 1,
        "description": [
          "\"Your mind is too",
          "undisciplined. You must",
          "learn to concentrate and",
          "focus your thoughts.",
          "Heed my warning, should",
          "an unworthy soul try",
          "to possess a Talisman,",
          "he shall soon find the",
          "Talisman possesses them!\""
        ]
      }
    }
  },
  "The Harbinger": {
    "SPELLS": {
      "Augury": {
        "name": "Augury",
        "count": 2,
        "file": "augury",
        "description": [
          "Cast on yourself at any time during your turn to look at the top 4 cards of any deck and then put them back on top of that deck in any order."
        ]
      },
      "Dark Binding": {
        "name": "Dark Binding",
        "count": 2,
        "file": "dark_binding",
        "description": [
          "Cast on another character after they roll for movement but before they move. You choose in which direction that character moves and may end their movement at any time along their move."
        ]
      },
      "Dispellation": {
        "name": "Dispellation",
        "count": 2,
        "file": "dispellation",
        "description": [
          "Cast on another character when they cast a Spell. Negate the effects of that Spell unless that character discards 1 of their Magic Objects."
        ]
      },
      "Sacred Offering": {
        "name": "Sacred Offering",
        "count": 2,
        "file": "sacred_offering",
        "description": [
          "Cast on yourself at the start of your turn. Discard 1 of your Magic Objects or Followers to either heal all of your lives or replenish all of your fate."
        ]
      },
      "Terra Shift": {
        "name": "Terra Shift",
        "count": 2,
        "file": "terra_shift",
        "description": [
          "Cast on a character who has just completed their move. Choose a space in that character's Region and move all Terrain and Adventure cards from the chosen space to that character's space."
        ]
      }
    },
    "TERRAIN": {
      "Barrens": {
        "name": "Barrens",
        "count": 1,
        "file": "terrain_barrens",
        "description": [
          "LOSE 1 LIFE"
        ]
      },
      "Bog": {
        "name": "Bog",
        "count": 1,
        "file": "terrain_bog",
        "description": [
          "DRAW 1 CARD",
          "Draw one card even if there are already any cards in this space.",
          "Subtract 1 from each of your die rolls while on this space, to a minimum of 1."
        ]
      },
      "Chasm": {
        "name": "Chasm",
        "count": 1,
        "file": "terrain_chasm",
        "description": [
          "BRAVE THE CHASM",
          "Roll one die for yourself, and one for each of your Followers.",
          "If a 1 or 2 is rolled for yourself, lose 1 life. If a 1 or 2 is rolled for a Follower, it is killed."
        ]
      },
      "Crater": {
        "name": "Crater",
        "count": 1,
        "file": "terrain_crater",
        "description": [
          "ROLL 1 DIE",
          "1) Fruitless Search; lose 1 turn.",
          "2-3) Still Hot; lose 1 life.",
          "4-5) Valuable Ore; gain 1 gold.",
          "6) Strange Energies; gain 1 Strength or 1 Craft."
        ]
      },
      "Floodland": {
        "name": "Floodland",
        "count": 1,
        "file": "terrain_floodland",
        "description": [
          "DRAW 1 CARD AND DITCH 1 CARD",
          "Draw one card even if there are already any cards in this space.",
          "Then ditch 1 of your Objects or Followers."
        ]
      },
      "Hellpits": {
        "name": "Hellpits",
        "count": 1,
        "file": "terrain_hellpits",
        "description": [
          "DRAW 2 HARBINGER CARDS",
          "Draw two cards even if there are already any cards in this space."
        ]
      },
      "Highway": {
        "name": "Highway",
        "count": 1,
        "file": "terrain_highway",
        "description": [
          "DRAW 1 CARD",
          "Do not draw a card if there is already one in this space. When rolling for movement while on this space, you may add or subtract 1 from your result (to a minimum of 1)."
        ]
      },
      "Necropolis": {
        "name": "Necropolis",
        "count": 1,
        "file": "terrain_necropolis",
        "description": [
          "DRAW 3 CARDS FROM THE DISCARD PILE",
          "Shuffle the discard pile and draw three cards from it. If there are any cards already in this space, draw only enough to take the total to three cards."
        ]
      },
      "Rift": {
        "name": "Rift",
        "count": 1,
        "file": "terrain_rift",
        "description": [
          "TRANSFORM A SPACE",
          "Choose another space in this Region.",
          "Place 1 random Terrain card on that space."
        ]
      },
      "Runes": {
        "name": "Runes",
        "count": 1,
        "file": "terrain_runes",
        "description": [
          "DRAW 1 CARD",
          "Do not draw a card if there is already one in this space.",
          "Any creatures that you fight here add 2 to their attack rolls."
        ]
      },
      "Ruins": {
        "name": "Ruins",
        "count": 1,
        "file": "terrain_ruins",
        "description": [
          "DRAW 2 CARDS",
          "If there are any cards already in this space, draw only enough to take the total to two cards."
        ]
      }
    },
    "HARBINGER": {
      "Horseman of Death": {
        "name": "Horseman of Death",
        "count": 1,
        "file": "horseman_of_death",
        "description": [
          "Horseman of Death",
          "If you do not defeat the Horseman of Death, each character without a Talisman must lose 1 life. It will remain here until killed."
        ]
      },
      "Horseman of Disease": {
        "name": "Horseman of Disease",
        "count": 1,
        "file": "horseman_of_disease",
        "description": [
          "Horseman of Disease",
          "If you do not defeat the Horseman of Disease, each character without a Talisman must lose 1 Strength or 1 Craft. He will remain here until killed."
        ]
      },
      "Horseman of Famine": {
        "name": "Horseman of Famine",
        "count": 1,
        "file": "horseman_of_famine",
        "description": [
          "Horseman of Famine",
          "If you do not defeat the Horseman of Famine, each character without a Talisman must kill 1 of their Followers. She will remain here until killed."
        ]
      },
      "Horseman of War": {
        "name": "Horseman of War",
        "count": 1,
        "file": "horseman_of_war",
        "description": [
          "Horseman of War",
          "If you do not defeat the Horseman of War, each character without a Talisman must place 1 of their trophies on this space. He will remain here until killed."
        ]
      },
      "The Beast": {
        "name": "The Beast",
        "count": 1,
        "file": "the_beast",
        "description": [
          "The Beast",
          "The Beast of the Apocalypse has arisen. A character cannot enter the Crown of Command unless they pay 2 life. It will remain here until killed."
        ]
      },
      "Chaos Rift": {
        "name": "Chaos Rift",
        "count": 2,
        "file": "chaos_rift",
        "description": [
          "The world shifts and tears. All characters roll 1 die. Each character with the lowest result must place 1 random Terrain card on their space. Then discard this card."
        ]
      },
      "Falling Stars": {
        "name": "Falling Stars",
        "count": 1,
        "file": "falling_stars",
        "description": [
          "The stars rain down from the heavens. All characters roll 1 die. Each character with the lowest result must lose 1 life. Then place a Crater Terrain card on the space of one of the characters with the lowest result. The Stars then fade away to the discard pile."
        ]
      },
      "Gates of Hell": {
        "name": "Gates of Hell",
        "count": 2,
        "file": "gates_of_hell",
        "description": [
          "The gates of Hell have been flung open, releasing many horrors into the world. Draw 3 Harbinger cards and add them to this space. Then discard this card."
        ]
      },
      "Hell on Earth": {
        "name": "Hell on Earth",
        "count": 1,
        "file": "hell_on_earth",
        "description": [
          "The corruption of Hell has spread throughout the land. All characters roll 1 die. Each character with the lowest result becomes evil. Then place a Hellpits Terrain card on the space of one of the characters with the lowest result. The influence of Hell then descends to the discard pile."
        ]
      },
      "Plague of Locusts": {
        "name": "Plague of Locusts",
        "count": 1,
        "file": "plague_of_locusts",
        "description": [
          "Locusts scour the land, consuming all they find. All characters roll 1 die. Each character with the lowest result must discard 1 Object or 1 Follower. Then place a Barrens Terrain card on the space of one of the characters with the lowest result. The Locusts then swarm off to the discard pile."
        ]
      },
      "Rain of Toads": {
        "name": "Rain of Toads",
        "count": 1,
        "file": "rain_of_toads",
        "description": [
          "Toads fall from the sky, carrying a terrible curse. All characters roll 1 die. Each character with the lowest result is turned into a slimy little Toad for 3 turns. Then place a Bog Terrain card on the space of one of the characters with the lowest result. The Toads then hop off to the discard pile."
        ]
      },
      "Revelations": {
        "name": "Revelations",
        "count": 2,
        "file": "revelations",
        "description": [
          "The heavens open before you, revealing what is yet to come. Look at the top 4 cards of the Harbinger deck and place them on top of any Adventure deck in any order. Then discard this card."
        ]
      },
      "Rise of the Dead": {
        "name": "Rise of the Dead",
        "count": 1,
        "file": "rise_of_the_dead",
        "description": [
          "The cursed ground will no longer hold the dead. Place a Necropolis Terrain card on the Graveyard space. Then each character must place 1 of their trophies on the Necropolis. Then discard this card."
        ]
      },
      "Rising Waters": {
        "name": "Rising Waters",
        "count": 1,
        "file": "rising_waters",
        "description": [
          "A great deluge envelops the land. All characters roll 1 die. Each character with the lowest result must miss their next turn. Then place a Floodland Terrain card on the space of one of the characters with the lowest result. The waters then drain away to the discard pile."
        ]
      },
      "The First Sign": {
        "name": "The First Sign",
        "count": 1,
        "file": "the_first_sign",
        "description": [
          "Fire and salt shall rain down, slaying the wicked. Each character must kill one of their Followers. Then discard the top Omen along with this card."
        ]
      },
      "The Fifth Sign": {
        "name": "The Fifth Sign",
        "count": 1,
        "file": "the_fifth_sign",
        "description": [
          "The gates of the abyss shall be flung open and misfortune shall be unleashed upon the world. Each character loses all of their fate. Then discard the top Omen along with this card."
        ]
      },
      "The Fourth Sign": {
        "name": "The Fourth Sign",
        "count": 1,
        "file": "the_fourth_sign",
        "description": [
          "The moon and the sun shall be blotted out, extinguishing magic across the land. Each character discards all of their Spells. Then discard the top Omen along with this card."
        ]
      },
      "The Second Sign": {
        "name": "The Second Sign",
        "count": 1,
        "file": "the_second_sign",
        "description": [
          "Flames from Heaven shall consume the treasures of the greedy. Each character must discard one of their Objects. Then discard the top Omen along with this card."
        ]
      },
      "The Seventh Sign": {
        "name": "The Seventh Sign",
        "count": 1,
        "file": "the_seventh_sign",
        "description": [
          "Thunder and lightning shall shatter the mountains and reduce cities to rubble. Each character places 1 random Terrain card on their space. Then discard the top Omen along with this card."
        ]
      },
      "The Sixth Sign": {
        "name": "The Sixth Sign",
        "count": 1,
        "file": "the_sixth_sign",
        "description": [
          "Demons shall be unleashed who carry with them every disease and pestilence. Each character must lose 1 Strength or 1 Craft. Then discard the top Omen along with this card."
        ]
      },
      "The Stars Align": {
        "name": "The Stars Align",
        "count": 2,
        "file": "the_stars_align",
        "description": [
          "Signs are seen in the heavens and wise men and women scour the stars, searching for answers. Roll 1 die on the Harbinger chart and then discard this card."
        ]
      },
      "The Third Sign": {
        "name": "The Third Sign",
        "count": 1,
        "file": "the_third_sign",
        "description": [
          "Rivers and springs shall grow foul and bitter, making sick all who drink from them. Each character loses 1 life. Then discard the top Omen along with this card."
        ]
      },
      "Nephilim": {
        "name": "Nephilim",
        "count": 1,
        "file": "nephilim",
        "description": [
          "Nephilim",
          "When you defeat the Nephilim, choose another character to gain 1 Strength and 1 Craft. The Nephilim will remain here until killed."
        ]
      },
      "Possessed Cultist": {
        "name": "Possessed Cultist",
        "count": 1,
        "file": "possessed_cultist",
        "description": [
          "Possessed Cultist",
          "The cultist is possessed by a great evil. He adds 1 to his attack roll for each Omen card in the discard pile. He will remain here until killed."
        ]
      },
      "Scavenging Beasts": {
        "name": "Scavenging Beasts",
        "count": 2,
        "file": "scavenging_beasts",
        "description": [
          "Scavenging Beasts",
          "These hungry creatures smell the stench of death upon you. When you defeat them, you must discard 1 of your other trophies. They will remain here until killed."
        ]
      },
      "Swarm of Flies": {
        "name": "Swarm of Flies",
        "count": 2,
        "file": "swarm_of_flies",
        "description": [
          "Swarm of Flies",
          "A thick swarm of flies is bringing ruin to the land. While you have this card as a trophy, your carrying limit is reduced by 1."
        ]
      },
      "Demon of Pride": {
        "name": "Demon of Pride",
        "count": 1,
        "file": "demon_of_pride",
        "description": [
          "Demon of Pride",
          "When you defeat the Demon of Pride, change all of your Craft points into Strength points. It will remain here until killed."
        ]
      },
      "Herald of War": {
        "name": "Herald of War",
        "count": 1,
        "file": "herald_of_war",
        "description": [
          "Herald of War",
          "The Herald of War adds 2 to his attack roll if you roll a 4, 5, or 6 on any die while in battle with him. He will remain here until killed."
        ]
      },
      "Bone Giant": {
        "name": "Bone Giant",
        "count": 1,
        "file": "bone_giant",
        "description": [
          "Bone Giant",
          "If you defeat the Bone Giant, roll 1 die. If you roll a 4, 5, or 6, the attack counts as a stand-off instead. It will remain here until killed."
        ]
      },
      "Putrid Zombie": {
        "name": "Putrid Zombie",
        "count": 1,
        "file": "putrid_zombie",
        "description": [
          "Putrid Zombie",
          "Not even the most stoic hero can stand the stench of this hideous creature. While you have this card as a trophy you cannot take Followers."
        ]
      },
      "Skeleton": {
        "name": "Skeleton",
        "count": 3,
        "file": "skeleton",
        "description": [
          "Skeleton",
          "While you have this card as a trophy, Spirits and Undead in battle or psychic combat with you add 1 to their attack roll."
        ]
      },
      "Skeleton King": {
        "name": "Skeleton King",
        "count": 1,
        "file": "skeleton_king",
        "description": [
          "Skeleton King",
          "The Skeleton King rules over a kingdom of bones and decay. He adds 1 to his attack roll for each trophy point you have. He will remain here until killed."
        ]
      },
      "Doomsday Prophet": {
        "name": "Doomsday Prophet",
        "count": 3,
        "file": "doomsday_prophet",
        "description": [
          "Doomsday Prophet",
          "Beware the liars and the false prophets. When you defeat this Enemy, roll 1 die. On a 1 or 2, discard the top Omen. She will remain here until killed."
        ]
      },
      "Demon of Gluttony": {
        "name": "Demon of Gluttony",
        "count": 1,
        "file": "demon_of_gluttony",
        "description": [
          "Demon of Gluttony",
          "When you defeat the Demon of Gluttony, kill all of your Followers and gain 1 life for each Follower killed. It will remain here until killed."
        ]
      },
      "Demon of Sloth": {
        "name": "Demon of Sloth",
        "count": 1,
        "file": "demon_of_sloth",
        "description": [
          "Demon of Sloth",
          "While you have this card as a trophy, and roll a 1 for movement, your turn immediately ends."
        ]
      },
      "Essence Eater": {
        "name": "Essence Eater",
        "count": 1,
        "file": "essence_eater",
        "description": [
          "Essence Eater",
          "It has collected the life essence of a thousand souls. When you defeat the Essence Eater, all other characters heal all of their lives. It will remain here until killed."
        ]
      },
      "Herald of Death": {
        "name": "Herald of Death",
        "count": 1,
        "file": "herald_of_death",
        "description": [
          "Herald of Death",
          "If you roll a 1, 2, or 3 on any die while in psychic combat with the Herald of Death, lose 1 life. It will remain here until killed."
        ]
      },
      "Herald of Disease": {
        "name": "Herald of Disease",
        "count": 1,
        "file": "herald_of_disease",
        "description": [
          "Herald of Disease",
          "If you roll a 1, 2, or 3 on any die while in psychic combat with the Herald of Disease, lose 1 Strength or 1 Craft. It will remain here until killed."
        ]
      },
      "Herald of Famine": {
        "name": "Herald of Famine",
        "count": 1,
        "file": "herald_of_famine",
        "description": [
          "Herald of Famine",
          "If you roll a 4, 5, or 6 on any die while in psychic combat with the Herald of Famine, you must kill 1 of your Followers. She will remain here until killed."
        ]
      },
      "Infernal Corruptor": {
        "name": "Infernal Corruptor",
        "count": 1,
        "file": "infernal_corruptor",
        "description": [
          "Infernal Corruptor",
          "If you defeat the Infernal Corruptor, choose another character. Then give that character 1 of your Followers at random. He will remain here until killed."
        ]
      },
      "Insane Elemental": {
        "name": "Insane Elemental",
        "count": 1,
        "file": "insane_elemental",
        "description": [
          "Insane Elemental",
          "When you encounter the Insane Elemental, place 1 random Terrain card on your space. It will remain here until killed."
        ]
      },
      "Crypt Horror": {
        "name": "Crypt Horror",
        "count": 1,
        "file": "crypt_horror",
        "description": [
          "Crypt Horror",
          "It carries a thousand years of doom and despair. When you defeat the Crypt Horror, lose all of your fate and discard all of your Spells. It will remain here until killed."
        ]
      },
      "Vengeful Ghosts": {
        "name": "Vengeful Ghosts",
        "count": 2,
        "file": "vengeful_ghosts",
        "description": [
          "Vengeful Ghosts",
          "Their death wails will never cease. While you have this card as a trophy, reduce the value of each of your trophies by 1."
        ]
      },
      "Angelic Messenger": {
        "name": "Angelic Messenger",
        "count": 1,
        "file": "angelic_messenger",
        "description": [
          "A servant of Heaven has come to aid you. You may either heal 2 lives or place 1 Omen of your choice in the discard pile on top of the Omen stack. If you choose to place an Omen on top of the Omen stack, the Angel then ascends to the discard pile."
        ]
      },
      "Crossroads Devil": {
        "name": "Crossroads Devil",
        "count": 1,
        "file": "crossroads_devil",
        "description": [
          "This devil is looking to make a deal. To the first character that visits him and chooses to discard the top Omen, he will grant two of the following wishes, before vanishing to the discard pile: Gain 1 Spell, gold, Strength, Craft, life, or fate; or teleport to any other space in this Region."
        ]
      },
      "Heretic Angel": {
        "name": "Heretic Angel",
        "count": 1,
        "file": "heretic_angel",
        "description": [
          "A renegade from Heaven seeks to meddle with fate. Roll 1 die:",
          "1) Discard the top Omen",
          "2) Lose 1 life or 1 fate",
          "3) Become evil",
          "4) Become good",
          "5) Gain 1 life and 1 fate",
          "6) Place the top Omen of the discard pile on top of the Omen stack and discard this card"
        ]
      },
      "Anathema Priest": {
        "name": "Anathema Priest",
        "count": 1,
        "file": "anathema_priest",
        "description": [
          "After rolling the die when praying, you may add up to 2 to the score.",
          "Whenever you visit the Chapel, lose 1 fate.",
          "Whenever you visit the Graveyard, lose 1 life."
        ]
      },
      "Black Squire": {
        "name": "Black Squire",
        "count": 1,
        "file": "black_squire",
        "description": [
          "Add 2 to your Strength.",
          "To take an Object, you must pay 1 fate."
        ]
      },
      "White Maiden": {
        "name": "White Maiden",
        "count": 1,
        "file": "white_maiden",
        "description": [
          "Add 2 to your Craft.",
          "Whenever you take a Follower (not including the White Maiden), lose 1 life."
        ]
      },
      "Witch Cat": {
        "name": "Witch Cat",
        "count": 1,
        "file": "witch_cat",
        "description": [
          "At the start of your turn, you may replenish 1 fate.",
          "If you pay a fate to reroll a die and the roll is a 1, you are turned into a slimy little Toad for 3 turns."
        ]
      },
      "Ancient Calendar": {
        "name": "Ancient Calendar",
        "count": 1,
        "file": "ancient_calendar",
        "description": [
          "Whenever you draw an Event, you may move the Harbinger to any space with a character instead of moving the Harbinger normally.",
          "Whenever the top Omen is discarded, you must miss 1 turn."
        ]
      },
      "Armour of Humility": {
        "name": "Armour of Humility",
        "count": 1,
        "file": "armour_of_humility",
        "description": [
          "If you are defeated in battle and just lost a life, you may roll 1 die. If you roll a 3, 4, 5, or 6, the Armour protected you and you did not lose that life, though you still lost the battle.",
          "Whenever you win a battle, lose 1 life unless you pay 1 fate."
        ]
      },
      "Black Astrolabe": {
        "name": "Black Astrolabe",
        "count": 1,
        "file": "black_astrolabe",
        "description": [
          "You may ignore the effects of any Omen card.",
          "The first time you draw an Event during your turn, roll on the Harbinger chart, subtracting 1 from your roll, to a minimum of 1."
        ]
      },
      "Cursed Talisman": {
        "name": "Cursed Talisman",
        "count": 1,
        "file": "cursed_talisman",
        "description": [
          "You may only enter the Valley of Fire if you have one of the fabled Talismans.",
          "Add 3 to your result when rolling at the Mines and the Crypt."
        ]
      },
      "Flail of Blood": {
        "name": "Flail of Blood",
        "count": 1,
        "file": "flail_of_blood",
        "description": [
          "You must roll 2 dice in battle and add them together to determine your attack roll. If you roll doubles, you are automatically defeated."
        ]
      },
      "Forbidden Tome": {
        "name": "Forbidden Tome",
        "count": 1,
        "file": "forbidden_tome",
        "description": [
          "Your life and fate values are reduced by 1 for each Spell you have, to a minimum of 1.",
          "At the start of your turn, gain your full complement of Spells."
        ]
      },
      "Key to Hades": {
        "name": "Key to Hades",
        "count": 1,
        "file": "key_to_hades",
        "description": [
          "Your life value is increased by 2 for each character in the game.",
          "Whenever another character loses life, you lose 1 life.",
          "Whenever another character gains or heals life, you may heal 1 life."
        ]
      },
      "Worldeater Box": {
        "name": "Worldeater Box",
        "count": 1,
        "file": "worldeater_box",
        "description": [
          "When you roll a 1 for your move, place 1 random Terrain card on your space. You must then stay on your space and encounter it instead of moving normally."
        ]
      },
      "The Apocrypha": {
        "name": "The Apocrypha",
        "count": 1,
        "file": "the_apocrypha",
        "description": [
          "When the top Omen is discarded, lose 1 life and either 1 Strength or 1 Craft.",
          "You win the game if the last Omen is discarded, (instead of losing it)."
        ]
      },
      "Altar of Desire": {
        "name": "Altar of Desire",
        "count": 1,
        "file": "altar_of_desire",
        "description": [
          "When you visit the Altar you may lose 1 life to take 1 Follower from another character. If you do, discard the top Omen along with the Altar of Desire."
        ]
      },
      "Altar of Envy": {
        "name": "Altar of Envy",
        "count": 1,
        "file": "altar_of_envy",
        "description": [
          "When you visit the Altar, you may lose 1 life to force another character to lose 1 Strength or 1 Craft. If you do, gain 1 Strength or 1 Craft and discard the top Omen along with the Altar."
        ]
      },
      "Altar of Greed": {
        "name": "Altar of Greed",
        "count": 1,
        "file": "altar_of_greed",
        "description": [
          "When you visit the Altar you may lose 1 life to take 1 Object or all gold from another character. If you do, discard the top Omen along with the Altar of Greed."
        ]
      },
      "Altar of Wrath": {
        "name": "Altar of Wrath",
        "count": 1,
        "file": "altar_of_wrath",
        "description": [
          "When you visit the Altar you may lose 1 life to force another character to lose 2 lives. If you do, discard the top Omen along with the Altar of Wrath."
        ]
      },
      "Stones of Time": {
        "name": "Stones of Time",
        "count": 1,
        "file": "stones_of_time",
        "description": [
          "The stones carry upon them the weight of both future and past. You may discard this card to place the top Omen of the discard pile on top of the Omen stack. If you do, shuffle the Harbinger discard pile back into the Harbinger deck."
        ]
      }
    },
    "ARMAGEDDON_OMEN": {
      "Armageddon": {
        "name": "Armageddon",
        "count": 2,
        "description": [
          "When the seventh seal was broken, the sky rolled up like a scroll and stars fell from the heavens. The end was now upon the world and none would escape.",
          "Whenever a character is instructed to draw Adventure cards, they must draw Harbinger cards instead."
        ]
      },
      "Destruction": {
        "name": "Destruction",
        "count": 1,
        "description": [
          "When the sixth seal was broken, the riches of the world melted away and all that men held dear became like dust.",
          "Each character in the same Region as the Harbinger must discard 1 Object at random.",
          "Whenever a character is defeated by another character, they must discard 1 of their Objects."
        ]
      },
      "Death": {
        "name": "Death",
        "count": 1,
        "description": [
          "When the fifth seal was broken, a shrouded figure appeared on a pale horse and it brought death and suffering to the world.",
          "Each character in the same Region as the Harbinger must kill 1 Follower at random.",
          "Whenever a character is defeated by another character, they must kill 1 of their Followers."
        ]
      },
      "Famine": {
        "name": "Famine",
        "count": 1,
        "description": [
          "And behold, the fourth seal was broken and upon a black horse came a rider. She held a pair of balances in one hand and brought hunger to the world.",
          "Each character in the same Region as the Harbinger must lose either 1 Strength or 1 Craft.",
          "Whenever a character defeats another character, they may gain 1 Strength or 1 Craft."
        ]
      },
      "War": {
        "name": "War",
        "count": 1,
        "description": [
          "The third seal was broken and from the depths came a creature on a red horse, who brought with him war and slaughter.",
          "Discard all faceup Adventure cards in the same Region as the Harbinger and draw a Harbinger card to replace each discarded card.",
          "Whenever a character is defeated by another character, they must lose 1 life."
        ]
      },
      "Plague": {
        "name": "Plague",
        "count": 1,
        "description": [
          "The second seal was broken and a creature came forth riding on a white horse, and given to him were all of the pestilences of the world.",
          "Each character in the same Region as the Harbinger must lose 1 life.",
          "Whenever a character defeats another character, they may heal 1 life."
        ]
      },
      "Doom": {
        "name": "Doom",
        "count": 1,
        "description": [
          "The first seal was broken and the deafening sound of thunder drove hope away.",
          "Each character in the same Region as the Harbinger must lose 1 fate.",
          "Whenever a character defeats another character, they may replenish 1 fate."
        ]
      }
    },
    "DEAD_OMEN": {
      "Undead Hordes": {
        "name": "Undead Hordes",
        "count": 1,
        "description": [
          "The living are few and scattered and the rampaging dead seek to devour every remaining spark of life.",
          "Discard all faceup Strangers and Followers in all Regions. Then take all Enemies in all discard piles, shuffle them, and place them on top of their respective decks.",
          "Treat all Enemies as \"Enemy-Undead\". Undead add 2 to their attack rolls."
        ]
      },
      "Spreading Death": {
        "name": "Spreading Death",
        "count": 1,
        "description": [
          "Whatever curse caused the dead to rise now seeks out the living. It is only a matter of days before the dead rule this world.",
          "Each character must ditch all of their Followers.",
          "Spirits and Undead add 2 to their attack rolls.",
          "All text on Strangers and Followers is ignored and they are instead treated as \"Enemy-Undead\" with an encounter number of 2 and a Strength of 3."
        ]
      },
      "The Dead Rise": {
        "name": "The Dead Rise",
        "count": 1,
        "description": [
          "The ground cracks open and enemies long since dead rise again to take their revenge on those who slew them.",
          "Spirits and Undead add 1 to their attack rolls.",
          "Whenever a character is instructed to draw Adventure cards, they must draw 1 additional card at random from the discard pile."
        ]
      },
      "Spiteful Ghosts": {
        "name": "Spiteful Ghosts",
        "count": 1,
        "description": [
          "The spirits of the dead grow angry and cruel.",
          "Spirits and Undead add 1 to their attack rolls.",
          "Whenever a character defeats a Spirit or Undead in battle or psychic combat, they must discard it instead of taking it as a trophy."
        ]
      },
      "Open Graves": {
        "name": "Open Graves",
        "count": 1,
        "description": [
          "A dark force gathers at the edge of the world, calling the restless dead to rise from their graves.",
          "Discard the top 10 cards of each Adventure deck. Then, starting with the character taking the current turn and moving clockwise, each character may take 1 Follower or Object of their choice from any discard pile.",
          "Spirits and Undead add 1 to their attack rolls."
        ]
      },
      "Burial Mounds": {
        "name": "Burial Mounds",
        "count": 1,
        "description": [
          "Graves spring up across the land as undead creatures plague the countryside.",
          "Spirits and Undead add 1 to their attack rolls.",
          "Whenever a character defeats a Spirit or Undead, they may draw the top 5 cards of the Adventure deck and takes 1 Object of their choice. Discard the remaining cards."
        ]
      },
      "Restless Dead": {
        "name": "Restless Dead",
        "count": 1,
        "description": [
          "Dark spirits grow in strength and the walking dead cackle in the face of those who once vanquished them with ease.",
          "Spirits and Undead add 1 to their attack rolls.",
          "Increase the value of each Spirit and Undead trophy by 1."
        ]
      },
      "The Rise of the Dead": {
        "name": "The Rise of the Dead",
        "count": 1,
        "description": [
          "I see darkness. Death is all around me. I see the light of life extinguished, one flickering flame at a time.",
          "I see the gates of oblivion open and release the tormented souls of the damned. The living will surrender unto death and only the dead will rule."
        ]
      }
    },
    "SHATTERED_OMEN": {
      "Shards of the Old World": {
        "name": "Shards of the Old World",
        "count": 1,
        "description": [
          "Reality is lost to the chaos of an ever-shifting world. The occasional site of refuge is all that offers hope to the few scattered survivors.",
          "Replace the text of each space not in the Inner Region or containing a Terrain card with:",
          "Lose 1 Life Then Draw 1 Card",
          "Do not draw a card if there is already one in this space."
        ]
      },
      "Growing Chaos": {
        "name": "Growing Chaos",
        "count": 1,
        "description": [
          "The strange new lands begin to tremble and crack. Few places are safe in this world.",
          "If a character ends their turn on a space with a Terrain card, they lose 1 life."
        ]
      },
      "Civilization Falls": {
        "name": "Civilization Falls",
        "count": 1,
        "description": [
          "The bastions of civilization cannot survive the escalating destruction.",
          "Place a random Terrain card on the Tavern, the Village, the Graveyard, the Chapel, the City, the Temple, and the Castle."
        ]
      },
      "Broken Worlds": {
        "name": "Broken Worlds",
        "count": 1,
        "description": [
          "The cracks in reality expand, leaving the world a strange and broken place.",
          "Whenever a character lands on a space with a Terrain card, they place a random Terrain card in the closest space which does not have a Terrain card. If 2 spaces are equally close, that character chooses."
        ]
      },
      "The Earth Quakes": {
        "name": "The Earth Quakes",
        "count": 1,
        "description": [
          "The strain of an ever-changing landscape causes a cataclysmic earthquake that spreads death and destruction through every region.",
          "Discard all faceup Adventure cards in all Regions. If a character is on a space with a faceup Adventure card, they lose 1 life for each card in their space discarded in this way."
        ]
      },
      "Cracks Appear": {
        "name": "Cracks Appear",
        "count": 1,
        "description": [
          "The rifts in the sky spread outward and without warning landscapes shift and reality wavers.",
          "When a character rolls a 1 for their move, they place 1 random Terrain card on their space. They must then stay on their space and encounter it instead of moving normally."
        ]
      },
      "Tear in the World": {
        "name": "Tear in the World",
        "count": 1,
        "description": [
          "The sky above you tears apart and you watch in horror as your homeland vanishes, replaced with strange and alien terrain.",
          "Each character must place a random Terrain card on their space."
        ]
      },
      "The Shattered World": {
        "name": "The Shattered World",
        "count": 1,
        "description": [
          "There is a legend among the tribes of the Highland, in which the world is a glacier, moving slowly down the mountain of time towards the ocean of rebirth.",
          "At first the world was cold and rigid, but as it descended it became fluid and quick, and life was exciting and wonderful. But like all glaciers, there will be a time where it will grow too warm.",
          "The surface ice will crack and great fissures will split the world into many pieces. It is said that some fragments will survive, floating in an endless sea for all eternity."
        ]
      }
    },
    "STARS_OMEN": {
      "A World Without Magic": {
        "name": "A World Without Magic",
        "count": 1,
        "file": "stars_align_seventh_omen",
        "description": [
          "Magic has faded completely from the world and now it is only a matter of time before every living thing withers and dies. Characters cannot gain Spells or have Magic Objects. Treat all spaces in the Inner Region, except for the Plain of Peril and the Crown of Command, as blank.",
          "Each character discards all of their Spells and Magic Objects."
        ]
      },
      "Fleeting Magic": {
        "name": "Fleeting Magic",
        "count": 1,
        "file": "stars_align_sixth_omen",
        "description": [
          "Just as the prophets foretold, magic fades from the land. Few can command the arcane words and the relics of old lose much of their power.",
          "The Spell limit of each character is reduced by 1.",
          "Each character may only have 1 Magic Object."
        ]
      },
      "Burnt Away": {
        "name": "Burnt Away",
        "count": 1,
        "file": "stars_align_fifth_omen",
        "description": [
          "The conjunction ends and the latent magical energies it brought ignite in an eldritch conflagration, bringing death and woe to all who practiced the arcane arts.",
          "Each character must lose 1 life for each of their Spells and then discard all of their Spells.",
          "The Spell limit of each character is increased by 1."
        ]
      },
      "Arcane Feedback": {
        "name": "Arcane Feedback",
        "count": 1,
        "file": "stars_align_fourth_omen",
        "description": [
          "The tides of magic begin to ebb and flow, making even the simplest incantation erratic and dangerous.",
          "The Spell limit of each character is increased by 2.",
          "Whenever a character casts a Spell, they must lose either 1 life or 1 fate."
        ]
      },
      "Power Overwhelming": {
        "name": "Power Overwhelming",
        "count": 1,
        "file": "stars_align_third_omen",
        "description": [
          "The conjunction reaches its peak as magic permeates the land. Great marvels and even greater atrocities abound as the virtuous and the villainous make use of their newfound powers.",
          "The Spell limit of each character is increased by 2.",
          "After a character casts a Spell, they immediately gain 1 Spell, if their Craft allows."
        ]
      },
      "Mysterious Knowledge": {
        "name": "Mysterious Knowledge",
        "count": 1,
        "file": "stars_align_second_omen",
        "description": [
          "Arcane formulae appear fully formed in the minds of even the simplest folk. All the citizens of the land delight in the magic at their fingertips.",
          "Each character gains their full complement of Spells.",
          "The Spell limit of each character is increased by 1."
        ]
      },
      "The Conjunction": {
        "name": "The Conjunction",
        "count": 1,
        "file": "stars_align_first_omen",
        "description": [
          "A great conjunction of the stars causes magic to surge throughout the land.",
          "Each character gains 1 Spell, if their Craft allows.",
          "The Spell limit of each character is increased by 1."
        ]
      }
    }
  },
  "The Highland": {
    "SPELLS": {
      "Eyes of the Hawk": {
        "name": "Eyes of the Hawk",
        "count": 2,
        "file": "eyes_of_the_hawk",
        "description": [
          "Cast on yourself after you have rolled a die for your move. You may move any number of spaces up to your die roll, instead of moving the full distance as indicated by the die roll."
        ]
      },
      "Lightning Bolt": {
        "name": "Lightning Bolt",
        "count": 1,
        "file": "lightning_bolt",
        "description": [
          "Cast at any time on any character. That character is stunned (may do nothing apart from negating this Spell with Counterspell) for the duration of that turn."
        ]
      },
      "Lightning Strike": {
        "name": "Lightning Strike",
        "count": 1,
        "file": "lightning_strike",
        "description": [
          "Cast on any space at any time.",
          "Any creatures and characters in the space may be evaded until the end of the turn."
        ]
      },
      "Mind Steal": {
        "name": "Mind Steal",
        "count": 2,
        "file": "mind_steal",
        "description": [
          "Cast on another character at any time. Look at that character's Spells and take one of your choice."
        ]
      },
      "Simulacrum": {
        "name": "Simulacrum",
        "count": 2,
        "file": "simulacrum",
        "description": [
          "Cast on yourself when you are about to engage in battle or psychic combat. Resolve the attack as normal, except that if your attack score is less than your opponent's, you are not defeated and the attack is considered a stand-off instead."
        ]
      },
      "Soul Shatter": {
        "name": "Soul Shatter",
        "count": 1,
        "file": "soul_shatter",
        "description": [
          "Cast on any character or creature who you are about to engage in psychic combat. If cast on a character, they lose 2 lives. If cast on a creature, it is killed. Enemies killed may be",
          "taken as trophies."
        ]
      },
      "Syphon Craft": {
        "name": "Syphon Craft",
        "count": 1,
        "file": "syphon_craft",
        "description": [
          "Cast on any character with at least 1 Craft counter at the start of their turn. The character must lose 1 Craft, and your character gains 1 Craft."
        ]
      }
    },
    "HIGHLAND": {
      "Ambush": {
        "name": "Ambush",
        "count": 1,
        "file": "ambush",
        "description": [
          "Move the closest Enemy in this Region to this space. If two or more Enemies are an equal distance away, you choose which Enemy is moved here. If there are no Enemies in this Region, draw 1 card instead. Then discard this card."
        ]
      },
      "Avalanche": {
        "name": "Avalanche",
        "count": 1,
        "file": "avalanche",
        "description": [
          "Roll 1 die:",
          "1) Buried; lose your turn then discard this card.",
          "2-6) Move the Avalanche 3 spaces counter-clockwise. For each space the Avalanche moves onto, any characters there lose their next turn and any cards there are discarded."
        ]
      },
      "Blizzard": {
        "name": "Blizzard",
        "count": 1,
        "file": "blizzard",
        "description": [
          "Winter has come with a vengeance and a Blizzard envelops the land. For two rounds, all characters, no matter what Region they are in, may only move one space per turn. The Blizzard then abates to the discard pile."
        ]
      },
      "Electrical Storm": {
        "name": "Electrical Storm",
        "count": 1,
        "file": "electrical_storm",
        "description": [
          "All characters in this Region that have any Armour or Weapons are struck by lightning and lose 1 life.",
          "The Storm then thunders off to the discard pile."
        ]
      },
      "Eyrie Vanguard": {
        "name": "Eyrie Vanguard",
        "count": 1,
        "file": "eyrie_vanguard",
        "description": [
          "Take the top 3 cards from the Highland deck without looking at them or changing their order, and place them on top of the Adventure deck. Then discard this card."
        ]
      },
      "Hidden Chasm": {
        "name": "Hidden Chasm",
        "count": 1,
        "file": "hidden_chasm",
        "description": [
          "If you have a Horse and Cart, Mule, Riding Horse, or Warhorse, they fall down the snow-covered chasm and are killed.",
          "Then discard this card."
        ]
      },
      "Highland Raiders": {
        "name": "Highland Raiders",
        "count": 1,
        "file": "highland_raiders",
        "description": [
          "Highland Raiders attack you and abduct all your Followers. They immediately imprison the Followers at the Ridgeway.",
          "The Raiders then sneak away to their hideout in the discard pile."
        ]
      },
      "Rumour of Riches": {
        "name": "Rumour of Riches",
        "count": 1,
        "file": "rumour_of_riches",
        "description": [
          "A great wealth is rumoured to exist somewhere in the land. Roll 1 die and place 3 gold on the indicated space:",
          "1) Ruined Mine               4) Oasis",
          "2) Mountain Pass       5) Crags ",
          "   3) Lost City            6) Waterfall",
          "The Rumour then passes to the discard pile."
        ]
      },
      "Tumbling Boulder": {
        "name": "Tumbling Boulder",
        "count": 2,
        "file": "tumbling_boulder",
        "description": [
          "Roll 1 die:",
          "1) Crushed; lose 1 life then discard this card.",
          "2-6) Move the Boulder 6 spaces counter-clockwise.",
          "For each space the Boulder moves onto, any characters there lose 1 life and any cards there are discarded."
        ]
      },
      "Volcanic Eruption": {
        "name": "Volcanic Eruption",
        "count": 1,
        "file": "volcanic_eruption",
        "description": [
          "Molten lava courses down the mountains. Roll 1 die for each faceup Adventure Card in this Region.",
          "On a roll of 1, 2, or 3, the Adventure Card is swept away to the discard pile.",
          "The Eruption then flows to the",
          "discard pile."
        ]
      },
      "Ymir's Glow": {
        "name": "Ymir's Glow",
        "count": 1,
        "file": "ymirs_glow",
        "description": [
          "Starting with yourself, each character may gain their full complement of Spells, according to their current Craft.",
          "Ymir's Glow then darkens to the discard pile."
        ]
      },
      "Felclaw": {
        "name": "Felclaw",
        "count": 1,
        "file": "felclaw",
        "description": [
          "Felclaw",
          "If your Craft is lower than your Strength, you must fight in psychic combat. Otherwise you must fight in battle.",
          "It will remain here until it is killed."
        ]
      },
      "Amphiptere": {
        "name": "Amphiptere",
        "count": 1,
        "file": "amphiptere",
        "description": [
          "Amphiptere",
          "Before you engage the Amphiptere in battle, it makes a breath attack; if you have any Armour you lose 1 life.",
          "It will remain here until it is killed."
        ]
      },
      "Carrion Crows": {
        "name": "Carrion Crows",
        "count": 1,
        "file": "carrion_crows",
        "description": [
          "Carrion Crows",
          "If you are defeated, in addition to losing 1 life, you must discard all of your trophies. It will remain here",
          "until it is killed."
        ]
      },
      "Cloud Dragon": {
        "name": "Cloud Dragon",
        "count": 1,
        "file": "cloud_dragon",
        "description": [
          "Cloud Dragon",
          "A monstrous Cloud Dragon is terrorising this area. It will remain here until it is killed."
        ]
      },
      "Crag Crawler": {
        "name": "Crag Crawler",
        "count": 1,
        "file": "crag_crawler",
        "description": [
          "Crag Crawler",
          "An enormous Crag Crawler infests the caverns of this area. It will remain here until it is killed."
        ]
      },
      "Crag Growler": {
        "name": "Crag Growler",
        "count": 1,
        "file": "crag_growler",
        "description": [
          "Crag Growler",
          "A ravenous Crag Growler now dwells in this area.",
          "It will remain here until it is killed."
        ]
      },
      "Eyrie Outrider": {
        "name": "Eyrie Outrider",
        "count": 2,
        "file": "eyrie_outrider",
        "description": [
          "Eyrie Outrider",
          "A keen-eyed Eyrie Outrider soars among the clouds above this area. It will remain here until it is killed."
        ]
      },
      "Frost Drake": {
        "name": "Frost Drake",
        "count": 1,
        "file": "frost_drake",
        "description": [
          "Frost Drake",
          "A formidable Frost Drake is raiding this area. It will remain here until it is killed."
        ]
      },
      "Frost Giant": {
        "name": "Frost Giant",
        "count": 1,
        "file": "frost_giant",
        "description": [
          "Frost Giant",
          "A titanic Frost Giant is lumbering around this area. He will remain here until he is killed."
        ]
      },
      "Hatchling": {
        "name": "Hatchling",
        "count": 1,
        "file": "hatchling",
        "description": [
          "Hatchling",
          "A hungry Hatchling gazes across the land from its highest perches.",
          "It will remain here until it is killed."
        ]
      },
      "Hippogriff": {
        "name": "Hippogriff",
        "count": 1,
        "file": "hippogriff",
        "description": [
          "Hippogriff",
          "A hungry Hippogriff is hunting in this area. It will remain here until it is killed."
        ]
      },
      "Kobold": {
        "name": "Kobold",
        "count": 2,
        "file": "kobold",
        "description": [
          "Kobold",
          "A miscreant Kobold is roaming this area. It will remain here until it is killed."
        ]
      },
      "Manticore": {
        "name": "Manticore",
        "count": 1,
        "file": "manticore",
        "description": [
          "Manticore",
          "This ferocious Manticore preys on any intruders it finds within this area. It will remain here until it is killed."
        ]
      },
      "Mountain Dragon": {
        "name": "Mountain Dragon",
        "count": 1,
        "file": "mountain_dragon",
        "description": [
          "Mountain Dragon",
          "Before you engage the Dragon in battle, it makes a breath attack;",
          "roll 1 die.",
          "If the result is equal to or higher than your Craft you lose 1 life. It will remain here until it is killed."
        ]
      },
      "Mountain Goat": {
        "name": "Mountain Goat",
        "count": 2,
        "file": "mountain_goat",
        "description": [
          "Mountain Goat",
          "An imposing Mountain Goat stubbornly refuses to leave this area.",
          "It will remain here until it is killed."
        ]
      },
      "Mountain Lion": {
        "name": "Mountain Lion",
        "count": 1,
        "file": "mountain_lion",
        "description": [
          "Mountain Lion",
          "A Mountain Lion is stalking everything in this area.",
          "It will remain here until it is killed."
        ]
      },
      "Roc": {
        "name": "Roc",
        "count": 1,
        "file": "roc",
        "description": [
          "Roc",
          "It will remain here until it is killed. If you are defeated, in addition to losing 1 life, the Roc drops you in the Mountain Pass."
        ]
      },
      "Rock Mauler": {
        "name": "Rock Mauler",
        "count": 1,
        "file": "rock_mauler",
        "description": [
          "Rock Mauler",
          "A Rock Mauler is carving a path of destruction through the area. It will remain here until it is killed."
        ]
      },
      "Skyfall Sentry": {
        "name": "Skyfall Sentry",
        "count": 1,
        "file": "skyfall_sentry",
        "description": [
          "Skyfall Sentry",
          "Before you engage the Skyfall Sentry in battle, you must roll 1 die. If the result is less than your Craft, you dodge the boulder it drops. If the result is equal to or higher, lose 1 life. It will remain here until it is killed."
        ]
      },
      "Snow Goblin": {
        "name": "Snow Goblin",
        "count": 1,
        "file": "snow_goblin",
        "description": [
          "Snow Goblin",
          "A ravening Snow Goblin is laying waste to this area. It will remain",
          "here until it is killed."
        ]
      },
      "Thundercrest": {
        "name": "Thundercrest",
        "count": 1,
        "file": "thundercrest",
        "description": [
          "Thundercrest",
          "This noble creature will defend the nest it has built in this area. It will remain here until it is killed."
        ]
      },
      "Tuskgore": {
        "name": "Tuskgore",
        "count": 1,
        "file": "tuskgore",
        "description": [
          "Tuskgore",
          "If you are defeated, in addition to losing 1 life, roll 1 die and move that many spaces counter-clockwise.",
          "It will remain here until it is killed."
        ]
      },
      "Wind Rider": {
        "name": "Wind Rider",
        "count": 2,
        "file": "wind_rider",
        "description": [
          "Wind Rider",
          "A merciless Wind Rider keeps a watchful eye on this area from above. It will remain here until it is killed."
        ]
      },
      "Wyvern": {
        "name": "Wyvern",
        "count": 1,
        "file": "wyvern",
        "description": [
          "Wyvern",
          "This foul creature has made its lair here. It will remain here until it is killed."
        ]
      },
      "Chill Wraith": {
        "name": "Chill Wraith",
        "count": 1,
        "file": "chill_wraith",
        "description": [
          "Chill Wraith",
          "If you are defeated, in addition to losing 1 life, you must miss your next turn. It will remain here until it is killed."
        ]
      },
      "Cryomancer": {
        "name": "Cryomancer",
        "count": 1,
        "file": "cryomancer",
        "description": [
          "Cryomancer",
          "If you are defeated, in addition to losing 1 life, you must miss your next turn. He will remain here until he is killed."
        ]
      },
      "Earth Elemental": {
        "name": "Earth Elemental",
        "count": 1,
        "file": "earth_elemental",
        "description": [
          "Earth Elemental",
          "It will remain here until it is killed. If you are defeated, in addition to losing 1 life, you are dragged down to the Highland Entrance."
        ]
      },
      "Falconer": {
        "name": "Falconer",
        "count": 2,
        "file": "falconer",
        "description": [
          "Falconer",
          "You cannot evade the Falconer. She will remain here until she is killed."
        ]
      },
      "Harpy": {
        "name": "Harpy",
        "count": 2,
        "file": "harpy",
        "description": [
          "Harpy",
          "It will remain here until it is killed. If you are defeated, in addition to losing 1 life, the Harpy drops you in the Crags."
        ]
      },
      "Ice Elemental": {
        "name": "Ice Elemental",
        "count": 1,
        "file": "ice_elemental",
        "description": [
          "Ice Elemental",
          "A giant Ice Elemental is drifting through this area. It will remain here until it is killed."
        ]
      },
      "Lightning Elemental": {
        "name": "Lightning Elemental",
        "count": 1,
        "file": "lightning_elemental",
        "description": [
          "Lightning Elemental",
          "This formidable entity dominates the horizon with its savage energies. It will remain here until it is killed."
        ]
      },
      "Night Gaunt": {
        "name": "Night Gaunt",
        "count": 1,
        "file": "night_gaunt",
        "description": [
          "Night Gaunt",
          "The Night Gaunt fills beings who enter this area with a bone-chilling dread. It will remain here until it is killed."
        ]
      },
      "Phantasm": {
        "name": "Phantasm",
        "count": 1,
        "file": "phantasm",
        "description": [
          "Phantasm",
          "A terrifying Phantasm haunts this place. It will remain here until it is killed."
        ]
      },
      "Revenant": {
        "name": "Revenant",
        "count": 1,
        "file": "revenant",
        "description": [
          "Revenant",
          "A sinister Revenant has been doomed to linger within this cursed area. It will remain here until it is killed."
        ]
      },
      "Shiver Nymph": {
        "name": "Shiver Nymph",
        "count": 1,
        "file": "shiver_nymph",
        "description": [
          "Shiver Nymph",
          "A mischievous Shiver Nymph is frolicking in this area. If your Craft is higher than 2, the Shiver Nymph will flee 1 space clockwise instead of fighting you.",
          "Otherwise it will remain here until it",
          "is killed."
        ]
      },
      "Sky Seeker": {
        "name": "Sky Seeker",
        "count": 2,
        "file": "sky_seeker",
        "description": [
          "Sky Seeker",
          "A vigilant Sky Seeker patrols this area from its winged mount. It will remain here until it is killed."
        ]
      },
      "Storm Caller": {
        "name": "Storm Caller",
        "count": 1,
        "file": "storm_caller",
        "description": [
          "Storm Caller",
          "If you have any Armour you lose 1 life before fighting the Storm Caller. He will remain here until he is killed."
        ]
      },
      "Stormcrow": {
        "name": "Stormcrow",
        "count": 1,
        "file": "stormcrow",
        "description": [
          "Stormcrow",
          "This ominous creature has summoned a storm in this area. It will remain here until it is killed."
        ]
      },
      "Stormwing": {
        "name": "Stormwing",
        "count": 1,
        "file": "stormwing",
        "description": [
          "Stormwing",
          "A fearsome Stormwing soars above this area, ready to strike at any moment. It will remain here until it is killed."
        ]
      },
      "Talon Mage": {
        "name": "Talon Mage",
        "count": 2,
        "file": "talon_mage",
        "description": [
          "Talon Mage",
          "A powerful Talon Mage commands this area. It will remain here until it is killed."
        ]
      },
      "Windlasher": {
        "name": "Windlasher",
        "count": 1,
        "file": "windlasher",
        "description": [
          "Windlasher",
          "Spells cannot be cast on the Windlasher. It will remain here until it is killed."
        ]
      },
      "Winged Stalker": {
        "name": "Winged Stalker",
        "count": 1,
        "file": "winged_stalker",
        "description": [
          "Winged Stalker",
          "A Winged Stalker is silently hunting for prey in this area. It will remain here until it is killed."
        ]
      },
      "Astrologer": {
        "name": "Astrologer",
        "count": 1,
        "file": "astrologer",
        "description": [
          "The Astrologer will remain here for the rest of the game. Draw 3 Adventure Cards, take one and discard the others. You may place the Adventure Card on top of its deck at the start of any character's turn."
        ]
      },
      "Cauldron Crone": {
        "name": "Cauldron Crone",
        "count": 1,
        "file": "cauldron_crone",
        "description": [
          "The Cauldron Crone will remain here for the rest of the game. Roll 1 die:",
          "1) Become a Toad for 3 turns",
          "2) Lose 2 lives         3) Lose 1 life",
          "4) Heal 1 life       5) Heal 2 lives",
          "6) Heal up to your life value"
        ]
      },
      "Cyclops": {
        "name": "Cyclops",
        "count": 1,
        "file": "cyclops",
        "description": [
          "Roll 1 die to determine how the Cyclops reacts to you:",
          "1-2) It kills one of your Followers at random",
          "3-4) It discards one of your Objects at random",
          "5-6) It ignores you and plods off to the discard pile."
        ]
      },
      "Guru": {
        "name": "Guru",
        "count": 1,
        "file": "guru",
        "description": [
          "The Guru grants you a Spell, if your Craft allows. Look through the Spell discard pile and take one of your choice. The Spell deck and Spell discard pile are then shuffled together. Once the Guru has granted a Spell he vanishes to the discard pile."
        ]
      },
      "Highland Hermit": {
        "name": "Highland Hermit",
        "count": 1,
        "file": "hermit_highland",
        "description": [
          "Roll 1 die and place the Hermit on the indicated space:",
          "1) Cursed Glade           4) Glacier    ",
          "2) Ruined Mine            5) Crags      ",
          "3) Mountain Pass        6) Waterfall",
          "He will give the first character to visit him there a Talisman, if available, and then vanish to the discard pile."
        ]
      },
      "Leprechaun": {
        "name": "Leprechaun",
        "count": 1,
        "file": "leprechaun_highland",
        "description": [
          "The Leprechaun will remain here for the rest of the game. Roll 1 die:",
          "1) Become a Toad for 3 turns",
          "2) Lose all of your gold",
          "3) Lose 1 gold",
          "4) Gain 1 gold",
          "5) Gain 2 gold",
          "6) Roll 1 die and gain that much gold"
        ]
      },
      "Luck Fairy": {
        "name": "Luck Fairy",
        "count": 1,
        "file": "luck_fairy",
        "description": [
          "The Luck Fairy will remain here for the rest of the game. Roll 1 die:",
          "1) Become a Toad for 3 turns",
          "2) Lose all of your fate",
          "3) Lose 1 fate",
          "4) Replenish 1 fate",
          "5) Replenish 2 fate",
          "6) Replenish fate up to your fate value"
        ]
      },
      "Prospector": {
        "name": "Prospector",
        "count": 2,
        "file": "prospector",
        "description": [
          "You may sell any of your gems to the Prospector; discard the Lodestone, Opal, Emerald, Ruby, or Diamond as if you were at the City and gain the indicated amount of gold. The Prospector will depart to the discard pile once a character sells him gems."
        ]
      },
      "Sage Owl": {
        "name": "Sage Owl",
        "count": 1,
        "file": "sage_owl",
        "description": [
          "The Sage Owl will remain here for the rest of the game. On your next turn, during movement, you may move any number of spaces up to your die roll, instead of moving the full distance as indicated by the die roll."
        ]
      },
      "Spellweaver": {
        "name": "Spellweaver",
        "count": 1,
        "file": "spellweaver",
        "description": [
          "The Spellweaver will remain here for the rest of the game. Draw 3 Spells, keep one if your Craft allows, and discard the other Spells."
        ]
      },
      "Tracker": {
        "name": "Tracker",
        "count": 1,
        "file": "tracker",
        "description": [
          "The Tracker will remain here for the rest of the game.",
          "On your next turn, instead of your normal move, you may move to any faceup Enemy in this Region."
        ]
      },
      "Beastmaster": {
        "name": "Beastmaster",
        "count": 1,
        "file": "beastmaster",
        "description": [
          "You may tame one Animal you encounter instead of attacking it. The Animal adds its Strength to yours during your next battle, and then journeys off to the discard pile along with this card."
        ]
      },
      "Clansman": {
        "name": "Clansman",
        "count": 1,
        "file": "clansman",
        "description": [
          "Add 2 to your Strength during battle.",
          "You must reduce your attack score by 2 during psychic combat."
        ]
      },
      "Friendly Giant": {
        "name": "Friendly Giant",
        "count": 1,
        "file": "friendly_giant",
        "description": [
          "The Giant may fight in your place with a Strength of 6 or a Craft of 3. If the Giant wins, the creature is killed or the opposing character must lose 1 life, then you must ditch the Giant on your space. If the Giant loses or has a stand-off, it is killed and your turn immediately ends. Enemies killed may be taken as trophies."
        ]
      },
      "Horned Owl": {
        "name": "Horned Owl",
        "count": 1,
        "file": "horned_owl",
        "description": [
          "Add 1 to your Craft.",
          "If you are instructed to lose one or more turns, you may discard the Horned Owl to negate the loss."
        ]
      },
      "Magpie": {
        "name": "Magpie",
        "count": 1,
        "file": "magpie",
        "description": [
          "Whenever you encounter a space, Objects in that space are considered to have an encounter number of 1 instead of 5."
        ]
      },
      "Miner": {
        "name": "Miner",
        "count": 1,
        "file": "miner",
        "description": [
          "The Miner can carry an extra four Objects for you if you pay him 1 gold. If you do not pay him, he wanders off to the discard pile.",
          "If you lose the Miner, leave any surplus Objects of your choice in the space you are in."
        ]
      },
      "Trailblazer": {
        "name": "Trailblazer",
        "count": 2,
        "file": "trailblazer",
        "description": [
          "You may roll two dice for your movement in the Highland and choose one of the results to use for your move."
        ]
      },
      "Treasure Hunter": {
        "name": "Treasure Hunter",
        "count": 1,
        "file": "treasure_hunter",
        "description": [
          "If you move into a space that contains one or more Objects, you may end your move there, instead of moving the full distance as indicated by the die roll. The Treasure Hunter departs to the discard pile if you lose a battle or psychic combat."
        ]
      },
      "Vagabond": {
        "name": "Vagabond",
        "count": 1,
        "file": "vagabond",
        "description": [
          "You must take the Vagabond as a Follower. Whenever you roll a 1 for your move, your turn immediately ends.",
          "You may discard the Vagabond if you pay him 2 gold."
        ]
      },
      "Wayfarer": {
        "name": "Wayfarer",
        "count": 1,
        "file": "wayfarer",
        "description": [
          "You need not roll the die in the Crags unless you wish to. If you choose to roll, you may add up to 2 to the score."
        ]
      },
      "Wildlander": {
        "name": "Wildlander",
        "count": 1,
        "file": "wildlander",
        "description": [
          "Instead of rolling the die for movement, you may encounter the space you are in, as if you just landed there (either encounter the space or a character in the space). The Wildlander then wanders off to the discard pile."
        ]
      },
      "Dawnstone": {
        "name": "Dawnstone",
        "count": 1,
        "file": "dawnstone",
        "description": [
          "Place 2 lives on this card. Whenever you lose a life, you may discard 1 life from the Dawnstone instead.",
          "The Dawnstone crumbles to the discard pile once both lives have been discarded."
        ]
      },
      "Dragon's Blood": {
        "name": "Dragon's Blood",
        "count": 1,
        "file": "dragons_blood",
        "description": [
          "You may discard this potion at any time.",
          "When you drink it you must lose 1 life, but your Strength value is doubled until the end of the turn."
        ]
      },
      "Dragon's Eye": {
        "name": "Dragon's Eye",
        "count": 1,
        "file": "dragons_eye",
        "description": [
          "You may enslave one Enemy Dragon you encounter instead of attacking it.",
          "The Dragon adds its Strength to yours during your next battle, and then soars off to the discard pile along with this card."
        ]
      },
      "Dragon's Teeth": {
        "name": "Dragon's Teeth",
        "count": 1,
        "file": "dragons_teeth",
        "description": [
          "You may discard the Teeth when you are about to engage in battle.",
          "Roll 1 die and add the result to your attack score."
        ]
      },
      "Flight Potion": {
        "name": "Flight Potion",
        "count": 1,
        "file": "flight_potion",
        "description": [
          "You may discard this potion instead of rolling the die for your movement to move to any other space in the same Region."
        ]
      },
      "Healing Potion": {
        "name": "Healing Potion",
        "count": 2,
        "file": "healing_potion",
        "description": [
          "You may discard this potion at any time to heal 1 life or prevent a Follower from being killed."
        ]
      },
      "Ice Sceptre": {
        "name": "Ice Sceptre",
        "count": 1,
        "file": "ice_sceptre",
        "description": [
          "If you defeat a character in battle or psychic combat and choose to take a life, the character must also miss their next turn."
        ]
      },
      "Invisibility Potion": {
        "name": "Invisibility Potion",
        "count": 1,
        "file": "invisibility_potion",
        "description": [
          "You may discard this potion at any time to evade any creature or character until the end of the turn."
        ]
      },
      "Luckstone": {
        "name": "Luckstone",
        "count": 1,
        "file": "luckstone",
        "description": [
          "Place 2 fate on this card. Whenever you pay a fate, you may discard 1 fate from the Luckstone instead. The Luckstone crumbles to the discard pile once both fate have been discarded."
        ]
      },
      "Renewal Potion": {
        "name": "Renewal Potion",
        "count": 1,
        "file": "renewal_potion",
        "description": [
          "You may discard this potion at any time to discard any of your Spells and then draw an equal number of Spells."
        ]
      },
      "Ring of Protection": {
        "name": "Ring of Protection",
        "count": 1,
        "file": "ring_of_protection",
        "description": [
          "If you are defeated in battle or psychic combat, you may discard the Ring instead of losing a life."
        ]
      },
      "Spellbound Potion": {
        "name": "Spellbound Potion",
        "count": 1,
        "file": "spellbound_potion",
        "description": [
          "You may discard this potion at any time to gain 1 Spell, if your Craft allows."
        ]
      },
      "Spellstone": {
        "name": "Spellstone",
        "count": 1,
        "file": "spellstone",
        "description": [
          "The Spellstone has 2 Spells (take them from the Spell deck, look at them, and place them on this card). It will cast the Spells whenever you wish (treat the Spells as though you had cast them). The Spellstone crumbles to the discard pile when the last Spell is cast."
        ]
      },
      "Unstable Potion": {
        "name": "Unstable Potion",
        "count": 1,
        "file": "unstable_potion",
        "description": [
          "",
          "You may discard this potion at any time to roll 1 die:",
          "1) Become a Toad for 3 turns",
          "2) Lose 1 Strength",
          "3) Lose 1 Craft",
          "4) Gain 1 life",
          "5) Gain 1 Craft",
          "6) Gain 1 Strength"
        ]
      },
      "Horns of Power": {
        "name": "Horns of Power",
        "count": 1,
        "file": "horns_of_power",
        "description": [
          "Add 1 to your Strength and 1 to your Craft."
        ]
      },
      "Lightning Hammer": {
        "name": "Lightning Hammer",
        "count": 1,
        "file": "lightning_hammer",
        "description": [
          "Add 1 to your Strength during battle.",
          "Whenever you fight more than one Enemy at the same time, you may add 3 to your Strength instead of 1."
        ]
      },
      "Magic Helmet": {
        "name": "Magic Helmet",
        "count": 1,
        "file": "magic_helmet",
        "description": [
          "If you are defeated in battle and just lost a life, roll 1 die.",
          "If you roll a 5 or 6, the Helmet protected you and you did not lose that life, though you still lost the battle."
        ]
      },
      "Magic Mace": {
        "name": "Magic Mace",
        "count": 1,
        "file": "magic_mace",
        "description": [
          "Add 2 to your Strength during battle."
        ]
      },
      "Magic Shield": {
        "name": "Magic Shield",
        "count": 1,
        "file": "magic_shield",
        "description": [
          "If you are defeated in battle and just lost a life, roll 1 die.",
          "If you roll a 4, 5, or 6, the Shield protected you and you did not lose that life, though you still lost the battle."
        ]
      },
      "Spellsword": {
        "name": "Spellsword",
        "count": 1,
        "file": "spellsword",
        "description": [
          "Add 1 to your Craft during psychic combat.",
          "When you use the Spellsword in psychic combat to defeat an Enemy or another character and then cause them to lose a life, you gain 1 Spell, if your Craft allows."
        ]
      },
      "Crystal Shard": {
        "name": "Crystal Shard",
        "count": 1,
        "file": "crystal_shard",
        "description": [
          "Add 1 to your Craft."
        ]
      },
      "Diamond": {
        "name": "Diamond",
        "count": 2,
        "file": "diamond",
        "description": [
          "If you visit the Alchemist in the City, you may discard the Diamond to gain 4 gold."
        ]
      },
      "Eagle Talon": {
        "name": "Eagle Talon",
        "count": 1,
        "file": "eagle_talon",
        "description": [
          "Add 1 to your Strength."
        ]
      },
      "Emerald": {
        "name": "Emerald",
        "count": 4,
        "file": "emerald",
        "description": [
          "If you visit the Alchemist in the City, you may discard the Emerald to gain 2 gold."
        ]
      },
      "Opal": {
        "name": "Opal",
        "count": 5,
        "file": "opal",
        "description": [
          "If you visit the Alchemist in the City, you may discard the Opal to gain 1 gold."
        ]
      },
      "Ruby": {
        "name": "Ruby",
        "count": 3,
        "file": "ruby",
        "description": [
          "If you visit the Alchemist in the City, you may discard the Ruby to gain 3 gold."
        ]
      },
      "Lodestone": {
        "name": "Lodestone",
        "count": 2,
        "file": "lodestone",
        "description": [
          "You must take the Lodestone. It counts as 2 Objects for your carrying limit. If you visit the Alchemist in the City, you may discard the Lodestone to gain 1 gold."
        ]
      },
      "Lucky Charm": {
        "name": "Lucky Charm",
        "count": 2,
        "file": "lucky_charm",
        "description": [
          "You may discard the Charm when you are about to make a die roll. You choose which result on the die to use instead of rolling it."
        ]
      },
      "Treasure Chest": {
        "name": "Treasure Chest",
        "count": 1,
        "file": "treasure_chest_highland",
        "description": [
          "You may discard the Chest during your turn to roll 1 die and gain that much gold. If you have the Treasure Map, you may roll 1 additional die and gain that much gold."
        ]
      },
      "Treasure Map": {
        "name": "Treasure Map",
        "count": 1,
        "file": "treasure_map_highland",
        "description": [
          "Whenever you exchange a Bag of Gold card, you gain 1 additional gold.",
          "You may discard the Treasure Map at the Crags to gain 2 gold."
        ]
      },
      "Walking Stick": {
        "name": "Walking Stick",
        "count": 1,
        "file": "walking_stick",
        "description": [
          "After you roll the die for your move, you may add 1 to the score."
        ]
      },
      "Highland Cave": {
        "name": "Highland Cave",
        "count": 1,
        "file": "cave_highland",
        "description": [
          "See what you discover inside",
          "by rolling 1 die:",
          "1) Cave-in; lose 1 life and discard this card",
          "2) Attacked by a Cave Troll with Strength 6",
          "3) Lose your next turn",
          "4) Gain 1 gold",
          "5) Gain 2 gold",
          "6) Gain 3 gold"
        ]
      },
      "Eagle's Nest": {
        "name": "Eagle's Nest",
        "count": 1,
        "file": "eagles_nest",
        "description": [
          "Place this card on the Mountain Pass. The first character to visit may climb to the nest and collect the Talisman that the Eagle left behind.",
          "Discard the Eagle's Nest once the Talisman has been collected."
        ]
      },
      "Gong of War": {
        "name": "Gong of War",
        "count": 1,
        "file": "gong_of_war",
        "description": [
          "You may summon 1 character from any Region to fight. Place the character on this space and attack them as if you had encountered them (by battle, or by psychic combat if you are permitted). Once the Gong has been used, it crumbles to the discard pile."
        ]
      },
      "Icy Path": {
        "name": "Icy Path",
        "count": 1,
        "file": "icy_path",
        "description": [
          "The Icy Path will remain here for the rest of the game. Roll 1 die:",
          "1) Lose your next turn",
          "2-3) Move 3 spaces counter-clockwise",
          "4-5) Move 3 spaces clockwise",
          "6) Immediately take another turn"
        ]
      },
      "Narrow Path": {
        "name": "Narrow Path",
        "count": 1,
        "file": "narrow_path",
        "description": [
          "The Narrow Path will remain here for the rest of the game. Roll one die for yourself, and one for each of your Followers.",
          "If a 1 or 2 is rolled for yourself,",
          "lose 1 life.",
          "If a 1 or 2 is rolled for a Follower,",
          "it is killed."
        ]
      },
      "Pool of Fortitude": {
        "name": "Pool of Fortitude",
        "count": 1,
        "file": "pool_of_fortitude",
        "description": [
          "Place a total of 2 Strength and 2 life here when revealed. You may drink at the Pool once per visit and either gain 1 Strength or gain 1 life by taking the appropriate counter. When all 4 counters have been taken, the Pool vanishes to the discard pile."
        ]
      },
      "Rock Face": {
        "name": "Rock Face",
        "count": 1,
        "file": "rock_face",
        "description": [
          "The Rock Face will remain here for the rest of the game.",
          "Roll 2 dice.",
          "If the score is less than the combined total of your Strength and Craft, you climb the Rock Face successfully. If the score is equal to or higher, you must either lose 1 life or discard 1 Follower."
        ]
      },
      "Rune Gate": {
        "name": "Rune Gate",
        "count": 2,
        "file": "rune_gate",
        "description": [
          "On your next turn, instead of your normal move, you may teleport to any other faceup Rune Gate or any Runes space.",
          "Once the Rune Gate has been used, it vanishes to the discard pile."
        ]
      },
      "Sky Haven": {
        "name": "Sky Haven",
        "count": 1,
        "file": "sky_haven",
        "description": [
          "The Sky Haven will remain here for the rest of the game. You may heal up to your life value and replenish fate up to your fate value at the cost of one gold each."
        ]
      },
      "Stream of Knowledge": {
        "name": "Stream of Knowledge",
        "count": 1,
        "file": "stream_of_knowledge",
        "description": [
          "Place a total of 2 Craft and 2 life here when revealed. You may drink at the Stream once per visit and either gain 1 Craft or gain 1 life by taking the appropriate counter. When all 4 counters have been taken, the Stream vanishes to the discard pile."
        ]
      },
      "Well of Life": {
        "name": "Well of Life",
        "count": 1,
        "file": "well_of_life",
        "description": [
          "Place a total of 2 fate and 2 life here when revealed. You may drink at the Well once per visit and either gain 1 fate or gain 1 life by taking the appropriate counter. When all 4 counters have been taken, the Well vanishes to the discard pile."
        ]
      }
    },
    "ADVENTURE": {
      "Eyrie Vanguard": {
        "name": "Eyrie Vanguard",
        "count": 2,
        "file": "eyrie_vanguard",
        "description": [
          "Take the top 3 cards from the Highland deck without looking at them or changing their order, and place them on top of the Adventure deck. Then discard this card."
        ]
      },
      "Landslide": {
        "name": "Landslide",
        "count": 2,
        "file": "landslide",
        "description": [
          "Move your character to the Highland Entrance or to any faceup Mountain Trail. The Landslide then rolls off to the discard pile."
        ]
      },
      "Magic Gateway": {
        "name": "Magic Gateway",
        "count": 1,
        "file": "magic_gateway",
        "description": [
          "You stumble across a magical portal.",
          "Roll 2 dice.",
          "If the score is equal to or less than your Craft, you may avoid the portal.",
          "If it is higher, you are teleported to the Lost City.",
          "The Magic Gateway then vanishes to the discard pile."
        ]
      },
      "Roc": {
        "name": "Roc",
        "count": 2,
        "file": "roc",
        "description": [
          "Roc",
          "It will remain here until it is killed. If you are defeated, in addition to losing 1 life, the Roc drops you in the Mountain Pass."
        ]
      },
      "Earth Elemental": {
        "name": "Earth Elemental",
        "count": 1,
        "file": "earth_elemental",
        "description": [
          "Earth Elemental",
          "It will remain here until it is killed. If you are defeated, in addition to losing 1 life, you are dragged down to the Highland Entrance."
        ]
      },
      "Mountain Trail": {
        "name": "Mountain Trail",
        "count": 2,
        "file": "mountain_trail",
        "description": [
          "The Mountain Trail will remain here for the rest of the game. On your next turn, instead of your normal move, you may move to the Highland Entrance."
        ]
      },
      "Rune Gate": {
        "name": "Rune Gate",
        "count": 2,
        "file": "rune_gate",
        "description": [
          "On your next turn, instead of your normal move, you may teleport to any other faceup Rune Gate or any Runes space.",
          "Once the Rune Gate has been used, it vanishes to the discard pile."
        ]
      }
    },
    "RELIC": {
      "Arnkell": {
        "name": "Arnkell",
        "count": 1,
        "file": "arnkell",
        "description": [
          "Instead of moving normally, you may discard Arnkell to teleport to any space in the same Region.",
          "You must ditch any Followers before you move."
        ]
      },
      "Dreadwing": {
        "name": "Dreadwing",
        "count": 1,
        "file": "dreadwing",
        "description": [
          "You may roll 2 dice and add them together to determine how far you move.",
          "If you roll the same result on both dice for your move, you may teleport to any space in the same Region instead."
        ]
      },
      "Rage Talon": {
        "name": "Rage Talon",
        "count": 1,
        "file": "rage_talon",
        "description": [
          "Add 2 to your Strength during battle.",
          "If you defeat another character and force them to lose a life, the character cannot use Armour to prevent the loss of life."
        ]
      }
    }
  },
  "The Nether Realm": {
    "NETHER": {
      "Aerochanter": {
        "name": "Aerochanter",
        "count": 1,
        "file": "aerochanter",
        "description": [
          "The Aerochanter summons a terrifying tempest. You must discard all of your Spells and then all characters in this Region must lose 1 life. Then discard this card."
        ]
      },
      "Fate Bound": {
        "name": "Fate Bound",
        "count": 1,
        "file": "fate_bound",
        "description": [
          "The Norns have determined the destiny of each character. All characters, no matter what Region they are in, must discard all of their fate. Then discard this card."
        ]
      },
      "Goblin Baby": {
        "name": "Goblin Baby",
        "count": 1,
        "file": "goblin_baby",
        "description": [
          "The cries of the Goblin Baby carry far and wide through all of the land. Move all Monsters in every Region to this space. Then discard this card."
        ]
      },
      "Hydrochanter": {
        "name": "Hydrochanter",
        "count": 1,
        "file": "hydrochanter",
        "description": [
          "The Hydrochanter summons a devastating deluge. You must discard all of your Followers and then all characters in this Region must lose 1 life. Then discard this card."
        ]
      },
      "Necrochanter": {
        "name": "Necrochanter",
        "count": 1,
        "file": "necrochanter",
        "description": [
          "The Necrochanter summons a caustic cloud that pervades every Region. All characters lose 1 life. Then discard this card."
        ]
      },
      "Pyrochanter": {
        "name": "Pyrochanter",
        "count": 1,
        "file": "pyrochanter",
        "description": [
          "The Pyrochanter summons a fearsome firestorm. You must discard all of your Objects and then all characters in this Region must lose 1 life. Then discard this card."
        ]
      },
      "Deathstalker": {
        "name": "Deathstalker",
        "count": 1,
        "file": "deathstalker",
        "description": [
          "You must take the Deathstalker as a Follower. If you are defeated in battle or psychic combat and lose a life, you are killed.",
          "You may discard the Deathstalker if you defeat a creature or character in battle or psychic combat."
        ]
      },
      "Nether Bane": {
        "name": "Nether Bane",
        "count": 1,
        "file": "nether_bane",
        "description": [
          "You must take the Nether Bane as a Follower. It will aid any Enemy that attacks you in battle or psychic combat by adding 4 to the Enemy's attack score. If you lose a life as a result of the attack, it will leave you and join the character to your left."
        ]
      },
      "Atlas Ogre": {
        "name": "Atlas Ogre",
        "count": 1,
        "file": "atlas_ogre",
        "description": [
          "Atlas Ogre",
          "The Ogre is vulnerable to the powers of fate. You may add 1 to your attack roll for each fate token you have. It will remain here until it is killed."
        ]
      },
      "Basilisk": {
        "name": "Basilisk",
        "count": 1,
        "file": "basilisk",
        "description": [
          "Basilisk",
          "The Basilisk rolls 2 dice for its attack roll and uses the highest result. If it rolls doubles, you are killed.",
          "It will remain here until it is killed."
        ]
      },
      "Blink": {
        "name": "Blink",
        "count": 1,
        "file": "blink",
        "description": [
          "Blink",
          "The Blink appears from the shadows and attacks before you have a chance to react. You may not roll a die for your attack roll. It will remain here until it is killed."
        ]
      },
      "Crail": {
        "name": "Crail",
        "count": 1,
        "file": "crail",
        "description": [
          "Crail",
          "You may not use any Objects when fighting the fearless Crail. It will remain here until it is killed."
        ]
      },
      "Dragon Toad": {
        "name": "Dragon Toad",
        "count": 1,
        "file": "dragon_toad",
        "description": [
          "Dragon Toad",
          "If your attack roll is lower than the Dragon's attack roll, you are turned into a Toad for 3 turns after the battle is resolved. It will remain here until it is killed."
        ]
      },
      "Flesh Golem": {
        "name": "Flesh Golem",
        "count": 1,
        "file": "flesh_golem",
        "description": [
          "Flesh Golem",
          "The Golem's Strength is equal to the number of trophy points you have (to a minimum of 1). If you kill the Golem, gain 1 Strength, but you must discard it instead of taking it as a trophy. It will remain here until it is killed."
        ]
      },
      "Mimic": {
        "name": "Mimic",
        "count": 1,
        "file": "mimic",
        "description": [
          "Mimic",
          "The Mimic always has the same total Strength as its opponent, including any bonuses. If you kill it, gain 1 Strength, but you must discard it instead of taking it as a trophy. It will remain here until it is killed."
        ]
      },
      "Mist Giant": {
        "name": "Mist Giant",
        "count": 1,
        "file": "mist_giant",
        "description": [
          "Mist Giant",
          "Before you engage the Giant in battle, roll 2 dice. You must use the lowest result for your attack roll and the Giant uses the highest result for his attack roll. He will remain here until he is killed."
        ]
      },
      "Nether Blight": {
        "name": "Nether Blight",
        "count": 1,
        "file": "nether_blight",
        "description": [
          "Nether Blight",
          "If your attack roll is lower than the Blight's attack roll, you are killed. It will remain here until it is killed."
        ]
      },
      "Poldhu": {
        "name": "Poldhu",
        "count": 1,
        "file": "poldhu",
        "description": [
          "Poldhu",
          "You may not use any Spells when fighting the ancient Poldhu. It will remain here until it is killed."
        ]
      },
      "Polymorph": {
        "name": "Polymorph",
        "count": 1,
        "file": "polymorph",
        "description": [
          "Roll 1 die to see what form the Polymorph takes:",
          "1-2) Hill Giant - Strength 10",
          "3-4) Frost Ogre - Strength 8",
          "5-6) Goblin Brute - Strength 6",
          "If you kill it, gain 1 Strength, but you must discard it instead of taking it as a trophy. It will remain here until it is killed."
        ]
      },
      "Storm Dragon": {
        "name": "Storm Dragon",
        "count": 1,
        "file": "storm_dragon",
        "description": [
          "Storm Dragon",
          "Before you engage the Dragon in battle, it makes a breath attack; if you have any Armour or Weapons you lose 1 life. It will remain here until it is killed."
        ]
      },
      "Temple Drake": {
        "name": "Temple Drake",
        "count": 1,
        "file": "temple_drake",
        "description": [
          "Temple Drake",
          "Before you engage the Temple Drake in battle, it demands a sacrifice and you must discard 1 of your Followers at random. If you have none, you must lose 1 life instead. It will remain here until it is killed."
        ]
      },
      "Wrathborn Wyvern": {
        "name": "Wrathborn Wyvern",
        "count": 1,
        "file": "wrathborn_wyvern",
        "description": [
          "Wrathborn Wyvern",
          "If the Wrathborn's attack roll is lower than its Strength, roll 1 die and add the result to its attack score. It will remain here until it is killed."
        ]
      },
      "Arcane Dragon": {
        "name": "Arcane Dragon",
        "count": 1,
        "file": "arcane_dragon",
        "description": [
          "Arcane Dragon",
          "Before you engage the Dragon in psychic combat it makes a breath attack; if you have any Spells you lose 1 life. It will remain here until it is killed."
        ]
      },
      "Boukha": {
        "name": "Boukha",
        "count": 1,
        "file": "boukha",
        "description": [
          "Boukha",
          "You may not use any Followers when fighting the insidious Boukha. It will remain here until it is killed."
        ]
      },
      "Changeling": {
        "name": "Changeling",
        "count": 1,
        "file": "changeling",
        "description": [
          "Roll 1 die to see what form the Changeling takes:",
          "1-2) Hag Demon - Craft 11",
          "3-4) Marsh Phantom - Craft 9",
          "5-6) Dire Wraith - Craft 7",
          "If you kill it, gain 1 Craft, but you must discard it instead of taking it as a trophy. It will remain here until it is killed."
        ]
      },
      "Dark Fey": {
        "name": "Dark Fey",
        "count": 1,
        "file": "dark_fey",
        "description": [
          "Dark Fey",
          "The Dark Fey rolls 2 dice for her attack roll and uses the highest result. If she rolls doubles, you are turned into a slimy little Toad for 3 turns. She will remain here until she is killed."
        ]
      },
      "Glimmer": {
        "name": "Glimmer",
        "count": 1,
        "file": "glimmer",
        "description": [
          "Glimmer",
          "The Glimmer appears in a bright flash and attacks before you have a chance to react. You may not roll a die for your attack roll. It will remain here until it is killed."
        ]
      },
      "Mist Dragon": {
        "name": "Mist Dragon",
        "count": 1,
        "file": "mist_dragon",
        "description": [
          "Mist Dragon",
          "Before you engage the Dragon in psychic combat, roll 2 dice. You must use the lowest result for your attack roll and the Dragon uses the highest result for its attack roll. It will remain here until it is killed."
        ]
      },
      "Nether Drake": {
        "name": "Nether Drake",
        "count": 1,
        "file": "nether_drake",
        "description": [
          "Nether Drake",
          "If you pay a fate to reroll your attack roll and you roll a lower result, you are killed. It will remain here until it is killed."
        ]
      },
      "Nether Golem": {
        "name": "Nether Golem",
        "count": 1,
        "file": "nether_golem",
        "description": [
          "Nether Golem",
          "The Golem's Craft is equal to the total number of fate tokens held by all characters (to a minimum of 1). If you kill it, replenish fate up to your fate value, but you must discard it instead of taking it as a trophy. It will remain here until it is killed."
        ]
      },
      "Nether Torment": {
        "name": "Nether Torment",
        "count": 1,
        "file": "nether_torment",
        "description": [
          "Nether Torment",
          "If your attack roll is lower than the Torment's attack roll, you are killed. It will remain here until it is killed."
        ]
      },
      "Nether Wyrm": {
        "name": "Nether Wyrm",
        "count": 1,
        "file": "nether_wyrm",
        "description": [
          "Nether Wyrm",
          "Before you engage the Nether Wyrm in psychic combat, it makes a breath attack; roll 1 die. If the result is equal to or lower than the number of fate tokens you have, lose 1 life. It will remain here until it is killed."
        ]
      },
      "Nightmare": {
        "name": "Nightmare",
        "count": 1,
        "file": "nightmare",
        "description": [
          "Nightmare",
          "The Nightmare always has the same total Craft as its opponent, including any bonuses. If you kill it, gain 1 Craft, but you must discard it instead of taking it as a trophy. It will remain here until it is killed."
        ]
      },
      "Sepulchre Spectre": {
        "name": "Sepulchre Spectre",
        "count": 1,
        "file": "sepulchre_spectre",
        "description": [
          "Sepulchre Spectre",
          "When revealed, move all Spirits in every Region to this space. It will remain here until it is killed."
        ]
      },
      "Titan Wraith": {
        "name": "Titan Wraith",
        "count": 1,
        "file": "titan_wraith",
        "description": [
          "Titan Wraith",
          "The Wraith is vulnerable to the powers of fate. You may add 1 to your attack roll for each fate token you have. It will remain here until it is killed."
        ]
      }
    }
  },
  "The Reaper": {
    "SPELLS": {
      "Alteration": {
        "name": "Alteration",
        "count": 1,
        "file": "alteration",
        "description": [
          "Cast when you have just drawn one or more Adventure Cards. Discard any one Adventure Card that you have just drawn and draw a replacement, which you must encounter."
        ]
      },
      "Barrier": {
        "name": "Barrier",
        "count": 1,
        "file": "barrier",
        "description": [
          "Cast at the start of your turn or when you have just completed your move. Place this card on any space in your Region not occupied by another character (not in the Inner Region). No character may move onto or through that space until the start of your next turn."
        ]
      },
      "Bladesharp": {
        "name": "Bladesharp",
        "count": 1,
        "file": "bladesharp",
        "description": [
          "Cast on one of your Weapons when you are about to engage in battle. That Weapon adds an additional 2 to your Strength until the end of the battle."
        ]
      },
      "Blessed": {
        "name": "Blessed",
        "count": 1,
        "file": "blessed",
        "description": [
          "Cast on yourself at any time. Replenish your fate up to your fate value."
        ]
      },
      "Cloak of Shadows": {
        "name": "Cloak of Shadows",
        "count": 1,
        "file": "cloak_of_shadows",
        "description": [
          "Cast as required. You may evade any creature or character until the start of your next turn."
        ]
      },
      "Displacement": {
        "name": "Displacement",
        "count": 2,
        "file": "displacement",
        "description": [
          "Cast at the start of your turn or when you have just completed your move. Remove any faceup Adventure Card from the board and move it to any space in the same Region that is not already occupied by a character."
        ]
      },
      "Dominate": {
        "name": "Dominate",
        "count": 1,
        "file": "dominate",
        "description": [
          "Cast when you are about to engage an Enemy in battle. You may enslave one Enemy you are about to encounter instead of attacking it. The enslaved Enemy becomes your Follower and adds its Strength to yours in your next battle, after which it retreats to the discard pile."
        ]
      },
      "Enchant Blade": {
        "name": "Enchant Blade",
        "count": 1,
        "file": "enchant_blade",
        "description": [
          "Cast at the start of your turn. Place this card on one of your Weapons. The Weapon is now considered a Magic Object and adds an additional 1 to your Strength during battle."
        ]
      },
      "Enrich": {
        "name": "Enrich",
        "count": 1,
        "file": "enrich",
        "description": [
          "Cast on yourself at any time. Roll 1 die and gain that much gold."
        ]
      },
      "Fireball": {
        "name": "Fireball",
        "count": 1,
        "file": "fireball",
        "description": [
          "Cast when you are about to engage in battle. Roll 1 die and add your Craft. If the total is higher than an opposing creature's Strength, it is killed. If the total is higher than an opposing character's Strength, they must lose 1 life. Otherwise the Fireball has no effect."
        ]
      },
      "Gust of Wind": {
        "name": "Gust of Wind",
        "count": 1,
        "file": "gust_of_wind",
        "description": [
          "Cast on any character at the start of their turn. That character must roll 1 die for each of their Objects. On a 1 or 2 the Object is blown 6 spaces clockwise."
        ]
      },
      "Misdirection": {
        "name": "Misdirection",
        "count": 1,
        "file": "misdirection",
        "description": [
          "Cast on another character at the start of their turn. The character takes their move as normal, except that you decide which direction they move in."
        ]
      },
      "Reflection": {
        "name": "Reflection",
        "count": 1,
        "file": "reflection",
        "description": [
          "Cast as required. Any Spell that has just been cast, including the Command Spell, is turned back onto the character who cast it. (The chosen target is unaffected by the Spell; the caster suffers its effects instead.)"
        ]
      },
      "Resurrection": {
        "name": "Resurrection",
        "count": 1,
        "file": "resurrection",
        "description": [
          "Cast after a character kills an Enemy during an attack. The attack is considered a stand-off and the Enemy remains on the space."
        ]
      },
      "Shatter": {
        "name": "Shatter",
        "count": 1,
        "file": "shatter",
        "description": [
          "Cast on any character at the start of their turn. Choose one of the character's Objects and discard it."
        ]
      },
      "Sleep": {
        "name": "Sleep",
        "count": 1,
        "file": "sleep",
        "description": [
          "Cast on any character at the start of their turn. That character must immediately end their turn."
        ]
      },
      "Slow Motion": {
        "name": "Slow Motion",
        "count": 1,
        "file": "slow_motion",
        "description": [
          "Cast on any character at the start of their turn. Their movement is reduced to 1 space per turn for their next 2 turns, including the turn in which this Spell was cast."
        ]
      },
      "Speed": {
        "name": "Speed",
        "count": 1,
        "file": "speed",
        "description": [
          "Cast on yourself after you have rolled a die for your move. Roll 1 additional die and add the results together to make your movement roll."
        ]
      },
      "Summon Bear": {
        "name": "Summon Bear",
        "count": 1,
        "file": "summon_bear",
        "description": [
          "Cast when you are about to engage in battle. The Bear fights in your place with a Strength of 3. If the Bear wins the battle, the creature is killed or the opposing character must lose 1 life. If the Bear loses, you turn immediately ends. Enemies killed may be taken as trophies."
        ]
      },
      "Summon Phoenix": {
        "name": "Summon Phoenix",
        "count": 1,
        "file": "summon_phoenix",
        "description": [
          "Cast when you are about to engage in battle. The Phoenix fights in your place with a Strength of 5. If the Phoenix wins the battle, the creature is killed or the opposing character must lose 1 life. If the Phoenix loses, your turn immediately ends. Enemies killed may be taken as trophies."
        ]
      },
      "Summon Serpent": {
        "name": "Summon Serpent",
        "count": 1,
        "file": "summon_serpent",
        "description": [
          "Cast when you are about to engage in battle. The Serpent fights in your place with a Strength of 4. If the Serpent wins the battle, the creature is killed or the opposing character must lose 1 life. If the Serpent loses, your turn immediately ends. Enemies killed may be taken as trophies."
        ]
      },
      "Summon Stormcrow": {
        "name": "Summon Stormcrow",
        "count": 1,
        "file": "summon_stormcrow",
        "description": [
          "Cast when you are about to engage in psychic combat. The Stormcrow fights in your place with a Craft of 3. If the Stormcrow wins, the creature is killed or the opposing character must lose 1 life. If the Stormcrow loses, your turn immediately ends. Enemies killed may be taken as trophies."
        ]
      },
      "Transference": {
        "name": "Transference",
        "count": 1,
        "file": "transference",
        "description": [
          "Cast on yourself instead of your normal move. Switch spaces with any other character in your Region."
        ]
      },
      "Water Walking": {
        "name": "Water Walking",
        "count": 1,
        "file": "water_walking",
        "description": [
          "Cast on yourself at the start of your turn, before you move. You may cross the Storm River as if you were using a Raft."
        ]
      },
      "Transmute": {
        "name": "Transmute",
        "count": 1,
        "file": "transmute",
        "description": [
          "Cast on any character at the start of their turn. All of the character's Weapons and Armour (except Magic Objects) are transmuted into wood and must be discarded."
        ]
      }
    },
    "ADVENTURE": {
      "Astral Conjunction": {
        "name": "Astral Conjunction",
        "count": 1,
        "file": "astral_conjunction",
        "description": [
          "The stars are aligned and magic flows strongly through the land. Each character, starting with you, may gain 1 Spell if their Craft allows. The Astral Conjunction then passes to the discard pile."
        ]
      },
      "Closed Shop": {
        "name": "Closed Shop",
        "count": 1,
        "file": "closed_shop",
        "description": [
          "Business is bad. All faceup Places on the board close up shop and pack off to the discard pile."
        ]
      },
      "Curfew": {
        "name": "Curfew",
        "count": 1,
        "file": "curfew",
        "description": [
          "The military imposes a curfew across the land. All faceup Strangers on the board move on to the discard pile."
        ]
      },
      "Earthquake": {
        "name": "Earthquake",
        "count": 1,
        "file": "earthquake",
        "description": [
          "An Earthquake shocks the land. Roll 1 die for each faceup Adventure Card in this Region. On a roll of 1, 2, or 3 the Adventure Card tumbles down to the discard pile. The Earthquake then dissipates to the discard pile."
        ]
      },
      "Fool's Gold": {
        "name": "Fool's Gold",
        "count": 1,
        "file": "fools_gold",
        "description": [
          "All of your gold is Fool's Gold and is completely worthless. Discard all of your gold immediately, along with this card."
        ]
      },
      "Horse Thief": {
        "name": "Horse Thief",
        "count": 1,
        "file": "horse_thief",
        "description": [
          "A Horse Thief is roaming the land. If you have a Horse and Cart, Mule, Riding Horse, or Warhorse, they must be discarded, along with this card. You must leave any surplus Objects of your choice in the space you are in."
        ]
      },
      "Patrol": {
        "name": "Patrol",
        "count": 1,
        "file": "patrol",
        "description": [
          "A Patrol of soldiers is trying to maintain law and order in this area. They immediately move you back to your start space and then march off to the discard pile."
        ]
      },
      "Prophesy": {
        "name": "Prophesy",
        "count": 1,
        "file": "prophesy",
        "description": [
          "For 2 rounds (including this one), whenever any character encounters a space with instructions to draw 1 or more Adventure Cards, they must draw 1 more card than required. After 2 rounds, the Prophesy is fulfilled and transcends to the discard pile."
        ]
      },
      "The Boatman": {
        "name": "The Boatman",
        "count": 1,
        "file": "the_boatman",
        "description": [
          "The Boatman offers to ferry you across the Storm River on your next turn if you pay 1 gold. This works exactly like a Raft. The Boatman then drifts off to the discard pile."
        ]
      },
      "The Gathering": {
        "name": "The Gathering",
        "count": 1,
        "file": "the_gathering",
        "description": [
          "All faceup Spirits in this Region are moved to this space. The Gathering then fades away to the discard pile."
        ]
      },
      "Werewolf": {
        "name": "Werewolf",
        "count": 1,
        "file": "werewolf",
        "description": [
          "One of your Followers is a Werewolf. Roll 1 die for each Follower; the one with the highest roll is the beast (reroll any ties). He immediately attacks you with a Strength of 3. Whether or not you defeat the Werewolf, your Follower is then discarded along with this card."
        ]
      },
      "Whirlwind": {
        "name": "Whirlwind",
        "count": 1,
        "file": "whirlwind",
        "description": [
          "A Whirlwind whips up in this space. Roll 1 die for each Object you are carrying:",
          "1-3) The Object blows to a space one die roll clockwise around the board",
          "4-6) You hold on to the Object",
          "The Whirlwind whisks off to the discard pile."
        ]
      },
      "Cerberus": {
        "name": "Cerberus",
        "count": 1,
        "file": "cerberus",
        "description": [
          "Cerberus",
          "Place Cerberus on the Portal of Power. Players may not cross to the Plain of Peril while Cerberus is on the Portal of Power. Cerberus cannot be evaded. You must choose whether to attack Cerberus using Strength or Craft."
        ]
      },
      "Lord of the Pit": {
        "name": "Lord of the Pit",
        "count": 1,
        "file": "lord_of_the_pit",
        "description": [
          "Lord of the Pit",
          "The ruler of the Pit Fiends has emerged from the Inner Region and claimed this area. If you kill the Lord of the Pit, you may teleport to the Plain of Peril. You must choose whether to attack the Lord of the Pit using Strength or Craft."
        ]
      },
      "Cave Troll": {
        "name": "Cave Troll",
        "count": 1,
        "file": "cave_troll",
        "description": [
          "Cave Troll",
          "A horrible Cave Troll is rampaging through this area. If you defeat the Cave Troll, roll 1 die. If you roll a 1 or 2, the foul thing regenerates and the attack counts as a stand-off. It will remain here until it is killed."
        ]
      },
      "Chimera": {
        "name": "Chimera",
        "count": 1,
        "file": "chimera",
        "description": [
          "Chimera",
          "A terrible Chimera is marauding around this area. It will remain here until it is killed."
        ]
      },
      "Ekor": {
        "name": "Ekor",
        "count": 1,
        "file": "ekor",
        "description": [
          "Ekor",
          "This cowardly creature will flee from anyone stronger than him. If your Strength is higher than 2, the Ekor will flee 1 space clockwise instead of fighting you. Otherwise it will remain here until killed."
        ]
      },
      "Gargoyle": {
        "name": "Gargoyle",
        "count": 1,
        "file": "gargoyle",
        "description": [
          "Gargoyle",
          "A Gargoyle is preying on everyone in this area. It will remain here until it is killed."
        ]
      },
      "Giant Spider": {
        "name": "Giant Spider",
        "count": 1,
        "file": "giant_spider",
        "description": [
          "Giant Spider",
          "A horrific arachnid is terrorising the area. It will remain here until it is killed."
        ]
      },
      "Goblin Trapsmith": {
        "name": "Goblin Trapsmith",
        "count": 1,
        "file": "goblin_trapsmith",
        "description": [
          "Goblin Trapsmith",
          "A Goblin Trapsmith uses his net to entangle his victims. You must roll 1 extra die for your attack roll and use the lowest result. It will remain here until it is killed."
        ]
      },
      "Hippogriff": {
        "name": "Hippogriff",
        "count": 1,
        "file": "hippogriff",
        "description": [
          "Hippogriff",
          "A hungry Hippogriff is hunting in this area. It will remain here until it is killed."
        ]
      },
      "Hydra": {
        "name": "Hydra",
        "count": 1,
        "file": "hydra",
        "description": [
          "Hydra",
          "A voracious Hydra is devouring everything in this area. If you defeat the Hydra, roll 1 die. If you roll a 1 or 2, it regenerates and the attack counts as a stand-off. It will remain here until it is killed."
        ]
      },
      "Mammoth": {
        "name": "Mammoth",
        "count": 1,
        "file": "mammoth",
        "description": [
          "Mammoth",
          "A giant Mammoth is defending its territory. It will remain here until it is killed."
        ]
      },
      "Miser Dragon": {
        "name": "Miser Dragon",
        "count": 1,
        "file": "miser_dragon",
        "description": [
          "Miser Dragon",
          "You venture inside the den of a Miser Dragon and awaken the beast! If you kill the Dragon, you loot its hoard; roll 1 die and gain that much gold. The Dragon will remain here until it is killed."
        ]
      },
      "Pack of Wolves": {
        "name": "Pack of Wolves",
        "count": 1,
        "file": "pack_of_wolves",
        "description": [
          "Pack of Wolves",
          "Roll 1 extra die for the Wolves' attack roll and use the highest result. It will remain here until it is killed."
        ]
      },
      "Raging Bull": {
        "name": "Raging Bull",
        "count": 1,
        "file": "raging_bull",
        "description": [
          "Raging Bull",
          "A mad Bull is loose in this area. It will remain here until it is killed."
        ]
      },
      "Sabertooth Tiger": {
        "name": "Sabertooth Tiger",
        "count": 1,
        "file": "sabertooth_tiger",
        "description": [
          "Sabertooth Tiger",
          "A mighty feline hunts in this area. It will remain here until it is killed."
        ]
      },
      "Stone Golem": {
        "name": "Stone Golem",
        "count": 1,
        "file": "stone_golem",
        "description": [
          "Stone Golem",
          "You may not use any Weapon during battle unless it is a Magic Object. It will remain here until it is killed."
        ]
      },
      "Trapper": {
        "name": "Trapper",
        "count": 1,
        "file": "trapper",
        "description": [
          "Trapper",
          "Roll 2 dice. If the result is equal to or less than your Craft, you may evade the Trapper. If it is higher, you must fight him, but you may not roll a die for your attack roll. He will remain here until he is killed."
        ]
      },
      "Banshee": {
        "name": "Banshee",
        "count": 1,
        "file": "banshee",
        "description": [
          "Banshee",
          "A Banshee is stalking this area. It will remain here until it is killed."
        ]
      },
      "Black Unicorn": {
        "name": "Black Unicorn",
        "count": 1,
        "file": "black_unicorn",
        "description": [
          "Black Unicorn",
          "If you defeat the Black Unicorn in psychic combat, you may keep it as a Follower instead of a trophy. While the Black Unicorn is your Follower, add 1 to your Strength and 1 to your Craft. It will remain here until it is defeated."
        ]
      },
      "Crone": {
        "name": "Crone",
        "count": 1,
        "file": "crone",
        "description": [
          "Crone",
          "A wicked Crone bewitches this area. If you are defeated in psychic combat, you do not lose 1 life. Instead, you are turned into a slimy little Toad for 3 turns. She will remain here until she is killed."
        ]
      },
      "Crypt Keeper": {
        "name": "Crypt Keeper",
        "count": 1,
        "file": "crypt_keeper",
        "description": [
          "Crypt Keeper",
          "If you kill the Crypt Keeper you may search his tomb for treasure. Draw the top 5 Adventure Cards and take 1 Object of your choice. Discard the remaining cards. It will remain here until it is killed."
        ]
      },
      "Haunt": {
        "name": "Haunt",
        "count": 1,
        "file": "haunt",
        "description": [
          "Haunt",
          "If you do not defeat the Haunt, you must take it as a Follower. While the Haunt is your Follower, your attack rolls are reduced by 1 (to a minimum of 1). Discard the Haunt if you visit the Chapel or the Graveyard."
        ]
      },
      "Lesser Demon": {
        "name": "Lesser Demon",
        "count": 1,
        "file": "lesser_demon",
        "description": [
          "Lesser Demon",
          "A minion of evil has been sent to prowl in this area. It will remain here until it is killed."
        ]
      },
      "Mummy": {
        "name": "Mummy",
        "count": 1,
        "file": "mummy",
        "description": [
          "Mummy",
          "A rotting Mummy roams this area in search of his tomb. If you are defeated and lose 1 life, your wounds become infected and you must lose 1 additional life. It will remain here until it is killed."
        ]
      },
      "Nightmare": {
        "name": "Nightmare",
        "count": 1,
        "file": "nightmare",
        "description": [
          "Nightmare",
          "The Nightmare always has the same total Craft as its opponent, including any bonuses. If you kill it, gain 1 Craft, but you must discard it instead of taking it as a trophy. It will remain here until it is killed."
        ]
      },
      "Storm Caller": {
        "name": "Storm Caller",
        "count": 1,
        "file": "storm_caller",
        "description": [
          "Storm Caller",
          "If you have any Armour you lose 1 life before fighting the Storm Caller. He will remain here until he is killed."
        ]
      },
      "Succubus": {
        "name": "Succubus",
        "count": 1,
        "file": "succubus",
        "description": [
          "Succubus",
          "If the Succubus defeats you in psychic combat, in addition to losing 1 life, you must also lose 1 Craft (if able). Then place 1 Craft counter on this card. Add 1 to the Succubus's Craft for each counter on this card. It will remain here until it is killed."
        ]
      },
      "Wight": {
        "name": "Wight",
        "count": 1,
        "file": "wight",
        "description": [
          "Wight",
          "You enter an ancient barrow and disturb this creature's eternal rest. It will remain here until it is killed."
        ]
      },
      "Demigod": {
        "name": "Demigod",
        "count": 1,
        "file": "demigod",
        "description": [
          "A Demigod grants you the Spell of your choice, if your Craft allows. Look through the Spell deck and take one of your choice. Then mix together the Spell deck and Spell discard pile and shuffle them. The Demigod then vanishes to the discard pile."
        ]
      },
      "Dryad": {
        "name": "Dryad",
        "count": 1,
        "file": "dryad",
        "description": [
          "A Dryad attempts to lure you through a magic portal. Roll 2 dice. If the total is equal to or less than your Craft, discard the Dryad and gain 1 Craft. If it is higher, you are teleported to the Forest."
        ]
      },
      "Leper": {
        "name": "Leper",
        "count": 1,
        "file": "leper",
        "description": [
          "Characters that land on the Leper or are on a space to which the Leper is moved must roll 1 die. On a roll of 1 or 2 they must lose either a Follower or 1 life. The Leper then shambles on. Roll 1 die and move him that many spaces clockwise."
        ]
      },
      "Magician": {
        "name": "Magician",
        "count": 1,
        "file": "magician",
        "description": [
          "You may change any or all Strength points you have (except those derived from Objects or Followers) into Craft points, or vice versa. Whether or not you use his power, the Magician then vanishes to the discard pile in a puff of smoke."
        ]
      },
      "Outlaw": {
        "name": "Outlaw",
        "count": 1,
        "file": "outlaw",
        "description": [
          "This Outlaw steals from the rich and gives to the poor. If you have any gold, he takes 1 gold. If you have no gold, he gives you 1 gold. He then escapes to the discard pile."
        ]
      },
      "Pathfinder": {
        "name": "Pathfinder",
        "count": 1,
        "file": "pathfinder",
        "description": [
          "The Pathfinder will remain here for the rest of the game. On your next turn, instead of your normal move, you may teleport to any other space in this Region."
        ]
      },
      "Colossus": {
        "name": "Colossus",
        "count": 1,
        "file": "colossus",
        "description": [
          "Add 2 to your Strength during battle.",
          "At the start of your turn, you may crush any Place cards in your space into the discard pile."
        ]
      },
      "Familiar": {
        "name": "Familiar",
        "count": 1,
        "file": "familiar",
        "description": [
          "The Familiar will become your Follower if you lose 1 life.",
          "Add 2 to your Craft.",
          "Whenever you draw a Spell that you do not wish to keep, you may discard it and draw another one to replace it, which you must keep."
        ]
      },
      "Fiend Slayer": {
        "name": "Fiend Slayer",
        "count": 1,
        "file": "fiend_slayer",
        "description": [
          "If you encounter a space with instructions to draw one or more Adventure Cards, you must draw one more card than required.",
          "The Fiend Slayer departs to the discard pile if you lose a battle or psychic combat."
        ]
      },
      "Genie": {
        "name": "Genie",
        "count": 1,
        "file": "genie",
        "description": [
          "The Genie has 3 Spells (take them from the Spell deck, look at them, and place on this card). The Genie will cast the Spells whenever you wish (treat the Spells as though you had cast them). The Genie spirits off to the discard pile when the last Spell is cast."
        ]
      },
      "Homunculus": {
        "name": "Homunculus",
        "count": 1,
        "file": "homunculus",
        "description": [
          "No good character may have the Homunculus.",
          "Add 1 to your Strength and 1 to your Craft."
        ]
      },
      "Horse and Cart": {
        "name": "Horse and Cart",
        "count": 2,
        "file": "horse_and_cart",
        "description": [
          "The Horse and Cart can carry an extra 8 Objects for you. If you lose the Horse and Cart, you must leave any surplus Objects of your choice in the space you are in."
        ]
      },
      "Jester": {
        "name": "Jester",
        "count": 1,
        "file": "jester",
        "description": [
          "You must take the Jester as a Follower. Your attack rolls are reduced by 1 (to a minimum of 1). You may discard the Jester if you visit the Castle or Tavern. If you win an attack against another character, you may force them to take the Jester instead of your normal reward."
        ]
      },
      "Riding Horse": {
        "name": "Riding Horse",
        "count": 2,
        "file": "riding_horse",
        "description": [
          "You may roll 2 dice and add them together to determine how far you can move."
        ]
      },
      "St. Josephine": {
        "name": "St. Josephine",
        "count": 1,
        "file": "st_josephine",
        "description": [
          "You may heal up to your life value at any time. St. Josephine then transcends to the discard pile."
        ]
      },
      "Warhorse": {
        "name": "Warhorse",
        "count": 1,
        "file": "warhorse",
        "description": [
          "Add your Craft value to your Strength during battle.",
          "If you lose a life during any battle or psychic combat, you must discard the Warhorse."
        ]
      },
      "Druid Staff": {
        "name": "Druid Staff",
        "count": 1,
        "file": "druid_staff",
        "description": [
          "You may change your alignment at will. However, you may only have one alignment at any given time."
        ]
      },
      "Elixir of Destiny": {
        "name": "Elixir of Destiny",
        "count": 1,
        "file": "elixir_of_destiny",
        "description": [
          "You may drink the Elixir of Destiny at any time. When you do, roll 1 die:",
          "1) Poison; lose 1 life",
          "2-5) Gain 1 fate",
          "6) Gain 2 fate",
          "The empty vessel is then placed on the discard pile."
        ]
      },
      "Elixir of Might": {
        "name": "Elixir of Might",
        "count": 1,
        "file": "elixir_of_might",
        "description": [
          "You may drink the Elixir of Might at any time.",
          "When you do, roll 1 die:",
          "1) Poison; lose 1 life",
          "2-5) Gain 1 Strength",
          "6) Gain 2 Strength",
          "The empty vessel is then placed on the discard pile."
        ]
      },
      "Elixir of Wisdom": {
        "name": "Elixir of Wisdom",
        "count": 1,
        "file": "elixir_of_wisdom",
        "description": [
          "You may drink the Elixir of Wisdom at any time.",
          "When you do, roll 1 die:",
          "1) Poison; lose 1 life",
          "2-5) Gain 1 Craft",
          "6) Gain 2 Craft",
          "The empty vessel is then placed on the discard pile."
        ]
      },
      "Flying Carpet": {
        "name": "Flying Carpet",
        "count": 1,
        "file": "flying_carpet",
        "description": [
          "If you roll a 6 for your move, you may teleport to any other space in this Region instead of moving normally."
        ]
      },
      "Hearth Rune": {
        "name": "Hearth Rune",
        "count": 1,
        "file": "hearth_rune",
        "description": [
          "Instead of your normal move, you may teleport to your start space. You must then ditch the Hearth Rune on the space that you moved from."
        ]
      },
      "Orb of Destiny": {
        "name": "Orb of Destiny",
        "count": 1,
        "file": "orb_of_destiny",
        "description": [
          "When you pay a fate to reroll a die, you may roll 2 dice and choose which result to use. If you roll doubles, discard all of your fate immediately along with this card."
        ]
      },
      "Psychic Crystal": {
        "name": "Psychic Crystal",
        "count": 1,
        "file": "psychic_crystal",
        "description": [
          "Add 1 to your Craft during psychic combat."
        ]
      },
      "Rod of Ruin": {
        "name": "Rod of Ruin",
        "count": 1,
        "file": "rod_of_ruin",
        "description": [
          "This powerful artifact causes any character of your choice to lose 2 points of Strength or Craft, or 1 of each. (Neither may be reduced below their Strength or Craft values). The Rod is then discarded."
        ]
      },
      "Staff of Mastery": {
        "name": "Staff of Mastery",
        "count": 1,
        "file": "staff_of_mastery",
        "description": [
          "No good character may have the Staff of Mastery.",
          "You may enslave one Enemy you encounter instead of attacking it. The Enemy adds its Strength to yours for one battle (you choose when), and then the Staff of Mastery and the Enemy disintegrate to the discard pile."
        ]
      },
      "Talisman": {
        "name": "Talisman",
        "count": 1,
        "file": "talisman",
        "description": [
          "You may only enter the Valley of Fire if you have one of the fabled Talismans."
        ]
      },
      "Bane Sword": {
        "name": "Bane Sword",
        "count": 1,
        "file": "bane_sword",
        "description": [
          "Add 2 to your Craft during psychic combat against Spirits."
        ]
      },
      "Fate Stealer": {
        "name": "Fate Stealer",
        "count": 1,
        "file": "fate_stealer",
        "description": [
          "Add 1 to your Strength during battle.",
          "When you use the Fate Stealer in battle to defeat an Enemy or another character and then cause them to lose a life, you gain 1 fate."
        ]
      },
      "Skull Wand": {
        "name": "Skull Wand",
        "count": 1,
        "file": "skull_wand",
        "description": [
          "No good character may have the Skull Wand.",
          "Add 1 to your Strength in battle and 2 to your Craft in psychic combat."
        ]
      },
      "Sword of Light": {
        "name": "Sword of Light",
        "count": 1,
        "file": "sword_of_light",
        "description": [
          "No evil character may have the Sword of Light.",
          "Add 2 to your Strength in battle and 1 to your Craft in psychic combat."
        ]
      },
      "Casket": {
        "name": "Casket",
        "count": 1,
        "file": "casket",
        "description": [
          "You may roll 1 die to see what the Casket contains:",
          " 1-2) Poisoned needle; lose 1 life",
          "3) Gas trap; lose your next turn",
          "4) Gain 2 gold",
          "5) Gain 1 Spell",
          "6) Gain a Talisman",
          "The Casket then crumbles to the discard pile."
        ]
      },
      "Concealed Pouch": {
        "name": "Concealed Pouch",
        "count": 1,
        "file": "concealed_pouch",
        "description": [
          "You may place 1 Object on this card. Neither the Pouch nor the Object on this card counts towards your Object limit. If you lose an attack, the victor may not take either the Pouch or the Object stored inside. Similarly, neither may be taken by any character's special ability or Spell."
        ]
      },
      "Golden Statue": {
        "name": "Golden Statue",
        "count": 1,
        "file": "golden_statue",
        "description": [
          "You have uncovered a valuable relic! The Golden Statue may be discarded at the City for 2 gold or at the Castle for 4 gold.",
          "If you lose an attack against another character, they must take the Golden Statue instead of their normal reward."
        ]
      },
      "Map": {
        "name": "Map",
        "count": 1,
        "file": "map",
        "description": [
          "After rolling the dice in the Mines, subtract 2 from the total."
        ]
      },
      "Shovel": {
        "name": "Shovel",
        "count": 1,
        "file": "shovel",
        "description": [
          "After rolling the dice in the Crypt, subtract 2 from the total."
        ]
      },
      "Two Bags of Gold": {
        "name": "Two Bags of Gold",
        "count": 3,
        "file": "two_bags_of_gold",
        "description": [
          "Exchange immediately for 2 gold and then place this card on the discard pile."
        ]
      },
      "Armour": {
        "name": "Armour",
        "count": 1,
        "file": "armour",
        "description": [
          "If you are defeated in battle and lose a life, roll 1 die. If you roll a 4, 5 or 6, the Armour protected you and you did not lose that life, though you still lost the battle."
        ]
      },
      "Axe": {
        "name": "Axe",
        "count": 1,
        "file": "axe",
        "description": [
          "Add 1 to your Strength during battle.",
          "You may build a Raft when you are in the Woods or the Forest."
        ]
      },
      "Academy": {
        "name": "Academy",
        "count": 1,
        "file": "academy",
        "description": [
          "The Academy will remain here for the rest of the game. You may buy training from expert weapon masters or philosophers. For every 3 gold you pay, you must miss 1 turn, but gain 1 point of Strength or Craft."
        ]
      },
      "Arena": {
        "name": "Arena",
        "count": 1,
        "file": "arena",
        "description": [
          "You may summon 1 character in this Region to fight. Place the character on this space and attack them as if you had encountered them (by battle, or by psychic combat if you are permitted). Once the Arena has been used, it crumbles to the discard pile."
        ]
      },
      "Carnival": {
        "name": "Carnival",
        "count": 1,
        "file": "carnival",
        "description": [
          "Roll 1 die and use the same results as at the Tavern, except that the Boatman result allows you to cross the Storm River as if you were using a Raft. Then the Carnival travels on. Roll a die and move the Carnival that many spaces clockwise around the board."
        ]
      },
      "Idol": {
        "name": "Idol",
        "count": 1,
        "file": "idol",
        "description": [
          "The Idol will remain here for the rest of the game. Roll 2 dice and pray here with the same results as at the Temple. If you are enslaved, remain on this space until you roll a 4, 5, or a 6 for your move."
        ]
      },
      "Pool of Fortune": {
        "name": "Pool of Fortune",
        "count": 1,
        "file": "pool_of_fortune",
        "description": [
          "Place a total of 4 fate here when revealed. You may bathe in the Pool once per visit and take 1 fate from the Pool. When all 4 have been taken, the Pool of Fortune drains away to the discard pile."
        ]
      },
      "Tomb": {
        "name": "Tomb",
        "count": 1,
        "file": "tomb",
        "description": [
          "The tomb will remain here for the rest of the game. Roll 1 die:",
          "1) Attacked by a Demon - Craft 10",
          "2) Attacked by a Wight - Craft 4",
          "3) Attacked by a Shadow - Craft 2",
          "4) The Tomb is empty",
          "5) Gain 3 gold",
          "6) Gain a Talisman"
        ]
      },
      "Wheel of Fate": {
        "name": "Wheel of Fate",
        "count": 1,
        "file": "wheel_of_fate",
        "description": [
          "The Wheel of Fate will remain here for the rest of the game. Roll 1 die to spin the Wheel of Fate:",
          "1) Lose all of your fate",
          "2-3) Lose 1 fate",
          "4-5) Gain 1 fate",
          "6) Replenish fate up to your fate value"
        ]
      }
    },
    "WARLOCK": {
      "Deliver Five Points of Strength Trophies": {
        "name": "Deliver Five Points of Strength Trophies",
        "count": 1,
        "description": [
          "\"You understand what the Talisman is for, but do you know from whence it came? Fire and blood forged it. Fire and blood are its mother and father. You shall walk through the fire in which it dwells, but first you must bathe yourself in blood, the blood that is its source.\""
        ]
      },
      "Deliver Five Points of Craft Trophies": {
        "name": "Deliver Five Points of Craft Trophies",
        "count": 1,
        "description": [
          "\"This world is filled with wonders far beyond what you or I can possibly imagine. You want this Talisman? So be it, but in exchange you must search the land for the mysterious and unknown. Find these wonders and bring them back to me.\""
        ]
      },
      "Deliver One Fate": {
        "name": "Deliver One Fate",
        "count": 1,
        "description": [
          "\"Consider carefully what you ask, for it has a terrible price. Anything you would offer - gold, service, ritual, even blood sacrifice - would only serve as a mask to hide the true cost. But I shall not hide this cost from you. You must give me a piece of your spirit, your soul, if you will. No more, no less. Give that to me, and the Talisman is yours.\""
        ]
      },
      "Deliver Two Gold": {
        "name": "Deliver Two Gold",
        "count": 1,
        "description": [
          "\"You have need of a Talisman, and I possess such an item. I suppose you hope to leave here with it? You may. And in exchange, I ask only for a trilling of gold, for it amuses me that you should have this Talisman.\""
        ]
      },
      "Deliver Three Gold": {
        "name": "Deliver Three Gold",
        "count": 1,
        "description": [
          "\"You would obtain this Talisman from me, but at what price shall I set your heart's fondest desire? You must give that which my heart desires most. You must give me that which shines. You must give me precious gold.\""
        ]
      },
      "Deliver One Spell": {
        "name": "Deliver One Spell",
        "count": 1,
        "description": [
          "\"Save your trinkets and your windy promises of service. My true wealth is knowledge, and that is the only coin I will accept. Share your knowledge with me and this Talisman shall be yours.\""
        ]
      },
      "Deliver One Magic Object": {
        "name": "Deliver One Magic Object",
        "count": 1,
        "description": [
          "\"A Talisman cannot be crafted from nothing. It is more than a shape, more than a symbol. A silversmith could not make what you need. I can, and that is why you have come to me. But I will require raw materials to do this, materials that you must provide for me.\""
        ]
      },
      "Deliver One Follower": {
        "name": "Deliver One Follower",
        "count": 1,
        "description": [
          "\"The cost must be paid. See, I have it here, the very bauble you seek - but it is worthless, inert, a trinket fit only for scrap. If you would have your Talisman, then a price must be paid in blood. You know what you must do.\""
        ]
      },
      "Take One Life From Another Character": {
        "name": "Take One Life From Another Character",
        "count": 1,
        "description": [
          "\"Seek the one with the mark of the Talisman - a mark that only you will see. When you find them, vanquish them in combat. Their blood shall be your key. Their suffering shall be your salvation.\""
        ]
      },
      "Kill One Enemy": {
        "name": "Kill One Enemy",
        "count": 1,
        "description": [
          "\"Hah! Do you believe that you alone seek my aid? No. Many desire to walk the path you walk, and many seek my assistance. You must prove your worthiness over all others. You claim to be a hero. Prove it.\""
        ]
      },
      "Travel to the City": {
        "name": "Travel to the City",
        "count": 1,
        "description": [
          "\"Take this box. You must not let it out of your sight until the task is complete. Do not open the box and ask no questions as to what it contains. Do exactly as I tell you. Bring the box to the city and seek the fountain in the Square of Kings. Place it in the fountain at midnight, turn, and leave that place immediately. The following dawn, you shall find your Talisman.\""
        ]
      }
    }
  },
  "The Sacred Pool": {
    "SPELLS": {
      "Cheat Fate": {
        "name": "Cheat Fate",
        "count": 1,
        "file": "cheat_fate",
        "description": [
          "Cast on any character with at least 1 fate at the start of their turn. The character must lose all of their fate, and your character gains an equal number of fate."
        ]
      },
      "Feeble Mind": {
        "name": "Feeble Mind",
        "count": 1,
        "file": "feeble_mind",
        "description": [
          "Cast at any time on a character or creature. The target's Craft is lowered by 3 until the end of the turn.",
          "A character's Craft may not be lowered below their Craft value."
        ]
      },
      "Generosity": {
        "name": "Generosity",
        "count": 1,
        "file": "generosity",
        "description": [
          "Cast on another character at the start of their turn. The character must give you all of their gold."
        ]
      },
      "Invoke Favour": {
        "name": "Invoke Favour",
        "count": 2,
        "file": "invoke_favour",
        "description": [
          "Cast on any character at the start of their turn. The character must roll 2 dice to pray with the same results as at the Temple.",
          "If they are enslaved, they must remain on the same space until they roll a 4, 5, or a 6 for their move."
        ]
      },
      "Life Tap": {
        "name": "Life Tap",
        "count": 1,
        "file": "life_tap",
        "description": [
          "Cast on another character at the start of their turn. The character must lose 1 life, and your character gains 1 life."
        ]
      },
      "Mini-Vortex": {
        "name": "Mini-Vortex",
        "count": 1,
        "file": "mini_vortex",
        "description": [
          "Cast on any space at any time. All characters in that space must discard all of their Spells, and any Spells cast on the space are discarded."
        ]
      },
      "Misfortune": {
        "name": "Misfortune",
        "count": 2,
        "file": "misfortune",
        "description": [
          "Cast on any character who is about to roll a die. That die automatically rolls a \"1\" result and cannot be rerolled."
        ]
      },
      "Retribution": {
        "name": "Retribution",
        "count": 1,
        "file": "retribution",
        "description": [
          "Cast after you have been defeated or had a stand-off in battle or psychic combat. Ignore the result and immediately attack again. Any effects, special abilities, Objects, or Spells used in the first attack remain in effect for the second attack. You must accept the result of the second attack."
        ]
      },
      "Reverence": {
        "name": "Reverence",
        "count": 1,
        "file": "reverence",
        "description": [
          "Cast on any character who is about to pray. The character may choose which result to use instead of rolling."
        ]
      },
      "Stasis": {
        "name": "Stasis",
        "count": 2,
        "file": "stasis",
        "description": [
          "Cast on any character after they draw an Adventure Card but before they encounter it. Place the Adventure Card faceup in front of you, then the character must draw another Adventure Card as a replacement. You must place the faceup Adventure Card on top of its deck at the start of your next turn."
        ]
      },
      "Temporary Change": {
        "name": "Temporary Change",
        "count": 2,
        "file": "temporary_change",
        "description": [
          "Cast on any character at any time. The character changes to the alignment of your choice for 2 rounds (including this turn)."
        ]
      },
      "Vindication": {
        "name": "Vindication",
        "count": 1,
        "file": "vindication",
        "description": [
          "Cast on any character at the start of their turn. The character must roll 1 die to pray:",
          "1) You are killed",
          "2) Lose 2 lives",
          "3) Lose all of your fate",
          "4) Ignored",
          "5) Heal up to your life value",
          "6) Replenish fate up to your fate value"
        ]
      },
      "Remnant of the Other Side": {
        "name": "Remnant of the Other Side",
        "count": 1,
        "file": "remnant_of_the_other_side",
        "description": [
          "Cast at the start of your turn. You may take one Soulbound card from any space on the board."
        ]
      },
      "Shape Mist": {
        "name": "Shape Mist",
        "count": 1,
        "file": "shape_mist",
        "description": [
          "Cast on a space in your Region where a character has just ended their move. Place a Breach Terrain Card on that space."
        ]
      },
      "Spectral Summon": {
        "name": "Spectral Summon",
        "count": 1,
        "file": "spectral_summon",
        "description": [
          "Cast on a space at the start of your turn. Move all Ghost characters and faceup Spirits on the board to that space."
        ]
      }
    },
    "ADVENTURE": {
      "Angel of Mercy": {
        "name": "Angel of Mercy",
        "count": 1,
        "file": "angel_of_mercy",
        "description": [
          "You may heal life up to your life value. The Angel of Mercy then ascends to the discard pile."
        ]
      },
      "Avatar of Justice": {
        "name": "Avatar of Justice",
        "count": 1,
        "file": "avatar_of_justice",
        "description": [
          "If you are of neutral alignment, gain 1 Strength. If you are good or evil, she instead converts you to neutral.",
          "She then departs to the discard pile."
        ]
      },
      "Discordant Dirge": {
        "name": "Discordant Dirge",
        "count": 1,
        "file": "discordant_dirge",
        "description": [
          "Take all Enemies in the discard pile, shuffle them, and place them back on top of the Adventure deck. The Dirge then fades to the discard pile."
        ]
      },
      "Equinox": {
        "name": "Equinox",
        "count": 1,
        "file": "equinox",
        "description": [
          "All characters except those of neutral alignment must miss one turn. The Equinox then passes to the discard pile."
        ]
      },
      "Fallen Angel": {
        "name": "Fallen Angel",
        "count": 1,
        "file": "fallen_angel",
        "description": [
          "You must discard all of your fate. If you have none, you lose 2 lives instead. The Fallen Angel then descends to the discard pile."
        ]
      },
      "Fortune's Fool": {
        "name": "Fortune's Fool",
        "count": 1,
        "file": "fortunes_fool",
        "description": [
          "For 2 rounds (including this turn), characters cannot replenish fate, gain fate, or pay fate to reroll dice. Then discard this card."
        ]
      },
      "Glorious Hymn": {
        "name": "Glorious Hymn",
        "count": 1,
        "file": "glorious_hymn",
        "description": [
          "A heavenly song fills the land. All characters except those of good alignment must miss one turn. The Hymn then fades to the discard pile."
        ]
      },
      "Hate Monger": {
        "name": "Hate Monger",
        "count": 1,
        "file": "hate_monger",
        "description": [
          "Roll 1 die for each of your Followers. The one with the highest roll (reroll any ties) immediately attacks you with a Craft of 3. Whether or not you win the psychic combat, your Follower is then discarded along with this card."
        ]
      },
      "Portent": {
        "name": "Portent",
        "count": 1,
        "file": "portent",
        "description": [
          "All characters, no matter what Region they are in, may accept a Warlock Quest. The Portent then vanishes to the discard pile."
        ]
      },
      "Rumour of Riches": {
        "name": "Rumour of Riches",
        "count": 2,
        "file": "rumour_of_riches_sacred_pool",
        "description": [
          "Roll 1 die and place that much gold on this card when revealed. Whenever a character in this Region rolls a 1 for their move, they may take 1 gold from this card. The Rumour passes to the discard pile when all of the gold has been taken from this card."
        ]
      },
      "Spiteful Imp": {
        "name": "Spiteful Imp",
        "count": 1,
        "file": "spiteful_imp",
        "description": [
          "Choose another character in any Region and teleport to that character's space. You must then encounter that character; you cannot choose to encounter the space instead. The Imp then teleports himself off to the discard pile."
        ]
      },
      "Ivory Sentinel": {
        "name": "Ivory Sentinel",
        "count": 1,
        "file": "ivory_sentinel",
        "description": [
          "Ivory Sentinel",
          "The Sentinel cannot be evaded. Any evil or neutral character who enters this space during their move must end their movement and encounter this space. It will remain here until it is killed."
        ]
      },
      "Ebony Sentinel": {
        "name": "Ebony Sentinel",
        "count": 1,
        "file": "ebony_sentinel",
        "description": [
          "Ebony Sentinel",
          "The Sentinel cannot be evaded. Any good or neutral character who enters this space during their move must end their movement and encounter this space. It will remain here until it is killed."
        ]
      },
      "Deathstalker": {
        "name": "Deathstalker",
        "count": 1,
        "file": "deathstalker",
        "description": [
          "You must take the Deathstalker as a Follower. If you are defeated in battle or psychic combat and lose a life, you are killed.",
          "You may discard the Deathstalker if you defeat a creature or character in battle or psychic combat."
        ]
      },
      "False Prophet": {
        "name": "False Prophet",
        "count": 1,
        "file": "false_prophet",
        "description": [
          "You must take the False Prophet as a Follower. You cannot pay fate to reroll dice. You may discard him after you visit the Enchantress in the City."
        ]
      },
      "Firemane": {
        "name": "Firemane",
        "count": 1,
        "file": "firemane",
        "description": [
          "Firemane",
          "If you defeat the Firemane in battle, you may take a Riding Horse from the Stables deck instead of keeping Firemane as a trophy. It will remain here until it is defeated."
        ]
      },
      "Infernal Legion": {
        "name": "Infernal Legion",
        "count": 1,
        "file": "infernal_legion",
        "description": [
          "Infernal Legion",
          "Evil characters may automatically evade the Legion instead of attacking it. The Legion cannot be evaded by good characters.",
          "It will remain here until it is killed."
        ]
      },
      "Pit Fiend": {
        "name": "Pit Fiend",
        "count": 1,
        "file": "pit_fiend_sacred_pool",
        "description": [
          "Pit Fiend",
          "A Pit Fiend has emerged from the Inner Region and is pillaging this area. It will remain here until it is killed."
        ]
      },
      "Vindicator": {
        "name": "Vindicator",
        "count": 1,
        "file": "vindicator",
        "description": [
          "Vindicator",
          "The Vindicator has a Strength of 3 if you are good, a Strength of 6 if you are neutral, or a Strength of 9 if you are evil.",
          "If you kill him, gain 1 Strength, but you must discard him instead of taking him as a trophy. He will remain here until he is killed."
        ]
      },
      "Wrathborn Knight": {
        "name": "Wrathborn Knight",
        "count": 1,
        "file": "wrathborn_knight",
        "description": [
          "Wrathborn Knight",
          "If the Wrathborn's attack roll is lower than its Strength, roll 1 die and add the result to its attack score. It will remain here until it is killed."
        ]
      },
      "Wrathborn Warrior": {
        "name": "Wrathborn Warrior",
        "count": 1,
        "file": "wrathborn_warrior",
        "description": [
          "Wrathborn Warrior",
          "If the Wrathborn's attack roll is lower than its Strength, roll 1 die and add the result to its attack score. It will remain here until it is killed."
        ]
      },
      "Wretched": {
        "name": "Wretched",
        "count": 1,
        "file": "wretched",
        "description": [
          "Wretched",
          "You may not pay fate to reroll dice during battle with the Wretched. It will remain here until it is killed."
        ]
      },
      "Dark Fey": {
        "name": "Dark Fey",
        "count": 1,
        "file": "dark_fey",
        "description": [
          "Dark Fey",
          "The Dark Fey rolls 2 dice for her attack roll and uses the highest result. If she rolls doubles, you are turned into a slimy little Toad for 3 turns. She will remain here until she is killed."
        ]
      },
      "Fel Steed": {
        "name": "Fel Steed",
        "count": 1,
        "file": "fel_steed",
        "description": [
          "Fel Steed",
          "If you defeat the Fel Steed in psychic combat, you may take a Warhorse from the Stables deck instead of keeping the Steed as a trophy. It will remain here until it is defeated."
        ]
      },
      "Heavenly Host": {
        "name": "Heavenly Host",
        "count": 1,
        "file": "heavenly_host",
        "description": [
          "Heavenly Host",
          "Good characters may automatically evade the Host instead of attacking it. The Host cannot be evaded by evil characters.",
          "It will remain here until it is killed."
        ]
      },
      "Shadowsoul": {
        "name": "Shadowsoul",
        "count": 1,
        "file": "shadowsoul",
        "description": [
          "Shadowsoul",
          "You may not pay fate to reroll dice during psychic combat with the Shadowsoul. It will remain here until it is killed."
        ]
      },
      "Swamp Siren": {
        "name": "Swamp Siren",
        "count": 1,
        "file": "swamp_siren",
        "description": [
          "Swamp Siren",
          "If you are defeated, in addition to losing a life, you must encounter this space again instead of moving normally next turn.",
          "She will remain here until she is killed."
        ]
      },
      "Wrathborn Acolyte": {
        "name": "Wrathborn Acolyte",
        "count": 1,
        "file": "wrathborn_acolyte",
        "description": [
          "Wrathborn Acolyte",
          "If the Wrathborn's attack roll is lower than its Craft, roll 1 die and add the result to its attack score. It will remain here until it is killed."
        ]
      },
      "Wrathborn Witch": {
        "name": "Wrathborn Witch",
        "count": 1,
        "file": "wrathborn_witch",
        "description": [
          "Wrathborn Witch",
          "If the Wrathborn's attack roll is lower than its Craft, roll 1 die and add the result to its attack score. It will remain here until it is killed."
        ]
      },
      "Augur": {
        "name": "Augur",
        "count": 1,
        "file": "augur",
        "description": [
          "Draw 6 Adventure Cards. Place any Events on top of the deck facedown in any order you wish, and discard the other cards.",
          "If no Events are drawn, discard this card."
        ]
      },
      "Grace Hearted": {
        "name": "Grace Hearted",
        "count": 1,
        "file": "grace_hearted",
        "description": [
          "The Grace Hearted will remain here for the rest of the game. You may either replenish 1 fate or heal 1 life per visit, free of charge."
        ]
      },
      "Lawbringer": {
        "name": "Lawbringer",
        "count": 1,
        "file": "lawbringer",
        "description": [
          "The Lawbringer will grant the first neutral character to visit him one of the following wishes of their choice, then vanish to the discard pile: Gain one Spell, gold, Strength, Craft, life, or fate; or teleport to any space in this Region."
        ]
      },
      "Madcap": {
        "name": "Madcap",
        "count": 2,
        "file": "madcap",
        "description": [
          "The Madcap will remain here for the rest of the game. Roll 1 die and change to that alignment:",
          "1-2) Evil",
          "3-4) Neutral",
          "5-6) Good",
          "If you change into the same alignment, you may take another turn after this one."
        ]
      },
      "Redeemer": {
        "name": "Redeemer",
        "count": 1,
        "file": "redeemer",
        "description": [
          "Evil and neutral characters must lose 1 fate and place it on this card. The first good character who visits the Redeemer gains all of the fate placed on this card, then the Redeemer departs to the discard pile."
        ]
      },
      "Renegade": {
        "name": "Renegade",
        "count": 1,
        "file": "renegade",
        "description": [
          "Good and evil characters must lose 1 gold and place it on this card. The first neutral character who visits the Renegade gains all of the gold placed on this card, then the Renegade departs to the discard pile."
        ]
      },
      "Ritual Master": {
        "name": "Ritual Master",
        "count": 1,
        "file": "ritual_master",
        "description": [
          "Good and neutral characters must lose 1 life and place it on this card. The first evil character who visits the Ritual Master gains all of the life placed on this card, then the Ritual Master departs to the discard pile."
        ]
      },
      "Warlock's Apprentice": {
        "name": "Warlock's Apprentice",
        "count": 2,
        "file": "warlocks_apprentice",
        "description": [
          "If you do not have a Warlock Quest, you may accept one. If you already have a Warlock Quest, you may take another turn after this one. Once a character accepts a quest from the Warlock's Apprentice, he departs to the discard pile."
        ]
      },
      "Baleful Eye": {
        "name": "Baleful Eye",
        "count": 1,
        "file": "baleful_eye",
        "description": [
          "No good character may have the Baleful Eye.",
          "If you engage an Enemy in battle, you may discard the Eye after you make your attack roll to automatically win the battle regardless of your attack score."
        ]
      },
      "Holy Relic": {
        "name": "Holy Relic",
        "count": 1,
        "file": "holy_relic",
        "description": [
          "No evil character may have the Holy Relic.",
          "Whenever you visit the Chapel, you may replenish fate up to your fate value."
        ]
      },
      "Profane Relic": {
        "name": "Profane Relic",
        "count": 1,
        "file": "profane_relic",
        "description": [
          "No good character may have the Profane Relic.",
          "Whenever you visit the Graveyard, you may heal up to your life value."
        ]
      },
      "Shield of Defiance": {
        "name": "Shield of Defiance",
        "count": 1,
        "file": "shield_of_defiance",
        "description": [
          "You may use the Shield whenever another character attacks you, but not when you attack another character . If your Strength or Craft is lower than your opponent's, you are considered to have the same total Strength or Craft as your opponent, including any bonuses."
        ]
      },
      "Staff of Balance": {
        "name": "Staff of Balance",
        "count": 1,
        "file": "staff_of_balance",
        "description": [
          "No good or evil character may have the Staff of Balance.",
          "Add 1 to your Strength and 1 to your Craft."
        ]
      },
      "Sword of Truth": {
        "name": "Sword of Truth",
        "count": 1,
        "file": "sword_of_truth",
        "description": [
          "No evil character may have the Sword of Truth.",
          "Add 1 to your Strength during battle.",
          "If your attack roll is lower than your opponent's attack roll, you may change your attack roll into a 6 result."
        ]
      },
      "Wrathborn Wand": {
        "name": "Wrathborn Wand",
        "count": 1,
        "file": "wrathborn_wand",
        "description": [
          "No good character may have the Wrathborn Wand.",
          "Add 1 to your Craft during psychic combat.",
          "If your attack roll is lower than your Craft value, roll 1 die and add the result to your attack score."
        ]
      },
      "Gilded Compass": {
        "name": "Gilded Compass",
        "count": 1,
        "file": "gilded_compass",
        "description": [
          "After you roll the die for your move, you may subtract 1 from the score."
        ]
      },
      "Treasure Chest": {
        "name": "Treasure Chest",
        "count": 2,
        "file": "treasure_chest_sacred_pool",
        "description": [
          "Roll 1 die to open the Chest:",
          "1-2) Trap; lose 1 life",
          "3-4) Gain 2 gold",
          "5) Take any Object in the Purchase deck for free",
          "6) Gain a Talisman",
          "Once the Chest is opened, it crumbles to the discard pile.",
          "If you have the Treasure Map you may add up to 3 to the score."
        ]
      },
      "Treasure Map": {
        "name": "Treasure Map",
        "count": 2,
        "file": "treasure_map_sacred_pool",
        "description": [
          "Whenever you draw an Object from the Adventure deck, you may also gain 1 gold.",
          "You may discard the Treasure Map at the Ruins to gain 2 gold."
        ]
      },
      "Dark Theurgist": {
        "name": "Dark Theurgist",
        "count": 1,
        "file": "dark_theurgist",
        "description": [
          "No good character may have the Dark Theurgist.",
          "Whenever you kill an Enemy or defeat a good character, roll 1 die to receive a gift from the Forces of Darkness:",
          "1-2) Ignored",
          "3-4) Heal 1 life",
          "5-6) Gain 1 Spell, if your Craft allows"
        ]
      },
      "Defender of Justice": {
        "name": "Defender of Justice",
        "count": 1,
        "file": "defender_of_justice",
        "description": [
          "Add 1 to your Strength during battle.",
          "The Defender of Justice will join another character if they encounter you, unless you evade the character."
        ]
      },
      "Guardian Angel": {
        "name": "Guardian Angel",
        "count": 1,
        "file": "guardian_angel",
        "description": [
          "No evil character may have the Guardian Angel.",
          "You may discard the Guardian Angel during battle or psychic combat if your attack score is less than your opponent's.",
          "If you choose to do so, you do not lose the attack; it is considered a stand-off instead."
        ]
      },
      "Kraven": {
        "name": "Kraven",
        "count": 1,
        "file": "kraven",
        "description": [
          "If you encounter a space with instructions to draw one or more Adventure Cards, you may draw one more card than required.",
          "Kraven will run off to the discard pile if you encounter an Enemy with a Strength or Craft of 6 or higher."
        ]
      },
      "Mendicant": {
        "name": "Mendicant",
        "count": 1,
        "file": "mendicant",
        "description": [
          "If you want the Mendicant as your Follower, pay 1 gold. If not, he waits here for a character willing to pay him.",
          "After you roll the die to pray, you may pay him any amount of gold to add 1 to the score for each gold that you pay him."
        ]
      },
      "Oathsworn Guide": {
        "name": "Oathsworn Guide",
        "count": 1,
        "file": "oathsworn_guide",
        "description": [
          "The Guide will only become your Follower if you have a quest. You must discard the Guide if you complete a quest.",
          "During movement, you may move any number of spaces up to your die roll, instead of moving the full distance as indicated by the die roll."
        ]
      },
      "Oathsworn Oracle": {
        "name": "Oathsworn Oracle",
        "count": 1,
        "file": "oathsworn_oracle",
        "description": [
          "The Oracle will only become your Follower if you have a quest. You must discard the Oracle if you complete a quest.",
          "Whenever you draw Adventure Cards, you may discard one card of your choice that you do not wish to encounter and draw one more card to replace it, which you must encounter."
        ]
      },
      "Theurgist of Light": {
        "name": "Theurgist of Light",
        "count": 1,
        "file": "theurgist_of_light",
        "description": [
          "No evil character may have the Theurgist of Light.",
          "Whenever you kill an Enemy or defeat an evil character, roll 1 die to receive a blessing from the Spirits of Light:",
          "1-2) Ignored",
          "3-4) Replenish 1 fate",
          "5-6) Gain 1 Spell, if your Craft allows"
        ]
      },
      "Cathedral": {
        "name": "Cathedral",
        "count": 1,
        "file": "cathedral",
        "description": [
          "The Cathedral will remain here for the rest of the game.",
          "When you visit the Cathedral, it is treated as if you were visiting the Chapel."
        ]
      },
      "Glittering Gorge": {
        "name": "Glittering Gorge",
        "count": 1,
        "file": "glittering_gorge",
        "description": [
          "Place a total of 4 gold on this card when revealed. Once per visit you may take 1 gold from the Gorge.",
          "When all 4 have been taken, the Gorge dries up to the discard pile."
        ]
      },
      "Livery Stable": {
        "name": "Livery Stable",
        "count": 4,
        "file": "livery_stable",
        "description": [
          "The Livery Stable will remain here for the rest of the game. On each visit you may buy available Stables Cards at these prices:",
          "Riding Horse                    2G",
          "Mule                                 3G",
          " Horse and Cart                4G ",
          "Warhorse                         6G"
        ]
      },
      "Necropolis": {
        "name": "Necropolis",
        "count": 1,
        "file": "necropolis",
        "description": [
          "The Necropolis will remain here for the rest of the game.",
          "When you visit the Necropolis, it is treated as if you were visiting the Graveyard."
        ]
      },
      "Pantheon": {
        "name": "Pantheon",
        "count": 2,
        "file": "pantheon",
        "description": [
          "Once per visit to the Pantheon, you may change your alignment. When all 3 alignments have been chosen, the Pantheon tumbles to the discard pile."
        ]
      },
      "Reliquary": {
        "name": "Reliquary",
        "count": 1,
        "file": "reliquary",
        "description": [
          "Draw 4 Quest Rewards and place them on this card when revealed. Once per visit, you may discard one of your Talismans to gain a Reward of your choice from this card. When all 4 Rewards have been taken, the Reliquary crumbles to the discard pile. The Rewards do not count towards the number of cards on this space."
        ]
      },
      "Dark Baptism": {
        "name": "Dark Baptism",
        "count": 1,
        "file": "dark_baptism",
        "description": [
          "Reveal the top card of the Veil deck.",
          "If it is not an Enemy, encounter it as normal. Otherwise it becomes your familiar, you must take it as a Follower. As long as you have this Follower you may replace an Adventure Card drawn with a card from the Veil deck."
        ]
      },
      "Foggy Nights": {
        "name": "Foggy Nights",
        "count": 1,
        "file": "foggy_nights",
        "description": [
          "Night lingers on and fog hangs thick across the hills. For 2 rounds after drawing Adventure Cards, a character must draw 1 Veil Card and add it to the space. Then after a strong rain the fog dissipates to the discard pile."
        ]
      },
      "Soul Storm": {
        "name": "Soul Storm",
        "count": 2,
        "file": "soul_storm",
        "description": [
          "The King of the Dead is testing the boundaries of his realm. Place the top 5 cards of the Veil deck on top of the Adventure deck."
        ]
      },
      "Spirited Away": {
        "name": "Spirited Away",
        "count": 1,
        "file": "spirited_away",
        "description": [
          "You become a Ghost character for the next 3 turns before returning from the Realm of Souls."
        ]
      },
      "Medium": {
        "name": "Medium",
        "count": 1,
        "file": "medium",
        "description": [
          "Draw 1 Veil Card, you may encounter that card or place it facedown in front of any other character, that character must put it on top of the Adventure deck on the start of their turn."
        ]
      }
    },
    "QUEST_REWARDS": {
      "Chant of Wisdom": {
        "name": "Chant of Wisdom",
        "count": 1,
        "description": [
          "Keep this card. Increase your Craft value by 1."
        ]
      },
      "Ironskin Charm": {
        "name": "Ironskin Charm",
        "count": 1,
        "description": [
          "Keep this card. Increase your life value by 1."
        ]
      },
      "Good Luck Knot": {
        "name": "Good Luck Knot",
        "count": 1,
        "description": [
          "Keep this card. Increase your fate value by 1."
        ]
      },
      "Might of Giants": {
        "name": "Might of Giants",
        "count": 1,
        "description": [
          "Keep this card. Increase your Strength value by 1."
        ]
      },
      "The Whispers": {
        "name": "The Whispers",
        "count": 1,
        "description": [
          "Discard immediately and change any character to the alignment of your choice."
        ]
      },
      "Vast Wealth": {
        "name": "Vast Wealth",
        "count": 1,
        "description": [
          "Discard immediately and gain 3 gold."
        ]
      },
      "A Favour Owed": {
        "name": "A Favour Owed",
        "count": 1,
        "description": [
          "Discard immediately and draw Adventure Cards until a Follower is revealed. You may take the Follower, then discard the other cards. If you choose not to take the Follower (or cannot), you receive no reward."
        ]
      },
      "Dream Prize": {
        "name": "Dream Prize",
        "count": 1,
        "description": [
          "Discard immediately and draw Adventure Cards until a Magic Object is revealed. You may take the Magic Object, then discard the other cards. If you choose not to take the Magic Object (or cannot), you receive no reward."
        ]
      },
      "Pastoral Tune": {
        "name": "Pastoral Tune",
        "count": 1,
        "description": [
          "Discard immediately and take any card in the Stables deck for free."
        ]
      },
      "A Familiar Prize": {
        "name": "A Familiar Prize",
        "count": 1,
        "description": [
          "Discard immediately and take any card in the Purchase deck for free."
        ]
      },
      "Rite of Passage": {
        "name": "Rite of Passage",
        "count": 1,
        "description": [
          "Discard immediately and gain 1 life, 1 fate, 1 gold, and 1 Spell, if your Craft allows."
        ]
      },
      "Vengeance Hex": {
        "name": "Vengeance Hex",
        "count": 1,
        "description": [
          "Discard immediately. Then choose a character and roll a die:",
          "1) You are turned into a Toad for 3 turns",
          "2-6) The character is turned into a Toad for 3 turns"
        ]
      },
      "The Magic Door": {
        "name": "The Magic Door",
        "count": 1,
        "description": [
          "Keep this card. You may discard this card at the start of your turn to teleport to any space in any Region, except the Inner Region."
        ]
      },
      "Lightning Trap": {
        "name": "Lightning Trap",
        "count": 1,
        "description": [
          "Keep this card. You may discard this card at the start of your turn and take three successive turns before play passes to the next player."
        ]
      },
      "Book of Magic": {
        "name": "Book of Magic",
        "count": 1,
        "description": [
          "Keep this card. You may discard this card at any time to gain your full complement of Spells."
        ]
      },
      "Self-Portrait": {
        "name": "Self-Portrait",
        "count": 1,
        "description": [
          "Keep this card. You may discard this card at any time to heal up to your life value."
        ]
      },
      "Weaver's Mark": {
        "name": "Weaver's Mark",
        "count": 1,
        "description": [
          "Keep this card. You may discard this card at any time to replenish fate up to your fate value."
        ]
      },
      "Glass Guardians": {
        "name": "Glass Guardians",
        "count": 1,
        "description": [
          "Keep this card and place 4 lives on it. Whenever you lose a life, you may discard 1 life from this card instead. Discard this card when all its lives have been discarded."
        ]
      },
      "Ancient Names": {
        "name": "Ancient Names",
        "count": 1,
        "description": [
          "Keep this card. Each spirit has 1 Spell (take 4 Spells from the Spell deck). The spirits will cast the Spells whenever you wish (treat the Spells as though you had cast them). Discard this card when the last Spell is cast."
        ]
      },
      "Luck of the Dead": {
        "name": "Luck of the Dead",
        "count": 1,
        "description": [
          "Keep this card and place 4 fate on it. Whenever you pay a fate, you may discard 1 fate from this card instead. Discard this card when all its fate have been discarded."
        ]
      },
      "Gift of the Wild": {
        "name": "Gift of the Wild",
        "count": 1,
        "description": [
          "Keep this card. You may discard this card after rolling a die to add up to 3 to the result."
        ]
      },
      "Prolific Pockets": {
        "name": "Prolific Pockets",
        "count": 1,
        "description": [
          "Keep this card. If you do not have any gold at the start of your turn, you may gain 1 gold."
        ]
      },
      "Auspice": {
        "name": "Auspice",
        "count": 1,
        "description": [
          "Keep this card. You may discard this card after you draw an Adventure Card to draw an additional Adventure Card. Then choose one of the Adventure Cards that you do not wish to encounter and discard it."
        ]
      },
      "Moon Charm": {
        "name": "Moon Charm",
        "count": 1,
        "description": [
          "Keep this card. You may discard this card after rolling a die to change the die into a 6 result."
        ]
      }
    },
    "STABLES": {
      "Horse and Cart": {
        "name": "Horse and Cart",
        "count": 3,
        "file": "horse_and_cart",
        "description": [
          "The Horse and Cart can carry an extra 8 Objects for you. If you lose the Horse and Cart, you must leave any surplus Objects of your choice in the space you are in."
        ]
      },
      "Mule": {
        "name": "Mule",
        "count": 3,
        "file": "mule",
        "description": [
          "The Mule can carry an extra four Objects for you.",
          "If you lose the Mule, leave any surplus Objects of your choice in the space you are in."
        ]
      },
      "Riding Horse": {
        "name": "Riding Horse",
        "count": 3,
        "file": "riding_horse",
        "description": [
          "You may roll 2 dice and add them together to determine how far you can move."
        ]
      },
      "Warhorse": {
        "name": "Warhorse",
        "count": 2,
        "file": "warhorse",
        "description": [
          "Add your Craft value to your Strength during battle.",
          "If you lose a life during any battle or psychic combat, you must discard the Warhorse."
        ]
      }
    },
    "SPIRIT": {
      "Bright Light": {
        "name": "Bright Light",
        "count": 1,
        "file": "bright_light",
        "description": [
          "A light on the horizon is calling you. For 2 rounds (including this turn) all Ghost characters may add 1 to their movement roll. Then the Light dims to the discard pile."
        ]
      },
      "Chilling Winds": {
        "name": "Chilling Winds",
        "count": 1,
        "file": "chilling_winds",
        "description": [
          "Harsh screaming winds run through the land. For 2 rounds, characters in all Regions may only move 1 space per turn. Ghost characters may move as normal or reduce their movement by 1. The winds then abate to the discard pile."
        ]
      },
      "Cleansing Fire": {
        "name": "Cleansing Fire",
        "count": 1,
        "file": "cleansing_fire",
        "description": [
          "Destroy all Spirits and Veil Cards on the board. Any Ghost characters in this Region lose 1 life."
        ]
      },
      "Infernal Fire": {
        "name": "Infernal Fire",
        "count": 1,
        "file": "infernal_fire",
        "description": [
          "It is time for your punishment. Discard 1 Spell, 1 Object and 1 Follower and lose a life for each card you fail to discard this way."
        ]
      },
      "Judgement": {
        "name": "Judgement",
        "count": 1,
        "file": "judgement",
        "description": [
          "It is time to face your judgement. Roll 1 die:",
          "1) You are punished for your sins - lose 1 life.",
          "2-3) Fate has yet to decide a path for you - nothing happens.",
          "4) Choose another Ghost character who must roll 1 die on this chart immediately.",
          "5) You are rewarded for good deeds - gain 1 life.",
          "6) You are Resurrected."
        ]
      },
      "Proper Burial": {
        "name": "Proper Burial",
        "count": 1,
        "file": "proper_burial",
        "description": [
          "It would appear that some kind individual has given your corpse a proper burial. Move your Gravemarker to the Graveyard."
        ]
      },
      "Restless Dead": {
        "name": "Restless Dead",
        "count": 1,
        "file": "restless_dead",
        "description": [
          "Take all trophies from all characters and shuffle them. Starting with your space and continuing clockwise, place 1 Enemy faceup in each space until all of the cards have been placed. Then discard this card."
        ]
      },
      "Rising Mists": {
        "name": "Rising Mists",
        "count": 1,
        "file": "rising_mists",
        "description": [
          "A thick mist lingers across the realms. For 3 rounds all Spirits add 1 to their attack score. Then a strong breeze pushes the Rising Mist to the discard pile."
        ]
      },
      "The Gathering": {
        "name": "The Gathering",
        "count": 1,
        "file": "the_gathering",
        "description": [
          "All faceup Spirits in this Region are moved to this space. The Gathering then fades away to the discard pile."
        ]
      },
      "Trial": {
        "name": "Trial",
        "count": 1,
        "file": "trial",
        "description": [
          "Choose another character on the board (not in the Inner Region), move to that space and face them in psychic combat. If you defeat the character you gain lives equal to their life total and they lose 1 life. If they become a Ghost character, you may be Resurrected."
        ]
      },
      "Wrong Turn": {
        "name": "Wrong Turn",
        "count": 1,
        "file": "wrong_turn",
        "description": [
          "Move back to the space where you started your turn and encounter that space."
        ]
      },
      "King of the Dead": {
        "name": "King of the Dead",
        "count": 1,
        "file": "king_of_the_dead",
        "description": [
          "King of the Dead",
          "You have come face to face with the legendary King of the Dead. Before you encounter the King of the Dead, if you are not a Ghost character you are killed.",
          "You must attack King of the Dead in either battle or psychic combat.",
          "If you defeat King of the Dead you may move to the Crown of Command, heal all of your lives and you are Resurrected."
        ]
      },
      "Deathstalker": {
        "name": "Deathstalker",
        "count": 1,
        "file": "deathstalker_sr",
        "description": [
          "You must take the Deathstalker as a Follower. If you are defeated in battle or psychic combat and lose a life, you are killed.",
          "You may discard the Deathstalker if you defeat a creature or character in battle or psychic combat."
        ]
      },
      "Poltergeist": {
        "name": "Poltergeist",
        "count": 1,
        "file": "poltergeist",
        "description": [
          "A Poltergeist has attached itself to you. You must take it as a Follower. Its only effect is to slow your movement to 1 space per turn. You can only rid yourself of it by crossing the River, either by bridge, raft or ferry.",
          "You must then discard it."
        ]
      },
      "Blood Sucker": {
        "name": "Blood Sucker",
        "count": 1,
        "file": "blood_sucker",
        "description": [
          "Blood Sucker",
          "If you are defeated by the Blood Sucker, in addition to losing 1 life, you lose 1 Strength. If you defeat the Blood Sucker, gain 1 Strength in addition to your normal reward."
        ]
      },
      "Twisted Leech": {
        "name": "Twisted Leech",
        "count": 1,
        "file": "twisted_leech",
        "description": [
          "Twisted Leech",
          "The Leech adds 1 to its attack roll for each life you have less than your life value. It subtracts 1 from its attack roll for each life you have greater than your life value."
        ]
      },
      "Abomination Wraith": {
        "name": "Abomination Wraith",
        "count": 1,
        "file": "abomination_wraith_sp",
        "description": [
          "Abomination Wraith",
          "The combined souls of a thousand dead, eager to add more to their multitude. The Abomination Wraith rolls 3 dice and adds them together for its attack roll. If you defeat the Wraith, gain 2 life instead of your normal reward."
        ]
      },
      "Chill Wraith": {
        "name": "Chill Wraith",
        "count": 1,
        "file": "chill_wraith_sp",
        "description": [
          "Chill Wraith",
          "If you are defeated, in addition to losing 1 life, you must miss your next turn."
        ]
      },
      "Crawling Hand": {
        "name": "Crawling Hand",
        "count": 1,
        "file": "crawling_hand_sp",
        "description": [
          "Crawling Hand",
          "If you do not kill the Crawling Hand, roll 1 die and move it that number of spaces clockwise."
        ]
      },
      "Dullahan": {
        "name": "Dullahan",
        "count": 1,
        "file": "dullahan",
        "description": [
          "Dullahan",
          "You may not pay fate to reroll dice during psychic combat with the Dullahan. If defeated, in addition to losing 1 life, lose all of your fate."
        ]
      },
      "Ghost": {
        "name": "Ghost",
        "count": 1,
        "file": "ghost",
        "description": [
          "Ghost",
          "A Ghost materialises in (roll 1 die):",
          "1) City                 2) Village",
          "3) Graveyard       4) Chapel",
          " 5) Castle              6) Temple",
          "It now haunts this area and will remain here until it is killed."
        ]
      },
      "Glimmer": {
        "name": "Glimmer",
        "count": 1,
        "file": "glimmer_sp",
        "description": [
          "Glimmer",
          "The Glimmer appears in a bright flash and attacks before you have a chance to react. You may not roll a die for your attack roll."
        ]
      },
      "Harrow": {
        "name": "Harrow",
        "count": 1,
        "file": "harrow",
        "description": [
          "Harrow",
          "When revealed every character in every Region must ditch 1 Follower."
        ]
      },
      "Haunt": {
        "name": "Haunt",
        "count": 1,
        "file": "haunt",
        "description": [
          "Haunt",
          "If you do not defeat the Haunt, you must take it as a Follower. While the Haunt is your Follower, your attack rolls are reduced by 1 (to a minimum of 1). Discard the Haunt if you visit the Chapel or the Graveyard."
        ]
      },
      "Hollow Gaunt": {
        "name": "Hollow Gaunt",
        "count": 1,
        "file": "hollow_gaunt",
        "description": [
          "Hollow Gaunt",
          "The Hollow Gaunt fills beings who enter this area with a bone-chilling dread."
        ]
      },
      "Lemure": {
        "name": "Lemure",
        "count": 1,
        "file": "lemure",
        "description": [
          "Lemure",
          "This lowly creature from the Underworld pounces at you from the shadows. It will remain here until it is killed."
        ]
      },
      "Many-Faced Shade": {
        "name": "Many-Faced Shade",
        "count": 1,
        "file": "tentacle_thing",
        "description": [
          "Many-Faced Shade",
          "The Many-Faced Shade adds 1 to its attack roll for each other card on this space."
        ]
      },
      "Mawbeast": {
        "name": "Mawbeast",
        "count": 1,
        "file": "gug",
        "description": [
          "Mawbeast",
          "The Mawbeast lets out a blood-chilling scream before it attacks."
        ]
      },
      "Night Hag": {
        "name": "Night Hag",
        "count": 1,
        "file": "night_hag",
        "description": [
          "Night Hag",
          "If defeated by the Night Hag, in addition to losing 1 life, you are immediately teleported to your starting space, your turn ends and you must miss your next turn."
        ]
      },
      "Nightmare": {
        "name": "Nightmare",
        "count": 1,
        "file": "nightmare_sp",
        "description": [
          "Nightmare",
          "The Nightmare always has the same total Craft as its opponent, including any bonuses. If you kill it, gain 1 Craft, instead of your normal reward. It will remain here until it is killed."
        ]
      },
      "Phantasm": {
        "name": "Phantasm",
        "count": 1,
        "file": "phantasm",
        "description": [
          "Phantasm",
          "A terrifying Phantasm haunts this place. It will remain here until it is killed."
        ]
      },
      "Ravenous Wraith": {
        "name": "Ravenous Wraith",
        "count": 1,
        "file": "ravenous_wraith",
        "description": [
          "Ravenous Wraith",
          "A spirit of eternal hunger that seeks to feed the void within its twisted heart. When you encounter the Wraith, you must discard 1 Follower. "
        ]
      },
      "Revenant": {
        "name": "Revenant",
        "count": 1,
        "file": "revenant",
        "description": [
          "Revenant",
          "A sinister Revenant has been doomed to linger within this cursed area. It will remain here until it is killed."
        ]
      },
      "Sepulchre Spectre": {
        "name": "Sepulchre Spectre",
        "count": 1,
        "file": "sepulchre_spectre",
        "description": [
          "Sepulchre Spectre",
          "When revealed, move all Spirits in every Region to this space. It will remain here until it is killed."
        ]
      },
      "Shadow": {
        "name": "Shadow",
        "count": 1,
        "file": "shadow",
        "description": [
          "Shadow",
          "A Shadow is lurking in the dark corners of this area. It will remain here until killed."
        ]
      },
      "Shadowsoul": {
        "name": "Shadowsoul",
        "count": 1,
        "file": "shadowsoul",
        "description": [
          "Shadowsoul",
          "You may not pay fate to reroll dice during psychic combat with the Shadowsoul. It will remain here until it is killed."
        ]
      },
      "Soul Dragon": {
        "name": "Soul Dragon",
        "count": 1,
        "file": "soul_dragon",
        "description": [
          "Soul Dragon",
          "You may not use Armour or Weapons, cast Spells, or spend fate while in psychic combat with the Soul Dragon."
        ]
      },
      "Soul Sucker": {
        "name": "Soul Sucker",
        "count": 1,
        "file": "soul_sucker",
        "description": [
          "Soul Sucker",
          "If you are defeated by the Soul Sucker, in addition to losing 1 life, you lose 1 Craft. If you defeat the Soul Sucker, gain 1 Craft in addition to your normal reward."
        ]
      },
      "Spectre": {
        "name": "Spectre",
        "count": 1,
        "file": "spectre",
        "description": [
          "Spectre",
          "A Spectre has appeared in this area. It will remain here until it is killed."
        ]
      },
      "White Fungus": {
        "name": "White Fungus",
        "count": 1,
        "file": "white_fungus",
        "description": [
          "White Fungus",
          "The White Fungus adds 3 to its attack roll if you are a Ghost character."
        ]
      },
      "Wraith": {
        "name": "Wraith",
        "count": 1,
        "file": "wraith",
        "description": [
          "Wraith",
          "A Wraith is wreaking havoc in this area. It will remain until it is killed."
        ]
      },
      "Divine Priestess": {
        "name": "Divine Priestess",
        "count": 1,
        "file": "divine_priestess",
        "description": [
          "You are blessed by the Divine Priestess, heal 1 life. If you are a Ghost character you may immediately be Resurrected at your starting space, then discard the Divine Priestess."
        ]
      },
      "Lost Maiden": {
        "name": "Lost Maiden",
        "count": 1,
        "file": "lost_maiden",
        "description": [
          "Move another faceup card on the board to this space and encounter it. If the Lost Warrior is drawn, discard the Lost Maiden."
        ]
      },
      "Lost Warrior": {
        "name": "Lost Warrior",
        "count": 1,
        "file": "lost_warrior",
        "description": [
          "Move the Lost Warrior to any space on the board with a faceup card on the board and destroy that card. If the Lost Maiden is drawn, discard the Lost Warrior."
        ]
      },
      "Mistwalker": {
        "name": "Mistwalker",
        "count": 1,
        "file": "mistwalker",
        "description": [
          "When revealed place a fate token on this card as a phase marker. If the phase marker is dark side up this card is treated as an Adventure Card, otherwise it is treated as a Veil Card. The Mistwalker will grant a character one of the following wishes of their choice whereupon they will phase between realms (flip the phase marker): Gain one Strength, Craft, life, or fate; or teleport to any space in this Region."
        ]
      },
      "Rakshasa": {
        "name": "Rakshasa",
        "count": 1,
        "file": "rakshasa",
        "description": [
          "You may leave an offering of an Object and place it on this card, otherwise you must fight the Rakshasa in battle or psychic combat. The Rakshasa's Strength/Craft is equal to the character with the highest Strength/Craft respectively. If you defeat the Rakshasa you may take any Objects on the card, the Rakshasa then fades to the discard pile along with any unclaimed Objects."
        ]
      },
      "Friendly Ghost": {
        "name": "Friendly Ghost",
        "count": 1,
        "file": "friendly_ghost",
        "description": [
          "A Friendly Ghost has offered to help guide you on your way. When you roll for movement, you may add 1 to or subtract 1 from the result."
        ]
      },
      "Ghostly Mule": {
        "name": "Ghostly Mule",
        "count": 1,
        "file": "ghostly_mule",
        "description": [
          "You encounter the ghost of a mule that died after falling into a chasm. The Ghostly Mule will carry any number of Soulbound Objects for you. If you lose the Ghostly Mule, leave any surplus Objects of your choice in the space you are in."
        ]
      },
      "Really Lost Soul": {
        "name": "Really Lost Soul",
        "count": 1,
        "file": "really_lost_soul",
        "description": [
          "After you visit the Chapel or Graveyard, you may discard the Really Lost Soul who will grant you any two of the following rewards: Gain one Strength, Craft, life, fate or Spell, if your Craft allows."
        ]
      },
      "Rebellious Spirit": {
        "name": "Rebellious Spirit",
        "count": 1,
        "file": "rebelious_spirit",
        "description": [
          "While the Rebellious Spirit is your Follower you and your opponent must subtract 1 from your attack rolls for each trophy you have."
        ]
      },
      "Vengeful Guide": {
        "name": "Vengeful Guide",
        "count": 1,
        "file": "vengeful_guide",
        "description": [
          "The spirit of the guide who you previously left for dead is not pleased to see you. While the Vengeful Guide is your Follower, you must subtract 1 from all of your die rolls."
        ]
      },
      "Armour of Vulnerability": {
        "name": "Armour of Vulnerability",
        "count": 1,
        "file": "armour_of_vulnerability",
        "description": [
          "",
          "If you are defeated in psychic combat and just lost a life, roll 1 die. If you roll a 3, 4, 5, or 6, the Armour protected you and you did not lose that life, though you still lost the psychic combat. Whenever you have the Armour and are defeated in battle and lose a life, you must lose 2 lives instead."
        ]
      },
      "Barbed Bracer": {
        "name": "Barbed Bracer",
        "count": 1,
        "file": "barbed_bracer",
        "description": [
          "Lose 1 life to add 3 to your attack score during battle or psychic combat. You may only do this once per turn."
        ]
      },
      "Chains of Greed": {
        "name": "Chains of Greed",
        "count": 1,
        "file": "chains_of_greed",
        "description": [
          "Your past greed weighs heavily on your soul. You may not gain any gold until you visit the Chapel or Temple and discard this Object."
        ]
      },
      "Collar of Destiny": {
        "name": "Collar of Destiny",
        "count": 1,
        "file": "collar_of_destiny",
        "description": [
          "Fortune's favour no longer smiles upon the dead. You must take the Collar. You may not gain or spend fate until you visit the Chapel or Temple and discard this Object."
        ]
      },
      "Dancing Sword": {
        "name": "Dancing Sword",
        "count": 1,
        "file": "dancing_sword",
        "description": [
          "Add 1 to your Strength during battle. You may ditch this card at the start of battle to roll two dice for your attack roll. If you do so, roll 1 die and move the Dancing Sword that number of spaces clockwise."
        ]
      },
      "Heart of Night": {
        "name": "Heart of Night",
        "count": 1,
        "file": "heart_of_night",
        "description": [
          "The Heart can carry an extra 1 Object for you. If you lose an attack, the victor may not take either the Heart or the Object stored inside. Similarly, neither may be taken by any character's special ability or Spell. If you lose the Heart you also lose any Object stored inside."
        ]
      },
      "Never-Ending Mist": {
        "name": "Never-Ending Mist",
        "count": 1,
        "file": "never_ending_mist",
        "description": [
          "While you are a Ghost character you may evade any Enemies you encounter."
        ]
      },
      "Orb of the Veil": {
        "name": "Orb of the Veil",
        "count": 1,
        "file": "orb_of_the_veil",
        "description": [
          "Whenever you draw a Veil or Adventure Card you may draw another card and then discard one that you do not wish to encounter."
        ]
      },
      "Screaming Skull": {
        "name": "Screaming Skull",
        "count": 1,
        "file": "screaming_skull",
        "description": [
          "Add 1 to your Craft in psychic combat."
        ]
      },
      "Shackles of Silence": {
        "name": "Shackles of Silence",
        "count": 1,
        "file": "shackles_of_silence",
        "description": [
          "Your words are a gift that you did not cherish. You cannot cast Spells or use Magic Objects and other characters cannot cast Spells on you. If you visit the Chapel or Temple you must discard this Object."
        ]
      },
      "Soul Drinker": {
        "name": "Soul Drinker",
        "count": 1,
        "file": "soul_drinker",
        "description": [
          "No good character may have the Soul Drinker.",
          "You may roll 2 dice in battle and choose which result to use for your attack roll.",
          "If you roll doubles, the Soul Drinker will kill one of your Followers at random and melt to the discard pile."
        ]
      },
      "Soul Seal": {
        "name": "Soul Seal",
        "count": 1,
        "file": "soul_seal",
        "description": [
          "The Seal contains the power of all the mysteries of the soul. All of your Objects and Followers become Soulbound."
        ]
      },
      "Spirit Eye": {
        "name": "Spirit Eye",
        "count": 1,
        "file": "spirit_eye",
        "description": [
          "When you engage an Enemy in psychic combat, you may discard the Eye after you make your attack roll to automatically win the psychic combat, regardless of your attack score."
        ]
      },
      "Armour of The Fallen": {
        "name": "Armour of The Fallen",
        "count": 1,
        "file": "the_fallens_armour",
        "description": [
          "If you are defeated in battle or psychic combat and just lost a life roll 1 die. If you roll a 5 or 6 the Armour protected you and you did not lose that life, though you still lost the attack. You may add 1 to the roll for each other Soulbound Object you have with 'The Fallen' in the title."
        ]
      },
      "Sword of The Fallen": {
        "name": "Sword of The Fallen",
        "count": 1,
        "file": "the_fallens_sword",
        "description": [
          "Add 1 to your Craft during psychic combat. Add 3 instead of 1 during psychic combat while you are a Ghost character. Add 1 to your Craft during psychic combat for each other Soulbound Object you have with 'The Fallen' in the title."
        ]
      },
      "Talisman of The Fallen": {
        "name": "Talisman of The Fallen",
        "count": 1,
        "file": "the_fallens_talisman",
        "description": [
          "You may only enter the Valley of Fire if you have one of the fabled Talismans. Add 1 to your Strength and 1 to your Craft for each other Soulbound Object you have with 'The Fallen' in the title."
        ]
      },
      "Pit of Souls": {
        "name": "Pit of Souls",
        "count": 1,
        "file": "pit_of_souls",
        "description": [
          "The dark Pit draws you nearer. You may offer it a soul if you wish.  If you do, lose 1 life and roll 3 dice for your movement on your next turn."
        ]
      },
      "Pool of Souls": {
        "name": "Pool of Souls",
        "count": 1,
        "file": "pool_of_souls",
        "description": [
          "Fragments of souls are shimmering in the Pool. Place a total of 2 fate and 2 life here when revealed. You may bathe in the Pool once per visit and gain 1 fate and 1 life by taking the appropriate counters. When all counters have been taken from this card, the Pool vanishes to the discard pile."
        ]
      },
      "Shifting Maze": {
        "name": "Shifting Maze",
        "count": 1,
        "file": "shifting_maze",
        "description": [
          "Roll 1 die:",
          "1) The player to your right moves you 1 space in any direction.",
          "2-3) Safe.",
          "4-5) Move 1 space in any direction.",
          "6) Take another turn after this one."
        ]
      }
    },
    "TERRAIN": {
      "Breach": {
        "name": "Breach",
        "count": 2,
        "file": "terrain_breach",
        "description": [
          "DRAW 1 VEIL CARD",
          "Draw 1 Veil card even if there are any Veil cards in this space.",
          "Then encounter any Veil cards on this space."
        ]
      }
    }
  },
  "The Woodland": {
    "SPELLS": {
      "Cut the Thread": {
        "name": "Cut the Thread",
        "count": 3,
        "file": "cut_the_thread",
        "description": [
          "Cast on another character when they spend a fate.",
          "Ω: The effect of that fate is cancelled and you replenish all your fate.",
          "π: The effect of that fate is cancelled and that character loses all of their fate.",
          "Cannot be cast if unbound/fateless."
        ]
      },
      "Forge Destiny": {
        "name": "Forge Destiny",
        "count": 1,
        "file": "forge_destiny",
        "description": [
          "Cast on any character at the start of their turn.",
          "Ω: Pay 2 light fate to have that character draw 1 Destiny card.",
          "π: Pay 2 dark fate to force that character to discard one of their Destiny cards."
        ]
      },
      "Rejuvenation": {
        "name": "Rejuvenation",
        "count": 1,
        "file": "rejuvenation",
        "description": [
          "Cast on yourself at the start of your turn. Heal all of your lives and replenish all of your fate. You may then discard any of your Objects, Followers, or Spells."
        ]
      }
    },
    "WOODLAND": {
      "Faerie Feast": {
        "name": "Faerie Feast",
        "count": 1,
        "file": "faerie_feast",
        "description": [
          "All mortals have been invited to attend a feast hosted by King Oberon and Queen Titania. Each lightbound character gains 1 Spell, if their Craft allows. Each darkbound character gains 1 life. Each unbound character gains 1 fate. Each fateless character loses 1 life. The festivities then die down and are placed in the discard pile."
        ]
      },
      "Faerie Market": {
        "name": "Faerie Market",
        "count": 2,
        "file": "faerie_market",
        "description": [
          "Starting with yourself and continuing clockwise, each character must pass 1 Object, Follower, or Spell to the character to their right, if able. Then each character must pass 1 life, 1 fate, or 1 gold to the character to their right. The Faerie Market then travels on to the discard pile."
        ]
      },
      "Faerie Trod": {
        "name": "Faerie Trod",
        "count": 2,
        "file": "faerie_trod",
        "description": [
          "You risk fate by travelling a faerie path, not knowing where it might lead. Discard your current Path, if able, and take a new Path from the top of the Path deck. Then discard this card."
        ]
      },
      "Greenman": {
        "name": "Greenman",
        "count": 1,
        "file": "greenman",
        "description": [
          "If you are neutral, you gain 1 life. If you are good or evil, you lose 1 life. The Greenman then vanishes off to the discard pile."
        ]
      },
      "Mysterious Mist": {
        "name": "Mysterious Mist",
        "count": 1,
        "file": "mysterious_mist",
        "description": [
          "Each character in this Region must roll 1 die to see what happens to them:",
          "1) Become a Toad for 3 turns",
          "2) Teleport to the Forest",
          "3) Gain 1 life",
          "4) Replenish all of your fate",
          "5) Gain 1 Spell",
          "6) Teleport to the Mystic Glen",
          "The Mist then drifts away to the discard pile."
        ]
      },
      "Old Growth": {
        "name": "Old Growth",
        "count": 2,
        "file": "old_growth",
        "description": [
          "Draw 3 Woodland Cards and add them to this space. Then discard this card."
        ]
      },
      "Skuld": {
        "name": "Skuld",
        "count": 1,
        "file": "skuld",
        "description": [
          "Skuld gives you visions of your future before fading away to the discard pile. Look at the top 10 cards of the Adventure deck without changing their order. For each fate you have, you may discard one of these cards. Then place all remaining cards in a stack in front of you. When you would draw Adventure Cards, draw from these cards instead, until none are available."
        ]
      },
      "Tapestry Rewoven": {
        "name": "Tapestry Rewoven",
        "count": 1,
        "file": "tapestry_rewoven",
        "description": [
          "The Norns have rewoven the Tapestry of Fate and changed the destiny of the world. Each character flips all of their fate. Then replace any Alternative Ending you are using with a random hidden Alternative Ending. Take a secret look at the new hidden Alternative Ending and discard this card."
        ]
      },
      "Transformed": {
        "name": "Transformed",
        "count": 1,
        "file": "transformed",
        "description": [
          "Draw a character at random from the unused character cards, lay it on top of your character card and then discard this card. Treat the new character as your character, using all printed values, special abilities, etc. After 3 turns, you revert back to your original form. Return the new character card to the unused character cards."
        ]
      },
      "Wyrdling": {
        "name": "Wyrdling",
        "count": 1,
        "file": "wyrdling",
        "description": [
          "Wyrdling",
          "An aberration of destiny, it is hungry to devour your fate. If you are unbound, your turn immediately ends; otherwise:",
          "π: Lose all of your dark fate and fight the Wyrdling in psychic combat.",
          "Ω: Lose all of your light fate and fight the Wyrdling in battle.",
          "It will remain here until killed."
        ]
      },
      "Verdandi": {
        "name": "Verdandi",
        "count": 1,
        "file": "verdandi",
        "description": [
          "Verdandi",
          "The Norn who weaves the fate of the present appears to test your destiny. Use your fate instead of your Craft when in psychic combat with her. If you defeat Verdandi, gain a Destiny instead of taking her as a trophy. She will remain here until defeated. "
        ]
      },
      "Bandit": {
        "name": "Bandit",
        "count": 1,
        "file": "bandit",
        "description": [
          "Bandit",
          "A Bandit is marauding in this area. He will not attack if you pay 1 gold. He will remain here until he is killed."
        ]
      },
      "Big Bad Wolf": {
        "name": "Big Bad Wolf",
        "count": 1,
        "file": "big_bad_wolf",
        "description": [
          "Big Bad Wolf",
          "This beast can swallow its victims with one bite. If you are defeated by the Big Bad Wolf, you must ditch one of your Followers. It will remain here until killed."
        ]
      },
      "Boggart": {
        "name": "Boggart",
        "count": 1,
        "file": "boggart",
        "description": [
          "Boggart",
          "This treacherous fae can drive any person to ruin in a fortnight.",
          "π: Lose 1 gold.",
          "Ω: Lose all of your gold.",
          "He will remain here until killed."
        ]
      },
      "Breeze Sylph": {
        "name": "Breeze Sylph",
        "count": 2,
        "file": "breeze_sylph",
        "description": [
          "Breeze Sylph",
          "Gracefully riding on the lightest breeze, this fae will remain here until defeated.",
          "Ω: Gain 1 light fate.",
          "π: Lose 1 dark fate."
        ]
      },
      "Coblynau": {
        "name": "Coblynau",
        "count": 1,
        "file": "coblynau",
        "description": [
          "Coblynau",
          "This fae is causing disaster for miners and travellers in the area. Draw 1 Adventure Card:",
          "π: If it is an Object or Place, add it to this space.",
          "Ω: If it is an Enemy or Stranger, add it to this space. Otherwise, discard it.",
          "He will remain here until killed."
        ]
      },
      "Earthbreaker": {
        "name": "Earthbreaker",
        "count": 1,
        "file": "earthbreaker",
        "description": [
          "Earthbreaker",
          "If you are defeated by the Earthbreaker, discard a faceup Place, Object, or Stranger in this Region. It will remain here until killed."
        ]
      },
      "Fomorian": {
        "name": "Fomorian",
        "count": 1,
        "file": "fomorian",
        "description": [
          "Fomorian",
          "This hideous giant delights in displaying his might. If you defeat him, instead of taking him as a trophy:",
          "π: Gain 1 Strength and leave him faceup on this space.",
          "Ω: Discard him.",
          "If you are unbound, take him as a trophy as normal."
        ]
      },
      "Forest Goat": {
        "name": "Forest Goat",
        "count": 2,
        "file": "forest_goat",
        "description": [
          "Forest Goat",
          "An imposing Forest Goat stubbornly refuses to leave this area. It will remain here until killed."
        ]
      },
      "Lion": {
        "name": "Lion",
        "count": 1,
        "file": "lion",
        "description": [
          "Lion",
          "A Lion is preying on everything in this area. It will remain here until it is killed."
        ]
      },
      "Puca": {
        "name": "Puca",
        "count": 1,
        "file": "puca",
        "description": [
          "Puca",
          "The clever Puca is a bringer of both good fate and bad. She is causing much mischief in the area.",
          "Ω: All characters gain 1 fate.",
          "π: All characters lose 1 fate.",
          "She will remain here until defeated."
        ]
      },
      "Red Cap": {
        "name": "Red Cap",
        "count": 1,
        "file": "red_cap",
        "description": [
          "Red Cap",
          "He seeks blood to stain his horrid red hat. If you are defeated:",
          "π: Lose 1 additional life.",
          "Ω: You are killed.",
          "He will remain here until killed."
        ]
      },
      "Rusalka": {
        "name": "Rusalka",
        "count": 2,
        "file": "rusalka",
        "description": [
          "Rusalka",
          "The Rusalka drowns her victims in swift-running rivers. During battle with the Rusalka:",
          "π: Add 2 to your Strength.",
          "Ω: Subtract 2 from your Strength.",
          "She will remain here until killed."
        ]
      },
      "Shaefoal": {
        "name": "Shaefoal",
        "count": 1,
        "file": "shaefoal",
        "description": [
          "Shaefoal",
          "This creature strikes terror in even the bravest of hearts. If you are defeated, in addition to losing 1 life, move 4 spaces counterclockwise. It will remain here until killed."
        ]
      },
      "Webspinner Spider": {
        "name": "Webspinner Spider",
        "count": 1,
        "file": "webspinner_spider",
        "description": [
          "Webspinner Spider",
          "When you enter the space with the Webspinner Spider, you must end your movement. It will remain here until killed."
        ]
      },
      "Wyrd Dragon": {
        "name": "Wyrd Dragon",
        "count": 1,
        "file": "wyrd_dragon",
        "description": [
          "Wyrd Dragon",
          "Touched by the magic of the fae, the Wyrd Dragon is as wild as it is dangerous. If you defeat the Wyrd Dragon:",
          "π: Gain 1 fate.",
          "Ω: Gain 1 Spell, if your Craft allows.",
          "It will remain here until killed. "
        ]
      },
      "Black Unicorn": {
        "name": "Black Unicorn",
        "count": 1,
        "file": "black_unicorn",
        "description": [
          "Black Unicorn",
          "If you defeat the Black Unicorn in psychic combat, you may keep it as a Follower instead of a trophy. While the Black Unicorn is your Follower, add 1 to your Strength and 1 to your Craft. It will remain here until it is defeated."
        ]
      },
      "Brownie": {
        "name": "Brownie",
        "count": 1,
        "file": "brownie",
        "description": [
          "Brownie",
          "This fae brings prosperity to the lucky and ruin to those who violate his bewildering code of conduct.",
          "Ω: Gain 1 gold.",
          "π: Lose 1 gold.",
          "He will remain here until defeated."
        ]
      },
      "Fae Witch": {
        "name": "Fae Witch",
        "count": 1,
        "file": "fae_witch",
        "description": [
          "Fae Witch",
          "The Fae Witch rolls 2 dice for her attack roll and uses the highest result. If she rolls doubles, you are turned into a slimy, little Toad for 3 turns. She will remain here until killed."
        ]
      },
      "Knocker": {
        "name": "Knocker",
        "count": 1,
        "file": "knocker",
        "description": [
          "Knocker",
          "The knocking of this fae can lead a man to great fortune, or sound his ruin. Draw 1 Adventure Card:",
          "Ω: If it is an Object or Follower, add it to this space.",
          "π: If it is an Enemy or Place, add it to this space.",
          "Otherwise, discard it. He will remain here until killed."
        ]
      },
      "Naiad": {
        "name": "Naiad",
        "count": 2,
        "file": "naiad",
        "description": [
          "Naiad",
          "She sits by the still waters, enticing mortals to their doom. During psychic combat with the Naiad:",
          "Ω: Add 2 to your Craft.",
          "π: Subtract 2 from your Craft.",
          "She will remain here until killed."
        ]
      },
      "Scythian Unicorn": {
        "name": "Scythian Unicorn",
        "count": 1,
        "file": "scythian_unicorn",
        "description": [
          "Scythian Unicorn",
          "Fierce, stubborn, and pure, its horn is said to have healing properties. If you defeat the Unicorn, heal 1 life. It will remain here until killed."
        ]
      },
      "Servant of Mab": {
        "name": "Servant of Mab",
        "count": 1,
        "file": "servant_of_mab",
        "description": [
          "Servant of Mab",
          "This entity of twisted fate is bent on devouring the threads of destiny. If you are defeated by this Enemy, lose 1 Destiny and each other character must:",
          "π: Lose all of their dark fate.",
          "Ω: Lose all of their light fate.",
          "It will remain here until killed."
        ]
      },
      "Sidhe": {
        "name": "Sidhe",
        "count": 1,
        "file": "sidhe",
        "description": [
          "Sidhe",
          "She will answer any insult with the edge of her gossamer blade. If you are defeated:",
          "Ω: Lose 1 additional life.",
          "π: You are killed.",
          "She will remain here until killed."
        ]
      },
      "Sluagh": {
        "name": "Sluagh",
        "count": 1,
        "file": "sluagh",
        "description": [
          "Sluagh",
          "This dark fae is travelling the land, seeking the souls of the innocent to carry with it to damnation. If you are defeated by the Sluagh:",
          "π: Kill 1 of your Followers.",
          "Ω: Kill all of your Followers.",
          "It will remain here until killed."
        ]
      },
      "Storm Sylph": {
        "name": "Storm Sylph",
        "count": 2,
        "file": "storm_sylph",
        "description": [
          "Storm Sylph",
          "Dancing among the storm clouds, she is a harbinger of dark times and a bringer of woe.",
          "π: Gain 1 dark fate.",
          "Ω: Lose 1 light fate.",
          "She will remain here until killed. "
        ]
      },
      "Thieving Piskies": {
        "name": "Thieving Piskies",
        "count": 1,
        "file": "thieving_piskies",
        "description": [
          "Thieving Piskies",
          "If you defeat this Enemy, instead of taking it as a trophy, move it to a space containing a character. That character must ditch one of their Objects."
        ]
      },
      "Totem Bear": {
        "name": "Totem Bear",
        "count": 1,
        "file": "totem_bear",
        "description": [
          "Totem Bear",
          "This bear fiercely defends the Woodland from all intruders. It will remain here until killed."
        ]
      },
      "Vassal of Mab": {
        "name": "Vassal of Mab",
        "count": 1,
        "file": "vassal_of_mab",
        "description": [
          "Vassal of Mab",
          "This hollow-minded mortal serves the mad whims of Queen Mab.",
          "Ω: Lose 1 Strength.",
          "π: Lose 1 Craft.",
          "He will remain here until killed."
        ]
      },
      "White Stag": {
        "name": "White Stag",
        "count": 1,
        "file": "white_stag",
        "description": [
          "White Stag",
          "The White Stag brings luck, both good and bad.",
          "Ω: Gain 1 dark fate.",
          "π: Gain 1 light fate.",
          "It will remain here until defeated. "
        ]
      },
      "Woodland Drake": {
        "name": "Woodland Drake",
        "count": 1,
        "file": "woodland_drake",
        "description": [
          "Woodland Drake",
          "If the Dragon is encountered in the Woods, add 3 to its attack roll. It will remain here until it is killed."
        ]
      },
      "Archdruid": {
        "name": "Archdruid",
        "count": 1,
        "file": "archdruid",
        "description": [
          "The Archdruid seeks one who promotes balance in the world. To the first neutral character landing here, he will grant one of the following wishes before moving on to the discard pile: Gain 1 Spell, Strength, Craft, gold, life, or fate; or teleport to any other space in this Region."
        ]
      },
      "Baba Yaga": {
        "name": "Baba Yaga",
        "count": 1,
        "file": "baba_yaga",
        "description": [
          "An old woman reveals herself as Baba Yaga, the most wicked of all witches. Roll 1 die to see what curse she lays on you. Add 1 to the result for each fate you have.",
          "1) You are killed",
          "2-3) Become a Toad for 3 turns",
          "4) Kill 1 of your Followers",
          "5) Discard 1 of your Objects",
          "6) Lose 1 life",
          "7) Lose 1 Spell",
          "8+) Lose 1 fate"
        ]
      },
      "Centaur": {
        "name": "Centaur",
        "count": 1,
        "file": "centaur",
        "description": [
          "Roll 1 die to determine how the Centaur reacts to you:",
          "1-2) Attacks you; lose 1 life",
          "3-4) Ignores you",
          "5-6) Joins you as a Follower; you may discard any Enemy you are about to encounter. The Centaur will then canter off to the discard pile."
        ]
      },
      "Dryad": {
        "name": "Dryad",
        "count": 1,
        "file": "dryad",
        "description": [
          "A Dryad attempts to lure you through a magic portal. Roll 2 dice. If the total is equal to or less than your Craft, discard the Dryad and gain 1 Craft. If it is higher, you are teleported to the Forest."
        ]
      },
      "Faerie Godmother": {
        "name": "Faerie Godmother",
        "count": 1,
        "file": "faerie_godmother",
        "description": [
          "This kindly faerie will make sure your destiny is set before moving on to the discard pile.",
          "Ω: Gain 1 Craft and 1 light fate.",
          "π: Gain 1 Strength and 1 dark fate."
        ]
      },
      "Leprechaun": {
        "name": "Leprechaun",
        "count": 1,
        "file": "leprechaun_highland",
        "description": [
          "The Leprechaun will remain here for the rest of the game. Roll 1 die:",
          "1) Become a Toad for 3 turns",
          "2) Lose all of your gold",
          "3) Lose 1 gold",
          "4) Gain 1 gold",
          "5) Gain 2 gold",
          "6) Roll 1 die and gain that much gold"
        ]
      },
      "Luck Fairy": {
        "name": "Luck Fairy",
        "count": 1,
        "file": "luck_fairy",
        "description": [
          "The Luck Fairy will remain here for the rest of the game. Roll 1 die:",
          "1) Become a Toad for 3 turns",
          "2) Lose all of your fate",
          "3) Lose 1 fate",
          "4) Replenish 1 fate",
          "5) Replenish 2 fate",
          "6) Replenish fate up to your fate value"
        ]
      },
      "Oberon": {
        "name": "Oberon",
        "count": 1,
        "file": "oberon",
        "description": [
          "The King of the Fae grants you a brief audience.",
          "π: Gain 1 Strength and take 1 Follower or Object from another character. Oberon then dismisses you and moves on to the discard pile.",
          "Ω: Lose all of your light fate, lose half of your lives (rounded up), and discard 1 Object or Follower."
        ]
      },
      "Puck": {
        "name": "Puck",
        "count": 1,
        "file": "puck",
        "description": [
          "The jester of the fae court is always ready to play the trickster. He might just play a trick on you before running off to the discard pile.",
          "π: Choose a darkbound character.",
          "Ω: Choose a lightbound character.",
          "If you are unbound or fateless, then you must choose yourself instead. The chosen character is turned into a slimy, little Toad for 3 turns."
        ]
      },
      "Queen Mab": {
        "name": "Queen Mab",
        "count": 1,
        "file": "queen_mab",
        "description": [
          "The fickle Queen Mab rips apart your destiny, weaving it into something tattered and mad before vanishing to the discard pile. Discard all of your Destiny cards and gain 1 Destiny. Then:",
          "π: Lose 1 life for each light fate you have, and lose all of your dark fate.",
          "Ω: Lose 1 life for each dark fate you have, and lose all of your light fate. "
        ]
      },
      "Titania": {
        "name": "Titania",
        "count": 1,
        "file": "titania",
        "description": [
          "The Queen of the Fae blesses you with her presence.",
          "Ω: Gain 1 Craft, 2 lives, and your full complement of Spells. Titania then bids you farewell and moves on to the discard pile.",
          "π: Lose all of your dark fate, lose half of your lives (rounded up), and discard all of your Spells."
        ]
      },
      "Toad King": {
        "name": "Toad King",
        "count": 1,
        "file": "toad_king",
        "description": [
          "The King of all Toads welcomes you to its kingdom. If you are a Toad, you revert back to normal and gain 1 Strength or 1 Craft.",
          "If you are not a Toad, you are turned into a slimy, little Toad for 3 turns and the Toad King hops 3 spaces counterclockwise."
        ]
      },
      "Urdr": {
        "name": "Urdr",
        "count": 1,
        "file": "urdr",
        "description": [
          "The Norn of the past will remain here for the rest of the game, reminding you of what you once were.",
          "Ω: Set your life to your life value.",
          "π: Set your fate to your fate value.",
          "Then move to your starting space."
        ]
      },
      "Wise Willow": {
        "name": "Wise Willow",
        "count": 1,
        "file": "wise_willow",
        "description": [
          "An ancient Willow resides here, seeking to trade knowledge. If you have 5 or more Craft, you may look at the top 3 cards of the Adventure deck. If you do, choose 1 card to put on the top of the deck and 1 to put at the bottom of the deck. You immediately encounter the remaining card."
        ]
      },
      "Baba Yaga's Hut": {
        "name": "Baba Yaga's Hut",
        "count": 1,
        "file": "baba_yagas_hut",
        "description": [
          "When you walk into the hut, it sprouts chicken legs and starts running! You must take it as a Follower. Instead of rolling for your movement, you must always move 5 spaces. Discard this Follower when you cross the Storm River, either by bridge, raft, or ferry."
        ]
      },
      "Fetch": {
        "name": "Fetch",
        "count": 1,
        "file": "fetch",
        "description": [
          "When you are required to lose 1 or more life, fate, Strength, or Craft, or to discard one or more of your Objects, Followers, or Spells, you may discard the Fetch to ignore that effect. "
        ]
      },
      "Herbalist": {
        "name": "Herbalist",
        "count": 1,
        "file": "herbalist",
        "description": [
          "Whenever you land on the Forest or Woods, you may heal 1 life."
        ]
      },
      "Kelpie": {
        "name": "Kelpie",
        "count": 1,
        "file": "kelpie",
        "description": [
          "Ω: Add your Craft value to your Strength during battle.",
          "π: You may roll 2 dice and add them together to determine how far you can move. "
        ]
      },
      "Leanan": {
        "name": "Leanan",
        "count": 1,
        "file": "leanan",
        "description": [
          "This beautiful fae seeks your love and will act as your muse even as she slowly drains your life. Whenever you gain Strength or Craft, gain 1 fate and lose 1 life.",
          "π: Add 2 to your Strength.",
          "Ω: Add 2 to your Craft."
        ]
      },
      "Piskie Companion": {
        "name": "Piskie Companion",
        "count": 1,
        "file": "piskie_companion",
        "description": [
          "Ω: When you spend light fate to reroll a die, you may add 1 to the final result.",
          "π: When another character spends dark fate to reroll one of your dice, you may add 1 to the final result."
        ]
      },
      "Undine": {
        "name": "Undine",
        "count": 1,
        "file": "undine",
        "description": [
          "π: When another character is about to cross the Storm River by bridge, raft, or ferry, you may discard the Undine to immediately end their turn without them crossing the River.",
          "Ω: Instead of moving normally, you may discard the Undine to cross the Storm River as if you were using a Raft."
        ]
      },
      "Unicorn": {
        "name": "Unicorn",
        "count": 1,
        "file": "unicorn",
        "description": [
          "Add 1 to your Strength and 1 to your Craft."
        ]
      },
      "Book of Binding": {
        "name": "Book of Binding",
        "count": 1,
        "file": "book_of_binding",
        "description": [
          "When you defeat a Fae, instead of taking it as a trophy, you may put 1 dark fate or 1 light fate on this card and gain 1 Spell, if your Craft allows.",
          "π: Increase your life value and fate value by 1 for each dark fate on this card.",
          "Ω: Increase your Spell limit by 1 for each light fate on this card."
        ]
      },
      "Faerie Wand": {
        "name": "Faerie Wand",
        "count": 1,
        "file": "faerie_wand",
        "description": [
          "At the start of your turn, you may:",
          "π: Spend 1 dark fate to look at another character's Spells and take one of your choice, if your Craft allows.",
          "Ω: Spend 1 light fate to gain 1 Spell, if your Craft allows."
        ]
      },
      "Love Potion": {
        "name": "Love Potion",
        "count": 1,
        "file": "love_potion",
        "description": [
          "Discard this card at any time to take 1 Follower from a character in your space. If losing that Follower forces that character to ditch any of their Objects, you may take any of those ditched Objects as well."
        ]
      },
      "Lugh's Cloak": {
        "name": "Lugh's Cloak",
        "count": 1,
        "file": "lughs_cloak",
        "description": [
          "No character with less than 5 Craft may have Lugh's Cloak.",
          "Add 1 to your Craft.",
          "When you encounter a Stranger or an Event, you may choose to be unaffected by it."
        ]
      },
      "Mab's Charm": {
        "name": "Mab's Charm",
        "count": 1,
        "file": "mabs_charm",
        "description": [
          "You may spend 1 dark fate to reroll the attack roll of an Enemy in battle or psychic combat with another character.",
          "You may spend 1 light fate to reroll the attack roll of an Enemy in battle or psychic combat with you."
        ]
      },
      "Mask of the Moon": {
        "name": "Mask of the Moon",
        "count": 1,
        "file": "mask_of_the_moon",
        "description": [
          "Ω: Once during your turn, you may flip one of your light fate.",
          "π: Once during your turn, you may flip one of your dark fate. "
        ]
      },
      "Nuadu's Torc": {
        "name": "Nuadu's Torc",
        "count": 1,
        "file": "nuadaus_torc",
        "description": [
          "No character with less than 5 Strength may have Nuadu's Torc.",
          "Add 1 to your Strength.",
          "You cannot lose your Strength or be turned into a Toad."
        ]
      },
      "Oberon's Bow": {
        "name": "Oberon's Bow",
        "count": 1,
        "file": "oberons_bow",
        "description": [
          "The magic arrows fired from this bow can travel many leagues and strike with unerring accuracy.",
          "π: After moving, you may spend 1 dark fate to choose a character in your space or within 4 spaces of you. That character loses 1 life.",
          "Ω: Ditch this card."
        ]
      },
      "Scales of Balance": {
        "name": "Scales of Balance",
        "count": 1,
        "file": "scales_of_balance",
        "description": [
          "No good or evil character may have the Scales of Balance.",
          "At the start of your turn, you may do one of the following: Gain 1 Spell if you have no Spells; change 1 Strength into 1 Craft (or vice versa); change 1 fate into 1 life (or vice versa)."
        ]
      },
      "Stone of Lia Fal": {
        "name": "Stone of Lia Fal",
        "count": 1,
        "file": "stone_of_lia_fal",
        "description": [
          "The Stone is imbued with a single Destiny (draw a Destiny and put it faceup on this card). You count as having the Destiny on this card."
        ]
      },
      "Sword of Destiny": {
        "name": "Sword of Destiny",
        "count": 1,
        "file": "sword_of_destiny",
        "description": [
          "No character without a Destiny may have the Sword of Destiny.",
          "Add 3 to your attack roll in battle or psychic combat."
        ]
      },
      "Titania's Wand": {
        "name": "Titania's Wand",
        "count": 1,
        "file": "titanias_wand",
        "description": [
          "The Wand is enchanted with a single Spell (draw a Spell and put it faceup on this card).",
          "Ω: Once per round, you may spend 1 light fate to cast the Spell on this Object, after it is discarded draw a new one and place it on this card.",
          "π: Ditch this card."
        ]
      },
      "Verdant Talisman ": {
        "name": "Verdant Talisman ",
        "count": 1,
        "file": "verdant_talisman",
        "description": [
          "You may only enter the Valley of Fire if you have one of the fabled Talismans.",
          "Increase your life and fate values by 1."
        ]
      },
      "Elven Bow": {
        "name": "Elven Bow",
        "count": 1,
        "file": "elven_bow",
        "description": [
          "Add 1 to your Strength during battle.",
          "If you lose a battle by 2 or less, it is considered a stand-off instead."
        ]
      },
      "Lucky Charm": {
        "name": "Lucky Charm",
        "count": 1,
        "file": "lucky_charm",
        "description": [
          "You may discard the Charm when you are about to make a die roll. You choose which result on the die to use instead of rolling it."
        ]
      },
      "Lucky Coin": {
        "name": "Lucky Coin",
        "count": 2,
        "file": "lucky_coin",
        "description": [
          "Other characters cannot spend dark fate during your turn.",
          "You may discard the Coin at any time to gain 1 gold."
        ]
      },
      "Personal Journal": {
        "name": "Personal Journal",
        "count": 1,
        "file": "personal_journal",
        "description": [
          "When you turn in trophies for Strength or Craft, reduce the amount of Strength or Craft points you need by 1."
        ]
      },
      "Token of Promise": {
        "name": "Token of Promise",
        "count": 1,
        "file": "token_of_promise",
        "description": [
          "If you have no fate at the start of your turn, you may replenish 1 fate.",
          "Discard this card at any time to gain 1 fate."
        ]
      },
      "Whetstone": {
        "name": "Whetstone",
        "count": 1,
        "file": "whetstone",
        "description": [
          "Add 1 to your Strength in battle if you are using a Weapon."
        ]
      },
      "Faerie Mound": {
        "name": "Faerie Mound",
        "count": 1,
        "file": "faerie_mound",
        "description": [
          "A burial site sacred to the good folk. When you visit the Mound, search the Woodland discard pile for a Fae and:",
          "Ω: Take it as a trophy",
          "π: Place it on top of the Adventure or Woodland deck.",
          "If you are unbound, place that Fae on your space instead."
        ]
      },
      "Mab's Gate": {
        "name": "Mab's Gate",
        "count": 1,
        "file": "mabs_gate",
        "description": [
          "Roll 1 die to see where you are teleported to. For each fate you have, you may add 1 to the result.",
          "1-2) Chasm",
          "3-4) Black Knight",
          "5-6) Forest",
          "7-8) Stay here",
          "9-10) Mab's Lair",
          "11+) Valley of Fire"
        ]
      },
      "Oberon's Gate": {
        "name": "Oberon's Gate",
        "count": 1,
        "file": "oberons_gate",
        "description": [
          "If you are unbound, teleport to the Forest. Otherwise, on your next turn, instead of moving normally:",
          "π: You may teleport to any space with a faceup Enemy not in the Inner Region.",
          "Ω: The character to your left teleports you to any space not in the Inner Region."
        ]
      },
      "Pool of Fortitude": {
        "name": "Pool of Fortitude",
        "count": 1,
        "file": "pool_of_fortitude",
        "description": [
          "Place a total of 2 Strength and 2 life here when revealed. You may drink at the Pool once per visit and either gain 1 Strength or gain 1 life by taking the appropriate counter. When all 4 counters have been taken, the Pool vanishes to the discard pile."
        ]
      },
      "Pool of Fortune": {
        "name": "Pool of Fortune",
        "count": 1,
        "file": "pool_of_fortune",
        "description": [
          "Place a total of 4 fate here when revealed. You may bathe in the Pool once per visit and take 1 fate from the Pool. When all 4 have been taken, the Pool of Fortune drains away to the discard pile."
        ]
      },
      "Riddle Stone": {
        "name": "Riddle Stone",
        "count": 1,
        "file": "riddle_stone",
        "description": [
          "Roll 1 die. If the result is equal to or greater than your Craft value, discard all of your Spells and the Riddle Stone stays on this space.",
          "If it is lower, gain an amount of Spells equal to the difference, then discard down to your Spell limit. The Riddle Stone then crumbles away to the discard pile."
        ]
      },
      "Rune Gate": {
        "name": "Rune Gate",
        "count": 2,
        "file": "rune_gate",
        "description": [
          "On your next turn, instead of your normal move, you may teleport to any other faceup Rune Gate or any Runes space.",
          "Once the Rune Gate has been used, it vanishes to the discard pile."
        ]
      },
      "Titania's Gate": {
        "name": "Titania's Gate",
        "count": 1,
        "file": "titanias_gate",
        "description": [
          "If you are unbound, teleport to the Forest. Otherwise, on your next turn, instead of moving normally:",
          "Ω: You may teleport to any space with a faceup Object not in the Inner Region.",
          "π: The character to your right teleports you to any space not in the Inner Region."
        ]
      },
      "Tranquil Glade": {
        "name": "Tranquil Glade",
        "count": 1,
        "file": "tranquil_glade",
        "description": [
          "The Glade will remain here for the rest of the game. You may miss your next turn to heal life up to your life value."
        ]
      },
      "Urdarbrunnr": {
        "name": "Urdarbrunnr",
        "count": 1,
        "file": "urdarbrunnr",
        "description": [
          "It is at this well that the Norns spin the destiny of all things.",
          "π: Choose a character to lose 1 light fate and you gain 1 dark fate.",
          "Ω: Choose a character to lose 1 dark fate and you gain 1 light fate.",
          "You may spend either 5 light fate or 5 dark fate to gain a Destiny. "
        ]
      },
      "Well of Life": {
        "name": "Well of Life",
        "count": 1,
        "file": "well_of_life",
        "description": [
          "Place a total of 2 fate and 2 life here when revealed. You may drink at the Well once per visit and either gain 1 fate or gain 1 life by taking the appropriate counter. When all 4 counters have been taken, the Well vanishes to the discard pile."
        ]
      }
    },
    "ADVENTURE": {
      "Faerie Host": {
        "name": "Faerie Host",
        "count": 2,
        "file": "faerie_host",
        "description": [
          "A great and glorious host of fae has marched out from the Woodland, bringing with them many wonders and dangers. Take the top 10 cards of the Woodland deck without looking at them or changing their order, and place them on top of the Adventure deck. Then discard this card."
        ]
      },
      "Faerie Trod": {
        "name": "Faerie Trod",
        "count": 2,
        "file": "faerie_trod",
        "description": [
          "You risk fate by travelling a faerie path, not knowing where it might lead. Discard your current Path, if able, and take a new Path from the top of the Path deck. Then discard this card."
        ]
      },
      "Master of Fate": {
        "name": "Master of Fate",
        "count": 2,
        "file": "master_of_fate",
        "description": [
          "It has been left to you to decide the fate of the world. All characters gain either 1 dark fate or 1 light fate. You choose which type of fate each character gains. Then discard this card."
        ]
      },
      "Faerie Gate": {
        "name": "Faerie Gate",
        "count": 2,
        "file": "faerie_gate",
        "description": [
          "Ω: Teleport to any other space in this Region.",
          "π: The character to your left teleports you to any space not in the Inner Region.",
          "If you are unbound, teleport to the Faerie Ring instead."
        ]
      },
      "Faerie Glade": {
        "name": "Faerie Glade",
        "count": 2,
        "file": "faerie_glade",
        "description": [
          "The fae inhabit this place, inviting you to join in their mad and merry dance. When encountered, draw 1 Woodland Card and add it to this space."
        ]
      }
    },
    "PATH": {
      "Dangerous Path": {
        "name": "Dangerous Path",
        "count": 1,
        "file": "dangerous_path",
        "description": [
          "Danger greets you at every turn, every beast more fierce than the last, every spirit eagerly seeking your life.",
          "Subtract 2 from your attack roll during battle and psychic combat.",
          "When you reach the Meeting with Destiny space, fight Queen Mab in either battle or psychic combat. She has a Strength and Craft of 10. If you defeat her, gain a Destiny. Then move to the Warlock's Cave. "
        ]
      },
      "Ill-Fated Path": {
        "name": "Ill-Fated Path",
        "count": 1,
        "file": "ill_fated_path",
        "description": [
          "The old woman warns you against travelling down this particular road, shrouded in a dark fog. Despite the woman's ominous words, you head down the road and soon find that the warning was quite justified.",
          "You cannot gain or replenish fate.",
          "When you reach the Meeting with Destiny space, if you have fate equal to or greater than your fate value, gain a Destiny. "
        ]
      },
      "Mage's Path": {
        "name": "Mage's Path",
        "count": 1,
        "file": "mages_path",
        "description": [
          "Shrouded in a shimmering mist, you feel yourself grow in power as you travel.",
          "Add 2 to your Craft.",
          "When you reach the Meeting with Destiny space, fight Queen Mab in battle. She has a Strength equal to twice your Craft. If you defeat her, gain a Destiny."
        ]
      },
      "Mystic Path": {
        "name": "Mystic Path",
        "count": 1,
        "file": "mystic_path",
        "description": [
          "Flickering lights follow you as you travel, occasionally forming into glowing, arcane formulae.",
          "At the start of your turn, if you do not have a Spell, you may draw 1 Spell, if your Craft allows.",
          "When you reach the Meeting with Destiny space, fight Queen Mab in psychic combat. She has a Craft of 6. If you defeat her, draw 3 Spells and then discard down to your Spell Limit."
        ]
      },
      "Path of Burdens": {
        "name": "Path of Burdens",
        "count": 1,
        "file": "path_of_burdens",
        "description": [
          "As you walk, a great weight settles on your shoulders and even the lightest possessions feel like boulders.",
          "Your Object carrying limit is reduced by 2.",
          "When you reach the Meeting with Destiny space, you may discard one of your Magic Objects to gain a Destiny. Then move to any space in the Outer Region."
        ]
      },
      "Path of Folly": {
        "name": "Path of Folly",
        "count": 1,
        "file": "path_of_folly",
        "description": [
          "It is less a path and more a tumble down a hill, a leaky boat down a stream, a wrestling match with a blackberry thicket.",
          "Whenever you roll 1 or more dice, subtract 1 from the result, to a minimum of 1.",
          "When you reach the Meeting with Destiny space, gain a Destiny. Then move to any space in the Outer or Middle Region."
        ]
      },
      "Path of Fortune": {
        "name": "Path of Fortune",
        "count": 1,
        "file": "path_of_fortune",
        "description": [
          "Within the first few steps of your journey, a hidden cache of coins. By the next day, your bags are filled with wealth that would be the envy of kings.",
          "When you roll a 4, 5 or 6 for movement, you may gain 1 gold.",
          "When you reach the Meeting with Destiny space, you may pay 5 gold to gain a Destiny."
        ]
      },
      "Path of Glory": {
        "name": "Path of Glory",
        "count": 1,
        "file": "path_of_glory",
        "description": [
          "Vitality emanates from your body and fate guides your steps. No matter where you go, glory illuminates your path and the multitudes marvel at your deeds.",
          "Whenever you win a battle, either heal 1 life or replenish 1 fate.",
          "When you reach the Meeting with Destiny space, you may discard 3 trophies to gain a Destiny."
        ]
      },
      "Path of Greed": {
        "name": "Path of Greed",
        "count": 1,
        "file": "path_of_greed",
        "description": [
          "As you travel, you notice that everyone you meet seems to be better off than you, carrying great treasures and bags filled with gold. If only you had such riches, then your life would be complete.",
          "Your Object carrying limit is increased by 2.",
          "When you reach the Meeting with Destiny space, take one Object or all gold from another character. Then move to the City."
        ]
      },
      "Path of the Determined": {
        "name": "Path of the Determined",
        "count": 1,
        "file": "path_of_the_determined",
        "description": [
          "The path is long and full of terrors, but with dedication and perseverance you know that the journey will be worth it in the end.",
          "Instead of your normal move, you only move 1 space.",
          "When you reach the Meeting with Destiny space, gain a Destiny and a Talisman. Then move to the Portal of Power."
        ]
      },
      "Path of the Seelie": {
        "name": "Path of the Seelie",
        "count": 1,
        "file": "path_of_the_seelie",
        "description": [
          "You see the fleeting form of Queen Titania before you and feel her blessing upon the path you have chosen, for good fortune follows in her wake.",
          "At the start of your turn, you may replenish 1 light fate.",
          "When you reach the Meeting with Destiny space, fight King Oberon in battle. He has a Strength of 7 and adds 1 to his Strength for each light fate you have. If you defeat him, gain a Destiny. "
        ]
      },
      "Path of the Unseelie": {
        "name": "Path of the Unseelie",
        "count": 1,
        "file": "path_of_the_unseelie",
        "description": [
          "King Oberon stands before you with a stern gaze, commanding you to serve him for a time in exchange for a portion of his dark power.",
          "At the start of your turn, you may replenish 1 dark fate.",
          "When you reach the Meeting with Destiny space, fight Queen Titania in psychic combat. She has a Craft of 7 and adds 1 to her Craft for each dark fate you have. If you defeat her, gain a Destiny. "
        ]
      },
      "Path of Wisdom": {
        "name": "Path of Wisdom",
        "count": 1,
        "file": "path_of_wisdom",
        "description": [
          "A subtle insight overtakes you as you walk and you feel that enlightenment awaits you at the end of your journey.",
          "When turning in trophies to gain Strength or Craft, reduce the number of Strength or Craft points you need by 1.",
          "When you reach the Meeting with Destiny space, gain 1 Strength or 1 Craft. "
        ]
      },
      "Runebound Path": {
        "name": "Runebound Path",
        "count": 1,
        "file": "runebound_path",
        "description": [
          "Glowing runes are etched along your path, and you feel magic being drained away from the world around you.",
          "You cannot cast Spells. No Spells will affect you, other than the Command Spell.",
          "When you reach the Meeting with Destiny space, each character must discard all of his Spells. If 3 or more Spells are discarded, gain a Destiny. Then move to any Runes space."
        ]
      },
      "Secret Path": {
        "name": "Secret Path",
        "count": 1,
        "file": "secret_path",
        "description": [
          "Your path is dark and secluded, making it easy to slip by many dangers unseen.",
          "You may evade creatures with a Strength or Craft of 5 or higher.",
          "When you reach the Meeting with Destiny space move to any Woods, not in the Woodland. "
        ]
      },
      "Vile Path": {
        "name": "Vile Path",
        "count": 1,
        "file": "vile_path",
        "description": [
          "You feel sick as a cold dampness covers you, body and soul. Even the slightest scratch festers and the smell of rot is everywhere.",
          "You cannot gain or heal life.",
          "When you reach the Meeting with Destiny space, if you have lives equal to or greater than your life value, gain a Destiny. Then move to the Cursed Glade."
        ]
      },
      "Warrior's Path": {
        "name": "Warrior's Path",
        "count": 1,
        "file": "warriors_path",
        "description": [
          "The way is difficult, but invigorating. You feel yourself ready to take on any threat that crosses your path.",
          "Add 2 to your Strength.",
          "When you reach the Meeting with Destiny space, fight Queen Mab in psychic combat. She has a Craft equal to twice your Strength. If you defeat her, gain a Destiny. "
        ]
      },
      "Wyrd Path": {
        "name": "Wyrd Path",
        "count": 1,
        "file": "wyrd_path",
        "description": [
          "Your destiny was set as soon as your foot hit the path. It will not be easy to escape it, but it is your choice to fulfill it.",
          "Draw a Destiny and put it on this card. You count as having this Destiny for as long as you are on this Path.",
          "When you reach the Meeting with Destiny space, you may pay 4 fate to gain the Destiny on this card. "
        ]
      },
      "Clear Path": {
        "name": "Clear Path",
        "count": 1,
        "file": "clear_path",
        "description": [
          "The way is wide and open, and you make very good time in your travels.",
          "When rolling for movement, you may roll 2 dice and add them together to determine how far you can move.",
          "When you reach the Meeting with Destiny space, move to any space not in the Woodland or Inner Region."
        ]
      },
      "Path of Respite": {
        "name": "Path of Respite",
        "count": 1,
        "file": "path_of_respite",
        "description": [
          "Cosy inns and friendly hosts frequent your journey, giving you plenty of time to rest and recover from your woes.",
          "You may miss your turn to heal up to 2 lives.",
          "When you reach the Meeting with Destiny space, lose all of your lives but 1 and gain a Destiny. Then move to the Tavern."
        ]
      }
    },
    "DESTINY": {
      "The Blessed": {
        "name": "The Blessed",
        "count": 1,
        "description": [
          "Increase your life value by 1.",
          "Increase your fate value by 1.",
          "When a character prays, you may replenish 1 light fate.",
          "Once per round, when you lose a battle or psychic combat, you may spend 1 light fate to make it a stand-off instead.",
          "\"Weapons will be unable to pierce your holy flesh and the torments of dark spirits will wash over you like water.\""
        ]
      },
      "The Champion": {
        "name": "The Champion",
        "count": 1,
        "description": [
          "Increase your Strength value by 1.",
          "Increase your fate value by 1.",
          "When a character rolls a 6 for their attack roll during battle or psychic combat, you may replenish 1 light fate.",
          "You may spend 1 light fate to roll 2 dice during battle or psychic combat and add them together to determine your attack roll.",
          "\"No enemy will stand in your way, be it a contest of might or magic.\""
        ]
      },
      "The Cursed": {
        "name": "The Cursed",
        "count": 1,
        "description": [
          "Increase your Strength value by 1.",
          "Increase your fate value by 1.",
          "When another character spends dark fate to reroll a die a character just rolled, you may replenish 1 dark fate.",
          "When a character spends light fate to reroll a die, you may spend 1 dark fate to cancel the reroll. The light fate is discarded with no effect.",
          "\"Misfortune will follow in your wake, afflicting all those who cross your path.\""
        ]
      },
      "The Divisive": {
        "name": "The Divisive",
        "count": 1,
        "description": [
          "Increase your Craft value by 1.",
          "Increase your fate value by 1.",
          "When you gain a Follower, you may replenish 1 dark fate.",
          "Once per round, you may spend 1 dark fate to force a character to ditch one Follower of your choice.",
          "\"Your insidious words will divide audiences, causing friendships to crumble and loyalty to wear away.\""
        ]
      },
      "The Doomed": {
        "name": "The Doomed",
        "count": 1,
        "description": [
          "Increase your Strength value by 1.",
          "Increase your fate value by 1.",
          "When another character loses a battle or psychic combat, you may replenish 1 dark fate.",
          "When a character heals or gains 1 or more lives, you may spend 1 dark fate to reduce the number of lives healed or gained by 1.",
          "\"Death will hound you, leaving corpses wherever you go.\""
        ]
      },
      "The Dreaded": {
        "name": "The Dreaded",
        "count": 1,
        "description": [
          "Increase your Strength value by 1.",
          "Increase your fate value by 1.",
          "When you win a battle or psychic combat, you may replenish 1 dark fate.",
          "When you are about to engage in battle or psychic combat with a character, you may spend 1 dark fate to force him to lose 1 life.",
          "\"Even the brave shy away from your presence, while all others flee your approach.\""
        ]
      },
      "The Enlightened": {
        "name": "The Enlightened",
        "count": 1,
        "description": [
          "Increase your Craft value by 1.",
          "Increase your fate value by 1.",
          "When a character successfully casts a Spell, you may replenish 1 light fate.",
          "At the start of your turn, you may spend 1 light fate to draw 1 Spell and then discard down to your Spell limit.",
          "\"Arcane knowledge will fill your mind, power forever coursing through your veins.\""
        ]
      },
      "The Fated": {
        "name": "The Fated",
        "count": 1,
        "description": [
          "Increase your Craft value by 1.",
          "Increase your fate value by 1.",
          "When another character replenishes or gains 1 or more fate, you may replenish 1 light fate.",
          "You may spend light fate as if it were dark fate. You may spend dark fate as if it were light fate.",
          "\"Your fate is your own. Do with it what you will.\""
        ]
      },
      "The Immortal": {
        "name": "The Immortal",
        "count": 1,
        "description": [
          "Increase your life value by 1.",
          "Increase your fate value by 1.",
          "When another character heals or gains 1 or more lives, you may replenish 1 dark fate.",
          "Once per round, you may spend 1 dark fate to prevent the loss of 1 life.",
          "\"You will make dark bargains for eternal youth, and watch the world around you grow old and die.\""
        ]
      },
      "The Noble": {
        "name": "The Noble",
        "count": 1,
        "description": [
          "Increase your Strength value by 1.",
          "Increase your fate value by 1.",
          "When a Follower is drawn, you may replenish 1 light fate.",
          "When another character discards or ditches a Follower, you may spend 1 light fate to take that Follower.",
          "\"Your noble actions will echo throughout the land and many will flock to your banner.\""
        ]
      },
      "The Vagabond": {
        "name": "The Vagabond",
        "count": 1,
        "description": [
          "Increase your Craft value by 1.",
          "Increase your fate value by 1.",
          "When a character rolls a 1 for their movement, you may replenish 1 dark fate.",
          "When a character is about to roll the die for their movement, you may spend 1 dark fate to choose the result instead of rolling.",
          "\"You will wander the lands with no place to call your own, friendless and alone.\""
        ]
      },
      "The Void": {
        "name": "The Void",
        "count": 1,
        "description": [
          "Increase your Craft value by 1.",
          "Increase your fate value by 1.",
          "When another character successfully casts a Spell, you may replenish 1 dark fate.",
          "When another character casts a Spell, you may spend 1 dark fate to negate the effects of that Spell, except for the Command Spell.",
          "\"You will become a void in the tapestry of magic. Magicians and sorceresses will curse your very existence.\""
        ]
      },
      "The Wealthy": {
        "name": "The Wealthy",
        "count": 1,
        "description": [
          "Increase your Strength value by 1.",
          "Increase your fate value by 1.",
          "When a character gains 1 or more gold, you may gain 1 light fate.",
          "You may spend light fate as if it were gold.",
          "\"You will never again want for gold. Wealth will be easily found at every turn.\""
        ]
      }
    }
  }
}