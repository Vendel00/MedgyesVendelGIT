# FullStack Felhasználókezelő Alkalmazás

Ez egy FullStack alkalmazás, amely lehetővé teszi felhasználók kezelését (CRUD műveletek) egy MySQL adatbázis segítségével. Az alkalmazás frontendje React és Vite alapú, míg a backend Express.js-t és MySQL-t használ.

## Projekt Struktúra

```
FullStack/
├── backend/
│   ├── server.js
│   ├── package.json
│   └── db.sql
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── main.jsx
│   │   ├── pages/
│   │   │   ├── Newusers.jsx
│   │   │   └── Oldusers.jsx
│   ├── public/
│   │   └── vite.svg
│   ├── package.json
│   ├── index.html
│   ├── vite.config.js
│   └── README.md
└── README.md
```

## Telepítés és Futás

### Backend

1. Navigálj a `backend` mappába:
   ```bash
   cd backend
   ```

2. Telepítsd a szükséges csomagokat:
   ```bash
   npm install
   ```

3. Indítsd el a szervert:
   ```bash
   npm run dev
   ```

4. Győződj meg róla, hogy a MySQL adatbázis fut, és futtasd a `db.sql` fájlt a MySQL kliensedben az adatbázis létrehozásához.

### Frontend

1. Navigálj a `frontend` mappába:
   ```bash
   cd frontend
   ```

2. Telepítsd a szükséges csomagokat:
   ```bash
   npm install
   ```

3. Indítsd el a fejlesztői szervert:
   ```bash
   npm run dev
   ```

4. Nyisd meg a böngészőt, és navigálj a `http://localhost:5173` címre.

## Funkcionalitás

### Oldusers oldal
- Megjeleníti az adatbázisban lévő összes felhasználót.
- Lehetőség van felhasználók szerkesztésére és törlésére.

### Newusers oldal
- Új felhasználók hozzáadása az adatbázishoz.

## API Végpontok

### GET `/api/users`
- Lekérdezi az összes felhasználót.

### POST `/api/users`
- Új felhasználót ad hozzá.
- **Body**: `{ "name": "Név", "email": "Email" }`

### PATCH `/api/users/:id`
- Módosít egy meglévő felhasználót.
- **Body**: `{ "name": "Új név", "email": "Új email" }`

### DELETE `/api/users/:id`
- Töröl egy felhasználót az ID alapján.

## Függőségek

### Backend
- `express`
- `mysql2`
- `cors`
- `dotenv`

### Frontend
- `react`
- `react-router-dom`
- `axios`
- `bootstrap`
- `react-bootstrap`

## Fejlesztői Eszközök
- `nodemon` (backend)
- `vite` (frontend)
- `eslint`

## Hibakeresés

- Győződj meg róla, hogy a MySQL adatbázis fut, és a `db.sql` fájl megfelelően lett futtatva.
- Ellenőrizd, hogy a backend szerver a `3001` porton fut.
- Ellenőrizd, hogy a frontend szerver a `5173` porton fut.

## Licenc

Ez a projekt szabadon használható és módosítható.