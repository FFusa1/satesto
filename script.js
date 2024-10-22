const scrollers = document.querySelectorAll(".scroller");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
}

function addAnimation() {
    scrollers.forEach(scroller => {
        scroller.setAttribute("data-animated", true);

        const scrollerInner = scroller.querySelector('.scroller__inner');
        const scrollerContent = Array.from(scrollerInner.children);

        const totalWidth = scrollerContent.length * (scrollerContent[0].offsetWidth + 32); 
        scrollerInner.style.width = `${totalWidth * 2}px`; 
    });
}
