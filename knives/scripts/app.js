var daten = 1;

//document.getElementById("data").innerHTML = daten;

/*

if ( $(window).width() > 870) {
$('.navigation a').hover(
        function () {
            $(this).next('span').show();
        },
        function () {
            $(this).next('span').hide();
        }
    );
}


*/





$(function() {
    $('.content').on('click', function() {
        $('.content').toggleClass('color'); 
    });
    
    
    
    
    

    
    $('.gallery').fancybox({
        beforeShow: function () {
            /* Disable right click */
            $.fancybox.wrap.bind("contextmenu", function (e) {
                    return false; 
            });
        },
        helpers: {title: {type: 'inside'}},
        openEffect	: 'none',
        closeEffect	: 'none',
        openEffect: 'elastic' ,
        closeEffect: 'elastic' ,
        mouseWheel: "true",
    });
        
    
    
    
    
    
    
   $('.fp-next,.fp-prev').on('click', function() {
        $('.about').fadeToggle(); 
    });
 
    
    
    
    
    
    

    $(document).ready(function(){

        $(window).on('load', function(){
                $(".welcome1").animate(
                    { opacity: '1'}, 800, function() {
                            $('.welcome2').animate(
                                    { opacity: '1', left: '0px'}, 800, function() {
                                        $('.welcome3').animate(
                                            { opacity: '1', left: '0px'}, 800
                                        );

                                    });    

                });    
        });
    
    });
    
    
    
    
    
  //.css('transform', 'scale(200%)')   
    
    
//masonry
    $(window).load(function(){
        
        $('.pics').masonry({
            columnWidth: 30,
            itemSelector: '.raster'});
    });
    
if ( $(window).width() > 550) {
    
  //alle
    $('#all').on('click', function() {
        $('.leder, .jagd, .kueche, .diverse').show();
        $('.pics').masonry({ itemSelector: '.raster'});
        $('.select').removeClass('selected');
        $('#all').addClass('selected');
    });
  //leder  
    $('#leder').on('click', function() {
        $('.leder, .jagd, .kueche, .diverse').show();
        $('.jagd, .kueche, .diverse').hide();
        $('.pics').masonry({ itemSelector: '.raster'}); 
        $('.select').removeClass('selected'); 
        $('#leder').addClass('selected');
        $('body').css('height', 'auto');
    });
  //jagd  
    $('#jagd').on('click', function() {
        $('.leder, .jagd, .kueche, .diverse').show();
        $('.leder, .kueche, .diverse').hide();
        $('.pics').masonry({ itemSelector: '.raster'}); 
        $('.select').removeClass('selected'); 
        $('#jagd').addClass('selected');
        $('body').css('height', 'auto');
    });
  //küche  
    $('#kueche').on('click', function() {
        $('.leder, .jagd, .kueche, .diverse').show();
        $('.jagd, .leder, .diverse').hide();
        $('.pics').masonry({ itemSelector: '.raster'}); 
        $('.select').removeClass('selected'); 
        $('#kueche').addClass('selected');
        $('body').css('height', 'auto');
    });
   //diverse 
    $('#diverse').on('click', function() {
        $('.leder, .jagd, .kueche, .diverse').show();
        $('.jagd, .kueche, .leder').hide();
        $('.pics').masonry({ itemSelector: '.raster'}); 
        $('.select').removeClass('selected'); 
        $('#diverse').addClass('selected');
        $('body').css('height', 'auto');
    });
    
}
    
    
  /*  
    
        
  //alle
    $('#all').on('click', function() {
        $('.leder, .jagd, .kueche, .diverse').show();
        $('.pics').masonry({ itemSelector: '.raster'});
        $('#all, #leder, #jagd, #kueche, #diverse').removeClass('select');
        $('#all').addClass('select');
    });
  //leder  
    $('#leder').on('click', function() {
        $('.leder, .jagd, .kueche, .diverse').show();
        $('.jagd, .kueche, .diverse').hide();
        $('.pics').masonry({ itemSelector: '.raster'}); 
        $('#all, #leder, #jagd, #kueche, #diverse').removeClass('select'); 
        $('#leder').addClass('select');
    });
  //jagd  
    $('#jagd').on('click', function() {
        $('.leder, .jagd, .kueche, .diverse').show();
        $('.leder, .kueche, .diverse').hide();
        $('.pics').masonry({ itemSelector: '.raster'}); 
        $('#all, #leder, #jagd, #kueche, #diverse').removeClass('select'); 
        $('#jagd').addClass('select');
    });
  //küche  
    $('#kueche').on('click', function() {
        $('.leder, .jagd, .kueche, .diverse').show();
        $('.jagd, .leder, .diverse').hide();
        $('.pics').masonry({ itemSelector: '.raster'}); 
        $('#all, #leder, #jagd, #kueche, #diverse').removeClass('select'); 
        $('#kueche').addClass('select');
    });
   //diverse 
    $('#diverse').on('click', function() {
        $('.leder, .jagd, .kueche, .diverse').show();
        $('.jagd, .kueche, .leder').hide();
        $('.pics').masonry({ itemSelector: '.raster'}); 
        $('#all, #leder, #jagd, #kueche, #diverse').removeClass('select'); 
        $('#diverse').addClass('select');
    });
    
    
    */
    
    //Scrolling on click to location 
    
    
    $('a[href*=#]').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
       && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target
            || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body')
                .animate({ scrollTop: targetOffset }, 800); //set scroll speed here
                return false;
            }
        }
    });
 

    
    
    //Lazy Loading
    
    $(".lazy").lazyload({
        effect: "fadeIn"
    });
    
            
//$('.logo').faceCursor();
    
    
       
    
});