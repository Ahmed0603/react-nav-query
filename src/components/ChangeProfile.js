import { useState, useContext } from "react";
import { AppContext } from "../App.js";

export const ChangeProfile = () => {
  const { setUsername } = useContext(AppContext);
  const [newUsername, setNewUsername] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="'E.g, Ahmed123' "
        onChange={(event) => {
          setNewUsername(event.target.value);
        }}
      />
      <button
        onClick={() => {
          setUsername(newUsername);
        }}>
        {" "}
        Change Username{" "}
      </button>
    </div>
  );
};
