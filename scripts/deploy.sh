#!/bin/bash

# scaleway instance <- www.pierrephilouze.com
# 163.172.149.25
# note : ajouter une clé ssh publique pour les commandes ssh

#
# **gestion hébergement pierrephilouze.com**
#
# attention méthode intermédiaire
#
# seul un enregistrement A pour pierrephilouze.com vers IP SCALEWAY a été modifié -> ok
# -> Evite de bouleverser le tout avec la gestion de la messagerie...
#
# pierrephilouze.com A 163.172.149.25
#

# to prevent bad things...
# comment following line when ready
# exit 0;

#SRC_DIR=../dist/
SRC_DIR=../.

SSH_USER=root
SSH_HOST=163.172.149.25
#SSH_PORT=65002

#DOMAIN_NAME=pierrephilouze.com

# delete dir
#ssh $SSH_USER@$SSH_HOST "rm -rf /var/www/pierrephilouze.com/html"

# create dir
#ssh $SSH_USER@$SSH_HOST "mkdir -p /var/www/pierrephilouze.com/html"

# copy dist into dir
scp -r $SRC_DIR/assets $SSH_USER@$SSH_HOST:/var/www/pierrephilouze.com/html/.
scp -r $SRC_DIR/js $SSH_USER@$SSH_HOST:/var/www/pierrephilouze.com/html/.
scp -r $SRC_DIR/style $SSH_USER@$SSH_HOST:/var/www/pierrephilouze.com/html/.
scp -r $SRC_DIR/*.html $SSH_USER@$SSH_HOST:/var/www/pierrephilouze.com/html/.
