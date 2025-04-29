function renderMenucard() {
    let menuCardSection = document.getElementById('menuCardSection');
    let menuCardSection2 = document.getElementById('menuCardSection2')
    for (let index = 0; index < dish1.length; index++) {menuCardSection.innerHTML += getMenuCard(index);}
    for (let index = 0; index < dish2.length; index++) {menuCardSection2.innerHTML += getMenuCard2(index);}
}