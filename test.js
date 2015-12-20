$(document).ready(function() {
    $("#input").on("keyup", function() {
        var seed = $("#seed").val();
        var origVal = $(this).val();
        var value = obfusChat.obfuscate(origVal, seed);
        $("#output").val(value);
        var deobVal = obfusChat.obfuscate(value, seed);
        $("#deob").val(deobVal);
        $("#matches").html(origVal === deobVal);
    });
});
