$(document).ready(function() {
    $("#input").on("keyup", function() {
        var seed = $("#seed").val() || "57";
        var value = obfusChat.obfuscate($(this).val(), seed);
        $("#output").val(value);
    });
});