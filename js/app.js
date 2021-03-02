const wrapper = document.querySelector(".horizontal-nav");
const nav = document.querySelector(".nav");
currentPosition = 0;
startingTouchPosition = 0;

wrapper.onwheel = handleMouseScrollWheel;
wrapper.addEventListener("touchstart", (e)=>{
    const { clientX } = e.touches[0];
    startingTouchPosition = clientX;
});
wrapper.addEventListener("touchmove", (e)=>{
    const { clientX, clientY } = e.touches[0];
    console.log(clientX, clientY);
    currentPosition += (clientX - startingTouchPosition) * .05;
    nav.style.transform = `translateX(${currentPosition}px)`;
});

document.querySelector(".work__title").addEventListener("click", function(){
    currentPosition = 0;
    nav.style.transform = `translateX(${currentPosition}px)`;
});

function handleMouseScrollWheel(e){
    e.preventDefault();
    const dY = e.deltaY;
    console.log(window.innerWidth - 100);
    if ((dY > 0 && currentPosition - dY >= -(nav.clientWidth - window.innerWidth + 190)) || (dY < 0 && currentPosition - dY <= 0)) {
        currentPosition -=  e.deltaY;
    }
    nav.style.transform = `translateX(${currentPosition}px)`;
    console.log(currentPosition, nav.clientWidth);
};
