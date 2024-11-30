#!/bin/bash

# scaleway instance <- www.pierrephilouze.com
# 163.172.149.25
# note : ajouter une clé ssh publique pour les commandes ssh

#
# **gestion hébergement pierrephilouze.com**
#
# attention méthode intermédiaire
#
# seuls 2 enregistrements A à modifier (juillet 2023)
#    un enregistrement A pour pierrephilouze.com vers IP SCALEWAY
#    un enregistrement A pour www.pierrephilouze.com vers IP SCALEWAY
# -> Evite de bouleverser le tout avec la gestion de la messagerie...
#
#    "" A 163.172.149.25
#    www A 163.172.149.25
#

# to prevent bad things...
# comment following line when ready
# exit 0;

#DIST_DIR=../dist/
DIST_DIR=../.

SSH_USER=root
SSH_HOST=163.172.149.25
#SSH_PORT=65002

#DOMAIN_NAME=pierrephilouze.com

# delete dir
#ssh $SSH_USER@$SSH_HOST "rm -rf /var/www/pierrephilouze.com/html"

# create dir
#ssh $SSH_USER@$SSH_HOST "mkdir -p /var/www/pierrephilouze.com/html"

# copy dist into dir
# scp -r $DIST_DIR/assets $SSH_USER@$SSH_HOST:/var/www/pierrephilouze.com/html/.
# scp -r $DIST_DIR/js $SSH_USER@$SSH_HOST:/var/www/pierrephilouze.com/html/.
# scp -r $DIST_DIR/style $SSH_USER@$SSH_HOST:/var/www/pierrephilouze.com/html/.
# scp -r $DIST_DIR/*.html $SSH_USER@$SSH_HOST:/var/www/pierrephilouze.com/html/.

scp -r assets root@163.172.149.25:/var/www/pierrephilouze.com/html/.
scp -r js root@163.172.149.25:/var/www/pierrephilouze.com/html/.
scp -r style root@163.172.149.25:/var/www/pierrephilouze.com/html/.
scp -r *.html root@163.172.149.25:/var/www/pierrephilouze.com/html/.
