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
      "A young hero distracted by the details of his own growing legend. His strength is rivaled only by his generous heart, and by his fondness for his own reflection.",
    deeds: [
      'Fought the Giant Bats and Blind Fang in White Elk Vale.',
      "Took one of Blind Fang's eggs from her cave, and still keeps it.",
      'Fought the wolves at the Fallen Timber.',
      'Earned Silver Rank with the company.',
      'Pursued the fleeing goblin chieftain out of the warren with Seamus.',
      "Charged White Fang across the ice at Auril's shrine and laid a divine smite along the great wolf's flank.",
    ],
    carrying: ["One of Blind Fang's eggs, not yet hatched"],
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
      "A Northman who studies a fight the way a scholar studies a text, and settles it like a soldier. Jack likes his victories where people can see them, which is why Blind Fang's head now hangs, preserved and mounted, on his wall.",
    deeds: [
      'Fought through the bat colony of White Elk Vale and helped bring down Blind Fang.',
      "Claimed Blind Fang's head as his trophy.",
      'Fought the wolves and dire wolves at the Fallen Timber.',
      'Earned Silver Rank with the company in Caldmere.',
      'Fought through the Goblin Warren and helped free every prisoner held there.',
      "Collected Blind Fang's head, preserved and mounted, from Bimble & Sons.",
      "Recognized the snowflake of the ice goddess Auril carved into the mine, a sign Jack knew from growing up around Ten Towns.",
      "Cut a zealot of Auril through the collarbone with the first natural twenty of Jack's career, then fought White Fang blind.",
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
      "A lonely poet who misses his mother, finally out from under the shadow of his father. He took up the spear to make a name for himself on his own terms, and made a pact with strange folk for the strength to wield it.",
    deeds: [
      "Took Blind Fang's wings as his trophy in White Elk Vale.",
      'Fought the wolves at the Fallen Timber.',
      'Earned Silver Rank with the company.',
      'Pursued the fleeing goblin chieftain out of the warren with Cocoa.',
      "Collected a cape made from Blind Fang's wings at Bimble & Sons.",
      'Heard familiar laughter in the glowing cracks of the frozen level, and caught some of the water in a canteen.',
      "Trapped both cultists of Auril in an illusion of iron bars and fire, and was dropped by White Fang's breath.",
    ],
    carrying: ["A cape fashioned from Blind Fang's wings", 'A lantern from the abandoned camp that burns without oil', 'A canteen a quarter full of glowing water from the cracks of the frozen level'],
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
      "A sorcerer whose fire answers faster than her caution. The flames that won the fight at the Fallen Timber also took the workers trapped inside it, and Valith carries that. She is as quick to mend as to burn: her hands set the Silent Bell ringing again.",
    deeds: [
      'Fought the Giant Bats and Blind Fang in White Elk Vale.',
      "Gave one of Blind Fang's eggs to a druid investigating the Greybough at Ashmere.",
      "Cast Aganazzar's Scorcher at the Fallen Timber. The fire spread, and trapped workers died.",
      'Earned Silver Rank with the company.',
      'Repaired the damaged Guild bell so the waystation could ring again.',
      "Incinerated two frost mephits at the door of Auril's shrine with one fireball, and finished both surviving cultists with another.",
    ],
    carrying: ['The tips of the tails from the creatures at the mountain shrine'],
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
      "A scout who trusts tracks over testimony. Where the others saw a raid, Wonnelly saw a trail stamped in too neatly to be real, and followed the true one to the goblins' door. As her card says, the wilds leave no secrets for long.",
    deeds: [
      'Fought the Giant Bats and Blind Fang in White Elk Vale.',
      "Took one of Blind Fang's eggs from her cave, and still keeps it.",
      'Fought the wolves at the Fallen Timber.',
      'Earned Silver Rank with the company.',
      'Saw through the false trail at the silent waystation and found the real route to the Goblin Warren.',
      "Put a crossbow bolt through the head of a zealot of Auril, and stayed on her feet through White Fang's breath.",
    ],
    carrying: ["One of Blind Fang's eggs, not yet hatched", 'Pitons from the abandoned camp on the frozen level'],
  },
];

/** Marc's line, shown wherever the company is listed. */
export const orderNote = 'Names are in alphabetical order, which is why the women come last, not because Marc is a sexist pig.';
