import {
  LevelMetadata,
  PolaroidMemory,
  OpenWhenLetter,
  VibeType,
  BirthdayProgress,
  ConstellationStarNode,
  PerfectDayPhase,
  InsideJokeQuestion,
  TelepathyQuestion,
  SecretCipherConfig,
  Level16Data,
  Level17Data,
  Level18Data,
  Level19Data,
  Level20Data,
  Level21Data,
} from '../types';

export const BIRTHDAY_CONFIG = {
  recipientName: 'Khush',
  milestoneTitle: '21st',
  totalLevels: 21,
  defaultSongTitle: 'Song for You',
  defaultSongFile: '/assets/music/our-song.mp3',
  defaultPuzzleImage: '/assets/images/puzzle.jpg',
  fallbackPuzzleImage: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=800&auto=format&fit=crop',
};

export const INITIAL_PROGRESS: BirthdayProgress = {
  completedLevels: [],
  unlockedLevels: [1],
  mood: 'cute',
  openedLetters: [],
  revealedClues: {},
};

export const VIBE_CAPTIONS: Record<VibeType, string> = {
  cute: '"Soft giggles, sweet sparkles & heart eye energy."',
  chaotic: '"Inside jokes, funny memes & spontaneous dance breaks! ⚡"',
  emotional: '"Starlit talks, nostalgic tears & the warmest hugs 🌙"',
};

export const ALL_LEVELS: LevelMetadata[] = [
  {
    id: 1,
    numberStr: '01',
    title: 'Catch the Hearts',
    subtitle: 'Tap 5 floating hearts before they drift away',
    icon: 'favorite',
    tag: 'Mini-Challenge',
    isAvailable: true,
  },
  {
    id: 2,
    numberStr: '02',
    title: 'Pick One',
    subtitle: 'One of these cards has the next clue',
    icon: 'style',
    tag: 'Chapter of Intuition',
    isAvailable: true,
  },
  {
    id: 3,
    numberStr: '03',
    title: 'Our Memory',
    subtitle: 'Which memory happened first?',
    icon: 'photo_camera',
    tag: 'Nostalgic Trivia',
    isAvailable: true,
  },
  {
    id: 4,
    numberStr: '04',
    title: 'Scratch & Reveal',
    subtitle: 'Scratch the foil card to find what is hidden',
    icon: 'auto_fix_high',
    tag: 'Mystery Sparkle',
    isAvailable: true,
  },
  {
    id: 5,
    numberStr: '05',
    title: 'Catch Me If You Can',
    subtitle: 'Click the button to continue... if you can catch it!',
    icon: 'directions_run',
    tag: 'Playful Chase',
    isAvailable: true,
  },
  {
    id: 6,
    numberStr: '06',
    title: 'Our Song',
    subtitle: 'Press play and let the music take you back',
    icon: 'music_note',
    tag: 'Vinyl Romance',
    isAvailable: true,
  },
  {
    id: 7,
    numberStr: '07',
    title: 'Piece by Piece',
    subtitle: 'Reconstruct our favorite photo memory',
    icon: 'extension',
    tag: 'Memory Puzzle',
    isAvailable: true,
  },
  {
    id: 8,
    numberStr: '08',
    title: 'Choose Your Fate',
    subtitle: 'Romantic, Chaotic, or Emotional? Pick your door',
    icon: 'meeting_room',
    tag: 'Destiny Doors',
    isAvailable: true,
  },
  {
    id: 9,
    numberStr: '09',
    title: 'Things That Remind Me of You',
    subtitle: 'Tap the little everyday wonders that scream you',
    icon: 'local_florist',
    tag: 'Little Joys',
    isAvailable: true,
  },
  {
    id: 10,
    numberStr: '10',
    title: 'Our Timeline',
    subtitle: 'From the beginning to today and forever',
    icon: 'schedule',
    tag: 'The Story So Far',
    isAvailable: true,
  },
  // Levels 11-15 (Act III)
  {
    id: 11,
    numberStr: '11',
    title: 'Our Constellation',
    subtitle: 'Somehow, all these little moments became us. ✨',
    icon: 'star',
    tag: 'Act III',
    isAvailable: true,
  },
  {
    id: 12,
    numberStr: '12',
    title: 'Build Your Perfect Day',
    subtitle: 'If we had one unhurried, magical day together with zero interruptions...',
    icon: 'favorite',
    tag: 'Act III',
    isAvailable: true,
  },
  {
    id: 13,
    numberStr: '13',
    title: 'The Inside Joke Test',
    subtitle: "Let's see how well you remember our nonsense. ♡",
    icon: 'celebration',
    tag: 'Act III',
    isAvailable: true,
  },
  {
    id: 14,
    numberStr: '14',
    title: "Guess What I'm Thinking",
    subtitle: "Okay... mind reader. Let's see what you've got. ♡",
    icon: 'psychology',
    tag: 'Act III',
    isAvailable: true,
  },
  {
    id: 15,
    numberStr: '15',
    title: 'The Secret Code',
    subtitle: "There's something hidden here... can you decode it? ♡",
    icon: 'lock',
    tag: 'Act III',
    isAvailable: true,
  },
  {
    id: 16,
    numberStr: '16',
    title: 'Letters From Me',
    subtitle: 'Handwritten whispers sealed in digital wax',
    icon: 'mail',
    tag: 'Act IV',
    isAvailable: true,
  },
  {
    id: 17,
    numberStr: '17',
    title: 'A Little Magic',
    subtitle: 'Cast a starlight wish for the year ahead',
    icon: 'auto_awesome',
    tag: 'Act IV',
    isAvailable: true,
  },
  {
    id: 18,
    numberStr: '18',
    title: 'If You Ever Forget...',
    subtitle: 'A reminder of just how loved you truly are',
    icon: 'history_edu',
    tag: 'Act IV',
    isAvailable: true,
  },
  {
    id: 19,
    numberStr: '19',
    title: 'Our Little Movie',
    subtitle: 'The highlight reel of our favourite adventures',
    icon: 'movie',
    tag: 'Act V',
    isAvailable: true,
  },
  {
    id: 20,
    numberStr: '20',
    title: 'Almost There...',
    subtitle: 'The countdown to your final birthday surprise',
    icon: 'door_front',
    tag: 'Act V',
    isAvailable: true,
  },
  {
    id: 21,
    numberStr: '21',
    title: 'The Final Chapter',
    subtitle: 'Your grand 21st birthday grand finale ♡',
    icon: 'favorite',
    tag: 'Act VI',
    isAvailable: true,
  },
];

export const ALL_LEVELS_METADATA = ALL_LEVELS;

