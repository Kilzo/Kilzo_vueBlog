#!/usr/bin/env sh


set -e


yarn run build

cd public

echo 'www.Kilzo.net' > CNAME

git init
git add -A
git commit -m '更新'

# git push -f https://github.com/Kilzo/Kilzo_vueBlog.git master

git push -f https://e.coding.net/kilzo/Kilzo/Kilzo_vueBlog.git master


cd -