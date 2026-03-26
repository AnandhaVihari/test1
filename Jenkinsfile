pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Prepare Artifact') {
            steps {
                sh '''
                    rm -f static-site-artifact.zip
                    zip -r static-site-artifact.zip . -x '.git/*'
                '''
            }
        }

        stage('Archive Artifact') {
            steps {
                archiveArtifacts artifacts: 'static-site-artifact.zip', fingerprint: true
            }
        }
    }
}
