var dbConn  = require('../../config/db.config');

var currency = function(currency){
    this.name           =   currency.name;
    this.value          =   currency.value;
    this.created_at     =   new Date();
    this.updated_at     =   new Date();
}

// get all currencies
currency.getAllcurrencies = (result) =>{
    dbConn.query('SELECT * FROM currencies', (err, res)=>{
        if(err){
            console.log('Error while fetching currencies', err);
            result(null,err);
        }else{
            console.log('currencies fetched successfully');
            result(null,res);
        }
    })
}

// get currency by ID from DB
currency.getcurrencyByID = (id, result)=>{
    dbConn.query('SELECT * FROM currencies WHERE id=?', id, (err, res)=>{
        if(err){
            console.log('Error while fetching currency by id', err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
}

// create new currency
currency.createcurrency = (currencyReqData, result) =>{
    dbConn.query('INSERT INTO currencies SET ? ', currencyReqData, (err, res)=>{
        if(err){
            console.log('Error while inserting data');
            result(null, err);
        }else{
            console.log('currency created successfully');
            result(null, res)
        }
    })
}

// update currency
currency.updatecurrency = (id, currencyReqData, result)=>{
    dbConn.query("UPDATE currencies SET first_name=?,last_name=?,email=?,phone=?,organization=?,designation=?,salary=? WHERE id = ?", [currencyReqData.first_name,currencyReqData.last_name,currencyReqData.email,currencyReqData.phone,currencyReqData.organization,currencyReqData.designation,currencyReqData.salary, id], (err, res)=>{
        if(err){
            console.log('Error while updating the currency');
            result(null, err);
        }else{
            console.log("currency updated successfully");
            result(null, res);
        }
    });
}

// delete currency
currency.deletecurrency = (id, result)=>{
    // dbConn.query('DELETE FROM currencies WHERE id=?', [id], (err, res)=>{
    //     if(err){
    //         console.log('Error while deleting the currency');
    //         result(null, err);
    //     }else{
    //         result(null, res);
    //     }
    // })
    dbConn.query("UPDATE currencies SET is_deleted=? WHERE id = ?", [1, id], (err, res)=>{
        if(err){
            console.log('Error while deleting the currency');
            result(null, err);
        }else{
            console.log("currency deleted successfully");
            result(null, res);
        }
    });
}

module.exports = currency;