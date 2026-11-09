/**
 * One entry per session played. Scenes in src/chronicle/ point here with `session:`.
 * `summary` is the one-line card text. `notes` are the quick notes on the chronicle landing page;
 * the full scenes live on /chronicle/session-N/.
 */
export interface Session {
  n: number;
  slug: string;
  name: string;
  summary: string;
  notes: string[];
}

export const sessions: Session[] = [
  {
    n: 1,
    slug: 'session-1',
    name: 'Session One',
    summary: 'Blind Fang falls, the Fallen Timber burns, and the company is raised to Silver Rank.',
    notes: [
      "Four Giant Bats in White Elk Vale, then Blind Fang herself. Jack took her head, Seamus her wings, and the company carried off her three unhatched eggs.",
      'At Ashmere, Valith left one egg with a druid investigating the corruption in the Greybough. Cocoa and Wonnelly kept the other two.',
      "Wolves and dire wolves at the Fallen Timber. Valith's Aganazzar's Scorcher won the fight, and the fire it started killed the workers trapped in the timber.",
      'Caldmere at last. The contract completed, the company raised to Silver Rank, Reginald Goldhound assigned as their liaison, and a first mandatory job: The Silent Bell.',
    ],
  },
  {
    n: 2,
    slug: 'session-2',
    name: 'Session Two',
    summary: 'Dispatched to a Guild waystation that has gone silent, and a false trail into the trees.',
    notes: [
      'The Guild waystation found silent, its bell gone, and signs of an attack that had been tampered with.',
      'A false trail stamped into the earth toward the trees, and a goblin ambush at the tower.',
      'Wonnelly read the real signs of movement and found the true route to a hidden goblin settlement.',
    ],
  },
  {
    n: 3,
    slug: 'session-3',
    name: 'Session Three',
    summary: 'The Goblin Warren, Guzzard the funny goblin, the Silent Bell returned, and a reckoning back in Caldmere.',
    notes: [
      'The Goblin Warren: traps, barracks, kennels, a kitchen, and the stolen Guild bell hung over the fighting pit as a trophy.',
      "Every prisoner freed, Guzzard the funny goblin among them, and the chieftain's hoard recovered. The chieftain escaped, and Seamus and Cocoa could not catch him.",
      'The bell carried back to the watchtower and repaired by Valith. The Silent Bell rang again.',
      "Back in Caldmere: Blind Fang's head mounted and her wings made into a cape at Bimble & Sons, Jenkins at the Prism Palace, the elven clerk returned to the Guild, and 600 gold from Reginald.",
    ],
  },
  {
    n: 4,
    slug: 'session-4',
    name: 'Session Four',
    summary: 'A family of creatures at a mountain shrine, a dwarven mine its own miners feared, and the "poltergeists" that turned out to be frost mephits.',
    notes: [
      "A family of creatures killed at a mountain shrine. Valith's fireball took two of the young, and Valith told the town a story about raiders.",
      'Doric walked the company to a dwarven mine its own miners had fled, calling it haunted.',
      'The haunting was frost mephits. On the lift posts, Jack found the snowflake of the ice goddess Auril, a sign Jack knew from Ten Towns.',
      'Jack rigged the lift so nothing could come up at them in the night, and the company took a long rest beside it.',
    ],
  },
  {
    n: 5,
    slug: 'session-5',
    name: 'Session Five',
    summary: "The frozen level of the mine, a lantern that burns without oil, the cultists of the ice goddess Auril and her wolf White Fang, and the Winter Heart pried out of the ice.",
    notes: [
      'Down to the frozen level: rime on the tracks, snow falling underground, and a pale blue glow in the cracks that laughed when Seamus touched it.',
      "Barrels of kerosene, loaded two to a cart. An abandoned camp with a miner's log pointing east, crates of quartz, and a lantern that burns without oil, now Seamus's.",
      "Past Auril's second mark the wind stopped. Two frost mephits died in Valith's fireball, and three cultists of Auril and the great white wolf White Fang came out to defend her treasure.",
      "Jack's first natural twenty and Wonnelly's bolt killed a zealot. Valith's second fireball finished the other two. White Fang's breath dropped Seamus.",
      "White Fang and the last cultist fell. Behind the shrine's ice the company found the Winter Heart, the source of the cold, and pried it out. The snow stopped.",
      "Doric's scouts had watched the slatebacks die at the mountain shrine. The dwarves asked only that the pearls from their tails be made into armor, by ceremony.",
    ],
  },
  {
    n: 6,
    slug: 'session-6',
    name: 'Session Six',
    summary: 'Pearlite armor for Jack, a fake Guild toll station on the Caldmere road, Bova\'s Bell, and a contract that can only be read in blood.',
    notes: [
      'Three days at the Rusty Nail Tavern while the dwarves made the slateback pearls into armor. Jack wears it, and it is very hard to knock down.',
      "Bruno of Frostlass Pastures found in the cellar of a fake Guild toll station run by Tobin Rook, Wonnelly's old lieutenant in the city guard. Valith burned the tower down, and Cocoa took a swordsman's head off into a doorframe.",
      'The company turned in Tobin, his ledger, and all 521 gold. Bruno gave them Bova\'s Bell, and the Guild raised False Silver from 180 gold to 300.',
      "Guzzard ate one of Blind Fang's eggs. Jenkins named the Winter Heart and offered 7,000 gold for it. The company kept it, and Bimble pointed them to an undead smith at Cairn Mordun in the Old Teeth.",
      "Next: the Fire at Zahara's Glassworks, then The Quiet Exchange, a covenant contract from Alistair Vale of House Dawn. The company voted three to two to read it now.",
    ],
  },
];

/** The prologue is not a session, but it has a page of its own alongside them. */
export const prologue = {
  slug: 'prologue',
  name: 'Prologue',
  summary: 'The Kingdom Beneath the Mountains',
  notes: [
    'Altheim: forests, rivers, mist, and hot springs beneath the Spine of the World, with Caldmere and the Everspring at its heart.',
    "Generations ago the frost giants of High King Hrothgar invaded, and the peoples of the valley beat them back only by standing together.",
    "Hrothgar's great axe still stands as a monument, with his warning: the giants will return when Altheim forgets the unity that defeated them.",
  ],
};
