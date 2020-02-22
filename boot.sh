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

curlLearner() {
    curlApi "$1" learner
}

curlLearner "name=Patrick&lastName=Sebastien&email=patrick.sebastien@email.com"
