#!/bin/bash

export WORKON_HOME=/root/jw/python_virtualenvs
source /usr/share/virtualenvwrapper/virtualenvwrapper.sh

WORK_DIR="/root/jw/django_projects/fcexplorer"
cd $WORK_DIR

workon virtualenv-djiango

pids=`ps -ef | grep manage.py | gawk '$0 !~/grep/ {print $2}' | tr -s '\n' ' '`

echo "kill  ${pids}"
kill -9 ${pids}

nohup python manage.py runserver 0.0.0.0:8080 1>/root/jw/log/fcexplorer.log 2>&1&
