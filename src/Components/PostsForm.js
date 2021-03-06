import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Form, Input, FormGroup, Button } from "reactstrap";
import { RoundImage4, GrayHover1 } from "./comp.components";
import { FcStackOfPhotos } from "react-icons/fc";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";
import { Loading } from "../Components";

const PostForm = ({ user, setPosts, posts }) => {
  const [displayName, setDisplayName] = useState(user.display_name);
  const [loading, setLoading] = useState(false);
  const [showImageForm, setImageForm] = useState(false);
  const [expandForm, setExpandForm] = useState(false);
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    const formData = new FormData();
    formData.append("content", content);
    formData.append("image", file);

    setLoading(true);
    axios
      .post("/posts", formData, {
        headers: {
          Authorization: "bearer " + token,
        },
      })
      .then((res) => {
        setPosts([res.data, ...posts]);
        setContent("");
        setFile(null);
        setExpandForm(false);
        setImageForm(false);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const onChangeHandler = (e) => {
    // Reset field height
    e.target.style.height = "inherit";

    // Calculate the height
    const height = e.target.scrollHeight;

    e.target.style.height = `${height}px`;
  };

  useEffect(() => {
    setDisplayName(user.first_name || user.display_name.split(" ")[0]);
  }, []);

  return (
    <Container
      fluid
      className="my-3 p-2 p-relative"
      style={{
        boxShadow: "0 2px 4px rgba(0, 0, 0, .1), 0 8px 16px rgba(0, 0, 0, .1)",
        background: "white",
        borderRadius: "5px",
      }}
    >
      {loading && <Loading />}
      <Form encType="multipart/form-data" onSubmit={(e) => submitHandler(e)}>
        <div className="d-flex align-items-center mb-2">
          <Link to="/profile">
            <RoundImage4
              className="mr-2"
              src={user.profile_photo}
              width="36px"
            />
          </Link>
          <Input
            id="post_input_form"
            onFocus={() => setExpandForm(true)}
            style={{ borderRadius: "24px" }}
            value={content}
            className="w-100 py-1 pr-5"
            type="textarea"
            rows={1}
            name="content"
            onChange={(e) => {
              setContent(e.target.value);
              onChangeHandler(e);
            }}
            placeholder={`What's on your mind, ${displayName}?`}
          />
        </div>
        <CSSTransition
          in={showImageForm}
          timeout={300}
          classNames="fade"
          unmountOnExit
        >
          <FormGroup style={{ marginLeft: "48px" }}>
            <Input
              onChange={(e) => setFile(e.target.files[0])}
              type="file"
              name="image"
            />
            <em>Max 5MB (Accepted formats: jpg, jpeg, png)</em>
          </FormGroup>
        </CSSTransition>

        <CSSTransition
          in={expandForm}
          timeout={300}
          classNames="fade"
          unmountOnExit
        >
          <FormGroup className="d-flex justify-content-center align-items-center w-100 py-2">
            <Button type="submit" className="w-25 px-5" color="primary">
              Post!
            </Button>
          </FormGroup>
        </CSSTransition>
        <hr className="my-2" />
        <GrayHover1 onClick={() => setImageForm(!showImageForm)}>
          <FcStackOfPhotos size={36} className="mr-2" />
          <p className="m-0">Photos</p>
        </GrayHover1>
      </Form>
    </Container>
  );
};

export default PostForm;
