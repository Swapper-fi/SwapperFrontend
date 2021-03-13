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
            echo 'Deploy Staging"'
            sh 'deploy-staging'
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