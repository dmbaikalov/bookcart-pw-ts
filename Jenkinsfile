pipeline {
    agent any

    stages {
        stage('Checkout Frontend Code') {
            steps {
                git branch: 'main', url: 'https://github.com/dmbaikalov/bookcart-app-client.git'
            }
        }

        stage('Setup Node.js for Angular Frontend') {
            steps {
                bat 'node -v'
                bat 'npm ci'
            }
        }

        stage('Build Angular Frontend') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Checkout Backend Code') {
            steps {
                git branch: 'main', url: 'https://github.com/dmbaikalov/bookcart-app-api.git'
            }
        }

        stage('Setup .NET SDK for C# Backend') {
            steps {
                bat 'dotnet --version'
                bat 'dotnet restore'
            }
        }

        stage('Build C# Backend') {
            steps {
                bat 'dotnet build --configuration Release'
            }
        }

        stage('Run Backend API') {
            steps {
                bat 'dotnet run --configuration Release --project bookcart'
                sleep 10
            }
        }

        stage('Deploy Frontend') {
            steps {
                    bat 'npx http-server -p 4200'
                sleep 5 
            }
        }

        // 9. Checkout E2E Tests Code
        stage('Checkout E2E Tests Code') {
            steps {
                git branch: 'main', url: 'https://github.com/dmbaikalov/bookcart-pw-ts.git'
            }
        }

        stage('Setup Node.js for E2E Tests') {
            steps {
                bat 'node -v'
                bat 'npm ci'
            }
        }
        stage('Run E2E Tests') {
            steps {
                bat 'npm run test:e2e'
            }
        }
    }
}
