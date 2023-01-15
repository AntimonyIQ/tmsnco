var xmlhttp = new XMLHttpRequest();
var url = "https://sheetdb.io/api/v1/v2y8a976yzqov";


var CurrentCart = document.getElementById("selectedItems");
var AddCartId = document.getElementById("AddCartId");
var cartBtn = document.getElementById("cartBtn");
var cartBtnCheck = document.getElementById("cartBtnCheck");

var AllTable = document.getElementById("AllTable");
var TraditionalTable = document.getElementById("TraditionalTable");
var WeddingTable = document.getElementById("WeddingTable");
var CasualTable = document.getElementById("CasualTable");

var Table1 = document.getElementById("all-table");
var Table2 = document.getElementById("traditional-table");
var Table3 = document.getElementById("wedding-table");
var Table4 = document.getElementById("casual-table");


console.log("Current cart: " + CurrentCart.value);

function AddToCart() {
    var TotalCart = parseInt(CurrentCart.value) + 1;
    console.log("Total Cart: " + TotalCart);
    CurrentCart.value = TotalCart;
    cartBtn.style.display = "none";
}

function AllTableBtn() {
    AllTable.style.backgroundColor = "#EFB036";
    TraditionalTable.style.backgroundColor = "#d1d1d1";
    WeddingTable.style.backgroundColor = "#d1d1d1";
    CasualTable.style.backgroundColor = "#d1d1d1";

    Table1.style.display = "block";
    Table2.style.display = "none";
    Table3.style.display = "none";
    Table4.style.display = "none";

}
function TraditionalTableBtn() {
    AllTable.style.backgroundColor = "#d1d1d1";
    TraditionalTable.style.backgroundColor = "#EFB036";
    WeddingTable.style.backgroundColor = "#d1d1d1";
    CasualTable.style.backgroundColor = "#d1d1d1";

    Table1.style.display = "none";
    Table2.style.display = "block";
    Table3.style.display = "none";
    Table4.style.display = "none";
}
function WeddingTableBtn() {
    AllTable.style.backgroundColor = "#d1d1d1";
    TraditionalTable.style.backgroundColor = "#d1d1d1";
    WeddingTable.style.backgroundColor = "#EFB036";
    CasualTable.style.backgroundColor = "#d1d1d1";

    Table1.style.display = "none";
    Table2.style.display = "none";
    Table3.style.display = "block";
    Table4.style.display = "none";
}
function CasualTableBtn() {
    AllTable.style.backgroundColor = "#d1d1d1";
    TraditionalTable.style.backgroundColor = "#d1d1d1";
    WeddingTable.style.backgroundColor = "#d1d1d1";
    CasualTable.style.backgroundColor = "#EFB036";

    Table1.style.display = "none";
    Table2.style.display = "none";
    Table3.style.display = "none";
    Table4.style.display = "block";
}

function OpenCheckout() {
    window.location.href = "../checkout/?total_cart=0&cart_id=2";
}

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        console.log(myArr[0]);
        myFunction(myArr);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function myFunction(arr) {
    var out = "";
    var i;
    for(i = 0; i < arr.length; i++) {
        out += '<a href="' + arr[i].url + '">' +
        arr[i].display + '</a><br>';
    }
    document.getElementById("id01").innerHTML = out;
}