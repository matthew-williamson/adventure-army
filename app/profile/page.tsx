import { Avatar, Divider, Stack, Typography } from "@mui/material";
import userApi from "../api/userApi";
import { format } from "date-fns";

interface ProfilePageProps {
  searchParams: Record<string, string>;
}

const Info = ({
  label,
  text,
  stack,
}: {
  label: string;
  text: string;
  stack?: boolean;
}) => {
  return (
    <Stack
      direction={stack ? "column" : "row"}
      sx={{ alignItems: stack ? undefined : "center" }}
      spacing={1}
    >
      <Typography color="#FA8128" fontWeight={600}>
        {label}:
      </Typography>
      <Typography>{text}</Typography>
    </Stack>
  );
};

export default async function ProfilePage({ searchParams }: ProfilePageProps) {
  const userId = searchParams?.id;
  let user;
  if (!userId) {
    user = await userApi.getMe();
  } else {
    user = await userApi.getUser(userId);
  }

  if (!user) {
    // Probably would just want to redirect home?
    return (
      <Stack>
        <Typography>User Not Found</Typography>
      </Stack>
    );
  }

  const normalizedDate = format(
    new Date(user.createdDate).toLocaleDateString(),
    "MM/dd/yyyy"
  );

  return (
    <Stack spacing={3}>
      <Stack
        spacing={1}
        sx={{
          alignItems: "center",
          backgroundColor: "rgba(255, 170, 136, 0.2)",
          borderRadius: "4px",
          p: 1,
        }}
      >
        <Avatar
          src={user.avatarUrl}
          sx={{ height: 200, width: 200, border: "1px solid #FA8128" }}
        />
        <Typography variant="h5">
          {user.firstName} {user.lastName}
        </Typography>
        <Typography variant="h6" color="#FA8128">
          @{user.username}
        </Typography>
      </Stack>
      <Stack
        direction="row"
        sx={{
          alignItems: "center",
          justifyContent: "space-between",
          border: "1px solid rgba(255, 170, 136, 0.5)",
          p: 2,
          borderRadius: "4px",
        }}
      >
        <Info
          label="Address"
          text={`${user.address}, ${user.city}, ${user.state} ${user.postalCode}`}
        />
        <Info label="Role(s)" text={user.roles.join(", ")} />
        <Info label="Member Since" text={normalizedDate} />
      </Stack>
      <Stack
        sx={{
          alignItems: "center",
          justifyContent: "space-between",
          border: "1px solid rgba(255, 170, 136, 0.5)",
          p: 2,
          borderRadius: "4px",
        }}
      >
        <Info label="About Me" text={user.aboutMe} stack />
      </Stack>
    </Stack>
  );
}
