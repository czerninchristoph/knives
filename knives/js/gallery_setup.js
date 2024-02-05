// Im index.html sind alle Sections außer der Gallerie hard-coded. 
// Die Gallerie hat seine eigene Struktur und Container im index.html, 
// die Inhalte werden beim Laden der Website neu erstellt, 
// d.h. dieses Skript schreibt von alleine temporären HTML-Code ins index.html
// Das Original-File von index.html bleibt unverändert, nur auf der dargestellten Seite
// werden Extra-Inhalte angezeigt. 
// Unter dem Titel der Gallerie, im div #gallery-filters werden die Filter-Buttons eingefügt. 
// Darunter sind im div #gallery-list die Gallerie-Bilder

// Die Website baut sich mit Javascript auf, JS kann aber nicht live den Ordner nach Bildern durchsuchen,
// und deren Filenamen finden. Darum wird beim Deployment der Website ein Python-Skript, "filesPrep.py", 
// ausgeführt, das JS-Code für alle Files schreibt. 
// In diesem JS-File ist ein JS-Objekt, ein großes Array, mit Dictionaries, eines pro Kategorie. 
// Jedes Dict hat als "category" den Name der Kategory, und als "paths" ein Array mit allen Bildpfaden. 

// Galerie-Modi
// Die Galerie hat 2 Modi, "Grid-Mode" "Scroll-Mode"
// Normal ist die Galerie ein Grid, 3x3 auf großen Schirmen, 2x2 auf kleinen
// Wird auf ein Galerie-Bild geklickt, schaltet die Seite den Modus um
// Im Scroll-Modus gibt es eine, von Instagram inspirierte, Infinite-Scroll-Ansicht,
// wo ein Bild die gesamte Breite ausfüllt. Drunter kann dann Text zum Bild stehen. 




// boolean: wenn true wird die Reihenfolge der Bilder der Galerie zufällig
// hidden: const shuffle_images_global = true
const shuffle_images = true



// extract an array of all categories from the gallery_data
let gallery_categories = []
for (i = 0; gallery_data.length > i; i++){
    gallery_category = gallery_data[i].category
    gallery_categories.push(gallery_category)
}
console.log(gallery_categories)


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




// Preparing the Gallery and Buttons separately

// Filter-Buttons sind im div #gallery-filters
for (i = 0; gallery_data.length > i; i++){
    // To prepare a filter, we first get the category name
    var category = gallery_data[i].category;
    var category_name = gallery_data[i].category_name;
    // creating the button
    //<button class="active" data-filter="*">All</button>
    var btn = document.createElement("button");
    btn.setAttribute("data-filter", category);
    btn.innerText = category_name;
    // set it to the parent of the filter buttons
    document.getElementById("gallery-filters").appendChild(btn);
}

// Gallerie-Bilder sind im div #gallery-list
// Das Skript schaut alle Kategorien

// then the images
// first we gather a list of all image hrefs
var image_objects = []

for (i = 0; gallery_data.length > i; i++){
    // get the category image
    var category = gallery_data[i].category;
    var category_name = gallery_data[i].category_name;
    var category_paths = gallery_data[i].paths;
    // shuffle the filenames array, so we get a different order every time
    if (shuffle_images) category_paths = shuffle(category_paths); 
    // loop through all image filenames
    for (j = 0; category_paths.length > j; j++){
        var image_href = category_paths[j];
        
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
        div.className = "fadeIn gallery-single grid-mode-item" + " " + category;
        div.href = image_href;
        div.appendChild(a);
        
        // add the image object to the image_objects array
        image_objects.push(div)
    }
}


// Wenn es gewünscht ist, werden jetzt die Bilder der Galerie wild durchgemischt.
var gallery_parent = document.getElementById("gallery-list");
if (shuffle_images) image_objects = shuffle(image_objects); 

// Jetzt werden alle HTML-Bild-Objekte jeweils als Child an das div #gallery-list angehängt
for (i = 0; image_objects.length > i; i++){
    gallery_parent.appendChild(image_objects[i]); // save it in the parent
}





// Function for hiding all images
// When a filter is activated, all images are first hidden, then only the wanted ones are shown
function hideAll(arr){
    for(var i=0; i < arr.length; i++){
        arr[i].style.display = "none";
    }
};

// Function for showing all images
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
    

    if (filterValue == "*"){
        // make every gallery item visible
        showAll(galleryList.getElementsByClassName("gallery-single"));
    } else {
        // hide all items
        hideAll(galleryList.getElementsByClassName("gallery-single"))
        //
        // show the items with the correct filterValue
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












// Galerie-Modi
// Standardmäßig sind wir im Grid-Mode, wird auf ein Bild geklickt, wird in den Scroll-Mode geschalten.
// um den Modus wechsels zu können, müssen alle Bilder mit einer For-Loop bearbeitet werden

// Scroll-Mode aktivieren
// den Bilder werden statt der Klasse "grid-mode-item" die Klasse "scoll-mode-item" gegeben
// dh ihre Größe wird verändert
function scrollMode(){
    var galleryList = document.querySelectorAll(".gallery-single");
    for(var single of galleryList){
        single.classList.remove("grid-mode-item");
        single.classList.add("scroll-mode-item");
    }   
}

// Scroll-Mode aktivieren, vice versa zu oben
function gridMode(){
    var galleryList = document.querySelectorAll(".gallery-single");
    for(var single of galleryList){
        single.classList.add("grid-mode-item");
        single.classList.remove("scroll-mode-item");
    }   
}


// Function that adds wait-time
function delay(milliseconds){
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}



var galleryItem  = $('#gallery-list');
galleryItem.on('click', '.gallery-single', function () {
    if (this.classList.contains("grid-mode-item")){
        scrollMode();
    } else if (this.classList.contains("scroll-mode-item")) {
        gridMode();
    }
    // jetzt scrolle zum Item das angeklickt wurde, weils jetzt fix ganz woanders ist
    // wenn wir das vergrößern animieren, dann sollte das scrollen erst nach der transition passieren
    // kein Plan wies das macht, aber diese Funktion scrollt nicht nur zum Objekt, es wird sogar zentriert
    this.scrollIntoViewIfNeeded();
    // das hier hat nicht funktioniert
    // this.scrollIntoView();
    // hier noch eine Verbeserung, wir machen eine Funktion die scrollt, aber mit einem delay
    // async function scrollIntoViewDelay(obj, timedelay=0){
    //     await delay(timedelay);
    //     // obj.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    //     obj.scrollIntoView();
    // }
    // scrollIntoViewDelay(this, 0);

    

});
