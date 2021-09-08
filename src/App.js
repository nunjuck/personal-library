import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
// import { ReactQueryDevtools } from "react-query/devtools";

import Header from "./components/Header";
import Library from "./components/Library";

const queryClient = new QueryClient();


const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Header />
        <Switch>
          <Route path="/category/:name" component={Library} />
          <Route path="/" component={Library} />
        </Switch>
        {/* <ReactQueryDevtools initialIsOpen /> */}
      </Router>
    </QueryClientProvider>
  );
};

export default App;
