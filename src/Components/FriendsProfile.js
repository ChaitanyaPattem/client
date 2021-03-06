import { useEffect, useState } from "react";
import {
  Wrapper,
  Friend,
  Image,
  FriendsContainer1,
} from "./comp.components";
import axios from "axios";

const FriendsProfile = ({ user, currentUser }) => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axios
      .get("/users/" + currentUser._id)
      .then((res) => setFriends(res.data.friends));
  }, [currentUser._id]);

  return (
    <Wrapper>
      <FriendsContainer1>
        {friends.map((friend) => (
          <Friend
            to={friend._id === user._id ? "/profile" : `/users/${friend._id}`}
          >
            <Image
              width="36px"
              height="36px"
              className="mr-2"
              src={friend.profile_photo}
            ></Image>
            <p style={{ width: "90%" }} className="mb-0">
              {friend.display_name ||
                friend.first_name + " " + friend.last_name}
            </p>
          </Friend>
        ))}
      </FriendsContainer1>
    </Wrapper>
  );
};

export default FriendsProfile;
