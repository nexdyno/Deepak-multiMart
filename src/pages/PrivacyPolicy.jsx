import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="container py-5">
      {/* Hero Section */}
      <header className="position-relative overflow-hidden">
        <h1 className="display-4 text-black fw-bold text-center px-4 mb-5">
          Privacy & Policy
        </h1>
      </header>

      {/* Content Section */}
      <main>
        {/* Introduction Section */}
        <section className="mb-4 shadow-sm p-4 rounded bg-light">
          <p className="text-muted mb-0">
            These Terms and Conditions, along with our Privacy Policy and any
            other relevant terms ("Terms"), form a binding agreement between
            DEEPAK KUMAR SEN ("Website Owner", "we", "us", or "our") and you
            ("you" or "your"), concerning your use of our website, goods, or
            services (collectively, "Services").
          </p>
        </section>

        {/* Privacy Policy Section */}
        <section className="mb-4 shadow-sm p-4 rounded bg-light">
          <h2 className="h4 fw-semibold mb-3">Privacy Policy</h2>
          <p className="text-muted mb-0">
            At Nexdyno, we are committed to protecting your privacy. This
            Privacy Policy outlines how we collect, use, disclose, and safeguard
            your personal information.
          </p>
          <ul className="list-unstyled text-muted mt-3">
            <li>
              <strong>Information We Collect:</strong> We may collect personal
              information such as name, email address, phone number, shipping
              and billing addresses, payment information, order history, device
              information (e.g., IP address), and usage data.
            </li>
            <li>
              <strong>How We Use Your Information:</strong> We use personal
              information for processing orders, customer service, marketing,
              improving services, security, and legal compliance.
            </li>
            <li>
              <strong>Sharing Your Information:</strong> We may share
              information with third-party service providers, law enforcement,
              and others as required by law.
            </li>
            <li>
              <strong>Protecting Your Information:</strong> We implement
              security measures to protect your personal information, though no
              method is 100% secure.
            </li>
            <li>
              <strong>Your Choices:</strong> You may opt out of marketing
              communications, access and correct your information, or request
              deletion by contacting us.
            </li>
            <li>
              <strong>Children's Privacy:</strong> Our website is not intended
              for children under the age of 13.
            </li>
            <li>
              <strong>Changes to This Privacy Policy:</strong> We may update
              this Privacy Policy periodically, and we will notify you of
              significant changes by posting a notice on our website.
            </li>
          </ul>
        </section>

        {/* Acceptance of Terms */}
        <section className="mb-4 shadow-sm p-4 rounded bg-light">
          <h2 className="h4 fw-semibold mb-3">Acceptance of Terms</h2>
          <p className="text-muted mb-0">
            By using our website and accessing the Services, you agree that you
            have read and accepted these Terms (including the Privacy Policy).
            We reserve the right to modify these Terms at any time without prior
            notice. It is your responsibility to periodically review these Terms
            to stay informed of updates.
          </p>
        </section>

        {/* Additional Sections */}
        {/* Add other sections here, like Use of Services, Intellectual Property, etc., as in the original component */}

        {/* Contact Us */}
        <section className="mb-4 shadow-sm p-4 rounded bg-light">
          <h2 className="h4 fw-semibold mb-3">Contact Us</h2>
          <p className="text-muted mb-0">
            If you have any questions or concerns about these Terms or our
            Privacy Policy, please contact us at{" "}
            <strong> deepakkumarsen9630@gmail.com </strong>.
          </p>
        </section>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
