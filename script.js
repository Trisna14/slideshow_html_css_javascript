const carousel_img = document.querySelectorAll('.carousel_img');
const btn_carousel = document.querySelectorAll('.button_carousel');

const number_img = carousel_img.length * 100;
let transform = 0;

btn_carousel.forEach (btn => {

    btn.addEventListener ('click', event_btn => {

        // console.log(event_btn.target.id);

        if (event_btn.target.id === 'next') {
                
            transform -= 100;
            if (transform <= -number_img) {
                transform = 0;
            } 
        } else if (event_btn.target.id === 'prev') {
            transform += 100;
            if (transform >= 100) {
                transform = -number_img + 100;
            }
        }

        carousel_img.forEach (event_img => {

            event_img.style.transform = 'translateX('+transform+'%)';
            event_img.style.transition = '0.8s';

        });        
        
        console.log(transform);

    });

});

