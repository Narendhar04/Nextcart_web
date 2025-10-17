'use client';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const products = [
  { id: 1, name: 'Wireless Headphones', price: 2999, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqSHZXmpJbUDBLnJgjwtBt4Blce2VYSReWdA&s' },
  { id: 2, name: 'Smart Watch', price: 4999, image: 'https://gourban.in/cdn/shop/files/Pulse.jpg?v=1749553994&width=2048' },
  { id: 3, name: 'Bluetooth Speaker', price: 1999, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhODOIf5jz5Q89y7Elk66BvVMvrQipqNhk8Q&s' },
  { id: 4, name: 'Gaming Mouse', price: 1499, image: 'https://m.media-amazon.com/images/I/61qN9d08hgL._UF1000,1000_QL80_.jpg' },
  { id: 5, name: 'Laptop Stand', price: 999, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbvqhujhweW6AD8UBcZYVQ2KS4nEQPmDUA8A&s' },
  { id: 6, name: 'USB-C Hub', price: 1299, image: 'https://mm.digikey.com/Volume0/opasdata/d220001/medias/images/5881/MFG_5G4AB-USB-C-HUB.jpg' },
  { id: 7, name: 'Portable SSD', price: 3499, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsduDpfqWGeFpECZB5qxztcFwaIDWktfA2YA&s' },
  { id: 8, name: 'Webcam HD', price: 1899, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBBVy6RibVSCsjrws0Z48ISOxy3meGscrGsg&s' },
  { id: 9, name: 'Mechanical Keyboard', price: 2999, image: 'https://images-cdn.ubuy.co.in/63400c68afe02d2b0c7aeb85-mechanical-gaming-keyboard-87-keys-small.jpg' },
  { id: 10, name: 'Monitor 24"', price: 7999, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiPbtKJjXw6r8uONBrE4Zh1nLTwh863EhYrQ&s' },
  { id: 11, name: 'Wireless Charger', price: 1499, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-b92fHpgdp6nVkrnTbNbKQQmEREf05HQ4SA&s' },
  { id: 12, name: 'Noise Cancelling Earbuds', price: 3999, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ384RpqoxdSRAfVEs9qgbK--C3SS_CIePhQ&s' },
  { id: 13, name: 'Smartphone Tripod', price: 899, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHXaupS8ReighbhfZvcp7l8pNCAyt4tOia_Q&s' },
  { id: 14, name: 'Action Camera', price: 9999, image: 'https://m.media-amazon.com/images/I/71zr1wFF9rL._UF1000,1000_QL80_.jpg' },
  { id: 15, name: 'Fitness Tracker', price: 2499, image: 'https://cdn.thewirecutter.com/wp-content/media/2023/11/fitness-tracker-2048px-5344.jpg?auto=webp&quality=75&crop=1.91:1&width=1200' },
  { id: 16, name: 'Smart Bulb', price: 799, image: 'https://media.tatacroma.com/Croma%20Assets/Small%20Appliances/Lighting%20Products/Images/260392_0_hxpkty.png' },
  { id: 17, name: 'VR Headset', price: 14999, image: 'https://cdn.thewirecutter.com/wp-content/media/2024/10/vrheadsets-2048px-08406.jpg?auto=webp&quality=75&crop=1.91:1&width=1200' },
  { id: 18, name: 'Drone Mini', price: 6999, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdd_gjkUzP_FEDyhwfW6oBzPq5T7EIvEvodw&s' },
  { id: 19, name: 'Digital Photo Frame', price: 3499, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKy7rF6jnNznxYfDUrexmy545BmgKM15urzQ&s' },
  { id: 20, name: 'Smart Plug', price: 999, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-qn3xycaxoF0xvZKZoKgqFb-ogmnzsPa_sg&s' },
];

export default function ProductsPage() {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Our Products</h2>
      <div className="row">
        {products.map((product) => (
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={product.id}>
            <div
              className="card h-100 text-center shadow-sm"
              style={{ minHeight: '400px', borderRadius: '12px' }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="card-img-top"
                style={{
                  height: '250px',
                  width: '100%',
                  objectFit: 'contain',
                  backgroundColor: '#f8f9fa',
                  padding: '10px',
                  borderTopLeftRadius: '12px',
                  borderTopRightRadius: '12px',
                }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text fw-semibold text-success">₹{product.price}</p>
                <button
                  className="btn btn-primary mt-auto"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
