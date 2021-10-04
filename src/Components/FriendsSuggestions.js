import { Button } from "reactstrap";
import {
  FriendsContainer2,
  FriendInfo1,
  RoundImage1,
} from "./comp.components";

const FriendsSuggestions = ({ onClick, sendRequest, to }) => {
  return (
    <FriendsContainer2 data-id={to._id} onClick={() => onClick(to._id)}>
      <RoundImage1 src={to.profile_photo} />
      <FriendInfo1>
        <h4>{to.display_name || to.first_name + " " + to.last_name}</h4>
        {
          <div>
            <Button
              onClick={() => sendRequest(to._id)}
              color="primary"
              className="w-100"
            >
              Send Friend Request
            </Button>
          </div>
        }
      </FriendInfo1>
    </FriendsContainer2>
  );
};

export default FriendsSuggestions;
