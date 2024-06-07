import React from "react";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./src/utils/config/client";
import { RecoilRoot } from "recoil";
import AppNav from "./src/routes/AppNav";

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <AppNav />
      </RecoilRoot>
    </QueryClientProvider>
  );
};

export default App;
