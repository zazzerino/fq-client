import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { reset } from '../actions';
import { exportComponentAsPNG } from 'react-component-export-image';
import { ScoreSummary } from './ScoreSummary';

export function RoundOverModal() {
  const roundOverRef = React.useRef();
  const history = useHistory();
  const dispatch = useDispatch();

  // const onClick = () => {
  //   setSubmitting(true);
  //   dispatch(submitScoreAsync({ name, score }));

  //   setTimeout(() => {
  //     dispatch(loadScoresAsync());
  //   }, 750);

  //   setTimeout(() => {
  //     setSubmitting(false);
  //     history.push('/scores');
  //   }, 750)
  // }

  return (
    <div className="RoundOverModal">
      <div ref={ roundOverRef }>
      <h2>Results</h2>
      <ScoreSummary />
      </div>
      <button onClick={() => {
        dispatch(reset());
        history.push('/settings');
      }}>
      Play again
    </button>
      <br />
      <button onClick={() => {
        exportComponentAsPNG(roundOverRef, 'score.png', 'white')
      }}>
      Export
    </button>
      </div>
  )
}
