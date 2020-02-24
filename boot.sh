#!/bin/bash

if [ $# -ne 2 ]
then
    echo "Usage: <hostname> <port>"
    exit 1
fi

url="http://$1:$2"

# Route Method ...key-value
curlApi() {
    local urlApi="$url/api/$1"
    local method="${2}"
    local cmd=""
    shift
    shift
    if [ $# -ge 1 ]
    then
        local i=0
        local data="${1}"
        shift
        while [ $# -ne 0 ]
        do
            if [ $((i%2)) -eq 0 ]
            then
                data="${data}=${1}"
            else
                data="${data}&${1}"
            fi
            i=$((i+1))
            shift
        done
        cmd="curl -d ${data} -X ${method} ${urlApi}"
    else
        cmd="curl -X ${method} ${urlApi}"
    fi
    echo $cmd
    echo $(${cmd})
}

curlApi trainer POST name Patrick lastName Sebastien email 'patrick.sebastien@email.com'
curlApi lesson POST name BDD idTrainer 1
