var order = [];
var prices = [];


var selectedItem;

var selectedPrice;

selectedPrice = Math.floor(selectedPrice * 100) / 100;
selectedPrice.toFixed(2);

var addChicken = " w/ Chicken";
var chickenPrice = .50;
var addvarCheese = " w/ Cheese";
var cheesePrice = .25;
var addXtraSauce = " w/ Xtra Sauce";
var saucePrice = .20;

var chxBool = true;
var chzBool = true;
var sauceBool = true;

var selectedItemRevert;
var selectedPriceRevert;

var itemCount = 0;

function initializeMenu() {
    fetch("./index.JSON")
    .then(function(resp) {
        return resp.json();
    })
    .then(function(data){
        console.log(data);
    })
}

function resetCart() {
    itemCount = 0;
    updateItemCount();
    order = [];
    prices = [];
    console.log(itemCount);
    console.log(order);
    console.log(prices);
}

function updateItemCount() {
    document.getElementById("hamburgerModalitemCount").innerText = itemCount;
    document.getElementById("itemCount").innerText = itemCount;
}

function openHamburgerModal() {
    document.getElementById("hamburgerModal").style.opacity = "1";
    document.getElementById("hamburgerModal").style.right = "0%";
    document.getElementById("Bg").style.display = "block";
}

function closeHamburgerModal() {
    document.getElementById("hamburgerModal").style.opacity = "0";
    document.getElementById("hamburgerModal").style.right = "-35%";
    document.getElementById("Bg").style.display = "none";
}


function money_round(num) {
    return Math.ceil(num * 100) / 100;
}

function incrementOC() {
    itemCount ++;
    updateItemCount();
}

function openModal() {
    document.getElementById("modalHolderHolder").style.display = "block";
    document.getElementById("Bg").style.display = "block";
    document.getElementById("selectedItem").innerText = "Selected Item: " + selectedItem;
    document.getElementById("selectedPrice").innerText = "$ " + selectedPrice;
} 

function updateModal() {
    document.getElementById("selectedItem").innerText = "Selected Item: " + selectedItem;
    selectedPrice = money_round(selectedPrice);
    document.getElementById("selectedPrice").innerText = "$ " + selectedPrice;
}

function confirmSelection() {
    var specInstr = document.getElementById("q4").value;
    if (document.getElementById("q4").value == '') {
    
    }
    else {
        selectedItem = selectedItem + " (Special Instruction(s): " + specInstr + ")"
    }
    order.push(selectedItem);
    prices.push(selectedPrice);
    console.log(order);
    console.log(prices);
    selectedItem = "";
    selectedPrice = 0;
    incrementOC();
    closeModal();
}

function chicken() {
    document.getElementById("q1").style.backgroundColor = "lightblue";
    if (chxBool == true) {
        selectedItem = selectedItem + addChicken;
        console.log(selectedItem);
        selectedPrice = selectedPrice + chickenPrice;
        console.log(selectedPrice);
        chxBool = false;
    } 
    else {
        selectedItem = selectedItemRevert;
        selectedPrice = selectedPriceRevert;
        document.getElementById("q1").style.backgroundColor = "white";
        chxBool = true;
        if (chzBool == false) {
            selectedItem = selectedItem + addvarCheese;
            selectedPrice = selectedPrice + cheesePrice;
        }
        if (sauceBool == false) {
            selectedItem = selectedItem + addXtraSauce;
            selectedPrice = selectedPrice + saucePrice;
        }
    }
    updateModal();
    console.log(chxBool);
}


function addCheese() {
    document.getElementById("q2").style.backgroundColor = "lightblue";
    if (chzBool == true) {
        selectedItem = selectedItem + addvarCheese;
        console.log(selectedItem);
        selectedPrice = selectedPrice + cheesePrice;
        console.log(selectedPrice);
        chzBool = false;
    } 
    else {
        selectedItem = selectedItemRevert;
        selectedPrice = selectedPriceRevert;
        document.getElementById("q2").style.backgroundColor = "white";
        chzBool = true;
        if (chxBool == false) {
            selectedItem = selectedItem + addChicken;
            selectedPrice = selectedPrice + chickenPrice;

        } 

        if (sauceBool == false) {
            selectedItem = selectedItem + addXtraSauce;
            selectedPrice = selectedPrice + saucePrice;
        }
    }
    updateModal();
    console.log(chzBool);
}

function xtraSauce() {
    document.getElementById("q3").style.backgroundColor = "lightblue";
    if (sauceBool == true) {
        selectedItem = selectedItem + addXtraSauce;
        console.log(selectedItem);
        selectedPrice = selectedPrice + saucePrice;
        console.log(selectedPrice);
        sauceBool = false;
    } 
    
    else {
        selectedItem = selectedItemRevert;
        selectedPrice = selectedPriceRevert;
        document.getElementById("q3").style.backgroundColor = "white";
        sauceBool = true;

        if (chxBool == false) {
            selectedItem = selectedItem + addChicken;
            selectedPrice = selectedPrice + chickenPrice;
        }

        if (chzBool == false) {
            selectedItem = selectedItem + addvarCheese;
            selectedPrice = selectedPrice + cheesePrice;
        }
    }

    updateModal();
    console.log(sauceBool);
}

/*Separate functions needed to keep track of the product selected*/ 
function csplus1ATC() {
    selectedItem = "Burrito";
    selectedPrice = 11.49;
    selectedItemRevert = "Burrito";
    selectedPriceRevert = 11.49;
    openModal();
}

function csplus2ATC() {
    selectedItem = "Steak";
    selectedPrice = 16.99;
    selectedItemRevert = "Steak";
    selectedPriceRevert = 16.99;
    openModal();
}

function csplus3ATC() {
    selectedItem = "Burger Platter";
    selectedPrice = 13.69;
    selectedItemRevert = "Burger Platter";
    selectedPriceRevert = 13.69;
    openModal();
}

function closeModal() {
    chxBool = true;
    chzBool = true;
    sauceBool = true;
    document.getElementById("q4").value = '';
    document.getElementById("modalHolderHolder").style.display = "none";
    document.getElementById("Bg").style.display = "none";
    document.getElementById("q1").style.backgroundColor = "white";
    document.getElementById("q2").style.backgroundColor = "white";
    document.getElementById("q3").style.backgroundColor = "white";
    selectedPrice = 0;
    selectedItem = "";
    console.log(selectedItem);
    console.log(selectedPrice);
}

function revealItemOverlay1() {
    document.getElementById("nameOverlay1").style.opacity = '.8';
}

function revealItemOverlay2() {
    document.getElementById("nameOverlay2").style.opacity = '.8';
}

function revealItemOverlay3() {
    document.getElementById("nameOverlay3").style.opacity = '.8';
}

 function revealItemOverlay4() {
    document.getElementById("nameOverlay4").style.opacity = '.8';
}

function hideItemOverlay1() {
    document.getElementById("nameOverlay1").style.opacity = '0';
}

function hideItemOverlay2() {
    document.getElementById("nameOverlay2").style.opacity = '0';
}

function hideItemOverlay3() {
    document.getElementById("nameOverlay3").style.opacity = '0';
}

 function hideItemOverlay4() {
    document.getElementById("nameOverlay4").style.opacity = '0';
}
