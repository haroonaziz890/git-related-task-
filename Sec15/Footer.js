import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const AmazonFooter = () => {
  const footerLinks = [
    { title: "Amazon Music", desc: "Stream millions of songs" },
    { title: "Amazon Ads", desc: "Reach customers wherever they spend their time" },
    { title: "6pm", desc: "Score deals on fashion brands" },
    { title: "AbeBooks", desc: "Books, art & collectibles" },
    { title: "ACX", desc: "Audiobook Publishing Made Easy" },
    { title: "Sell on Amazon", desc: "Start a Selling Account" },
    { title: "Veeqo", desc: "Shipping Software Inventory Management" },
    { title: "Amazon Business", desc: "Everything For Your Business" },
    { title: "AmazonGlobal", desc: "Ship Orders Internationally" },
    { title: "Amazon Web Services", desc: "Scalable Cloud Computing Services" },
    { title: "Audible", desc: "Listen to Books & Original Audio Performances" },
    { title: "Box Office Mojo", desc: "Find Movie Box Office Data" },
    { title: "Goodreads", desc: "Book reviews & recommendations" },
    { title: "IMDb", desc: "Movies, TV & Celebrities" },
    { title: "IMDbPro", desc: "Get Info Entertainment Professionals Need" },
    { title: "Kindle Direct Publishing", desc: "Indie Digital & Print Publishing Made Easy" },
    { title: "Prime Video Direct", desc: "Video Distribution Made Easy" },
    { title: "Shopbop", desc: "Designer Fashion Brands" },
    { title: "Woot!", desc: "Deals and Shenanigans" },
    { title: "Zappos", desc: "Shoes & Clothing" },
    { title: "Ring", desc: "Smart Home Security Systems" },
    { title: "eero WiFi", desc: "Stream 4K Video in Every Room" },
    { title: "Blink", desc: "Smart Security for Every Home" },
    { title: "Neighbors App", desc: "Real-Time Crime & Safety Alerts" },
    { title: "Amazon Subscription Boxes", desc: "Top subscription boxes – right to your door" },
    { title: "PillPack", desc: "Pharmacy Simplified" },
  ];

  return (
    <footer className="bg-black text-white py-5">
      <Container>
        <Row className="justify-content-center">
          {footerLinks.map((item, index) => (
            <Col md={3} sm={6} xs={12} key={index} className="mb-4 text-center">
              <h6 className="fw-bold text-warning">{item.title}</h6>
              <p className="text-light small">{item.desc}</p>
            </Col>
          ))}
        </Row>
        <hr className="bg-secondary" />
        <p className="text-center text-light mt-3 small">
          &copy; 1996-2025, Amazon.com, Inc. or its affiliates
        </p>
      </Container>
    </footer>
  );
};

export default AmazonFooter;
