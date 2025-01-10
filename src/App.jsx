import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import HomePage from "./layout/HomePage/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="home" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
