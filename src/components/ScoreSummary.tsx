import * as React from 'react';
import { useSelector } from 'react-redux';
import { AppState, Guess } from '../types';

function accName(acc: string): string {
  return {
    'bb': "Double-Flats",
    "b": "Flats",
    "#": "Sharps",
    "##": "Double-Sharps",
  }[acc];
}

function currentTime() {
  const date = new Date().toString();
  const formatDate = date.split(' ').slice(0, 5).join(' ');

  return formatDate;
}

export function ScoreSummary() {
  const strings = useSelector((state: AppState) => state.noteOpts.strings.join(', '));
  const history = useSelector((state: AppState) => state.quiz.history);
  const roundLength = useSelector((state: AppState) => state.quiz.roundLength);

  const accidentals = useSelector((state: AppState) => {
    return state.noteOpts.accidentals
      .filter(acc => acc !== '')
      .map(acc => accName(acc))
      .join(', ');
  });

  const correctGuesses = history.filter((guess: Guess) => {
    return guess.guessStatus === 'CORRECT';
  }).length;

  const incorrectGuesses = history.filter((guess: Guess) => {
    return guess.guessStatus === 'INCORRECT';
  }).length;

  return (
    <div className="ScoreSummary">
      <table>
        <tbody>
          <tr>
            <th>Total Score</th>
            <td>{ correctGuesses - incorrectGuesses }</td>
          </tr>
          <tr>
            <th>Correct</th>
            <td>{ correctGuesses }</td>
          </tr>
          <tr>
            <th>Incorrect</th>
            <td>{ incorrectGuesses }</td>
          </tr>
          <tr>
            <th>Round Length</th>
            <td>{ roundLength }</td>
          </tr>
          <tr>
            <th>Strings</th>
            <td>{ strings }</td>
          </tr>
          <tr>
            <th>Accidentals</th>
            <td>{ accidentals }</td>
          </tr>
          <tr>
            <th>Date</th>
            <td>{ currentTime() }</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
