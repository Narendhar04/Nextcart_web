'use client';

import Link from 'next/link';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#003366' }}>
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" href="/" style={{ color: '#FFD700' }}>
          NextCart
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" href="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" href="/about">About</Link></li>
            <li className="nav-item"><Link className="nav-link" href="/service">Services</Link></li>
            <li className="nav-item"><Link className="nav-link" href="/products">Products</Link></li>
            <li className="nav-item"><Link className="nav-link" href="/contact">Contact</Link></li>
            <li className="nav-item">
              <Link className="nav-link" href="/cart">
                🛒 Cart ({cartItems.length})
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}