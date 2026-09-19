export type VibeType = 'cute' | 'chaotic' | 'emotional';

export interface LevelMetadata {
  id: number;
  numberStr: string; // e.g. "01"
  title: string;
  subtitle: string;
  icon: string; // Material symbol or emoji
  tag?: string;
  isAvailable: boolean; // Levels 1-10 are implemented, 11-21 are placeholder/locked
}

export interface BirthdayProgress {
  completedLevels: number[];
  unlockedLevels: number[];
  mood: VibeType;
  openedLetters: number[];
  revealedClues: { [levelId: number]: string };
}

export interface PolaroidMemory {
  id: string;
  title: string;
  date: string;
  caption: string;
  doodle?: string;
  imageUrl: string;
  tag?: string;
}

export interface OpenWhenLetter {
  id: number;
  title: string;
  preview: string;
  content: string;
  icon: string;
}

// Level 11: Our Constellation
export interface ConstellationStarNode {
  id: number;
  cx: number;
  cy: number;
  topPct: string;
  leftPct: string;
  name: string;
}

// Level 12: Build Your Perfect Day
export interface PerfectDayOption {
  id: string;
  emoji: string;
  title: string;
  subtitle: string;
  chipLabel: string;
}

export interface PerfectDayPhase {
  id: 'morning' | 'afternoon' | 'evening' | 'night';
  phaseNumber: string;
  name: string;
  icon: string;
  tagEmoji: string;
  doodle: string;
  options: PerfectDayOption[];
  defaultSelectedId: string;
}

// Level 13: Inside Joke Test
export interface InsideJokeOption {
  key: 'A' | 'B' | 'C' | 'D';
  text: string;
  subtext: string;
  isCorrect: boolean;
  badge?: string;
}

export interface InsideJokeQuestion {
  id: number;
  promptNumber: string;
  question: string;
  category: string;
  sweetPoints: string;
  options: InsideJokeOption[];
  correctReaction: {
    emoji: string;
    title: string;
    text: string;
    loreScore: string;
  };
}

// Level 14: Guess What I'm Thinking
export interface TelepathyOption {
  id: string;
  emoji: string;
  optionLabel: string;
  title: string;
  description: string;
  isCorrect: boolean;
  solvedTag?: string;
}

export interface TelepathyQuestion {
  roundNumber: number;
  totalRounds: number;
  roundTitle: string;
  thoughtHeading: string;
  thoughtHint: string;
  successHint: string;
  options: TelepathyOption[];
  polaroid: {
    title: string;
    date: string;
    imageUrl: string;
  };
}

// Level 15: The Secret Code
export interface SecretCipherSymbol {
  symbol: string;
  letter: string;
  colorClass?: string;
}

export interface SecretCipherConfig {
  chapter: string;
  title: string;
  subtitle: string;
  translationTable: SecretCipherSymbol[];
  codedWords: { symbol: string; letter: string }[][];
  decodedAnswer: string;
  hint: string;
  revelationQuote: string;
  revelationSubtitle: string;
  polaroid: {
    imageUrl: string;
    caption: string;
    archiveTag: string;
  };
}

// Level 16: Letters From Me
export interface Level16Letter {
  id: string;
  envelopeNumber: string;
  title: string;
  subtitle: string;
  stampText: string;
  stampIcon: string;
  isUnlockedDefault?: boolean;
  p1: string;
  p2: string;
  p3: string;
  dateStr: string;
}

export interface Level16Data {
  chapter: string;
  title: string;
  subtitle: string;
  gentleNote: string;
  deskTitle: string;
  deskSubtitle: string;
  letters: Level16Letter[];
  polaroid: {
    imageUrl: string;
    quote: string;
    keepsakeTag: string;
  };
}

// Level 17: A Little Magic
export interface Level17WanderingStar {
  id: number;
  color: string;
  icon: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  duration: string;
}

export interface Level17Data {
  chapter: string;
  title: string;
  subtitle: string;
  instruction: string;
  initialCollectedCount: number;
  totalStars: number;
  wanderingStars: Level17WanderingStar[];
  polaroid: {
    imageUrl: string;
    title: string;
    quote: string;
    sealDate: string;
  };
}

// Level 18: If You Ever Forget...
export interface Level18MemoryTile {
  id: string;
  type: 'photo' | 'note' | 'milestone' | 'wax-banner';
  title: string;
  quote?: string;
  subtext?: string;
  imageUrl?: string;
  badge?: string;
  rotation?: string;
  washiColor?: string;
}

export interface Level18Data {
  chapter: string;
  title: string;
  subtitle: string;
  albumTitle: string;
  memories: Level18MemoryTile[];
  finalQuote: string;
  polaroid: {
    imageUrl: string;
    quote: string;
    archiveTag: string;
  };
}

// Level 19: Our Little Movie
export interface Level19StillFrame {
  id: string;
  roll: string;
  frame: string;
  title: string;
  imageUrl: string;
}

export interface Level19Data {
  chapter: string;
  title: string;
  subtitle: string;
  prodNumber: string;
  movieTitle: string;
  starring: string;
  directedBy: string;
  videoUrl: string;
  fallbackPosterUrl: string;
  stillFrames: Level19StillFrame[];
  sceneDescription: string;
  endCardTitle: string;
  endCardQuote: string;
  endCardText: string;
}

// Level 20: Almost There...
export interface Level20PathwayNode {
  id: number;
  stepStr: string;
  word: string;
  isHeart?: boolean;
}

export interface Level20Data {
  chapter: string;
  title: string;
  subtitle: string;
  instruction: string;
  targetMessage: string;
  nodes: Level20PathwayNode[];
  polaroid: {
    imageUrl: string;
    stepTag: string;
    quote: string;
    caption: string;
  };
  climaxTitle: string;
  climaxHeading: string;
  climaxText: string;
}

// Level 21: The Final Chapter
export interface Level21ConstellationMoment {
  id: number;
  numberStr: string;
  title: string;
  tag: string;
  icon: string;
  iconColor: string;
  imageUrl?: string;
  isCrown?: boolean;
}

export interface Level21FinalLetter {
  recipient: string;
  salutation: string;
  p1: string;
  p2: string;
  p3: string;
  closing: string;
  senderName: string;
}

export interface Level21CakeScene {
  hangingPolaroids: {
    imageUrl: string;
    caption: string;
    rotation: string;
  }[];
  cakeImageUrl: string;
  wishesBadge: string;
  quoteTag: string;
  ritualHeading: string;
  ritualText: string;
  yearsRadiance: string;
  momentsAhead: string;
}

export interface Level21OfflineGift {
  heading: string;
  text: string;
  buttonLabel: string;
  secretHint: string;
}

export interface Level21Data {
  title: string;
  subtitle: string;
  starlightQuote: string;
  moments: Level21ConstellationMoment[];
  finalLetter: Level21FinalLetter;
  cakeScene: Level21CakeScene;
  offlineGift: Level21OfflineGift;
  finalWishMessage: string;
  completionTitle: string;
  completionText: string;
}
