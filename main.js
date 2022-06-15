Prediction_1 = "";
Prediction_2 = "";

Webcam.set({
width :340,
height : 300,
image_format : "png",
png_quality:100,

});

Camera = document.getElementById("camera");
Webcam.attach(Camera);

function Take_Snapshot() {
    Webcam.snap(function(data_uri){
 document.getElementById("result").innerHTML="<img id='ro' src='"+data_uri+"'>";

    });

}

console.log("ml5version:"+ml5.version);

Classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/tYyZPbSkR/model.json",model_loaded);

function model_loaded(){
    console.log("Model has been loaded.")

}

function bolbacchan(){
    Bol = window.speechSynthesis;
    bol_1 ="The first prediction is ,"+Prediction_1;
    bol_2 =" And The Second  prediction is, "+Prediction_2;
    New_bol =  new SpeechSynthesisUtterance(bol_1+bol_2);
    Bol.speak(New_bol);

}

function r(){
    cp = document.getElementById("ro");
    Classifier.classify(cp,gr);
    
    }
    
    function gr(error,results){
        if (error){
            console.error(error);
    
        }
        else {
            console.log(results);
            document.getElementById("_1").innerHTML=results[0].label;
            document.getElementById("_2").innerHTML=results[1].label;
            Prediction_1 =  results[0].label;
            Prediction_2 = results[1].label;
            bolbacchan();
            if(results[0].label=="Thumbs up"){
                document.getElementById("i_1").innerHTML="&#128077;";
              }
              if(results[0].label=="Okay"){
                  document.getElementById("i_1").innerHTML="&#128076;";
                }
                if(results[0].label=="Vctory"){
                  document.getElementById("i_1").innerHTML="&#9996;";
                }
                if(results[1].label=="Vctory"){
                  document.getElementById("i_2").innerHTML="&#9996;";
                }
                if(results[1].label=="Thumbs up"){
                  document.getElementById("i_2").innerHTML="&#128077;";
                }
                if(results[1].label=="Okay"){
                    document.getElementById("i_2").innerHTML="&#128076;";
                  }
      
              
    
        }
    }
    
    
    