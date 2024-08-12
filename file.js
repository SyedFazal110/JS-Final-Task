const title = document.querySelector("#title")
const description = document.querySelector("#description")
const price = document.querySelector("#price")
const addBtn = document.querySelector("#addBtn")

let arr = [];
let items = JSON.parse(localStorage.getItem('cartItems'));
if(items === null){
    arr = [];
}else{
    arr = items;
}

addBtn.addEventListener("click" , (event)=>{
    event.preventDefault()
    arr.push({
        laqab : title.value,
        desc : description.value,
        cost : price.value
    })
    title.value = '';
    description.value = '';
    price.value = '';
    render();
    // console.log(arr);
})



const products = document.querySelector("#products")
function render(){
    for(let i = 0; i < arr.length; i++){
        products.innerHTML += `
        <div class="card bg-dark text-light border-light" style="width: 18rem;">
            <div class="card-body">
                <h4 class="card-title">${arr[i].laqab}</h4>
                <p class="card-text">Description : ${arr[i].desc}</p>
                <p class="card-text">Price : ${arr[i].cost}</p>
                <button onclick="addtocart(${i})" class="btn btn-primary">Add to Cart</button>
            </div>
        </div>
        `
    }
}
render()


function addtocart(index){
    if(arr.includes(arr[index])){
        arr[index].quantity += 1;
    }else{
        arr[index].quantity = 1;
        arr.push(arr[index]);
    }
    
    console.log(arr);
}


function gotocart(){
    localStorage.setItem('cartItems' , JSON.stringify(arr));
    window.location = 'cart.html';
}