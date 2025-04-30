function getMenuCard(index) {
    return  `<div class="menuCard">
                    <div id="addToCartId${index}" class="addToCart" onClick = "addToBasket(${index}),renderBasket()">
                        <div class="addToCartInnerbox">+</div>
                    </div>
                    <div id="itemTitle${index}" class="itemTitle">${dish1[index].name}</div>
                    <div id="itemDescription${index}" class="itemDescription">${dish1[index].description}</div>
                    <div id="itemprice${index}" class="itemPrice">${dish1[index].price} €</div>
                </div>`;
}
function getBuyBasket(index) {
    return `<div class="child02" id="menuInCart${index}">
                        <div class="food-title" id="foodTitle${index}">${basketTitle[index]}</div>
                        <div class="basket-function">
                            <div class="amount">
                                <div class="amountMinus" id="amountMinus${index}" onclick="amountMinus(${index})">-</div>
                                <div class="amountNumber" id="amountNumber${index}">${amount[index]}X</div>
                                <div class="amountPlus" id="amountPlus${index}" onclick="amountplus(${index})">+</div>
                            </div>
                            <div class="amount-sum">
                                <div class="sumNumber" id="sumNumber${index}">${sumNumberArray[index]}</div>
                                <div class="basket-icon">
                                    <img src="Assets/trash-969.png" alt="trash" id="basketIconImg${index}" class="basketIconImg" onmousedown="basketActive(${index})" onmouseup="basketDeactive(${index})" onclick="removeFormBasket(${index})">
                                </div>
                            </div>
                        </div>
                    </div>`;
    
}

