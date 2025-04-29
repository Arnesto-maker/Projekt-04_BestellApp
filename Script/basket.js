

function basketActive() {
    let basketIcon = document.getElementById('basketIconImg0');
    if (basketIcon.src.endsWith("Assets/trash-969.png")) {
        basketIcon.src = "Assets/red-delete-10437.png"
    }
}
function basketDeactive() {
    let basketIcon = document.getElementById('basketIconImg0');
    if (basketIcon.src.endsWith("Assets/red-delete-10437.png")) {
        basketIcon.src = "Assets/trash-969.png"
    }
}

// function basketActive1() {
//     let basketIcon = document.getElementById('basketIconImg1');
//     if (basketIcon.src.endsWith("Assets/trash-969.png")) {
//         basketIcon.src = "Assets/red-delete-10437.png"
//     }
// }
// function basketDeactive1() {
//     let basketIcon = document.getElementById('basketIconImg1');
//     if (basketIcon.src.endsWith("Assets/red-delete-10437.png")) {
//         basketIcon.src = "Assets/trash-969.png"
//     }
// }

