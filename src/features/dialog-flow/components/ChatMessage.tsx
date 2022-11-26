import { Box } from "@mui/material";

type ChatMessageProps = {
  text: string;
  isUser?: boolean;
};

const ChatMessage = ({ text, isUser = false }: ChatMessageProps) => {
  return (
    <Box
      sx={{
        borderRadius: "30px",
        p: "0.5rem 1rem",
        m: "0.5rem",
        bgcolor: isUser ? "primary.dark" : "primary.main",
        color: "secondary.main",
        width: "fit-content",
        className: "chat__message",
      }}
    >
      {text}
    </Box>
  );
};

export default ChatMessage;
