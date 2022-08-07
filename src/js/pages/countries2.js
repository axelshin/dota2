function fitFontSize( elem, parent, classDone ){
    let $elem = $(elem),
        $parent = $(parent);

    if( $elem.length && $parent.length ){

        $elem.each(function(index){
            let $this = $(this),
                $elemFontSize = parseInt( $elem.css('fontSize') ),
                doFitFontSize = false,
                isDone = $this.hasClass(classDone) || false;
            if ( parseInt( $this.outerWidth() ) > parseInt( $parent.width() ) && doFitFontSize == false && isDone == false ){
                
                for(var i = 1; i < $elemFontSize; i ++ ){                    
                    
                    if ( parseInt( $this.outerWidth() ) <= parseInt( $parent.width() ) ){
                        doFitFontSize = true;
                        $this.addClass( classDone )
                        $this.parents('.section').addClass( classDone )
                        break
                    }
                    else {
                        $this.css('fontSize', parseInt( $this.css('fontSize') ) - i )
                    }
                }
            }
            else{
                $this.parents('.section').addClass( classDone )
            }
        })
    }
}

var isSafari = false;

var ua = navigator.userAgent.toLowerCase(); 
if (ua.indexOf('safari') != -1) { 
    if (ua.indexOf('chrome') > -1) {
    
    } else {
        isSafari = true;
    }
}

