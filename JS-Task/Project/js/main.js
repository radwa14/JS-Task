
var productName = document.getElementById("productName")
var productPrice = document.getElementById("productPrice")
var productCateg = document.getElementById("productCateg")
var productDesc = document.getElementById("productDesc")
var productCount = document.getElementById("productCount")

var productContainer;

if (localStorage.getItem("ourProducts") == null) {
    productContainer = [];
} else {
    productContainer = JSON.parse(localStorage.getItem("ourProducts"))
    displayProduct()
}



function addProduct() {
    var product = {
        name: productName.value,
        price: productPrice.value,
        categ: productCateg.value,
        desc: productDesc.value,
        count: productCount.value
    }
    // product.count

    if (product.count > 1) {
        for (var i = 0; i < product.count; i++) {
            productContainer.push(product)
        }
    } else {
        productContainer.push(product)
    }


    localStorage.setItem("ourProducts", JSON.stringify(productContainer))

    // console.log(productContainer);
    displayProduct()
    clearInp();
}
// display
function displayProduct() {
    var ProductList = ""
    for (var i = 0; i < productContainer.length; i++) {
        ProductList += `<tr>
                    <td>${i + 1}</td>
                    <td>${productContainer[i].name}</td>
                    <td>${productContainer[i].price}</td>
                    <td>${productContainer[i].categ}</td>
                    <td>${productContainer[i].desc}</td>
                    <td>
            <button class="btn btn-danger" onclick="deleteRow(${i})"> Delete </button>
            </td>
            <td>
            <button class="btn btn-warning "> Update </button>
            </td>
                </tr>`
    }
    document.getElementById("tBody").innerHTML = ProductList
}
// clearInp
function clearInp() {
    productName.value = "";
    productPrice.value = "";
    productCateg.value = "";
    productDesc.value = "";
}

//deleteAll
function deleteAll() {
    productContainer.splice(0);
    localStorage.setItem("ourProducts", JSON.stringify(productContainer))
    displayProduct()
}

// deleteRow
function deleteRow(i) {
    productContainer.splice(i, 1)
    localStorage.setItem("ourProducts", JSON.stringify(productContainer))

    displayProduct()
}

// searchProduct
function searchProduct(term) {
    var productList2 = ""
    for (var i = 0; i < productContainer.length; i++) {
        if (productContainer[i].name.includes(term.trim()) == true) {
            productList2 += `<tr>
            <td>${i + 1}</td>
            <td>${productContainer[i].name}</td>
            <td>${productContainer[i].price}</td>
            <td>${productContainer[i].categ}</td>
            <td>${productContainer[i].desc}</td>
            <td>
                <button class="btn btn-danger" onclick="deleteRow(${i})"> Delete </button>
                </td>
                <td>
                <button class="btn btn-warning "> Update </button>
                </td>
                    </tr>`
        }
    }
    document.getElementById("tBody").innerHTML = productList2
}






// var x = "mohamed"
// x.includes("m")

// localStorage.setItem( "userName" , "Mohamed" )

// console.log(   localStorage.getItem("userName") );