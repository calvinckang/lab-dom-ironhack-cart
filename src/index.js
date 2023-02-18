// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotalValue = price.innerHTML * quantity.value;
  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML = subtotalValue;
  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const products = document.getElementsByClassName('product');
  for (const product of products) {
    updateSubtotal(product);
  }

  // ITERATION 3
  //... your code goes here
  const total = document.querySelector('#total-value span');
  let totalValue = 0;
  document.querySelectorAll('.subtotal span').forEach(el => totalValue+=+el.innerHTML);
  total.innerHTML = totalValue;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  target.parentNode.parentNode.remove();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeProductBtn = document.querySelectorAll('.btn-remove');
  for (let i = 0; i < removeProductBtn.length; i++) {
    removeProductBtn[i].addEventListener('click', removeProduct);
  }
});
