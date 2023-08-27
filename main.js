Webcam.attach( '#camera' );

camera = document.getElementById("camera");
      
Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
  });

  classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Y8SVGIw2K/model.json',modelLoaded);
