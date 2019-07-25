#!/usr/bin/env sh

# abort on errors
set -env

# build
yarn build

# navigate into the build output directory
cd dist

git init
git add -A 
git commit -m 'deploy'

# deploy to https://sarahb831.github.io/vue-do where sarahb831 is github username, vue-do is repo name
git push -f  https://sarahb831.github.com/vue-do.git master:gh-pages

cd -