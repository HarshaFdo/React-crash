import { useState } from "react";

import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import classes from "./PostsList.module.css";

function PostsList() {
  const [ modalIsVisible, setModalsVisible ] = useState(true);
  const [enterBody, setEnterBody] = useState('');
  const [enterAuthor, setEnterAuthor] = useState('');

  function hideModalHandler() {
    setModalsVisible(false);
  }

  function bodyChangeHandler(event) {
    setEnterBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setEnterAuthor(event.target.value);
  }

  //let modalContent;

  //if (modalIsVisible) {
    //modalContent = <Modal onClose={hideModalHandler}>
    //<NewPost 
      //onBodyChange = {bodyChangeHandler} 
      //onAuthorChange = {authorChangeHandler} 
    ///>
  //</Modal>
  //}

  return (
    <>
      {modalIsVisible && (
        <Modal onclose={hideModalHandler}>
          <NewPost 
            onBodyChange={bodyChangeHandler}
            onAuthorChange = {authorChangeHandler}
          >
          </NewPost>

        </Modal>
      )}
      <ul className={classes.posts}>
        <Post author={enterAuthor} body={enterBody}/>
        <Post author="Ashan" body="Check out the full course!" />
      </ul>
    </>
  )
}

export default PostsList;