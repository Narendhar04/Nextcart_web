export default function AboutPage() {
  return (
    <div className="container mt-5 mb-5">
      <h2 className="mb-4 text-center">About NextCart</h2>

      <p className="lead text-center">
        <strong>NextCart</strong> is a modern, high-performance e-commerce web
        application built using <strong>Next.js</strong>, <strong>React</strong>,
        and <strong>Redux</strong>. It’s designed to deliver a fast, smooth, and
        scalable online shopping experience.
      </p>

      <hr className="my-4" />

      <div className="mt-4">
        <h4>🛒 Our Vision</h4>
        <p>
          At NextCart, we aim to simplify online shopping by providing a
          lightning-fast interface, easy navigation, and reliable cart
          management powered by modern web technologies. Whether you’re a small
          store owner or a tech enthusiast, NextCart demonstrates how seamless
          e-commerce experiences can be built with React and Next.js.
        </p>

        <h4>⚙️ Key Features</h4>
        <ul>
          <li>Dynamic product listing with responsive design</li>
          <li>State management using Redux for efficient data flow</li>
          <li>Client-side and server-side rendering via Next.js</li>
          <li>Interactive cart with real-time updates</li>
          <li>Reusable React components for scalability</li>
        </ul>

        <h4>🚀 Built with Modern Technologies</h4>
        <p>NextCart leverages the power of:</p>
        <ul>
          <li><strong>Next.js</strong> – for optimized routing and rendering</li>
          <li><strong>React</strong> – for creating reusable UI components</li>
          <li><strong>Redux</strong> – for managing global app state</li>
          <li><strong>Bootstrap</strong> – for responsive styling</li>
        </ul>

        <h4>💡 Why We Built NextCart</h4>
        <p>
          This project was created as a demonstration of building a
          full-featured shopping interface from scratch — showing how frontend
          frameworks like Next.js and React can work together to create
          responsive, efficient, and scalable applications.
        </p>

        <h4>📞 Contact Us</h4>
        <p>
          Have feedback or want to collaborate? Reach out at{" "}
          <a href="mailto:support@nextcart.com">support@nextcart.com</a>.
        </p>
      </div>
    </div>
  );
}
