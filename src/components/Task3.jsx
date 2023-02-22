import { useEffect, useState } from 'react';
import { useRef } from 'react';
import styles from './Task3.module.scss';

// Поменял хук useMemo на useEffect, так как нам нужно дождаться пока наш комнонет отрисуется в DOM.
// useMemo срабатывает до вмонтирования в DOM.
const Task3 = () => {
  const [width, setWidth] = useState('');
  const elementRef = useRef();

  useEffect(() => {
    const elementWidth = elementRef;

    setWidth(elementWidth.current.clientWidth);
  }, [elementRef]);

  const handleButtonClick = () => {
    if (width >= 100) {
      elementRef.current.classList.add(styles.blue);
    } else {
      elementRef.current.classList.add(styles.green);
    }
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Click</button>
      <div className={styles.box} ref={elementRef}>
        Box
      </div>
    </div>
  );
};

export default Task3;
