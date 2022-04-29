import { Route, Routes } from 'react-router-dom';
import './App.css';
import Banner from './components/Banner/Banner';
import Blogs from './components/Blogs/Blogs';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ManageInventory from './components/ManageInventory/ManageInventory';
import NotFound from './components/NotFound/NotFound';
import Product from './components/Product/Product';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Banner></Banner>}></Route>
        <Route path="/" element={<Product> </Product>}></Route>
        <Route
          path="/manage-inventory"
          element={<ManageInventory> </ManageInventory>}
        ></Route>
        <Route path="/blogs" element={<Blogs> </Blogs>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
