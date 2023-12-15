
let addMore = document.querySelector('#addMore');
addMore.addEventListener('click', function(event){
    event.preventDefault();
    window.location = "index.html";
    localStorage.setItem('items' , JSON.stringify(getData));
})

let getData = JSON.parse(localStorage.getItem('items'));
console.log(getData);

let counter = document.querySelector(".counter");
let div = document.querySelector('.render-phones');

function render() {
    let counters = 0;
    counter.innerHTML = ""
    if (getData.length > 0) {
        div.innerHTML = "";
        for (var i = 0; i < getData.length; i++) {
            counters += getData[i].price * getData[i].quantity;
            div.innerHTML +=
                `<div class="product-container">
        <div class="product-card">
            <div class="product-img w-100 d-flex">
                <img src="${getData[i].image}"/>
            </div>
            <div class="details">
                <h4> Title : ${getData[i].title}</h4>
                <h4> Quantity : ${getData[i].quantity}</h4>
                <div class="price-rating">
                    <span>Price : $ ${getData[i].price}</span>
                </div>
                <div class="price-rating">
                    <span> Total Price : $ ${getData[i].price * getData[i].quantity}</span>
                </div>

                <button   onclick="plus(${i})">+</button>
                <span> ${getData[i].quantity}</span>
                <button  onclick="minus(${i})">-</button>
                <div class="buttons">
                
                <button class="cartbtn" onclick="deleteCart(${i})">Delete Cart</button>

                </div>
            </div>
        </div>
    </div>`;
    // counter.innerHTML = `Total Amount $ ${counters}`
        }
    } else {
        div.innerHTML = `<h1>Empty Carts</h1>`
    }
}
render();



function plus(i){
div.innerHTML = "";
getData[i].quantity += 1;
render();
localStorage.setItem('items', JSON.stringify(getData));

}

function minus(i){
    div.innerHTML = "";
    getData[i].quantity -= 1;
render();
if(getData[i].quantity === 0){
    div.innerHTML = "";
    getData.splice(i, 1);
    render();
}
localStorage.setItem('items', JSON.stringify(getData));

    }

function deleteCart(i) {


    getData.splice(i, 1);
    render();
    localStorage.setItem('items', JSON.stringify(getData));



    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
        title: "Are you sure?",
        text: "You want to delete Your Cart?",
        icon: "warning",
        // showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        // cancelButtonText: "No, cancel!",
        // reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            swalWithBootstrapButtons.fire({
                title: "Deleted!",
                text: "Item Successfully Deleted from Your Cart",
                icon: "success"
            });
        } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire({
                // title: "Cancelled",
                // text: "Your imaginary file is safe :)",
                // icon: "error"
            });
        }
    });


}


