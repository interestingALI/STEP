$(document).ready(function(){
    let path = '../img/';
    let image = ["koshka.jpg","dubai.jpg","covid.jpg","maldivi.jpg","ozero.jpg","tayga.jpg","vecher.jpg","voda.jpg","zakat.jpg"];
    let x = 0;
    let timer = setTimeout(change, 3000);

    $("#mySlider1")
        .css({
            position: 'relative',
            margin: 'auto',
            width: '95%',
            height: '80vh',
            'box-shadow': '0 0 10px #666',
        })
        .html(`<div id="container"></div><p id="counter">${x+1 + " / " + image.length}</p><div id="tumb"></div>`)
        .click((e) => {
            if (event.pageY < 500) {
                if(event.pageX > $(document).width() / 2) change(1);
                else change(-1);
            }
        });

    $("#container").css({
        width: '100%',
        height: '100%',
        background: '#eee center/cover',
        'background-image': 'url(' + path + image[x] + ')' 
    });

    $("#tumb")
        .css({
            position: 'absolute',
            bottom: 0,
            'text-align': 'center',
            width: '100%',
            height: '50px'
        })
        .html(image.map((img) => '<img src="' + path + img + '" />').join(''));

        $("#tumb>img").css({
                width: '30px',
                height: '30px',
                margin: '10px',
                'border-radius': '50%',
                border: '3px solid #fff'
            })
            .hover(function(){                                         //
                $(this).css({'box-shadow': "0 2px 2px 2px white",       //
                            'cursor' : "pointer"                      //
                });                                      //
                }, function(){                            //
                $(this).css({'box-shadow': "none"          //
            })                                              //
            .click(() => {                                  //
                change("", $(this).attr("src") )           //
            })                                            //
        });                                             //

        $("#counter").css({                                   //
            position: 'absolute',                              //
            top: 0,                                             //  
            left: '3%',                                         //
            padding: '3px',                                    //
            'background-color': 'rgba(255, 255, 255, 0.4)'    //
            
        })
        


        function change(dir = 1, clickedimage) {
        clearTimeout(timer);

        if (clickedimage != undefined) {                            //
            $("#container")                                             //
            .fadeOut('slow', function() {                                   //
                $(this)
                    .css({'background-image': 'url(' + clickedimage + ')' })    //
                    .fadeIn();                                                    //
                    timer = setTimeout(change, 3000);                             //
            })                                                                  //
            x = image.indexOf(clickedimage.replace("../img/", ""));         //
            $("#counter").text( x+1 + " / " + image.length)             //
        }                                                           //

        else {
            x += dir;
            if(x > image.length - 1) x = 0;
            if(x < 0) x = image.length - 1;
            $("#container")
            .fadeOut('slow', function() {
                $(this)
                    .css({'background-image': 'url(' + path + image[x] + ')' })
                    .fadeIn();
                    timer = setTimeout(change, 3000);
                    $("#counter").text( x+1 + " / " + image.length)    //
            })
        }    
    }
})