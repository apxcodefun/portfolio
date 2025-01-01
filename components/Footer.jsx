import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center">
      <p className="text-sm">
        Copyright © {new Date().getFullYear()} - All rights reserved by ACME
        Industries Ltd.
      </p>
    </footer>
  );
};

export default Footer;
