pipeline {
    agent any

    stages {
        stage('Validate Files') {
            steps {
                sh '''
                set -e
                set -x

                echo "Checking files..."
                ls -la

                if [ ! -d "assets" ]; then
                    echo "ERROR: assets folder missing!"
                    exit 1
                fi
                '''
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                set -e
                set -x

                echo "Deploying..."

                rsync -av --delete --exclude='.git' ./ /var/www/html/

                echo "Done"
                '''
            }
        }
    }
}