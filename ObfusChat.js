obfusChat = (function () {
    var vm = {};
    vm.origRotArray = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", ";", "[", "]", "\\", "=", "-", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "'", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "{", "}", "|", ":", "\"", "<", ">", "?", "~", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M", " "] //"`" is excluding for even length;
    vm.rotArray = vm.origRotArray.slice();
    vm.origSeed = 0;
    vm.seed = 0;

    vm.rng = function (min, max) {
        var x = Math.sin(vm.seed++) * 10000;
        var rand = x - Math.floor(x);

        return Math.floor((rand * max) + min);
    }

    vm.randomizeArray = function (input) {
        var output = [];
        var arr = input.slice();
        for (var i = arr.length; i > 0; i--) {
            var remIndex = vm.rng(0, i);
            var removed = arr.splice(remIndex, 1);
            output.push(removed[0]);
        }

        return output;
    };

    vm.setSeed = function (input) {
        vm.seed = input;
        vm.rotArray = vm.randomizeArray(vm.origRotArray);
    }

    vm.rotate = function (char, arr) {
        var full = arr.length;
        var mid = full / 2;
        var curIndex = arr.indexOf(char);
        var newIndex = 0;
        if (curIndex + mid >= full) {
            newIndex = ((curIndex + mid) - full);
        } else {
            newIndex = curIndex + mid;
        }
        return arr[newIndex];
    }

    vm.obfuscate = function (text, seed) {
        if (typeof text === "undefined" || text === null) return text;
        if (typeof seed !== "undefined" && seed !== null && !isNaN(seed) && isFinite(seed)) {
            vm.setSeed(seed);
        } else {
            vm.setSeed(vm.origSeed);
        }
        var output = "";
        for (var i = 0; i < text.length; i++) {
            output += vm.rotate(text[i], vm.rotArray);
            vm.rotArray = vm.randomizeArray(vm.rotArray);
        }
        return output;
    }

    return {
        obfuscate: vm.obfuscate,
        deobfuscate: vm.obfuscate
    };
})();