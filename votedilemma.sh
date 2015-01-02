#!/bin/bash

# while :
# do
#     tor | node dirtysocks.js &
#     sleep $(grep -m1 -ao '[4-8]' /dev/urandom | sed s/0/10/ | head -n1)
#     PID=$(ps -A | grep -e tor | tail -n 2 | head -n 1 | awk '{print $1}')
#     ps -A | grep -e tor | tail -n 2 | head -n 1
#     kill -9 $PID
# done

while :
do
    node dirtysocks.js
done