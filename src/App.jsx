import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./layout/HomePage/HomePage";
import Form from "./layout/RegistrationForm/Form";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="register" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
