import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import heroImg from "../assets/images/hero-img.png";
import counterImg from "../assets/images/counter-timer-img.png";

import products from "../assets/data/products";

import "../style/home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Services from "../services/Services";
import ProductList from "../components/UI/ProductList";
import { useEffect } from "react";
import Clock from "../components/UI/Clock";

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setbestSalesProducts] = useState([]);
  const [mobileProducts, setMobileProducts] = useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);
    const [popularProducts, setpopularProducts] = useState([]);




  const year = new Date().getFullYear();

  useEffect(() => {
    const filterdTrendingProducts = products.filter(
      (item) => item.category === "chair"
    );
   

    const filterdBestSalesProducts = products.filter(
      (item) => item.category === "sofa"
    );

      const filterdMobileProducts = products.filter(
        (item) => item.category === "mobile"
    );
      const filterdWirelessProducts = products.filter(
        (item) => item.category === "wireless"
      );

    const filterdpopularProducts = products.filter(
      (item) => item.category === "watch"
    );


    setTrendingProducts(filterdTrendingProducts);
    setbestSalesProducts(filterdBestSalesProducts);
    setMobileProducts(filterdMobileProducts);
    setWirelessProducts(filterdWirelessProducts);
    setpopularProducts(filterdpopularProducts)
  }, []);
  return (
    <Helmet title={"Home"}>
      <section className="hero_section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero_content">
                <p className="hero_substitle">Trending products in {year}</p>
                <h2>Make Youe Interior More Monomalistic & Modern</h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
                  explicabo natus delectus officia, porro voluptas aliquam unde
                  deserunt adipisci facere!
                </p>
                <motion.button whileTap={{ scale: 1.3 }} className="buy_btn">
                  <Link to="/shop">SHOP NOW</Link>
                </motion.button>
              </div>
            </Col>
            <Col lang="6" md="6">
              <img src={heroImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>
      <Services />
      <section className="trending_products">
        <Container>
          <Row className="products_wrapper">
            <Col lg="12" className="text-center">
              <h2 className="section_title">Trending Products</h2>
            </Col>
            <ProductList data={trendingProducts} />
          </Row>
        </Container>
      </section>
      <section className="best_sales">
        <Container>
          <Row className="products_wrapper">
            <Col lg="12" className="text-center">
              <h2 className="section_title">Best Sales</h2>
            </Col>
            <ProductList data={bestSalesProducts} />
          </Row>
        </Container>
      </section>

      <section className="timer_count">
        <Container>
          <Row>
            <Col lg="6" md="12" className="count_down_col">
              <div className="clock_top-content">
                <h4 className="text-white fs-6">Limited Offers</h4>
                <h3 className="text-white fs-5 mb-3">Quality Armchair</h3>
              </div>
              <Clock />

              <motion.button
                whileTap={{ scale: 1.2 }}
                className="buy_btn store_btn"
              >
                <Link to="/shop">Visit Store</Link>
              </motion.button>
            </Col>
            <Col lg="6" md="12" className="text-end counter_image">
              <img src={counterImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="new_arrival">
        <Container>
          <Row className="products_wrapper">
            <Col lg="12" className="text-center">
              <h2 className="section_title mb-5">New Arrivals</h2>
            </Col>
            <ProductList data={mobileProducts} />
            <ProductList data={wirelessProducts} />
          </Row>
        </Container>
      </section>

      <section className="popular_category">
        <Container>
          <Row className="products_wrapper">
            <Col lg="12" className="text-center mb-5">
              <h2 className="section_title">Popular Category</h2>
            </Col>
            <ProductList data={popularProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
