
var checkoutTable = document.getElementById("table-data");
const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});

// console.log(window.location.href);
// console.log(params);
let ProductID = params.id;
console.log(ProductID);


checkoutTable.innerHTML = '<table id="all-products-table" data-sheetdb-sort-by="id" data-sheetdb-sort-order="' + ProductID +'">'
                            +'<tbody data-sheetdb-url="https://sheetdb.io/api/v1/w4d8ogt69y7bx">'
                                +'<tr>'
                                    +'<td>'
                                        +'<div class="table-view">'

                                            +'<div class="all-img">'
                                                +'<img width="300" height="300" src="{{image}}" alt="all-img" id="all-image">'
                                            +'</div>'

                                            +'<div class="all-name-price">'
                                                +'<div class="all-name">'
                                                    +'<p>{{name}}</p>'
                                                +'</div>'

                                                +'<div class="all-description">'
                                                    +'<p>{{description}}</p>'
                                                +'</div>'

                                                +'<form>'
                                                    +'<div class="quantity">'
                                                        +'<label for="quantity">Quantity</label>'
                                                        +'<input type="tel" name="quantity" id="quantity" class="form-control" required value="1" placeholder="1">'
                                                    +'</div>'
                                                +'</form>'

                                                +'<div class="all-price">'
                                                    +'<p>{{price}}</p>'
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

document.getElementById('table-data').style.display = 'block';
checkoutTable.style.display = 'flex';
checkoutTable.style.justifyContent = 'center';

var PayoutAmount = document.getElementById("amount");
var ProductQuantity = document.getElementById("quantity");

function UpdateCheckout() {
    let IntergerValueqUantity = parseInt(ProductQuantity.value);
    try {
        if (IntergerValueqUantity < 1) {
            alert("Please select a valid quantity");
            ProductQuantity.value = 1;
            PayoutAmount.value = '{{amount}}';
        } else {
            PayoutAmount.value = IntergerValueqUantity;
        }
    } catch (error) {
        console.log(error);
    }
}

function SquadPay() {
    const squadInstance = new squad({
      onClose: () => console.log("Widget closed"),
      onLoad: () => console.log("Widget loaded successfully"),
      onSuccess: () => console.log("Linked successfully"),
      key: "sandbox_pk_7e75ad7aa1ecce1f589361edbf2bc850",
      //Change key (test_pk_sample-public-key-1) to the key on your Squad Dashboard
      email: document.getElementById("email-address").value,
      amount: document.getElementById("amount").value * 100,
      //Enter amount in Naira or Dollar (Base value Kobo/cent already multiplied by 100)
      currency_code: "NGN"
    });
    squadInstance.setup();
    squadInstance.open();
  }