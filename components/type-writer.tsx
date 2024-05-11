/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEffect } from "react";
import { useState } from "react";

export function TypeWriter({ phrase }: { phrase: string }) {
  const [text, setText] = useState("");

  const writeOnScreen = (text: string, i = 0) => {
    if (i < text.length) {
      setText(text.slice(0, i + 1));
      setTimeout(() => writeOnScreen(text, i + 1), 100);
    }
  };

  useEffect(() => {
    setTimeout(() => writeOnScreen(phrase));
  }, []);

  return <div>{text}</div>;
}
