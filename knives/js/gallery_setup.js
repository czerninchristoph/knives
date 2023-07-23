// Function for shuffling an array
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
    }


const shuffle_images_global = true
const shuffle_images = true


// Preparing the Gallery and Buttons separately!!!

// first the buttons
for (i = 0; categories.length > i; i++){
    // To prepare a filter, we first get the category name
    var category_name = categories_names[i];
    if (category_name == "kueche") category_name = "küche";
    // creating the button
    //<button class="active" data-filter="*">All</button>
    var btn = document.createElement("button");
    btn.setAttribute("data-filter", category_name);
    btn.innerText = category_name;
    // set it to the parent of the filter buttons
    document.getElementById("gallery-filters").appendChild(btn);
}

// then the images
// first we gather a list of all image hrefs
var image_objects = []

for (i = 0; categories.length > i; i++){
    // get the category image
    var category_name = categories_names[i];
    if (category_name == "kueche") category_name = "küche";
    // get the filename array from the category    
    var category_current = categories[i];
    // shuffle the filenames array, so we get a different order every time
    if (shuffle_images) category_current = shuffle(category_current); 
    // loop through all image filenames
    for (j = 0; category_current.length > j; j++){
        var image_href = category_current[j];
        
        // create the image object
        var img = document.createElement("img"); // new empty img tag
        img.src = image_href; // set the img's source
        img.className = "img-fluid";

        // create a wrapping a tag
        var a = document.createElement("a");
        a.className = "gallery-lightbox ";
        //a.href = image_href;
        a.setAttribute("data-lightbox","roadtrip");
        a.appendChild(img);
        
        // create a wrapping div tag
        var div = document.createElement("div");
        div.className = "fadeIn gallery-single grid-mode-item" + " " + category_name;
        div.href = image_href;
        div.appendChild(a);
        
        // add the image object to the image_objects array
        image_objects.push(div)
    }
}

var gallery_parent = document.getElementById("gallery-list");
if (shuffle_images) image_objects = shuffle(image_objects); 
for (i = 0; image_objects.length > i; i++){
    gallery_parent.appendChild(image_objects[i]); // save it in the parent
}






function hideAll(arr){
    for(var i=0; i < arr.length; i++){
        arr[i].style.display = "none";
    }
};

function showAll(arr){
    for(var i=0; i < arr.length; i++){
        arr[i].style.display = "block";
    }
};






var portfolio = $('.special-menu');
portfolio.on('click', 'button', function () {

    // make clicked button active, make sibling not active
    $(this).addClass('active').siblings().removeClass('active');

    var filterValue = $(this).attr('data-filter');

    // Applying the filter
    // first get the parent element
    var galleryList = document.getElementById("gallery-list")
    
    console.log(galleryList);

    if (filterValue == "*"){
        // make every gallery item visible
        showAll(galleryList.getElementsByClassName("gallery-single"));
    } else {
        // hide all items
        hideAll(galleryList.getElementsByClassName("gallery-single"))
        //console.log(x)
        //
        // show the items with the correct filterValue
        console.log(galleryList.getElementsByClassName(filterValue));
        showAll(galleryList.getElementsByClassName(filterValue));
    }

    //alert(filterValue);
    //$grid.isotope({
    //	filter: filterValue
    //});
});
//var $grid = $('.special-list').isotope({
//	itemSelector: '.special-grid'
//});






function scrollMode(){
    var galleryList = document.querySelectorAll(".gallery-single");
    for(var single of galleryList){
        single.classList.remove("grid-mode-item");
        single.classList.add("scroll-mode-item");
    }   
}

function gridMode(){
    var galleryList = document.querySelectorAll(".gallery-single");
    for(var single of galleryList){
        single.classList.add("grid-mode-item");
        single.classList.remove("scroll-mode-item");
    }   
}





var galleryItem  = $('#gallery-list');
galleryItem.on('click', '.gallery-single', function () {
    if (this.classList.contains("grid-mode-item")){
        scrollMode();
    } else if (this.classList.contains("scroll-mode-item")) {
        gridMode();
    }
    this.scrollIntoView();
    

});
