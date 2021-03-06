import {
  FriendsContainer,
  FriendInfo,
  RoundImage,
} from "./comp.components";
import { Button } from "reactstrap";

const FriendsRequests = ({
  onClick,
  confirmFriend,
  declineFriend,
  from,
  _id,
}) => {
  return (
    <FriendsContainer onClick={() => onClick(from._id)} data-id={from._id}>
      <RoundImage src={from.profile_photo} />
      <FriendInfo>
        <h4>{from.display_name || from.first_name + " " + from.last_name}</h4>
        <div className="d-flex w-100 align-items-center">
          <Button
            onClick={() => confirmFriend(_id)}
            color="primary"
            className="mr-2 w-100"
          >
            Confirm
          </Button>
          <Button
            onClick={() => declineFriend(_id)}
            className="w-100"
            color="secondary"
          >
            Delete
          </Button>
        </div>
      </FriendInfo>
    </FriendsContainer>
  );
};
export default FriendsRequests;
