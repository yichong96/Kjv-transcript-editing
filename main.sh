#!/bin/bash

# Check if the correct number of arguments are provided
if [ "$#" -ne 3 ]; then
    echo -e "Usage: $0 <book> <chapter> <verse>\nExample: $0 Genesis 24 12 1"
    exit 1
fi

book=$1
chapter=$2
verse=$3

transcript_dir="/coder/cpbpc-tts-script/kjv"

echo "downloading bible text for $book chapter $chapter verse $verse"
node download.js "$transcript_dir/$book/$chapter/$verse.xml" "$verse.xml"

echo "replacing wrongly read ipa pronunciations"
node convert_v2.js "$verse.xml" "$verse.xml"

echo "Uploading edited transcript to server"
node upload.js "$verse.xml" "$transcript_dir/$book/$chapter/$verse.xml"

# delete edited transcript once upload successfull
# rm "$verse.xml"