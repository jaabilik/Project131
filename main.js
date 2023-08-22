img = "";
status = "";
objects = [];

function preload() {
    bedroom = loadImage('bedroom.jpg');
}

function setup() {
    canvas = createCanvas(500, 420);
    canvas.position(400, 100);
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting... NOT your ip, probably your family ancestry";
}

  function draw() {
    image(bedroom, 0, 0, 640, 420);

    if(status != "") {
        for (i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "Status: Ip not found.. but object detected!";
            fill("#CD0241");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label+" "+percent+"%", objects[i].x, objects[i].y);
            noFill();
            stroke("#CD0241");
            rect(objects[i].x, objects[i].y, objects[i].width + 15, objects[i].height + 15);
        }
    }
}

function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
}