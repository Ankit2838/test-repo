pipeline {
    agent any

    stages {
        stage('build') {
            steps {
                echo 'Building the app'
                sh 'npm install'
            }
        }
        stage('test') {
            steps {
                echo 'Running tests'
                sh 'npm test'
            }
        }
    }
}
