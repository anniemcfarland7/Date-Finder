// grab API for ticketmaster
// check to see if api link opens DOM in console
// grab desired characteristics of DOM
// set individual characteristics to variables
// create a grid item to display desired variables
// create function that grabs variables and displays them into the grid

// create button for food category
// add event listener to button - when clicked, write function to hide events div and display food div

// enter botton commands the search input

// run through loop and display in cards

// look at cat button and see how to display it on the page

$(document).ready(function () {

    $(function grabEvents() {

        var queryUrl = "https://app.ticketmaster.com/discovery/v2/events.json?&apikey=6kVGZdsCsgo2sBWNchs4mAZAn2V8BWnJ"

        $.ajax({
            url: queryUrl,
            method: "GET"
        })

            .then(function (response) {

                for (i = 0; i < 8; i++) {

                    var eventContainer = $("#item" + i)
                    var eventImg = response._embedded.events[i].images[6].url
                    var eventTitle = response._embedded.events[i].name
                    var eventURL = response._embedded.events[i].url
                    var pOne = $("<img>").attr("src", eventImg);
                    var pTwo = $("<a>").attr("href", eventURL)
                    var pThree = $("<p>").text(eventTitle);

                    eventContainer.append(pOne);
                    eventContainer.append(pTwo);
                    pTwo.append(pThree);
                    pThree.attr("id", "responsiveLink");

                }
            })
    })

    $(function() {
        $(".favoriteButton").on("click", function(event) {

               c
        })
    })
})




