import { QueryClientProvider } from "react-query";
import { ThemeProvider } from "@emotion/react";

import "assets/styles.global.scss";
import theme from "assets/theme";
import queryClient from "config/queryClient";
import Router from "pages/_router/Router";
import { Layout } from "pages/_layout";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Router />
        </Layout>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
