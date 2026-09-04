# People Analytics Model V2

Two connected static pages:
- `datamart.html`: interactive DataMart model builder.
- `index.html`: richer Workforce Health dashboard driven by the saved model.

## Publish to GitHub Pages
Upload all files preserving the `assets` folder. In Settings > Pages select the `main` branch and `/ (root)`.

## Local test
```bash
python3 -m http.server 8080
```
Open `http://localhost:8080/datamart.html`.

All data is synthetic. Configuration is held in browser localStorage.
