import React from 'react';

const fakeList = [
  { id: 1, color: 'red' },
  { id: 2, color: 'blue' },
  { id: 3, color: 'green' },
  { id: 4, color: 'tomato' },
];

const Task5 = () => {
  const [list, setList] = React.useState(fakeList);

  const removeItemFromList = (value) => {
    const filteredList = list.filter((i) => i.id !== value);
    setList(filteredList);
  };

  return (
    <div>
      <ul>
        {list.map((item, idx) => {
          return (
            <ListItem key={idx} color={item.color}>
              <button onClick={() => removeItemFromList(item.id)}>
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
        background: isColored ? props.color : 'white',
      }}
    >
      <p>color will be - {props.color}</p>
      <button onClick={toggleColorStatus}>Set Color</button>
      {props.children}
    </div>
  );
};

export default Task5;
