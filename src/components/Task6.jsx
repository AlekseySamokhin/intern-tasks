import React from "react";
import { useEffect } from "react";

const Task6 = (props) => {
  const [remoteId, setRemoteId] = React.useState(1);

  useEffect(async () => {
    const res = await fakeApi(remoteId);
    setRemoteId(res)
  });

  return (
    <h1>ID is {remoteId}</h1>
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

export default Task6;
