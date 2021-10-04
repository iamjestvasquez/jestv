//IIFE -- Immediately Invoked Function Expression
import express, { static } from "express";
let app = express();

app.use(static("public"));


(function(){

    function Start()
    {
        console.log("App Started...");
    }

    window.addEventListener("load", Start);

})();


