//request mysql and inquirer packages
var mysql = require("mysql");
var inquirer = require("inquirer");

//connection details for sql database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "bamazon"
});

//connect to mysql server and sql database
connection.connect(function(err){
    if (err) throw err;
    //display the items available for sale (include id, name, price)
    displayItems();
});

//function to display items avaukabke for sale
function displayItems(){
    connection.query("SELECT * FROM products",function(err,res){
        if (err) throw err;
        for (i = 0; i< res.length; i++){
            console.log("\n" + "Item ID: " + res[i].item_id + "\nItem: " + res[i].product_name + "\nUnit price: $" + res[i].price)
        }
        //prompt the usert to enter:
        // 1) the id of the product they want to buy
        // 2) how many units they want to buy
        inquirer.prompt([
            {
                name: "productID",
                type: "input",
                message:"What is the ID of the product that you want to buy?"
            },
            {
                name: "productQuantity",
                type: "input",
                message: "How many units of the product do you want to buy?"
            }
        ]);
    });
};
