import { useState } from "react";

import PostsList from "./components/PostsList";
import MainHeader from "./components/MainHeader";

function App() {
  const [ modalIsVisible, setModalsVisible ] = useState(true);

  function showModalHandler() {
    setModalsVisible(true);
  }

  function hideModalHandler() {
    setModalsVisible(false);
  }

  return (
    <> 
      <MainHeader onCreatePost={showModalHandler}/>
      <main>
        <PostsList isPosting={modalIsVisible} onStopPosting={hideModalHandler}/>
      </main>
    </> 
  );
}    

export default App;
