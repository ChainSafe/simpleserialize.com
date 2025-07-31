FROM node:lts as build

WORKDIR /usr/src/app
COPY package.json yarn.lock src .yarnrc.yml ./


RUN corepack enable
RUN yarn install --immutable

COPY . .
RUN npm rebuild node-sass
RUN cd ./ && yarn build


FROM nginx:alpine
COPY --from=build /usr/src/app/dist /usr/share/nginx/html
EXPOSE 80
