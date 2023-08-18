img = "";
status = "";

function preload() {
    bedroom = loadImage('bedroom.jpg');
}

function setup() {
    canvas = createCanvas(500, 420);
    canvas.position(400, 100);
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementsById("status").innerHTML = "Status: Detecting... NOT your ip, probably your family ancestry";
}

function draw() {
    image(bedroom, 0, 0, 500, 420);
    fill("#000080");
    text("plant!! with table!!!", 5, 194);
    noFill();
    stroke("#000080");
    rect(0, 180, 120, 200);
    fill("#000080");
    text("silly bed", 108, 193);
    noFill();
    stroke("#000080");
    rect(100, 180, 400, 240);
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