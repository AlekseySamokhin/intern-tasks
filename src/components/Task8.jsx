import React from 'react';

const Task8 = (props) => {
  const [userId, setUserId] = React.useState(1);
  const [doRequest, setDoRequest] = React.useState(false);

  if (doRequest) {
    fakeApi(userId)
      .then((result) => {
        setUserId(result);
      })
      .catch((err) => {
        setUserId(1);
      });
  };

  const startFetchId = () => {
    setDoRequest(true);
  }

  return (
    <>
    <h1>User id is {userId}</h1>
    <button onClick={startFetchId}>Fetch Id</button>
    
    </>
  )
};

function fakeApi(id) {
  console.log("Api fired");

  return new Promise((res) => {
    setTimeout(() => {
      res(id + 1);
    }, 400);
  });
}


export default Task8