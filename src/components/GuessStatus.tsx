import * as React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../types";

export function GuessStatus(_props: any) {
  const guessStatus = useSelector((state: AppState) => state.quiz.guessStatus);
  const noteToGuess = useSelector((state: AppState) => state.quiz.noteToGuess);
  const clickedFret = useSelector((state: AppState) => state.quiz.clickedFret);

  const note = noteToGuess?.slice(0, noteToGuess.length-1);

  const answer = () => <p className="answer">
    Note: {note}, String: {clickedFret.string}, Fret: {clickedFret.fret}
  </p>;

  return (
    <div className="GuessStatus">
      {guessStatus != null && answer()}
    </div>
  );
}
