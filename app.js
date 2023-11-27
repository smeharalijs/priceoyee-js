const phones = [
    {
        name: 'iPhone 12',
        model: '12',
        rom: '128GB',
        color: 'Blue',
        price: 999.99
    },
    {
        name: 'Samsung Galaxy S21',
        model: 'S21',
        rom: '256GB',
        color: 'Black',
        price: 899.99
    },
    {
        name: 'Google Pixel 5',
        model: 'Pixel 5',
        rom: '128GB',
        color: 'Green',
        price: 799.99
    },
    {
        name: 'OnePlus 9',
        model: '9',
        rom: '256GB',
        color: 'Silver',
        price: 849.99
    },
    {
        name: 'Xiaomi Mi 11',
        model: 'Mi 11',
        rom: '128GB',
        color: 'Gray',
        price: 799.99
    },
    {
        name: 'Huawei P40',
        model: 'P40',
        rom: '256GB',
        color: 'White',
        price: 699.99
    },
    {
        name: 'LG Velvet',
        model: 'Velvet',
        rom: '128GB',
        color: 'Pink',
        price: 599.99
    },
    {
        name: 'Sony Xperia 5 III',
        model: 'Xperia 5 III',
        rom: '256GB',
        color: 'Purple',
        price: 1099.99
    }
];

// You can now use the `mobiles` variable to access the array of mobile phones in your application.


// console.log(phones);
// const div = document.querySelector('.render-phones');
// for (let i = 0; i < phones.length; i++) {
//     div.innerHTML += `
//     <div class="p-5 border border-1  rounded-1 shadow-lg m-2">
//             <p><span class="font-bold text-lg">brand:</span> ${phones[i].brand}</p>
//             <p><span class="font-bold text-lg">Model:</span> ${phones[i].model}</p>
//             <p><span class="font-bold text-lg">RAM:</span> ${phones[i].ram}</p>
//             <p><span class="font-bold text-lg">ROM:</span> ${phones[i].rom}</p>
//             <p><span class="font-bold text-lg">Camera:</span> ${phones[i].camera}</p>
//             <p><span class="font-bold text-lg">Price:</span> ${phones[i].price}</p>
//             <button onclick='addToCart(${i})' class="btn btn-primary m-2">Add to Cart</button>
//     </div>
//     `
    
// }

// function addToCart (index){
//     console.log(phones[index]);
// }


const div = document.querySelector('.render-phones');

// Render product cards
for (let i = 0; i < phones.length; i++) {
    div.innerHTML += `
    <div class="product-card" onclick="logProductInfo(${i})">
        <div class="product-img">
            <img src="https://images.priceoye.pk/zero-caliber-pro-all-metal-appearance-pakistan-priceoye-tyti2-270x270.webp" alt="" />
        </div>
        <div class="details">
            <h4>${phones[i].name} ${phones[i].model}</h4>
            <div class="price-rating">
                <span>$${phones[i].price.toFixed(2)}</span>
            </div>
            <div class="buttons">
                <button class="cartbtn">Add To Cart</button>
                <button class="buybtn">Buy Now</button>
            </div>
        </div>
    </div>
    `;
}

function logProductInfo(index) {
    console.log(phones[index]);
    
}
 

// Add your addToCart function here
function addToCart(index) {
    // Add your logic for adding to cart
  
}


const div4 = document.querySelector('.render-phones1');

// Render product cards
for (let i = 0; i < phones.length; i++) {
    div4.innerHTML += `
    <div class="product-card" onclick="logProductInfo(${i})">
        <div class="product-img">
            <img src="https://images.priceoye.pk/apple-iphone-15-pro-max-pakistan-priceoye-l58e8-270x270.webp" alt="" />
        </div>
        <div class="details">
            <h4>${phones[i].name} ${phones[i].model}</h4>
            <div class="price-rating">
                <span>$${phones[i].price.toFixed(2)}</span>
                <!-- Add your rating logic here -->
            </div>
            <div class="buttons">
                <button class="cartbtn">Add To Cart</button>
                <button class="buybtn">Buy Now</button>
            </div>
        </div>
    </div>
    `;
}

function logProductInfo(index) {
    console.log(phones[index]);
    
}
 

// Add your addToCart function here
function addToCart(index) {
    // Add your logic for adding to cart
  
}




const div3 = document.querySelector('.render-phones3');

for (let i = 0; i < phones.length; i++) {
    div3.innerHTML += `
    <div class="product-card" onclick="logProductInfo(${i})">
        <div class="product-img">
            <img src="https://images.priceoye.pk/a6s-wireless-bluetooth-earbuds-pakistan-priceoye-xl3av-270x270.webp" alt="" />
        </div>
        <div class="details">
            <h4>${phones[i].name} ${phones[i].model}</h4>
            <div class="price-rating">
                <span>$${phones[i].price.toFixed(2)}</span>
                <!-- Add your rating logic here -->
            </div>
            <div class="buttons">
                <button class="cartbtn">Add To Cart</button>
                <button class="buybtn">Buy Now</button>
            </div>
        </div>
    </div>
    `;
}

function logProductInfo(index) {
    console.log(phones[index]);
    
}
 

// Add your addToCart function here
function addToCart(index) {
    // Add your logic for adding to cart
  
}