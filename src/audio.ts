// import UIfx from 'uifx';
import * as Tone from 'tone';

// // @ts-ignore
// import coinAudio from './audio/smb_coin.wav';
// // @ts-ignore
// import bowserFallsAudio from './audio/smb_bowserfalls.wav';

// export const correctSound = new UIfx(coinAudio);

// export const incorrectSound = new UIfx(bowserFallsAudio);

// export function playNote(note: string) {
//   const now = Tone.now();
//   synth.triggerAttack(note, now);
//   synth.triggerRelease(now + 0.5);
//   synth.triggerAttack(note, now + 0.5);
//   synth.triggerRelease(now + 1);
//   // synth.triggerAttackRelease("B4", "4n", "2n");
// }

const synth = new Tone.Synth().toDestination();

export function playNotes(notes: string[]) {
  const now = Tone.now();

  synth.triggerAttack(notes[0], now);
  synth.triggerRelease(now + 0.4);
  if (notes[1]) {
    synth.triggerAttack(notes[1], now + 0.5);
    synth.triggerRelease(now + 0.9);
  }
}
