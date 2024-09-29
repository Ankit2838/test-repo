FROM public.ecr.aws/docker/library/node:latest As build 
WORKDIR /app
COPY package*.json ./
RUN npm install 
COPY . ./
RUN ls -ltr
RUN npm run build 

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off"]
