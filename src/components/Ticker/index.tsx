import React, { useState, useCallback } from 'react';
import useInterval from '../../hooks/useInterval';
import { equal, calcIntervalByBPM } from '../../utils/MathUtils';
import styles from './ticker.module.scss';

interface TickerProps {
  tickCallback: Function,
}

const TICKER_ACTION = {
  GO: 'GO',
  STOP: 'STOP',
};

const Ticker: React.FC<TickerProps> = ({ tickCallback }: TickerProps) => {
  const [delay, setDelay] = useState<number | null>(null);
  const [bpmInput, setBpmInput] = useState<number | null>(60);

  const tick = useCallback(() => {
    tickCallback();
  }, []);
  useInterval(tick, delay);

  const handleBpmInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    const bpm: number | null = value ? Number(value) : null;
    setBpmInput(bpm);
  };

  const handleStartBtnClick = () => {
    if (delay !== null) {
      const delayByBpm = bpmInput ? calcIntervalByBPM(bpmInput) : 0;
      if (equal(delay, delayByBpm)) {
        setDelay(null);
      } else {
        setDelay(delayByBpm);
      }
    } else {
      if (!bpmInput) return;
      setDelay(calcIntervalByBPM(bpmInput));
    }
  };

  const getTickerActionText: () => string = () => {
    if (delay === null) return TICKER_ACTION.GO;
    if (equal(delay, calcIntervalByBPM(bpmInput || 0))) return TICKER_ACTION.STOP;
    return TICKER_ACTION.GO;
  };

  const actionText = getTickerActionText();
  return (
    <div className={styles.ticker}>
      <span>BPM:</span>
      <input
        type="number"
        className={styles.delayInput}
        placeholder="bmp"
        value={bpmInput || ''}
        onChange={handleBpmInputChange}
      />
      <div className={styles.actionBtn} onClick={handleStartBtnClick}>
        <span>{actionText}</span>
      </div>
    </div>
  );
};

export default Ticker;
