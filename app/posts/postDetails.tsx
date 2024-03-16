import { Avatar, Divider, Stack, Typography } from "@mui/material";
import { format } from "date-fns";
import Link from "next/link";
import { Post } from "../types/types";
import { Close } from "@mui/icons-material";

interface PostDetailsProps {
  post: Post;
}
export default function PostDetails({ post }: PostDetailsProps) {
  const normalizedDate = format(
    new Date(post.createdDate).toLocaleDateString(),
    "MM/dd/yyyy @ hh:mma"
  );
  return (
    <Stack
      sx={{
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <Stack
        sx={{
          backgroundColor: "white",
          borderRadius: "4px",
          p: 2,
          maxWidth: 500,
          width: 500,
        }}
        spacing={1}
        divider={<Divider sx={{ backgroundColor: "#FA8" }} />}
      >
        <Stack
          direction="row"
          sx={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <Link
            href={`/profile?id=${post.user.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Stack direction="row" sx={{ alignItems: "center" }} spacing={1}>
              <Avatar src={post.user.avatarUrl} />
              <Stack>
                <Typography>
                  {post.user.firstName} {post.user.lastName}
                </Typography>
                <Typography variant="caption" sx={{ color: "#FA8128" }}>
                  @{post.user.username}
                </Typography>
              </Stack>
            </Stack>
          </Link>
          <Link href="/" style={{ textDecoration: "none", color: "#FA8" }}>
            <Close />
          </Link>
        </Stack>
        <Typography>{post.content}</Typography>
        <Typography variant="caption">{normalizedDate}</Typography>
      </Stack>
    </Stack>
  );
}
