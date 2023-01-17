#!/bin/bash

domain='leafsyang.xyz'

if [[ 1=1 ]]; then
	sudo systemctl stop nginx

	sudo certbot renew

	echo "renew done"

	sudo install -m 644 -o expyh -g expyh "/etc/letsencrypt/live/$domain/fullchain.pem" -t /home/expyh/xray/
	sudo install -m 644 -o expyh -g expyh "/etc/letsencrypt/live/$domain/privkey.pem" -t /home/expyh/xray/

	echo "install certification done"

	sudo systemctl restart nginx
	sudo systemctl restart xray

	echo "service restart done"
else
	echo "renew time is not correct"
fi
