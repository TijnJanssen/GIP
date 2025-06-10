# Fiets voor Bejaarden
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Wat is dit project?
Fiets voor Bejaarden is een leuk en actief spel voor ouderen. Het spel combineert beweging met plezier. Terwijl je op een fiets trapt, onthul je stap voor stap een afbeelding. Hoe sneller je trapt, hoe sneller de afbeelding verschijnt. Aan het einde zie je hoe lang het duurde om de afbeelding te voltooien en krijg je een score.

## Hoe werkt het?
1. Kies een thema voor de afbeelding, zoals bergen, strand, dieren, kunst, auto's of ruimte.
2. Kies een moeilijkheidsgraad: makkelijk, gemiddeld of moeilijk.
3. Trap op de fiets om blokjes van het scherm te verwijderen. Hierdoor wordt de afbeelding langzaam zichtbaar.
4. Als de afbeelding volledig is, stopt het spel en zie je je score en tijd.
5. Bij een goede score verschijnt er confetti!

## Technologieën
- **HTML** en **CSS**: Voor de structuur en stijl van de website.
- **JavaScript** en **jQuery**: Voor interactieve functies en animaties.
- **Canvas**: Om de afbeeldingen te tekenen en blokjes te verwijderen.
- **Arduino**: Voor het verbinden van een fysieke fiets met het spel via knoppen (spatie, tab, enter).
- **Confetti.js**: Voor een feestelijke animatie aan het einde.

## Installatie
1. **Clone de repository**:
   ```bash
   git clone https://github.com/TijnJanssen/GIP.git
   ```
2. **Ga naar de projectmap**:
   ```bash
   cd GIP
   ```
3. **Open het spel**:
   - Open `index.html` in een webbrowser (bijvoorbeeld Chrome of Firefox).
   - Zorg ervoor dat de map `ImgForDem` met afbeeldingen in de projectmap staat.
4. **Arduino instellen** (optioneel):
   - Upload het bestand `FietsenVoorBejaarden.ino` naar een Arduino-bord.
   - Sluit knoppen aan op pinnen 2 (spatie), 3 (tab) en 4 (enter).
   - Verbind de Arduino met je computer via USB.

## Gebruik
1. Open `index.html` in je browser.
2. Klik op "Start" om te beginnen.
3. Kies een thema en moeilijkheidsgraad met de muis of toetsenbord (toets 'A' om te navigeren, 'Enter' om te kiezen).
4. Druk op de spatiebalk (of gebruik de fietsknoppen) om blokjes te verwijderen en de afbeelding te onthullen.
5. Aan het einde zie je je score. Klik op "Reload" om opnieuw te spelen.

## Projectstructuur
```
project/
├── css/                # Bestanden voor stijlen
├── img/                # Extra afbeeldingen
├── ImgForDem/          # Map met afbeeldingen voor het spel (bergen, strand, etc.)
├── js/                 # JavaScript-map
      └──index.js       #JavaScript bestand
├── webimg/             # Webafbeeldingen
├── game.html           # Hoofdpagina van het spel
├── index.html          # Startpagina
└── index.js            # JavaScript-code voor het spel
Arduino/FietsenVoorBejaarden/
└── FietsenVoorBejaarden.ino  # Arduino-code voor fietsbesturing
├── LICENSE             # LICENSE
└── README.md            # Dit bestand
```
## Moeilijkheidsgraden
- **Makkelijk**: Grote blokjes (500x500 pixels).
- **Gemiddeld**: Middelgrote blokjes (250x250 pixels).
- **Moeilijk**: Kleine blokjes (150x150 pixels).

## Score
Je score wordt berekend op basis van:
- Moeilijkheidsgraad (makkelijk: x1, gemiddeld: x2, moeilijk: x3).
- Tijd die je nodig had om de afbeelding te onthullen.
Formule: `score = ((100 * moeilijkheidsgraad) / tijd) * 100`.

## Licentie

Dit project heeft een MIT-licentie. Zie het bestand [LICENSE](LICENSE) voor meer informatie.
