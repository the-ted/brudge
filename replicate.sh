mkdir ../$1
cp -r * ../$1
sed "s/<p class=\"intro-text\".*<\/p>/<p class=\"intro-text\">$2<\/p>/" <../$1/_includes/header.html > ../$1/_includes/header2.html
mv ../$1/_includes/header2.html ../$1/_includes/header.html
