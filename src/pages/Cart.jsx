import { useEffect, useState } from "react";
import { Col, Container, Row, Modal, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  clearCart,
  decreaseQty,
  deleteProduct,
} from "../app/features/cart/cartSlice";
import emailjs from "emailjs-com";

const Cart = () => {
  const { cartList } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    contact: "",
  });

  const totalPrice = cartList.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCheckout = () => setShowModal(true);
  const handleSuccessClose = () => setShowSuccessModal(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading

    try {
      // Log form data to the console for verification
      console.log("User Details:", formData);

      // EmailJS configuration
      const serviceId = "service_mrm3mt8"; // Replace with your EmailJS Service ID
      const templateId = "template_x90y01a"; // Replace with your EmailJS Template ID
      const userId = "4yjETkl0JPePlQbgK"; // Replace with your EmailJS User ID

      // Prepare email data using formData
      const emailData = {
        to_email: formData.email, // Email from form data
        from_name: formData.name,
        message: `
      Hi ${formData.name},
      Thank you for placing your order! Here are the details:
      Name: ${formData.name}
      Email: ${formData.email}
      Address: ${formData.address}
      Contact: ${formData.contact}
      
      We will contact you soon for further steps.
      Best regards,
      Your Company
    `,
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        serviceId,
        templateId,
        emailData,
        userId
      );
      console.log("Email sent successfully!", response.status, response.text);
      alert(`Email sent successfully to ${formData.email}`);

      // Clear form data
      setFormData({
        name: "",
        email: "",
        address: "",
        contact: "",
      });

      // Clear cart and close the modal
      dispatch(clearCart());
      setShowModal(false);
      setShowSuccessModal(true);
    } catch (error) {
      console.error("Failed to send email.", error);
      alert("Failed to send email. Please try again later.");
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <section className="cart-items">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            {cartList.length === 0 && (
              <h1 className="no-items product">No items in Cart</h1>
            )}
            {cartList.map((item) => {
              const productQty = item.price * item.qty;
              return (
                <div className="cart-list" key={item.id}>
                  <Row>
                    <Col className="image-holder" sm={4} md={3}>
                      <img src={item.imgUrl} alt="" />
                    </Col>
                    <Col sm={8} md={9}>
                      <Row className="cart-content justify-content-center">
                        <Col xs={12} sm={9} className="cart-details">
                          <h3>{item.productName}</h3>
                          <h4>
                            ${item.price}.00 * {item.qty}
                            <span>${productQty}.00</span>
                          </h4>
                        </Col>
                        <Col xs={12} sm={3} className="cartControl">
                          <button
                            className="incCart"
                            onClick={() =>
                              dispatch(addToCart({ product: item, num: 1 }))
                            }
                          >
                            <i className="fa-solid fa-plus"></i>
                          </button>
                          <button
                            className="desCart"
                            onClick={() => dispatch(decreaseQty(item))}
                          >
                            <i className="fa-solid fa-minus"></i>
                          </button>
                        </Col>
                      </Row>
                    </Col>
                    <button
                      className="delete"
                      onClick={() => dispatch(deleteProduct(item))}
                    >
                      <ion-icon name="close"></ion-icon>
                    </button>
                  </Row>
                </div>
              );
            })}
          </Col>
          <Col md={4}>
            <div className="cart-total text-center">
              <h2>Cart Summary</h2>
              <div className="d_flex justify-content-between my-3">
                <h4>Total Price :</h4>
                <h3>${totalPrice}.00</h3>
              </div>
              {cartList.length > 0 && (
                <button
                  type="button"
                  className="btn btn-primary mt-3"
                  onClick={handleCheckout}
                >
                  Check Out
                </button>
              )}
            </div>
          </Col>
        </Row>
      </Container>

      {/* Checkout Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Checkout</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formContact">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter your contact number"
                name="contact"
                value={formData.contact}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Check
              type="checkbox"
              label="Cash on Delivery"
              className="my-3"
              required
            />

            <Button variant="primary" type="submit" className="w-100">
              {isLoading ? "Loading..." : "Submit Order"}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Success Modal */}
      <Modal show={showSuccessModal} onHide={handleSuccessClose}>
        <Modal.Header closeButton>
          <Modal.Title>Order Placed</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Your order is placed successfully! Our team will call you soon for
            confirmation.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSuccessClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default Cart;
