# AntropogenezDashboard

## Install
1. Set values in src/environments files.
2. Run `npm install`

## Develop
1. Run `npm start`.

## Build
1. Run `npm run build`.

## Deploy
1. Install Apache in your server. Edit file and filename "antropogenez-dashboard.conf" to your settings. Add file "antropogenez-dashboard.conf" to `/etc/apache2/sites-available` directory on your server.
2. Activate file `sudo a2ensite antropogenez-dashboard.conf`.


3. Set values in src/environments files.
4. Build project `rmp run build`
5. Put build data to your root Apache directory
