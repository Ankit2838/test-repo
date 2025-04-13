pipeline {
    agent any

    stages {
        stage('Installing depemnedencies') {
            steps {
                echo 'Building the app'
                sh 'npm install'
            }
        }
        stage('building stage') {
            steps {
                echo 'Running tests'
                sh 'npm run build'
            }
        }
        stage('post build') {
            echo 'everything is completed'
            sh 'node index.js'
        }
    }
}