// Level 02: Pick One Cards Data
export const LEVEL_02_CARDS = [
  {
    id: 'sweetness',
    num: 'NO. I',
    badge: '✦',
    title: 'Sweetness',
    icon: 'favorite',
    glowColor: 'rgba(244, 114, 182, 0.4)',
    circleBg: 'bg-pink-500/20 text-pink-300 border-pink-400/40',
    isCorrect: false,
    message: 'Not this one, cutie! But your sweetness melts everything. Try another! 😌',
  },
  {
    id: 'midnight',
    num: 'NO. II',
    badge: '★',
    title: 'Midnight Mystery',
    icon: 'dark_mode',
    glowColor: 'rgba(168, 85, 247, 0.4)',
    circleBg: 'bg-purple-500/20 text-purple-300 border-purple-400/40',
    isCorrect: true,
    message: '“Check under your favorite pillow tonight!” ♡',
    subtext: 'You found the secret clue! The midnight stars aligned perfectly.',
  },
  {
    id: 'serendipity',
    num: 'NO. III',
    badge: '✦',
    title: 'Serendipity',
    icon: 'auto_awesome',
    glowColor: 'rgba(251, 191, 36, 0.4)',
    circleBg: 'bg-amber-500/20 text-amber-300 border-amber-400/40',
    isCorrect: false,
    message: 'A serendipitous attempt! Almost there, pick the mysterious one! ✨',
  },
];

// Level 03: Memory Trivia Data
export const LEVEL_03_MEMORIES = [
  {
    id: 'A',
    badge: 'A',
    title: 'Our first coffee?',
    caption: "Cozy Morning Brew ☕ Oct '23",
    doodle: 'Some memories just hit different... ♡',
    imageUrl: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=600&auto=format&fit=crop',
    isEarliest: true,
    revealText: 'Yes! That cozy warm coffee date started it all.',
  },
  {
    id: 'B',
    badge: 'B',
    title: 'That sunset?',
    caption: "MAGIC MOUNTAIN DUSK ✹ SEPT '24",
    doodle: 'The golden hour was unmatched ✨',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop',
    isEarliest: false,
    revealText: 'This sunset was unforgettable, but came a little later!',
  },
  {
    id: 'C',
    badge: 'C',
    title: 'That random library day?',
    caption: 'Quiet corners & shared glances 📖',
    doodle: 'Remember the chill in the air? ✨',
    imageUrl: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=600&auto=format&fit=crop',
    isEarliest: false,
    revealText: 'A dreamy quiet afternoon, but our coffee came first!',
  },
];

// Level 08: Choose Your Fate Doors
export const LEVEL_08_DOORS = [
  {
    id: 'romantic',
    title: 'Romantic',
    latin: 'AMOUR',
    icon: 'favorite',
    glow: 'border-pink-400/80 shadow-[0_0_25px_rgba(244,114,182,0.4)]',
    topDecoration: '🌸 🌸 🌸',
    revealText: 'Apparently you chose the soft route. ♡',
    message: 'Every love song and starlit poem was written for moments just like this with you.',
  },
  {
    id: 'chaotic',
    title: 'Chaotic',
    latin: 'COSMOS',
    icon: 'star',
    glow: 'border-purple-400/80 shadow-[0_0_25px_rgba(168,85,247,0.4)]',
    topDecoration: '✦ ⚡ ✦',
    revealText: 'I knew you would choose this one 😂',
    message: 'Spontaneous 2 AM snacks, wheezing laughter until our stomachs hurt, and our wildest memories!',
  },
  {
    id: 'emotional',
    title: 'Emotional',
    latin: 'SERENITY',
    icon: 'dark_mode',
    glow: 'border-blue-400/80 shadow-[0_0_25px_rgba(96,165,250,0.4)]',
    topDecoration: '🌙 🪻 ✨',
    revealText: "Oh... so we're getting emotional now? 🥹",
    message: 'Thank you for being my safest home, my gentlest comfort, and my absolute favorite person in this world.',
  },
];

// Level 09: Things That Remind Me of You
export const LEVEL_09_ITEMS = [
  { id: 1, name: 'Pink Lily', icon: '✦', isCorrect: true, emoji: '🌸' },
  { id: 2, name: 'Warm Latte', icon: '☕', isCorrect: true, emoji: '☕' },
  { id: 3, name: 'Favorite Books', icon: '📚', isCorrect: true, emoji: '📚' },
  { id: 4, name: 'Polaroid Snap', icon: '📷', isCorrect: true, emoji: '📷' },
  { id: 5, name: 'Kitty Friend', icon: '🐱', isCorrect: true, emoji: '🐱' },
  { id: 6, name: 'Our Songs', icon: '🎧', isCorrect: true, emoji: '🎧' },
  { id: 7, name: 'Constellation', icon: '✨', isCorrect: true, emoji: '🌌' },
  { id: 8, name: 'Day Trips', icon: '🎒', isCorrect: false, emoji: '🎒' },
  { id: 9, name: 'Bright Smile', icon: '☀️', isCorrect: false, emoji: '☀️' },
  { id: 10, name: 'Boba Dates', icon: '🧋', isCorrect: false, emoji: '🧋' },
  { id: 11, name: 'Sweet Treats', icon: '🍦', isCorrect: false, emoji: '🍧' },
  { id: 12, name: 'Our Journal', icon: '📓', isCorrect: false, emoji: '📔' },
];

// Level 10: Horizontal Timeline Milestones
export const LEVEL_10_TIMELINE = [
  {
    step: '01',
    phase: 'The Beginning',
    date: 'Spring 2023',
    title: 'The First Hello',
    caption: 'A simple conversation that turned into a universe.',
    imageUrl: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=600&auto=format&fit=crop',
    doodle: 'Where everything started ♡',
  },
  {
    step: '02',
    phase: 'Our First Chat',
    date: 'Late Nights',
    title: 'Hours Felt Like Seconds',
    caption: 'Texting until 3 AM and realizing you were special.',
    imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600&auto=format&fit=crop',
    doodle: 'Never wanting to hang up 🌙',
  },
  {
    step: '03',
    phase: 'First Date',
    date: 'Autumn Spark',
    title: 'Butterflies & Laughter',
    caption: 'Nervous hands, easy smiles, and the coziest afternoon.',
    imageUrl: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=600&auto=format&fit=crop',
    doodle: 'I knew right here ✨',
  },
  {
    step: '04',
    phase: 'More Us',
    date: 'Winter Hugs',
    title: 'Every Little Day with You',
    caption: 'Inside jokes, silly selfies, and quiet comfort.',
    imageUrl: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=600&auto=format&fit=crop',
    doodle: 'My favorite person in the world ♡',
  },
  {
    step: '05',
    phase: 'Today',
    date: 'Your 21st Birthday',
    title: 'Happy Birthday, Khush!',
    caption: '21 years of your beautiful light, and so many more ahead.',
    imageUrl: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=600&auto=format&fit=crop',
    doodle: 'Look how far we’ve come... ♡',
  },
];

