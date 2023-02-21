import React from "react";
import { useMemo } from "react";

const listOfItems = Array(4)
  .fill(1)
  .map((_, idx) => {
    if (idx % 2) {
      return {
        name: "Im hidden",
        status: "blocked",
      };
    }
    return {
      name: "See me",
      status: "active",
    };
  });

const Task7 = (props) => {
  const [status, setStatus] = React.useState("active"); // active | blocked
  let myVisibleElements = listOfItems;

  if (status === "blocked") {
    myVisibleElements = useMemo(() => {
      return listOfItems.filter((i) => i.status === "blocked");
    }, [status]);
  } else {
    myVisibleElements = useMemo(() => {
      return listOfItems.filter((i) => i.status === "active");
    }, [status]);
  }

  const toggleStatus = () => {
    setStatus(status === 'acvtive' ? 'block' : 'active')
  }

  return (
    <div>
      <button onClick={toggleStatus}></button>
      {myVisibleElements.map((item, idx) => (
        <p key={idx}>{item.name}</p>
      ))}
    </div>
  );
};

export default Task7;
