import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-5 mt-auto">
      <div className="container px-4">
        <div className="row mb-4">
          {/* Links Column */}
          <div className="col-md-6 mb-3 mb-md-0">
            <h5 className="fw-semibold mb-3">Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">Home</a>[cite: 3]
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">Computer Science</a>[cite: 3]
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">Courses</a>[cite: 3]
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">Reports</a>[cite: 3]
              </li>
            </ul>
          </div>

          {/* Contact Info Column */}
          <div className="col-md-6">
            <h5 className="fw-semibold mb-3">Contact Info</h5>
            <p className="mb-1">Contact Us</p>[cite: 3]
            <p className="mb-1">+1: 123 456 7890</p>[cite: 3]
            <p className="mb-0">
              <a href="mailto:trm@studentportal.com" className="text-light text-decoration-none">
                trm@studentportal.com
              </a>[cite: 3]
            </p>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="text-center pt-3 border-top border-secondary text-secondary">
          <small>© 2024 StudentPortal. All rights reserved.</small>[cite: 3]
        </div>
      </div>
    </footer>
  );
}