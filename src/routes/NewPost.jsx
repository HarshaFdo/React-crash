
import { Link } from "react-router-dom";

import classes from "./NewPost.module.css";
import Modal from "../components/Modal";

function NewPost() {

  return (
    <Modal>
      <form className={classes.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" name="body" required rows={3}  />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            name="author"
            required
          />
        </p>
        <p className={classes.actions}>
          <Link to=".." type="button">
            Cancel
          </Link >
          <button>Submit</button>
        </p>
      </form>
    </Modal>
  );
}

export default NewPost;

export function action() {
  fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json",
    },
  });
}
