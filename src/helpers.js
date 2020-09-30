const incrementQty = (qty) => {
    if (isNaN(parseInt(qty))) {
        return NaN;
    } else {
        return parseInt(qty) + 1;
    }
};
const decrementQty = (qty) => {
    if (isNaN(parseInt(qty))) {
        return NaN;
    } else {
        if (parseInt(qty) == 1) {
            return 1;
        } else {
            return parseInt(qty) - 1;
        }
    }
};
const recalculateSubtotal = (qty, price) => {
    let cekPrice = Math.sign(parseInt(qty));
    let cekQty = Math.sign(parseInt(price));
    if (cekPrice == -1 || cekPrice == 0 || cekQty == -1 || cekQty == 0) {
        return "Invalid Input";
    } else {
        if (isNaN(parseInt(qty))) {
            return NaN;
        } else {
            return parseInt(qty) * parseInt(price)
        }
    }
};
const recalculateTotal = (subtotal, codeInput) => {
    if ((String(codeInput).substring(0, 4)) == "KODE" && String(codeInput).length == 6) {
        let discount = String(codeInput).substring(4, 6);
        if (discount == 25 || discount == 50 || discount == 75) {
          return subtotal - (subtotal * parseInt(discount) / 100);
        }
      } else {
        return subtotal;
      }
};

module.exports = {
    incrementQty,
    decrementQty,
    recalculateSubtotal,
    recalculateTotal
};