/**
Shortcut.JS is a micro-library I'm building specifically for making games in the Processing.js coding enviroment on Khan Academy.
**/
var Canvas = function () {
    this.log = function () {
        var str = Array.prototype.slice.call(arguments).join(' ');//joins all the arguments with a space
        println(str);//prints arguments
    };
};
var canvas = new Canvas();

Array.prototype.each = function (funct) {
    var reverse = Array.prototype.slice.call(this).reverse();//create a reversed copy
    var i = reverse.length;
    while (i --) {//loop through the reversed copy with the fastest loop (a backward while loop)
        funct(reverse.length-i-1, reverse[i]);//call the function passing in the index and the element
    }
};

Object.prototype.shortcut = function () {
    this.shortcut.move = function () {
        return true;
    };
};



