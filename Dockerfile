# FROM node:erbium-alpine

# # envs
# ENV USER app
# ENV GROUP app

# # prerequisite
# RUN addgroup -g 1001 -S $GROUP && \
#     adduser -s /sbin/nologin -S -D -G $GROUP $USER

# RUN apk --no-cache add --virtual .build-deps tzdata && \
# 	cp /usr/share/zoneinfo/Asia/Seoul /etc/localtime && \
# 	echo "Asia/Seoul" > /etc/timezone

# # copy source
# RUN mkdir -p /var/app
# WORKDIR /var/app
# COPY ./dist/ ./
# COPY ./package.json ./
# COPY ./package-lock.json ./
# RUN rm docs -rf
# RUN chown $USER /var/app -R

# # install dependencies
# USER $USER
# RUN npm install --production

# #clean up
# USER root
# RUN apk del .build-deps
# RUN chmod -R 644 /var/app

# RUN ls
# # run
# EXPOSE 3002
# CMD ["node", "dist/main"]

# Step 1
## base image for Step 1: Node 10
FROM node:10 AS builder
WORKDIR /app
## 프로젝트의 모든 파일을 WORKDIR(/app)로 복사한다
COPY . .
## Nest.js project를 build 한다
RUN npm install
RUN npm run build


# Step 2
## base image for Step 2: Node 10-alpine(light weight)
FROM node:10-alpine
WORKDIR /app
## Step 1의 builder에서 build된 프로젝트를 가져온다
COPY --from=builder /app ./
## application 실행
CMD ["npm", "run", "start:prod"]