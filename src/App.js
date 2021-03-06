import { useState, useEffect} from "react";
import "./App.css";
import { Container } from "reactstrap";
import { IndexScreen, HomeScreen, ProfileScreen, RegisterScreen, FriendsScreen, PostPageScreen, ProtectedRoute } from "./screens";
import { Route, HashRouter as Router } from "react-router-dom";
import Axios from "axios";

function App() {

  const [user, setUser] = useState(undefined);

  const reloadUser = () => {
    // GET the full user object based on its id;
    // I use this for when I need to update the user after some changes have been made to it - for example when I add/remove a friend;
    if(user) {
      Axios.get(`/users/${user._id}`)
      .then(res => {
        setUser(res.data);
      })
      .catch(err => console.log(err))
    } 
  } 

  const getUser = (token) => {
    const config = {headers: {Authorization: `bearer ${token}`}}
    Axios.get('/isLoggedIn', config)
    .then(res => {
      Axios.get(`/users/${res.data.user_id}`)
      .then(res => setUser(res.data))
    })
  }

  // Check if user is logged in
  useEffect(() => {
    // check if there's a token in cookie(fb-auth) or localStorage(local-auth)
    const token = localStorage.getItem('token') || document.cookie.split('=')[1];
    if(token) {
      localStorage.setItem('token', token);
      getUser(token);
    } 
  }, [])


  const props = { user, reloadUser, setUser };

  return (
    <Router>
      <Container style={{minHeight: '100vh'}} fluid className="p-0">
        {/* Page routes */}
        <ProtectedRoute exact path='/home'  setUser={setUser} {...props} component={HomeScreen}/>
        <ProtectedRoute
          path="/profile"
          {...props}
          component={ProfileScreen}
        ></ProtectedRoute>
        <Route
          path="/register"
          render={() => <RegisterScreen getUser={getUser} {...props} />}
        ></Route>
        <Route 
          path="/"
          exact
          render={() => <IndexScreen getUser={getUser} {...props} />}
        ></Route>
        <ProtectedRoute
          path="/friends"
          exact
          {...props} 
          component={FriendsScreen}
        ></ProtectedRoute>
        <ProtectedRoute
          exact
          path='/posts/:post_id'
          {...props}
          component={PostPageScreen}
        ></ProtectedRoute>
        <ProtectedRoute
          exact
          path='/users/:user_id'
          {...props} 
          component={ProfileScreen}
        ></ProtectedRoute>

        {/* Necessary for facebook oauth in development */}
        <Route 
          path="/_=_"
          exact
          render={() => <IndexScreen getUser={getUser} {...props} />}
        ></Route>

      </Container>
      
    </Router>
  );
}

export default App;
