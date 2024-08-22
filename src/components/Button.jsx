import React, { useState } from 'react';

function MyButton() {
  const [date, setDate] = useState("Press the button");

  const handleClick = () => {
    setDate(new Date().toLocaleString());
  };

  return (
    <button onClick={handleClick}>
      {date}
    </button>
  );
}

export default MyButton;
