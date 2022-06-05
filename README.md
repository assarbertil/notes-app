## Available Scripts

In the client directory, you can run:

### Client:

`yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

# JWT authentication

Access tokens används för att skicka förfrågningar till skyddade endpoints och sparas i local storage. Access tokens har en kort livslängd på 15 minuter av säkerhetsskäl så en refresh token används för att uppdatera den när den gått ut och dessa lagras som http-cookie. Om vår access token gått ut skickar vi en förfrågan om att få en ny och då skickas vår refresh token med som bevis att vi har rätt att få en ny access token.

JWT-metoden är smidigare än att lagra varje inloggad användares "session" i en databas. Med JWT-metoden behöver vi enbart validera signaturen på användares förfrågningar eftersom att godkända signaturer endast kan genereras av vår egen server.
