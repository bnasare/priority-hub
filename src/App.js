import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateUser from "./pages/CreateUser";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreateUser />} />
        <Route path="/homepage" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
