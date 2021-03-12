properties([pipelineTriggers([githubPush()])])
pipeline {
    agent any
    stages {
      stage('Test') {
        steps {
          sh "make test"
        }
      }
      stage('Deploying Staging') { 
        when {
            branch "develop"
        }
        steps {
          // when { tag "release-*" }
          sh "make deploy-staging"
        }
      }
      stage('Deploying Production') { 
        when {
            branch "main"
        }
        steps {
          // when { tag "release-*" }
          sh "make deploy"
        }
      }
    }
    post {
       always {
           deleteDir()
       }
    }
}
