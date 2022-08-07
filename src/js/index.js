function imgResize() {
    if ($(window).width() < 576) {
        // $(".products-cards").addClass("owl-carousel");
        // picSM.data( "srcset" );
        var picSM = $(".picture--sm").children();

        picSM.each(function(i,v){
            var dataSrcSet= $(v).data('srcset');
            var dataSrc= $(v).data('src');
            dataSrcSet? $(v).attr( "srcset", dataSrcSet ) : null;
            dataSrc ? $(v).attr( "src", dataSrc ) : null;
        })
    
    } else if ($(window).width() < 1024) {
        // $(".products-cards").addClass("owl-carousel");        
        var picMD = $(".picture--md").children();

        picMD.each(function(i,v){
            var dataSrcSet= $(v).data('srcset');
            var dataSrc= $(v).data('src');
            dataSrcSet? $(v).attr( "srcset", dataSrcSet ) : null;
            dataSrc ? $(v).attr( "src", dataSrc ) : null;
        })
    
    } else if ($(window).width() >= 1024) {        
        var picLG = $(".picture--lg").children();

        picLG.each(function(i,v){
            var dataSrcSet= $(v).data('srcset');
            var dataSrc= $(v).data('src');
            dataSrcSet? $(v).attr( "srcset", dataSrcSet ) : null;
            dataSrc ? $(v).attr( "src", dataSrc ) : null;
        })
    }    
}

imgResize();
// cornerText();
// setTimeout(cornerText, 1000)

$(window).resize(function() {
    imgResize();
    // cornerText();
});
// $( window ).on( "load", function() {
//     cornerText();
// });

import "./import/modules";
import "./import/components";