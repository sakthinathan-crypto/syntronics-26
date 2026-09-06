import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export const AudioAmbience: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscillatorRef = useRef<OscillatorNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  const toggleSound = () => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioCtxRef.current = new AudioCtx();
    }

    const ctx = audioCtxRef.current;

    if (isPlaying) {
      if (gainNodeRef.current && ctx) {
        gainNodeRef.current.gain.setTargetAtTime(0, ctx.currentTime, 0.2);
        setTimeout(() => {
          oscillatorRef.current?.stop();
          oscillatorRef.current?.disconnect();
          oscillatorRef.current = null;
        }, 300);
      }
      setIsPlaying(false);
    } else {
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      // Create gentle warm futuristic low frequency harmonic pad
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(140, ctx.currentTime);

      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(55, ctx.currentTime); // Low A

      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(110, ctx.currentTime); // A octave

      gain.gain.setValueAtTime(0, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.04, ctx.currentTime + 1.5);

      osc1.connect(filter);
      osc2.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc1.start();
      osc2.start();

      oscillatorRef.current = osc1;
      gainNodeRef.current = gain;
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    return () => {
      if (oscillatorRef.current) {
        try {
          oscillatorRef.current.stop();
        } catch {
          // ignore
        }
      }
    };
  }, []);

  return (
    <button
      id="audio-ambience-toggle"
      onClick={toggleSound}
      title={isPlaying ? "Mute ambient frequency" : "Enable futuristic ambient sound"}
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-4 py-2 rounded-full bg-black/80 border border-white/15 hover:border-[#FFB347]/60 text-xs font-mono text-[#F5F5F5] transition-all duration-300 hover:scale-105 shadow-2xl group backdrop-blur-md"
      data-cursor="interactive"
    >
      <span className="relative flex h-2 w-2">
        {isPlaying ? (
          <>
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFB347] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF8C42]"></span>
          </>
        ) : (
          <span className="relative inline-flex rounded-full h-2 w-2 bg-neutral-600"></span>
        )}
      </span>
      {isPlaying ? (
        <Volume2 className="w-3.5 h-3.5 text-[#FFB347]" />
      ) : (
        <VolumeX className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white" />
      )}
      <span className="tracking-widest uppercase text-[10px] text-[#A7A7A7] group-hover:text-white transition-colors">
        {isPlaying ? "AUDIO: LIVE" : "AUDIO: MUTED"}
      </span>
    </button>
  );
};
