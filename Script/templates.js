function getMenuCard(index) {
    return  `<div class="menuCard">
                    <div id="addToCartId${index}" class="addToCart">
                        <div class="addToCartInnerbox">+</div>
                    </div>
                    <div id="itemTitle${index}" class="itemTitle">${dish1[index].name}</div>
                    <div id="itemDescription${index}" class="itemDescription">${dish1[index].description}</div>
                    <div id="itemprice${index}" class="itemPrice">${dish1[index].price} €</div>
                </div>`;
}
function getMenuCard2(index) {
    return  `<div class="menuCard">
                    <div id="addToCartId${index}${index}" class="addToCart">
                        <div class="addToCartInnerbox">+</div>
                    </div>
                    <div id="itemTitle${index}${index}" class="itemTitle">${dish2[index].name}</div>
                    <div id="itemDescription${index}${index}" class="itemDescription">${dish2[index].description}</div>
                    <div id="itemprice${index}${index}" class="itemPrice">${dish2[index].price} €</div>
                </div>`;
}