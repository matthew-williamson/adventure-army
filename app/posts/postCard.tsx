import { Avatar, Stack, Typography } from "@mui/material";
import { format } from "date-fns";
import Link from "next/link";
import { Post } from "../types/types";

interface PostCardProps {
  post: Post;
}
export default function PostCard({ post }: PostCardProps) {
  const normalizedDate = format(
    new Date(post.createdDate).toLocaleDateString(),
    "MM/dd/yyyy @ hh:mma"
  );
  return (
    <Link
      href={`/?postId=${post.id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <Stack
        direction="row"
        sx={{
          alignItems: "center",
          borderRadius: "4px",
          border: "1px solid rgba(255, 170, 136, 0.5)",
          p: 2,
          cursor: "pointer",
          ":hover": {
            backgroundColor: "rgba(255, 170, 136, 0.2)",
          },
        }}
        spacing={2}
      >
        <Avatar src={post.user.avatarUrl} />
        <Stack>
          <Typography>{post.content}</Typography>
          <Typography variant="caption" sx={{ color: "#FA8128" }}>
            @{post.user.username} - {normalizedDate}
          </Typography>
        </Stack>
      </Stack>
    </Link>
  );
}
