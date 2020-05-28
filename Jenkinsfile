#!/usr/bin/env groovy

pipeline {
    agent any
    stages {
		stage('Start'){
            steps{
                rocketSend message: "Build for journeys Started", channel: 'jenkins'
            }
        }	
        stage('Prepare environment') {
            steps {
                sh "/var/lib/jenkins/scripts/prepenv.sh"
                sh "ls -lha .env"
            }
        }
        stage('Install package') { 
            steps {
                sh 'npm install' 
            }
        }
        stage('Build Package'){
            steps {
                sh 'npm install'
                sh 'npm run build'
            }   
        }
        stage('Push to staging'){
            steps{
                sh 'rsync -avzri --exclude="/*/*/" ./ bitnami@apexwebtest.apexinnovations.com:/apex/htdocs/Classroom/journeys'
            }
        }
    }
    post {
        success{
            rocketSend message: "Build for journey great success! ᕙ(▀̿̿Ĺ̯̿̿▀̿ ̿) ᕗ", emoji:':camera_with_flash:', channel: 'jenkins'
        }
        unstable{
            rocketSend message: "Build unstable (∩︵∩)", channel: 'jenkins'
        }
        failure{
            rocketSend message: "Journey Build Failed ┏༼ ◉ ╭╮ ◉༽┓", emoji:':thumbsdown:', channel: 'jenkins'
        }
    }
}