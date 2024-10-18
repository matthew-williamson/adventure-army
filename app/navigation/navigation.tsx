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
        variant="h5"
        sx={{
          fontWeight: 600,
          color: "white",
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
        backgroundColor: "rgba(255, 170, 136, 1)",
        zIndex: 1,
        alignItems: "center",
        justifyContent: "space-between",
        px: 2,
        py: 1,
        width: 'calc(100% - 32px)',
        position: "sticky",
        top: 0
      }}
    >
      <Stack direction="row" spacing={2}>
        <StyledLink label="Home" url="/" />
        <StyledLink label="Profile" url="/profile" />
      </Stack>
      <Image
        height={55}
        width={70}
        alt="Adventure Army"
        src="/aa-logo.png"
      />
    </Stack>
  );
}
