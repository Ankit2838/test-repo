pipeline {
    agent any

    stages {
        stage('Installing depemnedencies') {
            steps {
                echo 'Building the app'
            }
        }
        stage('building stage') {
            steps {
                echo 'Running tests'
                sh 'docker build -t test -f Dockerfile .'
            }
        }
        stage('post build') {
            steps{
                echo 'everything is completed'
                
            }
        }
    }
}
