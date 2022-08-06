//From 2019. I'm much better at coding now.

var x;
function loadingPage(){
    revItems();
}

function between(x, min, max) {
  return x >= min && x <= max;
}

function ajaxPip(){
     $.ajax({
            url: '--your php file--',
            type: 'post',
            data: $('#pipCheckoutForm').serialize(),
            success: function () {
            alert("Order Sent! Check Your Email For Your Order Confirmation! We May Have Ended up in Junk Mail!");
            location.replace('/OrderConfirmation.php');  
            },
            error: function () {
            alert("Order Sent! Check Your Email For Your Order Confirmation! We May Have Ended up in Junk Mail!");
            location.replace('/OrderConfirmation.php');  
            }
            
          });
    window.location.replace("/OrderConfirmation.php/");
}

function getDocHeight() {
    var D = document;
    return Math.max(
        D.body.scrollHeight, D.documentElement.scrollHeight,
        D.body.offsetHeight, D.documentElement.offsetHeight,
        D.body.clientHeight, D.documentElement.clientHeight
    );
}

$(window).scroll(function() {
       if($(window).scrollTop() + $(window).height() == getDocHeight()) {
           document.getElementById("footerJams").style.display = 'none';
       }
   });

var person;
let jamsorderrelease;

function runthru(){
        for (i = 0; i < jamsorder.length; i++){
            jamsorderrelease = jamsorderrelease + ", " + jamsorder[i];
    }
    return jamsorderrelease;

}

var orderString = '';
var NTtotal = 0;


function getOrderString(){
    var xyz = jamsorder.toString();
    var zyx = prices.toString();
    orderString = xyz + "(Prices in Order: $" + zyx + ")";
}

function sumMinusTax() {
    NTtotal = establishSum() - establishTax();
    NTtotal = Math.floor(NTtotal * 100) / 100;
    NTtotal.toFixed(2);
    return NTtotal;
}


function pip() {
    document.getElementById('pipCheckout').style.left = '0%';
    document.getElementById('pipCheckout').style.opacity = '.85'; 
        getOrderString();
        
        document.getElementById("senderNTTotal").value = sumMinusTax();
        document.getElementById("senderTotal").value = establishSum();
        document.getElementById("senderOrder").value = orderString;
        
        document.getElementById("orderString").innerText = orderString;
}

function overarchingfunction() {
    var person = document.getElementById("itemList").value;
    var userphone = document.getElementById('userphonepip').value;
    var useremail = document.getElementById('useremailpip').value;
    console.log(person);
    console.log(userphone);
    console.log(useremail);
    jsPhpConnectorName(person);
    jsPhpConnectorPhone(userphone);
    jsPhpConnectorEmail(useremail);

}

function jsPhpConnectorName(ele) { 
    var jsVarName = ele;
    $.post('OrderConfirmation.php', {variable1: jsVarName});
  }
  function jsPhpConnectorEmail(ele) { 
    var jsVarEmail = ele;
    $.post('OrderConfirmation.php', {variable2: jsVarEmail});
  }
  function jsPhpConnectorPhone(ele) { 
    var jsVarPhone = ele;
    $.post('OrderConfirmation.php', {variable3: jsVarPhone});
  }

        const Pancakes = 
        [
            {
        subcategory:"[Pancakes] ",
        item:"1 Pancake",
        price:3.00,
        addons1:"blueberries",
        addons2:"chocolate chips",
        addons3:"M&Ms",
        addons4:"Strawberry Topping",
        addonprice1:1.00,
        addonprice2:1.00,
        addonprice3:1.00,
        addonprice4:1.00
            },
        
            
        {
        subcategory:"[Pancakes] ",
        item:"2 Pancakes",
        price:4.00,
        
        addons1:"blueberries",
        addons2:"chocolate chips",
        addons3:"M&Ms",
        addons4:"Strawberry Topping",
        addonprice1:1.00,
        addonprice2:1.00,
        addonprice3:1.00,
        addonprice4:1.00
            } ,  
        {
        subcategory:"[Pancakes] ",
        item:"3 Pancakes",
        price:5.00,
                
        addons1:"blueberries",
        addons2:"chocolate chips",
        addons3:"M&Ms",
        addons4:"Strawberry Topping",
        addonprice1:1.00,
        addonprice2:1.00,
        addonprice3:1.00,
        addonprice4:1.00
            }, 
            
        {
        subcategory:"[Pancakes] ",    
        item:"4 Pancakes",
        price:6.00,
                        
        addons1:"blueberries",
        addons2:"chocolate chips",
        addons3:"M&Ms",
        addons4:"Strawberry Topping",
        addonprice1:1.00,
        addonprice2:1.00,
        addonprice3:1.00,
        addonprice4:1.00
                }

            
        ];
            
        

        
        
            
        const Eggs= 
        [
            {
                subcategory:"[Eggs] ",
                item:"1 Egg Any Style w/Toast & Homefries",
                price:4.50
            },
            {
                subcategory:"[Eggs] ",
                item:"1 Egg Any Style w/Toast, Homefries w/ Sausage Patty or Ham",
                price:6.50
            },
            {
                subcategory:"[Eggs] ",
                item:"2 Eggs Any Style w/Toast & Homefries",
                price:5.00
            },
            {
                subcategory:"[Eggs] ",
                item:"2 Eggs Any Style w/Toast, Homefries w/ Sausage Patty or Ham",
                price:7.00
            }
        
        ];
        


        const FrenchToast =
        [
            {
                subcategory:"[French Toast] ",
                item:"1 Slice French Toast",
                price:3.00,
                addons1:"Strawberry Topping",
                addonprice1:1.00
                    },
            {
                subcategory:"[French Toast] ",
                item:"2 Slices French Toast",
                price:4.00,
                addons1:"Strawberry Topping",
                addonprice1:1.00
                },
            {
                subcategory:"[French Toast] ",
                item:"3 Slices French Toast",
                price:5.00,
                addons1:"Strawberry Topping",
                addonprice1:1.00
            },
            {
                subcategory:"[French Toast] ",
                item:"4 Slices French Toast",
                price:6.00,
                addons1:"Strawberry Topping",
                addonprice1:1.00
            }

        ];


        const CornedBeefHash=[
            {
                subcategory:"[Corned Beef Hash] ",
                item:"Corned Beef Hash w/ 2 Eggs, Toast, & Homefries",
                price:7.50
            }

        ];

//(Served on Toast, Hard Roll, Bagel or English Muffin)
        const Sandwiches = 
        [

            {
                subcategory:"[Sandwiches] ",
                item:"Fried Egg Sandwich (2 Eggs)",
                price:4.00,
                addons1:"w/ Ham, Bacon or Sausage",
                addonprice1:1.50
            },
            {
                subcategory:"[Sandwiches] ",
                item:"Western Egg Sandwich",
                price:4.50,
                addons1:"w/ Cheese",
                addonprice1:0.50
            }
        ];

//(1 Egg Default)
        var Omelettes = [
            {
                subcategory:"[Omelettes] ",
                item:"Three Cheese Omelet",
                price:4.50,
                addons1:"Ham",
                addonprice1:0.50,
                addons2:"Bacon",
                addonprice2:0.50,
                addons3:"Sausage",
                addonprice3:0.50,
                addons4:"Onion",
                addonprice4:0.50,
                addons5:"Pepper",
                addonprice5:0.50,
                addons6:"Cheese (specify in special instructions)",
                addonprice6:0.50,
                addons7:"Mushroom",
                addonprice7:0.50,
                addons8:"Broccoli",
                addonprice8:0.50,
                addons9:"Spinach",
                addonprice9:0.50,
                addons10:"Tomato",
                addonprice10:0.50,
                addons11:"Salsa",
                addonprice11:0.50,
                addons12:"Jalapeno",
                addonprice12:0.50,
                addons13:"2 Eggs Total",
                addonprice13:1.00,
                addons14:"3 Eggs Total",
                addonprice14:2.00,
                addons15:"in Mini Wrap",
                addonprice15:0.50,
                addons16:"in Mini Quesadilla",
                addonprice16:1.00,
                addons17:"Upgrade from Homefries to Hash Browns",
                addonprice17:0.50
            },
            {
                subcategory:"[Omelettes] ",
                item:"Ham & Cheese Omelet",
                price:4.50,
                addons1:"Ham",
                addonprice1:0.50,
                addons2:"Bacon",
                addonprice2:0.50,
                addons3:"Sausage",
                addonprice3:0.50,
                addons4:"Onion",
                addonprice4:0.50,
                addons5:"Pepper",
                addonprice5:0.50,
                addons6:"Cheese (specify in special instructions)",
                addonprice6:0.50,
                addons7:"Mushroom",
                addonprice7:0.50,
                addons8:"Broccoli",
                addonprice8:0.50,
                addons9:"Spinach",
                addonprice9:0.50,
                addons10:"Tomato",
                addonprice10:0.50,
                addons11:"Salsa",
                addonprice11:0.50,
                addons12:"Jalapeno",
                addonprice12:0.50,

                addons13:"2 Eggs Total",
                addonprice13:1.00,
                addons14:"3 Eggs Total",
                addonprice14:2.00,
                addons15:"in Mini Wrap",
                addonprice15:0.50,
                addons16:"in Mini Quesadilla",
                addonprice16:1.00,
                addons17:"Upgrade from Homefries to Hash Browns",
                addonprice17:0.50
            },
            {
                subcategory:"[Omelettes] ",
                item:"Bacon & Cheese Omelet",
                price:4.50,
                addons1:"Ham",
                addonprice1:0.50,
                addons2:"Bacon",
                addonprice2:0.50,
                addons3:"Sausage",
                addonprice3:0.50,
                addons4:"Onion",
                addonprice4:0.50,
                addons5:"Pepper",
                addonprice5:0.50,
                addons6:"Cheese (specify in special instructions)",
                addonprice6:0.50,
                addons7:"Mushroom",
                addonprice7:0.50,
                addons8:"Broccoli",
                addonprice8:0.50,
                addons9:"Spinach",
                addonprice9:0.50,
                addons10:"Tomato",
                addonprice10:0.50,
                addons11:"Salsa",
                addonprice11:0.50,
                addons12:"Jalapeno",
                addonprice12:0.50,

                addons13:"2 Eggs Total",
                addonprice13:1.00,
                addons14:"3 Eggs Total",
                addonprice14:2.00,
                addons15:"in Mini Wrap",
                addonprice15:0.50,
                addons16:"in Mini Quesadilla",
                addonprice16:1.00,
                addons17:"Upgrade from Homefries to Hash Browns",
                addonprice17:0.50
            },
            {
                subcategory:"[Omelettes] ",
                item:"Sausage & Cheese Omelet",
                price:4.50,
                addons1:"Ham",
                addonprice1:0.50,
                addons2:"Bacon",
                addonprice2:0.50,
                addons3:"Sausage",
                addonprice3:0.50,
                addons4:"Onion",
                addonprice4:0.50,
                addons5:"Pepper",
                addonprice5:0.50,
                addons6:"Cheese (specify in special instructions)",
                addonprice6:0.50,
                addons7:"Mushroom",
                addonprice7:0.50,
                addons8:"Broccoli",
                addonprice8:0.50,
                addons9:"Spinach",
                addonprice9:0.50,
                addons10:"Tomato",
                addonprice10:0.50,
                addons11:"Salsa",
                addonprice11:0.50,
                addons12:"Jalapeno",
                addonprice12:0.50,

                addons13:"2 Eggs Total",
                addonprice13:1.00,
                addons14:"3 Eggs Total",
                addonprice14:2.00,
                addons15:"in Mini Wrap",
                addonprice15:0.50,
                addons16:"in Mini Quesadilla",
                addonprice16:1.00,
                addons17:"Upgrade from Homefries to Hash Browns",
                addonprice17:0.50
            },
            {
                subcategory:"[Omelettes] ",
                item:"Spinach & Cheese Omelet",
                price:4.50,
                addons1:"Ham",
                addonprice1:0.50,
                addons2:"Bacon",
                addonprice2:0.50,
                addons3:"Sausage",
                addonprice3:0.50,
                addons4:"Onion",
                addonprice4:0.50,
                addons5:"Pepper",
                addonprice5:0.50,
                addons6:"Cheese (specify in special instructions)",
                addonprice6:0.50,
                addons7:"Mushroom",
                addonprice7:0.50,
                addons8:"Broccoli",
                addonprice8:0.50,
                addons9:"Spinach",
                addonprice9:0.50,
                addons10:"Tomato",
                addonprice10:0.50,
                addons11:"Salsa",
                addonprice11:0.50,
                addons12:"Jalapeno",
                addonprice12:0.50,

                addons13:"2 Eggs Total",
                addonprice13:1.00,
                addons14:"3 Eggs Total",
                addonprice14:2.00,
                addons15:"in Mini Wrap",
                addonprice15:0.50,
                addons16:"in Mini Quesadilla",
                addonprice16:1.00,
                addons17:"Upgrade from Homefries to Hash Browns",
                addonprice17:0.50
            },
            {
                subcategory:"[Omelettes] ",
                item:"Mushroom & Cheese Omelet",
                price:4.50,
                addons1:"Ham",
                addonprice1:0.50,
                addons2:"Bacon",
                addonprice2:0.50,
                addons3:"Sausage",
                addonprice3:0.50,
                addons4:"Onion",
                addonprice4:0.50,
                addons5:"Pepper",
                addonprice5:0.50,
                addons6:"Cheese (specify in special instructions)",
                addonprice6:0.50,
                addons7:"Mushroom",
                addonprice7:0.50,
                addons8:"Broccoli",
                addonprice8:0.50,
                addons9:"Spinach",
                addonprice9:0.50,
                addons10:"Tomato",
                addonprice10:0.50,
                addons11:"Salsa",
                addonprice11:0.50,
                addons12:"Jalapeno",
                addonprice12:0.50,

                addons13:"2 Eggs Total",
                addonprice13:1.00,
                addons14:"3 Eggs Total",
                addonprice14:2.00,
                addons15:"in Mini Wrap",
                addonprice15:0.50,
                addons16:"in Mini Quesadilla",
                addonprice16:1.00,
                addons17:"Upgrade from Homefries to Hash Browns",
                addonprice17:0.50
            },
            {
                subcategory:"[Omelettes] ",
                item:"Broccoli & Cheddar Omelet",
                price:4.50,
                addons1:"Ham",
                addonprice1:0.50,
                addons2:"Bacon",
                addonprice2:0.50,
                addons3:"Sausage",
                addonprice3:0.50,
                addons4:"Onion",
                addonprice4:0.50,
                addons5:"Pepper",
                addonprice5:0.50,
                addons6:"Cheese (specify in special instructions)",
                addonprice6:0.50,
                addons7:"Mushroom",
                addonprice7:0.50,
                addons8:"Broccoli",
                addonprice8:0.50,
                addons9:"Spinach",
                addonprice9:0.50,
                addons10:"Tomato",
                addonprice10:0.50,
                addons11:"Salsa",
                addonprice11:0.50,
                addons12:"Jalapeno",
                addonprice12:0.50,

                addons13:"2 Eggs Total",
                addonprice13:1.00,
                addons14:"3 Eggs Total",
                addonprice14:2.00,
                addons15:"in Mini Wrap",
                addonprice15:0.50,
                addons16:"in Mini Quesadilla",
                addonprice16:1.00,
                addons17:"Upgrade from Homefries to Hash Browns",
                addonprice17:0.50
            },
            {
                subcategory:"[Omelettes] ",
                item:"Western Omelet (Onion, Pepper & Ham)",
                price:4.50,
                addons1:"Ham",
                addonprice1:0.50,
                addons2:"Bacon",
                addonprice2:0.50,
                addons3:"Sausage",
                addonprice3:0.50,
                addons4:"Onion",
                addonprice4:0.50,
                addons5:"Pepper",
                addonprice5:0.50,
                addons6:"Cheese (specify in special instructions)",
                addonprice6:0.50,
                addons7:"Mushroom",
                addonprice7:0.50,
                addons8:"Broccoli",
                addonprice8:0.50,
                addons9:"Spinach",
                addonprice9:0.50,
                addons10:"Tomato",
                addonprice10:0.50,
                addons11:"Salsa",
                addonprice11:0.50,
                addons12:"Jalapeno",
                addonprice12:0.50,

                addons13:"2 Eggs Total",
                addonprice13:1.00,
                addons14:"3 Eggs Total",
                addonprice14:2.00,
                addons15:"in Mini Wrap",
                addonprice15:0.50,
                addons16:"in Mini Quesadilla",
                addonprice16:1.00,
                addons17:"Upgrade from Homefries to Hash Browns",
                addonprice17:0.50
            },
            {
                subcategory:"[Omelettes] ",
                item:"Vegetable Omelet (Onion, Pepper, Mushroom & Tomato)",
                price:4.50,
                addons1:"Ham",
                addonprice1:0.50,
                addons2:"Bacon",
                addonprice2:0.50,
                addons3:"Sausage",
                addonprice3:0.50,
                addons4:"Onion",
                addonprice4:0.50,
                addons5:"Pepper",
                addonprice5:0.50,
                addons6:"Cheese (specify in special instructions)",
                addonprice6:0.50,
                addons7:"Mushroom",
                addonprice7:0.50,
                addons8:"Broccoli",
                addonprice8:0.50,
                addons9:"Spinach",
                addonprice9:0.50,
                addons10:"Tomato",
                addonprice10:0.50,
                addons11:"Salsa",
                addonprice11:0.50,
                addons12:"Jalapeno",
                addonprice12:0.50,

                addons13:"2 Eggs Total",
                addonprice13:1.00,
                addons14:"3 Eggs Total",
                addonprice14:2.00,
                addons15:"in Mini Wrap",
                addonprice15:0.50,
                addons16:"in Mini Quesadilla",
                addonprice16:1.00,
                addons17:"Upgrade from Homefries to Hash Browns",
                addonprice17:0.50
            },
            {
                subcategory:"[Omelettes] ",
                item:"Salsa & Cheese Omelet",
                price:4.50,
                addons1:"Ham",
                addonprice1:0.50,
                addons2:"Bacon",
                addonprice2:0.50,
                addons3:"Sausage",
                addonprice3:0.50,
                addons4:"Onion",
                addonprice4:0.50,
                addons5:"Pepper",
                addonprice5:0.50,
                addons6:"Cheese (specify in special instructions)",
                addonprice6:0.50,
                addons7:"Mushroom",
                addonprice7:0.50,
                addons8:"Broccoli",
                addonprice8:0.50,
                addons9:"Spinach",
                addonprice9:0.50,
                addons10:"Tomato",
                addonprice10:0.50,
                addons11:"Salsa",
                addonprice11:0.50,
                addons12:"Jalapeno",
                addonprice12:0.50,

                addons13:"2 Eggs Total",
                addonprice13:1.00,
                addons14:"3 Eggs Total",
                addonprice14:2.00,
                addons15:"in Mini Wrap",
                addonprice15:0.50,
                addons16:"in Mini Quesadilla",
                addonprice16:1.00,
                addons17:"Upgrade from Homefries to Hash Browns",
                addonprice17:0.50
            },
            {
                subcategory:"[Omelettes] ",
                item:"Ham, Sausage & Cheese Omelet",
                price:4.50,
                addons1:"Ham",
                addonprice1:0.50,
                addons2:"Bacon",
                addonprice2:0.50,
                addons3:"Sausage",
                addonprice3:0.50,
                addons4:"Onion",
                addonprice4:0.50,
                addons5:"Pepper",
                addonprice5:0.50,
                addons6:"Cheese (specify in special instructions)",
                addonprice6:0.50,
                addons7:"Mushroom",
                addonprice7:0.50,
                addons8:"Broccoli",
                addonprice8:0.50,
                addons9:"Spinach",
                addonprice9:0.50,
                addons10:"Tomato",
                addonprice10:0.50,
                addons11:"Salsa",
                addonprice11:0.50,
                addons12:"Jalapeno",
                addonprice12:0.50,

                addons13:"2 Eggs Total",
                addonprice13:1.00,
                addons14:"3 Eggs Total",
                addonprice14:2.00,
                addons15:"in Mini Wrap",
                addonprice15:0.50,
                addons16:"in Mini Quesadilla",
                addonprice16:1.00,
                addons17:"Upgrade from Homefries to Hash Browns",
                addonprice17:0.50
            },
            {
                subcategory:"[Omelettes] ",
                item:"Bacon, Tomato & Cheese Omelet",
                price:4.50,
                addons1:"Ham",
                addonprice1:0.50,
                addons2:"Bacon",
                addonprice2:0.50,
                addons3:"Sausage",
                addonprice3:0.50,
                addons4:"Onion",
                addonprice4:0.50,
                addons5:"Pepper",
                addonprice5:0.50,
                addons6:"Cheese (specify in special instructions)",
                addonprice6:0.50,
                addons7:"Mushroom",
                addonprice7:0.50,
                addons8:"Broccoli",
                addonprice8:0.50,
                addons9:"Spinach",
                addonprice9:0.50,
                addons10:"Tomato",
                addonprice10:0.50,
                addons11:"Salsa",
                addonprice11:0.50,
                addons12:"Jalapeno",
                addonprice12:0.50,

                addons13:"2 Eggs Total",
                addonprice13:1.00,
                addons14:"3 Eggs Total",
                addonprice14:2.00,
                addons15:"in Mini Wrap",
                addonprice15:0.50,
                addons16:"in Mini Quesadilla",
                addonprice16:1.00,
                addons17:"Upgrade from Homefries to Hash Browns",
                addonprice17:0.50
            },
            {
                subcategory:"[Omelettes] ",
                item:"Taco Omelet (Taco Meat, Onion, Pepper, Tomato & Cheddar)",
                price:4.50,
                addons1:"Ham",
                addonprice1:0.50,
                addons2:"Bacon",
                addonprice2:0.50,
                addons3:"Sausage",
                addonprice3:0.50,
                addons4:"Onion",
                addonprice4:0.50,
                addons5:"Pepper",
                addonprice5:0.50,
                addons6:"Cheese (specify in special instructions)",
                addonprice6:0.50,
                addons7:"Mushroom",
                addonprice7:0.50,
                addons8:"Broccoli",
                addonprice8:0.50,
                addons9:"Spinach",
                addonprice9:0.50,
                addons10:"Tomato",
                addonprice10:0.50,
                addons11:"Salsa",
                addonprice11:0.50,
                addons12:"Jalapeno",
                addonprice12:0.50,

                addons13:"2 Eggs Total",
                addonprice13:1.00,
                addons14:"3 Eggs Total",
                addonprice14:2.00,
                addons15:"in Mini Wrap",
                addonprice15:0.50,
                addons16:"in Mini Quesadilla",
                addonprice16:1.00,
                addons17:"Upgrade from Homefries to Hash Browns",
                addonprice17:0.50
            },
            {
                subcategory:"[Omelettes] ",
                item:"Chili & Cheddar Omelet",
                price:4.50,
                addons1:"Ham",
                addonprice1:0.50,
                addons2:"Bacon",
                addonprice2:0.50,
                addons3:"Sausage",
                addonprice3:0.50,
                addons4:"Onion",
                addonprice4:0.50,
                addons5:"Pepper",
                addonprice5:0.50,
                addons6:"Cheese (specify in special instructions)",
                addonprice6:0.50,
                addons7:"Mushroom",
                addonprice7:0.50,
                addons8:"Broccoli",
                addonprice8:0.50,
                addons9:"Spinach",
                addonprice9:0.50,
                addons10:"Tomato",
                addonprice10:0.50,
                addons11:"Salsa",
                addonprice11:0.50,
                addons12:"Jalapeno",
                addonprice12:0.50,

                addons13:"2 Eggs Total",
                addonprice13:1.00,
                addons14:"3 Eggs Total",
                addonprice14:2.00,
                addons15:"in Mini Wrap",
                addonprice15:0.50,
                addons16:"in Mini Quesadilla",
                addonprice16:1.00,
                addons17:"Upgrade from Homefries to Hash Browns",
                addonprice17:0.50
            },
            {
                subcategory:"[Omelettes] ",
                item:"Philly Omelet (Sliced Beef, Onions, Tomato & Cheddar)",
                price:4.50,
                addons1:"Ham",
                addonprice1:0.50,
                addons2:"Bacon",
                addonprice2:0.50,
                addons3:"Sausage",
                addonprice3:0.50,
                addons4:"Onion",
                addonprice4:0.50,
                addons5:"Pepper",
                addonprice5:0.50,
                addons6:"Cheese (specify in special instructions)",
                addonprice6:0.50,
                addons7:"Mushroom",
                addonprice7:0.50,
                addons8:"Broccoli",
                addonprice8:0.50,
                addons9:"Spinach",
                addonprice9:0.50,
                addons10:"Tomato",
                addonprice10:0.50,
                addons11:"Salsa",
                addonprice11:0.50,
                addons12:"Jalapeno",
                addonprice12:0.50,

                addons13:"2 Eggs Total",
                addonprice13:1.00,
                addons14:"3 Eggs Total",
                addonprice14:2.00,
                addons15:"in Mini Wrap",
                addonprice15:0.50,
                addons16:"in Mini Quesadilla",
                addonprice16:1.00,
                addons17:"Upgrade from Homefries to Hash Browns",
                addonprice17:0.50
            },
            {
                subcategory:"[Omelettes] ",
                item:"Feta Omelet",
                price:4.50,
                addons1:"Ham",
                addonprice1:0.50,
                addons2:"Bacon",
                addonprice2:0.50,
                addons3:"Sausage",
                addonprice3:0.50,
                addons4:"Onion",
                addonprice4:0.50,
                addons5:"Pepper",
                addonprice5:0.50,
                addons6:"Cheese (specify in special instructions)",
                addonprice6:0.50,
                addons7:"Mushroom",
                addonprice7:0.50,
                addons8:"Broccoli",
                addonprice8:0.50,
                addons9:"Spinach",
                addonprice9:0.50,
                addons10:"Tomato",
                addonprice10:0.50,
                addons11:"Salsa",
                addonprice11:0.50,
                addons12:"Jalapeno",
                addonprice12:0.50,

                addons13:"2 Eggs Total",
                addonprice13:1.00,
                addons14:"3 Eggs Total",
                addonprice14:2.00,
                addons15:"in Mini Wrap",
                addonprice15:0.50,
                addons16:"in Mini Quesadilla",
                addonprice16:1.00,
                addons17:"Upgrade from Homefries to Hash Browns",
                addonprice17:0.50
            },
            {
            subcategory:"[Omelettes] ",
            item:"Spinach & Feta Omelet",
            price:4.50,
            addons1:"Ham",
            addonprice1:0.50,
            addons2:"Bacon",
            addonprice2:0.50,
            addons3:"Sausage",
            addonprice3:0.50,
            addons4:"Onion",
            addonprice4:0.50,
            addons5:"Pepper",
            addonprice5:0.50,
            addons6:"Cheese (specify in special instructions)",
            addonprice6:0.50,
            addons7:"Mushroom",
            addonprice7:0.50,
            addons8:"Broccoli",
            addonprice8:0.50,
            addons9:"Spinach",
            addonprice9:0.50,
            addons10:"Tomato",
            addonprice10:0.50,
            addons11:"Salsa",
            addonprice11:0.50,
            addons12:"Jalapeno",
            addonprice13:0.50,

            addons13:"2 Eggs Total",
            addonprice13:1.00,
            addons14:"3 Eggs Total",
            addonprice14:2.00,
            addons15:"in Mini Wrap",
            addonprice15:0.50,
            addons16:"in Mini Quesadilla",
            addonprice16:1.00,
            addons17:"Upgrade from Homefries to Hash Browns",
            addonprice17:0.50
        },
        {
            subcategory:"[Omelettes] ",
            item:"Greek Omelet (Tomato, Onion & Feta)",
            price:4.50,
            addons1:"Ham",
            addonprice1:0.50,
            addons2:"Bacon",
            addonprice2:0.50,
            addons3:"Sausage",
            addonprice3:0.50,
            addons4:"Onion",
            addonprice4:0.50,
            addons5:"Pepper",
            addonprice5:0.50,
            addons6:"Cheese (specify in special instructions)",
            addonprice6:0.50,
            addons7:"Mushroom",
            addonprice7:0.50,
            addons8:"Broccoli",
            addonprice8:0.50,
            addons9:"Spinach",
            addonprice9:0.50,
            addons10:"Tomato",
            addonprice10:0.50,
            addons11:"Salsa",
            addonprice11:0.50,

            addons12:"Jalapeno",
            addonprice13:0.50,

            addons13:"2 Eggs Total",
            addonprice13:1.00,
            addons14:"3 Eggs Total",
            addonprice14:2.00,
            addons15:"in Mini Wrap",
            addonprice15:0.50,
            addons16:"in Mini Quesadilla",
            addonprice16:1.00,
            addons17:"Upgrade from Homefries to Hash Browns",
            addonprice17:0.50
        },
        {
            subcategory:"[Omelettes] ",
            item:"Mediterranian Omelet (Feta, Tomato & Spinach)",
            price:4.50,
            addons1:"Ham",
            addonprice1:0.50,
            addons2:"Bacon",
            addonprice2:0.50,
            addons3:"Sausage",
            addonprice3:0.50,
            addons4:"Onion",
            addonprice4:0.50,
            addons5:"Pepper",
            addonprice5:0.50,
            addons6:"Cheese (specify in special instructions)",
            addonprice6:0.50,
            addons7:"Mushroom",
            addonprice7:0.50,
            addons8:"Broccoli",
            addonprice8:0.50,
            addons9:"Spinach",
            addonprice9:0.50,
            addons10:"Tomato",
            addonprice10:0.50,
            addons11:"Salsa",
            addonprice11:0.50,

            addons12:"Jalapeno",
            addonprice13:0.50,

            addons13:"2 Eggs Total",
            addonprice13:1.00,
            addons14:"3 Eggs Total",
            addonprice14:2.00,
            addons15:"in Mini Wrap",
            addonprice15:0.50,
            addons16:"in Mini Quesadilla",
            addonprice16:1.00,
            addons17:"Upgrade from Homefries to Hash Browns",
            addonprice17:0.50
        },
        {
            subcategory:"[Omelettes] ",
            item:"Italian Omelet (Italian Sausage, Pepper, Onion, Tomato, Mozzarella Cheese & Marinara Sauce)",
            price:4.50,
            addons1:"Ham",
            addonprice1:0.50,
            addons2:"Bacon",
            addonprice2:0.50,
            addons3:"Sausage",
            addonprice3:0.50,
            addons4:"Onion",
            addonprice4:0.50,
            addons5:"Pepper",
            addonprice5:0.50,
            addons6:"Cheese (specify in special instructions)",
            addonprice6:0.50,
            addons7:"Mushroom",
            addonprice7:0.50,
            addons8:"Broccoli",
            addonprice8:0.50,
            addons9:"Spinach",
            addonprice9:0.50,
            addons10:"Tomato",
            addonprice10:0.50,
            addons11:"Salsa",
            addonprice11:0.50,

            addons12:"Jalapeno",
            addonprice13:0.50,

            addons13:"2 Eggs Total",
            addonprice13:1.00,
            addons14:"3 Eggs Total",
            addonprice14:2.00,
            addons15:"in Mini Wrap",
            addonprice15:0.50,
            addons16:"in Mini Quesadilla",
            addonprice16:1.00,
            addons17:"Upgrade from Homefries to Hash Browns",
            addonprice17:0.50
        }


        ];
        
