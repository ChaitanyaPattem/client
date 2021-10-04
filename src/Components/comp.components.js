import styled from "styled-components";
import { Link } from 'react-router-dom';
import { BsFillImageFill } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";

/* Comments */

export const CommentContainer = styled.div`
  display: flex;
  margin-top: 0.5rem;
  &:last-child {
    margin-bottom: 0.5rem;
  }
`;

export const UserPhoto = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 16px;
`;

export const CommentBody = styled.div`
  padding: 0.5rem;
  width: 100%;
  border-radius: 10px;
  background: #f0f2f5;
  position: relative;
`;

export const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 0.5rem;
`;

export const CommentFooter = styled.div`
  display: flex;
  align-items: center;
`;

export const FooterLink = styled.p`
  font-weight: ${({ bold }) => (bold ? "bold" : "")};
  font-size: 12px;
  color: ${({ color }) => (color ? color : "black")};
  margin-right: 0.5rem;
  margin-bottom: 0;
  &:hover {
    text-decoration: none;
    cursor: pointer;
  }
`;

export const LikesContainer = styled.div`
  background: white;
  border-radius: 6px;
  position: absolute;
  padding: 0 0.2rem;
  bottom: -12px;
  right: 5px;
`;
export const ReplyCount = styled.p`
  user-select: none;
  &:hover {
    cursor: pointer;
  }
`;

/* Comments Form */

export const PhotoImage = styled(BsFillImageFill)`
  top: 4px;
  right: 14px;
  position: absolute;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
    opacity: 0.75;
    cursor: pointer;
  }
`;

export const UserImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 16px;
`;

export const TextArea = styled.textarea`
  border-radius: 16px;
  border: 1px solid gray;
  padding: 0.25rem;
`;

/* Friend Request */

export const FriendsContainer = styled.div`
  display: flex;
  padding: 0.5rem;
  border-radius: 5px;
  width: 100%;
  &:hover {
    background: lightgray;
    cursor: pointer;
  }
`;
export const RoundImage = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  margin-right: 0.5rem;
`;

export const FriendInfo = styled.div``;

/* Friends Profile */

export const Wrapper = styled.div`
  padding: .5rem;
`

export const FriendsContainer1 = styled.div`
  background: white;
  margin: 0 auto;
  border-radius: 5px;
  width: min(100%, 950px);
`

export const Friend = styled(Link)`
  display: flex;
  align-items: center;
  width: 100%;
  padding: .5rem;
  color: black;
  &:hover {
    text-decoration: none;
    color: black;
  }
`

export const Image = styled.img`
  border-radius: 36px;
`
/* Friends Suggestions */

export const FriendsContainer2 = styled.div`
  display: flex;
  padding: 0.5rem;
  border-radius: 5px;
  width: 100%;
  &:hover {
    background: lightgray;
    cursor: pointer;
  }
`;
export const RoundImage1 = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  margin-right: 0.5rem;
`;

export const FriendInfo1 = styled.div``;

/* image  */

export const TransparentBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 60, 100, 0.45);
  z-index: 570;
`;

/* Likes */

export const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 120, 0.2);
  z-index: 211212121;
`;

export const Container = styled.div`
  min-height: 300px;
  max-height: 60vh;
  min-width: 400px;
  max-width: 70%;
  border-radius: 6px;
  background: white;
  z-index: 6;
  overflow-y: auto;
`;

export const Header = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  border-bottom: 1px solid black;
  padding: 0.5rem;
  margin-bottom: 10px;
`;

export const Like = styled(Link)`
  display: flex;
  color: black;
  margin-bottom: 0.5rem;
  &:hover {
    text-decoration: none;
    color: black;
  }
  p {
    width: 90%;
  }
  padding: 0 0.5rem;
`;

export const Image1 = styled.img`
  border-radius: 12px;
  margin-right: 0.5rem;
`;

export const Paragraph = styled.p`
  margin-bottom: 0px;
`;

/* loading */

