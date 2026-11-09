export interface Entry {
  name: string;
  tag?: string;
  art?: string;
  text: string[];
}

export const houses: Entry[] = [
  { name: 'House Dawn', tag: 'Led by Alistair Vale', text: ['Law, order, and faith.'] },
  { name: 'House Verdant', tag: 'Led by Kaelis Hearthborn', text: ["Prosperity, stewardship, trade, and the welfare of Altheim's people and lands."] },
  { name: 'House Argent', tag: 'Led by Seris Lunaris', text: ['Knowledge, scholarship, and the responsible use of magic.'] },
  { name: 'House Ember', tag: 'Led by Garrick Thorne', text: ['Military readiness and the defense of the realm.'] },
];

export const people: Entry[] = [
  {
    name: 'Reginald Goldhound',
    tag: 'Guild liaison',
    art: 'guild-official',
    text: [
      "The company's dedicated liaison at the Adventurers' Guild since their promotion to Silver Rank. Reginald steers them toward assignments that fit their standing, and he handed them their first mandatory job: The Silent Bell.",
      'He calls the company his best investment and takes a small cut of every payout. He paid 700 gold for Coldiron Mine and False Silver, says a promotion is not his decision, and is looking into the Old Teeth for them.',
    ],
  },
  {
    name: 'Bimble',
    tag: 'Bimble & Sons, Caldmere',
    art: 'bimble',
    text: [
      "A gnome who runs a peculiar taxidermy and naturalist shop. Bimble turned Blind Fang's head into a mounted trophy for Jack and the bat's wings into a cape for Seamus.",
      "Bimble's clue is true. Bimble named Jack's pearlite armor and its Keldrun smith on sight, could not name the Winter Heart, and pointed the company to Cairn Mordun.",
    ],
  },
  {
    name: 'Jenkins',
    tag: 'The Prism Palace',
    art: 'prism-palace',
    text: [
      'Examines magical objects at the Prism Palace. Jenkins helped the company assess what they brought back from the goblin hoard.',
      'Jenkins named the Winter Heart and offered 7,000 gold for it, more if Master Aurelius, who is away, came back. The company called it a lowball.',
    ],
  },
  {
    name: 'Urso',
    tag: 'Innkeeper',
    art: 'innkeeper-and-goose',
    text: ['An innkeeper, and the keeper of a goose named Brynhildr. Which inn he keeps has not been recorded yet.'],
  },
  {
    name: 'Doric',
    tag: 'The mining town',
    text: ["Recognized the company from the Guild's order when they arrived in Keldrun, and walked them to the mouth of the haunted mine. Afterward his scouts told him what happened to the slatebacks, and he asked only that their pearls be made into armor."],
  },
  {
    name: 'Jorik',
    tag: 'The mining company',
    text: ['Told the company that anything found in the mine remains the mining company\'s property. The company filled their pockets with quartz anyway.'],
  },
  {
    name: 'Guzzard',
    tag: 'The funny goblin',
    text: ["A goblin the warren's own goblins were holding prisoner. The company freed him in Session Three, he made them laugh, and he left the warren with them.", "Left alone in the company's suite, he ate one of Blind Fang's eggs. He is cleaning it up in a doily apron, for something shiny."],
  },
  {
    name: 'Bruno',
    tag: 'Frostlass Pastures',
    text: ["Drives the wagon for the dairy whose S-rank cream leaves a mustache and a little heroic inspiration. Tobin Rook's men threw him in a cellar for asking whether they were really from the Guild. The company got him out, and he gave them Bova's Bell, which has been in his family for generations."],
  },
  {
    name: 'Tobin Rook',
    tag: 'In Guild custody',
    text: ["A halfling who was Wonnelly's lieutenant in the city guard. He ran a fake Guild toll station on an old road off the Caldmere road, with a knockoff insignia and a ledger of everyone who paid. He surrendered to Wonnelly."],
  },
  {
    name: 'Vera and Company 214',
    tag: 'Another Guild company',
    text: ["Vera leads another of the Guild's companies. With her are Lily, a healer; Torque, who can build a wagon out of wreckage; Brent, a rogue; and a blink dog. They rescued a family from Tobin's cellar on The Empty House contract and left the company out of their report."],
  },
  {
    name: 'The smith of Cairn Mordun',
    tag: 'The Old Teeth, by rumor',
    text: ['An undead smith said to forge primordial relics, his soul bound to the anvil. His hammer can be heard all through the Old Teeth, day and night. Nobody goes there.'],
  },
  {
    name: 'The elven Guild clerk',
    tag: 'Freed from the Goblin Warren',
    text: ['A young clerk of the Guild, badly traumatized by captivity. The company brought the survivor safely back to the Guild.'],
  },
  {
    name: 'The druid of the Greybough',
    tag: 'Ashmere',
    text: [
      "One of the druids investigating the corruption spreading through the Greybough. Valith left one of Blind Fang's eggs in the druid's care.",
    ],
  },
  {
    name: 'King Aldric',
    tag: 'Ruler of Altheim',
    text: ['The aging king of Altheim. He has no heir.'],
  },
  {
    name: 'High King Hrothgar',
    tag: 'The fallen Giant King',
    text: [
      'Led the frost giants against Altheim generations ago and was driven back into the mountains. His great axe still stands as a monument, with his warning: the giants will return when Altheim forgets its unity.',
    ],
  },
];

