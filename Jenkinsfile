pipeline {
  agent any
  stages {
    stage('test') {
      steps {
        sh 'make test'
      }
    }

    stage('Deploy') {
      parallel {
        stage('Deploy Staging') {
          when {
            branch "dev"
          }
          steps {
            withCredentials([file(credentialsId: 'aws_credentials', variable: 'secrets')]) {
              writeFile file: '~/.aws/credentials', text: readFile(secrets)
              sh 'cat ~/.aws/credentials'
              echo 'Deploy Staging"'
              sh "make deploy-staging"
            }
          }
        }
        stage('Deploy Production') {
          when {
            branch "main"
          }
          steps {
            echo 'Deploy Production'
            sh 'make deploy'
          }
        }

      }
    }

  }
}