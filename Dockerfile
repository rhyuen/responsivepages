FROM node:alpine
MAINTAINER rhyuen
WORKDIR /
COPY package.json /
RUN npm install && npm cache clean --force
COPY ./ ./
EXPOSE 8080 8080
RUN addgroup -S newestgroup && adduser -S -g newestgroup newestuser
RUN chown newestuser -R /node_modules
USER newestuser
CMD ["npm", "start"]