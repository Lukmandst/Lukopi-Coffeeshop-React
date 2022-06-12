import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Public/Home";
import Product from "../pages/Public/Product";
import Profile from "../pages/Public/Profile";
import SignIn from "../pages/Auth/SignIn";
import SignUp from "../pages/Auth/SignUp";
import ForgotPass from "../pages/Public/ForgotPass";
import ProductDetails from "../pages/Public/ProductDetails";
import Payment from "../pages/Public/Payment";
import History from "../pages/Public/History";
import NotFound from "../pages/404";
import HistoryDetails from "../pages/Public/HistoryDetails";
import PrivateElement from "../components/PrivateElement";
import PrivateElementAfterLogin from "../components/PrivateElementAfterLogin";
import AdminDashboard from '../pages/Admin/dashboard'
import Orders from '../pages/Admin/orders'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/signin"
          element={
            <PrivateElementAfterLogin>
              <SignIn />
            </PrivateElementAfterLogin>
          }
        />
        <Route
          path="/signup"
          element={
            <PrivateElementAfterLogin>
              <SignUp />
            </PrivateElementAfterLogin>
          }
        />
        <Route path="/products" element={<Product />} />
        <Route path="/products?" element={<Product />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route
          path="/profile"
          element={
            <PrivateElement>
              <Profile />
            </PrivateElement>
          }
        />
        <Route path="/forgot" element={<ForgotPass />} />
        <Route
          path="/yourcart"
          element={
            <PrivateElement>
              <Payment />
            </PrivateElement>
          }
        />
        <Route
          path="/history"
          element={
            <PrivateElement>
              <History />
            </PrivateElement>
          }
        />
        <Route
          path="/history/:id"
          element={
            <PrivateElement>
              <HistoryDetails />
            </PrivateElement>
          }
        />
        <Route path="/orders" element={<Orders />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