export const AbsoluteContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: grid;
  place-items: center;
  background: white;
  opacity: 0.75;
  z-index: 51;
`;

/* Navbar */

export const MenuIcon = styled(FiMenu)`
  font-size: 32px;
  &:hover {
    cursor: pointer;
    opacity: 0.75;
  }
`;

export const RegularLink = styled(Link)`
  color: black;
  &:hover {
    text-decoration: none;
    color: black;
  }
`;

export const NavMidItem = styled(Link)`
  position: relative;
  width: 100px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: ${({ active }) =>
    active ? "3px solid royalblue" : "3px solid transparent"};
`;

export const RoundWrapper = styled.div`
  position: relative;
  background: #f0f2f5;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  &:hover {
    cursor: pointer;
    background: lightgray;
  }
`;

export const LockedOverlay = styled.div`
  user-select: none;
  cursor: not-allowed;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;

  &:hover {
    background: 'lightgray';
  }
`

export const CollapsableDiv = styled.div`
  padding: 0.5rem;
  border-radius: 6px;
  background: white;
  position: absolute;
  top: 60px;
  right: 15px;
  width: 350px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1);
  z-index: 3;
`;

export const RoundImage2 = styled.img`
  border-radius: 32px;
  width: 64px;
  height: 64px;
`;

export const SmallRoundImg = styled.img`
  border-radius: 16px;
  width: 32px;
  height: 32px;
`

export const GrayHover = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  //background: white;
  border-radius: 6px;
  &:hover {
    background: #f0f2f5 !important;
    cursor: pointer;
  }
`;

export const LinkGreyHover = styled(Link)`
  color: black;
  background: white;
  &:hover {
    text-decoration: none;
    color: black;
  }
`;

export const RoundedUserDiv = styled.div`
  background: ${({ active }) => (active ? "rgba(0,44,200,.2)" : "white")};
  color: ${({ active }) => (active ? "royalblue" : "black")};
  font-weight: bold;
  border-radius: 16px;
  padding: 0.25rem;
  display: flex;
  align-items: center;
  &:hover {
    background: #f0f2f5;
    cursor: pointer;
  }
`;

export const TopRightUserImg = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 14px;
`;

export const NewNotifications = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border-radius: 8px;
  right: -5px;
  bottom: -5px;
  position: absolute;
  background: red;
  color: white;
  font-size: 13px;

  &:before {
    content: "${({ count }) => count}";
  }
`;

export const SearchContainer = styled.div`
  position: absolute;
  top: 60px;
  left: 65px;
  max-height: 100vh;
  overflow: scroll;
  border-radius: 5px;
  background: white;
  padding: .5rem;
  padding-bottom: 0;
  min-width: 200px;
  max-width: 400px;
`

export const SearchResult = styled.div`
  border-radius: 5px;
  background: white;
  transition: all .3s;
  user-select: none;
  display: flex;
  align-items: center;
  padding: .25rem .5rem;
  &:hover {
    background: lightgray;
    cursor: pointer;
  }
`

export const Menu = styled.div`
  position: absolute;
  bottom: -100px;
  padding: .5rem;
  background: white;
  border-radius: 5px;
`
export const NewFriendsNotifications = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  right: 10px;
  bottom: 0px;
  position: absolute;
  background: red;
  color: white;
  font-size: 13px;
  z-index: -1;

  &:before {
    content: "${({ count }) => count}";
  }
`

export const FlexDiv = styled.div`
  display: flex;
  align-items: center;
`
export const DeleteAccountDiv = styled(GrayHover)`
  flex-direction: row-reverse;
`

export const Warning = styled.div`

  transition: all .2s ease-in-out;
  &:hover {
    cursor: pointer;
    transform: scale(1.02);

  }
`

/* Notification */

export const NotificationContainer = styled.div`
  padding: 0.5rem;
  padding-right: 1rem;
  border-radius: 5px;
  background: ${({ clicked }) => (!clicked ? "rgba(200,0,20,.15)" : "white")};
  display: flex;
  align-items: center;
  position: relative;
  &:hover {
    background: lightgray;
    cursor: pointer;
  }
  max-height: 80vh;
  overflow-y: scroll;
