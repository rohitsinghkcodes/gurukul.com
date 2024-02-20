import Layout from "../Components/Layouts/Layout.js";
import React from "react";
import { useSearch } from "../Context/searchContext";
import { Link } from "react-router-dom";
import { useCart } from "../Context/cartContext.js";
import { toast } from "react-toastify";

const Search = () => {
  const [values] = useSearch();
  const [cart, setCart] = useCart();

  return (
    <Layout title={"All products | Search"}>
      <div className="row m-4">
        <div className="col-md-12 ">
          <div style={{ color: "white", margin: "2px" }}>
            {values?.results.length < 1 ? (
              <h4 className="text-start text-secondary mt-5">
                No result found for this search keyword
              </h4>
            ) : (
              <h5>{`Search Results: ${values?.results.length} Products Found`}</h5>
            )}
          </div>
          <div className="d-flex flex-wrap ">
            {values?.results.map((product) => (
              <div
                className="card m-2 bg-dark product-card  "
                style={{ width: "17rem" }}
                key={product._id}
              >
                <Link to={`/product/${product.slug}`} className="product-link">
                  <div className="card-body product-card">
                    <h6
                      className="card-title"
                      style={{
                        overflow: "hidden",
                        display: "-webkit-box",
                        WebkitLineClamp: 1,
                        WebkitBoxOrient: "vertical",
                        fontSize: "16px",
                        fontWeight: "bold",
                      }}
                    >
                      {product.name}
                    </h6>
                    <p
                      className="card-text"
                      style={{
                        overflow: "hidden",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      {product.description}
                    </p>
                  </div>
                </Link>

                <div className="card-body pt-0">
                  <div className="text-center">
                    <button
                      className="btn btn-warning rounded-4"
                      style={{
                        minWidth: "95%",
                      }}
                      onClick={() => {
                        setCart([...cart, product]);
                        localStorage.setItem(
                          "cart",
                          JSON.stringify([...cart, product])
                        );
                        toast.success("Item added to cart");
                      }}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Search;
