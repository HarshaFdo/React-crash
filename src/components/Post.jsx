const names = ['Harsha', 'Ashan'] 

function Post() {
  const choesenName = Math.random() > 0.5 ? names[0] : names[1];

  return (
    <div>
      <p>{choesenName}</p>
      <p>React.js is awesome!</p>
    </div>
  );
}

export default Post;