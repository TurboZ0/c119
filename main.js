function preload () {}


function setup() {
canvas=createCanvas(400, 400);    
canvas.position(750,400);
video=createCapture(VIDEO);
video.hide();

holder= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/41Hg0wPQ-/model.json", modelcool);
}
function modelcool() {
console.log("Models can be cool as well you know")
}

function draw() {
    image(video, 0, 0, 400, 400);
    holder.classify(video, holding);
      
}
function holding(error, result) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(result);
        document.getElementById("object").innerHTML= result[0].label;
        document.getElementById("accuracy").innerHTML=result[0].confidence.toFixed(3);
    }
}