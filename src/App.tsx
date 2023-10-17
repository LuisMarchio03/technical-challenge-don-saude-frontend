import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./layout";
import { Associates } from './pages/Associates'
import "./styles/globalStyles";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Associates />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
