class SoundEffects {
  public setMuted(_muted: boolean) {}
  public getMuted() { return true; }
  public getIsJazzPlaying() { return false; }
  public toggleLofiBeats(): boolean { return false; }
  public startNoirJazz() {}
  public stopNoirJazz() {}
  public playPageTurn() {}
  public playTypewriter() {}
  public playStampEffect() {}
  public playSuccessChime() {}
}

export const soundManager = new SoundEffects();
