import { Stack, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Stack
      direction="row"
      sx={{
        backgroundColor: "rgba(255, 170, 136, 1)",
        zIndex: 1,
        alignItems: "center",
        justifyContent: "space-between",
        p: 2,
        width: 'calc(100% - 32px)',
        position: "sticky",
        bottom: 0
      }}
    >
      <Stack direction="row" spacing={2}>
        <Typography sx={{ color: "white" }}>
            &#169; Copywright Adventure Army
        </Typography>
      </Stack>
    </Stack>
  );
}