function cornerText(obj){
    let settings = {}

    if (!obj) return

    settings = obj

    let corner = settings.corner,        
        spanLeft = settings.spanLeft,
        spanRight = settings.spanRight,
        letterClass = settings.letterClass,
        cornerElem = settings.cornerElem,
        cornerElemClass = settings.cornerElemClass,
        elemModifiedClass = settings.elemModifiedClass,
        safariFix = settings.safariFix || false,
        elemsChangeWidth = settings.elemsChangeWidth || false;

    if( corner.length > 0 ){

        corner.each(function(ind){

            let $this = $(this),
                wasCornered2 = $this.hasClass('wasCornered') || false;

            if ( wasCornered2 == false ){

                let finalText = '',
                    letterWrapRecurseSettings = {};
                
                letterWrapRecurseSettings.tagClass = '';

                LetterWrapRecurse($this)

                function LetterWrapRecurse(obj, first){
                    
                    let arrLvl1 = '';

                    let $nodesLvl1 = obj.contents().filter(function (){
                        return this.nodeType == 1 || 3;
                    });

                    for(let key in $nodesLvl1){

                        let elem = $nodesLvl1[key];
                        let text = elem.textContent || false;
                        if( text && text.trim() != '' && elem.nodeType == '3' ){

                            let a = $(elem).text();
                            let b = a.length;
                            let c = [];
                            let d = '';
                            for(let i = 0; i < b; i++){
                                c.push(a.charAt(i));
                            }
                            
                            c.forEach(function(val){
                                
                                if( val == '-' && isSafari && safariFix ){
                                    d += spanLeft + val + ' ' + spanRight;
                                }
                                else if( val != '' )
                                {
                                    d += spanLeft + val + spanRight;
                                }                    
                            });
                            arrLvl1 += d;
                        }
                        else if ( elem.nodeType == '1' && text == '' ){
                            arrLvl1 += elem.outerHTML;
                        }
                        else if ( elem.nodeType == '1' && text != '' ){

                            let $elem = $(elem);
                            let arrLvl2 = '';

                            let $nodesLvl2 = $elem.contents().filter(function (){
                                return this.nodeType == 1 || 3;
                            });

                            for(let key2 in $nodesLvl2){
                                

                                let elem2 = $nodesLvl2[key2];
                                let text2 = elem2.textContent || false;
                                if( text2 && text2.trim() != '' && elem2.nodeType == '3' ){

                                    let a2 = $(elem2).text();
                                    let b2 = a2.length;
                                    let c2 = [];
                                    let d2 = '';
                                    for(let i2 = 0; i2 < b2; i2++){
                                        c2.push(a2.charAt(i2));
                                    }
                                    
                                    c2.forEach(function(val2){
                                        
                                        if( val2 == '-' && isSafari && safariFix ){
                                            d2 += spanLeft + val2 + ' ' + spanRight;
                                        }
                                        else if( val2 != '' )
                                        {
                                            d2 += spanLeft + val2 + spanRight;
                                        }
                                    });

                                    arrLvl2 += d2;

                                }

                                else if ( elem2.nodeType == '1' && text2 == '' ){
                                    arrLvl2 += elem2.outerHTML;
                                }

                                else if ( elem2.nodeType == '1' && text2 != '' ){

                                    let $elem2 = $(elem2);
                                    let arrLvl3 = '';

                                    let $nodesLvl3 = $elem2.contents().filter(function (){
                                        return this.nodeType == 1 || 3;
                                    });

                                    for(let key3 in $nodesLvl3){

                                        let elem3 = $nodesLvl3[key3];
                                        let text3 = elem3.textContent || false;
                                        if( text3 && text3.trim() != '' && elem3.nodeType == '3' ){
                                            let a3 = $(elem3).text();
                                            let b3 = a3.length;
                                            let c3 = [];
                                            let d3 = '';
                                            for(let i3 = 0; i3 < b3; i3++){
                                                c3.push(a3.charAt(i3));
                                            }
                                            
                                            c3.forEach(function(val3){
                                                
                                                if( val3 == '-' && isSafari && safariFix ){
                                                    d3 += spanLeft + val3 + ' ' + spanRight;
                                                }
                                                else if( val3 != '' )
                                                {
                                                    d3 += spanLeft + val3 + spanRight;
                                                }
                                            });

                                            arrLvl3 += d3;

                                        }
                                        else if ( elem3.nodeType == '1' && text3 == '' ){
                                            arrLvl3 += elem3.outerHTML;
                                        }
                                        else if ( elem3.nodeType == '1' && text3 != '' ){



                                            let $elem3 = $(elem3);
                                            let arrLvl4 = '';

                                            let $nodesLvl4 = $elem3.contents().filter(function (){
                                                return this.nodeType == 1 || 3;
                                            });
                                            
                                            for(let key4 in $nodesLvl4){

                                                let elem4 = $nodesLvl4[key4];
                                                let text4 = elem4.textContent || false;
                                                if( text4 && text4.trim() != '' && elem4.nodeType == '3' ){

                                                    let a4 = $(elem4).text();
                                                    let b4 = a4.length;
                                                    let c4 = [];
                                                    let d4 = '';
                                                    for(let i4 = 0; i4 < b4; i4++){
                                                        c4.push(a4.charAt(i4));
                                                    }
                                                    
                                                    c4.forEach(function(val4){
                                                        
                                                        if( val4 == '-' && isSafari && safariFix ){
                                                            d4 += spanLeft + val4 + ' ' + spanRight;
                                                            
                                                        }
                                                        else{
                                                            d4 += spanLeft + val4 + spanRight;
                                                        }
                                                        
                                                    });
        
                                                    arrLvl4 += d4;
        
                                                }
                                            }
                                            $elem3.html( arrLvl4 )
                                            arrLvl3 += elem3.outerHTML

                                        }

                                    }

                                    $elem2.html( arrLvl3 )

                                    arrLvl2 += elem2.outerHTML

                                }


                            }

                            $elem.html( arrLvl2 )
                            arrLvl1 += elem.outerHTML;
                            
                        }
                    }                   

                    $(obj).html(arrLvl1)
                }
            }
            
            var d = $this.find( '.' + letterClass );
            var e = [];
            d.each(function(){
                e.push($(this).offset().left + $(this).outerWidth());
            });

            var f = m_max(e);

            var ga = $this.offset().left;

            var gb = f - ga;

            gb = gb + 1; // поправка на бордюр

            // gb = gb + 5; // чуть-чуть свободного пространства
            

            var ka = $this.offset().left;
            var kb = $this.outerWidth();
            var kc = ka + kb;

            if (kc >= gb){
                if ( !$this.find('.' + cornerElemClass).length ){
                    $this.append( cornerElem );
                }                
                $this.find( '.' + cornerElemClass ).css('left', gb);
                if( elemsChangeWidth ){
                    $this.parent().find('.' + elemsChangeWidth)
                        .css({
                            'width': gb,
                            'paddingRight': '2px',
                            'paddingLeft': $this.css('paddingLeft'),
                        });
                }
                $this.parent().css('width', 'auto');
                $this.css('width', gb);
                $this.addClass( elemModifiedClass );
            }
            else{
            console.log('ну кто бы мог подумать!');
            }

            function m_max(x){
                var max = x[0];
                x.forEach(function(val){
                    if (val > max){
                    max = val;
                    }
                });
                return max;
            }
            $this.addClass('wasCornered');
            $this.find( '.' + letterClass ).each(function(){
                if( $(this).width() == 0 && $(this).next().width() == 0 ) {
                    $(this).remove();
                }
            });
        })
    }
}

