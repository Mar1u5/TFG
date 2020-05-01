pipeline {
  agent any
  stages {
    stage('status') {
      steps {
        sh 'ls -la'
      }
    }
    stage('Install dependencies') {
      steps {
        sh '''npm install
'''
      }
    }
    stage('Build Project') {
      steps {
        sh '#ng build --prod'
      }
    }
  }
}