//^^^^^^^^^^^^^AVOCADOS???
//(3 Eggs)
        const SpecialtyOmelettes= 
            [
            {
                subcategory:"[Specialty Omelettes] ",
                item:"Corned Beef Hash & Cheese Omelet",
                price:10.00,
                addons1:"Ham",
                addonprice1:0.50,
                addons2:"Bacon",
                addonprice2:0.50,
                addons3:"Sausage",
                addonprice3:0.50,
                addons4:"Onion",
                addonprice4:0.50,
                addons5:"Pepper",
                addonprice5:0.50,
                addons6:"Cheese (specify in special instructions)",
                addonprice6:0.50,
                addons7:"Mushroom",
                addonprice7:0.50,
                addons8:"Broccoli",
                addonprice8:0.50,
                addons9:"Spinach",
                addonprice9:0.50,
                addons10:"Tomato",
                addonprice10:0.50,
                addons11:"Salsa",
                addonprice11:0.50,

                addons12:"Jalapeno",
                addonprice12:0.50,

                addons13:"Substitute Egg Whites",
                addonprice13:1.00
            },
            {
                subcategory:"[Specialty Omelettes] ",

                item:"Seafood AuGratin Omelet",
                price:11.00,
                addons1:"Ham",
                addonprice1:0.50,
                addons2:"Bacon",
                addonprice2:0.50,
                addons3:"Sausage",
                addonprice3:0.50,
                addons4:"Onion",
                addonprice4:0.50,
                addons5:"Pepper",
                addonprice5:0.50,
                addons6:"Cheese (specify in special instructions)",
                addonprice6:0.50,
                addons7:"Mushroom",
                addonprice7:0.50,
                addons8:"Broccoli",
                addonprice8:0.50,
                addons9:"Spinach",
                addonprice9:0.50,
                addons10:"Tomato",
                addonprice10:0.50,
                addons11:"Salsa",
                addonprice11:0.50,

                addons12:"Jalapeno",
                addonprice12:0.50,

                addons13:"Substitute Egg Whites",
                addonprice13:1.00
            },
            {
                subcategory:"[Specialty Omelettes] ",
                item:"Shrimp Creole Omelet",
                price:12.00,
                addons1:"Ham",
                addonprice1:0.50,
                addons2:"Bacon",
                addonprice2:0.50,
                addons3:"Sausage",
                addonprice3:0.50,
                addons4:"Onion",
                addonprice4:0.50,
                addons5:"Pepper",
                addonprice5:0.50,
                addons6:"Cheese (specify in special instructions)",
                addonprice6:0.50,
                addons7:"Mushroom",
                addonprice7:0.50,
                addons8:"Broccoli",
                addonprice8:0.50,
                addons9:"Spinach",
                addonprice9:0.50,
                addons10:"Tomato",
                addonprice10:0.50,
                addons11:"Salsa",
                addonprice11:0.50,

                addons12:"Jalapeno",
                addonprice12:0.50,

                addons13:"Substitute Egg Whites",
                addonprice13:1.00
            },
            {
                subcategory:"[Specialty Omelettes] ",
                item:"Mexican Chicken Omelet",
                price:10.00,
                addons1:"Ham",
                addonprice1:0.50,
                addons2:"Bacon",
                addonprice2:0.50,
                addons3:"Sausage",
                addonprice3:0.50,
                addons4:"Onion",
                addonprice4:0.50,
                addons5:"Pepper",
                addonprice5:0.50,
                addons6:"Cheese (specify in special instructions)",
                addonprice6:0.50,
                addons7:"Mushroom",
                addonprice7:0.50,
                addons8:"Broccoli",
                addonprice8:0.50,
                addons9:"Spinach",
                addonprice9:0.50,
                addons10:"Tomato",
                addonprice10:0.50,
                addons11:"Salsa",
                addonprice11:0.50,

                addons12:"Jalapeno",
                addonprice12:0.50,

                addons13:"Substitute Egg Whites",
                addonprice13:1.00
            },
            {
                subcategory:"[Specialty Omelettes] ",
                item:"Mexican Steak Omelet",
                price:11.00,
                addons1:"Ham",
                addonprice1:0.50,
                addons2:"Bacon",
                addonprice2:0.50,
                addons3:"Sausage",
                addonprice3:0.50,
                addons4:"Onion",
                addonprice4:0.50,
                addons5:"Pepper",
                addonprice5:0.50,
                addons6:"Cheese (specify in special instructions)",
                addonprice6:0.50,
                addons7:"Mushroom",
                addonprice7:0.50,
                addons8:"Broccoli",
                addonprice8:0.50,
                addons9:"Spinach",
                addonprice9:0.50,
                addons10:"Tomato",
                addonprice10:0.50,
                addons11:"Salsa",
                addonprice11:0.50,

                addons12:"Jalapeno",
                addonprice12:0.50,

                addons13:"Substitute Egg Whites",
                addonprice13:1.00

            },
            {
                subcategory:"[Specialty Omelettes] ",
                item:"Chicken Mediterranian Omelet",
                price:10.00,
                addons1:"Ham",
                addonprice1:0.50,
                addons2:"Bacon",
                addonprice2:0.50,
                addons3:"Sausage",
                addonprice3:0.50,
                addons4:"Onion",
                addonprice4:0.50,
                addons5:"Pepper",
                addonprice5:0.50,
                addons6:"Cheese (specify in special instructions)",
                addonprice6:0.50,
                addons7:"Mushroom",
                addonprice7:0.50,
                addons8:"Broccoli",
                addonprice8:0.50,
                addons9:"Spinach",
                addonprice9:0.50,
                addons10:"Tomato",
                addonprice10:0.50,
                addons11:"Salsa",
                addonprice11:0.50,

                addons12:"Jalapeno",
                addonprice12:0.50,

                addons13:"Substitute Egg Whites",
                addonprice13:1.00
            }

        ];

// (Served with Poached Eggs on Toasted English Muffins Topped w/ Cheddar Cheese Sauce & Homefries)
        const NotSoBenedicts = [
            {
                subcategory:"[Not So Benedicts] ",
                item:"The English",
                price:8.00,
                description:"Served on Ham, muffin and cheese sauce"
            },
            {
                subcategory:"[Not So Benedicts] ",
                item:"The Irish",
                price:9.00,
                description:"Served over Corned Beef Hash, muffin & sauce"
            },
            {
                subcategory:"[Not So Benedicts] ",
                item:"The Mickey",
                price:8.00,
                description:"Served on Sausage Patties muffin & cheese sauce"
            },
            {
                subcategory:"[Not So Benedicts] ",
                item:"The Popeye",
                price:8.00,
                description:"Served on Sauteed Spinach muffin & cheese sauce"
            },
            {
                subcategory:"[Not So Benedicts] ",
                item:"The Patrick",
                price:9.00,
                description:"Served on Crabcakes muffin & cheese sauce"
            }

        ];

        const CombinationBreakfasts= 
        [
            {
                subcategory:"[Combination Breakfasts] ",
                item:"The Triple Double (2 Pancakes, 2 French Toast Slices, 2 Eggs Any Style, 2 Hash Browns, 2 Sausage Patties, 2 Bacon Slices & a Drink)",
                price:14.00
            },
            {
                subcategory:"[Combination Breakfasts] ",
                item:"The Double Double (2 Pancakes, 2 French Toast Slices, 2 Eggs Any Style, 1 Sausage Patty, 2 Slices of Bacon & a Drink)",
                price:10.00
            },
            {
                subcategory:"[Combination Breakfasts] ",
                item:"The Double Combo (2 Pancakes OR 2 French Toast Slices w/ 2 Eggs Any Style, 1 Sausage Patty, 2 Slices of Bacon & a Drink - Specify Choice in Special Instructions)",
                price:7.50
            },
            {
                subcategory:"[Combination Breakfasts] ",
                item:"The Single Combo (1 Pancake, 1 French Toast Slice, 2 Eggs Any Style, 1 Sausage Patty, 2 Slices of Bacon & a Drink)",
                price:7.50
            },
            {
                subcategory:"[Combination Breakfasts] ",
                item:"The Caveman (Homefries Topped w/ Eggs Scrambled, Chopped Ham, Sausage, Bacon, Onions, Peppers, Tomatoes & Shredded Cheddar Cheese)",
                price:8.00
            }
        ];



        const Sides =
        [
            {
                subcategory:"[Sides] ",
                item:"1 Egg Any Style",
                price:1.00
            },
            {
                subcategory:"[Sides] ",
                item:"Homefries",
                price:2.50
            },
            {
                subcategory:"[Sides] ",
                item:"2 Hash Browns",
                price:3.00
            },
            {
                subcategory:"[Sides] ",
                item:"Corned Beef Hash",
                price:4.00
            },
            {
                subcategory:"[Sides] ",
                item:"Toast (White, Wheat, or Rye)",
                price:1.50
            },
            {
                subcategory:"[Sides] ",
                item:"English Muffin",
                price:1.50
            },
            {
                subcategory:"[Sides] ",
                item:"Hard Roll (Grilled)",
                price:2.00
            },
            {
                subcategory:"[Sides] ",
                item:"Bagel (Toasted) w/ Cream Cheese",
                price:3.00,
            },
            {
                subcategory:"[Sides] ",
                item:"Bacon, Ham, or Sausage Patty (Specify in Special Instructions)",
                price:3.50
            },
            {
                subcategory:"[Sides] ",
                item:"Italian Sausage Links",
                price:3.50
            },
            {
                subcategory:"[Sides] ",
                item:"Fruit Cocktail",
                price:3.50
            }
        ];

