import { Box } from "@mui/material";

type ChatMediaProps = {
  src: string;
};

const ChatMedia = ({ src }: ChatMediaProps) => {
  return (
    <Box
      sx={{
        borderRadius: "15px",
        p: "0.5rem 0.5rem",
        m: "0.5rem",
        bgcolor: "primary.main",
        width: "fit-content",
        height: "fit-content",
      }}
    >
      <img src={src} alt="media" />
    </Box>
  );
};

export default ChatMedia;
