import * as React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../types";
import { findFret } from "../theory";

export function GuessStatus(_props: any) {
  const guessStatus = useSelector((state: AppState) => state.quiz.guessStatus);
  const noteToGuess = useSelector((state: AppState) => state.quiz.noteToGuess);
  const clickedFret = useSelector((state: AppState) => state.quiz.clickedFret);

  const note = noteToGuess?.slice(0, noteToGuess.length-1);
  const { string, fret } = findFret(noteToGuess);

  const answer = () => <p className="answer">
    Note: {note}, String: {string}, Fret: {fret}
  </p>;

  return (
    <div className="GuessStatus">
      {guessStatus != null && answer()}
    </div>
  );
}