// (Served on Toast or English Muffin)"
        const BreakfastMunchies= [
            {
                subcategory:"[Breakfast Munchies] ",
                item:"1 Egg Sandwich",
                price:2.75,
                addons1:"w/ Bacon",
                addonprice1:1.00,
                addons2:"w/ Cheese",
                addonprice2:0.25
            },
            {
                subcategory:"[Breakfast Munchies] ",
                item:"1 Sausage Patty",
                price:2.75,
                addons1:"w/ Cheese",
                addonprice1:0.25,
                addons2:"w/ Egg",
                addonprice2:1.00
            },
            {
                subcategory:"[Breakfast Munchies] ",
                item:"1 Single Hashbrown",
                price:1.50,
                addons1:"No Addon",
                addonprice1:0,
                addons2:"No Addon",
                addonprice2:0
                
            }
        ];

//(Served with Drink)
        const KIDSMenu =
        [
            {
                subcategory:"[KIDS Menu] ",
                item:"KIDS 2 Eggs w/ Toast",
                price:4.50,
                addons1:"No Addon",
                addonprice1:0,
                addons2:"No Addon",
                addonprice2:0
            },
            {
                subcategory:"[KIDS Menu] ",
                item:"KIDS 2 Eggs w/ Toast w/ Bacon or Sausage",
                price:5.75,
                addons1:"No Addon",
                addonprice1:0,
                addons2:"No Addon",
                addonprice2:0
            },
            {
                subcategory:"[KIDS Menu] ",
                item:"KIDS 2 Pancakes",
                price:4.50,
                addons1:"Bacon on the side",
                addonprice1:1.25,
                addons2:"Sausage on the side",
                addonprice2:1.25
            },
            {
                subcategory:"[KIDS Menu] ",
                item:"KIDS 2 French Toast",
                price:4.50,
                addons1:"Bacon on the side",
                addonprice1:1.25,
                addons2:"Sausage on the side",
                addonprice2:1.25
            },
            {
                subcategory:"[KIDS Menu] ",
                item:"KIDS Cheese Omelette",
                price:5.00,
                addons1:"No Addon",
                addonprice1:0,
                addons2:"No Addon",
                addonprice2:0
            }
        ];

        const Drinks =
        [
            {
                subcategory:"[Drinks] ",
                item:"Coffee (w/ Refill)",
                price:2.00
            },
            {
                subcategory:"[Drinks] ",
                item:"Milk",
                price:2.00
            },
            {
                subcategory:"[Drinks] ",
                item:"Chocolate Milk",
                price:2.00
            },
            {
                subcategory:"[Drinks] ",
                item:"Juice 8oz. (Orange, Apple, Grapefruit, Cranberry, Tomato, or Pineapple) Specify in Special Instructions",
                price:2.00
            },
            {
                subcategory:"[Drinks] ",
                item:"Iced Tea",
                price:2.00
            },
            {
                subcategory:"[Drinks] ",
                item:"Soda",
                price:2.00
            },
            {
                subcategory:"[Drinks] ",
                item:"Water Bottle",
                price:2.00
            }
        ];

///////////////////////////////////////////////////

const Starters = [
            {
                subcategory:"[Starters] ",
                item:"Mozzarella Sticks",
                price:5.75
            },
            {
                subcategory:"[Starters] ",
                item:"Chicken Strips",
                price:7.50
            },
            {
                subcategory:"[Starters] ",
                item:"Spicy Chicken Strips",
                price:8.00
            },
            {
                subcategory:"[Starters] ",
                item:"Crab Cakes",
                price:8.00
            },
            {
                subcategory:"[Starters] ",
                item:"Onion Rings",
                price:5.50
            },
            {
                subcategory:"[Starters] ",
                item:"Quesadillas Cheese",
                price:4.00
            },
            {
                subcategory:"[Starters] ",
                item:"Quesadillas Spicy Chicken with Peppers and Onions",
                price:6.00
            },
            {
                subcategory:"[Starters] ",
                item:"Quesadillas Seafood (Chopped Fish & Shrimp) with Peppers and Onions",
                price:10.00
            },
            {
                subcategory:"[Starters] ",
                item:"Nachos w/ chipotle fried shrimp, cheese sauce, black beans, pico de gallo, jalapenos ,olives. Served with salsa and sour cream",
                price:9.75
            },
            {
                subcategory:"[Starters] ",
                item:"Nachos w/ beef, cheese sauce, black beans, pico de gallo, jalapenos, Olives. Served with salsa and sour cream",
                price:7.50
            },
            {
                subcategory:"[Starters] ",
                item:"Fried Fish Strips with Tartar or Cocktail Sauce",
                price:9.00
            },
            {
                subcategory:"[Starters] ",
                item:"Spicy Fried Fish Strips with Tartar or Cocktail Sauce",
                price:9.25
            },
            {
                subcategory:"[Starters] ",
                item:"Spicy Twin App (Spicy Chicken Strips & Spicy Fried Fish Strips)",
                price:10.00
            },
            {
                subcategory:"[Starters] ",
                item:"Seafood Trio App (Crab Cakes, Fried Fish Strips, & a Mini Seafood Quesadilla)",
                price:14.00
            }

        ];

const Soups = [
            {
                subcategory:"[Soups] ",
                item:"New England Clam Chowder",
                price:3.50
            },
            {
                subcategory:"[Soups] ",
                item:"French Onion Soup (Gluten Free)",
                price:2.50
            },
            {
                subcategory:"[Soups] ",
                item:"Onion Au Gratin with Croutons and Swiss",
                price:3.50
            },
            {
                subcategory:"[Soups] ",
                item:"Chili",
                price:4.50
            },
        ];
    

        //Dressings Italian, Ranch, Blue Cheese, Russian, Caesar, Honey Mustard

const Salads = [
            {
                subcategory:"[Salads] ",
                item:"Small Side Salad",
                price:3.50,
                description:"Mixed Lettuce with cucumbers, red onions, bell peppers and tomatoes",
                addons1:"w/ Chicken",
                addonprice1:3.00,
                addons2:"w/ Shrimp",
                addonprice2:6.00
            },
            {
                subcategory:"[Salads] ",
                item:"Tossed Salad",
                price:5.50,
                description:"Mixed Lettuce with cucumbers, red onions, bell peppers and tomatoes",
                addons1:"w/ Chicken",
                addonprice1:3.00,
                addons2:"w/ Shrimp",
                addonprice2:6.00
            },
            {
                subcategory:"[Salads] ",
                item:"Caesar Salad",
                price:5.50,
                description:"Romaine Lettuce tossed in Caesar dressing and parmesan cheese with croutons",
                addons1:"w/ Chicken",
                addonprice1:3.00,
                addons2:"w/ Shrimp",
                addonprice2:6.00
            },
            {
                subcategory:"[Salads] ",
                item:"Greek Salad",
                price:7.00,
                description:"Mixed Lettuce with cucumbers, red onions, onions, pepperoncinis and tomatoes With Feta Cheese and olives.",
                addons1:"w/ Chicken",
                addonprice1:3.00,
                addons2:"w/ Shrimp",
                addonprice2:6.00
            },
            {
                subcategory:"[Salads] ",
                item:"Cobb Salad",
                price:10.00,
                description:"Mixed Lettuce, hard-boiled egg, chicken, bacon, avocado, blue cheese, american cheese and tomatoes" ,
                addons1:"w/ Chicken",
                addonprice1:3.00,
                addons2:"w/ Shrimp",
                addonprice2:6.00
            },
            {
                subcategory:"[Salads] ",
                item:"Chef Salad",
                price:10.00,
                description:"Mixed Lettuce, hard-boiled egg, cucumber, red onion, bell pepper, and Tomatoes topped with ham, turkey, roast beef and swiss cheese. Italian tossed salad w/ salami, pepperoni, provolone, olives, red peppers",
                addons1:"w/ Chicken",
                addonprice1:3.00,
                addons2:"w/ Shrimp",
                addonprice2:6.00 
            },
            {
                subcategory:"[Salads] ",
                item:"Italian tossed salad w/ salami, pepperoni, provolone, olives, red peppers",
                price:10.00,
                description:"No description",
                addons1:"w/ Chicken",
                addonprice1:3.00,
                addons2:"w/ Shrimp",
                addonprice2:6.00
            }

];

/*Served with a scoop of Macaroni salad and 
a scoop of Potato salad on a bed of lettuce,
garnished with tomatoes, cucumbers, peppers,
onions, bell peppers, pepperoncini, olive and a
hard boiled egg.*/

const SaladPlatters = [
            {
                subcategory:"[Salad Platters] ",
                item:"Tuna Salad Platter",
                price:8.50
            },
            {
                subcategory:"[Salad Platters] ",
                item:"Chicken Salad Platter",
                price:8.50
            },
            {
                subcategory:"[Salad Platters] ",
                item:"Egg Salad Platter",
                price:8.50
            },
            {
                subcategory:"[Salad Platters] ",
                item:"Turkey",
                price:9.50
            },
            {
                subcategory:"[Salad Platters] ",
                item:"Roast Beef",
                price:9.50
            },
            {
                subcategory:"[Salad Platters] ",
                item:"Ham",
                price:9.50
            },
            {
                subcategory:"[Salad Platters] ",
                item:"Salami",
                price:9.50
            }
];

/*A large tossed salad topped with a scoop of
salad of your choice garnished with a hard
boiled egg.*/

const SaladBowls = [
    {
        subcategory:"[Salad Bowls] ",
        item:"Tuna Salad Platter",
        price:8.50
    },
    {
        subcategory:"[Salad Bowls] ",
        item:"Chicken Salad Platter",
        price:8.50
    },
    {
        subcategory:"[Salad Bowls] ",
        item:"Egg Salad Platter",
        price:8.50
    },
    {
        subcategory:"[Salad Bowls] ",
        item:"Turkey",
        price:9.50
    },
    {
        subcategory:"[Salad Bowls] ",
        item:"Roast Beef",
        price:9.50
    },
    
    {
        subcategory:"[Salad Bowls] ",
        item:"Ham",
        price:9.50
    },
    {
        subcategory:"[Salad Bowls] ",
        item:"Salami",
        price:9.50
    }
];

//On white, wheat, or rye bread
const ColdSandwiches = [
    {
        subcategory:"[Cold Sandwiches] ",
        item:"Tuna Salad",
        price:4.50,
        addons1:"Add Fries",
        addonprice1:1.50
    },
    {
        subcategory:"[Cold Sandwiches] ",
        item:"Egg Salad",
        price:4.50,
        addons1:"Add Fries",
        addonprice1:1.50
    },
    {
        subcategory:"[Cold Sandwiches] ",
        item:"Ham",
        price:5.50,
        addons1:"Add Fries",
        addonprice1:1.50
    },
    {
        subcategory:"[Cold Sandwiches] ",
        item:"Turkey",
        price:5.50,
        addons1:"Add Fries",
        addonprice1:1.50
    },
    {
        subcategory:"[Cold Sandwiches] ",
        item:"Roast Beef",
        price:5.50,
        addons1:"Add Fries",
        addonprice1:1.50
    },
    {
        subcategory:"[Cold Sandwiches] ",
        item:"Salami",
        price:5.50,
        addons1:"Add Fries",
        addonprice1:1.50
    }
    

];

//Served with mashed potatoes and brown gravy
const OpenHotSandwiches = [
    {
        subcategory:"[Open Hot Sandwiches] ",
        item:"Roast Turkey",
        price:7.50
    },
    {
        subcategory:"[Open Hot Sandwiches] ",
        item:"Roast Beef",
        price:7.50
    },
    {
        subcategory:"[Open Hot Sandwiches] ",
        item:"Baked Ham",
        price:7.50
    },
    {
        subcategory:"[Open Hot Sandwiches] ",
        item:"Meatloaf",
        price:7.50
    },
    {
        subcategory:"[Open Hot Sandwiches] ",
        item:"Roast Pork",
        price:7.50
    }

];

/*Served on toast with lettuce, tomatoes,
bacon and mayonnaise*/
const ClubSandwiches = [
    {
        subcategory:"[Club Sandwiches] ",
        item:"Turkey",
        price:8.00,
        addons1:"Add Fries",
        addonprice1:2.00
    },
    {
        subcategory:"[Club Sandwiches] ",
        item:"Ham",
        price:8.00,
        addons1:"Add Fries",
        addonprice1:2.00
    },
    {
        subcategory:"[Club Sandwiches] ",
        item:"Roast Beef",
        price:8.00,
        addons1:"Add Fries",
        addonprice1:2.00
    },
    {
        subcategory:"[Club Sandwiches] ",
        item:"BLT Double Bacon, Lettuce, Tomato",
        price:7.50,
        addons1:"Add Fries",
        addonprice1:2.00
    },
    {
        subcategory:"[Club Sandwiches] ",
        item:"Tuna Salad",
        price:7.00,
        addons1:"Add Fries",
        addonprice1:2.00
    },

    {
        subcategory:"[Club Sandwiches] ",
        item:"Chicken Salad",
        price:7.00,
        addons1:"Add Fries",
        addonprice1:2.00
    },
    {
        subcategory:"[Club Sandwiches] ",
        item:"Egg Salad",
        price:7.00,
        addons1:"Add Fries",
        addonprice1:2.00
    },
    {
        subcategory:"[Club Sandwiches] ",
        item:"Burger",
        price:8.00,
        addons1:"Add Fries",
        addonprice1:2.00
    },
    {
        subcategory:"[Club Sandwiches] ",
        item:"Grilled Chicken Breast",
        price:8.00,
        addons1:"Add Fries",
        addonprice1:2.00
    },
    {
        subcategory:"[Club Sandwiches] ",
        item:"Combo (Turkey, Ham, Roast Beef)",
        price:9.50,
        addons1:"Add Fries",
        addonprice1:2.00
    }

];

const HotSandwiches = [
    {
        subcategory:"[Hot Sandwiches] ",
        item:"BLT on Toast w/ Mayo",
        price:4.50,
        addons1:"Add Fries",
        addonprice1:1.50
    },
    {
        subcategory:"[Hot Sandwiches] ",
        item:"Grilled Cheese",
        price:4.00,
        addons1:"Add Fries",
        addonprice1:1.50
    },
    {
        subcategory:"[Hot Sandwiches] ",
        item:"Grilled Cheese with Ham",
        price:5.50,
        addons1:"Add Fries",
        addonprice1:1.50
    },
    {
        subcategory:"[Hot Sandwiches] ",
        item:"Grilled Cheese with Bacon",
        price:5.50,
        addons1:"Add Fries",
        addonprice1:1.50
    },
    {
        subcategory:"[Hot Sandwiches] ",
        item:"Grilled Cheese Bacon and Tomato",
        price:5.50,
        addons1:"Add Fries",
        addonprice1:1.50
    },
    {
        subcategory:"[Hot Sandwiches] ",
        item:"Grilled Cheese with Turkey",
        price:5.50,
        addons1:"Add Fries",
        addonprice1:1.50
    },
    {
        subcategory:"[Hot Sandwiches] ",
        item:"Grilled Cheese with Roast Beef",
        price:5.50,
        addons1:"Add Fries",
        addonprice1:1.50
    },
    {
        subcategory:"[Hot Sandwiches] ",
        item:"Tuna Melt on White with American",
        price:4.75,
        addons1:"Add Fries",
        addonprice1:1.50
    },
    {
        subcategory:"[Hot Sandwiches] ",
        item:"Grilled Chicken Melt with Onions",
        price:6.00,
        addons1:"Add Fries",
        addonprice1:1.50
    },
    {
        subcategory:"[Hot Sandwiches] ",
        item:"Patty Melt (Rye w/ Swiss and Onions)",
        price:6.00,
        addons1:"Add Fries",
        addonprice1:1.50
    },
    {
        subcategory:"[Hot Sandwiches] ",
        item:"Philly Steak (Sliced Beef, Onions, Mozz, Sauce)",
        price:6.00,
        addons1:"Add Fries",
        addonprice1:1.50
    },
    {
        subcategory:"[Hot Sandwiches] ",
        item:"Chicken Philly",
        price:6.00,
        addons1:"Add Fries",
        addonprice1:1.50
    },
    {
        subcategory:"[Hot Sandwiches] ",
        item:"Italian Steak (Beef, Onions, Mozz, Sauce)",
        price:6.00,
        addons1:"Add Fries",
        addonprice1:1.50
    },
    {
        subcategory:"[Hot Sandwiches] ",
        item:"Italian Sausage w/ Peppers & Onions",
        price:6.00,
        addons1:"Add Fries",
        addonprice1:1.50
    },
    {
        subcategory:"[Hot Sandwiches] ",
        item:"Meatball with Sauce and Mozz",
        price:6.00,
        addons1:"Add Fries",
        addonprice1:1.50
    },
    {
        subcategory:"[Hot Sandwiches] ",
        item:"Monte Cristo French Toast (Swiss, Ham, and Turkey)",
        price:6.00,
        addons1:"Add Fries",
        addonprice1:1.50
    },
];


//Served with choice of potato and vegetable
const ClassicFavorites = [
    {
        subcategory:"[Classic Favorites] ",
        item:"Chopped Steak with Mushroom Gravy",
        price:9.00
    },
    {
        subcategory:"[Classic Favorites] ",
        item:"Liver with Onions and Bacon",
        price:8.00
    },
    {
        subcategory:"[Classic Favorites] ",
        item:"Meatloaf with Gravy",
        price:9.00
    },
    {
        subcategory:"[Classic Favorites] ",
        item:"Pork Loin with Gravy",
        price:8.00
    },
    {
        subcategory:"[Classic Favorites] ",
        item:"Mac and Cheese",
        price:8.00
    },
    {
        subcategory:"[Classic Favorites] ",
        item:"Ham Steak",
        price:9.00
    },
    {
        subcategory:"[Classic Favorites] ",
        item:"Crispy Chicken Breasts with Cheddar Cheese Sauce",
        price:9.00
    },
    {
        subcategory:"[Classic Favorites] ",
        item:"Garden Chicken Grilled Chicken Garden Vegetables & Garlic Butter",
        price:10.00
    },
];

