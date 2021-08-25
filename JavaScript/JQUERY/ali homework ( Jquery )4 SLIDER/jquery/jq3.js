$(() => {
    let path = '../img/';
    let image = ["koshka.jpg","dubai.jpg","covid.jpg","maldivi.jpg","ozero.jpg","tayga.jpg","vecher.jpg","voda.jpg","zakat.jpg"];
    let timer = setTimeout(change, 3000);
    let x = 0;

    $("#mySlider2")
        .css({
            position: 'relative',
            margin: 'auto',
            width: '95%',
            height: '80vh',
            'box-shadow': '0 0 10px #666',
            overflow: 'hidden'
        })
        .append('<div id="container"></div>')
        .append('<div id="tumbs"></div>')
        .click( (e) => {
            if (e.pageX < $(window).width() / 2) x -= 2;
            change();
        } );

    $("#container")
        .css({
            position: 'absolute',
            height: '100%',
            display: 'flex',
        });
    
    $("#tumbs")
        .css({
            position: 'absolute',
            width: '100%',
            bottom: 0,
            'text-align': 'center'
        })
    
    image.forEach(img => {
        $("#container").append('<img src="' + path + img + '" />');
        $("#tumbs").append('<img src="' + path + img + '" />');
    });

    $("#container>img")
        .css({
            flex: '0 0 ' + $("#mySlider2").width() + 'px',
            height:  $("#mySlider2").height() + "px",
            'object-fit': 'cover'
        })
    
    $("#tumbs>img")
        .css({
            width: '30px',
            height:  '30px',
            'border-radius': '50%',
            margin: '10px',
            border: '3px solid #fff',
            'object-fit': 'cover',
            cursor: 'pointer',
            transition: '.2s'
        })
        .click( function(e){
            e.stopPropagation();
            x = $(this).index() - 1;
            change();
        } )

    function change() {
        clearTimeout(timer);
        if( x < image.length - 1 ) x++; else x = 0;
        if( x < 0) x = image.length - 1;
        
        $("#container")
            .animate(
                
                { left: -1 * x * $("#mySlider2").width() + 'px' },
                "slow", 
                ()=> {
                    tumbScale($("#tumbs").children(), 1);
                    tumbScale($("#tumbs").children().eq(x), 1.2);
                }
            )
            
            

        timer = setTimeout(change, 3000);
    }
    function tumbScale(elem, coof) {
        elem.css({
            transform: 'scale(' + coof + ')',
        })
    }
})