// Little Keepsakes (Letters, Polaroids, Playlist)
export const OPEN_WHEN_LETTERS: OpenWhenLetter[] = [
  {
    id: 1,
    title: 'Open Right Now',
    preview: 'To the birthday girl...',
    content: 'Happy 21st Birthday! Today is all about celebrating you, your kindness, and the magic you bring into every room you enter.',
    icon: 'cake',
  },
  {
    id: 2,
    title: 'Open When You Need a Smile',
    preview: 'Remember that silly face...',
    content: 'If you ever feel down, remember the time we couldn’t stop laughing until tears were streaming down our faces. You deserve endless joy.',
    icon: 'sentiment_very_satisfied',
  },
  {
    id: 3,
    title: 'Open When You Miss Me',
    preview: 'Close your eyes...',
    content: 'No matter the distance, you are always the first thought on my mind and the warmth in my heart.',
    icon: 'favorite',
  },
  {
    id: 4,
    title: 'Open When You Doubt Yourself',
    preview: 'You are so capable...',
    content: 'You are stronger, smarter, and more resilient than you will ever give yourself credit for. I believe in you endlessly.',
    icon: 'star',
  },
  {
    id: 5,
    title: 'Open on a Rainy Afternoon',
    preview: 'Grab a blanket and tea...',
    content: 'Rainy days are best spent cozying up, listening to our favorite tunes, and watching the drops on the window. Sending you the warmest hug.',
    icon: 'water_drop',
  },
  {
    id: 6,
    title: 'Open When You Need a Huge Hug',
    preview: 'Virtual bear hug incoming...',
    content: 'Wrap your arms around yourself and squeeze tight. That is 100% of my love reaching you right this second.',
    icon: 'volunteer_activism',
  },
  {
    id: 7,
    title: 'Open Before You Sleep',
    preview: 'Sweet dreams...',
    content: 'Leave all your worries behind today. Rest easy knowing tomorrow brings another day of your wonderful existence.',
    icon: 'bedtime',
  },
];

export const POLAROID_MEMORIES: PolaroidMemory[] = [
  {
    id: 'p1',
    title: 'Starlit Walks',
    date: 'Oct 14',
    caption: 'City skyline under midnight hues',
    imageUrl: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=600&auto=format&fit=crop',
    doodle: 'Our favorite night ♡',
  },
  {
    id: 'p2',
    title: 'Cozy Cafe Mornings',
    date: 'Nov 02',
    caption: 'Two cups of coffee and endless stories',
    imageUrl: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=600&auto=format&fit=crop',
    doodle: 'Extra cinnamon always ✨',
  },
  {
    id: 'p3',
    title: 'Golden Sunset Hours',
    date: 'Dec 18',
    caption: 'Golden light reflecting in your eyes',
    imageUrl: 'https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?q=80&w=600&auto=format&fit=crop',
    doodle: 'Pure magic ♡',
  },
  {
    id: 'p4',
    title: 'Spontaneous Road Trips',
    date: 'Jan 22',
    caption: 'Singing off-key with the windows rolled down',
    imageUrl: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=600&auto=format&fit=crop',
    doodle: 'Best playlist ever 🚗',
  },
];

// ==========================================
// LEVEL 11: OUR CONSTELLATION DATA
// ==========================================
export const LEVEL_11_STARS: ConstellationStarNode[] = [
  { id: 1, cx: 300, cy: 156, topPct: '26%', leftPct: '30%', name: 'Star 1' },
  { id: 2, cx: 400, cy: 108, topPct: '18%', leftPct: '40%', name: 'Star 2' },
  { id: 3, cx: 500, cy: 168, topPct: '28%', leftPct: '50%', name: 'Star 3' },
  { id: 4, cx: 600, cy: 108, topPct: '18%', leftPct: '60%', name: 'Star 4' },
  { id: 5, cx: 700, cy: 156, topPct: '26%', leftPct: '70%', name: 'Star 5' },
  { id: 6, cx: 640, cy: 312, topPct: '52%', leftPct: '64%', name: 'Star 6' },
  { id: 7, cx: 500, cy: 456, topPct: '76%', leftPct: '50%', name: 'Star 7' },
];

export const LEVEL_11_KEEPSAKE = {
  polaroidTitle: 'Midnight Stargazing ♡',
  coordinates: 'COORDINATES: US • 02:14 AM',
  imageUrl: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=800&auto=format&fit=crop',
  revealedTitle: '“Even the stars know our story. ♡”',
  revealedStory:
    'Before we met, constellations were just random coordinates in cold space. Now, every single bright point reminds me of an evening we laughed until 3 AM, or shared headphones under an umbrella in the rain.',
};

// ==========================================
// LEVEL 12: BUILD YOUR PERFECT DAY DATA
// ==========================================
export const LEVEL_12_PHASES: PerfectDayPhase[] = [
  {
    id: 'morning',
    phaseNumber: 'Phase 01 • Morning',
    name: 'Morning',
    icon: 'light_mode',
    tagEmoji: '☀',
    doodle: 'slow mornings & sweet smells',
    defaultSelectedId: 'breakfast',
    options: [
      {
        id: 'sleepin',
        emoji: '😴',
        title: 'Sleep in',
        subtitle: 'Warm blankets & no alarms',
        chipLabel: '😴 Sleep in',
      },
      {
        id: 'breakfast',
        emoji: '🥞',
        title: 'Breakfast date',
        subtitle: 'Hot maple syrup & fluffy pancakes',
        chipLabel: '🥞 Breakfast date',
      },
      {
        id: 'walk',
        emoji: '🌿',
        title: 'Morning walk',
        subtitle: 'Crisp air, holding hands',
        chipLabel: '🌿 Morning walk',
      },
    ],
  },
  {
    id: 'afternoon',
    phaseNumber: 'Phase 02 • Afternoon',
    name: 'Afternoon',
    icon: 'local_cafe',
    tagEmoji: '☕',
    doodle: 'iced vanilla lattes & lazy talks',
    defaultSelectedId: 'cafe',
    options: [
      {
        id: 'cafe',
        emoji: '☕',
        title: 'Café & chill',
        subtitle: 'Window nook, pastries & giggles',
        chipLabel: '☕ Café & chill',
      },
      {
        id: 'movie',
        emoji: '🎬',
        title: 'Movie marathon',
        subtitle: 'Blanket fort & popcorn',
        chipLabel: '🎬 Movie marathon',
      },
      {
        id: 'adventure',
        emoji: '🚲',
        title: 'Random adventure',
        subtitle: 'Getting lost on purpose',
        chipLabel: '🚲 Random adventure',
      },
    ],
  },
  {
    id: 'evening',
    phaseNumber: 'Phase 03 • Evening',
    name: 'Evening',
    icon: 'wb_twilight',
    tagEmoji: '🌇',
    doodle: 'when the city turns pink and purple',
    defaultSelectedId: 'dinner',
    options: [
      {
        id: 'sunset',
        emoji: '🌅',
        title: 'Golden sunset',
        subtitle: 'Rooftop view or quiet hillside',
        chipLabel: '🌅 Golden sunset',
      },
      {
        id: 'dinner',
        emoji: '🍝',
        title: 'Cozy dinner',
        subtitle: 'Candlelight, pasta & playlist',
        chipLabel: '🍝 Cozy dinner',
      },
      {
        id: 'citywalk',
        emoji: '🌃',
        title: 'City night walk',
        subtitle: 'Streetlights & ambient noise',
        chipLabel: '🌃 City night walk',
      },
    ],
  },
  {
    id: 'night',
    phaseNumber: 'Phase 04 • Night',
    name: 'Night',
    icon: 'bedtime',
    tagEmoji: '🌙',
    doodle: 'the world asleep, just us',
    defaultSelectedId: 'stargazing',
    options: [
      {
        id: 'stargazing',
        emoji: '✨',
        title: 'Stargazing',
        subtitle: 'Hood of the car & constellations',
        chipLabel: '✨ Stargazing',
      },
      {
        id: 'drive',
        emoji: '🚗',
        title: 'Late night drive',
        subtitle: 'Empty highway & deep playlists',
        chipLabel: '🚗 Late night drive',
      },
      {
        id: 'talk',
        emoji: '🕯',
        title: 'Stay in & talk',
        subtitle: 'Whispered secrets until 3 AM',
        chipLabel: '🕯 Stay in & talk',
      },
    ],
  },
];

