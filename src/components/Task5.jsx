import React from "react";

const fakeList = [
  { color: "red" },
  { color: "blue" },
  { color: "green" },
  { color: "tomato" },
];

const Task5 = () => {
  const [list, setList] = React.useState(fakeList);

  const removeItemFromList = (value) => {
    const filteredList = list.filter((i) => i.color !== value);
    setList(filteredList);
  };

  return (
    <div>
      <ul>
        {list.map((item, idx) => {
          return (
            <ListItem key={idx} color={item.color}>
              <button onClick={() => removeItemFromList(item.color)}>
                Remove Item
              </button>
            </ListItem>
          );
        })}
      </ul>
    </div>
  );
};

const ListItem = (props) => {
  const [isColored, setIsColored] = React.useState(false);

  const toggleColorStatus = () => {
    setIsColored(!isColored);
  };

  return (
    <div
      style={{
        background: isColored ? props.color : "white",
      }}
    >
      <p>color will be - {props.color}</p>
      <button onClick={toggleColorStatus}>Set Color</button>
      {props.children}
    </div>
  );
};

export default Task5;
