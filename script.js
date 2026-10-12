let tabs = document.querySelectorAll(".tab");

let products = document.querySelectorAll(".card");



tabs.forEach(function (tab) {

    tab.addEventListener("click", function () {

        tabs.forEach(function (tab) {
            tab.classList.remove("active");
        });

        tab.classList.add("active");

        let filter = tab.dataset.filter;


        products.forEach(function (product) {

            if (filter == "all") {
                product.style.display = "block";

            } else if (product.dataset.category == filter) {
                product.style.display = "block";

            } else {
                product.style.display = "none";
            }

        });

    });

});

let sort = document.getElementById("sort");
let productsContainer = document.getElementById("products");


let allCards = Array.from(productsContainer.querySelectorAll(".card"));


sort.addEventListener("change", function () {

    let value = sort.value;


    let productArray = Array.from(allCards);

    if (value == "low") {
        productArray.sort(function (a, b) {
            return a.dataset.price - b.dataset.price;
        });
    }

    if (value == "high") {
        productArray.sort(function (a, b) {
            return b.dataset.price - a.dataset.price;
        });
    }

    productArray.forEach(function (product) {
        productsContainer.appendChild(product);
    });

});





let addButtons = document.getElementsByClassName("add-btn");
let cartItemsContainer = document.getElementById("cart-items");
let cartCountElement = document.getElementById("cart-count");
let totalElement = document.getElementById("total");

let totalPrice = 0;
let totalCount = 0;


for (let i = 0; i < addButtons.length; i++) {
    addButtons[i].addEventListener("click", function(event) {
        let card = event.target.closest(".card");   // ال event. target لما المستخدم يضغط عليهه بروحح اجيب اقربعنصرر الي هوا cardكله محتاج فهم اكترر 
      
        
        let title = card.querySelector("h3").innerText;
        let priceString = card.querySelector(".price").innerText;
        let price = parseFloat(priceString.replace("$", ""));// اوعااا تنسييي حول السعر لرقم
        
        let imgSrc = card.querySelector("img").getAttribute("src");

  
        totalCount++;
        totalPrice += price;

        cartCountElement.innerText = totalCount;
        totalElement.innerText = totalPrice;

   
        let cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");           
        // هعمل div جديده و اضيف المنتجات كل مرهه
        cartItem.innerHTML = `
            <img src="${imgSrc}" alt="${title}" style="width: 40px; height: 40px;  margin-right: 10px;">
            <span>${title}</span>
            <span>${priceString}</span>
            <button class="remove-btn" style="margin-left: auto; background: #ff4d4d; color: white; border: none; padding: 2px 8px;  border-radius: 4px;">Remove</button>
        `;

   
        let removeBtn = cartItem.querySelector(".remove-btn");
        removeBtn.addEventListener("click", function() {
          
            totalPrice -= price;
            totalCount--;
            cartCountElement.innerText = totalCount;
            totalElement.innerText = totalPrice;

            
            cartItem.remove();
        });

       
        cartItemsContainer.appendChild(cartItem);
    });
}

let icon = document.querySelector(".bi-bag");
let cart = document.querySelector(".cart"); 


icon.addEventListener("click", () => {
        cart.classList.toggle("active");
});