const Burgers = [
    {
        subcategory:"[Burgers] ",
        item:"6oz Burger",
        price:4.00,
        addons1:"Add Cheese",
        addonprice1:1.00,
        addons2:"Add Bacon",
        addonprice2:2.00,
        addons3:"Make it Deluxe: Lettuce, Tomato, and French Fries",
        addonprice3:3.50
    },
    {
        subcategory:"[Burgers] ",
        item:"Double Burger",
        price:6.00,
        addons1:"Add Cheese",
        addonprice1:1.00,
        addons2:"Add Bacon",
        addonprice2:2.00,
        addons3:"Make it Deluxe: Lettuce, Tomato, and French Fries",
        addonprice3:3.50
    },
    {
        subcategory:"[Burgers] ",
        item:"Chicken Burger",
        price:4.00,
        addons1:"Add Cheese",
        addonprice1:1.00,
        addons2:"Add Bacon",
        addonprice2:2.00,
        addons3:"Make it Deluxe: Lettuce, Tomato, and French Fries",
        addonprice3:3.50
    },
    {
        subcategory:"[Burgers] ",
        item:"Sriracha Burger with Cheddar & Jalapenos",
        price:5.50,
        addons1:"Add Cheese",
        addonprice1:1.00,
        addons2:"Add Bacon",
        addonprice2:2.00,
        addons3:"Make it Deluxe: Lettuce, Tomato, and French Fries",
        addonprice3:3.50
    },
    {
        subcategory:"[Burgers] ",
        item:"Guac Burger topped with Guacamole",
        price:6.00,
        addons1:"Add Cheese",
        addonprice1:1.00,
        addons2:"Add Bacon",
        addonprice2:2.00,
        addons3:"Make it Deluxe: Lettuce, Tomato, and French Fries",
        addonprice3:3.50
    },
    {
        subcategory:"[Burgers] ",
        item:"Cajun Blue Cheese Burger",
        price:6.50,
        addons1:"Add Cheese",
        addonprice1:1.00,
        addons2:"Add Bacon",
        addonprice2:2.00,
        addons3:"Make it Deluxe: Lettuce, Tomato, and French Fries",
        addonprice3:3.50
    },
    {
        subcategory:"[Burgers] ",
        item:"Chili Cheddar Burger topped with Chili, Onions, and Cheddar Cheese Sauce",
        price:6.50,
        addons1:"Add Cheese",
        addonprice1:1.00,
        addons2:"Add Bacon",
        addonprice2:2.00,
        addons3:"Make it Deluxe: Lettuce, Tomato, and French Fries",
        addonprice3:3.50
    },
    {
        subcategory:"[Burgers] ",
        item:"French Onion Burger with Fried Onions, Mushrooms, and Swiss Cheese",
        price:6.50,
        addons1:"Add Cheese",
        addonprice1:1.00,
        addons2:"Add Bacon",
        addonprice2:2.00,
        addons3:"Make it Deluxe: Lettuce, Tomato, and French Fries",
        addonprice3:3.50
    },
    {
        subcategory:"[Burgers] ",
        item:"Jam Burger with Fried Onions and Peppers and Cheddar Cheese Sauce",
        price:6.50,
        addons1:"Add Cheese",
        addonprice1:1.00,
        addons2:"Add Bacon",
        addonprice2:2.00,
        addons3:"Make it Deluxe: Lettuce, Tomato, and French Fries",
        addonprice3:3.50
    },
    {
        subcategory:"[Burgers] ",
        item:"Crabby Patty",
        price:6.00,
        addons1:"Add Cheese",
        addonprice1:1.00,
        addons2:"Add Bacon",
        addonprice2:2.00,
        addons3:"Make it Deluxe: Lettuce, Tomato, and French Fries",
        addonprice3:3.50
    }

];

const Italian = [
    {
        subcategory:"[Italian] ",
        item:"Half Order Angel Hair",
        price:5.00,
        
        addons1:"Add Sauce",
        addonprice1:0.00,
        addons2:"Add Garlic and Olive Oil",
        addonprice2:0.00,
        addons3:"w/ Meatballs",
        addonprice3:3.00,
        addons4:"w/ Italian Sausage",
        addonprice4:3.00,
        addons5:"w/ Sauteed Peppers",
        addonprice5:1.00,
        addons6:"w/ Sauteed Onions",
        addonprice6:1.00,
        addons7:"w/ Sauteed Mushrooms",
        addonprice7:1.00
    },
    {
        subcategory:"[Italian] ",
        item:"Full Order Angel Hair",
        price:7.00,
        
        addons1:"Add Sauce",
        addonprice1:0.00,
        addons2:"Add Garlic and Olive Oil",
        addonprice2:0.00,
        addons3:"w/ Meatballs",
        addonprice3:3.00,
        addons4:"w/ Italian Sausage",
        addonprice4:3.00,
        addons5:"w/ Sauteed Peppers",
        addonprice5:1.00,
        addons6:"w/ Sauteed Onions",
        addonprice6:1.00,
        addons7:"w/ Sauteed Mushrooms",
        addonprice7:1.00
    },
    {
        subcategory:"[Italian] ",
        item:"Chicken Parmesan (Half Order Default)",
        price:6.50,
        addons1:"Full Order",
        addonprice1:3.00,
        addons2:"Angel Hair Choice",
        addonprice2:0.00,
        
        addons3:"w/ Side Salad",
        addonprice3:2.00,
        addons4:"w/ Italian Sausage",
        addonprice4:3.00,
        addons5:"w/ Sauteed Peppers",
        addonprice5:1.00,
        addons6:"w/ Sauteed Onions",
        addonprice6:1.00,
        addons7:"w/ Sauteed Mushrooms",
        addonprice7:1.00
    },
    {
        subcategory:"[Italian] ",
        item:"Chicken Scampi (Half Order Default)",
        price:6.50,
        addons1:"Full Order",
        addonprice1:3.00,
        addons2:"Angel Hair Choice",
        addonprice2:0.00,
        
        addons3:"w/ Side Salad",
        addonprice3:2.00,
        addons4:"w/ Italian Sausage",
        addonprice4:3.00,
        addons5:"w/ Sauteed Peppers",
        addonprice5:1.00,
        addons6:"w/ Sauteed Onions",
        addonprice6:1.00,
        addons7:"w/ Sauteed Mushrooms",
        addonprice7:1.00
    },
    {
        subcategory:"[Italian] ",
        item:"Chicken Marsala (Half Order Default)",
        price:6.50,
        addons1:"Full Order",
        addonprice1:3.00,
        addons2:"Angel Hair Choice",
        addonprice2:0.00,
        
        addons3:"w/ Side Salad",
        addonprice3:2.00,
        addons4:"w/ Italian Sausage",
        addonprice4:3.00,
        addons5:"w/ Sauteed Peppers",
        addonprice5:1.00,
        addons6:"w/ Sauteed Onions",
        addonprice6:1.00,
        addons7:"w/ Sauteed Mushrooms",
        addonprice7:1.00
    },
    {
        subcategory:"[Italian] ",
        item:"Mac and Cheese",
        price:9.00,
        addons1:"No Addon",
        addonprice1:0,
        addons2:"No Addon",
        addonprice2:0,
        addons3:"No Addon",
        addonprice3:0,
        addons4:"No Addon",
        addonprice4:0,
        addons5:"No Addon",
        addonprice5:0,
        addons6:"No Addon",
        addonprice6:0,
        addons7:"No Addon",
        addonprice7:0,
    },
    {
        subcategory:"[Italian] ",
        item:"Spicy Mac and Cheese",
        price:9.00,
        addons1:"No Addon",
        addonprice1:0,
        addons2:"No Addon",
        addonprice2:0,
        addons3:"No Addon",
        addonprice3:0,
        addons4:"No Addon",
        addonprice4:0,
        addons5:"No Addon",
        addonprice5:0,
        addons6:"No Addon",
        addonprice6:0,
        addons7:"No Addon",
        addonprice7:0,
    }
];

/*All served with french fries, coleslaw
And tartar sauce*/

const FriedSeafood = [
    {
        subcategory:"[Fried Seafood] ",
        item:"Fried Fish Strips on a Bun",
        price:7.25
    },
    {
        subcategory:"[Fried Seafood] ",
        item:"Spicy Fish Strips on a Bun",
        price:7.50
    },
    {
        subcategory:"[Fried Seafood] ",
        item:"Clam Fry on a Bun",
        price:7.50
    },
    {
        subcategory:"[Fried Seafood] ",
        item:"Shrimp Fry on a Bun",
        price:8.00
    },
    {
        subcategory:"[Fried Seafood] ",
        item:"Spicy Shrimp Fry on a Bun",
        price:8.50
    },
    {
        subcategory:"[Fried Seafood] ",
        item:"Fried Haddock Strips Dinner",
        price:10.00
    },
    {
        subcategory:"[Fried Seafood] ",
        item:"Spicy Fried Haddock Strips Dinner",
        price:10.50
    },
    {
        subcategory:"[Fried Seafood] ",
        item:"Fried Shrimp Dinner",
        price:12.00
    },
    {
        subcategory:"[Fried Seafood] ",
        item:"Spicy Fried Shrimp Dinner",
        price:13.00
    },
    {
        subcategory:"[Fried Seafood] ",
        item:"Fried Seafood Combo (Haddock, Shrimp, Clams)",
        price:16.00
    },
    {
        subcategory:"[Fried Seafood] ",
        item:"Spicy Fried Seafood Combo",
        price:17.00
    },
    {
        subcategory:"[Fried Seafood] ",
        item:"Crab Cakes Dinner with Lemon Aioli",
        price:11.00
    },
    {
        subcategory:"[Fried Seafood] ",
        item:"Fried Clam Dinner",
        price:11.00
    },
    {
        subcategory:"[Fried Seafood] ",
        item:"Seafood Quesadilla",
        price:13.00
    }
];


//LAST TWO PAGES
//SERVED WITH FRIES AND A DRINK
const KIDSlunch = [
    {
        subcategory:"[KIDS Lunch] ",
        item:"Grilled Cheese",
        price:6.50
    },
    {
        subcategory:"[KIDS Lunch] ",
        item:"Hot Dog",
        price:6.50
    },
    {
        subcategory:"[KIDS Lunch] ",
        item:"Fried Chicken Strips",
        price:6.50
    }
];


const SidesLunch = [
    {
        subcategory:"[Sides] ",
        item:"French Fries",
        price:3.50
    },
    {
        subcategory:"[Sides] ",
        item:"Mashed Potatoes",
        price:3.00
    },
    {
        subcategory:"[Sides] ",
        item:"Mac n Cheese",
        price:4.50
    },
    {
        subcategory:"[Sides] ",
        item:"Spicy Mac n Cheese",
        price:4.75
    },
    {
        subcategory:"[Sides] ",
        item:"Coleslaw",
        price:2.50
    },
    {
        subcategory:"[Sides] ",
        item:"Macaroni Salad",
        price:2.50
    },
    {
        subcategory:"[Sides] ",
        item:"Corn",
        price:2.50
    },
    {
        subcategory:"[Sides] ",
        item:"Black Beans",
        price:2.50
    },
    {
        subcategory:"[Sides] ",
        item:"Rice Pilaf",
        price:2.50
    },
    {
        subcategory:"[Sides] ",
        item:"Seasoned Rice",
        price:2.75
    },
    {
        subcategory:"[Sides] ",
        item:"Broccoli Sauteed with Garlic",
        price:3.75
    },
];

const Desserts = [
    {
        subcategory:"[Dessert] ",
        item:"Rice Pudding",
        price:3.00
    },
    {
        subcategory:"[Dessert] ",
        item:"Tapioca Pudding",
        price:3.00
    },
    {
        subcategory:"[Dessert] ",
        item:"Cheesecake Plain",
        price:4.00
    },
    {
        subcategory:"[Dessert] ",
        item:"Cheesecake with Strawberries",
        price:5.00
    },
    {
        subcategory:"[Dessert] ",
        item:"Chocolate Cream Pie",
        price:3.50
    },
    {
        subcategory:"[Dessert] ",
        item:"Key Lime Pie",
        price:3.50
    }

];

const DrinksLunch = [
    {
        subcategory:"[Drinks] ",
        item:"Coffee (w/ Refill)",
        price:2.00
    },
    {
        subcategory:"[Drinks] ",
        item:"Milk",
        price:2.00
    },
    {
        subcategory:"[Drinks] ",
        item:"Chocolate Milk",
        price:2.00
    },
    {
        subcategory:"[Drinks] ",
        item:"Juice 8oz. (Orange, Apple, Grapefruit, Cranberry, Tomato, or Pineapple) Specify in Special Instructions",
        price:2.00
    },
    {
        subcategory:"[Drinks] ",
        item:"Iced Tea",
        price:2.00
    },
    {
        subcategory:"[Drinks] ",
        item:"Soda",
        price:2.00
    },
    {
        subcategory:"[Drinks] ",
        item:"Water Bottle",
        price:2.00
    }
];






/*Steps
1. Create SubCat buttons (D)
1.5. Create HTML elements necessary ()
2. Create reveal SubCat function (D)
3. Use backticks to show how many items each SubCat has (X)
4. Create collapseSel() to collapse selection (D)
5. Use selectedSubCat variable to detemine what button was clicked on (D)
6. Alter for loop code to work with new function (D)
7. Display JSON items on new buttons (D)
8. Display JSON prices on new buttons (D)
9. Add 'onclick='addonModal();'' to new buttons (D)
10. Create addonModal() to allow users to control how their food is made ()
11. Reveal specific addons and addon prices according to JSON and make them buttons ()
12. Special instructions textarea ()
13. Send altered item and price to the [jamsorder] and [prices] arrays ()
14. Create viewjamsorder() and add an 'onclick' to the view jamsorder button ()
15. List the contents of [jamsorder] and [prices] in a form with a submit button at the end ()

PHP, MySQL, and Paypal stuff next

*/


    



var jamsorder = [];
var prices = [];
var sum = 0;
var tax = 0;

var completejamsorder = [];
var completePrice = [];

var selectedSubCat;


var selectedItem;

var selectedPrice;

var selectedAddonMiddleMan;
var selectedAddonPriceMiddleMan;

var selectedAddon;

var selectedAddonPrice;

var menuOutput;

selectedPrice = Math.floor(selectedPrice * 100) / 100;
selectedPrice.toFixed(2);



var selectedItemRevert;
var selectedPriceRevert;

var itemCount = 0;

const menuStart = document.getElementById("menuStart");


//edited here
var breakbtn = document.getElementById("breakfast");


var lunchbtn = document.getElementById("lunch");    

function getSum(total, num) {
    return total + Math.round(num);
}

function establishSum() {
    sum = 0;
    tax = 0;
    for (var i=0; i < prices.length; i++){
        sum += prices[i];
    }
    tax = tax + (sum * 0.08);
    console.log(tax);
    sum = sum + tax;
    //DOUBLECHECK
    sum = money_round(sum);
    return sum;
}
function establishTax(){
    sum = 0;
    tax = 0;
    for (var i=0; i < prices.length; i++){
        sum += prices[i];
    }
    tax = tax + (sum * 0.08);
    console.log(tax);
    tax = money_round(tax);
    return tax;
}

/*var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var response = JSON.parse(xhttp.responseText);
        var menu = response.menuJams;

    }
};
xhttp.open("GET", "index.json", true);
xhttp.send();

    for(var i = 0;i < menu.length;i++){
        menuOutput += '<button>'+ menu[i].item +'</button>';
    }
    document.getElementById('menu').innerHTML = menuOutput;*/


        var i=0;
        var u=0;
        var j=false;
        var h=false;
        var btn;
        var itemName;

      /*  btn.addEventListener("click", function(){alert(btn.value);});
        $(btn).click(function() {
            var fired_button = $(this).val();
            alert(fired_button);
        });*/


/*function deleteBreakfast() {
    

        console.log(i);
        document.getElementById("lunchbtn").style.top = "100%"
        document.getElementById("breakfast").innerHTML ="Breakfast ▾"
        j=true;
        i++;
 
        menuStart.style.display = "none";
    
        


      }*/


  /*    function openSubCat(){
        var opener = this.id;
        console.log(opener);
      }*/
    
var s = false;
var fs = false;

/*if (selectedSubCat == 'pancakes') {*/
/*    var checkboxes = document.getElementsByClassName("panbtns");
    var app1 = document.getElementById("app1");
    var innerApp1 = document.getElementById("app1").innerHTML;

    for (let contents in Pancakes) {
        innerApp1.innerHTML = innerApp1.innerHTML + Pancakes[contents] + " ";
    }
*/
var summ;

/*function getSum(priceArray) {
    for (i<0; i=priceArray.length; i++){
        summ = summ + priceArray[i];
    }
    return summ;
    
}*/


function moveTojamsorderArray(choice, withinCheck, subcat) {
    selectedItem = subcat + choice;
    selectedItemRevert = subcat + choice;
    applicableCheckboxes = document.getElementsByName(withinCheck);
    textboxx = document.getElementById(choice).value;




        for (i = 0; i < applicableCheckboxes.length; i++) {
            if (applicableCheckboxes[i].checked) {
                selectedItem = selectedItem + ' ADDONS: ' + applicableCheckboxes[i].id + ' ';
        }
    }

        selectedItem = selectedItem + " (Special Instruction(s): " + textboxx + ")";


    console.log(selectedItem);


    jamsorder.push(selectedItem);
    console.log(jamsorder);
    updateItemCount();
}

