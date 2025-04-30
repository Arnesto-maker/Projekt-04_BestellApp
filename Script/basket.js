function basketActive(index) {
    let basketIcon = document.getElementById('basketIconImg'+index);
    if (basketIcon.src.endsWith("Assets/trash-969.png")) {
        basketIcon.src = "Assets/red-delete-10437.png"
    }
}
function basketDeactive(index) {
    let basketIcon = document.getElementById('basketIconImg'+index);
    if (basketIcon.src.endsWith("Assets/red-delete-10437.png")) {
        basketIcon.src = "Assets/trash-969.png"
    }
}
function removeFormBasket(index) {
    price.splice(index,1);
        basketTitle.splice(index,1);
        newAmount = 1;
        amount.splice(index,1,newAmount)
        renderBasket()
}
