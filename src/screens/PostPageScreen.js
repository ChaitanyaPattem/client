import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from "reactstrap";
import { Posts, Navbar, Loading } from "../Components";
import { CSSTransition } from 'react-transition-group';
import axios from 'axios';

const PostPageScreen = (props) => {
  
  const { post_id } = useParams();

  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState(undefined)
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setLoading(true);
    // GET All posts
    axios.get('/posts')
    .then(res => {
      setPosts(res.data)
    })
    // GET This post
    axios.get('/posts/' + post_id)
    .then(res => {
      setPost(res.data);
      setLoading(false);
    })
  }, [])

  return (
    <Container fluid className="m-0 p-0">
      <CSSTransition
        in={loading}
        timeout={300}
        classNames='fade'
        unmountOnExit
      >
        <Loading />
      </CSSTransition>
      <Navbar key="posts" {...props} />
      <Container className="mt-2">
        {post && <Posts {...props} post={post} posts={posts} setPosts={setPosts} />}
      </Container>
    </Container>
  );
};

export default PostPageScreen;