`;

export const UserImage1 = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 18px;
  background-image: ${({ src }) => `url(${src})`};
  background-size: 100%;
  background-repeat: no-repeat;
`;

export const DeleteButton = styled(AiFillDelete)`
  position: absolute;
  top: 5px;
  right: 5px;
  font-size: 24px;
  color: gray;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: red;
    transform: scale(1.2);
  }
`;

/* Photos */

export const Image2 = styled.img`
  width: 100%;
`

export const Wrapper1 = styled(Link)`
  max-width: 50%;

`

/* Posts */

export const PostContainer = styled.div`
  background: white;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1);
`;
export const RoundImage3 = styled.div`
  border-radius: 21px;
  width: 42px !important;
  height: 42px !important;
  margin-right: 0.5rem;
  background-image: ${({ src }) => `url(${src})`};
  background-repeat: no-repeat;
  background-size: cover;
`;
export const Header1 = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;
export const FlexContainer = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Body = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Footer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const TopFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BottomFooter = styled.div`
  display: flex;
  align-items: center;
`;
export const RoundWrapper1 = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background: ${({ bgColor }) => bgColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterItem = styled.div`
  width: 50%;
  border-radius: 5px;
  background: white;
  transition: all 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  color: gray;
  font-weight: bold;
  &:hover {
    background: #f0f2f5;
    cursor: pointer;
  }
`;

export const RoundedContainer = styled.div`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 0.5rem;
  position: absolute;
  top: 50px;
  right: 10px;
  background: white;
`;

export const RoundedWrapper = styled.div`
  background: #f0f2f5;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  &:hover {
    cursor: pointer;
    background: lightgray;
  }
`;

export const ClickDiv = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

export const CommentsContainer = styled.div``;

export const FunctionalItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  color: black;
  font-size: 18px;
  transition: all 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    color: black;
    background: lightgray;
    text-decoration: none;
  }
`;
export const PostImage = styled.img`
  width: 100%;
`;

/* Posts Form */


export const RoundImage4 = styled.div`
  border-radius: 20px;
  width: 36px;
  height: 36px;
  background-image: ${({ src }) => `url(${src})`};
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 2;
`;
export const GrayHover1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin: 0 auto;
  &:hover {
    background: lightgray;
    border-radius: 6px;
    cursor: pointer;
  }
`;

/* Reply */

export const ReplyContainer = styled.div`
  display: flex;
  margin-top: 0.5rem;
  &:last-child {
    margin-bottom: 0.5rem;
  }
`;

export const UserPhoto1 = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 16px;
`;

export const ReplyBody = styled.div`
  padding: 0.5rem;
  width: 100%;
  border-radius: 10px;
  background: #f0f2f5;
  position: relative;
`;

export const ReplyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 0.5rem;
`;

export const ReplyFooter = styled.div`
  display: flex;
  align-items: center;
`;

export const FooterLink1 = styled.p`
  font-weight: ${({ bold }) => (bold ? "bold" : "")};
  font-size: 12px;
  color: ${({ color }) => (color ? color : "black")};
  margin-right: 0.5rem;
  margin-bottom: 0;
  &:hover {
    text-decoration: none;
    cursor: pointer;
  }
`;

export const LikesContainer1 = styled.div`
  background: white;
  border-radius: 6px;
  position: absolute;
  padding: 0 0.2rem;
  bottom: -12px;
  right: 5px;
`;
export const ReplyCount1 = styled.p`
  user-select: none;
  &:hover {
    cursor: pointer;
  }
`;

/* Reply form */

export const RoundImage5 = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 16px;
`;

export const PhotoImage1 = styled(BsFillImageFill)`
  top: 6px;
  right: 14px;
  position: absolute;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
    opacity: 0.75;
    cursor: pointer;
  }
`;
