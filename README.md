# Workforce Intelligence Platform MVP

Aplicație statică cu două pagini conectate:

1. `datamart.html`: simulator pentru surse, calitate, istoric, semantic layer și guardrail.
2. `index.html`: Workforce Health Score recalculat pe baza configurației salvate.

## Testare locală

```bash
python3 -m http.server 8080
```

Deschide `http://localhost:8080/datamart.html`, configurează modelul, apoi publică dashboardul.

## Publicare pe Netlify

Dezarhivează proiectul și încarcă folderul complet prin Netlify Drop sau conectează un repository. Nu există build command. Publish directory este `.`.

## Publicare pe GitHub Pages

Încarcă fișierele în rădăcina unui repository public, apoi activează Pages din branch-ul principal, root folder.

## Personalizare

- Culori: `assets/styles.css`
- Scenarii Workforce Health: `assets/dashboard.js`
- Logica simulatorului și readiness: `assets/datamart.js`
- Configurația implicită: `assets/shared.js`

## Limitări intenționate

- Date exclusiv sintetice
- Fără backend sau autentificare
- Fără AI extern
- Stare salvată local în browser
- Fără evaluare individuală sau recomandări de employment
