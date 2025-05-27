import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import SuccessStories from "./Pages/SuccessStories/SuccessStories";
import Root from "./Layout/Root";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="success-stories" element={<SuccessStories />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
