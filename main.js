leftwristX = 0;
rightwristX = 0;
diffrence = 0;
noseX = 0;
noseY = 0;
function setup(){
    canvas = createCanvas(550,450)
   canvas.position(960,150)
   video = createCapture(VIDEO)
   video.position(360,150)
   video.size(450,450)
   
   PoseNet = ml5.poseNet(video,modelLoaded);
    PoseNet.on('pose',gotPoses)
   }
function modelLoaded(){
    console.log("model has been loaded")
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftwristX = results[0].pose.leftWrist.x;
        rightwristX = results[0].pose.rightWrist.x;
        diffrence = floor(leftwristX - rightwristX);
        console.log("leftwristX = "+ leftwristX + "rightwristX = "+ rightwristX +"diffrence = "+ diffrence);
    }
}
   function draw(){
    background("#FFFFFF")
    textSize(7)
    fill("#FFDEAD")
    text('Vaibhav',30,40)
    document.getElementById("font-#").innerHTML = "The size of the Text is "+ diffrence +"px";
   }