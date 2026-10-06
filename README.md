# Duck Drive

Duck Drive är en webbaserad filhanterare byggd med Angular. Projektet efterliknar
gränssnittet i en molnlagringstjänst och har svenska menyer och texter.

## Funktioner

- Skapa mappar i **Min enhet**.
- Söka bland filer och mappar.
- Flytta objekt till papperskorgen, återställa dem eller ta bort dem permanent.
- Visa navigationsvyer för bland annat senaste, delade objekt, stjärnmärkta och lagring.
- Spara enhetens innehåll och papperskorg lokalt i webbläsaren med `localStorage`.

Projektet är en frontend-prototyp. Filer och mappar lagras lokalt i den aktuella
webbläsaren; det finns ingen server, användarinloggning eller synkronisering mellan
enheter. Flera av navigationsvyerna är för närvarande endast gränssnittsexempel.

## Teknik

- Angular 21 och TypeScript
- HTML och SCSS
- Angular CLI, Vitest och jsdom för utveckling och testning

## Kom igång

Angular-applikationen ligger i mappen `duck-drive`.

```bash
cd duck-drive
npm install
npm start
```

Öppna adressen som Angular CLI visar i terminalen (vanligtvis
`http://localhost:4200/`).

## Kommandon

Kör kommandona från mappen `duck-drive`:

| Kommando | Beskrivning |
| --- | --- |
| `npm start` | Startar utvecklingsservern. |
| `npm run build` | Bygger applikationen för produktion. |
| `npm test` | Kör testerna. |
