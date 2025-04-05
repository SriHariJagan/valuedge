import React from "react";
import styles from "./products.module.css";
import { productData } from "../../constants"

const Products = () => {
  return (
    <div className={styles.productsContainer}>
      {/* Heading */}
      {/* <div className={styles.productHeading}>
        <h1>TESTING SERVICES</h1>
        <p>
          We with our testing experience, keen industry knowledge and
          rationalized testing tool expertise to monitor testing, set new
          standards for software quality and reduce costs. Valuedge's Testing
          services will support you in every of your future activities by taking
          the product to the expected performance level and satisfy the need.
          Along with basic testing services such as White-box testing, Black-box
          testing, Grey-box testing, and System Integration testing, we also
          offer value-added testing services such as Migration testing,
          Globalization, and Localization testing.
        </p>
      </div> */}

      {/* Product List */}
      {productData.map((product, index) => (
        <div
          key={product.id}
          className={`${styles.productData} ${
            index % 2 === 0 ? styles.productRow : styles.productRowReverse
          }`}
        >
          {/* Image */}
          <div className={styles.productImg}>
            <img src={product.img} alt={product.name} />
          </div>

          {/* Description */}
          <div className={styles.productDescription}>
            <h2>{product.name}</h2>
            <ul>
              {product.description.map((desc) => (
                <li key={desc.id}>{desc.value}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
