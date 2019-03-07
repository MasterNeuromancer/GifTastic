
// get results for Giphy api
function pullGifs(martialArts) {
    var apiKey = "6Fkzr2LOE0RCsyWG0m8eX6ZNaXLPkzhy";
    var searchTerm = martialArts;
    var queryUrl = "https://api.giphy.com/v1/gifs/search?api_key=" + apiKey + "&q=" + searchTerm + "&limit=10&offset=1&rating=PG-13&lang=en";

    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        for (var i = 0; i < response.data.length; i++) {
            var p = $("<p>");
            p.text("Rated: " + response.data[i].rating);
            var img = $("<img>");
            img.attr("src", response.data[i].images.original_still.url);
            img.attr("data-state", "still");
            img.attr("data-state", response.data[i].images.original.url)
            $("#gifWindow").append(p, img);
        }
    });
}

function createButtons() {
    var martialArts = ["Judo", "Karate", "Kung-Fu", "Fencing", "Capoeira", "Boxing", "Muay Thai", "Kendo", "MMA", "Aikido"];
    // loop through an array of strings
    // for each element in the array 
    for (var i = 0; i < martialArts.length; i++) {
        // make a new button 
        var btn = $("<button>");
        // and a value of the title of the show 
        btn.text(martialArts[i]);
        // with a data-attribute of data-title
        btn.attr("data-title", martialArts[i]);
        
        // add the class of btn btn-success
        btn.addClass("btn btn-success martialArt-btn");

        // append the new button the #buttons div
        $("#buttons").append(btn);

        $("#someid").attr('name', 'value')

    }
}
createButtons();

$(document).on("click", ".martialArt-btn", function (event) {
    console.log("clicked");
    // clear gifs from the previous page 
    $("#gifWindow").empty();

    // get the buttons data-attribute value
    var martialArts = $(this).attr("data-title");
    console.log(martialArts);

    pullGifs(martialArts);

    $(".gif").attr("data-state", "still")
});


$(".img").on("click", function () {
    // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
    console.log("src");
    
});