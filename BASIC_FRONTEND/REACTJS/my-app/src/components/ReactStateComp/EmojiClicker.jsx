import React, { useState } from "react";
import { v4 as uuid } from "uuid";
const EmojiClicker = () => {
  const [emoji, setEmoji] = useState([{ id: uuid(), emoji: "😂" }]);
  const addEmoji = () => {
    setEmoji((oldEmoji) => [...oldEmoji, { id: uuid(), emoji: "😎" }]);
  };
  const deleteEmoji = (id) => {
    // delete the emoji with the specified id
    console.log(id);
    setEmoji((prevEmoji) => {
      return prevEmoji.filter((e) => e.id !== id);
    });
  };

  const makeAllFire = () => {
    setEmoji((prevEmoji) => {
      return prevEmoji.map((e) => {
        return { ...e, emoji: "🔥" };
      });
    });
  };

  return (
    <div>
      <p>EmojiClicker</p>
      {emoji.map((e) => (
        <span
          onClick={() => deleteEmoji(e.id)}
          key={e.id}
          style={{ fontSize: "2rem" }}
        >
          {e.emoji}
        </span>
      ))}
      <button onClick={addEmoji}>Add Emoji</button>
      <button onClick={makeAllFire}>make them all fire</button>
    </div>
  );
};

export default EmojiClicker;
