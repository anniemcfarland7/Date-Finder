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
