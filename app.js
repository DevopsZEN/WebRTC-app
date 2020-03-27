const video = document.querySelector("#video");
const start = document.querySelector("#start");
const constraints = {
    'video': true,
    'audio': true,
}

start.addEventListener("click", () =>{
    navigator.mediaDevices.getUserMedia(constraints)
    .then(stream => {
        video.srcObject = stream;
    })
    .catch(error => {
        console.error('Error accessing media devices.', error);
    });
}, false);