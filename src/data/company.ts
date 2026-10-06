export interface Hero {
  slug: string;
  name: string;
  also?: string;
  lineage: string;
  calling: string;
  accent: string;
  card: string;
  portrait?: string;
  lego: string;
  summary: string;
  deeds: string[];
  carrying: string[];
  more?: { art: string; caption: string }[];
}

export const company: Hero[] = [
  {
    slug: 'cocoa',
    name: 'Cocoa',
    lineage: 'Dhampir (elf, half vampyr)',
    calling: 'Paladin',
    accent: '#7d1d24',
    card: 'card-cocoa',
    lego: 'lego-cocoa',
    summary:
      'A dark-haired paladin in white and silver plate, part elf and part vampyr. Cocoa holds the line with a longsword and a heavy white cloak.',
    deeds: [
      'Fought the Giant Bats and Blind Fang in White Elk Vale.',
      "Took one of the three white eggs from Blind Fang's cave, and still keeps it.",
      'Fought the wolves at the Fallen Timber.',
      'Earned Silver Rank with the company.',
      'Pursued the fleeing goblin chieftain out of the warren with Seamus.',
    ],
    carrying: ['One of the furry white eggs from Blind Fang’s lair'],
  },
  {
    slug: 'jack-of-blades',
    name: 'Jack of Blades',
    also: 'Groggin Halas, sometimes called Groggin',
    lineage: 'Human (Northman)',
    calling: 'Fighter, Battle Master',
    accent: '#24407a',
    card: 'card-groggin',
    portrait: 'portrait-groggin',
    lego: 'lego-groggin',
    summary:
      'A silver-haired Northman in Guild blue who carries his greatsword over one shoulder. A Battle Master treats combat as a craft to be studied, and Jack fights that way: reading the field, then choosing the blow.',
    deeds: [
      'Fought through the bat colony of White Elk Vale and helped bring down Blind Fang.',
      "Claimed Blind Fang's head as his trophy.",
      'Fought the wolves and dire wolves at the Fallen Timber.',
      'Earned Silver Rank with the company in Caldmere.',
      'Fought through the Goblin Warren and helped free every prisoner held there.',
      "Collected Blind Fang's head, preserved and mounted, from Bimble & Sons.",
    ],
    carrying: ["Blind Fang's preserved, mounted head"],
    more: [{ art: 'blind-fang-mount', caption: "Blind Fang's head, mounted by Bimble & Sons" }],
  },
  {
    slug: 'seamus',
    name: 'Seamus',
    lineage: 'Downcast',
    calling: 'Fighter and Warlock',
    accent: '#8a2a1c',
    card: 'card-seamus',
    portrait: 'portrait-seamus',
    lego: 'lego-seamus',
    summary:
      'A red-haired spear fighter whose weapon crackles with a warlock’s borrowed power. Much about Seamus remains a mystery, even to the company.',
    deeds: [
      "Took Blind Fang's wings as his trophy in White Elk Vale.",
      'Fought the wolves at the Fallen Timber.',
      'Earned Silver Rank with the company.',
      'Pursued the fleeing goblin chieftain out of the warren with Cocoa.',
      "Collected a cape made from Blind Fang's wings at Bimble & Sons.",
    ],
    carrying: ["A cape fashioned from Blind Fang's wings"],
  },
  {
    slug: 'valith-oakhaven',
    name: 'Valith Oakhaven',
    lineage: 'Half-elf',
    calling: 'Sorcerer, Spellfire Sorcery',
    accent: '#b4441a',
    card: 'card-valith',
    lego: 'lego-valith',
    summary:
      "A half-elven sorcerer in crimson who calls fire into an open hand. Valith's spells win fights, and at the Fallen Timber they also cost lives.",
    deeds: [
      'Fought the Giant Bats and Blind Fang in White Elk Vale.',
      'Gave one of the three white eggs to a druid investigating the Greybough at Ashmere.',
      "Cast Aganazzar's Scorcher at the Fallen Timber. The fire spread, and trapped workers died.",
      'Earned Silver Rank with the company.',
      'Repaired the damaged Guild bell so the waystation could ring again.',
    ],
    carrying: [],
  },
  {
    slug: 'wonnelly-shadowleaf',
    name: 'Wonnelly Shadowleaf',
    lineage: 'High elf',
    calling: 'Rogue, Scout',
    accent: '#24503a',
    card: 'card-wonnelly',
    portrait: 'portrait-wonnelly',
    lego: 'lego-wonnelly',
    summary:
      'A high elven scout in forest green with a crossbow and a tracker’s eye. False trails do not stay false for long around Wonnelly.',
    deeds: [
      'Fought the Giant Bats and Blind Fang in White Elk Vale.',
      "Took one of the three white eggs from Blind Fang's cave, and still keeps it.",
      'Fought the wolves at the Fallen Timber.',
      'Earned Silver Rank with the company.',
      'Saw through the false trail at the silent waystation and found the real route to the Goblin Warren.',
    ],
    carrying: ['One of the furry white eggs from Blind Fang’s lair'],
  },
];

/** Marc's line, shown wherever the company is listed. */
export const orderNote = 'Names are in alphabetical order, which is why the women come last, not because Marc is a sexist pig.';
