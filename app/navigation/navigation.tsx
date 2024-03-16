import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

interface StyledLinkProps {
  label: string;
  url: string;
}
const StyledLink = ({ label, url }: StyledLinkProps) => {
  return (
    <Link href={url} style={{ textDecoration: "none" }}>
      <Typography
        variant="h6"
        sx={{
          color: "#FA8128",
          ":hover": {
            opacity: 0.75,
          },
        }}
      >
        {label}
      </Typography>
    </Link>
  );
};

export default function Navigation() {
  return (
    <Stack
      direction="row"
      sx={{
        borderBottom: "1px solid rgba(255, 170, 136, 0.5)",
        alignItems: "center",
        justifyContent: "space-between",
        height: 64,
        position: "relative",
      }}
    >
      <Stack direction="row" spacing={2}>
        <StyledLink label="Home" url="/" />
        <StyledLink label="Profile" url="/profile" />
      </Stack>
      <Image
        width={70}
        height={50}
        alt="Adventure Army"
        src="/aa-logo.png"
        style={{ position: "absolute", right: -12 }}
      />
    </Stack>
  );
}
