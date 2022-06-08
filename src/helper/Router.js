import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Profile from "../pages/Profile";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import ForgotPass from "../pages/ForgotPass";
import ProductDetails from "../pages/ProductDetails";
import Payment from "../pages/Payment";
import History from "../pages/History";
import NotFound from "../pages/404";
import HistoryDetails from "../pages/HistoryDetails";
import PrivateElement from "../components/PrivateElement";
import PrivateElementAfterLogin from "../components/PrivateElementAfterLogin";

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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
