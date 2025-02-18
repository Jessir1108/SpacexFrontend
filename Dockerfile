# Etapa 1: Construcción con Node
FROM node:20-alpine as builder

WORKDIR /app

# Copiar package.json e instalar dependencias
COPY package*.json ./
RUN npm install

# Copiar el resto del código
COPY . .

# Compilar para producción (genera carpeta dist/)
RUN npm run build

# Etapa 2: Servir con Nginx
FROM nginx:alpine

# Copiamos el build de la etapa anterior
COPY --from=builder /app/dist /usr/share/nginx/html

# Exponemos el puerto 80 para servir el contenido
EXPOSE 80

# Arrancamos Nginx
CMD ["nginx", "-g", "daemon off;"]
