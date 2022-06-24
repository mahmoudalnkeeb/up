import React, { Fragment, useState } from "react";
import HomePage from "./components/Homepage/HomePage";
import Header from "./components/Header/Header";
import store from "./store/store";
import Profile from "./components/Profile/Profile";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFounded from "./components/NotFounded/NotFounded";
import UnderConstruction from "./components/UnderConstruction/UnderConstruction";
import AboutTap from "./components/Profile/taps/aboutTap/AboutTap";
import CreatePostBox from "./components/Homepage/CreatePost/CreatePostBox";
import PostsList from "./components/Homepage/PostsList/PostsList";
import Post from "./components/Homepage/Post/Post";

function App() {
  const [toggleMessage, setToggleMessage] = useState(false);

  return (
    <Fragment>
      <Provider store={store}>
        <BrowserRouter>
          <Header toggleMessage={toggleMessage} />
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  setToggleMessage={setToggleMessage}
                  toggleMessage={toggleMessage}
                />
              }
            />
            <Route path="profile" element={<Profile />}>
              <Route path="about" element={<AboutTap />} />
              <Route
                path="posts"
                element={
                  <>
                    <CreatePostBox />
                    <PostsList>
                      <Post />
                    </PostsList>
                  </>
                }
              />
            </Route>
            <Route path="groups" element={<UnderConstruction />} />
            <Route path="chat" element={<UnderConstruction />} />
            <Route path="*" element={<NotFounded />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </Fragment>
  );
}

export default App;
