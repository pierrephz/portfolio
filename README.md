# README.md

...

## deploy portfolio website to scaleway

### create scaleway instance

depuis console scaleway

créer instance 
    ajouter ssh key
    noter l'IP publique = 163.172.149.25

màj domaine
    pierrephilouze.com
    zone dns / zone racine 
    type A 163.172.149.25
    ne pas oublier www...

### install nginx + cert (https) on scaleway instance

sur macbook, depuis VS Code - install plugin Remote Explorer puis ...
    ssh root@163.172.149.25
    setup, config, ..
    ouvrir terminal intégré : on est sur la machine distante 163.172.149.25

commandes :

apt update && apt upgrade -y
apt install nginx -y
mkdir -p /var/www/pierrephilouze.com/html
vi /var/www/pierrephilouze.com/html/index.html

<html>
    <head>
        <title>Welcome to pierrephilouze.com</title>
    </head>
    <body>
        <h1>Hello World!</h1>
        <p>You have accessed the pierrephilouze.com website.</p>
    </body>
</html>

vi /etc/nginx/sites-available/pierrephilouze.com

server {
        listen 80;
        listen [::]:80;

        root /var/www/pierrephilouze.com/html;
        index index.html index.htm;

        server_name pierrephilouze.com www.pierrephilouze.com;

        location / {
                try_files $uri $uri/ =404;
        }
}

ln -s /etc/nginx/sites-available/pierrephilouze.com /etc/nginx/sites-enabled/
nginx -t
systemctl restart nginx.service


apt install python3-certbot-nginx -y
certbot --nginx -d pierrephilouze.com -d www.pierrephilouze.com

### deploy code to scaleway instance

see scripts/deploy.sh
