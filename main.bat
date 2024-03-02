@echo off

REM Check if the correct number of arguments are provided
if "%~3"=="" (
    echo Usage: %0 ^<book^> ^<chapter^> ^<verse^>
    echo Example: %0 Genesis 24 12 1
    exit /b 1
)

set book=%1
set chapter=%2
set verse=%3

set transcript_dir="/coder/cpbpc-tts-script-us-east-1/kjv/"

echo Downloading bible text for %book% chapter %chapter% verse %verse%
node outputBibleTextXML.js "%book%" "%chapter%" "%verse%" > %verse%.xml

echo Replacing wrongly read ipa pronunciations
node convert.js %verse%.xml %verse%.xml

echo Uploading edited transcript to server
node upload.js %verse%.xml "%transcript_dir%\%book%\%chapter%\%verse%.xml"