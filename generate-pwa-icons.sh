#!/bin/bash

# Create the icons directory if it doesn't exist
mkdir -p client/public/icons

# Source image
SOURCE_IMAGE="client/public/icons/librechat.png"

# Generate icons in different sizes
convert "$SOURCE_IMAGE" -resize 72x72 client/public/icons/icon-72x72.png
convert "$SOURCE_IMAGE" -resize 96x96 client/public/icons/icon-96x96.png
convert "$SOURCE_IMAGE" -resize 128x128 client/public/icons/icon-128x128.png
convert "$SOURCE_IMAGE" -resize 144x144 client/public/icons/icon-144x144.png
convert "$SOURCE_IMAGE" -resize 152x152 client/public/icons/icon-152x152.png
convert "$SOURCE_IMAGE" -resize 192x192 client/public/icons/icon-192x192.png
convert "$SOURCE_IMAGE" -resize 384x384 client/public/icons/icon-384x384.png
convert "$SOURCE_IMAGE" -resize 512x512 client/public/icons/icon-512x512.png

# Create a directory for iOS splash screens
mkdir -p client/public/icons/splash

# Generate iOS splash screens
convert "$SOURCE_IMAGE" -resize 2048x2732 -gravity center -extent 2048x2732 -background "#343541" client/public/icons/splash/apple-splash-2048-2732.png
convert "$SOURCE_IMAGE" -resize 1668x2388 -gravity center -extent 1668x2388 -background "#343541" client/public/icons/splash/apple-splash-1668-2388.png
convert "$SOURCE_IMAGE" -resize 1536x2048 -gravity center -extent 1536x2048 -background "#343541" client/public/icons/splash/apple-splash-1536-2048.png
convert "$SOURCE_IMAGE" -resize 1125x2436 -gravity center -extent 1125x2436 -background "#343541" client/public/icons/splash/apple-splash-1125-2436.png
convert "$SOURCE_IMAGE" -resize 1242x2688 -gravity center -extent 1242x2688 -background "#343541" client/public/icons/splash/apple-splash-1242-2688.png
convert "$SOURCE_IMAGE" -resize 750x1334 -gravity center -extent 750x1334 -background "#343541" client/public/icons/splash/apple-splash-750-1334.png
convert "$SOURCE_IMAGE" -resize 640x1136 -gravity center -extent 640x1136 -background "#343541" client/public/icons/splash/apple-splash-640-1136.png

echo "PWA icons and splash screens generated successfully!" 