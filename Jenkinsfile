pipeline {
    agent any

    stages {

        // stage('Checkout') {
        //     steps {
        //         git 'https://github.com/akshatsharma-aks/springboot-react-devops'
        //     }
        // }

        stage('Build Backend JAR') {
            steps {
                dir('cicd-java-demo') {
                    bat 'mvn clean package -DskipTests'
                }
            }
        }

        stage('Build & Deploy') {
            steps {
                bat 'docker-compose down || exit 0'
                bat 'docker-compose up --build -d'
            }
        }
    }
}