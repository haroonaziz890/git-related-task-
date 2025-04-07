import React, { useState } from "react";
import { Navbar, Nav, Button, Form, FormControl, Dropdown, Offcanvas } from "react-bootstrap";
import { FaShoppingCart, FaBars, FaChevronRight, FaGift, FaHeadset, FaTags, FaTruck, FaRegLightbulb, FaRegHeart, FaMobileAlt, FaGamepad, FaUserShield } from "react-icons/fa";

function CustomNavbar() {
  const [show, setShow] = useState(false);
  const [subMenu, setSubMenu] = useState(null);

  return (
    <>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg" className="p-3">
        <Button variant="warning" onClick={() => setShow(true)}>
          <FaBars /> All
        </Button>
        <Navbar.Brand href="#" className="mx-3">Amazon Clone</Navbar.Brand>
        
        <Form className="d-flex flex-grow-1 mx-3">
          <FormControl type="search" placeholder="Search Amazon" className="me-2" />
          <Button variant="success">Search</Button>
        </Form>

        <Dropdown>
          <Dropdown.Toggle variant="secondary">EN</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>English</Dropdown.Item>
            <Dropdown.Item>Urdu</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Button variant="light" className="mx-2">Sign In</Button>
        <Button variant="light">Returns & Orders</Button>
        
        <Button variant="danger" className="ms-3">
          <FaShoppingCart /> Cart
        </Button>
      </Navbar>

      {/* Sidebar */}
      <Offcanvas show={show} onHide={() => setShow(false)} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>All Categories</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link onClick={() => setSubMenu('digital')} className="d-flex justify-content-between">
              <FaRegLightbulb /> Digital Content & Devices <FaChevronRight />
            </Nav.Link>
            <Nav.Link onClick={() => setSubMenu('shop')} className="d-flex justify-content-between">
              <FaMobileAlt /> Shop by Department <FaChevronRight />
            </Nav.Link>
            <Nav.Link onClick={() => setSubMenu('programs')} className="d-flex justify-content-between">
              <FaTags /> Programs & Features <FaChevronRight />
            </Nav.Link>
            <Nav.Link onClick={() => setSubMenu('deals')} className="d-flex justify-content-between">
              <FaGift /> Today's Deals <FaChevronRight />
            </Nav.Link>
            <Nav.Link onClick={() => setSubMenu('customer')} className="d-flex justify-content-between">
              <FaHeadset /> Customer Service <FaChevronRight />
            </Nav.Link>
            <Nav.Link onClick={() => setSubMenu('prime')} className="d-flex justify-content-between">
              <FaTruck /> Prime Membership <FaChevronRight />
            </Nav.Link>
            <Nav.Link onClick={() => setSubMenu('wishlist')} className="d-flex justify-content-between">
              <FaRegHeart /> Wishlist <FaChevronRight />
            </Nav.Link>
            <Nav.Link onClick={() => setSubMenu('gaming')} className="d-flex justify-content-between">
              <FaGamepad /> Gaming & Accessories <FaChevronRight />
            </Nav.Link>
            <Nav.Link onClick={() => setSubMenu('security')} className="d-flex justify-content-between">
              <FaUserShield /> Security & Privacy <FaChevronRight />
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
      
      {/* Submenu Offcanvas */}
      <Offcanvas show={subMenu !== null} onHide={() => setSubMenu(null)} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{
            subMenu === 'digital' ? 'Digital Content & Devices' :
            subMenu === 'shop' ? 'Shop by Department' :
            subMenu === 'programs' ? 'Programs & Features' :
            subMenu === 'deals' ? "Today's Deals" :
            subMenu === 'customer' ? "Customer Service" :
            subMenu === 'prime' ? "Prime Membership" :
            subMenu === 'wishlist' ? "Wishlist" :
            subMenu === 'gaming' ? "Gaming & Accessories" :
            "Security & Privacy"
          }</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            {subMenu === 'digital' && (
              <>
                <Nav.Link href="#">Prime Video</Nav.Link>
                <Nav.Link href="#">Amazon Music</Nav.Link>
                <Nav.Link href="#">Kindle E-readers & Books</Nav.Link>
                <Nav.Link href="#">Amazon Appstore</Nav.Link>
              </>
            )}
            {subMenu === 'shop' && (
              <>
                <Nav.Link href="#">Electronics</Nav.Link>
                <Nav.Link href="#">Computers</Nav.Link>
                <Nav.Link href="#">Smart Home</Nav.Link>
                <Nav.Link href="#">Arts & Crafts</Nav.Link>
              </>
            )}
            {subMenu === 'programs' && (
              <>
                <Nav.Link href="#">Gift Cards</Nav.Link>
                <Nav.Link href="#">Shop By Interest</Nav.Link>
                <Nav.Link href="#">Amazon Live</Nav.Link>
                <Nav.Link href="#">International Shopping</Nav.Link>
              </>
            )}
            {subMenu === 'deals' && (
              <>
              <Nav.Link href="#">Gift Cards</Nav.Link>
                <Nav.Link href="#">Shop By Interest</Nav.Link>
                <Nav.Link href="#">Amazon Live</Nav.Link>
                <Nav.Link href="#">International Shopping</Nav.Link>
              </>
            )}  {subMenu === 'coustomer' && (
              <>
              <Nav.Link href="#">Gift Cards</Nav.Link>
                <Nav.Link href="#">Shop By Interest</Nav.Link>
                <Nav.Link href="#">Amazon Live</Nav.Link>
                <Nav.Link href="#">International Shopping</Nav.Link>
              </>
            )}  {subMenu === 'prime' && (
              <>
              <Nav.Link href="#">Gift Cards</Nav.Link>
                <Nav.Link href="#">Shop By Interest</Nav.Link>
                <Nav.Link href="#">Amazon Live</Nav.Link>
                <Nav.Link href="#">International Shopping</Nav.Link>
              </>
            )}  {subMenu === 'whitelist' && (
              <>
              <Nav.Link href="#">Gift Cards</Nav.Link>
                <Nav.Link href="#">Shop By Interest</Nav.Link>
                <Nav.Link href="#">Amazon Live</Nav.Link>
                <Nav.Link href="#">International Shopping</Nav.Link>
              </>
            )} 
             {subMenu === 'gaming' && (
              <>
              <Nav.Link href="#">Gift Cards</Nav.Link>
                <Nav.Link href="#">Shop By Interest</Nav.Link>
                <Nav.Link href="#">Amazon Live</Nav.Link>
                <Nav.Link href="#">International Shopping</Nav.Link>
              </>
            )} 
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default CustomNavbar;