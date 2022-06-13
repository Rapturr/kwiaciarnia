import React from "react";
import {ImageBackground, Pressable, Text, View, Image } from 'react-native';
import styles from './style'
import Banner from "./banner";

/*
const express = require("express");
const bodyParser = require("body-parser");
const engines = require("consolidate");

const app = express();

app.engine("ejs", engines.ejs);
app.set("views", "./views");
app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
*/
//var paypal = require("paypal-rest-sdk");
/*

paypal.configure({
    'mode': 'sandbox', //sandbox or live
    'client_id': 'Ad_cXLfx0aZ3kXwkhj_RtJ_ZnX8Hny9w3T7wHI3PqQI9ug3-3PFAAKEBEk4TwkUPUPrWr1s_KHm8SJS3',
    'client_secret': 'EJhPknllPeuqCR_qBa9XUbk_ZRSy-m1nJ4RFohBuREbK0csVwE72bbfAQEFDIrZOtltGaJJN24qnh74t'
  });

  var create_payment_json = {
    "intent": "sale",
    "payer": {
        "payment_method": "paypal"
    },
    "redirect_urls": {
        "return_url": "https://storage.googleapis.com/kckbaza/success.html",
        "cancel_url": "https://storage.googleapis.com/kckbaza/cancel.html"
    },
    "transactions": [{
        "item_list": {
            "items": [{
                "name": "item",
                "sku": "item",
                "price": "1.00",
                "currency": "USD",
                "quantity": 1
            }]
        },
        "amount": {
            "currency": "USD",
            "total": "1.00"
        },
        "description": "This is the payment description."
    }]
};


paypal.payment.create(create_payment_json, function (error, payment) {
    if (error) {
        throw error;
    } else {
        console.log("Create Payment Response");
        console.log(payment);
    }
});
*/
export default function Payment({navigation}) {
    return(
        <>
            <Banner />
            <View style={styles.container}>
                <Pressable>
                    <Text>Kupiłeś?</Text>
                </Pressable>
            </View>
        </>
    )
}

// paypal sandbox account password PasswordKCK