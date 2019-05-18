# usando-template
test applications using template

site feito em angula, nomeado como "website"

#Para rodar local
ng serve

#Buildar
ng build --prod

#Criar imagem
docker image build -t website:prod .

#Rodar imagem
docker run -p 3000:80 --rm website:prod


