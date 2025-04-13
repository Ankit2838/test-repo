FROM node:20.7.0-alpine 
WORKDIR /app
COPY package.json /app/package.json
RUN npm install --no-cache-dir
COPY . /app
RUN npm run build 
RUN ls -ltr
ENTRYPOINT [ "node", "index.js" ]
