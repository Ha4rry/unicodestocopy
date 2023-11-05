let newlinehexvals = (0x0d, 0x0a);
let combonewlineamt=9;


function doIt(uni) {
    if (uni == "smalldot") {
        navigator.clipboard.writeText(String.fromCodePoint(0xFE52));
    }
    else if (uni == "newline") {
        navigator.clipboard.writeText(String.fromCodePoint(newlinehexvals));
    }
    else if (uni == "combo") {
        navigator.clipboard.writeText(String.fromCodePoint(0xFE52, newlinehexvals,newlinehexvals,newlinehexvals,newlinehexvals,newlinehexvals,newlinehexvals,newlinehexvals,newlinehexvals,newlinehexvals)); // its not pretty
    }
    
}