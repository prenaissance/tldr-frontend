import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import background from "@assets/background.jpg";
console.log(background);
const Layout = () => {
  return (
    <Box
      sx={{
        width: 1,
        minHeight: "100vh",
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
      }}
    >
      <Outlet />
    </Box>
  );
};

export default Layout;
