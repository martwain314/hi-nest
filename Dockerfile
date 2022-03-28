FROM node:erbium-alpine

# envs
ENV USER app
ENV GROUP app

# prerequisite
RUN addgroup -g 1001 -S $GROUP && \
    adduser -s /sbin/nologin -S -D -G $GROUP $USER

RUN apk --no-cache add --virtual .build-deps tzdata && \
	cp /usr/share/zoneinfo/Asia/Seoul /etc/localtime && \
	echo "Asia/Seoul" > /etc/timezone

# copy source
RUN mkdir -p /var/app
WORKDIR /var/app
COPY ./dist/ ./
COPY ./package.json ./
COPY ./package-lock.json ./
RUN rm docs -rf
RUN chown $USER /var/app -R

# install dependencies
USER $USER
RUN npm install --production

#clean up
USER root
RUN apk del .build-deps
RUN chmod -R 644 /var/app

# run
EXPOSE 3002
CMD ["nohup", "node", "./index.js"]
