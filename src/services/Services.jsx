import React from "react";
import { Col, Container, Row } from "reactstrap";
import {motion} from 'framer-motion'
import "./services.css";
import serviceData from "../assets/data/serviceData";

const Services = () => {
  return (
    <section className="services">
      <Container>
        <Row className="service_wrapper">
          {serviceData.map((item, index) => (
            <Col lg="3" md="6" sm='10' xs='9' key={index}>
              <motion.div whileHover={{scale:1.1}} className="service_item" style={{background:`${item.bg}`}}>
                <span>
                  <i className={item.icon}></i>
                </span>
                <div>
                  <h3>{item.title}</h3>
                <p>{ item.subtitle}</p>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
