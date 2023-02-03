
$(document).ready(function () {   // this func will make sure that the jquery works only after the page has been loaded completely


    console.log($);                                            //dollar will work only if jquery is included

    $('p').click(function () {                                //to hide the text on click
        console.log("click to hide the text")
        // $('p').hide();
        $(this).hide();                                       //will hide a specific text
    });


    // events in jquery

    $('p').dblclick(function () {

        alert("double click");

    })
    $('p').mouseenter(function () {
        console.log("mouse has entered");
    })

    // on method



    // hide , show  AAAAAAAANIMATION LOL
    $('.lol').hide(2000);  // will hide after 2000 ms
    console.log("hidden");
    $('.lol').show(3000); // visible after 4000 ms
    console.log("visible");
    $('.lol1').slideDown(1000);     // op anmination when used with toggle hide and show
    $('.lol1').hide(4000);

    // TOGGLE button
    $('.btn').click(function () {
        $('.pp').toggle(1000);
    });

    // animate function
    $('.pp').animate({
        // to perform animation one by one in a queue formate write these code in searate lines
        height: '150px',  //
        width: '300px'    //

    }, 2000)

    //     $('.pp').stop(10000); //to stop animation

});

// $('.cont').mouseenter(function () {
//     setTimeout
//     alert("refresh page to reload your tasklist if you have closed it!")
// })


