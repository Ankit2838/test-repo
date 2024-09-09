FROM public.ecr.aws/docker/library/node:latest
WORKDIR /app
COPY . ./
RUN npm install 
RUN ls -ltr
EXPOSE 5000
CMD ["node", "index.js"]
