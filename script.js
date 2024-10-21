const scrollers = document.querySelectorAll(".scroller");

if(!windows.matchMedia("(prefers-reduced-motion: reduce)").matches){
    addAnimation();
}

function addAnimation(){
    scrollers.forEach(scroller =>{
        scroller.setAttribute("data-animated", true)

        const scrollerInner = scroller.querySelector('.scroller__inner');
        const scrollerContent = array.from(scrollerInner.children);
    
        scrollerContent.forEach(item => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden",true)
            scrollerInner.appendChild(duplicatedItem);
        })
    })
}