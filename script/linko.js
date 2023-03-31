var retry = 0;
function execute(image){
     if(image == null){
        next();
    }else {
        var url = image.getAttribute('src'); 
        var filename = document.querySelector('header  div.B7GUE > div > div > div > div > a').text;
       if(prevurl != url)
       {downloadImage(url, filename);}
        var prevurl = url;
     }
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

function getdata() {
   var imagesrc = document.querySelector('video._aa63 > source');
    if(imagesrc == null){
        var imgyes = 1;
        var imagesrc = document.querySelector('img._aa63');
          }
    execute(imagesrc);
    if(retry <= 0){
       
         if(imgyes == 1) { setTimeout(getdata, 5000); }
           else { setTimeout(getdata, 8300); } 
    }
    else{
        console.log('end');
    }
} 
getdata();

function next() {
   var nostory = document.querySelector('section > div > div._9db68 > p').textContent;
   if(nostory == 'This story is no longer available'){
      var nextbtn = document.querySelector('section > div > button.FhutL');
       nextbtn.click();
   } else {
      console.log('selector not found');
        return retry++;
   }
   
}