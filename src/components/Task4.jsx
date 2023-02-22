import { useEffect, useState, useMemo } from 'react';

const fakeList = [1, 2, 3, 4];

const Task4 = () => {
  const [book, setBook] = useState(false);
  console.log(1);

  useEffect(() => {
    console.log(4);
    return () => console.log(5);
  }, [book]);

  const abc = useMemo(() => {
    console.log(2);
  }, []);

  const handleChange = () => {
    setBook(!book);
  };

  return (
    <>
      {console.log(3)}
      <button onClick={handleChange}>Click</button>
    </>
  );
};

export default Task4;