function moveToPricesArray (choicePrice, withinCheck) {
    applicableCheckboxes = document.getElementsByName(withinCheck);
    parseInt(choicePrice);
    selectedPrice = choicePrice;
    selectedPriceRevert = choicePrice;

    for (i = 0; i < applicableCheckboxes.length; i++) {
        if (applicableCheckboxes[i].checked) {
            selectedPrice = selectedPrice + Number(applicableCheckboxes[i].value);
    }
}


    
    prices.push(selectedPrice);
    console.log(selectedPrice);
    console.log(sum);
    establishSum();
    selectedItem = "";
    selectedPrice = 0;
    incrementOC();

}



    var choiceID;
    var choiceIDprice;
    var checkClass;


    document.getElementById("app1").innerHTML = `
    ${Pancakes.map(function(pan) {
        var choiceID = pan.item;
        var choiceIDprice = pan.price;
        var checkClass = 'panBtns';
        var withinCheck = pan.item;
        var subcat = pan.subcategory;

        return `<div class='item'>
                <p id="choice" onclick="moveTojamsorderArray('${choiceID}', '${withinCheck}', '${subcat}'); moveToPricesArray(${choiceIDprice}, '${withinCheck}');">${pan.item}  -  $${pan.price}</p>
        </div>
        <br>
        <input type="checkbox" class="${checkClass}" id="${pan.addons1}" name="${withinCheck}" value="${pan.addonprice1}">${pan.addons1} - $${pan.addonprice1}</input><br><br>
        <input type="checkbox" class="${checkClass}" id="${pan.addons2}" name="${withinCheck}" value="${pan.addonprice2}">${pan.addons2} - $${pan.addonprice2}</input><br><br>
        <input type="checkbox" class="${checkClass}" id="${pan.addons3}" name="${withinCheck}" value="${pan.addonprice3}">${pan.addons3} - $${pan.addonprice3}</input><br><br>
        <input type="checkbox" class="${checkClass}" id="${pan.addons4}" name="${withinCheck}" value="${pan.addonprice4}">${pan.addons4} - $${pan.addonprice4}</input><br><br>
        <textarea id="${choiceID}" placeholder="Special Instructions (Extra or Additional Items Written in this Box May Result in Added Charges Upon Pickup): Please include type of bread, how eggs should be cooked, etc."></textarea><br><br>
        <button id="panCon" type="submit" class="confirm" onclick="moveTojamsorderArray('${choiceID}', '${withinCheck}', '${subcat}'); moveToPricesArray(${choiceIDprice}, '${withinCheck}');">+ Add to Order</button>
        <br>


        `

    }
        
    ).join('')}


    `

    document.getElementById("app2").innerHTML = `
    ${Eggs.map(function(pan) {
        var choiceID = pan.item;
        var choiceIDprice = pan.price;
        var checkClass = 'panBtns';
        var withinCheck = pan.item;
        var subcat = pan.subcategory;

        return `<div class='item'>
                <p id="choice" onclick="moveTojamsorderArray('${choiceID}', '${withinCheck}', '${subcat}'); moveToPricesArray(${choiceIDprice}, '${withinCheck}');">${pan.item}  -  $${pan.price}</p>
        </div>
        <br>
        <textarea id="${choiceID}" placeholder="Special Instructions (Extra or Additional Items Written in this Box May Result in Added Charges Upon Pickup): Please include type of bread, how eggs should be cooked, etc."></textarea><br><br>
        <button id="panCon" type="submit" class="confirm" onclick="moveTojamsorderArray('${choiceID}', '${withinCheck}', '${subcat}'); moveToPricesArray(${choiceIDprice}, '${withinCheck}');">+ Add to Order</button>
        <br>


        `

    }
        
    ).join('')}


    `

    
    document.getElementById("app3").innerHTML = `
    ${FrenchToast.map(function(pan) {
        var choiceID = pan.item;
        var choiceIDprice = pan.price;
        var checkClass = 'panBtns';
        var withinCheck = pan.item;
        var subcat = pan.subcategory;

        return `<div class='item'>
                <p id="choice" onclick="moveTojamsorderArray('${choiceID}', '${withinCheck}', '${subcat}'); moveToPricesArray(${choiceIDprice}, '${withinCheck}');">${pan.item}  -  $${pan.price}</p>
        </div>
        <br>
        <input type="checkbox" class="${checkClass}" id="${pan.addons1}" name="${withinCheck}" value="${pan.addonprice1}">${pan.addons1} - $${pan.addonprice1}</input><br><br>
        <textarea id="${choiceID}" placeholder="Special Instructions (Extra or Additional Items Written in this Box May Result in Added Charges Upon Pickup): Please include type of bread, how eggs should be cooked, etc."></textarea><br><br>
        <button id="panCon" type="submit" class="confirm" onclick="moveTojamsorderArray('${choiceID}', '${withinCheck}', '${subcat}'); moveToPricesArray(${choiceIDprice}, '${withinCheck}');">+ Add to Order</button>
        <br>


        `

    }
        
    ).join('')}


    `

    
    document.getElementById("app4").innerHTML = `
    ${CornedBeefHash.map(function(pan) {
        var choiceID = pan.item;
        var choiceIDprice = pan.price;
        var checkClass = 'panBtns';
        var withinCheck = pan.item;
        var subcat = pan.subcategory;

        return `<div class='item'>
                <p id="choice" onclick="moveTojamsorderArray('${choiceID}', '${withinCheck}', '${subcat}'); moveToPricesArray(${choiceIDprice}, '${withinCheck}');">${pan.item}  -  $${pan.price}</p>
        </div>
        <br>
        <textarea id="${choiceID}" placeholder="Special Instructions (Extra or Additional Items Written in this Box May Result in Added Charges Upon Pickup): Please include type of bread, how eggs should be cooked, etc."></textarea><br><br>
        <button id="panCon" type="submit" class="confirm" onclick="moveTojamsorderArray('${choiceID}', '${withinCheck}', '${subcat}'); moveToPricesArray(${choiceIDprice}, '${withinCheck}');">+ Add to Order</button>
        <br>


        `

    }
        
    ).join('')}


    `

    
    document.getElementById("app5").innerHTML = `
    ${Sandwiches.map(function(pan) {
        var choiceID = pan.item;
        var choiceIDprice = pan.price;
        var checkClass = 'panBtns';
        var withinCheck = pan.item;
        var subcat = pan.subcategory;

        return `<div class='item'>
                <p id="choice" onclick="moveTojamsorderArray('${choiceID}', '${withinCheck}', '${subcat}'); moveToPricesArray(${choiceIDprice}, '${withinCheck}');">${pan.item}  -  $${pan.price}</p>
        </div>
        <br>
        <input type="checkbox" class="${checkClass}" id="${pan.addons1}" name="${withinCheck}" value="${pan.addonprice1}">${pan.addons1} - $${pan.addonprice1}</input><br><br>
        <textarea id="${choiceID}" placeholder="Special Instructions (Extra or Additional Items Written in this Box May Result in Added Charges Upon Pickup): Please include type of bread, how eggs should be cooked, etc."></textarea><br><br>
        <button id="panCon" type="submit" class="confirm" onclick="moveTojamsorderArray('${choiceID}', '${withinCheck}', '${subcat}'); moveToPricesArray(${choiceIDprice}, '${withinCheck}');">+ Add to Order</button>
        <br>


        `

    }
        
    ).join('')}


    `

    document.getElementById("app6").innerHTML = `
    ${Omelettes.map(function(pan) {
        var choiceID = pan.item;
        var choiceIDprice = pan.price;
        var checkClass = 'panBtns';
        var withinCheck = pan.item;
        var subcat = pan.subcategory;

        return `<div class='item'>
                <p id="choice" onclick="moveTojamsorderArray('${choiceID}', '${withinCheck}', '${subcat}'); moveToPricesArray(${choiceIDprice}, '${withinCheck}');">${pan.item}  -  $${pan.price}</p>
        </div>
        <br>
        <input type="checkbox" class="${checkClass}" id="${pan.addons1}" name="${withinCheck}" value="${pan.addonprice1}">${pan.addons1} - $${pan.addonprice1}</input><br><br>
        <input type="checkbox" class="${checkClass}" id="${pan.addons2}" name="${withinCheck}" value="${pan.addonprice2}">${pan.addons2} - $${pan.addonprice2}</input><br><br>
        <input type="checkbox" class="${checkClass}" id="${pan.addons3}" name="${withinCheck}" value="${pan.addonprice3}">${pan.addons3} - $${pan.addonprice3}</input><br><br>
        <input type="checkbox" class="${checkClass}" id="${pan.addons4}" name="${withinCheck}" value="${pan.addonprice4}">${pan.addons4} - $${pan.addonprice4}</input><br><br>
        <input type="checkbox" class="${checkClass}" id="${pan.addons5}" name="${withinCheck}" value="${pan.addonprice5}">${pan.addons5} - $${pan.addonprice5}</input><br><br>
        <input type="checkbox" class="${checkClass}" id="${pan.addons6}" name="${withinCheck}" value="${pan.addonprice6}">${pan.addons6} - $${pan.addonprice6}</input><br><br>
        <input type="checkbox" class="${checkClass}" id="${pan.addons7}" name="${withinCheck}" value="${pan.addonprice7}">${pan.addons7} - $${pan.addonprice7}</input><br><br>
        <input type="checkbox" class="${checkClass}" id="${pan.addons8}" name="${withinCheck}" value="${pan.addonprice8}">${pan.addons8} - $${pan.addonprice8}</input><br><br>
        <input type="checkbox" class="${checkClass}" id="${pan.addons9}" name="${withinCheck}" value="${pan.addonprice9}">${pan.addons9} - $${pan.addonprice9}</input><br><br>
        <input type="checkbox" class="${checkClass}" id="${pan.addons10}" name="${withinCheck}" value="${pan.addonprice10}">${pan.addons10} - $${pan.addonprice10}</input><br><br>
        <input type="checkbox" class="${checkClass}" id="${pan.addons11}" name="${withinCheck}" value="${pan.addonprice11}">${pan.addons11} - $${pan.addonprice11}</input><br><br>
        <input type="checkbox" class="${checkClass}" id="${pan.addons12}" name="${withinCheck}" value="${pan.addonprice12}">${pan.addons12} - $${pan.addonprice12}</input><br><br>
        <input type="checkbox" class="${checkClass}" id="${pan.addons13}" name="${withinCheck}" value="${pan.addonprice13}">${pan.addons13} - $${pan.addonprice13}</input><br><br>
        <input type="checkbox" class="${checkClass}" id="${pan.addons14}" name="${withinCheck}" value="${pan.addonprice14}">${pan.addons14} - $${pan.addonprice14}</input><br><br>
        <input type="checkbox" class="${checkClass}" id="${pan.addons15}" name="${withinCheck}" value="${pan.addonprice15}">${pan.addons15} - $${pan.addonprice15}</input><br><br>
        <input type="checkbox" class="${checkClass}" id="${pan.addons16}" name="${withinCheck}" value="${pan.addonprice16}">${pan.addons16} - $${pan.addonprice16}</input><br><br>
        <input type="checkbox" class="${checkClass}" id="${pan.addons17}" name="${withinCheck}" value="${pan.addonprice17}">${pan.addons17} - $${pan.addonprice17}</input><br><br>

        <textarea id="${choiceID}" placeholder="Special Instructions (Extra or Additional Items Written in this Box May Result in Added Charges Upon Pickup): Please include type of bread, how eggs should be cooked, etc."></textarea><br><br>
        <button id="panCon" type="submit" class="confirm" onclick="moveTojamsorderArray('${choiceID}', '${withinCheck}', '${subcat}'); moveToPricesArray(${choiceIDprice}, '${withinCheck}');">+ Add to Order</button>
        <br>


        `

    }
        
    ).join('')}


    `

    
    document.getElementById("app7").innerHTML = `
    ${SpecialtyOmelettes.map(function(pan) {
        var choiceID = pan.item;
        var choiceIDprice = pan.price;
        var checkClass = 'panBtns';
        var withinCheck = pan.item;
        var subcat = pan.subcategory;

        return `<div class='item'>
                <p id="choice" onclick="moveTojamsorderArray('${choiceID}', '${withinCheck}', '${subcat}'); moveToPricesArray(${choiceIDprice}, '${withinCheck}');">${pan.item}  -  $${pan.price}</p>
        </div>
        <br>
        <input type="checkbox" class="${checkClass}" id="${pan.addons1}" name="${withinCheck}" value="${pan.addonprice1}">${pan.addons1} - $${pan.addonprice1}</input><br><br>
        <input type="checkbox" class="${checkClass}" id="${pan.addons2}" name="${withinCheck}" value="${pan.addonprice2}">${pan.addons2} - $${pan.addonprice2}</input><br><br>
        <input type="checkbox" class="${checkClass}" id="${pan.addons3}" name="${withinCheck}" value="${pan.addonprice3}">${pan.addons3} - $${pan.addonprice3}</input><br><br>
        <input type="checkbox" class="${checkClass}" id="${pan.addons4}" name="${withinCheck}" value="${pan.addonprice4}">${pan.addons4} - $${pan.addonprice4}</input><br><br>
        <input type="checkbox" class="${checkClass}" id="${pan.addons5}" name="${withinCheck}" value="${pan.addonprice5}">${pan.addons5} - $${pan.addonprice5}</input><br><br>
        <input type="checkbox" class="${checkClass}" id="${pan.addons6}" name="${withinCheck}" value="${pan.addonprice6}">${pan.addons6} - $${pan.addonprice6}</input><br><br>
        <input type="checkbox" class="${checkClass}" id="${pan.addons7}" name="${withinCheck}" value="${pan.addonprice7}">${pan.addons7} - $${pan.addonprice7}</input><br><br>
        <input type="checkbox" class="${checkClass}" id="${pan.addons8}" name="${withinCheck}" value="${pan.addonprice8}">${pan.addons8} - $${pan.addonprice8}</input><br><br>
        <input type="checkbox" class="${checkClass}" id="${pan.addons9}" name="${withinCheck}" value="${pan.addonprice9}">${pan.addons9} - $${pan.addonprice9}</input><br><br>
        <input type="checkbox" class="${checkClass}" id="${pan.addons10}" name="${withinCheck}" value="${pan.addonprice10}">${pan.addons10} - $${pan.addonprice10}</input><br><br>
        <input type="checkbox" class="${checkClass}" id="${pan.addons11}" name="${withinCheck}" value="${pan.addonprice11}">${pan.addons11} - $${pan.addonprice11}</input><br><br>
        <input type="checkbox" class="${checkClass}" id="${pan.addons12}" name="${withinCheck}" value="${pan.addonprice12}">${pan.addons12} - $${pan.addonprice12}</input><br><br>
        <input type="checkbox" class="${checkClass}" id="${pan.addons13}" name="${withinCheck}" value="${pan.addonprice13}">${pan.addons13} - $${pan.addonprice13}</input><br><br>

        <textarea id="${choiceID}" placeholder="Special Instructions (Extra or Additional Items Written in this Box May Result in Added Charges Upon Pickup): Please include type of bread, how eggs should be cooked, etc."></textarea><br><br>
        <button id="panCon" type="submit" class="confirm" onclick="moveTojamsorderArray('${choiceID}', '${withinCheck}', '${subcat}'); moveToPricesArray(${choiceIDprice}, '${withinCheck}');">+ Add to Order</button>
        <br>


        `

    }
        
    ).join('')}


    `

    
    document.getElementById("app8").innerHTML = `
    ${NotSoBenedicts.map(function(pan) {
        var choiceID = pan.item;
        var choiceIDprice = pan.price;
        var checkClass = 'panBtns';
        var withinCheck = pan.item;
        var subcat = pan.subcategory;


        return `<div class='item'>
        <p id="choice" onclick="moveTojamsorderArray('${choiceID}', '${withinCheck}', '${subcat}'); moveToPricesArray(${choiceIDprice}, '${withinCheck}');">${pan.item}  -  $${pan.price}</p>
        </div>
        <br>
        <p>${pan.description}</p><br><br>
        <textarea id="${choiceID}" placeholder="Special Instructions (Extra or Additional Items Written in this Box May Result in Added Charges Upon Pickup): Please include type of bread, how eggs should be cooked, etc."></textarea><br><br>
        <button id="panCon" type="submit" class="confirm" onclick="moveTojamsorderArray('${choiceID}', '${withinCheck}', '${subcat}'); moveToPricesArray(${choiceIDprice}, '${withinCheck}');">+ Add to Order</button>
        <br>


        `

    }
        
    ).join('')}


    `



    document.getElementById("app10").innerHTML = `
    ${CombinationBreakfasts.map(function(pan) {
        var choiceID = pan.item;
        var choiceIDprice = pan.price;
        var checkClass = 'panBtns';
        var withinCheck = pan.item;
        var subcat = pan.subcategory;

        return `<div class='item'>
        <p id="choice" onclick="moveTojamsorderArray('${choiceID}', '${withinCheck}', '${subcat}'); moveToPricesArray(${choiceIDprice}, '${withinCheck}');">${pan.item} </p><pre class="price"> -  $</pre><p id="${choiceIDprice}" class="fixthisshit"> ${pan.price}</p>
        </div>
        <br>
        <textarea id="${choiceID}" placeholder="Special Instructions (Extra or Additional Items Written in this Box May Result in Added Charges Upon Pickup): Please include type of bread, how eggs should be cooked, etc."></textarea><br><br>
        <button id="panCon" type="submit" class="confirm" onclick="moveTojamsorderArray('${choiceID}', '${withinCheck}', '${subcat}'); moveToPricesArray(${choiceIDprice}, '${withinCheck}');">+ Add to Order</button>
        <br>


        `

    }
        
    ).join('')}


    `



    document.getElementById("app12").innerHTML = `
    ${Sides.map(function(pan) {
        var choiceID = pan.item;
        var choiceIDprice = pan.price;
        var checkClass = 'panBtns';
        var withinCheck = pan.item;
        var subcat = pan.subcategory;

        return `<div class='item'>
        <p id="choice" onclick="moveTojamsorderArray('${choiceID}', '${withinCheck}', '${subcat}'); moveToPricesArray(${choiceIDprice}, '${withinCheck}');">${pan.item}  -  $${pan.price}</p>
        </div>
        <br>
        <textarea id="${choiceID}" placeholder="Special Instructions (Extra or Additional Items Written in this Box May Result in Added Charges Upon Pickup): Please include type of bread, how eggs should be cooked, etc."></textarea><br><br>
        <button id="panCon" type="submit" class="confirm" onclick="moveTojamsorderArray('${choiceID}', '${withinCheck}', '${subcat}'); moveToPricesArray(${choiceIDprice}, '${withinCheck}');">+ Add to Order</button>
        <br>


        `

    }
        
    ).join('')}


    `

    document.getElementById("app13").innerHTML = `
    ${BreakfastMunchies.map(function(pan) {
        var choiceID = pan.item;
        var choiceIDprice = pan.price;
        var checkClass = 'panBtns';
        var withinCheck = pan.item;
        var subcat = pan.subcategory;

        return `<div class='item'>
        <p id="choice" onclick="moveTojamsorderArray('${choiceID}', '${withinCheck}', '${subcat}'); moveToPricesArray(${choiceIDprice}, '${withinCheck}');">${pan.item}  -  $${pan.price}</p>
        </div>
        <br>
        <input type="checkbox" class="${checkClass}" id="${pan.addons1}" name="${withinCheck}" value="${pan.addonprice1}">${pan.addons1} - $${pan.addonprice1}</input><br><br>
        <input type="checkbox" class="${checkClass}" id="${pan.addons2}" name="${withinCheck}" value="${pan.addonprice2}">${pan.addons2} - $${pan.addonprice2}</input><br><br>
        <textarea id="${choiceID}" placeholder="Special Instructions (Extra or Additional Items Written in this Box May Result in Added Charges Upon Pickup): Please include type of bread, how eggs should be cooked, etc."></textarea><br><br>
        <button id="panCon" type="submit" class="confirm" onclick="moveTojamsorderArray('${choiceID}', '${withinCheck}', '${subcat}'); moveToPricesArray(${choiceIDprice}, '${withinCheck}');">+ Add to Order</button>
        <br>


        `

    }
        
    ).join('')}


    `

    document.getElementById("app14").innerHTML = `
    ${KIDSMenu.map(function(pan) {
        var choiceID = pan.item;
        var choiceIDprice = pan.price;
        var checkClass = 'panBtns';
        var withinCheck = pan.item;
        var subcat = pan.subcategory;

        return `<div class='item'>
        <p id="choice" onclick="moveTojamsorderArray('${choiceID}', '${withinCheck}', '${subcat}'); moveToPricesArray(${choiceIDprice}, '${withinCheck}');">${pan.item}  -  $${pan.price}</p>
        </div>
        <br>
        <input type="checkbox" class="${checkClass}" id="${pan.addons1}" name="${withinCheck}" value="${pan.addonprice1}">${pan.addons1} - $${pan.addonprice1}</input><br><br>
        <input type="checkbox" class="${checkClass}" id="${pan.addons2}" name="${withinCheck}" value="${pan.addonprice2}">${pan.addons2} - $${pan.addonprice2}</input><br><br>
        <textarea id="${choiceID}" placeholder="Special Instructions (Extra or Additional Items Written in this Box May Result in Added Charges Upon Pickup): Please include type of bread, how eggs should be cooked, etc."></textarea><br><br>
        <button id="panCon" type="submit" class="confirm" onclick="moveTojamsorderArray('${choiceID}', '${withinCheck}', '${subcat}'); moveToPricesArray(${choiceIDprice}, '${withinCheck}');">+ Add to Order</button>
        <br>


        `

    }
        
    ).join('')}


    `

    document.getElementById("app15").innerHTML = `
    ${Drinks.map(function(pan) {
        var choiceID = pan.item;
        var choiceIDprice = pan.price;
        var checkClass = 'panBtns';
        var withinCheck = pan.item;
        var subcat = pan.subcategory;

        return `<div class='item'>
        <p id="choice" onclick="moveTojamsorderArray('${choiceID}', '${withinCheck}', '${subcat}'); moveToPricesArray(${choiceIDprice}, '${withinCheck}');">${pan.item}  -  $${pan.price}</p>
        </div>
        <br>
        <textarea id="${choiceID}" placeholder="Special Instructions (Extra or Additional Items Written in this Box May Result in Added Charges Upon Pickup): Please include type of bread, how eggs should be cooked, etc."></textarea><br><br>
        <button id="panCon" type="submit" class="confirm" onclick="moveTojamsorderArray('${choiceID}', '${withinCheck}', '${subcat}'); moveToPricesArray(${choiceIDprice}, '${withinCheck}');">+ Add to Order</button>
        <br>


        `

    }
        
    ).join('')}


    `

    /////////////////////////////////////////////////////////////////
    document.getElementById("lapp1").innerHTML = `
    ${Starters.map(function(pan) {
        var choiceID = pan.item;
        var choiceIDprice = pan.price;
        var checkClass = 'panBtns';
        var withinCheck = pan.item;
        var subcat = pan.subcategory;

        return `<div class='item'>
        <p id="choice" onclick="moveTojamsorderArray('${choiceID}', '${withinCheck}', '${subcat}'); moveToPricesArray(${choiceIDprice}, '${withinCheck}');">${pan.item}  -  $${pan.price}</p>
        </div>
        <br>
        <textarea id="${choiceID}" placeholder="Special Instructions: Please include preferred salad dressing, type of cheese, etc."></textarea><br><br>
        <button id="panCon" type="submit" class="confirm" onclick="moveTojamsorderArray('${choiceID}', '${withinCheck}', '${subcat}'); moveToPricesArray(${choiceIDprice}, '${withinCheck}');">+ Add to Order</button>
        <br>


        `

    }
        
    ).join('')}


    `

    document.getElementById("lapp2").innerHTML = `
    ${Soups.map(function(pan) {
        var choiceID = pan.item;
        var choiceIDprice = pan.price;
        var checkClass = 'panBtns';
        var withinCheck = pan.item;
        var subcat = pan.subcategory;

        return `<div class='item'>
                <p id="choice" onclick="moveTojamsorderArray('${choiceID}', '${withinCheck}', '${subcat}'); moveToPricesArray(${choiceIDprice}, '${withinCheck}');">${pan.item}  -  $${pan.price}</p>
        </div>
        <br>
        <textarea id="${choiceID}" placeholder="Special Instructions (Extra or Additional Items Written in this Box May Result in Added Charges Upon Pickup): Please include type of bread, how eggs should be cooked, etc."></textarea><br><br>
        <button id="panCon" type="submit" class="confirm" onclick="moveTojamsorderArray('${choiceID}', '${withinCheck}', '${subcat}'); moveToPricesArray(${choiceIDprice}, '${withinCheck}');">+ Add to Order</button>
        <br>


        `

    }
        
    ).join('')}


    `

    document.getElementById("lapp3").innerHTML = `
    ${Salads.map(function(pan) {
        var choiceID = pan.item;
        var choiceIDprice = pan.price;
        var checkClass = 'panBtns';
        var withinCheck = pan.item;
        var subcat = pan.subcategory;

        return `<div class='item'>
                <p id="choice" onclick="moveTojamsorderArray('${choiceID}', '${withinCheck}', '${subcat}'); moveToPricesArray(${choiceIDprice}, '${withinCheck}');">${pan.item}  -  $${pan.price}</p>
        </div>
        <p>${pan.description}</p>
        <br>
        <input type="checkbox" class="${checkClass}" id="${pan.addons1}" name="${withinCheck}" value="${pan.addonprice1}">${pan.addons1} - $${pan.addonprice1}</input><br><br>
        <input type="checkbox" class="${checkClass}" id="${pan.addons2}" name="${withinCheck}" value="${pan.addonprice2}">${pan.addons2} - $${pan.addonprice2}</input><br><br>
        <textarea id="${choiceID}" placeholder="Special Instructions (Extra or Additional Items Written in this Box May Result in Added Charges Upon Pickup): Please include type of bread, how eggs should be cooked, etc."></textarea><br><br>
        <button id="panCon" type="submit" class="confirm" onclick="moveTojamsorderArray('${choiceID}', '${withinCheck}', '${subcat}'); moveToPricesArray(${choiceIDprice}, '${withinCheck}');">+ Add to Order</button>
        <br>


        `

    }
        
    ).join('')}


    `

    document.getElementById("lapp4").innerHTML = `
    ${SaladPlatters.map(function(pan) {
        var choiceID = pan.item;
        var choiceIDprice = pan.price;
        var checkClass = 'panBtns';
        var withinCheck = pan.item;
        var subcat = pan.subcategory;

        return `<div class='item'>
                <p id="choice" onclick="moveTojamsorderArray('${choiceID}', '${withinCheck}', '${subcat}'); moveToPricesArray(${choiceIDprice}, '${withinCheck}');">${pan.item}  -  $${pan.price}</p>
        </div>
        <br>
        <textarea id="${choiceID}" placeholder="Special Instructions (Extra or Additional Items Written in this Box May Result in Added Charges Upon Pickup): Please include type of bread, how eggs should be cooked, etc."></textarea><br><br>
        <button id="panCon" type="submit" class="confirm" onclick="moveTojamsorderArray('${choiceID}', '${withinCheck}', '${subcat}'); moveToPricesArray(${choiceIDprice}, '${withinCheck}');">+ Add to Order</button>
        <br>


        `

    }
        
    ).join('')}


    `

    document.getElementById("lapp5").innerHTML = `
    ${SaladBowls.map(function(pan) {
        var choiceID = pan.item;
        var choiceIDprice = pan.price;
        var checkClass = 'panBtns';
        var withinCheck = pan.item;
        var subcat = pan.subcategory;

        return `<div class='item'>
                <p id="choice" onclick="moveTojamsorderArray('${choiceID}', '${withinCheck}', '${subcat}'); moveToPricesArray(${choiceIDprice}, '${withinCheck}');">${pan.item}  -  $${pan.price}</p>
        </div>
        <br>
        <textarea id="${choiceID}" placeholder="Special Instructions (Extra or Additional Items Written in this Box May Result in Added Charges Upon Pickup): Please include type of bread, how eggs should be cooked, etc."></textarea><br><br>
        <button id="panCon" type="submit" class="confirm" onclick="moveTojamsorderArray('${choiceID}', '${withinCheck}', '${subcat}'); moveToPricesArray(${choiceIDprice}, '${withinCheck}');">+ Add to Order</button>
        <br>


        `

    }
        
    ).join('')}


    `

    document.getElementById("lapp6").innerHTML = `
    ${ColdSandwiches.map(function(pan) {
        var choiceID = pan.item;
        var choiceIDprice = pan.price;
        var checkClass = 'panBtns';
        var withinCheck = pan.item;
        var subcat = pan.subcategory;

        return `<div class='item'>
                <p id="choice" onclick="moveTojamsorderArray('${choiceID}', '${withinCheck}', '${subcat}'); moveToPricesArray(${choiceIDprice}, '${withinCheck}');">${pan.item}  -  $${pan.price}</p>
        </div>
        <br>
        <input type="checkbox" class="${checkClass}" id="${pan.addons1}" name="${withinCheck}" value="${pan.addonprice1}">${pan.addons1} - $${pan.addonprice1}</input><br><br>
        <textarea id="${choiceID}" placeholder="Special Instructions (Extra or Additional Items Written in this Box May Result in Added Charges Upon Pickup): Please include type of bread, how eggs should be cooked, etc."></textarea><br><br>
        <button id="panCon" type="submit" class="confirm" onclick="moveTojamsorderArray('${choiceID}', '${withinCheck}', '${subcat}'); moveToPricesArray(${choiceIDprice}, '${withinCheck}');">+ Add to Order</button>
        <br>


        `

    }
        
    ).join('')}


    `

    document.getElementById("lapp7").innerHTML = `
    ${OpenHotSandwiches.map(function(pan) {
        var choiceID = pan.item;
        var choiceIDprice = pan.price;
        var checkClass = 'panBtns';
        var withinCheck = pan.item;
        var subcat = pan.subcategory;

        return `<div class='item'>
                <p id="choice" onclick="moveTojamsorderArray('${choiceID}', '${withinCheck}', '${subcat}'); moveToPricesArray(${choiceIDprice}, '${withinCheck}');">${pan.item}  -  $${pan.price}</p>
        </div>
        <br>
        <textarea id="${choiceID}" placeholder="Special Instructions (Extra or Additional Items Written in this Box May Result in Added Charges Upon Pickup): Please include type of bread, how eggs should be cooked, etc."></textarea><br><br>
        <button id="panCon" type="submit" class="confirm" onclick="moveTojamsorderArray('${choiceID}', '${withinCheck}', '${subcat}'); moveToPricesArray(${choiceIDprice}, '${withinCheck}');">+ Add to Order</button>
        <br>


        `

    }
        
    ).join('')}


    `

    document.getElementById("lapp8").innerHTML = `
    ${ClubSandwiches.map(function(pan) {
        var choiceID = pan.item;
        var choiceIDprice = pan.price;
        var checkClass = 'panBtns';
        var withinCheck = pan.item;
        var subcat = pan.subcategory;

        return `<div class='item'>
                <p id="choice" onclick="moveTojamsorderArray('${choiceID}', '${withinCheck}', '${subcat}'); moveToPricesArray(${choiceIDprice}, '${withinCheck}');">${pan.item}  -  $${pan.price}</p>
        </div>
        <br>
        <input type="checkbox" class="${checkClass}" id="${pan.addons1}" name="${withinCheck}" value="${pan.addonprice1}">${pan.addons1} - $${pan.addonprice1}</input><br><br>
        <textarea id="${choiceID}" placeholder="Special Instructions (Extra or Additional Items Written in this Box May Result in Added Charges Upon Pickup): Please include type of bread, how eggs should be cooked, etc."></textarea><br><br>
        <button id="panCon" type="submit" class="confirm" onclick="moveTojamsorderArray('${choiceID}', '${withinCheck}', '${subcat}'); moveToPricesArray(${choiceIDprice}, '${withinCheck}');">+ Add to Order</button>
        <br>


        `

    }
        
    ).join('')}


    `

    document.getElementById("lapp9").innerHTML = `
    ${HotSandwiches.map(function(pan) {
        var choiceID = pan.item;
        var choiceIDprice = pan.price;
        var checkClass = 'panBtns';
        var withinCheck = pan.item;
        var subcat = pan.subcategory;

        return `<div class='item'>
                <p id="choice" onclick="moveTojamsorderArray('${choiceID}', '${withinCheck}', '${subcat}'); moveToPricesArray(${choiceIDprice}, '${withinCheck}');">${pan.item}  -  $${pan.price}</p>
        </div>
        <br>
        <input type="checkbox" class="${checkClass}" id="${pan.addons1}" name="${withinCheck}" value="${pan.addonprice1}">${pan.addons1} - $${pan.addonprice1}</input><br><br>
        <textarea id="${choiceID}" placeholder="Special Instructions (Extra or Additional Items Written in this Box May Result in Added Charges Upon Pickup): Please include type of bread, how eggs should be cooked, etc."></textarea><br><br>
        <button id="panCon" type="submit" class="confirm" onclick="moveTojamsorderArray('${choiceID}', '${withinCheck}', '${subcat}'); moveToPricesArray(${choiceIDprice}, '${withinCheck}');">+ Add to Order</button>
        <br>


        `

    }
        
    ).join('')}


    `

    document.getElementById("lapp10").innerHTML = `
    ${ClassicFavorites.map(function(pan) {
        var choiceID = pan.item;
        var choiceIDprice = pan.price;
        var checkClass = 'panBtns';
        var withinCheck = pan.item;
        var subcat = pan.subcategory;

        return `<div class='item'>
                <p id="choice" onclick="moveTojamsorderArray('${choiceID}', '${withinCheck}', '${subcat}'); moveToPricesArray(${choiceIDprice}, '${withinCheck}');">${pan.item}  -  $${pan.price}</p>
        </div>
        <br>
        <textarea id="${choiceID}" placeholder="Special Instructions (Extra or Additional Items Written in this Box May Result in Added Charges Upon Pickup): Please include type of bread, how eggs should be cooked, etc."></textarea><br><br>
        <button id="panCon" type="submit" class="confirm" onclick="moveTojamsorderArray('${choiceID}', '${withinCheck}', '${subcat}'); moveToPricesArray(${choiceIDprice}, '${withinCheck}');">+ Add to Order</button>
        <br>


        `

    }
        
    ).join('')}


    `

    document.getElementById("lapp11").innerHTML = `
    ${Burgers.map(function(pan) {
        var choiceID = pan.item;
        var choiceIDprice = pan.price;
        var checkClass = 'panBtns';
        var withinCheck = pan.item;
        var subcat = pan.subcategory;

        return `<div class='item'>
                <p id="choice" onclick="moveTojamsorderArray('${choiceID}', '${withinCheck}', '${subcat}'); moveToPricesArray(${choiceIDprice}, '${withinCheck}');">${pan.item}  -  $${pan.price}</p>
        </div>
        <br>
        <input type="checkbox" class="${checkClass}" id="${pan.addons1}" name="${withinCheck}" value="${pan.addonprice1}">${pan.addons1} - $${pan.addonprice1}</input><br><br>
        <input type="checkbox" class="${checkClass}" id="${pan.addons2}" name="${withinCheck}" value="${pan.addonprice2}">${pan.addons2} - $${pan.addonprice2}</input><br><br>
        <input type="checkbox" class="${checkClass}" id="${pan.addons3}" name="${withinCheck}" value="${pan.addonprice3}">${pan.addons3} - $${pan.addonprice3}</input><br><br>
        <textarea id="${choiceID}" placeholder="Special Instructions (Extra or Additional Items Written in this Box May Result in Added Charges Upon Pickup): Please include type of bread, how eggs should be cooked, etc."></textarea><br><br>
        <button id="panCon" type="submit" class="confirm" onclick="moveTojamsorderArray('${choiceID}', '${withinCheck}', '${subcat}'); moveToPricesArray(${choiceIDprice}, '${withinCheck}');">+ Add to Order</button>
        <br>


        `

    }
        
    ).join('')}


    `

    document.getElementById("lapp12").innerHTML = `
    ${Italian.map(function(pan) {
        var choiceID = pan.item;
        var choiceIDprice = pan.price;
        var checkClass = 'panBtns';
        var withinCheck = pan.item;
        var subcat = pan.subcategory;

        return `<div class='item'>
                <p id="choice" onclick="moveTojamsorderArray('${choiceID}', '${withinCheck}', '${subcat}'); moveToPricesArray(${choiceIDprice}, '${withinCheck}');">${pan.item}  -  $${pan.price}</p>
        </div>
        <br>
        <input type="checkbox" class="${checkClass}" id="${pan.addons1}" name="${withinCheck}" value="${pan.addonprice1}">${pan.addons1} - $${pan.addonprice1}</input><br><br>
        <input type="checkbox" class="${checkClass}" id="${pan.addons2}" name="${withinCheck}" value="${pan.addonprice2}">${pan.addons2} - $${pan.addonprice2}</input><br><br>
        <input type="checkbox" class="${checkClass}" id="${pan.addons3}" name="${withinCheck}" value="${pan.addonprice3}">${pan.addons3} - $${pan.addonprice3}</input><br><br>
        <input type="checkbox" class="${checkClass}" id="${pan.addons4}" name="${withinCheck}" value="${pan.addonprice4}">${pan.addons4} - $${pan.addonprice4}</input><br><br>
        <input type="checkbox" class="${checkClass}" id="${pan.addons5}" name="${withinCheck}" value="${pan.addonprice5}">${pan.addons5} - $${pan.addonprice5}</input><br><br>
        <input type="checkbox" class="${checkClass}" id="${pan.addons6}" name="${withinCheck}" value="${pan.addonprice6}">${pan.addons6} - $${pan.addonprice6}</input><br><br>
        <input type="checkbox" class="${checkClass}" id="${pan.addons7}" name="${withinCheck}" value="${pan.addonprice7}">${pan.addons7} - $${pan.addonprice7}</input><br><br>
        <textarea id="${choiceID}" placeholder="Special Instructions (Extra or Additional Items Written in this Box May Result in Added Charges Upon Pickup): Please include type of bread, how eggs should be cooked, etc."></textarea><br><br>
        <button id="panCon" type="submit" class="confirm" onclick="moveTojamsorderArray('${choiceID}', '${withinCheck}', '${subcat}'); moveToPricesArray(${choiceIDprice}, '${withinCheck}');">+ Add to Order</button>
        <br>


        `

    }
        
    ).join('')}


    `

    document.getElementById("lapp13").innerHTML = `
    ${FriedSeafood.map(function(pan) {
        var choiceID = pan.item;
        var choiceIDprice = pan.price;
        var checkClass = 'panBtns';
        var withinCheck = pan.item;
        var subcat = pan.subcategory;

        return `<div class='item'>
                <p id="choice" onclick="moveTojamsorderArray('${choiceID}', '${withinCheck}', '${subcat}'); moveToPricesArray(${choiceIDprice}, '${withinCheck}');">${pan.item}  -  $${pan.price}</p>
        </div>
        <br>
        <textarea id="${choiceID}" placeholder="Special Instructions (Extra or Additional Items Written in this Box May Result in Added Charges Upon Pickup): Please include type of bread, how eggs should be cooked, etc."></textarea><br><br>
        <button id="panCon" type="submit" class="confirm" onclick="moveTojamsorderArray('${choiceID}', '${withinCheck}', '${subcat}'); moveToPricesArray(${choiceIDprice}, '${withinCheck}');">+ Add to Order</button>
        <br>


        `

    }
        
    ).join('')}


    `


    document.getElementById("lapp15").innerHTML = `
    ${KIDSlunch.map(function(pan) {
        var choiceID = pan.item;
        var choiceIDprice = pan.price;
        var checkClass = 'panBtns';
        var withinCheck = pan.item;
        var subcat = pan.subcategory;

        return `<div class='item'>
                <p id="choice" onclick="moveTojamsorderArray('${choiceID}', '${withinCheck}', '${subcat}'); moveToPricesArray(${choiceIDprice}, '${withinCheck}');">${pan.item}  -  $${pan.price}</p>
        </div>
        <br>
        <textarea id="${choiceID}" placeholder="Special Instructions (Extra or Additional Items Written in this Box May Result in Added Charges Upon Pickup): Please include type of bread, how eggs should be cooked, etc."></textarea><br><br>
        <button id="panCon" type="submit" class="confirm" onclick="moveTojamsorderArray('${choiceID}', '${withinCheck}', '${subcat}'); moveToPricesArray(${choiceIDprice}, '${withinCheck}');">+ Add to Order</button>
        <br>


        `

    }
        
    ).join('')}


    `


    document.getElementById("lapp17").innerHTML = `
    ${SidesLunch.map(function(pan) {
        var choiceID = pan.item;
        var choiceIDprice = pan.price;
        var checkClass = 'panBtns';
        var withinCheck = pan.item;
        var subcat = pan.subcategory;

        return `<div class='item'>
                <p id="choice" onclick="moveTojamsorderArray('${choiceID}', '${withinCheck}', '${subcat}'); moveToPricesArray(${choiceIDprice}, '${withinCheck}');">${pan.item}  -  $${pan.price}</p>
        </div>
        <br>
        <textarea id="${choiceID}" placeholder="Special Instructions (Extra or Additional Items Written in this Box May Result in Added Charges Upon Pickup): Please include type of bread, how eggs should be cooked, etc."></textarea><br><br>
        <button id="panCon" type="submit" class="confirm" onclick="moveTojamsorderArray('${choiceID}', '${withinCheck}', '${subcat}'); moveToPricesArray(${choiceIDprice}, '${withinCheck}');">+ Add to Order</button>
        <br>


        `

    }
        
    ).join('')}


    `

    document.getElementById("lapp18").innerHTML = `
    ${Desserts.map(function(pan) {
        var choiceID = pan.item;
        var choiceIDprice = pan.price;
        var checkClass = 'panBtns';
        var withinCheck = pan.item;
        var subcat = pan.subcategory;

        return `<div class='item'>
                <p id="choice" onclick="moveTojamsorderArray('${choiceID}', '${withinCheck}', '${subcat}'); moveToPricesArray(${choiceIDprice}, '${withinCheck}');">${pan.item}  -  $${pan.price}</p>
        </div>
        <br>
        <textarea id="${choiceID}" placeholder="Special Instructions (Extra or Additional Items Written in this Box May Result in Added Charges Upon Pickup): Please include type of bread, how eggs should be cooked, etc."></textarea><br><br>
        <button id="panCon" type="submit" class="confirm" onclick="moveTojamsorderArray('${choiceID}', '${withinCheck}', '${subcat}'); moveToPricesArray(${choiceIDprice}, '${withinCheck}');">+ Add to Order</button>
        <br>


        `

    }
        
    ).join('')}


    `
    document.getElementById("lapp19").innerHTML = `
    ${DrinksLunch.map(function(pan) {
        var choiceID = pan.item;
        var choiceIDprice = pan.price;
        var checkClass = 'panBtns';
        var withinCheck = pan.item;
        var subcat = pan.subcategory;

        return `<div class='item'>
                <p id="choice" onclick="moveTojamsorderArray('${choiceID}', '${withinCheck}', '${subcat}'); moveToPricesArray(${choiceIDprice}, '${withinCheck}');">${pan.item}  -  $${pan.price}</p>
        </div>
        <br>
        <textarea id="${choiceID}" placeholder="Special Instructions (Extra or Additional Items Written in this Box May Result in Added Charges Upon Pickup): Please include type of bread, how eggs should be cooked, etc."></textarea><br><br>
        <button id="panCon" type="submit" class="confirm" onclick="moveTojamsorderArray('${choiceID}', '${withinCheck}', '${subcat}'); moveToPricesArray(${choiceIDprice}, '${withinCheck}');">+ Add to Order</button>
        <br>


        `

    }
        
    ).join('')}


    `

    

    

    /*document.getElementById("panCon").addEventListener("click", function() {
        

    var checkboxes = document.getElementsByName(pan.item);
    var special = " (Special Instruction(s): " + document.getElementById(pan.item).value + ")" ;
    for (i=0; i<checkboxes.length; i++) {
        selectedAddon = selectedAddon + " addon: " + checkboxes[i].id;
        selectedAddonPrice = selectedAddonPrice + checkboxes[i].value;
    }
    var completeItem = pan.item + selectedAddon + special;
    var completePrice = pan.price + selectedAddonPrice;
    prices = prices + completePrice;
    jamsorder = jamsorder + completeItem;
    console.log(jamsorder);
    console.log(prices);

}
    )*/

    



