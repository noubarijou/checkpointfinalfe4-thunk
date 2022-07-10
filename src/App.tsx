import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Details from "./pages/Details";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="details" element={<Details />} />
      </Route>
    </Routes>

  );
}

export default App;
