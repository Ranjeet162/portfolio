$(document).ready(function(){
    $('#profile_ripple').ripples({
        resolution: 512,
        dropRadius:10
    
    });
    const bars = document.querySelectorAll('.progress_bar');
    bars.forEach(function(bar){
        let percentage = bar.dataset.percent;
        let tootltip = bar.children[0];
        tootltip.innerText = percentage +'%';
        bar.style.width = percentage +'%';
    })


    //counter

    const counters = document.querySelectorAll('.counter');
    function runCounter(){
        counters.forEach(counter =>{
            counter.innerText =0;
            let target = +counter.dataset.count;
            let step = target/100;

            let countIt = function(){
                let displayedCount = +counter.innerText;
                if(displayedCount<target){
                 counter.innerText = Math.ceil(displayedCount + step);
                 setTimeout(countIt,1);
                }else{
                    counter.innerText= target;
                }
            }
            countIt();
        })
    }
   
     let counterSection = document.querySelector('.counter_section');
     let options ={
         rootMargin : '0px 0px -100px 0px'
     }
     let done = 0;
     const SectionObserver = new IntersectionObserver(function(entries){
        if(entries[0].isIntersecting && done!== 1){
            // console.log('intersecting');
              done = 1;
            runCounter();
         }
     },options)

     SectionObserver.observe(counterSection);


     //image filter

     var $wrapper = $('.portfolio_wrapper');

     //initialize isotope
     $wrapper.isotope({
         filter:'*',
         layoutMode:'masonry',
         animationOption : {
             duration: 750,
             easing:'linear'
         }
     })

     let links = document.querySelectorAll('.tabs a');
     links.forEach(link =>{
         let selector = link.dataset.filter;
         link.addEventListener('click',function(e){
             e.preventDefault();


             $wrapper.isotope({
                filter:selector,
                layoutMode:'masonry',
                animationOption : {
                    duration: 750,
                    easing:'linear'
                }
            });
            
            links.forEach(link =>{
                link.classList.remove('active');
            })
            e.target.classList.add('active');
         });
     })


     //Magnify pop up
     $('.magnify').magnificPopup({
         type:'image',
         gallery:{
             enabled:true
         },
         zoom:{
             enable:true
         }

     });

     //slider

     $('.slider').slick({
        arrows:false,
        autoplay:true
     });

});