export const LEVEL_12_KEEPSAKE = {
  polaroidTitle: 'Morning Glow',
  caption: 'every second with you',
  imageUrl: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?q=80&w=800&auto=format&fit=crop',
  whisperQuote: '“Honestly... whatever we pick, wherever we end up, I\'d choose a quiet day with you anyway. ♡”',
  whisperBody: "It's never really about the place or the plan. It's the way you make the simplest hours feel like home.",
};

// ==========================================
// LEVEL 13: THE INSIDE JOKE TEST DATA
// ==========================================
export const LEVEL_13_QUESTIONS: InsideJokeQuestion[] = [
  {
    id: 1,
    promptNumber: 'PROMPT #01',
    question: 'What is our official unofficial signature activity?',
    category: 'OUR PRIVATE LORE',
    sweetPoints: '+100 SWEET POINTS',
    options: [
      {
        key: 'A',
        text: 'Arguing over what movie to watch',
        subtext: '(for 45 minutes until we fall asleep) 🍿',
        isCorrect: false,
      },
      {
        key: 'B',
        text: 'Making funny voices for random pets',
        subtext: '(they definitely have British accents) 🐶',
        isCorrect: true,
        badge: 'UNANIMOUS AGREEMENT',
      },
      {
        key: 'C',
        text: 'Going to the grocery store just for snacks',
        subtext: '(leaving with $40 of treats) 🛒',
        isCorrect: false,
      },
      {
        key: 'D',
        text: 'Sending each other reels while in the same room',
        subtext: '(and laughing together) 📱',
        isCorrect: false,
      },
    ],
    correctReaction: {
      emoji: '😂',
      title: 'You know us so well ♡',
      text: 'The voices are canon lore now. Nobody can convince us otherwise!',
      loreScore: '1 / 1 recall!',
    },
  },
  {
    id: 2,
    promptNumber: 'PROMPT #02',
    question: 'What phrase instantly reminds you of us?',
    category: 'OUR PRIVATE LORE',
    sweetPoints: '+100 SWEET POINTS',
    options: [
      {
        key: 'A',
        text: '“Just 5 more minutes”',
        subtext: '(turns into 2 hours) ⏰',
        isCorrect: false,
      },
      {
        key: 'B',
        text: 'The legendary 2 AM snack debate 🍟',
        subtext: '',
        isCorrect: true,
        badge: 'DEFINITIVE UNANIMOUS TRUTH',
      },
      {
        key: 'C',
        text: '“I\'m not sleepy, you are!”',
        subtext: '(audible yawn follows) 😴',
        isCorrect: false,
      },
      {
        key: 'D',
        text: 'That accidental 3-hour phone call',
        subtext: 'about literally nothing 📱',
        isCorrect: false,
      },
    ],
    correctReaction: {
      emoji: '😂',
      title: 'You actually remembered ♡',
      text: 'Specifically how you argued that cold leftover fries are an acceptable gourmet midnight breakfast.',
      loreScore: '2 / 2 perfect recall!',
    },
  },
];

export const LEVEL_13_KEEPSAKE = {
  polaroidTitle: '"That midnight snack incident" ✨',
  imageUrl: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=600&auto=format&fit=crop',
  whisperBubble: 'Okay... you know us pretty well. ♡',
  stickyNote: 'No cheating! I know you know 👀♡',
  recordTime: '00:02:14 RECORD TIME',
};

// ==========================================
// LEVEL 14: GUESS WHAT I'M THINKING DATA
// ==========================================
export const LEVEL_14_DATA: TelepathyQuestion = {
  roundNumber: 1,
  totalRounds: 3,
  roundTitle: 'Round 1 of 3 — The Midnight Cravings',
  thoughtHeading: "What am I thinking about right now?",
  thoughtHint: "Tune in to my frequency... it involves dusk, cozy quiet, and your smile.",
  successHint: "YES! That quiet night in October under the blanket looking at the constellations! ♡",
  options: [
    {
      id: 'latte',
      emoji: '☕',
      optionLabel: 'Option A',
      title: 'Warm Latte',
      description: 'With double vanilla syrup & oat milk.',
      isCorrect: false,
    },
    {
      id: 'stargazing',
      emoji: '🌙',
      optionLabel: 'Option B',
      title: 'Stargazing with You',
      description: 'Wrapped in that giant plush fleece blanket.',
      isCorrect: true,
      solvedTag: 'WAIT... HOW DID YOU KNOW?! 😭♡',
    },
    {
      id: 'song',
      emoji: '🎧',
      optionLabel: 'Option C',
      title: 'That Song on Repeat',
      description: 'The indie acoustic melody from our car ride.',
      isCorrect: false,
    },
    {
      id: 'lilies',
      emoji: '🌸',
      optionLabel: 'Option D',
      title: 'Pink Lilies',
      description: 'Fresh blooms sitting in the morning window.',
      isCorrect: false,
    },
  ],
  polaroid: {
    title: '“The night we watched Orion rise.”',
    date: 'October 14th • 11:42 PM',
    imageUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop',
  },
};

