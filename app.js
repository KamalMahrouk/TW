/*const track = document.getElementById("image-track")

const handleOnDown = e => track.dataset.mouseDownAt=e.clientX;

const handleOnUp = () => {
    track.dataset.mouseDownAt ="0";
    track.dataset.pervPercentage = track.dataset.percentage;
}
const handleOnMove = e => {
    if(track.dataset.mouseDownAt==="0") return;
    
    const mouseDelta= parseFloat(track.dataset.mouseDownAt) - e.clientX, maxDelta = window.innerWidth /2;

    const percentage = (mouseDelta / maxDelta) * -100, nextPercentageUnconstrained =parseFloat(track.dataset.pervPercentage) + percentage,
    nextPercentage = math.max(math.min(nextPercentageUnconstrained, 0), -100);

    track.animate({
        transform: 'translate(${nextPercentage}%, -50%)'},{duration: 1200, fill:"forwards"
    });
    
    for(const image of track.getElementsByClassName("image")){
        image.animate({
            objectPosition: '${100+ nextPercentage}% center'
        },{
            duration:1200, fill:"forwards"
        });
    }
}
window.onmousedown = e => handleOnDown(e);
window.ontouchstart = e => handleOnDown(e.touches[0]);
window.onmouseup = e => handleOnUp(e);
window.ontouchend = e => handleOnUp(e.touches[0]);
window.onmousemove = e => handleOnMove(e);
window.ontouchmove = e => handleOnMove(e.touches[0]);*/

const Listhome = document.querySelector('#Listhome')
const Menuhome = document.querySelector('#Menuhome')

Listhome.addEventListener("click", ()=>{
    Menuhome.classList.toggle("hidden")
    
})


/*window.onmousedown = e => {
    Track.dataset.mouseDownAt = e.clientX
}
window.onmousemove = e => {
    if(track.dataset.mouseDownAt==="0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX, maxDelta = window.innerWidth /2;

    const percentage = (mouseDelta / maxDelta)*-100,
    nextPercentage = parseFloat(track.dataset.pervPercentage) + percentage;

    track.dataset.percentage= nextPercentage;

    track.style.transform = 'translate(${nextPercentage}%, -50%)';
}
window.onmouseup = e => {
    track.dataset.mouseDownAt = "0"
    track.dataset.pervPercentage = track.dataset.percentage;

}*/