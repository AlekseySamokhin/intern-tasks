import { useState, useEffect } from 'react';

const Task2 = () => {
  const [idValue, setIdValue] = useState('');
  const [requestedId, setRequestedId] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      fakeRequest(requestedId);
    };

    fetchData();
  }, [requestedId]);

  const submitHandler = () => {
    setRequestedId(idValue);
  };

  const inputChangeHandler = (ev) => {
    setIdValue(ev.target.value);
  };

  return (
    <div>
      <button onClick={submitHandler}>Submit</button>
      <input type="number" onChange={inputChangeHandler} value={idValue} />
    </div>
  );
};

export default Task2;

async function fakeRequest(id) {
  await new Promise((res) => {
    setTimeout(() => {
      res(1);
    }, 200);
  });

  console.log('Id in request is:', id);
}
