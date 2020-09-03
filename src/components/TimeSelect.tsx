import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../types';
import { setRoundLength } from '../actions';

export function TimeSelect(_props: any) {
  const dispatch = useDispatch();
  const roundLength = useSelector((state: AppState) => state.quiz.roundLength);


  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    const val = parseInt(event.target.value);
    dispatch(setRoundLength(val));
  }


  return (
    <div className="TimeSelect">
      <h4>Round Length (in seconds):</h4>
      <input type="number"
             min="1"
             max="600"
             value={roundLength}
             onChange={onChange} />
    </div>
  );
}
