# Ten Tego

Tabletowa gra imprezowa w stylu zakazanych skojarzeń.

## Co jest w paczce

- `index.html` - strona gry
- `styles.css` - wygląd gry
- `app.js` - logika gry i talie kart
- `title-screen.png` - ekran tytułowy
- `game-skin.png` - plansza gry
- `logo-ten-tego-cutout.png` - logo użyte na stronie ustawień

## Uruchomienie lokalnie

Najprościej otworzyć plik `index.html` w przeglądarce.

Jeśli przeglądarka blokuje lokalne pliki graficzne, uruchom prosty lokalny serwer w folderze projektu:

```bash
python3 -m http.server 8766
```

Potem wejdź na:

```text
http://127.0.0.1:8766/
```

## GitHub Pages

1. Utwórz nowe repozytorium na GitHubie.
2. Wrzuć wszystkie pliki z tej paczki do głównego katalogu repozytorium.
3. Wejdź w `Settings` -> `Pages`.
4. Wybierz `Deploy from a branch`.
5. Ustaw branch `main` i folder `/root`.
6. Zapisz.

Po chwili GitHub pokaże link do działającej strony.

## Notatka

Gra jest statyczna. Nie wymaga backendu, bazy danych ani instalowania zależności.
