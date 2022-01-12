import "./styles/main.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PrivateLayouth from "./layouts/PrivateLoyouts";
import IndexUser from "./pages/users/indexUser";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/admin" element={<PrivateLayouth />}>
            <Route path="" element={<IndexUser />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
