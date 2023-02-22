import React from 'react';

const fakeList = [
  { id: 1, color: 'red' },
  { id: 2, color: 'blue' },
  { id: 3, color: 'green' },
  { id: 4, color: 'tomato' },
];

const Task5 = () => {
  const [list, setList] = React.useState(fakeList);
  const [flag, setFlag] = React.useState(false);

  const removeItemFromList = (value) => {
    const filteredList = list.filter((i) => i.id !== value);
    setList(filteredList);
  };

  return (
    <div>
      <ul>
        {list.map((item, idx) => {
          return (
            <ListItem
              flag={flag}
              setFlag={setFlag}
              key={idx}
              color={item.color}
              remove={removeItemFromList}
              id={item.id}
            ></ListItem>
          );
        })}
      </ul>
    </div>
  );
};

const ListItem = (props) => {
  const [isColored, setIsColored] = React.useState(props.flag);

  const toggleColorStatus = () => {
    setIsColored(!isColored);
  };

  const handlerRemoveItemFromList = (id) => {
    props.remove(id);

    setIsColored(false);
  };

  return (
    <div
      style={{
        background: isColored ? props.color : 'white',
      }}
    >
      <p>color will be - {props.color}</p>
      <button onClick={toggleColorStatus}>Set Color</button>
      <button onClick={() => handlerRemoveItemFromList(props.id)}>
        Remove Item
      </button>
    </div>
  );
};

export default Task5;
