camera = document.getElementById("camera");
Webcam.set({
    width:350,
    height:300,
    Image_format:"jpg",
    jpg_quality:90
});
Webcam.attach("camera")
function takepicture(){
  Webcam.snap(function(data_uri){
      document.getElementById("snap").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
  })
}
console.log("ml5 version",ml5.version)
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/nKrdInWcK/model.json",modell);
function modell(){
    console.log("model is loaded");
}