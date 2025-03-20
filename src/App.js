
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FetchData from "./pages/fetchData/FetchData";
import Faq from "./pages/faq/Faq";
function App() {
  return (
   <>
    <Routes>
          <Route exact path="/" element={<Faq />} />
          <Route exact path="/reviews" element={<FetchData />} />
      </Routes>
   </>
  );
}

export default App;
