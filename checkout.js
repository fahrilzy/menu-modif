// Saat halaman checkout dimuat
window.onload = () => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const checkoutItemsContainer = document.getElementById('checkout-items');
    const totalPriceElement = document.getElementById('total-price');
  
    if (cartItems.length === 0) {
      checkoutItemsContainer.innerHTML = '<p>No items in the cart</p>';
    } else {
      let total = 0;
  
      // Menampilkan setiap item dari keranjang
      cartItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('checkout-item');
        itemElement.innerHTML = `
          <p>${item.name} - $${item.price}</p>
        `;
        checkoutItemsContainer.appendChild(itemElement);
        total += item.price;
      });
  
      // Menampilkan total harga
      totalPriceElement.innerText = `$${total.toFixed(2)}`;
    }
  
    // Handle payment process (untuk demo, hanya alert)
    document.getElementById('proceed-to-payment').addEventListener('click', () => {
      alert('Proceeding to payment...');
      alert('Payment Successful! Your order is complete.');
      localStorage.removeItem('cart');
      window.location.href = 'thank-you.html'; // Redirect ke halaman "Thank You"
    });
  };
  