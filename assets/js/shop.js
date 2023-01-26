var url = 'http://localhost:7700/tmsnco-master/assets/json/all.json';
var url_latest = 'http://localhost:7700/tmsnco-master/assets/json/latest.json'

var shopTables = document.getElementById('table-data');
var shopTableAll = document.getElementById('Table1');
var shopTableSuit = document.getElementById('Table2');
var shopTableAnkara = document.getElementById('Table3');
var shopTableAdire = document.getElementById('Table4');

var LatestImage = document.getElementById('latestPrice');
var LatestDes = document.getElementById('latestDes');
var LatestTitle  = document.getElementById('latestTitle');
var latestImg = document.getElementById('latest_image');
var LatestCheckout = document.getElementById('LatestCheckout');


var AllTable = document.getElementById("AllTable");
var TraditionalTable = document.getElementById("TraditionalTable");
var WeddingTable = document.getElementById("WeddingTable");
var CasualTable = document.getElementById("CasualTable");

var Table1 = document.getElementById("all-table");
var Table2 = document.getElementById("traditional-table");
var Table3 = document.getElementById("wedding-table");
var Table4 = document.getElementById("casual-table");

fetch(url_latest)
    .then(function(arg) {
        // body...
        return arg.json();
    })
    .then(function (latest_data) {
        // body...
        console.log(latest_data);
        LatestImage.innerHTML = '$' + latest_data.product_price.CAD + '<span style="font-size: 14px; color: #808080;">CAD</span>';
        LatestDes.innerHTML = latest_data.product_des;
        LatestTitle.innerHTML = latest_data.product_name;
        latestImg.innerHTML = '<img src="' + latest_data.product_image + '" alt="item_image" id="latestImage" class="image">';
        LatestCheckout.innerHTML = '<a href="../checkout/?id=' + latest_data.id + '&price=' + latest_data.product_price.CAD + '">BUY IT NOW</a>'
    })



fetch(url)
   .then(function(response) { 
       return response.json();
   }) 
  .then(function(data) {
        
      
      for (var i = 0; i < data.length; i++) {
            // console.log(data[i]);
            
            shopTableAll.innerHTML += 
            '<table class="all-products-table" id="all-table">'
                +'<tbody>'
                    +'<tr>'
                        +'<td>'
                            +'<div class="table-view"> '
                                +'<div class="all-id" style="display: none;">'
                                    +'<input type="tel" name="productID" id="productID" value="">'
                                +'</div>'
                                +'<div class="all-img" id="all-image" style="height: 50vh; background-image: url(' + data[i].product_image + '); background-repeat: no-repeat; background-size: cover;">'
                
                                +'</div>'
                                +'<div class="all-name-price">'
                                    +'<div class="all-name">'
                                        +'<p id="name">' + data[i].product_name + '</p>'
                                    +'</div>'
                                    +'<div class="all-description">'
                                        +'<p id="description">' + data[i].product_des + '</p>'
                                    +'</div>'
                                    +'<div class="all-properties">'
                                        +'<div class="properties-color">'
                                            +'<p id="color">Color: ' + data[i].product_color + '</p>'
                                        +'</div>'
                                        +'<div class="properties-status">'
                                            +'<p id="status">Status: ' + data[i].product_status + '</p>'
                                        +'</div>'
                                        +'<div class="properties-stock">'
                                            +'<p id="stock">Stock: ' + data[i].product_stock + '</p>'
                                        +'</div>'
                                    +'</div>'
                                    +'<div class="all-price">'
                                        +'<p>$' + data[i].product_price.CAD + '<span style="font-size: 14px; color: #808080;">CAD</span>' + '</p>'
                                    +'</div>'
                                +'</div>'
                                +'<div class="expand-product">'
                                    +'<a class="text-center" href="../checkout/?id=' + data[i].id + '&price=' + data[i].product_price.CAD + '">BUY ITEM NOW</a>'
                                +'</div>'
                            +'</div>'
                        +'</td>'
                    +'</tr>'
                +'</tbody>'
            +'</table>';
      }
  }) 


