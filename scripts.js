
$(document).ready(function() {
    var countries = ["Argentina", "Brazil", "Croatia", "France", "Germany", "Italy", "Netherlands", "Portugal", "Spain", "England", "Belgium"];
    
    $("#country1, #country2").autocomplete({
        source: countries
    });
});
