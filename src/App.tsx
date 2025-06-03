import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { Homepage } from "./pages/Home";
import Contact from "./pages/Contact";
import ProductList from "./pages/Product";
import PropertyDetail from "./pages/PropertyDetail";
import BookARoom from "./pages/BookARoom";
import About from "./pages/About";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Homepage />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="product-list" element={<ProductList />} />
          <Route path="hostel-detail/:id" element={<PropertyDetail />} />
          <Route path="book-room/:id" element={<BookARoom/>} />


        </Route>
      </Routes>
    </Router>
  );
};

export default App;

