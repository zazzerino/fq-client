import * as React from 'react';
import { SecondsLeft } from './SecondsLeft';
import { Stave } from './Stave';
import { Fretboard } from './Fretboard';
import { NewNoteButton } from './NewNoteButton';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../types';
import { newNoteToGuess, tick } from '../actions';
import { Redirect } from 'react-router-dom';
import { useInterval } from '../util';
import { GuessStatus } from './GuessStatus';

export function PlayingContainer(props: any) {
  const dispatch = useDispatch();
  const noteToGuess = useSelector((state: AppState) => state.quiz.noteToGuess);
  const noteOpts = useSelector((state: AppState) => state.noteOpts);
  const guessStatus = useSelector((state: AppState) => state.quiz.guessStatus);
  const isRoundOver = useSelector((state: AppState) => {
      return state.quiz.secondsLeft <= 0;
  });

  React.useEffect(() => {
    if (noteToGuess == null) {
      dispatch(newNoteToGuess(noteOpts, noteToGuess));
    }
  }, [dispatch, noteToGuess, noteOpts]);

  useInterval(() => {
    if (guessStatus == null) {
      dispatch(tick());
    }
  }, 1000);

  return (
    <div className="PlayingContainer">
      { isRoundOver && <Redirect to="/roundover" /> }
      <SecondsLeft />
      <Stave />
      <Fretboard />
      <NewNoteButton />
      <GuessStatus />
    </div>
  );
}
