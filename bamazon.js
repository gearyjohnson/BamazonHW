var mysql = require("mysql");
var inquirer = require("inquirer");
 var connection = mysql.createConnection({
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "Oakland2",
    database: "bamazonDB",
}); 
 connection.connect(function(err){
    if (err) { 
        throw err; 
    } else{
        console.log("connected as id" + connection.threadId +"\n");
        runApp();
    }
});

var items; 
var product_id
var quant;
var purchase; 
var inventory;

function runApp(){
 connection.query("SELECT * FROM item", function(err,product_id){
    items = product_id;
});
    
inquirer.prompt([{
    type: "input",
    name: "id",
    message: "What would you like to purchase?"
}
]).then(function products (data){ 
       
    for (var i=0; i< items.length; i++){
        if (items[i].id == product_id){ 
        quant = items[i].quantity;
        var product_id = data.id;
        var product_name = items[i].product;
        var product_price = items[i].price; 
        }
}
    if (product_id>0)
    inquirer.prompt([{
        type: "input",
        name: "units",
        message: "How many would you like to purchase?"
    }]).then(function(data){
        purchase = data.units;
        
            if (purchase <= quant){
            var query = connection.query(
                "SELECT (item.quantity - "+ purchase +") AS new_value FROM item WHERE item.id ="+ product_id, function(err, updated_val){
                    inventory=  updated_val[0].new_value;
                    console.log("Your purchase!\n" + "product:" + product_name +"\n price:" + product_price*data.units + "\n quantity:" + purchase +"\n Thank you for your purchase!" );
                    update();
                }
    );
    }
    else{
        console.log("Insufficient quantity");       
        }
    })
    else{
        console.log("Please hold...");
        reset()
    }
})
};
 function update() {
    var query = connection.query( "UPDATE item SET ? WHERE ?",
      {
        quantity: inventory,
        id: product_id
      },
    function(err, res) {
      console.log(res.affectedRows + " updated!\n");
    }
  );
}; 

function reset(){
     inquirer.prompt([{
      type: "list",
      name: "command",
      message: "Would you like to continue shopping?",
      choices: ["Yes, continue shopping.","No. Thank you for shopping with us."]
  }
  ]).then(function(shop){
      if(shop.command=="Yes, continue shopping."){
         runApp();
      }
      else{
          console.log("No. Thank you for shopping with us.");    
          connection.end();
      }
  })
} 