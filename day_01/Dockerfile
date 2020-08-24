FROM node:12

COPY . .

RUN ln -s http /usr/lib/apt/methods/https
RUN  curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update && apt install -y apt-transport-https && apt-get install -y yarn
RUN yarn install

EXPOSE 3333
CMD [ "yarn", "start" ]