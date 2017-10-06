var seedElement = document.getElementById('seed');
var inputElement = document.getElementById('input');
var outputElement = document.getElementById('output');
var deobElement = document.getElementById('deob');
var matchesElement = document.getElementById('matches');

var update = function () {
    var seed = seedElement.value;
    var origVal = inputElement.value;
    if (!origVal) return;
    var value = obfusChat.obfuscate(origVal, seed);
    outputElement.value = value;
    var deobVal = obfusChat.obfuscate(value, seed);
    deobElement.value = deobVal;
    matchesElement.innerHTML = origVal === deobVal;
};

inputElement.addEventListener('keyup', update);
seedElement.addEventListener('keyup', update);