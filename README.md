# AntropogenezDashboard

## Install

1. Set values in src/environments files.
2. Run `npm install`

## Develop

1. Run `npm start`.

## Build

1. Run `npm run build`.

## Deploy

1. Set values in src/environments files.
2. Build project `npm run build-prod`
3. Put build data to your root Apache directory (/var/www/html/antropogenez-dashboard).
4. Install Apache in your server. Edit file and filename "antropogenez-dashboard.conf" to your settings. Add file "
   antropogenez-dashboard.conf" to `/etc/apache2/sites-available` directory on your server.
5. Activate file `a2ensite antropogenez-dashboard.conf`.
6. Deactivate default file `a2dissite 000-default.conf`.
6. Check config file `apache2ctl configtest`.
7. Apply apache2: `a2enmod rewrite && systemctl restart apache2`.
8. Open http://{your-server-ip}.
9. For logs `nano /var/log/apache2/error.log`.

