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

// if API city works by id # ... you could create variables for city = id. When user types in a city name,
// stringify that input, and create input"" = i , then "cityInput" = id

//446b2bc6bc0b15dcb3cff0f75

// yelp:
//Client ID
//v1vUoXCtGnWqNSH-eUsZRw
//API Key
//IHFpaB50zoKp8onGqYexW9-1kn-QcTfuGxbe7bgj6TT7OZZf30kAB8Ka6Ru5HEcWm5W6tK6kMr2AVQYiWg_cElZ_gTWWBuGsC5lNmhyJqVzGXoyCIrNaRHpHI2LrX3Yx

$(document).ready(function () {

    M.AutoInit();

    $(".searchButton").on("click", function displayItems() {


        $.ajax({
            method: "GET",
            url: 'https://api.openbrewerydb.org/breweries?by_city=saint%20louis'
        })

            .then(function (response) {
                

                for (i = 0; i < 8; i++) {

                    var itemContainer = $("#item" + i)
                    var itemTitle = response[i].name
                    var itemURL = response[i].website_url
                    var pTwo = $("<a>").attr("href", itemURL)
                    var pThree = $("<p>").text(itemTitle);

                    itemContainer.append(pTwo);
                    pTwo.append(pThree);
                    pThree.attr("id", "responsiveLink");

                }

            })

    })

    // activates search button when hitting "enter" on keyboard
    $('.searchTerm').keypress(function (e) {
        if (e.which == 13) {
            $('.searchButton').click();
        }
    })



    $(".favoriteButton").on("click", function () {

        var iconDiv = $(this).find('i');
        if (iconDiv.hasClass('far')) {
            iconDiv.removeClass('far');
            iconDiv.addClass('fas');
        }
        else if (iconDiv.hasClass('fas')) {
            iconDiv.removeClass('fas');
            iconDiv.addClass('far');
        }

    })



    $(".favoriteButton").on("click", function () {

        var favoritedId = $(this).closest('div').attr('id')
        

        var itemURL = $(this).siblings('a').attr('href')
        

        var itemTitle = $(this).siblings('a').children('p').html()
     

        var favoritedInfo = { favoritedId, itemURL, itemTitle }

        var favsList = JSON.parse(localStorage.getItem("favoritesList"))

        if (favsList == null) {
            favsList = [];
        }

        if (favsList != null) {
            for (var i = 0; i < favsList.length; i++) {
                if (favoritedInfo == favsList[i]) {
                    favsList = [];
                }
            }
        }

        var iconDiv = $(this).find('i')

        if (iconDiv.hasClass('fas')) {
            favsList.push(favoritedInfo);
            localStorage.setItem('favoritesList', JSON.stringify(favsList));
        }

        if (iconDiv.hasClass('far')) {
            favsList.splice(favsList.indexOf(i), i);
            localStorage.setItem('favoritesList', JSON.stringify(favsList));
        }
    })
                


           

       
            




})