#!/bin/bash

if [ $# -ne 2 ]; then
  echo "Usage: <hostname> <port>"
  exit 1
fi

url="http://$1:$2"

# Route Method ...key-value
curlApi() {
  local urlApi="$url/api/$1"
  local method="${2}"
  local cmd="curl -d @- -X ${method} ${urlApi}"
  local data=""
  shift
  shift
  if [ $# -ge 1 ]; then
    local i=0
    data="${1}"
    shift
    while [ $# -ne 0 ]; do
      if [ $((i % 2)) -eq 0 ]; then
        data="${data}=${1}"
      else
        data="${data}&${1}"
      fi
      i=$((i + 1))
      shift
    done
  fi
  echo $cmd
  echo "$(echo ${data} | ${cmd})"
}

curlApi trainer POST name Patrick lastName Sebastien email 'patrick.sebastien@email.com'
curlApi trainer POST name Jack lastName Daniel email 'jack.daniel@email.com'
curlApi "trainer/1/lessons" PUT name "TILL-A"
curlApi "trainer/1/lessons" PUT name "LSE"
curlApi "lesson/1" PATCH name "SIIA"
curlApi "lesson/1/modules" PUT name "POO"
curlApi "lesson/1/modules" PUT name "Java"
curlApi "lesson/2/modules" PUT name "C"
curlApi "module/POO/submodules" PUT name "Java"