let bannerSettings = {
    corner: $('.corner.corner--banner'),
    spanLeft: '<span class="corner-inText">',
    spanRight: '</span>',
    letterClass: 'corner-inText',
    cornerElem: '<div class="corner-empt"></div>',
    cornerElemClass: 'corner-empt',
    elemModifiedClass: 'corner--modified',
    elemsChangeWidth: 'banner__title',
}

let factsSettings = {
    corner: $('.corner.corner--facts2'),
    spanLeft: '<span class="corner-inText">',
    spanRight: '</span>',
    letterClass: 'corner-inText',
    cornerElem: '<div class="corner-empt"></div>',
    cornerElemClass: 'corner-empt',
    elemModifiedClass: 'corner--modified',
    elemsChangeWidth: 'facts2__title',
}


let introSettings = {
    corner: $('.corner.intro__title'),
    spanLeft: '<span class="corner-inText">',
    spanRight: '</span>',
    letterClass: 'corner-inText',
    cornerElem: '<div class="corner-empt"></div>',
    cornerElemClass: 'corner-empt',
    elemModifiedClass: 'corner--modified',
    elemsChangeWidth: '',
    safariFix: true,
}

// для денежного варианта
// let introSettings = {
//     corner: $('.corner.intro--corner'),
//     spanLeft: '<span class="corner-inText">',
//     spanRight: '</span>',
//     letterClass: 'corner-inText',
//     cornerElem: '<div class="corner-empt"></div>',
//     cornerElemClass: 'corner-empt',
//     elemModifiedClass: 'corner--modified',
//     elemsChangeWidth: '',
//     safariFix: true,
// }

// let stepSettings = {
//     corner: $('.step2__desc.corner--step2.corner'),
//     spanLeft: '<span class="corner-inText">',
//     spanRight: '</span>',
//     letterClass: 'corner-inText',
//     cornerElem: '<div class="corner-empt"></div>',
//     cornerElemClass: 'corner-empt',
//     elemModifiedClass: 'corner--modified',
//     elemsChangeWidth: '',
//     safariFix: true,
// }
// для денежного варианта end


$(function(){
    setTimeout(function(){
        fitFontSize('.banner__subtitle.corner.corner--banner', '.banner', 'fit-font-size-done')
        fitFontSize('.corner.corner--facts2', '.facts2__left.facts2__left-js', 'fit-font-size-done')        
        fitFontSize('.intro__title', '.intro__inner', 'fit-font-size-done')
        cornerText(bannerSettings);
        cornerText(factsSettings);
        cornerText(introSettings);
        // для денежного варианта
        // cornerText(stepSettings);
        // для денежного варианта end
        if( $('.intro__content-left .intro__note').length ){
            var $wWidth = $(window).width();
            if ( $wWidth >= 576 ){
                $('.intro__content-left').each(function(){
                    var introNote = $(this).find('.intro__note'),
                        introContentLeft = $(this).find('.btnn-primary--intro');
                    introNote.css('left', introContentLeft.offset().left );
                })
            }
        }
    }, 500);
})