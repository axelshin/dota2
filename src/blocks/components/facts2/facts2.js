gsap.registerPlugin(ScrollTrigger);

function facts2(){

    let t1, t2, t3, t4, t0,
        endTriggerMobile = '.fl_start_lp',
        endMobile = 'bottom bottom';

    if ( window.innerWidth < 576 ){
        endTriggerMobile = '.facts2__item-js-3';
        endMobile = 'top bottom';
    }
    t0 = {
        trigger: '.section--facts2',
        toggleActions: 'play none none none',
        start: '10% bottom',
        endTrigger: endTriggerMobile,
        end: endMobile,
        markers: false,
        scrub: 3,
    }

    t1 = gsap.timeline({
        scrollTrigger: t0
    });
    t2 = gsap.timeline({
        scrollTrigger: t0
    });
    t3 = gsap.timeline({
        scrollTrigger: t0
    });
    t4 = gsap.timeline({
        scrollTrigger: t0
    });

    t1.from('.facts2__item-js-2',{
        y: '40%',
        ease: 'back.out(4)',
    })
    
    t2.from('.facts2__item-js-1',{
        y: '-30%',
        ease: 'back.out(1)',
    })
    
    t3.from('.facts2__item-js-3',{
        x: '-60%',
        ease: 'back.out(1)',
    })

    t4.to('.facts2__left-js',{
        backgroundSize: "118% 118%", 
        autoRound:false, 
        ease: Power1.ease0ut
    })
}

setTimeout(function(){
    facts2();
},500);