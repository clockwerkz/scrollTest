const wrapper = document.querySelector(".horizontal-nav");
const nav = document.querySelector(".nav");
currentPosition = 0;
startingTouchPosition = 0;

document.onwheel = handleMouseScrollWheel;


document.querySelector(".work__title").addEventListener("click", function(){
    currentPosition = 0;
    nav.style.transform = `translateX(${currentPosition}px)`;
});

function handleMouseScrollWheel(e){
    e.preventDefault();
    let currentPos = e.pageY / window.innerHeight * 100;
    console.log(currentPos);
    if (currentPos > 20) return;
    const dY = e.deltaY;
    //console.log(window.innerWidth - 100);
    if ((dY > 0 && currentPosition - dY >= -(nav.clientWidth - window.innerWidth + 190)) || (dY < 0 && currentPosition - dY <= 0)) {
        currentPosition -=  e.deltaY;
    }
    nav.style.transform = `translateX(${currentPosition}px)`;
    //console.log(currentPosition, nav.clientWidth);
};
