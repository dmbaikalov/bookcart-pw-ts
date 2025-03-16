FROM mcr.microsoft.com/playwright:v1.50.1-noble

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm cache clean --force

RUN apt-get update && apt-get install -y wget gnupg ca-certificates && \
    curl -sL https://deb.nodesource.com/setup_20.x | bash - && \
    apt install -y nodejs
