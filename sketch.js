var serial;
var mic;

function setup() {
  createCanvas(500,500);
  serial = new p5.SerialPort();
  //assume arduino is connected
  serial.open("/dev/cu.usbmodem1411");
  //when serial port is open and ready for read/write
  serial.on('open',getArduino);
 
  mic = new p5.AudioIn();
  
  mic.start();
  // serial.onData(gotData);
}

function draw() {
  background(0);
  micLevel = mic.getLevel();
  ellipse(width/2, constrain(height-micLevel*height*5, 0, height), 10, 10);
  getKnock(micLevel);
  
}
function getArduino(){
  println("connected to arduino");
}

function getKnock(micLevel){
  if(micLevel>0.1){
    println(micLevel);
  }
  if(micLevel > 0.2){
     serial.write(0);
  }
  // else{
  //   serial.write(90);
  // }
}