function oBreakfast() {
    var selectors = document.getElementsByClassName("selector");
    var apps = document.getElementsByClassName('app');
    var annoyingPieceOfShit = document.getElementById('lunchSubCats');
    
    if (s == false){
        breakbtn.innerText = 'Breakfast ▴';
    for(var i = 0, length = selectors.length; i < length; i++) {

        apps[i].style.opacity = '1';
        apps[i].style.left = '15%';
        annoyingPieceOfShit.style.left = '-100%';
        selectors[i].style.display= 'block';

}
        document.getElementById("lunch").style.left = '-150%';
            s = true;
        }
        else {
                
            breakbtn.innerText = 'Breakfast ▾';
                for(var i = 0, length = selectors.length; i < length; i++) {
        
                    apps[i].style.opacity = '0';
                    apps[i].style.left = '-100%';

                    selectors[i].style.display= 'none';
                    
 
                    annoyingPieceOfShit.style.left = '10%'
                    


                        }
                        if(window.innerWidth < 900){
                        document.getElementById("lunch").style.left = '0%';    
                        }
                        if(window.innerWidth > 900){
                        document.getElementById("lunch").style.left = '5%';
                        }
                        s= false;
                    }
    }

function oLunch() {
                var lselectors = document.getElementsByClassName("lselector");
                var lapps = document.getElementsByClassName('lapp');
                var annoyingPieceOfShit2 = document.getElementById('breakfastSubCats');
                
                if (fs == false){
                    lunchbtn.innerText = 'Lunch ▴';
                for(var i = 0, length = lselectors.length; i < length; i++) {
            

                    lapps[i].style.opacity = '1';
                    lapps[i].style.left = '15%';
                    annoyingPieceOfShit2.style.left = '-100%';
                    lselectors[i].style.display= 'block';

            }
                    document.getElementById("breakfast").style.left = '-150%';
                        fs = true;
                    }
                    else {
                            
                        lunchbtn.innerText = 'Lunch ▾';
                            for(var i = 0, length = lselectors.length; i < length; i++) {
                    
 
                                lapps[i].style.opacity = '0';
                                lapps[i].style.left = '-100%';
                                annoyingPieceOfShit2.style.left = '10%';
                                lselectors[i].style.display= 'none';

            
                                    }
                                    if(window.innerWidth < 700){
                                    document.getElementById("breakfast").style.left = '0%';    
                                    }
                                    if(window.innerWidth > 700){
                                    document.getElementById("breakfast").style.left = '5%';
                                    }
                                    fs= false;
                                }
                        }

            let y1= false; //boolean determining whether or not 
            let y2= false; //boolean determining whether or not
            let y3= false; //boolean determining whether or not
            let y4= false; //boolean determining whether or not
            let y5= false; //boolean determining whether or not
            let y6= false; //boolean determining whether or not
            let y7= false; //boolean determining whether or not
            let y8= false; //boolean determining whether or not
            let y9= false; //boolean determining whether or not
            let y10= false; //boolean determining whether or not
            let y11= false; //boolean determining whether or not
            let y12= false; //boolean determining whether or not
            let y13= false; //boolean determining whether or not
            let y14= false; //boolean determining whether or not
            let y15= false; //boolean determining whether or not
            let y16= false; //boolean determining whether or not

            let z1= false; //boolean determining whether or not 
            let z2= false; //boolean determining whether or not
            let z3= false; //boolean determining whether or not
            let z4= false; //boolean determining whether or not
            let z5= false; //boolean determining whether or not
            let z6= false; //boolean determining whether or not
            let z7= false; //boolean determining whether or not
            let z8= false; //boolean determining whether or not
            let z9= false; //boolean determining whether or not
            let z10= false; //boolean determining whether or not
            let z11= false; //boolean determining whether or not
            let z12= false; //boolean determining whether or not
            let z13= false; //boolean determining whether or not
            let z14= false; //boolean determining whether or not
            let z15= false; //boolean determining whether or not
            let z16= false; //boolean determining whether or not
            let z17= false; //boolean determining whether or not
            let z18= false; //boolean determining whether or not
            let z19= false; //boolean determining whether or not
            let z20= false; //boolean determining whether or not
            let z21= false; //boolean determining whether or not
            let z22= false; //boolean determining whether or not
            let z23= false; //boolean determining whether or not


