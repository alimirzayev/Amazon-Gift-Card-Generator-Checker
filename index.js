var speed = prompt("Type 2,000 if your PC is fast, 3000 for a slow pc");

function Letter() {
    var code = "";
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (var i = 0; i < 1; i++)
        code +=
            chars.charAt(Math.floor(Math.random() * chars.length));
    return code;
}

function Number() {
    var code = "";
    var chars = "0123456789";
    for (var i = 0; i < 1; i++)
        code +=
            chars.charAt(Math.floor(Math.random() * chars.length));
    return code;
}

function Random() {
    var code = "";
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (var i = 0; i < 1; i++)
        code +=
            chars.charAt(Math.floor(Math.random() * chars.length));
    return code;
}

function main() {

    document.getElementsByName("ppw-claimCode")[0].value = 
    Random() + Random() + Random() + Random() + "-" +
    Random() + Random() + Random() + Random() + Random() + Random() + "-" +
    Random() + Random() + Random() + Random();
    //EDIT THIS TOP LINE FOR A CUSTOM PATTERN BY REPLACING Random() FOR Letter() OR Number()  

    document.getElementsByName("ppw-claimCodeApplyPressed")[0].click();
}
setInterval(function () {
    main();
}, speed);
