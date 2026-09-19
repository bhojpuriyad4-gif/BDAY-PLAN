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
