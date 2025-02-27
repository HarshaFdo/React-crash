import { useState } from "react";

import Post from "./Post";
import NewPost from "./NewPost";
import classes from "./PostsList.module.css";

function PostsList() {
  const [enterBody, setEnterBody] = useState('');

  function bodyChangeHandler(event) {
    setEnterBody(event.target.value);
  }

  return (
    <>
      <NewPost onBodyChange = {bodyChangeHandler} />
      <ul className={classes.posts}>
        <Post author="Harsha" body={enterBody}/>
        <Post author="Ashan" body="Check out the full course!" />
      </ul>
    </>
  )
}

export default PostsList;