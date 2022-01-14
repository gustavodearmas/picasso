import "./styles/main.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PrivateLayouth from "./layouts/PrivateLoyouts";
import IndexUser from "./pages/users/indexUser";
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";

// const httpLink = createHttpLink({
//   // uri: 'https://servidor-gql-mintic.herokuapp.com/graphql',
//   uri: 'http://localhost:4001/graphql',
// });


const client = new ApolloClient({
  uri: "http://localhost:4001/graphql",
  cache: new InMemoryCache()
});

function App() {
  return (
    <>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/admin" element={<PrivateLayouth />}>
            <Route path="users/" element={<IndexUser />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
    </>
  );
}

export default App;
