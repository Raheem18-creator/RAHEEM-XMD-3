FROM node:lts-buster
RUN git clone https://github.com/Raheem18-creator/RAHEEM-XMD-3/root/raheemxmd
WORKDIR /root/raheemxmd
RUN npm install && npm install -g pm2 || yarn install --network-concurrency 1
COPY . .
EXPOSE 9090
CMD ["npm", "start"]
