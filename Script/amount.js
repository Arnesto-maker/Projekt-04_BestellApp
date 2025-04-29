
function amountplus() {
    let amountNumber = document.getElementById('amountNumber0');
    counter ++ ;
    amountNumber.innerHTML = " ";
    amountNumber.innerHTML = counter + "X";
}

function amountMinus() {
    let amountNumber = document.getElementById('amountNumber0');
    counter -- ;
    amountNumber.innerHTML = " ";
    amountNumber.innerHTML = counter + "X";
    if (counter < 2) {
        counter = 1
        amountNumber.innerHTML = " ";
        amountNumber.innerHTML = counter + "X";
    }
}

function amountSum() {
    let sumNumber = document.getElementById('sumNumber0')
    sumNumber.innerHTML = " ";
    sumNumber.innerHTML = (counter*price) + "€";
    
}




// function amountplus1() {
//     let amountNumber = document.getElementById('amountNumber1');
//     counter1 ++ ;
//     amountNumber.innerHTML = " ";
//     amountNumber.innerHTML = counter1 + "X";
// }

// function amountMinus1() {
//     let amountNumber = document.getElementById('amountNumber1');
//     counter1 -- ;
//     amountNumber.innerHTML = " ";
//     amountNumber.innerHTML = counter1 + "X";
//     if (counter1< 2) {
//         counter1 = 1
//         amountNumber.innerHTML = " ";
//         amountNumber.innerHTML = counter1 + "X";
//     }
// }

// function amountSum1() {
//     let sumNumber = document.getElementById('sumNumber1')
//     sumNumber.innerHTML = " ";
//     sumNumber.innerHTML = (counter1*price) + "€";
    
// }


