function foods(addons) {
    return `

    ${addons.map(function(addons) {
        return `<label class="left" id="${addons}">${addons}</label><br>`

    }).join('')}

    `

}

function foodprice() {
    return `

    ${Pancakes.map(function(food) {
        return `<button class="right" id="${addonprice}">${addonprice}</button><br>`

    }).join('')}

    `


}




            var activation = 0;
/*     function addToSelAdd(addon, addonprice) {

                if (activation == 0) {
                var revertMiddleMan = selectedAddonMiddleMan;
                var revertMiddleManPrice = selectedAddonPriceMiddleMan;

                selectedAddonMiddleMan = selectedAddonMiddleMan + " addon: " + addon;
                selectedAddonPriceMiddleMan = selectedAddonPriceMiddle + addonprice;
                console.log(selectedAddonMiddleMan);
                console.log(selectedAddonPriceMiddleMan);
                activation =1;
                }

                if (activation == 1 ){
                    selectedAddonMiddleMan = revertMiddleMan;
                    selectedAddonPriceMiddleMan = revertMiddleManPrice;
                    activation = 0;
                }

                //second btn
                if (activation == 2) {
                    var revertMiddleMan = selectedAddonMiddleMan;
                    var revertMiddleManPrice = selectedAddonPriceMiddleMan;
    
                    selectedAddonMiddleMan = selectedAddonMiddleMan + " addon: " + addon;
                    selectedAddonPriceMiddleMan = selectedAddonPriceMiddle + addonprice;
                    console.log(selectedAddonMiddleMan);
                    console.log(selectedAddonPriceMiddleMan);
                    activation =3;
                    }
    
                    if (activation == 3 ){
                        selectedAddonMiddleMan = revertMiddleMan;
                        selectedAddonPriceMiddleMan = revertMiddleManPrice;
                        activation = 2;
                    }
                    //third btn
                    if (activation == 4) {
                        var revertMiddleMan = selectedAddonMiddleMan;
                        var revertMiddleManPrice = selectedAddonPriceMiddleMan;
        
                        selectedAddonMiddleMan = selectedAddonMiddleMan + " addon: " + addon;
                        selectedAddonPriceMiddleMan = selectedAddonPriceMiddle + addonprice;
                        console.log(selectedAddonMiddleMan);
                        console.log(selectedAddonPriceMiddleMan);
                        activation =5;
                        }
        
                        if (activation == 5 ){
                            selectedAddonMiddleMan = revertMiddleMan;
                            selectedAddonPriceMiddleMan = revertMiddleManPrice;
                            activation = 4;
                        }
        
                        //fourth btn
                        if (activation == 6) {
                            var revertMiddleMan = selectedAddonMiddleMan;
                            var revertMiddleManPrice = selectedAddonPriceMiddleMan;
            
                            selectedAddonMiddleMan = selectedAddonMiddleMan + " addon: " + addon;
                            selectedAddonPriceMiddleMan = selectedAddonPriceMiddle + addonprice;
                            console.log(selectedAddonMiddleMan);
                            console.log(selectedAddonPriceMiddleMan);
                            activation =7;
                            }
            
                            if (activation == 7 ){
                                selectedAddonMiddleMan = revertMiddleMan;
                                selectedAddonPriceMiddleMan = revertMiddleManPrice;
                                activation = 6;
                            }

            }*/
            

function separateArrays() {
    for (i = 0; i < jamsorder.length; i++) {
        const jamsorderitem = jamsorder[i];
        console.log(jamsorderitem);

    }
}
/*function disFoot() {
    if (y16 == false) {
        document.getElementById('footerJams').style.bottom='-30%';
        document.getElementById('footerJams').style.opacity='0';
        document.getElementById('disarrow').innerText = '▲';
        y16=true;
    } 
    if (y16 == true) {
        document.getElementById('footerJams').style.bottom='0%';
        document.getElementById('footerJams').style.opacity='.75';
        document.getElementById('disarrow').innerText = '▼';
        y16=false;
    }
}*/

function revItems() {

$("button").click(function() {

        selectedSubcat = this.id;
        console.log(selectedSubcat);

        if (selectedSubcat == 'pancakes') {
            if (y1 == false){
            document.getElementById('app1').style.display = 'block';
            y1 = true;
            } else{
            document.getElementById('app1').style.display = 'none';
            y1= false;

            }
        }

        if (selectedSubcat == 'eggs') {
            if (y2 == false){
            document.getElementById('app2').style.display = 'block';
            y2 = true;
            } else{
            document.getElementById('app2').style.display = 'none';
            y2= false;

            }
        }

        if (selectedSubcat == 'FrenchToast') {
            if (y3 == false){
            document.getElementById('app3').style.display = 'block';
            y3 = true;
            } else{
            document.getElementById('app3').style.display = 'none';
            y3= false;

            }
        }
        if (selectedSubcat == 'CornedBeefHash') {
            if (y4 == false){
            document.getElementById('app4').style.display = 'block';
            y4 = true;
            } else{
            document.getElementById('app4').style.display = 'none';
            y4= false;

            }
        }
        if (selectedSubcat == 'Sandwiches') {
            if (y5 == false){
            document.getElementById('app5').style.display = 'block';
            y5 = true;
            } else{
            document.getElementById('app5').style.display = 'none';
            y5= false;

            }
        }
        if (selectedSubcat == 'Omelettes') {
            if (y6 == false){
            document.getElementById('app6').style.display = 'block';
            y6 = true;
            } else{
            document.getElementById('app6').style.display = 'none';
            y6= false;

            }
        }

        if (selectedSubcat == 'SpecialityOmelettes') {
            if (y7 == false){
            document.getElementById('app7').style.display = 'block';
            y7 = true;
            } else{
            document.getElementById('app7').style.display = 'none';
            y7= false;

            }
        }
        if (selectedSubcat == 'NotSoBenedicts') {
            if (y8 == false){
            document.getElementById('app8').style.display = 'block';
            y8 = true;
            } else{
            document.getElementById('app8').style.display = 'none';
            y8= false;

            }
        }
        if (selectedSubcat == 'SeafoodBreakfasts') {
            if (y9 == false){
            document.getElementById('app9').style.display = 'block';
            y9 = true;
            } else{
            document.getElementById('app9').style.display = 'none';
            y9= false;

            }
        }

        if (selectedSubcat == 'CombinationBreakfasts') {
            if (y10 == false){
            document.getElementById('app10').style.display = 'block';
            y10 = true;
            } else{
            document.getElementById('app10').style.display = 'none';
            y10= false;

            }
        }
        if (selectedSubcat == 'FamilyBreakfasts') {
            if (y11 == false){
            document.getElementById('app11').style.display = 'block';
            y11 = true;
            } else{
            document.getElementById('app11').style.display = 'none';
            y11= false;

            }
        }
        if (selectedSubcat == 'Sides') {
            if (y12 == false){
            document.getElementById('app12').style.display = 'block';
            y12 = true;
            } else{
            document.getElementById('app12').style.display = 'none';
            y12= false;

            }
        }
        if (selectedSubcat == 'BreakfastMunchies') {
            if (y13 == false){
            document.getElementById('app13').style.display = 'block';
            y13 = true;
            } else{
            document.getElementById('app13').style.display = 'none';
            y13= false;

            }
        }

        if (selectedSubcat == 'KIDSMenu') {
            if (y14 == false){
            document.getElementById('app14').style.display = 'block';
            y14 = true;
            } else{
            document.getElementById('app14').style.display = 'none';
            y14= false;

            }
        }
        if (selectedSubcat == 'Drinks') {
            if (y15 == false){
            document.getElementById('app15').style.display = 'block';

            y15 = true;
            } else{
            document.getElementById('app15').style.display = 'none';
            y15= false;

            }
        }
///////////////////////////////
if (selectedSubcat == 'starters') {
    if (z1 == false){
    document.getElementById('lapp1').style.display = 'block';
    z1 = true;
    } else{
    document.getElementById('lapp1').style.display = 'none';
    z1= false;

    }
}

if (selectedSubcat == 'soups') {
    if (z2 == false){
    document.getElementById('lapp2').style.display = 'block';
    z2 = true;
    } else{
    document.getElementById('lapp2').style.display = 'none';
    z2= false;

    }
}

if (selectedSubcat == 'salads') {
    if (z3 == false){
    document.getElementById('lapp3').style.display = 'block';
    z3 = true;
    } else{
    document.getElementById('lapp3').style.display = 'none';
    z3= false;

    }
}

if (selectedSubcat == 'saladplatters') {
    if (z4 == false){
    document.getElementById('lapp4').style.display = 'block';
    z4 = true;
    } else{
    document.getElementById('lapp4').style.display = 'none';
    z4= false;

    }
}

if (selectedSubcat == 'saladbowls') {
    if (z5 == false){
    document.getElementById('lapp5').style.display = 'block';
    z5 = true;
    } else{
    document.getElementById('lapp5').style.display = 'none';
    z5= false;

    }
}

if (selectedSubcat == 'coldsandwiches') {
    if (z6 == false){
    document.getElementById('lapp6').style.display = 'block';
    z6 = true;
    } else{
    document.getElementById('lapp6').style.display = 'none';
    z6= false;

    }
}
//
if (selectedSubcat == 'openhotsandwiches') {
    if (z7 == false){
    document.getElementById('lapp7').style.display = 'block';
    z7 = true;
    } else{
    document.getElementById('lapp7').style.display = 'none';
    z7= false;

    }
}

if (selectedSubcat == 'clubsandwiches') {
    if (z8 == false){
    document.getElementById('lapp8').style.display = 'block';
    z8 = true;
    } else{
    document.getElementById('lapp8').style.display = 'none';
    z8= false;

    }
}

if (selectedSubcat == 'hotsandwiches') {
    if (z9 == false){
    document.getElementById('lapp9').style.display = 'block';
    z9 = true;
    } else{
    document.getElementById('lapp9').style.display = 'none';
    z9= false;

    }
}

if (selectedSubcat == 'classicfavorites') {
    if (z10 == false){
    document.getElementById('lapp10').style.display = 'block';
    z10 = true;
    } else{
    document.getElementById('lapp10').style.display = 'none';
    z10= false;

    }
}

if (selectedSubcat == 'burgers') {
    if (z11 == false){
    document.getElementById('lapp11').style.display = 'block';
    z11 = true;
    } else{
    document.getElementById('lapp11').style.display = 'none';
    z11= false;

    }
}

    const newLocal = 'italian';
if (selectedSubcat == newLocal) {
    if (z12 == false){
    document.getElementById('lapp12').style.display = 'block';
    z12 = true;
    } else{
    document.getElementById('lapp12').style.display = 'none';
    z12= false;

    }
}
        
if (selectedSubcat == 'friedseafood') {
    if (z13 == false){
    document.getElementById('lapp13').style.display = 'block';
    z13 = true;
    } else{
    document.getElementById('lapp13').style.display = 'none';
    z13= false;

    }
}

if (selectedSubcat == 'broiledseafood') {
    if (z14 == false){
    document.getElementById('lapp14').style.display = 'block';
    z14 = true;
    } else{
    document.getElementById('lapp14').style.display = 'none';
    z14= false;

    }
}

if (selectedSubcat == 'KIDSlunch') {
    if (z15 == false){
    document.getElementById('lapp15').style.display = 'block';
    z15 = true;
    } else{
    document.getElementById('lapp15').style.display = 'none';
    z15= false;

    }
}

if (selectedSubcat == 'jamsmunchies') {
    if (z16 == false){
    document.getElementById('lapp16').style.display = 'block';
    z16 = true;
    } else{
    document.getElementById('lapp16').style.display = 'none';
    z16= false;

    }
}

if (selectedSubcat == 'sideslunch') {
    if (z17 == false){
    document.getElementById('lapp17').style.display = 'block';
    z17 = true;
    } else{
    document.getElementById('lapp17').style.display = 'none';
    z17= false;

    }
}

if (selectedSubcat == 'desserts') {
    if (z18 == false){
    document.getElementById('lapp18').style.display = 'block';
    z18 = true;
    } else{
    document.getElementById('lapp18').style.display = 'none';
    z18= false;

    }
}
//
if (selectedSubcat == 'drinkslunch') {
    if (z19 == false){
    document.getElementById('lapp19').style.display = 'block';
    z19 = true;
    } else{
    document.getElementById('lapp19').style.display = 'none';
    z19= false;

    }
}

if (selectedSubcat == 'quartssoups') {
    if (z20 == false){
    document.getElementById('lapp20').style.display = 'block';
    z20 = true;
    } else{
    document.getElementById('lapp20').style.display = 'none';
    z20= false;

    }
}

if (selectedSubcat == 'quartssides') {
    if (z21 == false){
    document.getElementById('lapp21').style.display = 'block';
    z21 = true;
    } else{
    document.getElementById('lapp21').style.display = 'none';
    z21= false;

    }
}

if (selectedSubcat == 'quartssalads') {
    if (z22 == false){
    document.getElementById('lapp22').style.display = 'block';
    z22 = true;
    } else{
    document.getElementById('lapp22').style.display = 'none';
    z22= false;

    }
}

if (selectedSubcat == 'quartsdesserts') {
    if (z23 == false){
    document.getElementById('lapp23').style.display = 'block';
    z23 = true;
    } else{
    document.getElementById('lapp23').style.display = 'none';
    z23= false;

    }
}
    });

}
var jamsorderForm = document.getElementById("orderForm");
var jamsorderPrompt = document.getElementById("orderConfirmationPrompt");
var initialized = false;
var removedP = [];
var removedO = [];
var holdingCell;

