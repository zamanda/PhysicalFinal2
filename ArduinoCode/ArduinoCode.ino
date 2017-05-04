#include <Servo.h>

const int servoPin = 5;
Servo myServo;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  myServo.write(90);
  myServo.attach(servoPin);

}

void loop() {
  // put your main code here, to run repeatedly:
  if(Serial.available()>0){
    int incomingInt = Serial.read();
    Serial.print(incomingInt);
    myServo.write(incomingInt);
  }
  delay(200);
  myServo.write(90);

}


