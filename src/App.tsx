import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./layout";
import { Associates } from './pages/Associates'
import "./styles/globalStyles";
import { CreateAssociate } from "./pages/Associates/create";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Associates />} />
            <Route path="associates/create" element={<CreateAssociate />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