function initializeOpHoldingCell() {

    //NO FORM JUST USE LOCAL STORAGE
    jamsorderPrompt.style.display = 'block';
    initialized = true;

    //create <h1>
    jamsorderPrompt.innerHTML = jamsorderPrompt.innerHTML + `
    <h1 id="jamsorderTitle">Order Confirmation:</h1>

    //create close btn
    jamsorderPrompt.innerHTML = jamsorderPrompt.innerHTML + `
    <p class="xout" onclick="jamsorderPrompt.style.display = 'none'">×</p>

    //display [jamsorder] and [prices] arrays
    for (i = 0; i < jamsorder.length; i++) {
        jamsorderPrompt.innerHTML = jamsorderPrompt.innerHTML + `
        <label class="label" id="${[i]}">${jamsorder[i]} - $${prices[i]}    </label><p id="closeeee" title="Delete Item" onclick="jamsorder.splice(${[i]}, 1); prices.splice(${[i]}, 1); updateOpHoldingCell(); console.log(jamsorder); console.log(prices)">×</p><br>
        `
    }
    sum = Math.floor(selectedPrice * 100) / 100;
    sum.toFixed(2);

    //display sum
    jamsorderPrompt.innerHTML = jamsorderPrompt.innerHTML + `
    <br>
    <label>Your Tax: $${establishTax()}</label><br><br>
    <label>Your Total: $${establishSum()}</label><br>
    <br>
    `
    //create submit button
    jamsorderPrompt.innerHTML = jamsorderPrompt.innerHTML + `
    <button class="btnbtn" onclick="ppCheckout();">Proceed to Checkout</button><br><br>
    <button class="btnbtn" onclick="pip();">Pay in Person</button><br><br><br><br><br>
    `
    itemCount = jamsorder.length;
    updateItemCount();
    }
function confirmOrder() {

    for (i = 0; i < removed.length; i++) {
        if (removedO[i] == false && removedP[i] == false) {
            completejamsorder = completejamsorder + removedO[i];
            completePrice = completePrice + removedP[i];
        }
        else {
            completejamsorder = completejamsorder + "DELETED ITEM";
            completePrice = completePrice + 0;

        }
}


}

var useremail;
var userphone;
var jamsordername;
var txt;
var txt2;

function ppCheckout() {
    
        document.getElementById('ppCheckout').style.left = '0%';
        document.getElementById('ppCheckout').style.opacity = '.85';

        var person = prompt('Enter a Name for the Order: ', '');
        if (person == null || person == "") {
        txt = "Unnamed User's Food Items:";
        txt2 = "Unnamed User's Order Total:"
        } else {
        txt = person + "'s " + "Food Items:";
        txt2 = person + "'s " + "Order Total:" 
        }
        document.getElementById("itemList").innerHTML = txt;

        for (i=0; i<jamsorder.length; i++){
            document.getElementById("foodItems").innerHTML = document.getElementById("foodItems").innerHTML + `<p>- ${jamsorder[i]}</p><br>`
            
        }

        document.getElementById("itemListSum").innerHTML = txt2;
        sum=0;
        document.getElementById("foodSum").innerHTML = '$' + `${establishSum()}
}

function updateOpHoldingCell() {
        //erase jamsorderPrompt
        jamsorderPrompt.innerHTML =  ``
        //create <h1>
        jamsorderPrompt.innerHTML = jamsorderPrompt.innerHTML + `
        <h1 id="orderTitle">Order Confirmation:</h1>
        
        `
        //create close btn
        jamsorderPrompt.innerHTML = jamsorderPrompt.innerHTML + `
        <p class="xout" onclick="jamsorderPrompt.style.display = 'none'">×</p>
    
    
    //display [jamsorder] and [prices] arrays
    for (i = 0; i < jamsorder.length; i++) {
        jamsorderPrompt.innerHTML = jamsorderPrompt.innerHTML + `
        <label class="label" id="${[i]}">${jamsorder[i]} - $${prices[i]}    </label><p id="closeeee" title="Delete Item" onclick="jamsorder.splice(${[i]}, 1); prices.splice(${[i]}, 1); updateOpHoldingCell(); console.log(jamsorder); console.log(prices)">×</p><br>
        `
    }
    establishSum();
    sum = Math.floor(selectedPrice * 100) / 100;
    sum.toFixed(2);

    //display sum
    jamsorderPrompt.innerHTML = jamsorderPrompt.innerHTML + `
    <br>
    <label>Your Tax: $${establishTax()}</label><br><br>
    <label>Your Total: $${establishSum()}</label>
    <br><br>
    `
    //create submit button
    jamsorderPrompt.innerHTML = jamsorderPrompt.innerHTML + `
    <button class="btnbtn" onclick="ppCheckout();">Proceed to Checkout</button><br><br>
    <button class="btnbtn" onclick="pip();">Pay in Person</button><br><br><br><br><br>
    `
    itemCount = jamsorder.length;
    updateItemCount();
}

function revOpHoldingCell() {
    if (initialized == false) {
        initializeOpHoldingCell();
        document.getElementById("orderConfirmationPrompt").style.display = 'block';
        jamsorderPrompt.style.display = 'block';
    }
        else {
        jamsorderPrompt.style.display = 'block';
        updateOpHoldingCell();
    }
    
}

function hideOpHoldingCell() {
    jamsorderPrompt.style.display = 'none';

}

var btnArray = [];

    function initiateBreakfast() {
        
        if (i==15) {
            console.log(i);
            return;

        }else{

        data.Breakfast.forEach(item => {
            // it's an object, so lets get its first key
            itemName = Object.keys(item)[i];

            btn = document.createElement("BUTTON");
            btn.setAttribute("onclick", "openSubCat(this.id);");
            btn.textContent = itemName + "▾";
            btn.value = itemName;
            btn.id = itemName;
            btn.className = "opener";
            //btn.addEventListener("click", openSubCat());
            menuStart.appendChild(btn);

            btn.style.transitionDuration =".5s";
            btn.style.position = "relative";
            btn.style.fontSize ="16px";
            btn.style.color = 'black';
            btn.style.width = '80%';
            btn.style.left = '10%';
            btn.style.padding = '15px 15px';
            /*btn.style.bjamsorderRadius = '15px';*/
            btn.style.cursor = 'pointer';
            btn.style.display = 'block';
            i++;
            initiateBreakfast();
          })}
    }


function openBreakfast() {
    console.log(data.Breakfast);


    initiateBreakfast();
    if (j==false){
        menuStart.style.display = 'block';
    j = true;
    document.getElementById("lunch").style.top = "215%";
    document.getElementById("breakfast").innerHTML ="Breakfast ▴";
    menuStart.style.left = "0%";
    
    } else{
        menuStart.style.display = 'none';

    j=false
        document.getElementById("lunch").style.top = "100%";
        document.getElementById("breakfast").innerHTML ="Breakfast ▾";
        menuStart.style.left = "0%";
        
    }
}

var s = false;

function openSubCat(opener) {
    console.log(opener);
    console.log(data['Breakfast'][opener]/*[u]*/);
    var helper = data.Breakfast;

    menuStart.style.transitionDuration = ".5s";
    menuStart.style.left = "-100%";

    if (s == false) {
    var div2 = document.createElement("div");
    div2.id = "itemsmsmsms";
    div2.style.top = "87.5%";
    div2.style.width = "100%";
    div2.style.height = "auto";
    div2.style.position = "absolute";
    
    } else {

    document.body.appendChild(div2);
    if (u==15) {
        console.log(u);
        return;
       
    }else{

    data['Breakfast'][opener]/*[u]*/.forEach(item => {
        // it's an object, so lets get its first key
        itemName = Object.keys(item)[u];

        btn2 = document.createElement("BUTTON");
        btn2.setAttribute("onclick", "openFormModal(this.id);");
        btn2.textContent = itemName + "▾";
        btn2.value = itemName;
        btn2.id = itemName;
        btn2.className = "itemmm";
        div2.appendChild(btn2);

        btn2.style.transitionDuration =".5s";
        btn2.style.position = "relative";
        btn2.style.fontSize ="16px";
        btn2.style.color = 'black';
        btn2.style.width = '80%';
        btn2.style.left = '10%';
        btn2.style.padding = '15px 15px';
        btn2.style.borderRadius = '15px';
        btn2.style.cursor = 'pointer';
        btn2.style.display = 'block';
        u++;
        s=true;
        openSubCat();
    })}}}
function resetCart() {
    itemCount = 0;
    updateItemCount();
    jamsorder = [];
    prices = [];
    sum = 0;
    console.log(itemCount);
    console.log(jamsorder);
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
    document.getElementById("modal").innerHTML = ``
    if (selectedItem == 'Crabby Patty') {
        console.log(selectedItem);
    document.getElementById("modal").innerHTML = `
    <h2>Specifics for this item:</h2>
    <br>
        <h3 id="selectedItem"></h3>
        <h3 id="selectedPrice"></h3>
            <br><br>
            <label>Special Instructions: <br><br><textarea id="q4" name="specInstr" value="" placeholder="Write specifics about your food here... Extra or Additional Items May Result in Added Charges Upon Pick Up"></textarea></label>
            <br><br><br>
            <button id="q5"  onclick="confirmSelection();">Confirm</button>
        
        <br><br><br>
        <button type="button" onclick="closeModal();">Delete Item & Exit</button>
    `}
    if (selectedItem == 'Jam Burger with Fried Onions and Peppers and Cheddar Cheese Sauce'){
        console.log(selectedItem);
        document.getElementById("modal").innerHTML = `
        <h2>Specifics for these items:</h2>
        <br>
            <h3 id="selectedItem"></h3>
            <h3 id="selectedPrice"></h3>
            <button onclick="selectedItem='6oz Burger'; selectedPrice=4.00; updateModal();">6oz Burger - <br>$4.00</button>
            <button onclick="selectedItem='Double Burger'; selectedPrice=6.00; updateModal();">Double Burger - <br>$6.00</button>
            <br>
            <button onclick="selectedItem='Chicken Burger'; selectedPrice=4.00; updateModal();">Chicken Burger - <br>$4.00</button>
            <button onclick="selectedItem='Sriracha Burger with Cheddar & Jalapenos'; selectedPrice=5.50; updateModal();">Sriracha Burger - <br>$5.50</button>
            <br>
            <button onclick="selectedItem='Guac Burger topped with Guacamole'; selectedPrice=6.00; updateModal();">Guac Burger - <br>$6.00</button>
            <button onclick="selectedItem='Cajun Blue Cheese Burger'; selectedPrice=6.50; updateModal();">Cajun Burger - <br>$6.50</button>
            <br>
            <button onclick="selectedItem='Chili Cheddar Burger topped with Chili, Onions, and Cheddar Cheese Sauce'; selectedPrice=6.50; updateModal();">Chili Cheddar Burger - <br>$6.50</button>
            <button onclick="selectedItem='French Onion Burger with Fried Onions, Mushrooms, and Swiss Cheese'; selectedPrice=6.50; updateModal();">French Onion Burger - <br>$6.50</button>
            <br>
            <button onclick="selectedItem='Jam Burger with Fried Onions and Peppers and Cheddar Cheese Sauce'; selectedPrice=6.00; updateModal();">Jam Burger - <br>$6.50</button>
            <button onclick="selectedItem='Crabby Patty'; selectedPrice=6.00; updateModal();">Crabby Patty - <br>$6.00</button>
            <br><br>
            <label>Special Instructions: <br><br><textarea id="q4" name="specInstr" value="" placeholder="Write specifics about your food here... Extra or Additional Items May Result in Added Charges Upon Pick Up"></textarea></label>
            <br><br><br>
            <button id="q5"  onclick="confirmSelection();">Confirm</button>
        
        <br><br><br>
        <button type="button" onclick="closeModal();">Delete Item & Exit</button>

            `
    }
    if (selectedItem == 'Cobb Salad'){
        console.log(selectedItem);
        document.getElementById("modal").innerHTML = `
        <h2>Specifics for these items:</h2>
        <h3>Dressings: Italian, Ranch, Blue Cheese, Russian, Caesar, Honey Mustard</h3>
        <h3>(Please State Dressing Choices in Special Instructions)</h3>
        <br>
            <h3 id="selectedItem"></h3>
            <h3 id="selectedPrice"></h3>
            <button onclick="selectedItem='Small Side Salad'; selectedPrice=3.50; updateModal();">Side Salad - <br>$3.50</button>
            <button onclick="selectedItem='Tossed Salad'; selectedPrice=5.50; updateModal();">Tossed Salad - <br>$5.50</button>
            <br>
            <button onclick="selectedItem='Caesar Salad'; selectedPrice=5.50; updateModal();">Caesar Salad - <br>$5.50</button>
            <button onclick="selectedItem='Greek Salad'; selectedPrice=7.00; updateModal();">Greek Salad - <br>$7.00</button>
            <br>
            <button onclick="selectedItem='Cobb Salad'; selectedPrice=10.00; updateModal();">Cobb Salad - <br>$10.00</button>
            <button onclick="selectedItem='Chef Salad'; selectedPrice=10.00; updateModal();">Chef Salad - <br>$10.00</button>
            <br>
            <button onclick="selectedItem='Italian tossed salad w/ salami, pepperoni, provolone, olives, red peppers'; selectedPrice=10.00; updateModal();">Italian Salad - <br>$10.00</button>
            <br><br>
            <label>Special Instructions: <br><br><textarea id="q4" name="specInstr" value="" placeholder="Write specifics about your food here... Extra or Additional Items May Result in Added Charges Upon Pick Up"></textarea></label>
            <br><br><br>
            <button id="q5"  onclick="confirmSelection();">Confirm</button>
        
        <br><br><br>
        <button type="button" onclick="closeModal();">Delete Item & Exit</button>
        `
    }
    if (selectedItem == '2 Eggs Any Style w/Toast, Homefries w/ Sausage Patty or Ham'){
        console.log(selectedItem);
        document.getElementById("modal").innerHTML = `
        <h2>Specifics for these items:</h2>
        <h3>(Please Specify Your Choice of Meat in <br>Special Instructions if Applicable)</h3>
        <br>
            <h3 id="selectedItem"></h3>
            <h3 id="selectedPrice"></h3>
            <button onclick="selectedItem='1 Egg Any Style w/Toast & Homefries'; selectedPrice=4.50; updateModal();">1 Egg, Toast & <br>Homefries - <br>$3.50</button><br>
            <button onclick="selectedItem='1 Egg Any Style w/Toast, Homefries w/ Sausage Patty or Ham'; selectedPrice=6.50; updateModal();">1 Egg, Toast, <br>Homefries,<br> & Meat - <br>$5.50</button>
            <br>
            <button onclick="selectedItem='2 Eggs Any Style w/Toast & Homefries'; selectedPrice=5.50; updateModal();">2 Eggs, Toast &<br> Homefries - <br>$5.00</button><br>
            <button onclick="selectedItem='2 Eggs Any Style w/Toast, Homefries w/ Sausage Patty or Ham'; selectedPrice=7.00; updateModal();">2 Eggs, Toast, <br>Homefries,<br> & Meat - <br>$7.00</button>

            <br><br>
            <label>Special Instructions: <br><br><textarea id="q4" name="specInstr" value="" placeholder="Write specifics about your food here... Extra or Additional Items May Result in Added Charges Upon Pick Up"></textarea></label>
            <br><br><br>
            <button id="q5"  onclick="confirmSelection();">Confirm</button>
        
        <br><br><br>
        <button type="button" onclick="closeModal();">Delete Item & Exit</button>
        `
        
    }

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
    establishSum();
    sum = money_round(sum);
    jamsorder.push(selectedItem);
    prices.push(selectedPrice);
    console.log(sum);
    console.log(jamsorder);
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

/*Separate fnctions needed to keep track of the product selected*/ 
function csplus1ATC() {
    selectedItem = "Crabby Patty";
    selectedPrice = 6.00;
    selectedItemRevert = "Crabby Patty";
    selectedPriceRevert = 6.00;
    openModal();
}

function csplus2ATC() {
    selectedItem = "Jam Burger with Fried Onions and Peppers and Cheddar Cheese Sauce";
    selectedPrice = 6.50;
    selectedItemRevert = "Jam Burger with Fried Onions and Peppers and Cheddar Cheese Sauce";
    selectedPriceRevert = 6.50;
    openModal();
}

function csplus3ATC() {
    selectedItem = "Cobb Salad";
    selectedPrice = 10.00;
    selectedItemRevert = "Cobb Salad";
    selectedPriceRevert = 10.00;
    openModal();
}

function csplus4ATC() {
    selectedItem = "2 Eggs Any Style w/Toast, Homefries w/ Sausage Patty or Ham";
    selectedPrice = 7.00;
    selectedItemRevert = "2 Eggs Any Style w/Toast, Homefries w/ Sausage Patty or Ham";
    selectedPriceRevert = 7.00;
    openModal();
}

function closeTwoModal() {
    closeModal();
    closeHamburgerModal();
}

function closeModal() {
    chxBool = true;
    chzBool = true;
    sauceBool = true;
    document.getElementById("q4").value = '';
    document.getElementById("modalHolderHolder").style.display = "none";
    document.getElementById("Bg").style.display = "none";/*
    document.getElementById("q1").style.backgroundColor = "white";
    document.getElementById("q2").style.backgroundColor = "white";
    document.getElementById("q3").style.backgroundColor = "white";*/
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

      paypal.Buttons({
        style: {
          shape: 'pill',
          color: 'silver',
          layout: 'vertical',
          label: 'checkout',
          
        },

        createOrder: function(data, actions) {
          return actions.order.create({
            purchase_units: [{
                    amount:{
                        currency_code:'USD',
                        value:sum
                
                },
                
            }],
                application_context: {
                shipping_preference: 'NO_SHIPPING'
                }
          });
        },
  onApprove: function (data, actions) {

    // Get the order details
    return actions.order.get().then(function (orderDetails) {
        getOrderString();
        document.getElementById("senderNTTotal").value = sumMinusTax();
        document.getElementById("senderTotal").value = establishSum();
            document.getElementById("senderOrderpp").value = orderString;
            

            $.ajax({
            url: '/sendmail.php',
            type: 'post',
            data: $('#ppCheckoutForm').serialize(),
            success: function () {
              console.log("Check Email");
            }
          }),
      
          actions.order.capture().then(function () {
              alert("Transaction Complete! Check your email, we may have have ended up in your spam folder!");
              location.replace('/OrderConfirmation.php/');
              
            // Show a confirmation to the buyer
            
          });
        });
      
  }
}).render('#paypal-button-container');
