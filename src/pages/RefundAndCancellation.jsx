import React from "react";

const RefundAndCancellation = () => {
  return (
    <div className="min-vh-100 bg-light">
      {/* Hero Section */}
      <header className="position-relative h-100 overflow-hidden">
        <h1 className="display-4 text-black mt-5 fw-bold text-center px-4">
          Refund and Cancellation Policy
        </h1>
      </header>

      {/* Content Section */}
      <main className="container my-5">
        <div className="row">
          {/* Introduction Section */}
          <div className="col-12 my-3">
            <div className="p-4 bg-white shadow-sm rounded">
              <h2 className="h4 text-dark fw-semibold mb-3">Introduction</h2>
              <p className="text-muted">
                DEEPAK KUMAR SEN believes in helping its customers as far as
                possible and has adopted a liberal cancellation policy. Please
                review the terms below for details.
              </p>
            </div>
          </div>

          {/* Cancellation Policy Section */}
          <div className="col-12 my-3">
            <div className="p-4 bg-white shadow-sm rounded">
              <h2 className="h4 text-dark fw-semibold mb-3">
                Cancellation Policy
              </h2>
              <ul className="list-unstyled">
                <li className="mb-2">
                  Cancellations will be considered only if the request is made
                  immediately after placing the order. However, the cancellation
                  request may not be entertained if the order has already been
                  communicated to the vendors/merchants and they have initiated
                  the shipping process.
                </li>
                <li className="mb-2">
                  DEEPAK KUMAR SEN does not accept cancellation requests for
                  perishable items like flowers and eatables. However, a refund
                  or replacement may be available if the customer can
                  demonstrate that the quality of the product delivered is
                  unsatisfactory.
                </li>
              </ul>
            </div>
          </div>

          {/* Return Policy Section */}
          <div className="col-12 my-3">
            <div className="p-4 bg-white shadow-sm rounded">
              <h2 className="h4 text-dark fw-semibold mb-3">
                Return Policy for Damaged or Defective Items
              </h2>
              <p className="text-muted">
                If you receive damaged or defective items, please report this to
                our Customer Service team within 7 days of receipt. The request
                will be processed once the merchant verifies the issue. If the
                product you received does not match the description on our site
                or does not meet your expectations, please contact customer
                service within 7 days of receiving the product. Our Customer
                Service Team will review your complaint and make an appropriate
                decision.
              </p>
            </div>
          </div>

          {/* Warranty Complaints Section */}
          <div className="col-12 my-3">
            <div className="p-4 bg-white shadow-sm rounded">
              <h2 className="h4 text-dark fw-semibold mb-3">
                Manufacturer Warranty Complaints
              </h2>
              <p className="text-muted">
                For complaints related to products with manufacturer warranties,
                please direct your concerns to the respective manufacturer.
              </p>
            </div>
          </div>

          {/* Refunds Section */}
          <div className="col-12 my-3">
            <div className="p-4 bg-white shadow-sm rounded">
              <h2 className="h4 text-dark fw-semibold mb-3">Refunds</h2>
              <p className="text-muted">
                If a refund is approved by DEEPAK KUMAR SEN, it will be
                processed within 6-8 days to the end customer.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RefundAndCancellation;
