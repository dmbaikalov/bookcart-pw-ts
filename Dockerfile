FROM mcr.microsoft.com/playwright:v1.50.1-noble

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm cache clean --force

RUN apt-get update && apt-get install -y wget gnupg ca-certificates && \
    apt-get install -y openjdk-11-jdk && npm install -g allure-commandline \
    curl -sL https://deb.nodesource.com/setup_20.x | bash - && \
    apt install -y nodejs

CMD ["npx", "playwright", "test"]