function AllTableBtn() {
    AllTable.style.backgroundColor = "#EFB036";
    TraditionalTable.style.backgroundColor = "#d1d1d1";
    WeddingTable.style.backgroundColor = "#d1d1d1";
    CasualTable.style.backgroundColor = "#d1d1d1";
    
    shopTables.style.display = 'none';
    shopTableAll.style.display = 'block';
    shopTableSuit.style.display = 'none';
    shopTableAnkara.style.display = 'none';
    shopTableAdire.style.display = 'none';

    
    fetch(url)
        .then(function(response) { 
            return response.json();
        }) 
        .then(function(data) {
            
        for (var i = 0; i < data.length; i++) {
            console.log(data[i]);
            
            shopTableAll.innerHTML += 
            '<table class="all-products-table" id="all-table">'
                +'<tbody>'
                    +'<tr>'
                        +'<td>'
                            +'<div class="table-view"> '
                                +'<div class="all-id" style="display: none;">'
                                    +'<input type="tel" name="productID" id="productID" value="">'
                                +'</div>'
                                +'<div class="all-img" style="height: 50vh; background-image: url(' + data[i].product_image + '); background-repeat: no-repeat; background-size: cover;">'
                                    
                                +'</div>'
                                +'<div class="all-name-price">'
                                    +'<div class="all-name">'
                                        +'<p id="name">' + data[i].product_name + '</p>'
                                    +'</div>'
                                    +'<div class="all-description">'
                                        +'<p id="description">' + data[i].product_des + '</p>'
                                    +'</div>'
                                    +'<div class="all-properties">'
                                        +'<div class="properties-color">'
                                            +'<p id="color">Color: ' + data[i].product_color + '</p>'
                                        +'</div>'
                                        +'<div class="properties-status">'
                                            +'<p id="status">Stock: ' + data[i].product_status + '</p>'
                                        +'</div>'
                                        +'<div class="properties-stock">'
                                            +'<p id="stock">Stock: ' + data[i].product_stock + '</p>'
                                        +'</div>'
                                    +'</div>'
                                    +'<div class="all-price">'
                                        +'<p id="price">$' + data[i].PRODUCT_PRICE.CAD + '<span style="font-size: 14px; color: #808080;">CAD</span>' + '</p>'
                                    +'</div>'
                                +'</div>'
                                +'<div class="expand-product">'
                                    +'<a class="text-center" href="../checkout/?id=' + data[i].id  + data[i].id + '&price=' + data[i].product_price.CAD + '">BUY ITEM NOW</a>'
                                +'</div>'
                            +'</div>'
                        +'</td>'
                    +'</tr>'
                +'</tbody>'
            +'</table>';
            
      }
  }) 


}
function TrackSuitBtn() {
    AllTable.style.backgroundColor = "#d1d1d1";
    TraditionalTable.style.backgroundColor = "#EFB036";
    WeddingTable.style.backgroundColor = "#d1d1d1";
    CasualTable.style.backgroundColor = "#d1d1d1";

    shopTables.style.display = 'none';
    shopTableAll.style.display = 'none';
    shopTableSuit.style.display = 'block';
    shopTableAnkara.style.display = 'none';
    shopTableAdire.style.display = 'none';
    
    fetch(url)
        .then(function(response) { 
            return response.json();
        }) 
        .then(function(data) {
            
        for (var i = 0; i < data.length; i++) {
            //console.log(data[i]);
            if (data[i].product_categorie == "suit") {
                console.log(data[i])
                
                shopTableSuit.innerHTML += 
            '<table id="traditional-table">'
                +'<tbody>'
                    +'<tr>'
                        +'<td>'
                            +'<div class="table-view"> '
                                +'<div class="all-id" style="display: none;">'
                                    +'<input type="tel" name="productID" id="productID" value="">'
                                +'</div>'
                                +'<div class="all-img" style="height: 50vh; background-image: url(' + data[i].product_image + '); background-repeat: no-repeat; background-size: cover;">'
                                    
                                +'</div>'
                                +'<div class="all-name-price">'
                                    +'<div class="all-name">'
                                        +'<p id="name">' + data[i].product_name + '</p>'
                                    +'</div>'
                                    +'<div class="all-description">'
                                        +'<p id="description">' + data[i].product_des + '</p>'
                                    +'</div>'
                                    +'<div class="all-properties">'
                                        +'<div class="properties-color">'
                                            +'<p id="color">Color: ' + data[i].product_color + '</p>'
                                        +'</div>'
                                        +'<div class="properties-status">'
                                            +'<p id="status">Stock: ' + data[i].product_status + '</p>'
                                        +'</div>'
                                        +'<div class="properties-stock">'
                                            +'<p id="stock">Stock: ' + data[i].product_stock + '</p>'
                                        +'</div>'
                                    +'</div>'
                                    +'<div class="all-price">'
                                        +'<p id="price">$' + data[i].product_price.CAD + '<span style="font-size: 14px; color: #808080;">CAD</span>' + '</p>'
                                    +'</div>'
                                +'</div>'
                                +'<div class="expand-product">'
                                    +'<a class="text-center" href="../checkout/?id=' + data[i].id + '&price=' + data[i].product_price.CAD + '">BUY ITEM NOW</a>'
                                +'</div>'
                            +'</div>'
                        +'</td>'
                    +'</tr>'
                +'</tbody>'
            +'</table>';
            }
            
         }
  }) 


}
function AnkaraBtn() {
    AllTable.style.backgroundColor = "#d1d1d1";
    TraditionalTable.style.backgroundColor = "#d1d1d1";
    WeddingTable.style.backgroundColor = "#EFB036";
    CasualTable.style.backgroundColor = "#d1d1d1";

    shopTables.style.display = 'none';
    shopTableAll.style.display = 'none';
    shopTableSuit.style.display = 'none';
    shopTableAnkara.style.display = 'block';
    shopTableAdire.style.display = 'none';
    
    fetch(url)
        .then(function(response) { 
            return response.json();
        }) 
        .then(function(data) {
            
        for (var i = 0; i < data.length; i++) {
            // console.log(data[i]);
            
            if (data[i].product_categorie == "ankara") {
                console.log(data[i].id)
                shopTableAnkara.innerHTML += 
            '<table id="wedding-table">'
                +'<tbody>'
                    +'<tr>'
                        +'<td>'
                            +'<div class="table-view"> '
                                +'<div class="all-id" style="display: none;">'
                                    +'<input type="tel" name="productID" id="productID" value="">'
                                +'</div>'
                                +'<div class="all-img" style="height: 50vh; background-image: url(' + data[i].product_image + '); background-repeat: no-repeat; background-size: cover;">'
                                    
                                +'</div>'
                                +'<div class="all-name-price">'
                                    +'<div class="all-name">'
                                        +'<p id="name">' + data[i].product_name + '</p>'
                                    +'</div>'
                                    +'<div class="all-description">'
                                        +'<p id="description">' + data[i].product_des + '</p>'
                                    +'</div>'
                                    +'<div class="all-properties">'
                                        +'<div class="properties-color">'
                                            +'<p id="color">Color: ' + data[i].product_color + '</p>'
                                        +'</div>'
                                        +'<div class="properties-status">'
                                            +'<p id="status">Stock: ' + data[i].product_status + '</p>'
                                        +'</div>'
                                        +'<div class="properties-stock">'
                                            +'<p id="stock">Stock: ' + data[i].product_stock + '</p>'
                                        +'</div>'
                                    +'</div>'
                                    +'<div class="all-price">'
                                        +'<p id="price">$' + data[i].product_price.CAD + '<span style="font-size: 14px; color: #808080;">CAD</span>' + '</p>'
                                    +'</div>'
                                +'</div>'
                                +'<div class="expand-product">'
                                    +'<a class="text-center" href="../checkout/?id=' + data[i].id + '&price=' + data[i].product_price.CAD + '">BUY ITEM NOW</a>'
                                +'</div>'
                            +'</div>'
                        +'</td>'
                    +'</tr>'
                +'</tbody>'
            +'</table>';
            
            }
            
            
      }
  }) 


}
function AdireBtn() {
    AllTable.style.backgroundColor = "#d1d1d1";
    TraditionalTable.style.backgroundColor = "#d1d1d1";
    WeddingTable.style.backgroundColor = "#d1d1d1";
    CasualTable.style.backgroundColor = "#EFB036";

    shopTables.style.display = 'none';
    shopTableAll.style.display = 'none';
    shopTableSuit.style.display = 'none';
    shopTableAnkara.style.display = 'none';
    shopTableAdire.style.display = 'block';

    
    fetch(url)
        .then(function(response) { 
            return response.json();
        }) 
        .then(function(data) {
            
        for (var i = 0; i < data.length; i++) {
            // console.log(data[i]);
            
            if (data[i].product_categorie == "adire") {
                console.log(data[i].id)
                shopTableAdire.innerHTML += 
            '<table id="casual-table">'
                +'<tbody>'
                    +'<tr>'
                        +'<td>'
                            +'<div class="table-view"> '
                                +'<div class="all-id" style="display: none;">'
                                    +'<input type="tel" name="productID" id="productID" value="">'
                                +'</div>'
                                +'<div class="all-img" style="height: 50vh; background-image: url(' + data[i].product_image + '); background-repeat: no-repeat; background-size: cover;">'
                                    
                                +'</div>'
                                +'<div class="all-name-price">'
                                    +'<div class="all-name">'
                                        +'<p id="name">' + data[i].product_name + '</p>'
                                    +'</div>'
                                    +'<div class="all-description">'
                                        +'<p id="description">' + data[i].product_des + '</p>'
                                    +'</div>'
                                    +'<div class="all-properties">'
                                        +'<div class="properties-color">'
                                            +'<p id="color">Color: ' + data[i].product_color + '</p>'
                                        +'</div>'
                                        +'<div class="properties-status">'
                                            +'<p id="status">Stock: ' + data[i].product_status + '</p>'
                                        +'</div>'
                                        +'<div class="properties-stock">'
                                            +'<p id="stock">Stock: ' + data[i].product_stock + '</p>'
                                        +'</div>'
                                    +'</div>'
                                    +'<div class="all-price">'
                                        +'<p id="price">' + data[i].product_price.CAD + '<span style="font-size: 14px; color: #808080;">CAD</span>' + '</p>'
                                    +'</div>'
                                +'</div>'
                                +'<div class="expand-product">'
                                    +'<a class="text-center" href="../checkout/?id=' + data[i].id + '&price=' + data[i].product_price.CAD + '">BUY ITEM NOW</a>'
                                +'</div>'
                            +'</div>'
                        +'</td>'
                    +'</tr>'
                +'</tbody>'
            +'</table>';
            
            }
            
            
      }
  }) 


}

function OpenCheckout() {
    window.location.href = "../checkout/?total_cart=0&cart_id=2";
}
