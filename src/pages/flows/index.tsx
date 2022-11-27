import { Box, Paper } from "@mui/material";
import DialogFlow from "../../features/dialog-flow";

const Flows = () => {
  return (
    <Box
      sx={{
        p: "2rem",
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Paper
        sx={{
          m: "0 2rem",
          height: "max(600px, 90vh)",
          width: "max(calc(100% - 10rem), 600px)",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          backdropFilter:
            "blur(6px) saturate(100%) contrast(45%) brightness(130%)",
        }}
      >
        <DialogFlow />
      </Paper>
    </Box>
  );
};

export default Flows;
