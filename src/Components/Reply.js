import moment from "moment";
import { useState, useEffect } from "react";
import {
  ReplyContainer,
  UserPhoto1,
  ReplyBody,
  ReplyWrapper,
  ReplyFooter,
  FooterLink1,
  LikesContainer1,
  ReplyCount1,
} from "./comp.components";
import { Form, Input, Button, FormGroup } from "reactstrap";
import { AiFillLike } from "react-icons/ai";
import axios from "axios";

const Replys = ({
  level = 0,
  reply,
  replies,
  setReplies,
  comment,
  user,
  post,
}) => {
  const [content, setContent] = useState(reply.content);
  const [showEdit, setEdit] = useState(false);

  const config = localStorage.getItem('token') &&  {
    headers: {
      Authorization: "bearer " + localStorage.getItem("token"),
    },
  };


  const deleteHandler = () => {
    window.confirm(
      "Are you sure you want to delete this comment? This action cannot be undone."
    ) &&
      axios
        .delete(`/posts/${post._id}/comments/${reply._id}`, config)
        .then((res) => {
          setReplies(replies.filter((reply) => reply._id !== res.data._id));
        })
        .catch((err) => console.log(err));
  };

  const likeComment = () => {
    axios
      .post(`/posts/${post._id}/comments/${reply._id}`, {}, config)
      .then((res) => {
        setReplies(
          replies.map((reply) =>
            reply._id === res.data._id ? res.data : reply
          )
        );
      })
      .catch((err) => console.log(err));
  };

  const editHandler = (e) => {
    e.preventDefault();
    axios
      .put(`/posts/${post._id}/comments/${reply._id}`, { content }, config)
      .then((res) => {
        setReplies(
          replies.map((reply) =>
            reply._id === res.data._id ? res.data : reply
          )
        );
        setEdit(false);
      })
      .catch((err) => console.log(err));
  };

  const onChangeHandler = (target) => {
    // Reset field height
    target.style.height = "inherit";

    // Get the computed styles for the element
    const computed = window.getComputedStyle(target);

    // Calculate the height
    const height =
      parseInt(computed.getPropertyValue("border-top-width"), 10) +
      parseInt(computed.getPropertyValue("padding-top"), 10) +
      target.scrollHeight +
      parseInt(computed.getPropertyValue("padding-bottom"), 10) +
      parseInt(computed.getPropertyValue("border-bottom-width"), 10);

    target.style.height = `${height}px`;
  };

  useEffect(() => {
    const textarea = document.querySelector("textarea");
    if (textarea) {
      onChangeHandler(textarea);
    }
  }, [showEdit]);

  return (
    <ReplyContainer>
      <UserPhoto1 className="mr-2" src={reply.user.profile_photo} />
      <ReplyWrapper className={"w-100"}>
        <ReplyBody>
          <h6 className="mb-0">
            {reply.user.display_name ||
              reply.user.first_name + " " + reply.user.last_name}
          </h6>
          {!showEdit ? (
            <div style={{wordBreak: 'break-word'}}>
              <p
                className="mb-0"
                dangerouslySetInnerHTML={{ __html: reply.content }}
              ></p>
              {reply.image && <img  width="100%" src={reply.image.url} alt="reply" />}
            </div>
          ) : (
            <Form onSubmit={(e) => editHandler(e)} className="w-100">
              <FormGroup>
                <Input
                  type="textarea"
                  value={content}
                  onChange={(e) => {
                    setContent(e.target.value);
                    onChangeHandler(e.target);
                  }}
                />
              </FormGroup>
              <FormGroup className="text-right mb-1">
                <Button color="primary" type="submit" size="sm">
                  Edit
                </Button>
              </FormGroup>
            </Form>
          )}
          {!showEdit && (
            <LikesContainer1>
              <AiFillLike
                fill={
                  reply.likes.some((e) => e._id === user._id) ? "royalblue" : ""
                }
                size={12}
              />
              &nbsp;
              <p style={{ fontSize: "12px" }} className="d-inline-block mb-0">
                {reply.likes.length}
              </p>
            </LikesContainer1>
          )}
        </ReplyBody>
        <ReplyFooter>
          <FooterLink1
            color={
              reply.likes.some((e) => e._id === user._id)
                ? "royalblue"
                : "black"
            }
            onClick={() => likeComment()}
            bold
          >
            Like
          </FooterLink1>
          {user._id === reply.user._id && (
            <FooterLink1 bold onClick={() => deleteHandler()} color="gray">
              <span style={{ color: "black" }}>&middot;&nbsp;&nbsp;</span>
              Delete
            </FooterLink1>
          )}
          {user._id === reply.user._id && (
            <FooterLink1 bold onClick={() => setEdit(!showEdit)} color="gray">
              Edit
            </FooterLink1>
          )}
          <FooterLink1 color="lightgray">
            {moment(reply.createdAt).fromNow()}
          </FooterLink1>
        </ReplyFooter>
      </ReplyWrapper>
    </ReplyContainer>
  );
};

export default Replys;
