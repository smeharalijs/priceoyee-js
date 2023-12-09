let getData = JSON.parse(localStorage.getItem('items'));
console.log(getData);


let div = document.querySelector('.render-phones');
function render() {
    if (getData.length > 0) {
        div.innerHTML = "";
        for (var i = 0; i < getData.length; i++) {
            div.innerHTML +=
                `<div class="product-container">
        <div class="product-card">
            <div class="product-img w-100 d-flex">
                <img src="${getData[i].image}"/>
            </div>
            <div class="details">
                <h4> ${getData[i].title}</h4>
                <div class="price-rating">
                    <span>$ ${getData[i].price}</span>
                </div>
                <div class="buttons">
                <button class="cartbtn" onclick="deleteCart(${i})">Delete Cart</button>

                </div>
            </div>
        </div>
    </div>`;
        }
    } else {
        div.innerHTML = `<h1>Empty Carts</h1>`
    }
}
render();

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


