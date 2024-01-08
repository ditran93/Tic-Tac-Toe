import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChangePlayerName }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedPlayerName, setUpdatedPlayerName] = useState(initialName);
  function editClickHandler() {
    setIsEditing((prevEditState) => !prevEditState);
    if (isEditing) {
      onChangePlayerName(symbol, updatedPlayerName);
    }
  }
  function changePlayerNameHandler(event) {
    setUpdatedPlayerName(event.target.value);
  }

  let playerName = <span className="player-name">{updatedPlayerName}</span>;
  if (isEditing) {
    playerName = (
      <input
        type="text"
        required
        value={updatedPlayerName}
        onChange={changePlayerNameHandler}
      ></input>
    );
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={editClickHandler}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
