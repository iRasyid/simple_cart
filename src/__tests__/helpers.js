const {
    incrementQty,
    decrementQty,
    recalculateSubtotal,
    recalculateTotal,
    calculateChange
} = require("../helpers");

// test realtime price, qty, dan money harus numeric dan positif
// test price, qty, atau money bernilai nol atau negatif, Subtotal Invalid Input of Price & Qty

test("qty 1 ditambah 1 sama dengan 2", () => {
    expect(incrementQty(1)).toBe(2);
});
test("qty 'a' ditambah 1 sama dengan NaN", () => {
    expect(incrementQty('a')).toBe(NaN);
});
test("qty 2 dikurang 1 sama dengan 1", () => {
    expect(decrementQty(1)).toBe(1);
});
test("qty a dikurang 1 sama dengan NaN", () => {
    expect(decrementQty('a')).toBe(NaN);
});
test("qty 1 dikurang 1 sama dengan 1", () => {
    expect(decrementQty(1)).toBe(1);
})
test("qty 1 dikali harga 50000 sama dengan 50000", () => {
    expect(recalculateSubtotal(1, 50000)).toBe(50000);
})
test("qty 2 dikali harga 50000 sama dengan 100000", () => {
    expect(recalculateSubtotal(2, 50000)).toBe(100000);
})
test("qty 'a' dikali harga 50000 sama dengan 50000", () => {
    expect(recalculateSubtotal('a', 50000)).toBe(NaN);
})
test("qty 1 dikali harga 'a' sama dengan 50000", () => {
    expect(recalculateSubtotal(1, 'a')).toBe(NaN);
})
test("qty -1 dikali harga 50000 sama dengan Invalid Input", () => {
    expect(recalculateSubtotal(-1, 50000)).toBe("Invalid Input");
})
test("qty 1 dikali harga -50000 sama dengan Invalid Input", () => {
    expect(recalculateSubtotal(1, -50000)).toBe("Invalid Input");
})
test("qty -1 dikali harga -50000 sama dengan Invalid Input", () => {
    expect(recalculateSubtotal(-1, -50000)).toBe("Invalid Input");
})
// Kode Promo hanya KODE25, KODE50, KODE75
test("qty 1 dikali harga 50000 dengan Kode Promo '' sama dengan 50000", () => {
    expect(recalculateTotal(50000, "")).toBe(50000);
})
test("qty 1 dikali harga 50000 dengan Kode Promo KODE25 sama dengan 375000", () => {
    expect(recalculateTotal(50000, "KODE25")).toBe(37500);
})
test("qty 1 dikali harga 50000 dengan Kode Promo KODE50 sama dengan 25000", () => {
    expect(recalculateTotal(50000, "KODE50")).toBe(25000);
})
test("qty 1 dikali harga 50000 dengan Kode Promo KODE75 sama dengan 12500", () => {
    expect(recalculateTotal(50000, "KODE75")).toBe(12500);
})
test("qty 1 dikali harga 50000 dengan Kode Promo Rasyid (kode promo acak) sama dengan 50000 (tanpa diskon)", () => {
    expect(recalculateTotal(50000, "Rasyid")).toBe(50000);
})
test("qty 1 dikali harga 50000 dibayar 75000 | total < uang", () => {
    expect(calculateChange(75000, 50000)).toBe(25000);
})
test("qty 1 dikali harga 50000 dibayar 50000 | total = uang", () => {
    expect(calculateChange(50000, 50000)).toBe(0);
})
test("qty 1 dikali harga 50000 dibayar 25000 | total > uang", () => {
    expect(calculateChange(25000, 50000)).toBe("Not enough money");
})
test("qty 1 dikali harga 50000 dibayar '100000' | total > uang (string)", () => {
    expect(calculateChange("100000", 50000)).toBe(50000);
})
test("qty 1 dikali harga '50000' dibayar 100000 | total (string) > uang", () => {
    expect(calculateChange(100000, "50000")).toBe(50000);
})
test("qty 1 dikali harga '50000' dibayar '100000' | total (string) > uang (string)", () => {
    expect(calculateChange("100000", "50000")).toBe(50000);
})
test("qty 1 dikali harga 50000 dibayar -100000 | total > uang (negative)", () => {
    expect(calculateChange(-100000, 50000)).toBe("Invalid Input");
})
test("qty 1 dikali harga 50000 dibayar 'Seratus Ribu' | total > uang (string ejaan)", () => {
    expect(calculateChange("Seratus Ribu", "50000")).toBe("Invalid Input");
})