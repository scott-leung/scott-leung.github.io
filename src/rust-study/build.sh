#!/bin/bash

# Check if an argument was passed
if [ $# -eq 0 ]; then
  echo "Please provide a directory number (e.g. ./build.sh 001)"
  exit 1
fi

# Get the directory number and name
dir_number=$1
dir_name="${dir_number}-*"
dir_name=`ls -d $dir_name | head -1`

# Check if the directory exists
if [ ! -d "$dir_name" ]; then
  echo "Error: Directory $dir_name not found."
  exit 1
fi

# Compile the rust file
rustc "$dir_name/main.rs" -o "$dir_name/main.rsoutput"

# Check if the -run option was passed
if [ "$2" == "-run" ]; then
  "$dir_name/main.rsoutput"
fi