// ==========================================
// LEVEL 15: THE SECRET CODE CIPHER DATA
// ==========================================
export const LEVEL_15_CIPHER: SecretCipherConfig = {
  chapter: 'Constellations',
  title: 'The Secret Code',
  subtitle: "There's something hidden here... can you decode it? ♡",
  translationTable: [
    { symbol: '✦', letter: 'Y', colorClass: 'text-amber-300' },
    { symbol: '🌸', letter: 'O', colorClass: 'text-pink-300' },
    { symbol: '🌙', letter: 'U', colorClass: 'text-purple-300' },
    { symbol: '☕', letter: 'A', colorClass: 'text-amber-300' },
    { symbol: '💫', letter: 'R', colorClass: 'text-purple-300' },
    { symbol: '🗝', letter: 'E', colorClass: 'text-yellow-200' },
    { symbol: '♡', letter: 'M', colorClass: 'text-pink-300' },
    { symbol: '✨', letter: 'I', colorClass: 'text-amber-300' },
    { symbol: '🪐', letter: 'N', colorClass: 'text-purple-300' },
    { symbol: '💖', letter: 'E', colorClass: 'text-pink-300' },
  ],
  codedWords: [
    [
      { symbol: '✦', letter: 'Y' },
      { symbol: '🌸', letter: 'O' },
      { symbol: '🌙', letter: 'U' },
    ],
    [
      { symbol: '☕', letter: 'A' },
      { symbol: '💫', letter: 'R' },
      { symbol: '🗝', letter: 'E' },
    ],
    [
      { symbol: '♡', letter: 'M' },
      { symbol: '✨', letter: 'I' },
      { symbol: '🪐', letter: 'N' },
      { symbol: '💖', letter: 'E' },
    ],
  ],
  decodedAnswer: 'YOU ARE MINE',
  hint: 'psst: check the 1st symbol (✦=Y) and the 3rd (🌙=U)...',
  revelationQuote:
    '“In a universe with billions of stars and endless possibilities, meeting you was my favorite miracle. Happy 21st, my heart.”',
  revelationSubtitle: 'Memory Cipher #15 Solved',
  polaroid: {
    imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop',
    caption: 'Desk at 11:11 PM',
    archiveTag: '♡ archive',
  },
};

// ==========================================
// LEVEL 16: LETTERS FROM ME DATA
// ==========================================
export const LEVEL_16_DATA: Level16Data = {
  chapter: '16',
  title: 'Letters From Me ♡',
  subtitle: 'For all the little moments when you need me. Pick an envelope to unlock reassurance, warmth, and memory.',
  gentleNote: '“Wherever you are, whatever kind of day you\'re having, I hope you always remember this: you are loved. ♡”',
  deskTitle: 'The Nightstand Desk',
  deskSubtitle: 'Hand-sealed wax envelopes • Keep indefinitely',
  letters: [
    {
      id: 'sad',
      envelopeNumber: 'Envelope No. 01',
      title: '“Open when you\'re sad 🌧️”',
      subtitle: 'Sealed with wax',
      stampText: 'POST 21',
      stampIcon: 'cloud',
      dateStr: 'Rainy Dusk • A Quiet Hug',
      p1: 'Hey you. It\'s okay to have days where everything feels overwhelming or a little gray. You don\'t have to carry the whole world on your shoulders today.',
      p2: '“Cry if you need to, rest without guilt, and know that tomorrow is a gentle blank canvas waiting for your softest touch. ♡”',
      p3: 'Put your favorite warm socks on, grab that blanket you love, and know that you are deeply cherished, exactly as you are.',
    },
    {
      id: 'miss',
      envelopeNumber: 'Envelope No. 02',
      title: '“Open when you miss me 🌙”',
      subtitle: 'Recently read',
      stampText: 'MOON 99',
      stampIcon: 'bedtime',
      isUnlockedDefault: true,
      dateStr: 'Midnight • Paris time',
      p1: 'Dearest, whenever this distance feels a little too heavy, pause and remember how many small things brought us here. The world is vast, but you and I are anchored under this very same starlit sky.',
      p2: '“A tender reminder that no storm lasts forever and my hand is always holding yours, even across miles. ♡”',
      p3: 'Take a deep breath, drink some water, and close your eyes. I am sending you the warmest, longest hug right this very second.',
    },
    {
      id: 'smile',
      envelopeNumber: 'Envelope No. 03',
      title: '“Open when you need a smile ☕”',
      subtitle: 'Sealed with wax',
      stampText: 'CAFE 07',
      stampIcon: 'coffee',
      dateStr: 'Sunny Morning • Cafe Table #4',
      p1: 'Remember that goofy face we made in the photo booth? Or the time we laughed so hard at dinner that the waiter looked over worriedly? That laughter is ours forever.',
      p2: '“Your smile is my favorite constellation in this whole wide universe. Never forget how much light you bring into every room. ✨”',
      p3: 'Go play that silly song we dance to in the kitchen and dance around like no one is watching!',
    },
    {
      id: 'doubt',
      envelopeNumber: 'Envelope No. 04',
      title: '“Open when you doubt yourself ✨”',
      subtitle: 'Sealed with wax',
      stampText: 'STAR 42',
      stampIcon: 'flare',
      dateStr: 'Quiet Hours • A Believer in You',
      p1: 'Stop right there! I know that quiet little voice whispering doubts in your mind, but let me be louder: you are brilliant, capable, and extraordinarily brave.',
      p2: '“Look back at every single challenge you thought you couldn\'t survive—you overcame every one of them with grace. ♡”',
      p3: 'Trust your instincts. Take the next little step. I believe in you with every fiber of my being.',
    },
    {
      id: 'loved',
      envelopeNumber: 'Envelope No. 05',
      title: '“Open when you need to remember how loved you are 🌸”',
      subtitle: 'Sealed with wax',
      stampText: 'ROSE 21',
      stampIcon: 'local_florist',
      dateStr: 'Always & Forever • Eternal',
      p1: 'If I could give you one gift, it would be the ability to see yourself through my eyes for just ten seconds. You would see pure wonder.',
      p2: '“You are my favorite thought in the morning, my sweet solace at night, and my greatest adventure every day in between. ♡”',
      p3: 'You do not have to earn love; you are love itself. Never doubt how irreplaceable you are to me.',
    },
  ],
  polaroid: {
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD7n_LueRlQuHO_b5FiWFM72cjPv8ubR6PJzGpvuGl0PYQnOWiNaY7d5G9GhMM1h5PV6xGmYNl1UplpzN_pPi4k8vj5oMN-HaSvvgvY7okxwf93RnJ3KkCR3DryZKp-e7GZDfj9lF6KMErbAz_MsPgY-EZXCXvsmPubRaaM1eg09vDOFi-5cfQVk34pGdTNkNNxBEvQ_UrEi330zjBFIYK5M3uSnGvdBJTaYsCAUBdwtFAh957XCvuz',
    quote: '“Keep these in your heart forever.”',
    keepsakeTag: 'Keepsake Box #16',
  },
};

