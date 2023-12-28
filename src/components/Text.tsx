import React, { useEffect, useRef } from 'react';

interface QueueItem {
  from: string;
  to: string;
  start: number;
  end: number;
  char?: string;
}

class TextScramble {
  el: HTMLElement;
  chars: string;
  resolve: () => void;
  queue: QueueItem[];
  frameRequest: number;
  frame: number;

  constructor(el: HTMLElement) {
    this.el = el;
    this.chars = '!<>-_\\/[]{}—=+*^?#________';
    this.resolve = () => {};
    this.queue = [];
    this.frameRequest = 0;
    this.frame = 0;
  }

  setText(newText: string): Promise<void> {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise<void>((resolve) => (this.resolve = resolve));
    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = newText[i] || '';
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({ from, to, start, end });
    }
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }

  update(): void {
    let output = '';
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }
    this.el.innerHTML = output;
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update.bind(this));
      this.frame++;
    }
  }

  randomChar(): string {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}

const phrases = [' DEVELOPER', ' DESIGNER'];

const TextScrambleComponent: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const fx = useRef<TextScramble | null>(null);
  let counter = 0;

  useEffect(() => {
    if (textRef.current) {
      fx.current = new TextScramble(textRef.current);
      const next = () => {
        if (fx.current) {
          fx.current.setText(phrases[counter]).then(() => {
            setTimeout(next, 2000);
          });
          counter = (counter + 1) % phrases.length;
        }
      };
      next();
    }
  }, []);

  return (
    <div ref={textRef} className="text text-lg md:text-2xl font-sans text-secondary"></div>
  );
};

export default TextScrambleComponent;
