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

    // grab local storage and display onto this page

    var favsList = JSON.parse(localStorage.getItem('favoritesList')); 

    for (var i = 0; i < 8; i++) {

        var itemContainer = $("#item" + i)
        var itemTitle = favsList[i].itemTitle
        var itemURL = favsList[i].itemURL
        var pTwo = $("<a>").attr("href", itemURL)
        var pThree = $("<p>").text(itemTitle);

        itemContainer.append(pTwo);
        pTwo.append(pThree);
        pThree.attr("id", "responsiveLink");
    }

    $(".favoriteButton").on("click", function () {

        var iconDiv = $(this).find('i');
        if (iconDiv.hasClass('fas')) {
            iconDiv.removeClass('fas');
            iconDiv.addClass('far');
        }
        else if (iconDiv.hasClass('far')) {
            iconDiv.removeClass('far');
            iconDiv.addClass('fas');
        }

       
    })

})


