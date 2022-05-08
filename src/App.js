import { Route, Routes } from 'react-router-dom';
import './App.css';
import Banner from './components/Banner/Banner';
import Blogs from './components/Blogs/Blogs';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import AddNewItem from './components/AddNewItem/AddNewItem';
import ManageInventory from './components/ManageInventory/ManageInventory';
import NotFound from './components/NotFound/NotFound';
import OurProcedure from './components/OurProcedure/OurProcedure';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Products from './components/Products/Products';
import RequireAuth from './components/RequireAuth/RequireAuth';
import SignUp from './components/SignUp/SignUp';
import Team from './components/Team/Team';
import UpdateItem from './components/UpdateItem/UpdateItem';
import { Toaster } from 'react-hot-toast';
import MyItems from './components/MyItems/MyItems';
import AddNewBlog from './components/AddNewBlog/AddNewBlog';
import Blog from './components/Blog/Blog';

function App() {
  return (
    <div>
      <Toaster />
      <Header></Header>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner></Banner>
              <Products></Products>
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
        <Route
          path="/product/:id"
          element={
            <RequireAuth>
              <ProductDetail></ProductDetail>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/manage-inventory/add-new-item"
          element={
            <RequireAuth>
              <AddNewItem></AddNewItem>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/product/update/:id"
          element={
            <RequireAuth>
              <UpdateItem></UpdateItem>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/user/items"
          element={
            <RequireAuth>
              <MyItems></MyItems>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/blog/add-blog"
          element={<AddNewBlog></AddNewBlog>}
        ></Route>
        <Route path="/blog/:id" element={<Blog></Blog>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
