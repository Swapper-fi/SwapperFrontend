properties([pipelineTriggers([githubPush()])])
pipeline {
    agent any
    stages {
      stage('Test') {
        steps {
          sh "make test"
        }
      }
      stage('Deploy') { 
        steps {
          when { tag "release-*" }
          sh "make serve"
        }
      }
    }
    post {
       always {
           deleteDir()
       }
    }
}