// ==========================================
// LEVEL 17: A LITTLE MAGIC DATA
// ==========================================
export const LEVEL_17_DATA: Level17Data = {
  chapter: '17',
  title: 'A Little Magic ✨',
  subtitle: 'Let’s leave a little magic here for you. ✨',
  instruction: 'Catch the little stars.',
  initialCollectedCount: 4,
  totalStars: 7,
  wanderingStars: [
    {
      id: 5,
      color: 'text-amber-300',
      icon: 'star',
      top: '3rem',
      left: '3rem',
      duration: '3.2s',
    },
    {
      id: 6,
      color: 'text-pink-300',
      icon: 'hotel_class',
      top: '7rem',
      right: '4rem',
      duration: '2.6s',
    },
    {
      id: 7,
      color: 'text-purple-300',
      icon: 'auto_awesome',
      bottom: '4rem',
      left: '7rem',
      duration: '3.8s',
    },
  ],
  polaroid: {
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBdkyzFlD-5dAjdcbS0ixdSiZuoqHCes6KZCEkGrA3z06bSCAvVPIITZh7FcigBZ1UzCo4_u_FN1UHPs4jiOPqNNLY9VUdZf-Ne6eOMahSXvF9IKxTz68SBKQrm6yDS79wdYyQ7hwD5AY5yhUEzs-k-3HdE1kRFvmGBlbXJaCSz4q1rxZhO9t3dhzVmyuKjHHGrDHfWWpRS8rEaEPFJWr8MxKHD0n_geVd5RvR3MNeRU3Rrp3YQzNtb',
    title: 'Keeper of Wishes',
    quote: '“One little jar of magic. Just for you. ♡”',
    sealDate: 'Sealed with starlight on Level 17',
  },
};

// ==========================================
// LEVEL 18: IF YOU EVER FORGET... DATA
// ==========================================
export const LEVEL_18_DATA: Level18Data = {
  chapter: '18',
  title: 'If You Ever Forget... ♡',
  subtitle: 'Come back here whenever you need a reminder. ♡',
  albumTitle: 'Our Open Keepsake Album',
  memories: [
    {
      id: 'stars',
      type: 'photo',
      title: 'Remember this... 📸',
      subtext: 'Under the stars with you',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCneNEnRXaowzFy3YHJzuJ7cMZN6d30MWIkgeeE8VjPBHFGxBIahsbgayAISG0L9T7FuGR9Wo-YTiJqEmTX8fAz7637QGhIHWq4n4axtemY73UO-dzxj0gr-MwNAyFe6iUiZHLjFGp2j7DWeJX5OoxMVP6hWTmuklmEiaIBLbdvIqx7yzm6mJC6Ea349aALOTHH5K5n2vqJ0u3sI9gCvIH8CeVxcBtF4gQocA9t1zXW94jY4n4LVwC4',
      rotation: 'hover:-rotate-1',
      washiColor: 'bg-[#f8d7da]/70',
    },
    {
      id: 'laugh',
      type: 'note',
      title: 'Remember that laugh... ☕',
      quote: '“When you laughed so hard coffee spilled everywhere and we couldn\'t stop grinning.”',
      subtext: 'That corner table table #4 • Always joyful',
      rotation: 'hover:rotate-1',
      washiColor: 'bg-[#e2d5c3]/80',
    },
    {
      id: 'seaside',
      type: 'photo',
      title: 'Remember that day... 🌊',
      subtext: 'Seaside Breeze Train',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCiwUeh29Lw-X2YQiHjLLSN61jIAS6kjvmFZ9lfjGMaF_qIByVRFxLmtcal10_jfbIl192v9ve25vyu-g3LlPwvB3VE1hOS7yM4DQnlyodrWLAk7QT2pPB1mG5upzlYFb5xvEOp7bOkHQ1n92fTYPFn2dGpZi1waODh4GUmDL24iBN0Xcsh0Caw6vyT1Ui53t8KELD9ELcGvyk2NUW3c-Bq0LWQ4BnhZwpqLJmLRSJsmNdw6uY2A5Lc',
      rotation: 'hover:-rotate-1',
      washiColor: 'bg-[#c8d6af]/60',
    },
    {
      id: 'journey',
      type: 'milestone',
      title: 'Remember how far we\'ve come... 🛤️',
      quote: 'Through every twist, late-night chat, and quiet milestone — our roots run deeper every single day.',
      subtext: 'Step by step, hand in hand',
      badge: '18',
      rotation: 'hover:rotate-2',
      washiColor: 'bg-[#f3c65c]/50',
    },
    {
      id: 'us',
      type: 'wax-banner',
      title: 'Remember us. ♡',
      quote: '“Every fragile moment was made safe the moment I met you.”',
      subtext: 'Wax Sealed • Unsealed',
    },
  ],
  finalQuote: '“And if you ever forget how much you mean to me... come back here. ♡”',
  polaroid: {
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCgyDMAioQhgBNI4kif8_toSUwMuyuC-WUjHJ3-AABIaZcTMuwpuQ_TpVUzEdBWGDwp2i869wufkLCK7GM7icY-VBrKf1dfM-GYfLkkuzRKZsTlLvI5xXWgfMCbdunaXHJ_9H1j2XzhVJhSKnMetrLhAU6T709MHwO6Y8rysT3mUI2N4NSxOs9fJBgWK_cisnQ6eZmfXiNcOgie85OHAzgGWhX0fdeQnMSDObObR5BR9fwDb11CsSJB',
    quote: '“Our quiet place — forever safe here.”',
    archiveTag: 'CHAPTER 18 • ARCHIVED',
  },
};

