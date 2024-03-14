import css from './Button.module.css';
import { useState, useEffect } from 'react';

const Button = () => {
  const emptyArr = [];

  const newColor = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;

  const [clicks, setClicks] = useState({
    a: { backgroundColor: newColor, width: 100, height: 100 },
    b: { backgroundColor: newColor, width: 100, height: 100 },
    c: { backgroundColor: newColor, width: 100, height: 100 },
    d: { boolean: true },
  });

  const handleClickA = () => {
    setClicks({
      ...clicks,
      a: {
        backgroundColor: newColor,
        width: clicks.a.width + 100,
        height: clicks.a.height + 100,
      },
    });
  };
  const handleClickB = () => {
    setClicks({
      ...clicks,
      b: {
        backgroundColor: newColor,
        width: clicks.b.width + 100,
        height: clicks.b.height + 100,
      },
    });
  };
  const handleClickC = () => {
    setClicks({
      ...clicks,
      c: {
        backgroundColor: newColor,
        width: clicks.c.width + 100,
        height: clicks.c.height + 100,
      },
      d: {
        boolean: !clicks.d.boolean,
      },
    });
  };
  useEffect(() => {
    emptyArr.push(
      clicks.a.backgroundColor,
      clicks.b.backgroundColor,
      clicks.c.backgroundColor
    );
    console.log(emptyArr);

    window.localStorage.setItem('colors', JSON.stringify(emptyArr));
  }, [clicks, emptyArr]);
  return (
    <>
      {clicks.d.boolean && (
        <>
          <button style={clicks.a} onClick={handleClickB}>
            It`s first-button
          </button>
          <button style={clicks.b} onClick={handleClickA}>
            It`s second-button
          </button>
        </>
      )}

      <button style={clicks.c} onClick={handleClickC}>
        It`s third-button
      </button>
    </>
  );
};
export default Button;
