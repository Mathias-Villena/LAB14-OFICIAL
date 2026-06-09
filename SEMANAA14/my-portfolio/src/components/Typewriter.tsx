"use client";

import { useEffect, useState } from "react";

interface TypewriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delay?: number;
}

export default function Typewriter({
  words,
  typingSpeed = 80,
  deletingSpeed = 40,
  delay = 2000,
}: TypewriterProps) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const currentWord = words[wordIndex];

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isDeleting) {
      timer = setTimeout(() => {
        setText(currentWord.substring(0, text.length - 1));
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setText(currentWord.substring(0, text.length + 1));
      }, typingSpeed);
    }

    if (!isDeleting && text === currentWord) {
      if (words.length === 1) {
        // If there's only one word, keep it typed without deleting
        return;
      }
      timer = setTimeout(() => setIsDeleting(true), delay);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, delay, currentWord]);

  return (
    <>
      {text}
      {(!isDeleting || text !== currentWord || words.length > 1) && (
        <span className="inline-block w-[3px] h-[0.9em] ml-1 bg-indigo-500 dark:bg-indigo-400 align-middle animate-pulse">|</span>
      )}
    </>
  );
}