// ==========================================
// LEVEL 19: OUR LITTLE MOVIE DATA
// ==========================================
export const LEVEL_19_DATA: Level19Data = {
  chapter: '19',
  title: 'Our Little Movie 🎬',
  subtitle: 'Press play. This one\'s ours. 🎬',
  prodNumber: 'PROD NO. 1104 • TAKE 21',
  movieTitle: 'OUR LITTLE MOVIE',
  starring: 'Starring: You & Me ♡',
  directedBy: 'Directed by: Endless Love • Soundtrack: Our Heartbeats',
  videoUrl: '/assets/videos/our-story.mp4',
  fallbackPosterUrl:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBJm2saRu0IPYCmZx5is9Tbsddde9MlW6k5XSZozaMWY7G3_UqGJPV9lKr3UfqNUH-7bSc_IX3jEhTiZRPMV_MrNlvhmjgyI15txBpiOxKh48bG9ao9Pe34L12zLILCZ_opdbzMImnhWrbFnrHxizngFSszjHfSuOqExc_ubeDkB2McFegw9TILuKGWWZ0wAKCi5INl01gSeO2h7t8S4bsg9g9_fzaKHV_8UscZRg6XxlFCWJbsHORO',
  stillFrames: [
    {
      id: 'frame1',
      roll: 'ROLL #04',
      frame: 'FRAME 16',
      title: 'the first late coffee',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuA8tu0oAzRSrsxQ5KNfVkiNo4u7SVjkXNNn8pZ0YCxReteXcbyPJjr6DN5h74QuOadPlYe9dqA-V97VQ5_muSQU8m-AdGJIFjZ3C_eYlJKciQqai9lY5TLrP6pFy6zOC1dfYlFd03hDhjvbjOsZtazEvZKY2iz2J69_9qius-3w2bFKk0Oe5xOu4AsVqA4QsCFldEHghp_DMeSCdhCci_JZgtXGS3HCDxxLbiiqbS-B7ChIs7SyOQgO',
    },
    {
      id: 'frame2',
      roll: 'ROLL #07',
      frame: 'FRAME 18',
      title: 'midnight seaside walk',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCmNcJBUv6gVbWH_zQ6xRTJleJNQEJD7nDY4ihUGq_OH5xN5Nlmu4EOo0kAT-EQ7lS_n3ABtZ_Ea663dGDr0QpuaqHIx9gqhcMpKJA6CxQA4jeZ9Fm4JO2LvllzCk4eeJ5MdtWiIr0DVDMyy3FdIOICWMAbm9THV2ApSpZmxozGx2Yi8v9Cq6OdM8d3yqPc_-VCk8BTakVG4Iu08sryseFVjiMNc5-VhdUunK81tJr5wqobO5lVYm16',
    },
    {
      id: 'frame3',
      roll: 'ROLL #09',
      frame: 'FRAME 21',
      title: 'making forever promises',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDoFsZ2-TsfDrHVujYJymCAQU7z9EOqTDygAxUN5SkaiFoWZ6wJN-9Y_KGz1Whx6WWL3EVt5pS13VfbSNjMoZ-oADMGRIWHdDw2XlySzDEp22Rz3PHhdFDCQQ6eIJTyZbX6NTdOk6oc3UGrduZvw0l1AM4qHoBC65-Ai99pa8TR1DXK7yY0B709BsKFO_aXwP7Exn1Ucc1fckCijmPtUto79S7yM0IcC0jF_X-ho1bAsQlgzIGt_9l9',
    },
  ],
  sceneDescription: 'Scene 19: Late night tea & laughter under the city lights',
  endCardTitle: 'To be continued...',
  endCardQuote: 'Because this story isn\'t finished yet. ♡',
  endCardText: 'Every second with you is my favorite scene. From quiet mornings to starry nights, we are writing a masterpiece frame by frame.',
};

// ==========================================
// LEVEL 20: ALMOST THERE... DATA
// ==========================================
export const LEVEL_20_DATA: Level20Data = {
  chapter: '20',
  title: 'Almost There... ♡',
  subtitle: 'You\'ve made it this far. One last door remains. Tap the stars below to trace our path to the starlight horizon.',
  instruction: 'Follow the lights. Tap each glowing star along the pathway.',
  targetMessage: 'you are my favorite person ♡',
  nodes: [
    { id: 0, stepStr: '01', word: 'you' },
    { id: 1, stepStr: '02', word: 'are' },
    { id: 2, stepStr: '03', word: 'my' },
    { id: 3, stepStr: '04', word: 'favorite' },
    { id: 4, stepStr: '05', word: 'person' },
    { id: 5, stepStr: '06', word: '♡', isHeart: true },
  ],
  polaroid: {
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBAEpQJAL0RPyUuqAYwGxZiRnRzq_p6QIvuj4yfTt_j90F24Yk97GVKkGqmewQqwRvZEtRR0t4YecJGxwpYMRYTN2WjU3g_bAQPywWqaj3ST-HHta_OV7fom6DZN0cp_Dpe07NqzUXQk3LGmNir_Tn3pbCFVN5qo92lpbZ7TgxchMOePgzRg2AaLYEppncTwv_fICnphRqDwMApLZIycepPTtDi1Am5qcqRB66h5Ip41WeyZVRYqk32',
    stepTag: 'Step 20/21',
    quote: '“Almost home...”',
    caption: 'Memory Captured ♡',
  },
  climaxTitle: 'Chapter Climax Unlocked',
  climaxHeading: 'You\'ve unlocked the final chapter.',
  climaxText:
    '20 levels solved. 20 memories uncovered, little jokes shared, and gentle whispers tucked into starlight. The final surprise has been waiting for this exact moment.',
};

