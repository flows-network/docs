FROM node:16.20.1 AS build

COPY . /docs
WORKDIR /docs
RUN npm install
RUN npm run build

FROM node:16.20.1
COPY --from=build /docs /docs
ENTRYPOINT ["npm", "run", "serve"]
