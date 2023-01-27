var url = 'https://antimonyiq.github.io/tmsnco/assets/json/all.json';

var checkoutTable = document.getElementById("table-data");
const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});

// console.log(window.location.href);
// console.log(params);
let ProductID = params.id;
let PriceID = params.price;


fetch(url)
   .then(function(response) { 
       return response.json();
   }) 
  .then(function(data) {
      
        
        for (var i = 0; i < data.length; i++) {
            if (data[i].id == ProductID) {
                console.log(data[i].product_size);
                checkoutTable.innerHTML = 
                        '<table>'
                            +'<tbody>'
                                +'<tr>'
                                    +'<td>'
                                        +'<div class="table-view">'

                                            +'<div class="all-img" style="height: 50vh; background-image: url(' + data[i].product_image + '); background-repeat: no-repeat; background-size: cover;">'

                                            +'</div>'

                                            +'<div class="all-name-price">'
                                                +'<div class="all-name">'
                                                    +'<p>' + data[i].product_name + '</p>'
                                                +'</div>'

                                                +'<div class="all-description">'
                                                    +'<p>' + data[i].product_des + '</p>'
                                                +'</div>'

                                                +'<form>'
                                                    +'<div class="quantity">'
                                                        +'<label for="quantity">Quantity</label>'
                                                        +'<input type="tel" name="quantity" id="quantity" class="form-control" value="" placeholder="1 - ' + data[i].product_stock + '" maxlength="2">'
                                                    +'</div>'
                                                    
                                                    +'<div class="size">'
                                                        +'<label for="size">Size</label>'
                                                        +'<input type="tel" name="size" id="size" class="form-control" value="" placeholder="' + data[i].product_size[0] + ', ' + data[i].product_size[1] + ', ' + data[i].product_size[2] + '" maxlength="2">'
                                                    +'</div>'
                                                +'</form>'

                                                +'<div class="all-price">'
                                                    +'<p>$' + data[i].product_price.CAD + '<span style="font-size: 14px; color: #808080;">CAD</span>' + '</p>'
                                                +'</div>'
                                            +'</div>'

                                            +'<div class="expand-product">'
                                                +'<button class="text-center" onclick="return UpdateCheckout();">Update checkout</button>'
                                            +'</div>'

                                        +'</div>'
                                    +'</td>'
                                +'</tr>'
                            +'</tbody>'
                        +'</table>';
            }
        }
        
        
  })




document.getElementById('table-data').style.display = 'block';
checkoutTable.style.display = 'flex';
checkoutTable.style.justifyContent = 'center';

var PayoutAmount = document.getElementById("amount");
var ProductQuantity = document.getElementById("quantity");

console.log('lex: ' + ProductQuantity.value);
let InIntergerValuePrice = parseFloat(PriceID);
    PayoutAmount.value = InIntergerValuePrice;
    
function UpdateCheckout() {
    // let IntergerValueqUantity = parseInt(ProductQuantity.value);
    let InIntergerValuePrice = parseInt(PriceID) + '.00';
    PayoutAmount.value = InIntergerValuePrice;
    /* 
    
    try {
        
        if (IntergerValueqUantity < 1) {
            alert("Please select a valid quantity");
            ProductQuantity.value = 1;
            PayoutAmount.value = InIntergerValuePrice;
        } else {
            let CheckoutPrice = InIntergerValuePrice;
            PayoutAmount.value = CheckoutPrice;
        }
    } catch (error) {
        console.log(error);
    }
    
    */
    
    
}

function SquadPay() {
    const squadInstance = new squad({
      onClose: () => console.log("Widget closed"),
      onLoad: () => console.log("Widget loaded successfully"),
      onSuccess: () => console.log("Linked successfully"),
      key: "pk_3644cf8dc6dd5c86e61a77cf630f91e62173caa7",
      //Change key (test_pk_sample-public-key-1) to the key on your Squad Dashboard
      email: document.getElementById("email-address").value,
      amount: document.getElementById("amount").value * 100,
      //Enter amount in Naira or Dollar (Base value Kobo/cent already multiplied by 100)
      currency_code: "USD"
    });
    squadInstance.setup();
    squadInstance.open();
  }