export const bestiary: Entry[] = [
  {
    name: 'Blind Fang',
    tag: 'Slain in White Elk Vale',
    art: 'blind-fang',
    text: [
      'An enormous scarred female bat, far larger than others of her kind, with thick gray fur around her neck and a ruined eye whose scar gave her her name.',
      "Her lair held three furry white eggs: her own young, not yet hatched. The company carried all three away, and Guzzard has since eaten one.",
    ],
  },
  {
    name: 'Giant Bat',
    tag: 'White Elk Vale',
    art: 'giant-bats',
    text: ["Four of them descended on the company in White Elk Vale, the first wave before Blind Fang herself."],
  },
  {
    name: 'Wolves and Dire Wolves',
    tag: 'The Fallen Timber',
    art: 'wolves',
    text: ['A pack of ordinary wolves led by larger, far more dangerous dire wolves attacked the workers at a timber operation on the road to Caldmere.'],
  },
  {
    name: 'Goblins of the Warren',
    tag: 'Near the silent waystation',
    art: 'goblin-warren',
    text: [
      'A surprisingly organized community with traps, barracks, kennels, a kitchen, and tunnels. They raided a Guild waystation, laid a false trail, took prisoners, and hung the stolen Guild bell over their fighting pit.',
    ],
  },
  {
    name: 'The Goblin Chieftain',
    tag: 'At large',
    art: 'goblin-chieftain',
    text: [
      'Escaped the fall of his warren through a hidden route with his surviving consort or consorts and several juveniles. Seamus and Cocoa could not catch him. He has every reason to remember the company.',
    ],
  },
  {
    name: 'Slatebacks',
    tag: 'The mountain shrine',
    text: ["Short-legged, low-built creatures whose tails grow a pearl. The company killed a family of them at a mountain shrine, and dwarven scouts saw it. When a slateback dies naturally, the dwarves make its pearl into armor by ceremony, and Jack wears theirs now."],
  },
  {
    name: 'Frost Mephits',
    tag: 'The dwarven mine',
    text: ['Small, strange elementals of ice haunting a dwarven mine. The dwarves who worked it took them for poltergeists and were afraid to go below. The company fought them on the first level, and Valith incinerated two more at the door of Auril\'s shrine.'],
  },
  {
    name: 'White Fang',
    tag: "Slain at Auril's shrine",
    text: [
      'A great white wolf, nearly as tall on all fours as Cocoa, that serves the ice goddess Auril and guards her treasure in the mine. It runs across sheet ice as if it were stone, and its breath is a killing cold that dropped Seamus in one blast.',
      'It fell in the end. Jack wears a strip of its fur at the collar.',
    ],
  },
  {
    name: 'The Cultists of Auril',
    tag: "Auril's shrine",
    text: [
      'Two zealots dressed for the cold in furs and pale blue, so alike they might have been twins, and a frost speaker with a staff and an ornate necklace who could raise a blinding sphere of snow with a word. They claimed the mine for Auril, whose sign supersedes all dwarven contracts.',
      "Jack and Wonnelly killed the first zealot. Valith's fireball accounted for the other two. They had been chiseling through the ice toward the Winter Heart, and the last of them told the company it was not worthy of it.",
    ],
  },
  {
    name: 'Frost Giants',
    tag: 'Beyond the Spine of the World',
    text: ['Invaded Altheim generations ago under High King Hrothgar and were driven back into the mountains. They have not been seen since.'],
  },
];

export const questions = [
  "What will hatch from Blind Fang's eggs, and what will her young make of the people who killed their mother?",
  'What is happening within the Greybough?',
  'What became of the goblin chieftain and those who escaped with him?',
  'What other forces were connected to the events surrounding the Silent Bell?',
  "What does Auril want with the Winter Heart, and will her followers come looking for it?",
  'Whose laughter echoes in the glowing cracks of the frozen level, and why did it sound familiar to Seamus?',
  'What is the glowing water Seamus carries in his canteen?',
  'What would the smith of Cairn Mordun make of the Winter Heart, and what would he ask in return?',
  'What does Alistair Vale of House Dawn want badly enough to pay for a covenant contract?',
  "What happened to the apprentice at Zahara's Glassworks?",
  'Where is Master Aurelius?',
  'Who will rule when King Aldric, who has no heir, is gone?',
  'Will the Four Houses stay united?',
  'Will the frost giants come down from the mountains again?',
];
