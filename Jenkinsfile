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
            withAWS(credentials: 'aws-credentials', region: 'ap-southeast-1') {
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
            withAWS(credentials: 'aws-credentials', region: 'ap-southeast-1') {
              echo 'Deploy Production'
              sh 'make deploy'
            }
          }
        }

      }
    }

  }
}