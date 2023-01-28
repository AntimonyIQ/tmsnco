var url = 'https://antimonyiq.github.io/tmsnco/assets/json/all.json';
var currency_url = 'https://api.currencyapi.com/v3/latest?apikey=7mlGm0bJlisc3xM1lE1bBS3VE9kFdzYXmhxYQG12';


var checkoutTable = document.getElementById("table-data");
const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});

// console.log(window.location.href);
// console.log(params);
let ProductID = params.id;
let PriceID = params.price;

var tbl = document.getElementById('tbl');
var AllName = document.getElementById('AllName');
var AllDescription = document.getElementById('AllDescription');
var AllPrice = document.getElementById('AllPrice');


fetch(url)
   .then(function(response) { 
       return response.json();
   }) 
  .then(function(data) {
      
        
        for (var i = 0; i < data.length; i++) {
            if (data[i].id == ProductID) {
                console.log(data[i].product_size);
                tbl.innerHTML = '<div class="all-img" style="height: 50vh; background-image: url(' + data[i].product_image + '); background-repeat: no-repeat; background-size: cover;">'
                                
                                +'</div>';
                                
                AllName.innerHTML = data[i].product_name;
                AllDescription.innerHTML = data[i].product_des;
                                    
                AllPrice.innerHTML = '$' + data[i].product_price.CAD + '<span style="font-size: 14px; color: #808080;">CAD</span>';
            }
        }
        

  })




document.getElementById('table-data').style.display = 'block';
checkoutTable.style.display = 'flex';
checkoutTable.style.justifyContent = 'center';


let IntergerValuePrice = parseFloat(PriceID);
var GetQuantity = document.getElementById('quantityx');
var GetSize = document.getElementById('sizex');
var PayAmount = document.getElementById('amount');

function UpdateCheckout(arg) {
    // body...
    let IntGetQuantity = parseInt(GetQuantity.value);
    let IntGetSize = parseInt(GetSize.value);
    
    console.log('quantity is: ' + IntGetQuantity);
    console.log('size is: ' + IntGetSize);
    
    if (GetQuantity.value == "" || GetSize.value == "") {
        console.log('error getting value');
        
    } else {
        if (GetQuantity.value == "") {
            fetch(currency_url)
                .then(function(res) { 
                    return res.json();
                }) 
                .then(function(data) {
                    console.log(data.data);
                    PayAmount.value = parseInt(1 * IntergerValuePrice) + '.00';
                })
            
        } else {
            fetch(currency_url)
                .then(function(res) { 
                    return res.json();
                }) 
                .then(function(data) {
                    console.log(data.data.CAD.value);
                    let currency_rate = parseFloat(data.data.NGN.value) / parseFloat(data.data.CAD.value);
                    // console.log(currency_rate);
                    let Payment_value = parseFloat(IntGetQuantity * IntergerValuePrice);
                    let converted_overall = parseFloat(Payment_value * currency_rate);
                    console.log(converted_overall.toLocaleString("en-US"));
                    PayAmount.value = converted_overall.toLocaleString("en-US");
                })
            
        }
    }
    
    
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
      currency_code: "NGN"
    });
    squadInstance.setup();
    squadInstance.open();
  }
