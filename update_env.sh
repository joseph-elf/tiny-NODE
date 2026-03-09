#!/bin/bash

# Get your current local IP
IP=$(ipconfig getifaddr en0)
IP=89.167.122.101
# Write the NEXT_PUBLIC_API_URL to .env.local
echo "NEXT_PUBLIC_API_URL=https://$IP" > .env.local #:8000" > .env.local

echo "✅ .env.local updated with IP: $IP"