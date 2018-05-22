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
connection.connect(function (err) {
    if (err) throw err;
    //list a set of menu options
    inquirer.prompt([
        {
        name: "options",
        type: "rawlist",
        message: "Available options. Select one to proceed.",
        choices: ["View Products for Sale", "View Low Inventory","Add to Inventory", "Add New Product"]
        }
    ]).then(function(answer){
        //if View Products for Sale is selected, list all available items
        if(answer.options === "View Products for Sale") {
            connection.query("SELECT * FROM products", function(err, res){
                if(err) throw err;
                for (i=0; i < res.length; i++){
                    console.log("\n" + "Item ID: " + res[i].item_id + "\nItem: " + res[i].product_name + "\nUnit price: $" + res[i].price + "\nQuantity: " + res[i].stock_quantity)
                }
            });
        //if View Low Inventory is selected, list all items with an inventory count lower than 50 
        } else if(answer.options === "View Low Inventory"){
            connection.query("SELECT * FROM products WHERE stock_quantity < 50", function (err, res){
                if (err) throw err;
                for (i=0; i < res.length; i++){
                    console.log("\n" + "\nLow Inventory: " + "Item ID: " + res[i].item_id + "\nItem: " + res[i].product_name + "\nUnit price: $" + res[i].price + "\nQuantity: " + res[i].stock_quantity)
                }
            });
        //if Add to Inventory is selected, display a prompt to add more of any item currently in store
        } else if(answer.option === "Add to Inventory"){
            inquirer.prompt

        // if Add New Product is selected, it should allow the manager to add a completely new product to the store.
        }else if(answer.options === "Add New Product"){
            console.log("Add New Product");
            inquirer.prompt([
                {
                    name: "itemName",
                    type: "input",
                    message: "Enter product name"
                },
                {
                    name:"itemDepartment",
                    type:"input",
                    message: "Enter product department"
                },
                {
                    name: "itemPrice",
                    type: "input",
                    message:"Enter unit price"
                },
                {
                    name: "itemStock",
                    type: "input",
                    message: "Enter quantity"
                }
            ]).then(function(answer){
                connection.query("INSERT INTO products  SET ?",
                {
                    product_name: answer.itemName,
                    department_name: answer.itemDepartment,
                    price: answer.itemPrice,
                    stock_quantity: answer.itemStock
                },
                function(err, res){
                    if(err) throw err;
                    console.log("New item has been added!")
                });
            });
        }    
    });
});


// ]).then(function(choice) {
//     connection.query("UPDATE products SET ? WHERE ?",
//     [
//         {
//             stock_quantity: choice.newQty
//         },
//         {
//             item_id: choice.itemID
//         }
//     ],