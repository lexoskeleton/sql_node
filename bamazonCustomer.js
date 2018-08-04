//Require MySQL
var mysql = require("mysql");
//Require Inquirer
var inquirer = require("inquirer");

//connection information
var connection = mysql.createConnection({
  host: "localhost",
  port: 8889,
  user: "root",
  password: "root",
  database: "bamazon"
});

//establish connection to SQL 
connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  //once connected, run the functions
  queryProducts();
  prompt();
});

//this function accesses all of the information in our "products" table
//and displays it on the console (in a pretty cute way)
function queryProducts() {
  connection.query("SELECT * FROM products", function(err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price + " | " + res[i].stock_quantity );
    }
    console.log("-----------------------------------");
  });
}

//this function initializes our inquirer prompts
function prompt () {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) {
            console.log(err);
        }
        inquirer.prompt ([
            {
                type: "input",
                message: "What is the ID of the product that you would like to buy?",
                name: "itemID"
            },

            {
                type: "input",
                message: "How many units of the product would you like to buy?",
                name: "quantity"
            }
        ]).then(function(answer){
            //this stores the user input in an accessible variable
            var chosenProduct;
            //this loops through the database to ensure that the product that the user asked for is available
            for (var i = 0; i < res.length; i++) {
                if (res[i].item_id === parseInt(answer.itemID)) {
                    chosenProduct = res[i];
                }
            }
            //if the quantity in stock is less than the user asks for, it will log that to the console and end the connection
            if (chosenProduct.stock_quantity < parseInt(answer.quantity)) {
                console.log("\n");
                console.log("Insufficient amount!");
                connection.end();
            }
            else {
                //updates the quantity of the database 
                var quantityUpdate = chosenProduct.stock_quantity - parseInt(answer.quantity);
                connection.query(
                   "UPDATE products SET ? WHERE ?",
                    [
                        {
                            stock_quantity: quantityUpdate
                        },
                        {
                            item_id: chosenProduct.item_id
                        }
                    ],
                    function(err) {
                        if (err) {
                            console.log(err);
                        }
                        //displays new quantity + total of the order on the console, then ends the connection
                        else {
                            var totalPrice = chosenProduct.price * parseInt(answer.quantity);
                            console.log("\n");
                            console.log("Your total is " + totalPrice + "!" );
                            console.log("We now have " + quantityUpdate);
                            connection.end();
                        }
                    })
                }
            })
        });
    }

