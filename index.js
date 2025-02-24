const puppeteer = require("puppeteer");
let pages;
const browserOpen = puppeteer.launch({headless: false , slowMo : true , defaultViewport: null , args: ["--start-maximized"]});
browserOpen.then(function (browser){
    const page = browser.pages();
    return page;
}).then(function (browserPages){
    pages = browserPages[0];
    let pagePromise = pages.goto("https://www.google.com/");
    return pagePromise;
}).then(function (){
    let pageOpened = pages.waitForSelector("textarea[class='gLFyf']" , {visible : true})
    return pageOpened;
}).then(function (){
    let keyboardPromise = pages.type("textarea[class='gLFyf']" , "pepcoding");
    return keyboardPromise;
}).then(function (){
    let enterPromise = pages.keyboard.press("Enter");
    return enterPromise;
}).then(function(){
    let pageTypePromise = pages.waitForSelector("h3.LC20lb.MBeuO.DKV0Md" , {visible : true});
    return pageTypePromise;
}).then(function (){
    let keyType = pages.click("h3.LC20lb.MBeuO.DKV0Md");
    return keyType;
}).catch(function (){
    console.log("Error")
})
