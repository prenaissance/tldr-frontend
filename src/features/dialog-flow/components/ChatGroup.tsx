import { Avatar, Box } from "@mui/material";
import { ReactNode } from "react";

type ChatGroupProps = {
  children: ReactNode;
  isUser?: boolean;
};

const ChatGroup = ({ children, isUser = false }: ChatGroupProps) => {
  const avatarProps = isUser
    ? {
        sx: {
          bgcolor: "secondary.main",
        },
        children: "U",
      }
    : {
        src: "https://scontent-otp1-1.xx.fbcdn.net/v/t39.30808-1/301515898_514253574036153_7619055477694531610_n.png?stp=dst-png_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=c6021c&_nc_ohc=4r-i0Xs9b-UAX-Xo6bu&_nc_ht=scontent-otp1-1.xx&oh=00_AfD_bn0D-4jS-kwsRAzMLdpPb80prrM7wI_TuFoZOA3nqQ&oe=63880852",
      };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isUser ? "row-reverse" : "row",
        alignItems: "flex-start",
        m: "0.7rem",
      }}
    >
      <Avatar {...avatarProps}></Avatar>
      <Box
        sx={{
          ":first-of-type(.chat__message)": {
            borderBottomRightRadius: 0,
          },
          ":last-of-type(.chat__message)": {
            borderTopRightRadius: 0,
          },
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default ChatGroup;
