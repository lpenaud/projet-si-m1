#!/bin/bash

if [ $# -ne 2 ]
then
    echo "Usage: <hostname> <port>"
    exit 1
fi

url="http://$1:$2"

curlApi() {
    local urlApi="$url/api/$2"
    echo curl -d \"$1\" -X POST $urlApi
    curl -d "$1" -X POST $urlApi
    echo ""
}

curlBook() {
    curlApi "$1" book
}

curlBook "title=Le Guide du voyageur galactique&author=Douglas Adams&genre=Fantasy"
curlBook "title=Le Seigneur des anneaux&author=John Ronald Reuel Tolkien&genre=Science-fiction"
