import React, {  useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
// import ProductIcon from "../../components/ProductIcon";
import "./product.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Mom from "../../assets/image/stock/mom.png";
import Dad from "../../assets/image/stock/dad.png";
import Pirate from "../../assets/image/stock/pirate.png";
import ProductIcon from "../../components/ProductIcon";
// import withParams from "../../helper/WithParams";
import Pagination from "../../components/Pagination";

export default function Product() {
  const [products, setProduct] = useState([]);
  const [param, setParam] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  // Get current product
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    const url = "http://localhost:8080/product/all";
    const axiosGet = async () => {
      const result = await axios.get(url);
      setProduct(result.data.data);
    };
    axiosGet().catch(console.error);
  }, []);

  const handleForCoffee = (e) => {
    e.preventDefault();
    const parameter = "?category=07e88ba9-1a54-46ab-bf2c-3dc8831090a4";
    const url = `http://localhost:8080/product${parameter}`;
    axios
      .get(url)
      .then((result) => {
        console.log(result.data.data);
        setProduct(result.data.data);
        setParam(parameter);
      })
      .catch((error) => console.error(error));
    // <Link to={`${parameter}`} />;
  };
  const handleForNonCoffee = () => {
    const parameter = "?category=30b95dde-a820-41dd-b474-902026e3e755";
    const url = `http://localhost:8080/product${parameter}`;
    axios
      .get(url)
      .then((result) => {
        console.log(result.data.data);
        setProduct(result.data.data);
        setParam(parameter);
      })
      .catch((error) => console.error(error));
  };

  const handleForFoods = () => {
    const parameter = "?category=ea71bfcd-f1f1-4976-ae1e-9ff0f2c70d0e";
    const url = `http://localhost:8080/product${parameter}`;
    axios
      .get(url)
      .then((result) => {
        console.log(result.data.data);
        setProduct(result.data.data);
        setParam(parameter);
      })
      .catch((error) => console.error(error));
  };
  const handleForAllMenu = () => {
    const url = `http://localhost:8080/product/all`;
    axios
      .get(url)
      .then((result) => {
        console.log(result.data.data);
        console.log(result.data.data.length);
        setProduct(result.data.data);
        setParam("");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <Navbar />
      <section className="product">
        <div className="container">
          <div className="row">
            <div className="col left-panel">
              <h3>Promo Today</h3>
              <p className="subpromo">
                Coupons will be updated every weeks. Check them out!
              </p>
              <div className="coupon">
                <button className="coupon-btn mom">
                  <img src={Mom} alt="mom" />
                  <ul>
                    <li className="coupon-title">HAPPY MOTHER'S DAY!</li>
                    <li>Get one of our favorite menu for free!</li>
                  </ul>
                </button>
                <button className="coupon-btn dad">
                  <img src={Dad} alt="dad" />
                  <ul>
                    <li className="coupon-title">
                      Get a cup of coffee for free on sunday morning
                    </li>
                    <li>Only at 7 to 9 AM</li>
                  </ul>
                </button>
                <button className="coupon-btn mom ">
                  <img src={Mom} alt="mom" />
                  <ul>
                    <li className="coupon-title">HAPPY MOTHER'S DAY!</li>
                    <li>Get one of our favorite menu for free!</li>
                  </ul>
                </button>
                <button className="coupon-btn pirate">
                  <img src={Pirate} alt="pirate" />
                  <ul>
                    <li className="coupon-title">HAPPY HALLOWEEN!</li>
                    <li>
                      Do you like chicken wings? Get 1 free only if you buy
                      pinky promise
                    </li>
                  </ul>
                </button>
                <button className="apply-btn">Apply Coupon</button>
              </div>
              <ul className="terms-wrapper">
                <span>Terms and Condition</span>
                <li>1. You can only apply 1 coupon per day</li>
                <li>2. It only for dine in</li>
                <li>3. Buy 1 get 1 only for new user</li>
                <li>4. Should make member card to apply coupon</li>
              </ul>
            </div>
            <div className="col right-panel">
              <div className="container">
                <div className="category-wrapper">
                  <ul className="category-menu mx-auto">
                    <li className="menu-item-home">
                      <Link
                        className="active"
                        to="/products"
                        onClick={handleForAllMenu}
                      >
                        All Menu
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link
                        to="?category=07e88ba9-1a54-46ab-bf2c-3dc8831090a4"
                        className="menu-link"
                        onClick={handleForCoffee}
                      >
                        Coffee
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link
                        to="?category=30b95dde-a820-41dd-b474-902026e3e755"
                        className="menu-link"
                        onClick={handleForNonCoffee}
                      >
                        Non Coffee
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link
                        to="?category=ea71bfcd-f1f1-4976-ae1e-9ff0f2c70d0e"
                        className="menu-link"
                        onClick={handleForFoods}
                      >
                        Foods
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link to="#" className="menu-link">
                        Add-on
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="show-product">
                  <div className=" product-wrapper d-flex">
                    {Array.isArray(currentPosts) ? (
                      currentPosts.map((product) => (
                        <ProductIcon key={product.id} data={product} />
                      ))
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
                <p className="notes">
                  *the price has been cutted by discount appears
                </p>
                <Pagination
                  postsPerPage={postsPerPage}
                  totalPosts={products.length}
                  paginate={paginate}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

// class Product extends Component {
//   constructor() {
//     super();
//     state = {
//       products: [],
//       currentPage: 1,
//       productPerPage: 10,
//       param: "",
//     };
//   }

//   async componentDidMount() {
//     ;
//     try {
//       const result = await axios.get(url);
//       const productsArray = result.data.data;
//       const productsMeta = result.data.meta;
//       // console.log(productsArray);
//       console.log(productsMeta);
//       setState({
//         products: productsArray,
//         param: "",
//       });
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   render() {

//     return (

//     );
//   }
// }

// export default withParams(Product);
