import { Routes, Route } from "react-router-dom";
import HomePage from "src/pages/HomePage";
import Search from "src/pages/Search";
import Watch from "src/pages/Watch";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search" element={<Search />} />
      <Route path="/watch/:id" element={<Watch />} />
    </Routes>
  );
};

export default Routing;
