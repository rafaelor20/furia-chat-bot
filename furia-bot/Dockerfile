# fetch base image of Node
FROM node:19-alpine

# use this folder as the working directory (like a CD command)
WORKDIR /usr/src

# copy the current directory to the workdir
COPY . .

# download dependencies
RUN npm i

# start the server
CMD ["npm", "run", "start"]