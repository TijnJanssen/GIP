#include <Keyboard.h>  // Inclusie van de Keyboard-bibliotheek

// Pin definities
const int spaceButtonPin = 2;  // Knop voor spatie verbonden met pin 13
const int tabButtonPin = 3;    // Knop voor Tab verbonden met pin 12
const int enterButtonPin = 4;  // Knop voor Enter verbonden met pin 11

int spaceButtonState = 0;       // Variabele voor de status van de spatieknop
int lastSpaceButtonState = 0;   // Variabele voor de vorige status van de spatieknop
int tabButtonState = 0;         // Variabele voor de status van de Tab-knop
int lastTabButtonState = 0;     // Variabele voor de vorige status van de Tab-knop
int enterButtonState = 0;       // Variabele voor de status van de Enter-knop
int lastEnterButtonState = 0;   // Variabele voor de vorige status van de Enter-knop

void setup() {
  // Stel de knoppen in als input (zonder pull-up weerstanden)
  pinMode(spaceButtonPin, INPUT);
  pinMode(tabButtonPin, INPUT);
  pinMode(enterButtonPin, INPUT);
  
  // Start de seriële communicatie (optioneel, voor debugging)
  Serial.begin(9600);
  
  // Start de toetsenbordfunctionaliteit
  Keyboard.begin();
}

void loop() {
  // Lees de status van de spatieknop
  spaceButtonState = digitalRead(spaceButtonPin);
  if (spaceButtonState == HIGH && lastSpaceButtonState == LOW) {
    Serial.println("Spatieknop ingedrukt!");  // Debugging
    Keyboard.write(' ');                      // Stuur de spatiebalk
  }
  lastSpaceButtonState = spaceButtonState;    // Update vorige status
  
  // Lees de status van de Tab-knop
  tabButtonState = digitalRead(tabButtonPin);
  if (tabButtonState == HIGH && lastTabButtonState == LOW) {
    Serial.println("Tab-knop ingedrukt!");    // Debugging
    Keyboard.write('q');                  // Stuur de Tab-toets
  }
  lastTabButtonState = tabButtonState;        // Update vorige status
  
  // Lees de status van de Enter-knop
  enterButtonState = digitalRead(enterButtonPin);
  if (enterButtonState == HIGH && lastEnterButtonState == LOW) {
    Serial.println("Enter-knop ingedrukt!");  // Debugging
    Keyboard.write(KEY_RETURN);               // Stuur de Enter-toets
  }
  lastEnterButtonState = enterButtonState;    // Update vorige status
  
  // Kleine vertraging om debouncing te helpen
  delay(50);
}

void stop() {
  // Stop de toetsenbordfunctionaliteit (optioneel, kan aan het einde worden opgeroepen)
  Keyboard.end();
}
