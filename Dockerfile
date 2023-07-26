ARG BASE_DOCKER_IMAGE=node:16.20.1
FROM $BASE_DOCKER_IMAGE AS build

COPY . /docs
WORKDIR /docs
RUN npm install
RUN npm run build

FROM $BASE_DOCKER_IMAGE
COPY --from=build /docs /docs
WORKDIR /docs
ENTRYPOINT ["npm", "run", "serve"]