// ==========================================
// LEVEL 21: THE FINAL CHAPTER DATA
// ==========================================
export const LEVEL_21_DATA: Level21Data = {
  title: 'The Final Chapter',
  subtitle: 'For You. The girl who makes every ordinary day feel like magic.',
  starlightQuote: '“You\'ve walked through 20 memories to get here. This one is all yours.”',
  moments: [
    { id: 1, numberStr: '01', title: 'Hearts', tag: 'The Spark', icon: 'favorite', iconColor: 'text-pink-300', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAl5Lxdu01OJtcgrECv7l7A2AJtHToGk35203eYJIT4R6Nuzr8lLq5wfIIfiIaH5uBzh4UPJfzhlw-e2h3ysVR2ed3yvF3JNj20k0PPBTRliWP6tvz-xJEj-QmEaBQQ6-N4emOhQMaya0uBJ7iHASoKJtZf-4MW6-r0If5nd1g8-g0NduiOST70blfe9L3etFb8qZ9KtbXd3W0hPC_OXe6ITivVCYtwbw3E57VqRcWHwEwpLfgM8H3L' },
    { id: 2, numberStr: '02', title: 'Pick One', tag: 'Sweet Choice', icon: 'touch_app', iconColor: 'text-purple-300' },
    { id: 3, numberStr: '03', title: 'First Memory', tag: 'Unforgettable', icon: 'photo_camera', iconColor: 'text-amber-300', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBph3b-R2wM7f7IRR1bPzsnrzN8tRKiOZX1U1jwqCcf2qlTCSf9Ic6D_o0s6gB1KFZzv7vEl90frfQNuvxUHHNLpuuLDI-8MUwmIN24OOr5lco1kCjxqv7yq8BQ97OesQBXddTkWxPuySIi0g5jmgR03MqDnDMz2LiWCbPi4AX3OfpBLmNjscWtLwXYgvO-3z2s6ua_tBOwyA4Z03lo-Y2oVWFgNrmKklwEpLyBm11ee4tFlBK1IakR' },
    { id: 4, numberStr: '04', title: 'Scratch Card', tag: 'Surprise Note', icon: 'auto_fix_high', iconColor: 'text-pink-300' },
    { id: 5, numberStr: '05', title: 'Catch Me', tag: 'Playful Chase', icon: 'sports_esports', iconColor: 'text-purple-300' },
    { id: 6, numberStr: '06', title: 'Our Song', tag: 'Melody in Heart', icon: 'music_note', iconColor: 'text-amber-300' },
    { id: 7, numberStr: '07', title: 'Puzzle Solved', tag: 'Pieces Together', icon: 'extension', iconColor: 'text-pink-300' },
    { id: 8, numberStr: '08', title: 'Three Doors', tag: 'Which Path?', icon: 'door_front', iconColor: 'text-purple-300' },
    { id: 9, numberStr: '09', title: 'Keepsakes', tag: 'Little Relics', icon: 'inventory_2', iconColor: 'text-pink-300' },
    { id: 10, numberStr: '10', title: 'Timeline', tag: 'Day by Day', icon: 'timeline', iconColor: 'text-amber-300' },
    { id: 11, numberStr: '11', title: 'Constellation', tag: 'Star Mapping', icon: 'star', iconColor: 'text-purple-300' },
    { id: 12, numberStr: '12', title: 'Perfect Day', tag: 'Golden Hours', icon: 'sunny', iconColor: 'text-pink-300' },
    { id: 13, numberStr: '13', title: 'Inside Joke', tag: 'Only We Know', icon: 'mood', iconColor: 'text-amber-300' },
    { id: 14, numberStr: '14', title: 'Telepathy', tag: 'Same Thought', icon: 'psychology', iconColor: 'text-purple-300' },
    { id: 15, numberStr: '15', title: 'Secret Code', tag: 'Unlocked Heart', icon: 'lock', iconColor: 'text-pink-300' },
    { id: 16, numberStr: '16', title: 'Letters', tag: 'Dear You', icon: 'mail', iconColor: 'text-purple-300' },
    { id: 17, numberStr: '17', title: 'Wishing Jar', tag: 'Folded Hopes', icon: 'cruelty_free', iconColor: 'text-amber-300' },
    { id: 18, numberStr: '18', title: 'Scrapbook', tag: 'Tape & Smiles', icon: 'book', iconColor: 'text-pink-300' },
    { id: 19, numberStr: '19', title: 'Cinema', tag: 'Movie Night', icon: 'movie', iconColor: 'text-purple-300' },
    { id: 20, numberStr: '20', title: 'The Pathway', tag: 'Almost Home', icon: 'route', iconColor: 'text-amber-300' },
    { id: 21, numberStr: '21', title: 'The Grand Finale', tag: 'Eternal Spark', icon: 'favorite', iconColor: 'text-pink-300', isCrown: true },
  ],
  finalLetter: {
    recipient: 'My Favorite Person in the World ♡',
    salutation: 'To My Favorite Person in the World ♡',
    p1: 'Every single day with you feels like discovering warmth for the first time. We\'ve built an entire universe together out of late-night conversations, shared silences, spilled coffee, and memories that I wouldn\'t trade for anything in this world.',
    p2: 'Happy 21st Birthday to the human who makes life infinitely softer, brighter, and infinitely more beautiful. Thank you for being my anchor, my favorite laughter, and my safest home.',
    p3: 'Here is to 21 years of your irreplaceable light, and all the unwritten adventures we have yet to create together.',
    closing: 'Forever & always yours,',
    senderName: '[Your Name]',
  },
  cakeScene: {
    hangingPolaroids: [
      {
        imageUrl:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuBv4L9Grz9Snacja2Mt5OClLvTTHa-El_ByfT6AWxm-KbZBK4YMDGWarc4dR5Byi-Zy9QaiVotbgeidDibPxAOjuWGqbFElaWAcnFRvE1k5lUIonf4sowZtzgDzT20oMa7GiZxCJGtmNgwV9DxyV_q7LfN8_7JoXVxLmoSHE7_JangMKSyw0HY2rtbePtaxd4-37S4_oOyjCOudIe30-T6K0ecKoEE5QujRn1RB-Fo14HRzRqT6ndan',
        caption: 'forever young ♡',
        rotation: '-rotate-6',
      },
      {
        imageUrl:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuC7Gy4Up4kepDtgxVNeXbomeJ_JgZtLMUOFHdWKfCbsR7ihxDRqGYloRQTPfvHUBPfdjRtsVJB4CVTrSjE73sgXgYNlhbUJxI4ysXfh_QZqs4Pp68sbRXFtTK9-ISs_7thnnFP-33OtTx3rcB1mnIVT5KfyBA20PYwp0rdukf4Safbf4pquxHelFP-lhYarpyjB8oFIWo3W8vopeMdc6v2cYKcI_wJKq8ISXJfuY7cxPc7Rxvp4iedw',
        caption: 'level 21 unlocked ✨',
        rotation: 'rotate-4',
      },
    ],
    cakeImageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBsG0bJhWrjjkCxOFifaMFQU_BsOM8QDNo5q0acnlohv4bOsBgyRYygrx4VMg9O0fHf48WVOP_XD9CoQOCYBLbzDPtAgoS_AjkTuCgXfmrD9TOvZaq60J2p-sie5Xwx9ViT_S5cBN95DrUu2R0UlbmzrGitvuWllkVSyxdytofTE46G9G7VnMDC2IcP6D31KLpZ76E9zaJl4Q4v4Zexy3xO92c06KZqi3OZ63C8NzEw_B_PxHQzRq98',
    wishesBadge: '21 Wishes Burning Bright',
    quoteTag: 'Make it count 💫',
    ritualHeading: 'Blow out the 21 candles. The best is yet to come.',
    ritualText:
      'Every flicker represents another year of kindness, beauty, and grace you\'ve brought to everyone lucky enough to know you. The cake is baked, the fairy lights are humming softly, and midnight is officially ours.',
    yearsRadiance: '21',
    momentsAhead: '∞',
  },
  offlineGift: {
    heading: '“Some things are better held than read on a screen. ♡”',
    text: 'Your journey here is complete, but your real-world surprise has already been placed in secret. Look around you, or check your bedside table.',
    buttonLabel: 'There\'s a physical gift waiting for you... ✨',
    secretHint: 'Hint: Inside your favorite sweater pocket or the ribbon box! 🎁',
  },
  finalWishMessage: '“Your wish has been saved to the stars forever. It will come true. ♡”',
  completionTitle: 'You made it to the end. But our story is just getting started. ♡',
  completionText:
    'Every memory recorded here is stored forever in your personal vault. Revisit any chapter whenever you need a reminder of how cherished you are.',
};

