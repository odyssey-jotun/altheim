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
    ],
  },
  {
    name: 'Bimble',
    tag: 'Bimble & Sons, Caldmere',
    art: 'bimble',
    text: [
      "A gnome who runs a peculiar taxidermy and naturalist shop. Bimble turned Blind Fang's head into a mounted trophy for Jack and the bat's wings into a cape for Seamus.",
    ],
  },
  {
    name: 'Jenkins',
    tag: 'The Prism Palace',
    art: 'prism-palace',
    text: [
      'Examines magical objects at the Prism Palace. Jenkins helped the company assess what they brought back from the goblin hoard.',
    ],
  },
  {
    name: 'Guzzard',
    tag: 'Freed from the Goblin Warren',
    text: ['One of the prisoners the company freed from the Goblin Warren. Guzzard left the warren with the adventurers.'],
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
      'One of the druids investigating the corruption spreading through the Greybough. Valith left one of the three white eggs in the druid’s care.',
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
      'Her lair held three furry white eggs. What will hatch from them is still unknown.',
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
    name: 'Frost Giants',
    tag: 'Beyond the Spine of the World',
    text: ['Invaded Altheim generations ago under High King Hrothgar and were driven back into the mountains. They have not been seen since.'],
  },
];

export const questions = [
  "What exactly are the strange white eggs recovered from Blind Fang's cave?",
  'What is happening within the Greybough?',
  'What became of the goblin chieftain and those who escaped with him?',
  'What other forces were connected to the events surrounding the Silent Bell?',
  'Who will rule when King Aldric, who has no heir, is gone?',
  'Will the Four Houses stay united?',
  'Will the frost giants come down from the mountains again?',
];
