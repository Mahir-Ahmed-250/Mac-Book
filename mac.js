// Price With Extra Memory

function memoryCost(Memory) {
    const memoryPrice = document.getElementById("memory-cost");
    if (Memory == '8GB') {
        memoryPrice.innerText = 0;
        finalTotalPrice();
    }
    else {
        memoryPrice.innerText = 180;
        finalTotalPrice();
    }
}
// Price With Extra Storage

function storageCost(Storage) {
    const storagePrice = document.getElementById("storage-cost");
    if (Storage == '256GB') {
        storagePrice.innerText = 0;
        finalTotalPrice();
    } else if (Storage == '512GB') {
        storagePrice.innerText = 100;
        finalTotalPrice();
    } else {
        storagePrice.innerText = 180;
        finalTotalPrice();
    }
}
// Price With Delivery Cost

function deliveryCost(Delivery) {
    const deliveryPrice = document.getElementById("delivery-cost");
    if (Delivery == 'Aug27') {
        deliveryPrice.innerText = 0;
        finalTotalPrice();
    }
    else {
        deliveryPrice.innerText = 20;
        finalTotalPrice();
    }
}
// Total Price

function finalTotalPrice() {
    const bestPrice = document.getElementById("best-price").innerText;
    const memoryCost = document.getElementById("memory-cost").innerText;
    const storageCost = document.getElementById("storage-cost").innerText;
    const deliveryCost = document.getElementById("delivery-cost").innerText;
    const TotalPriceText = (parseInt(bestPrice) + parseInt(memoryCost) + parseInt(storageCost) + parseInt(deliveryCost));
    const price = document.getElementById("total-cost");
    price.innerText = TotalPriceText;
    const bottomTotal = document.getElementById('bottom-total');
    bottomTotal.innerText = price.innerText;
}


// Event Handeler

document.getElementById('memory1-btn').addEventListener('click', function () {
    memoryCost('8GB');
});

document.getElementById("memory2-btn").addEventListener('click', function () {
    memoryCost('16GB');
})

document.getElementById("storage1-btn").addEventListener('click', function () {
    storageCost('256GB');
})

document.getElementById("storage2-btn").addEventListener('click', function () {
    storageCost('512GB');
})

document.getElementById("storage3-btn").addEventListener('click', function () {
    storageCost('1TB');
})

document.getElementById("delivery1-btn").addEventListener('click', function () {
    deliveryCost('Aug27');
})

document.getElementById("delivery2-btn").addEventListener('click', function () {
    deliveryCost('Aug20');
})


// Apply Promo Code

const promoCode = "stevekaku"
document.getElementById("promo-btn").addEventListener("click", function () {
    const promoCodeInput = document.getElementById("promo-input");
    const promoCodeInputValue = promoCodeInput.value.toLowerCase();
    if (promoCodeInputValue == promoCode) {

        const price = document.getElementById("total-cost");
        const totalPrice = price.innerText;

        const discountAmount = totalPrice * 0.2;
        const finalPrice = totalPrice - discountAmount;

        const bottomPrice = document.getElementById("bottom-total");
        bottomPrice.innerText = finalPrice;

        promoCodeInput.value = "";
    } else if (promoCodeInputValue == "") {
        alert("Opps! No Promo Code Found");
    }
    else {
        alert("Invalid Promo Code");
    }
});