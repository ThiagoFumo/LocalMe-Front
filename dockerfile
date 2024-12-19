FROM node as build
WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm install -g @angular/cli

RUN npm install
COPY . .

CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "4200"]

FROM nginx:1.19-alpine
COPY --from=build /app/public /usr/share/nginx/html
