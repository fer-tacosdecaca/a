Webcam.attach( '#camera' );

camera = document.getElementById("camera");
      
Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
  });

  

  function pipi(){
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    })
  } 











  console.log("ml5 version:",ml5.version)


  classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Y8SVGIw2K/model.json',modelLoaded);

 function modelLoaded(){
console.log("ta bien :)")
  }

function caca(){
  img = document.getElementById('selfie_image');
  classifier.classify(img,gotresult);
}

function gotresult(results){
console.log(results)
}
