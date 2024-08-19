import React from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@configs/client";
import { RecoilRoot } from "recoil";
import AppNav from "@navigation/AppNav";

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
