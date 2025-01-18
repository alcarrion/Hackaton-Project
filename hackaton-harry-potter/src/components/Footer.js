import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center p-4 mt-8">
      <p>&copy; {new Date().getFullYear()} Harry Potter Fan App</p>
    </footer>
  );
}

export default Footer;
