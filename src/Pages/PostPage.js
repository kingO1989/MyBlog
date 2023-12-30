import PostSingleFull from "../Components/PostSingleFull";
import { useParams } from "react-router-dom";
const PostPage = () => {
  const { postid } = useParams();

  console.log(postid);
  return <PostSingleFull postid={postid} />;
};

export default PostPage;