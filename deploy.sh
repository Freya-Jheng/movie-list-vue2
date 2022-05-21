set -e

npm run build

cd dist

git init
git checkout -b main
git add --a
git commit --m 'deploy'

git push -f https://github.com/Freya-Jheng/movie-list-vue2.git main:gh-pages