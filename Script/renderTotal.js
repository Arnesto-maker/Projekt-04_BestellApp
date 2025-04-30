function renderTotal() {
    let totalSumNumber = document.getElementById('totalSumNumber');
    totalSumNumber.innerHTML = "";
    for (let index = 0; index < totalArray.length; index++) {
        totalSumNumber.innerHTML += getTotal(0)
    }
}