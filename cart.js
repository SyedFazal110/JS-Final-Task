const cartItems = JSON.parse(localStorage.getItem('cartItems'));


const div = document.querySelector('#box');
const totalAmount = document.querySelector('.totalprice');


function renderItems (){
    if(cartItems != null && cartItems.length > 0){
        for(let i = 0; i < cartItems.length; i++){
            console.log(cartItems[i]);
            div.innerHTML += `
            <div class="border border-white rounded m-3 p-3">
            <h1>Title: ${cartItems[i].laqab}</h1>
            <p>Description: ${cartItems[i].desc}</p>
            <h3>Price: ${cartItems[i].cost * cartItems[i].quantity}</h3>
            <p class="card-text mt-3">Quantity : <button class='btn btn-danger rounded' onclick='minusBtn(${i})'>-</button>  ${cartItems[i].quantity}  <button class='btn btn-danger' onclick='plusBtn(${i})'>+</button></p><br/>
            <button class="btn btn-danger" onclick="deleteBtn(${i})">Delete</button>
            </div>`
        }
    }
    else{
        div.innerHTML = `<h3 class="text-center">No Item Found...</h3>`
    }
}

renderItems()



function plusBtn(index) {
    cartItems[index].quantity += 1
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
    location.reload()
    total()
}

function minusBtn(index) {
    if (cartItems[index].quantity === 1) {
        cartItems.splice(index, 1)
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
        location.reload()
    }
    else {
        cartItems[index].quantity -= 1
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
        location.reload()
        total()
    }
}

function deleteBtn(index) {
    cartItems.splice(index, 1)
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
    location.reload()
}

function total() {
    let TotalPrice = 0;
    for (let i = 0; i < cartItems.length; i++) {
        TotalPrice = TotalPrice + (cartItems[i].cost * cartItems[i].quantity)
    }
    totalAmount.innerHTML = `<h1 class="text-center">Total Price : ${TotalPrice}</h1>`
}
total()
