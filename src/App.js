import { Route, Routes } from 'react-router-dom';
import './App.css';
import Banner from './components/Banner/Banner';
import Blogs from './components/Blogs/Blogs';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ManageInventory from './components/ManageInventory/ManageInventory';
import NotFound from './components/NotFound/NotFound';
import OurProcedure from './components/OurProcedure/OurProcedure';
import Product from './components/Product/Product';
import Team from './components/Team/Team';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner></Banner>
              <Product></Product>
              <OurProcedure></OurProcedure>
              <Team></Team>
            </>
          }
        ></Route>
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
