
//**GLOBAL Variables */
var items = [
{   
    code: "asdd123",
    title: "Test Prouct",
    price: "$123.45",
    description: "bippity boppity boo motherfucker",
    category: "electronics",
    ratings: "4/5 stars",
    image: "img1.jpg"
},
{
    code: "asdd124",
        title: "T-Shirt",
        price: "$17",
        description: "second item description",
        category: "clothing",
        ratings: 4,
        image: "img2.jpg"
},
{
    code: "asdd125",
        title: "Teddy  Bear",
        price: "$18",
        description: "third item description",
        category: "toys",
        ratings: 4,
        image: "img3.jpg"
},
{
    code: "asdd126",
        title: "Sorry! Board Game",
        price: "$19",
        description: "fourth item description",
        category: "board games",
        ratings: 4,
        image: "img4.jpg"
},
{
    code: "asdd127",
        title: "A Marine's Favorite Snack!",
        price: "$3",
        description: "fifth item description",
        category: "school supplies",
        ratings: 4,
        image: "img5.jpg"
}





]

//**functions*/

function displayCatalog(){
    /**
     * Travel the array
     * Get each element from the array
     * Display the element into the DOM (html)
     */
    for(var i=0; i< items.length; i++){
        var product = items[i];

        // var pLayout = "<div><h4>" + product + "</h4></div>";

        var pLayout = `<div class="item">
        <img src="images/${product.image}">
        <h4>${product.title}</h4>
        <h4>${product.price}</h4>
        <p>${product.description}</p>
        <p>${product.ratings}</p>
        <button type="button" class="btn btn-info">Add to Cart</button>
        </div> `;
        //^^What we want displayed


        console.log(i, pLayout);
        $("#catalog").append(pLayout);
        //Us displaying it, both on console and on HTML file
        //Remember to ensure that all this is inside the For Loop!
    }
}

function init(){
    console.log("Catalog Page");

    displayCatalog(); //this is the first thing created for the JS file. This focuses inititally on whatever is contained in it. In this case, the display function we've created.

}

/**Initialization */
window.onload = init;
























//Line 5 functions:::