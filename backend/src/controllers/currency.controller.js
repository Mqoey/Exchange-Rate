
const currencyModel = require('../models/currency.model');

// get all currency list
exports.getcurrencyList = (req, res)=> {
    //console.log('here all currencys list');
    currencyModel.getAllcurrencies((err, currencys) =>{
        console.log('We are here');
        if(err)
        res.send(err);
        console.log('currencys', currencys);
        res.send(currencys)
    })
}

// get currency by ID
exports.getcurrencyByID = (req, res)=>{
    //console.log('get emp by id');
    currencyModel.getcurrencyByID(req.params.id, (err, currency)=>{
        if(err)
        res.send(err);
        console.log('single currency data',currency);
        res.send(currency);
    })
}

// create new currency
exports.createNewcurrency = (req, res) =>{
    const currencyReqData = new currencyModel(req.body);
    console.log('currencyReqData', currencyReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        currencyModel.createcurrency(currencyReqData, (err, currency)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'currency Created Successfully', data: currency.insertId})
        })
    }
}

// update currency
exports.updatecurrency = (req, res)=>{
    const currencyReqData = new currencyModel(req.body);
    console.log('currencyReqData update', currencyReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        currencyModel.updatecurrency(req.params.id, currencyReqData, (err, currency)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'currency updated Successfully'})
        })
    }
}

// delete currency
exports.deletecurrency = (req, res)=>{
    currencyModel.deletecurrency(req.params.id, (err, currency)=>{
        if(err)
        res.send(err);
        res.json({success:true, message: 'currency deleted successully!'});
    })
}