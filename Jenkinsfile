pipeline {
    agent any
    environment {
        user_credentials = credentials('usercredentials') // this injects username and password
    }

    stages {
        stage('Installing depemnedencies') {
            steps {
                echo 'Building the app'
            }
        }
        stage('building stage') {
            steps {
                echo 'Running tests'

                echo 'this is docekr file'

            }
        }
        stage('post build') {
            steps{
                echo 'everything is completed'
                
            }
        }
        stage('building stage') {
            steps {
                echo 'Running tests'
                withCredentials([usernamePassword(credentialsId: 'usercredentials', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                    sh '''
                        echo "Using credentials..."
                        echo "Username: $USERNAME"
                        echo "Password: $PASSWORD"
                        docker login -u $USERNAME -p $PASSWORD
                        docker build -t test -f Dockerfile .
                    '''
                }
            }
        }
        
    }
}
