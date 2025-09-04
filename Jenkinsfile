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
        stage('deploy stage'){
            steps { 
                echo "building the container and running "
                sh 'docker run -p 8000:5000 test'
            }
        }
        stage('post build') {
            steps{
                echo 'everything is completed'
                
            }
        }
    }
}
