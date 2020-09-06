import * as React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../types";
import { findFret, findNoteAt } from "../theory";

export function GuessStatus(_props: any) {
  const guessStatus = useSelector((state: AppState) => state.quiz.guessStatus);
  const noteToGuess = useSelector((state: AppState) => state.quiz.noteToGuess);
  const clickedFret = useSelector((state: AppState) => state.quiz.clickedFret);

  const note = noteToGuess?.slice(0, noteToGuess.length-1);
  const { string, fret } = findFret(noteToGuess);

  const answer = () => <p className="answer">
    Correct answer: {note}, {string}/{fret}
  </p>;

  const userGuess = () => <p className="user-guess">
    You guessed: {findNoteAt(clickedFret).slice(0, -1)}, {clickedFret.string}/{clickedFret.fret}
  </p>;

  return (
    <div className="GuessStatus">
      {guessStatus != null && answer()}
      {guessStatus === 'INCORRECT' && userGuess()}
    </div>
  );
}
