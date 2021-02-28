const horiztontalNavs = document.querySelectorAll(".horizontal-nav");
let isMouseOver = false;

horiztontalNavs.forEach(wrapper => {
    console.log(wrapper);
    wrapper.addEventListener("mouseenter", handleMouseEnter);
    wrapper.addEventListener("mouseout", handleMouseOut);
});

function handleMouseOut() {
    console.log("mouse exited nav bar");
}

function handleMouseEnter(){
    console.log("entered nav bar");
}

function handleMouseScrollWheel(e){
    if (isMouseOver) {
        e.preventDefault();
    }
};