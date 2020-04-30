console.log('About to fetch a rainbow');
catchImage('rainbow')
.then(response => {
    console.log('Yey');
})
.catch(error => {
    console.log('error');
    console.error(error);
}
);

catchImage('earth')
.then(response => {
    console.log('Yey');
})
.catch(error => {
    console.log('error');
    console.error(error);
}
);
async function catchImage(image){
    var imageWithEnding = image + '.jpg';
    const response = await fetch(imageWithEnding);
    const blob = await response.blob();
    document.getElementById(image).src = URL.createObjectURL(blob);
}