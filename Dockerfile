FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# CMD [ "npm", "run", "start:dev", "npx", "mikro-orm", "schema:create --run" ]
CMD ["/bin/bash","-c","./startup.sh"]