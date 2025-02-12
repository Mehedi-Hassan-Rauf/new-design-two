$(document).ready(function () {
    let pricePerItem = 2500;
    let quantity = 1;

    function updatePrice() {
        let subtotal = pricePerItem * quantity;
        $("#productQty").text(quantity);
        $("#quantity").text(quantity);
        $("#subtotal").text(subtotal.toLocaleString() + "৳");
        $("#subtotalDisplay").text(subtotal.toLocaleString() + "৳");
        $("#totalPrice").text(subtotal.toLocaleString() + "৳");
        $("#finalTotal").text(subtotal.toLocaleString());
    }

    $("#increaseQty").click(function () {
        quantity++;
        updatePrice();
    });

    $("#decreaseQty").click(function () {
        if (quantity > 1) {
            quantity--;
            updatePrice();
        }
    });
});