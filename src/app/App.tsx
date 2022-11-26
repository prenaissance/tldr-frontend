import "./App.css";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Router from "../routes/Router";
import theme from "./theme";
import { ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import store from "./store";

const queryClient = new QueryClient();

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <Router />
        </QueryClientProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
