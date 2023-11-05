function doIt(uni) {
    
    if (uni == "smalldot") {
        navigator.clipboard.writeText(String.fromCodePoint(0xFE52));
    }
    else if (uni == "newline") {
        navigator.clipboard.writeText(String.fromCodePoint(0x000D));
    }
    
}