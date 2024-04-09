
#include <WiFi.h>
#include <WiFiClient.h>
#include <FirebaseESP32.h>

// Firebase Credentials
#define FIREBASE_HOST "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
#define FIREBASE_AUTH "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"


// WiFi Credentials
#define WIFI_SSID "SSID"
#define WIFI_PASSWORD "PASS"


// Pins of Bulbs Regulator Knob
#define b1  12
#define b2  14
#define b3  27
#define b4  26
#define b5 25
#define b6 33

// Pins of switches 
#define s1 13
#define s2 32

// pins of Fans
#define f1 2
#define f2 15

#define rled 23
#define bled 21

//Define FirebaseESP32 data object
FirebaseData firebaseData;
FirebaseJson json;

void setup()
{
  // put your setup code here, to run once:
  pinMode(b1, OUTPUT);
  pinMode(b2, OUTPUT);
  pinMode(b3, OUTPUT);
  pinMode(b4, OUTPUT);
  pinMode(b5, OUTPUT);
  pinMode(b6, OUTPUT);
  pinMode(s1, OUTPUT);
  pinMode(s2, OUTPUT);
  pinMode(f1, OUTPUT);
  pinMode(f2, OUTPUT);

  Serial.begin(115200);
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);

    
  Firebase.reconnectWiFi(true);
}

void loop()
{

  if (WiFi.status() != WL_CONNECTED)
  {
    if (DEBUG_SW) Serial.println("Not Connected");
    without_internet();
  }

  else
  {
    if (DEBUG_SW) Serial.println(" Connected");
    controlBulb(b1, "/bulbs/0/status");
    controlBulb(b2, "/bulbs/1/status");
    controlBulb(b3, "/bulbs/2/status");
    controlBulb(b4, "/bulbs/3/status");
    controlBulb(b5, "/bulbs/4/status");
    controlBulb(b6, "/bulbs/5/status");
    controlswitch(s1,"/plugs/pulg1/status");
    controlswitch(s2,"/plugs/pulg2/status");
    controlfan(f1,"/fans/fan1/status","/fans/fan1/speed");
    controlfan(f2,"/fans/fan2/status","/fans/fan2/speed");
  }
}

void controlBulb(int bulbPin, String firebasePath) {
  if (Firebase.getBool(firebaseData, firebasePath)) {
    digitalWrite(bulbPin, HIGH);  
  } else {
    digitalWrite(bulbPin, LOW);  
  }
}
void controlswitch(int switchPin, String firebasePath) {
  if (Firebase.getBool(firebaseData, firebasePath)) {
    digitalWrite(switchPin, HIGH);  
  } else {
    digitalWrite(switchPin, LOW);  
  }
 }
void controlfan(int fanPin, String firebasePath, String firebaseSpeed){
  if (Firebase.getBool(firebaseData, firebasePath)) {
      analogWrite(fanPin, 255);
  int fanSpeed = Firebase.getInt(firebaseData, firebaseSpeed);
  if (Firebase.failed()) { 
      analogWrite(fanPin, 255);
    } else if (fanSpeed != -1) { 
      analogWrite(fanPin, map(fanSpeed, 0, 100, 0, 255)); 
    } else {
      analogWrite(fanPin, 255);
    }

  } else {
    analogWrite(fanPin, 0); 
  }
}


  
  
  
  
}
