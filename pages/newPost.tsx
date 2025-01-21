import { useRouter } from "next/router";
import NewPostComponent from "@components/BlogComponents/NewPostComponents/NewPost";

export default function newPostPage() {

    const router = useRouter();
    const { post: postQuery } = router.query;
  
    const postSelected = postQuery ? JSON.parse(Array.isArray(postQuery) ? postQuery[0] : postQuery) : null;
  
    return <NewPostComponent postSelected={postSelected} />;
  }

