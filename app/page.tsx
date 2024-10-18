import { Modal, Stack } from "@mui/material";

import postApi from "./api/postApi";
import PostCard from "./posts/postCard";
import PostDetails from "./posts/postDetails";

interface HomeProps {
  searchParams: Record<string, string>;
}
export default async function Home({ searchParams }: HomeProps) {
  const maybePostModalId = searchParams?.postId;
  const posts = await postApi.getPosts();
  const postForModal = maybePostModalId
    ? posts.find((post) => post.id === Number(maybePostModalId))
    : null;
  return (
    <Stack spacing={2} sx={{ p: 2 }}>
      {posts.map((post) => (
        <PostCard post={post} key={`post-${post.id}`} />
      ))}
      {postForModal ? (
        <Modal open={true}>
          <PostDetails post={postForModal} />
        </Modal>
      ) : null}
    </Stack>
  );
}
