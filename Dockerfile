# pull official base image
FROM node:12.15.0

# set working directory
WORKDIR /app

# install app dependencies
COPY package.json ./
RUN yarn install

# add app
COPY . ./

# start app
CMD ["yarn", "start"]

EXPOSE 3000