//function createImage() {}

window.onload = function WindowLoad(event) {
var image = document.getElementById('image');

function getUrl() {
    var url = prompt('Enter image URL');
    
    if (url) { // Do string and URL validation here and also for image type
        return url;
    } else {
        return getUrl();
    }
}

image.src = getUrl();

}