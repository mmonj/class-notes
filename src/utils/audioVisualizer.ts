// src/audioVisualizer.ts

type BeatState = {
  analyser: AnalyserNode;
  dataArray: Uint8Array;
  images: NodeListOf<HTMLImageElement>;
  animationId: number | null;
};

export function setupAudioBeatEffect(audioElement: HTMLAudioElement, imageSelector: string) {
  const images = document.querySelectorAll<HTMLImageElement>(imageSelector);

  if (!audioElement) throw new Error("Audio element not found");
  if (images.length === 0) console.warn("No images matched for beat animation");

  const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
  const audioCtx = new AudioContextClass();
  const source = audioCtx.createMediaElementSource(audioElement);
  const analyser = audioCtx.createAnalyser();

  source.connect(analyser);
  analyser.connect(audioCtx.destination);

  analyser.fftSize = 256;
  const dataArray = new Uint8Array(analyser.frequencyBinCount);

  const state = {
    analyser,
    dataArray,
    images,
    animationId: null,
  } satisfies BeatState;

  const handlePlay = () => onAudioPlay(audioCtx, state);
  const handlePause = () => onAudioPause(state);

  audioElement.addEventListener("play", () => {
    state.images = document.querySelectorAll(imageSelector);
    handlePlay();
  });
  audioElement.addEventListener("pause", handlePause);

  // return () => {
  //   audioElement.removeEventListener("play", handlePlay);
  //   audioElement.removeEventListener("pause", handlePause);
  //   if (state.animationId !== null) cancelAnimationFrame(state.animationId);
  //   audioCtx.close();
  // };
}

function onAudioPlay(audioCtx: AudioContext, state: BeatState) {
  audioCtx.resume().then(() => {
    state.animationId = requestAnimationFrame(() => animateBeat(state));
  });
}

function onAudioPause(state: BeatState) {
  if (state.animationId !== null) {
    cancelAnimationFrame(state.animationId);
    state.animationId = null;
  }
  state.images.forEach((img) => {
    img.style.transform = "scale(1)";
  });
}

function getVolume(state: BeatState) {
  state.analyser.getByteFrequencyData(state.dataArray);
  return state.dataArray.reduce((acc, val) => acc + val, 0) / state.dataArray.length;
}

function animateBeat(state: BeatState) {
  const volume = getVolume(state);
  const scale = 1 + volume / 125;

  state.images.forEach((img) => {
    img.style.transform = `scale(${scale})`;
  });

  state.animationId = requestAnimationFrame(() => animateBeat(state));
}
