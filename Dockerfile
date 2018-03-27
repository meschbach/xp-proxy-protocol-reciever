FROM node:9.9
EXPOSE 5555
COPY . /app
WORKDIR /app
CMD ["node", "index.js"]
