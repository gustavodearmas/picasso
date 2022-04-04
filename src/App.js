import "./styles/main.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateLayouth from "./layouts/PrivateLoyouts";
import Index from "./pages/users/Index";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";
import SendMail from "./components/ultils/SendMail";
import IndexR from "./pages/users/reports/IndexR";
import Test from "./pages/users/Test";
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
          <Route path="/admin" element={<PrivateLayouth />}>
            <Route path="users/" element={<Index />} />
            <Route path="users/sendmail" element={<SendMail />} />
            <Route path="users/filter-data" element={<IndexR />} />
           
          </Route>
          <Route path="/test" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
    </>
  );
}

export default App;
