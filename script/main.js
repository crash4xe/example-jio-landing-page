function execute(image, mynext){
    var url = image.getAttribute('src'); 
    var filename = document.querySelector('header > div._ab8w._ab94._ab97._ab9i._ab9k._ab9p > div._ac0l > div > div > div > div > a').text;
    downloadImage(url, filename);
    mynext();
}

async function downloadImage(imageSrc, filename) {
    const image = await fetch(imageSrc);
    const imageBlog = await image.blob();
    const imageURL = URL.createObjectURL(imageBlog);
  
    const link = document.createElement('a');
    link.href = imageURL;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function getdata(myexecute){
    var imagesrc = document.querySelector('video._aa63 > source');
    if(imagesrc == null){
        var imgyes = 1;
        var imagesrc = document.querySelector('img._aa63');
        }
        myexecute(imagesrc, next);
}

function next(){
    var nextbtn = document.querySelector('section > div > button._ac0d');
    nextbtn.click();
    getdata(execute);
}

getdata(execute);