import { ChangeProfile } from "../components/ChangeProfile";
import { useContext } from "react";
import { AppContext } from "../App.js";

export const Profile = () => {
  const { username } = useContext(AppContext);
  return (
    <div>
      Profile, user is {username}
      <ChangeProfile />
    </div>
  );
};
