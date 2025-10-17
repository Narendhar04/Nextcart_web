'use client';

import { Provider } from 'react-redux';
import store from './redux/store';
import Navbar from './components/Navbar';

export default function ClientLayout({ children }) {
  return (
    <Provider store={store}>
      <Navbar />
      <main className="container mt-4">
        {children}
      </main>
    </Provider>
  );
}