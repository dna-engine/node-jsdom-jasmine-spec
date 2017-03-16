#!/bin/sh
#################################
# dnajs-node-jsdom-jasmine-spec #
#################################

# To make this file runnable:
#    $ chmod +x *.sh.command

update() {
    which node || alert "Need to install node: https://nodejs.org"
    echo "Node.js $(node --version)"
    npm update
    }

cd $(dirname $0)
echo
echo "dnajs-node-jsdom-jasmine-spec"
echo "============================="
pwd
update
node spec.js
echo
