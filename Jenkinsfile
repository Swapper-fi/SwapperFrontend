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
        if (env.BRANCH_NAME == "dev") {                                          
          stage('Deploy Staging') {
            steps {
              echo '"Building Staing Site"'
              sh 'deploy-staging'
            }
          }
        } 
        if (env.BRANCH_NAME == "main") {                                          
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
}