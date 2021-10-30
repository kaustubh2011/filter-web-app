nosex=0;
nosey=0;
function preload()
{
must=loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}
function setup()
{
    canvas=createCanvas(300,300);
    canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
posenet=ml5.poseNet(video,modelloaded);
posenet.on('pose',gotposes);
}
function modelloaded()
{
console.log("model is loaded");
}
function gotposes(results)
{
    if(results.length>0)
    {
        console.log(results);
        nosex=results[0].pose.nose.x-15;
        nosey=results[0].pose.nose.y;
    }
}
function draw()
{
image(video,0,0,300,300);
image(must,nosex,nosey,30,30);
}
function take_pic()
{
    save('myfilterimage.png');
}