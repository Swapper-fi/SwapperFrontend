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
          steps {
            echo '"Building Staing Site"'
            sh 'deploy-staging'
          }
        }

        stage('Deploy Production') {
          steps {
            echo 'Deploy Production'
            sh 'make deploy'
          }
        }

      }
    }

  }
}