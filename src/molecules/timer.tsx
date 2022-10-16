import { height } from '@mui/system';
import { useEffect } from 'react';
import { useAtom } from 'jotai';
// import { timeBarAtom, timeBarIntervalAtom } from '../jotai/timer-atom';

const Timer = () => {
  // const [bar, setBar] = useAtom(timeBarAtom);
  // const [timeBarValue, setTimeBarValue] = useAtom(timeBarIntervalAtom);

  useEffect(() => {
    // setTimeBarValue();
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <span>Elapsed Time</span>
      <div
        style={{
          backgroundColor: '#e4e4e4',
          width: '200px',
          height: '20px',
          border: '1px solid #c3c3c3',
          marginLeft: '4px',
          position: 'relative',
          borderRadius: '2px',
        }}
      >
        <span
          style={{
            position: 'absolute',
            backgroundColor: '#cef1ff',
            left: 0,
            height: '20px',
            width: `2px`,
          }}
        ></span>
      </div>
      {/* <span style={{ width: '100px' }}>{bar}s</span> */}
    </div>
  );
};

export default Timer;
