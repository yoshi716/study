$(window).on('load',function(){


    $('#first-line').fadeIn(500).delay(1000).fadeOut(500);

    $('#second-line').delay(2000).fadeIn(500).delay(1000).fadeOut(500);

    $('#first-showrapper').delay(4000).fadeOut(500);

    $('#second-show').delay(4000).fadeIn(500);
    
    $('#btn').click(function(){
        window.open("https://www.bing.com/search?pglt=41&q=google&cvid=8d3ea4ef53b74a78be7fe7bb3af2013e&aqs=edge.0.0j69i59j0l2j46j69i65j69i60l3.4232j0j1&FORM=ANNTA1&PC=DCTS",null,'width=100,toolbar=yes,menubar=yes,scrollbars=yes');
    });

    $('#btn').hover(
        function(){
            $('#top-form').show(1000);
        },
        function(){

        }
    );

    
});



