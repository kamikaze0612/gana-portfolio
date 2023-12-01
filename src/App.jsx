import Homepage from "./pages/home/Homepage";
import Project from "./pages/project/Project";
import GlobalStyles from "./styles/GlobalStyles";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate to="/" replace />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/project" element={<Project />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
