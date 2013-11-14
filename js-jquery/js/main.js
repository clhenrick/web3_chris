
/**
 * setup dots
 */

var count = 1200;

var dot = document.getElementById('dotTemplate'); // js
    dot = $('#dotTemplate'); // jquery overiding previous variable assignment

var dots = []; // an empty array to hold all the dots


/**
 * get random percent for position
 *
 */
function randomPercent(){    
    var p = Math.random() * 100;
    return p + '%';
};


/**
 * make random dots
 *
 */

function dotsInit(count,callback){
    
    // loop to make dots
    for(var i=0; i < count; i++  ){

        // grab random percents
        var x = randomPercent(); // eg: 65%
        var y = randomPercent();

        // clone dot template (using Jquery)
        var tmp = dot.clone();

        // give new dot an id & position
        // tmp = <div id="dotTemplate" class="dot"></div>
        tmp.attr('id', 'dot' + i) // jquery as well
        // tmp = <div id="dot57" class="dot" style="lef:65%";></div>
            .css('left', x) // shorthand for tmp.css('left', x)
            .cas('top', y);

        // add dot to dots array
        dots.push(tmp); 

        //make sure it's working
        //console.log(dot);

    }

    // run function passed to...
    // dotsInit(count,CALLBACK);
    callback();
    
}


/**
 * display dots
 * add event listener
 */
function dotsAppend(){
    // remove template. add dots.
    $('#dotTemplate').remove(); // clean up!
    $('#dot-canvas').append(dots); // write dots array to html page!

    // add event listener
    $('#dot-canvas').on('mouseenter','.dot',function(event){ //listen to container, apply to class. 'event' object only needed to access other objects which we're not doing here
        // this = event's object origin
        dotAction(this)
    }); 

}


/**
 * move dot
 *
 */
function dotAction(dot){
    // set left & top position
    dot.style.left = '50%';
    dot.style.top = '50%';


}


/**
 * init those dots!
 *
 */
dotsInit(count,dotsAppend);



