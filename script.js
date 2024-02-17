document.addEventListener('DOMContentLoaded', () => {
    const viewProductButtons = document.querySelectorAll('.view-product-btn');
  
    viewProductButtons.forEach((button) => {
      button.addEventListener('click', () => {
        // Implement navigation to the product page
        console.log('View product:', button.closest('.product-item').dataset.productId);
      });
    });
  });