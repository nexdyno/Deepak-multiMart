import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="container py-5">
      {/* Hero Section */}
      <header className="position-relative overflow-hidden">
        <h1 className="display-4 text-black fw-bold text-center px-4 mb-5">
          Terms and Conditions
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

        {/* Use of Services */}
        <section className="mb-4 shadow-sm p-4 rounded bg-light">
          <h2 className="h4 fw-semibold mb-3">Use of Services</h2>
          <ul className="list-unstyled text-muted">
            <li className="mb-2">
              You agree to provide accurate and complete information during and
              after registration, and you are responsible for all actions taken
              through your registered account.
            </li>
            <li className="mb-2">
              We, and any third parties, do not provide warranties or guarantees
              as to the accuracy, timeliness, or suitability of the information
              provided on the website or through the Services. You acknowledge
              that such information may contain inaccuracies or errors, and we
              exclude liability to the fullest extent permitted by law.
            </li>
            <li className="mb-0">
              Your use of the Services and website is at your own risk and
              discretion. You should ensure that the Services meet your
              requirements.
            </li>
          </ul>
        </section>

        {/* Intellectual Property */}
        <section className="mb-4 shadow-sm p-4 rounded bg-light">
          <h2 className="h4 fw-semibold mb-3">Intellectual Property</h2>
          <p className="text-muted mb-0">
            The contents of the Website and the Services are proprietary to us,
            and you will not have any claim to intellectual property rights,
            title, or interest in its contents.
          </p>
        </section>

        {/* Unauthorized Use */}
        <section className="mb-4 shadow-sm p-4 rounded bg-light">
          <h2 className="h4 fw-semibold mb-3">Unauthorized Use</h2>
          <p className="text-muted mb-0">
            You acknowledge that unauthorized use of the Website or Services may
            result in action against you as per these Terms or applicable laws.
          </p>
        </section>

        {/* Payments and Refunds */}
        <section className="mb-4 shadow-sm p-4 rounded bg-light">
          <h2 className="h4 fw-semibold mb-3">Payments and Refunds</h2>
          <ul className="list-unstyled text-muted">
            <li className="mb-2">
              You agree to pay charges associated with the Services.
            </li>
            <li className="mb-0">
              If we are unable to provide the Service, you may request a refund
              within the time period specified in our policies. Refund claims
              made beyond the stipulated period may be deemed ineligible.
            </li>
          </ul>
        </section>

        {/* Third-Party Links */}
        <section className="mb-4 shadow-sm p-4 rounded bg-light">
          <h2 className="h4 fw-semibold mb-3">Third-Party Links</h2>
          <p className="text-muted mb-0">
            Our website and Services may contain links to third-party websites.
            Accessing these links means you are governed by the terms and
            policies of those websites.
          </p>
        </section>

        {/* Legal Obligations */}
        <section className="mb-4 shadow-sm p-4 rounded bg-light">
          <h2 className="h4 fw-semibold mb-3">Legal Obligations</h2>
          <ul className="list-unstyled text-muted">
            <li className="mb-2">
              You agree not to use the website or Services for any unlawful
              activities or purposes forbidden by these Terms or applicable
              laws.
            </li>
            <li className="mb-0">
              By initiating a transaction, you enter into a legally binding
              contract for the Services.
            </li>
          </ul>
        </section>

        {/* Force Majeure */}
        <section className="mb-4 shadow-sm p-4 rounded bg-light">
          <h2 className="h4 fw-semibold mb-3">Force Majeure</h2>
          <p className="text-muted mb-0">
            Neither party shall be liable for failure to perform obligations
            under these Terms if prevented by a force majeure event.
          </p>
        </section>

        {/* Governing Law and Jurisdiction */}
        <section className="mb-4 shadow-sm p-4 rounded bg-light">
          <h2 className="h4 fw-semibold mb-3">
            Governing Law and Jurisdiction
          </h2>
          <p className="text-muted mb-0">
            These Terms and any disputes shall be governed by the laws of India,
            with exclusive jurisdiction in the courts of Gwalior, Madhya
            Pradesh.
          </p>
        </section>

        {/* Contact Us */}
        <section className="mb-4 shadow-sm p-4 rounded bg-light">
          <h2 className="h4 fw-semibold mb-3">Contact Us</h2>
          <p className="text-muted mb-0">
            For any concerns or questions about these Terms, please contact us
            through the details provided on this website.
          </p>
        </section>
      </main>
    </div>
  );
};

export default TermsAndConditions;
