pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                deleteDir()
                git branch: 'main', url: 'https://github.com/AnandhaVihari/test1'
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

        stage('Deploy') {
            steps {
                sh '''
                set -e
                set -x

                echo "Deploying full project..."

                rsync -av --delete --exclude='.git' ./ /var/www/html/

                echo "Final state:"
                ls -la /var/www/html
                '''
            }
        }
    }
}
