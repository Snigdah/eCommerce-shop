import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Product from "../components/Product";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

const Home = () => {
  const { products } = useContext(ProductContext);
  //console.log(products);

  const filteredProducts = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });

  return (
    <div>
      <Hero />
      <section className="py-16">
        <div className="container mx-auto">
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5
           gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0"
          >
            {filteredProducts.map((i) => {
              return (
                <Product product={i} key={i.id} />
                // <div className="w-full h-[300px] bg-pink-300" key={i.id}>
                //   {i.title}
                // </div>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
