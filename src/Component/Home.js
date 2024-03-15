import React from "react";
function Home() {
  return (
    <div>
      <h2>
        <img
          style={{
            width: "100px",
            height: "100px",
            position: "absolute",
            top: "1%",
            right: "1%",
          }}
          src={require("./cart1.png")}
          alt="cart-img"
        />
      </h2>
      <h1>Home Component</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img src={require("./phone-image.jpg")} alt="phone-img" />
        </div>
        <div className="text-wrapper item">
          <span>I-Phone</span>
          <span>Price: $1000.00</span>
        </div>
        <div className="btn-wrapper item">
          <button
          // onClick={() => {
          //   props.addToCartHandler({ pice: 1000, name: "i phone 11" });
          // }}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
