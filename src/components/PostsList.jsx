import { useState } from "react";

import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import classes from "./PostsList.module.css";

function PostsList({isPosting, onStopPosting}) {
  return (
    <>
      {isPosting && (
        <Modal onclose={onStopPosting}>
          <NewPost onCancel={onStopPosting}
          >
          </NewPost>

        </Modal>
      )}
      <ul className={classes.posts}>
        <Post author="Ashan" body="Check out the full course!" />
      </ul>
    </>
  )
}

export default PostsList;