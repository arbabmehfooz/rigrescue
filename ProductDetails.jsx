import productImg from "../assets/background.jpg";
import Layout from "./Layout";

export default function ProductDetails() {
  const productData = {
    title: "Lorem Ipsum Product",
    price: "$119",
    quantity: 20,
    description: `Lorem ipsum dolor sit amet consectetur adipiscing elit, inceptos fames curae magna orci massa montes natoque,urae magna orci massa montes natoque duis vel varius tristique conubia odio.\n\nRidiculus montes velit luctus varius venenatis arcu inceptos, Cum musurae magna orci massa montes natoque facilisis felis.`,
  };

  return (
    <Layout>
      <div className="p-4" style={{ minHeight: "100vh" }}>
        <div className="p-4 rounded-3 shadow-sm bg-light">
          {/* Top Section */}
          <div className="d-flex justify-content-between align-items-start mb-4">
            <h5 className="fw-bold text-dark">Product Details</h5>
            {/* <div className="d-flex gap-3">
              <button className="btn btn-sm border-0 bg-transparent p-0">
                <img src={DeleteProd} alt="Delete" />
              </button>
              <button className="btn btn-sm border-0 bg-transparent p-0">
                <img src={EditProd} alt="Edit" />
              </button>
            </div> */}
          </div>

          {/* Centered Product Card */}
          <div className="d-flex justify-content-center">
            <div className="col-md-6">
              <div className="bg-white rounded-4 shadow p-4 text-center">
                <img
                  src={productImg}
                  alt="product"
                  className="rounded-4 mb-3"
                  style={{ width: "100%", maxHeight: "300px", objectFit: "cover" }}
                />
                {/* Color dots */}
                <div className="mb-3">
                  <span className="mx-1 rounded-circle d-inline-block" style={{ width: 10, height: 10, backgroundColor: "#ccc" }}></span>
                  <span className="mx-1 rounded-circle d-inline-block" style={{ width: 10, height: 10, backgroundColor: "#ccc" }}></span>
                  <span className="mx-1 rounded-circle d-inline-block" style={{ width: 10, height: 10, backgroundColor: "#E25C28" }}></span>
                </div>

                {/* Title and Price */}
                <div className="d-flex justify-content-between align-items-center mb-2 px-2">
                  <h5 className="fw-bold text-start text-danger m-0">{productData.title}</h5>
                  <em className="fw-bold text-end text-dark m-0">{productData.price}</em>
                </div>

                {/* Quantity */}
                <div className="text-start px-2 mb-2">
                  <strong className="text-dark">Quantity:</strong>{" "}
                  <strong className="fw-bold fs-5 text-info">{productData.quantity}</strong>
                </div>

                {/* Description */}
                <p className="text-start text-dark px-2" style={{ whiteSpace: "pre-line" }}>
                  {productData.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
