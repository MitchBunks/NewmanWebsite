$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });
    document.joeCounter=0;
    $("#etext").on("click",()=>{
        document.joeCounter+=1;
        if(document.joeCounter >=10){
            document.getElementById('etext').innerHTML = 'Joe is Mafia';
            document.getElementById("main-vid").src="/img/easteregg.mp4";
        }
        
    });
});



function easteregg() {
    document.getElementById('etext').innerHTML = 'Joe is Mafia';
}

