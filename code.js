var rawCountryTxt = ""
jQuery.get("countries.txt", function(data) {
    rawCountryTxt = data
})

console.log(rawCountryTxt)

function input() {
    $("#play").val($("#play").val().replaceAll(/(\r\n|\n|\r)/gm, ""))
}