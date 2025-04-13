#!/usr/bin/env groovy
pipeline{
    agent{
        docker{
            image 'node'
            args '-u root'
        }
    }
    stages{
        stage('build') {
            steps {
                echo 'building the image'
                sh 'npm install'
            }
        }
        stage('test') {
            steps {
                echo 'testing'
                sh 'npm test'
            }
        }
    }
}
            
              
              
