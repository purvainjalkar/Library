/* SEARCH BOOKS */

function searchBooks(){

    let input = document.getElementById("search").value.toLowerCase();

    let cards = document.querySelectorAll(".book-card");

    cards.forEach(function(card){

        let title = card.querySelector("h3").innerText.toLowerCase();

        let category = card.querySelector("p").innerText.toLowerCase();

        if(title.includes(input) || category.includes(input)){

            card.style.display = "block";

        }else{

            card.style.display = "none";

        }

    });

}

/* ENTER KEY SEARCH */

document.getElementById("search").addEventListener("keyup", function(){

    searchBooks();

});
