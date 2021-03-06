import Axios from "axios";
import { useState } from "react";
import { Form, Input, Button, FormGroup } from "reactstrap";
import { TransparentBackground } from "./comp.components";

const Image = ({
  method = "PUT",
  content,
  path,
  setImageForm,
  reloadUser,
}) => {
  const [file, setFile] = useState(null);

  const config = localStorage.getItem('token') &&  {
    headers: {
      Authorization: "bearer " + localStorage.getItem("token"),
    },
  };


  const onSubmitHandler = (e) => {
    e.preventDefault();
    e.stopPropagation(); // stop propagating submit the the comment form
    const formData = new FormData();
    if (content) formData.append("content", content);
    formData.append("image", file);
    if (method === "PUT") {
      Axios.put(path, formData, config)
        .then((res) => {
          setImageForm(false);
          reloadUser();
        })
        .catch((err) => console.log(err));
    } else {
      Axios.post(path, formData, config)
      .then((res) => {
        setImageForm(false);
        reloadUser();

      });
    }
  };

  return (
    <TransparentBackground className="d-flex justify-content-center align-items-center">
      <Form
        onSubmit={(e) => onSubmitHandler(e)}
        style={{ background: "white", borderRadius: "10px" }}
        className="p-3 w-50 mx-auto"
        border
      >
        <FormGroup className="text-center">
          <Input
            onChange={(e) => setFile(e.target.files[0])}
            type="file"
            name="image"
          />
        </FormGroup>
        <FormGroup className="d-flex justify-content-end">
          <Button className="mr-2" type="submit" color="secondary">
            Submit
          </Button>
          <Button
            type="button"
            color="danger"
            onClick={() => setImageForm(false)}
          >
            Cancel
          </Button>
        </FormGroup>
      </Form>
    </TransparentBackground>
  );
};

export default Image;
