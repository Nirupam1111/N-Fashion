const CreateImage = () => {

    const numberOfImages = 15;
    let i;
    const imageSources = Array.from(Array(numberOfImages).keys()).map((i) => 'https://source.unsplash.com/collection/9948714?fashion=true' + i);
    // how many times to fire the event per second
    const timesPerSecond = .2;

    function preloadImages(images) {
        for (i = 0; i < images.length; i++) {
            let l = document.createElement('link')
            l.rel = 'preload'
            l.as = 'image'
            l.href = images[i]
            document.head.appendChild(l);
        }
    }

    function animate(e) {
        var videoContainer = document.querySelector('.videoContainer');
        var image= document.createElement('div');
        image.classList.add('trail');
        var sizeWidth= 200;
        var sizeHeight= 400;

        image.style.transition='2s ease';
        image.style.position= 'fixed';

        image.style.top=  e.pageY - sizeHeight/2 + 'px';
        image.style.left= e.pageX - sizeWidth/2 + 'px';

        image.style.width= sizeWidth + 'px';
        image.style.height= sizeHeight + 'px';
            
        image.style.backgroundImage = 'url(https://source.unsplash.com/collection/9948714?fashion=true'+  Math.floor(Math.random()*numberOfImages) +')';
        image.style.backgroundSize = 'cover';
        // image.style.border= 'white 1px solid';

        image.style.pointerEvents= 'none';
        image.style.zIndex= 1;
        videoContainer.appendChild(image);

        //opacity and blur animations
        window.setTimeout(function() {
            image.style.opacity = 0;
            image.style.filter = 'blur(6px)';
        }, 80);   

        window.setTimeout(function() {
            videoContainer.removeChild(image);
        }, 2100);
    };

    window.onload= function() {
    preloadImages(imageSources);
    var wait = false;

    window.addEventListener('mousemove', function(e) {
        if (!wait) {
        wait = true;
        setTimeout(() => { wait = false }, timesPerSecond * 1000);
        animate(e);
        }
    });
    };


    return null
}

export default CreateImage
