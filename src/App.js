import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import NavbarComponent from "./publicComponents/Navbar.component";
import ProductsComponent from "./components/products/Products.component";
import ProductsListComponent from "./components/products/ProductsList.component";
import ProductAddComponent from "./components/products/ProductAdd.component";
import ProductEditeComponent from './components/products/ProductEdite.component';

function App() {
  return (
      <>
          
          <Router>
          <NavbarComponent/>
              <Routes>
                  <Route path="/products" element={<ProductsComponent />}>
                      <Route path="" index element={<ProductsListComponent/>} />
                      <Route path="add" element={<ProductAddComponent />} />
                      <Route path="edite/:id" element={<ProductEditeComponent />} />
                      <Route path="list" element={<ProductsListComponent />} />
                  </Route>
              </Routes>
          </Router>
      </>
  );
}

export default App;
