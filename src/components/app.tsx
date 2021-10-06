import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
// import { ReactQueryDevtools } from "react-query/devtools";

import Header from "./Header";
import Library from "./Library";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Header />
        <Switch>
          <Route path="/category/:nameCategory" component={Library} />
          <Route path="/" component={Library} />
        </Switch>
        {/* <ReactQueryDevtools initialIsOpen /> */}
      </Router>
    </QueryClientProvider>
  );
};

export default App;
