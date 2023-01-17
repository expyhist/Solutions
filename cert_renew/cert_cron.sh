#!/bin/bash

sudo certbot certificates > /home/expyh/xray/cert_info.log && sudo python3 /home/expyh/xray/cert_renew.py
