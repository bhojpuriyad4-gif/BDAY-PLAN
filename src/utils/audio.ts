// Audio engine with Web Audio API synthesizer fallback and real audio element support
class SoundEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;
  private isMusicPlaying: boolean = false;
  private musicTimer: number | null = null;
  private audioEl: HTMLAudioElement | null = null;
  private onMusicStateChange?: (playing: boolean) => void;

  private initContext() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public registerMusicCallback(cb: (playing: boolean) => void) {
    this.onMusicStateChange = cb;
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    if (this.audioEl) {
      this.audioEl.muted = this.isMuted;
    }
    return this.isMuted;
  }

  public playTone(freq: number, type: OscillatorType, duration: number, gainVal = 0.08) {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch {
      // Audio context might be restricted before gesture
    }
  }

  // Heart pop sound: sweet dual bell
  public playHeartPop() {
    this.playTone(523.25, 'sine', 0.15, 0.1); // C5
    setTimeout(() => this.playTone(659.25, 'sine', 0.25, 0.1), 60); // E5
  }

  // Twinkle / sparkle
  public playSparkle() {
    [783.99, 987.77, 1174.66, 1318.51].forEach((freq, i) => {
      setTimeout(() => this.playTone(freq, 'sine', 0.2, 0.06), i * 70);
    });
  }

  // Card flip / choice
  public playFlip() {
    this.playTone(330, 'triangle', 0.08, 0.08);
  }

  // Level complete celebration
  public playVictory() {
    const notes = [440, 554.37, 659.25, 880, 1108.73];
    notes.forEach((freq, idx) => {
      setTimeout(() => this.playTone(freq, 'sine', 0.4, 0.12), idx * 100);
    });
  }

  // Wrong card buzzer (soft and playful)
  public playSoftBuzzer() {
    this.playTone(220, 'sine', 0.2, 0.06);
    setTimeout(() => this.playTone(207.65, 'sine', 0.25, 0.06), 90);
  }

  // Scratch sound effect
  public playScratch() {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;
      const bufferSize = this.ctx.sampleRate * 0.05;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * 0.02;
      }
      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.value = 1400;
      noise.connect(filter);
      filter.connect(this.ctx.destination);
      noise.start();
    } catch {
      // Ignore
    }
  }

  // Ambient gentle music generator (pentatonic music box chords)
  public toggleMusic(forceState?: boolean): boolean {
    const target = forceState !== undefined ? forceState : !this.isMusicPlaying;
    if (target === this.isMusicPlaying) return this.isMusicPlaying;

    this.isMusicPlaying = target;
    this.initContext();

    if (this.onMusicStateChange) {
      this.onMusicStateChange(this.isMusicPlaying);
    }

    if (!this.isMusicPlaying) {
      if (this.musicTimer) {
        clearInterval(this.musicTimer);
        this.musicTimer = null;
      }
      if (this.audioEl) {
        this.audioEl.pause();
      }
      return false;
    }

    // Try loading actual audio file first
    if (!this.audioEl) {
      this.audioEl = new Audio('/assets/music/our-song.mp3');
      this.audioEl.loop = true;
    }

    const playPromise = this.audioEl.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          // File exists and is playing!
        })
        .catch(() => {
          // Fallback to soothing Web Audio API music box arpeggio melody
          this.startProceduralMelody();
        });
    }

    return true;
  }

  private startProceduralMelody() {
    if (this.musicTimer) clearInterval(this.musicTimer);
    const melodyNotes = [
      261.63, 329.63, 392.0, 523.25, // C E G C
      293.66, 349.23, 440.0, 587.33, // D F A D
      329.63, 392.0, 493.88, 659.25, // E G B E
      349.23, 440.0, 523.25, 698.46, // F A C F
    ];
    let noteIdx = 0;

    this.musicTimer = window.setInterval(() => {
      if (!this.isMusicPlaying || this.isMuted) return;
      const note = melodyNotes[noteIdx % melodyNotes.length];
      // Play warm chime
      this.playTone(note, 'sine', 0.6, 0.04);
      // occasional high harmony
      if (noteIdx % 4 === 0) {
        this.playTone(note * 2, 'sine', 0.8, 0.02);
      }
      noteIdx++;
    }, 450);
  }

  public getIsPlaying(): boolean {
    return this.isMusicPlaying;
  }
}

export const sound = new SoundEngine();
