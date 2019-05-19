# usando-template
test applications using template

site feito em angula, nomeado como "website"


#desenvolvimento
ng serve

#homologação
npm run buildhml
docker image build -t website-hml .
docker run -p 5200:80 --rm website-hml

#produção
ng build --prod
docker image build -t website-prd .
docker run -p 6200:80 --rm website-prd



