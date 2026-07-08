import React from "react";

import PostForm from "../components/post-Form/PostForm";
import Container from "../components/Container/Container";

function AddPost() {
  return (
    <Container>
      <div className="py-8">
        <PostForm />
      </div>
    </Container>
  );
}

export default AddPost;
