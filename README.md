<p align="center">
  <figure>
     <img src="https://raw.githubusercontent.com/MilicaBl/gridpainter/main/screenshot.png" alt="Demo" />
    <figcaption>
      <p align="center">
        Demo
      </p>
    </figcaption>
  </figure>
</p>

# Intro

Det här projektet var en skoluppgift där jag försökte skapa en webb-app för anteckningar olik alla andra som finns där ute. Jag valde att återbesöka NPM-paket jag gillar att använda för att förbättra användarupplevelsen.

I huvudsak består projektet av en klient i React skriven med TypeScript och en API-server skapad med Express.js, TypeScript och En PostgreSQL-databas.

# Instruktion

## Databasen

### Docker-sättet (kräver docker)

1. I rotmappen finns en docker-compose fil med en konfigurerad MySQL-container. Kör filen genom att skriva `docker-compose up` i mappen (kräver docker).
2. När du startat containern skapar du en `.env`-fil i mappen `server` och skriver `DATABASE_URL="mysql://root:root@localhost:3306/notes"`. Den här filen kommer fyllas med fler variabler i senare steg.
3. Kör skriptet `db-deploy` från `package.json` för att applicera migreringar och seed:a databasen.

### Svårare sättet

1. Starta en MySQL-server på valfritt sätt. Skapa en databas på servern som måste heta `notes`.
2. När databasen är igång skapar du en `.env`-fil i mappen `server` och skriver `DATABASE_URL="mysql://<ditt användarnamn>:<ditt lösenord>@<ditt hostname>:<din port>/notes"`. Den här filen kommer fyllas med fler variabler i senare steg.
3. Kör skriptet `yarn run db-deploy` i mappen `server` för att applicera migreringar och seed:a databasen.

## API-servern
1. Fyll `.env`-filen med resterande variabler efter följande modell:
```
DATABASE_URL=<samma som ovan>
FRONTEND_URL="http://localhost:3000"
PORT=4000
ACCESS_TOKEN_SECRET="<valfri hash>"
REFRESH_TOKEN_SECRET="<valfri hash>"
```
2. Kör `yarn run api-start` i mappen `server` för att starta servern.

## Klienten

### Utvecklingsläge

1. Skapa en `.env`-fil i mappen `client` och fyll i `REACT_APP_BACKEND_URL="http://localhost:4000"`
2. Kör `yarn run start` i mappen `client` för att starta servern i utvecklingsläge.

### Produktionsläge

1. Kör `yarn run build` i mappen `client`.
2. Gå till `/build` och kör `npx serve`.

## Förinställda användare

Du kan alltid registrera ditt egna konto men om du inte vill det kan du använda:

**Användarnamn:** sam@smith.com

**Lösenord:** password


# Nämnvärda paket

Jag såg det här som en god chans att använda många av mina mest omtyckta paket. Jag hade sannolikt inte använt alla i ett verkligt scenario.

- **SWR**. Hjälper oss hantera server state, data fetching och optimistic UI.
- **Jotai**. Ett state management-bibliotek som tar en "atom"-approach. Man behöver inte bygga en store utan en state-variablel är inget mer än en variabel som kan importeras över hela projektet och orsakar inga onödiga renderingar. Liknar Facebooks Recoil.
- **Axios**. Självklart val på grund av den automatiska felhanteringen. Tar man emot ett svar med en HTTP-kod utanför 200-spannet så låter Axios en veta det tydligare en den inbyggda fetch-API:n.
- **Stitches**. Likt Styled-components men det låter en på väldigt enkelt vis bygga egna komponenter med varianter, t.ex `<Button size="large" color="primary" shadow></Button>`
- **Formik**. Gör det enkelt att ta emot och arbeta med formulärdata. Används bara på inloggningssidan i detta projektet.
- **Framer Motion**. Bibliotek för animering. Snuddar på att vara för prestandakrävande och gör sidan mindre tillgänlig men den ser fin ut.
- **react-hot-toast**. Ett bibliotek för "toasts". Första gången jag använde det och använde bara det för att visa att man loggades in.


# JWT authentication

Access tokens används för att skicka förfrågningar till skyddade endpoints och sparas i local storage. Access tokens har en kort livslängd på 15 minuter av säkerhetsskäl så en refresh token används för att uppdatera den när den gått ut och dessa lagras som http-cookie. Om vår access token gått ut skickar vi en förfrågan om att få en ny och då skickas vår refresh token med som bevis att vi har rätt att få en ny access token.

JWT-metoden är smidigare än att lagra varje inloggad användares "session" i en databas. Med JWT-metoden behöver vi enbart validera signaturen på användares förfrågningar eftersom att godkända signaturer endast kan genereras av vår egen server.
