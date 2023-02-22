import React from 'react';
import { useEffect } from 'react';

const Task6 = (props) => {
  const [remoteId, setRemoteId] = React.useState(0);

  useEffect(() => {
    try {
      (async () => {
        const res = await fakeApi(remoteId);

        setRemoteId(res);
      })();
    } catch {
      setRemoteId(0);
    }
  }, []);

  return remoteId && <h1>ID is {remoteId}</h1>;
};

function fakeApi(id) {
  console.log('Api fired');

  return new Promise((res) => {
    setTimeout(() => {
      res(id + 1);
    }, 400);
  });
}

export default Task6;
