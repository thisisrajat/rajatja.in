yarn install
yarn build
git checkout gh-pages
rsync -a -v build/ ./
rm -rf build
echo 'Enter commit message'
read commitmsg
git add .
git commit -am "$commitmsg"
git push origin gh-pages
