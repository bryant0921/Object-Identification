img = "";
status = "";

function setup()
{
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocoSSD', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects"
}

function preload()
{
    img = loadImage("dog_cat.jpg");
}

function draw()
{
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("dog",55, 85);
    textSize(25);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 350);

    fill("#FF0000");
    text("cat",320, 120);
    textSize(25);
    noFill();
    stroke("#FF0000");
    rect(310, 100, 270, 320);

    fill("#FF0000");
    text("bowl",250, 320);
    textSize(25);
    noFill();
    stroke("#FF0000");
    rect(250, 300, 150, 100);
}

function modelLoaded()
{
    console.log("Model Loaded");
    status = "True";
    objectDetector.detect(img, gotResult);
}

function gotResult(error, result)
{
    if (error)
    {
        console.error(error);
    }
    else
    {
        console.log(result);
    }
}