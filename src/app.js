import {
  incrementQty,
  decrementQty,
  recalculateSubtotal,
  recalculateTotal
} from './helpers.js';

const priceInput = document.querySelector('#price');
const qtyInput = document.querySelector('#qty');
const codeInput = document.querySelector('#code');
const incrButton = document.querySelector('#incr');
const decrButton = document.querySelector('#decr');
const confirmButton = document.querySelector('#confirmButton');
const subtotalText = document.querySelector('#subtotal');

const calculateSubtotal = () => {
  let subtotal = recalculateSubtotal(qty.value, price.value);
  subtotalText.textContent = `Rp. ${subtotal}`;
}

incrButton.addEventListener('click', () => {
  qtyInput.value = incrementQty(qtyInput.value);
  calculateSubtotal();
});

decrButton.addEventListener('click', () => {
  qtyInput.value = decrementQty(qtyInput.value);
  calculateSubtotal();
});

confirmButton.addEventListener('click', () => {
  let cekPrice = Math.sign(parseInt(priceInput));
  let cekQty = Math.sign(parseInt(qtyInput));
  if (cekPrice == -1 || cekPrice == 0 || cekQty == -1 || cekQty == 0) {
    subtotalText.textContent = "Invalid Input";
  }
  let subtotal = recalculateSubtotal(qty.value, price.value);
  // alert(codeInput.value);
  let total = recalculateTotal(subtotal, codeInput.value);
  subtotalText.textContent = `Rp. ${total}`;
})