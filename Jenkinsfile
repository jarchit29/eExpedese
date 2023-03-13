/* This Jenkins File will be written to extensively deploy Shaly Mobile Application for Android Platform
    It will be written as a Declerative Pipeline
    
    ++++++++++++++++++++++++++++++++++++
    Author: Amitesh Anand
    Version: 1.0
    +++++++++++++++++++++++++++++++++++
*/

pipeline {
  agent any
  
  environment {
   
  
  // GRADLE_USER_HOME = '/var/lib/jenkins/tools/hudson.plugins.gradle.GradleInstallation/Gradle_Version_7.1.1'
  //GRADLE_USER_HOME = '/var/lib/jenkins/.gradle/wrapper/dists/gradle-6.6.1-bin/du4tvj86lhti6iga1v8h7pckb/gradle-6.6.1'
  CBL_DEVELOP_WORKSPACE = '/var/lib/jenkins/workspace/CBL-Mobile-App-Dev'
  SONAR_PROJECTKEY = 'Shalby-Develop-IA'
  ANDROID_SDK_ROOT = '/opt/android-sdk'
  JAVA_HOME='/usr/lib/jvm/jre-11-openjdk'
  JRE_HOME='/usr/lib/jvm/jre-11'
  }
    
  // Define the Stages now 
    stages {
    
    stage('Install Node Modules') {
      steps {
      
         sh script:'''
        #!/bin/bash
        echo "This is the start of $(pwd)"
        printenv
        cd $CBL_DEVELOP_WORKSPACE
        echo "Now we are in $(pwd)"
        npm install
        '''


      }
      
     }

     stage('Build Ionic App') {
      steps {

         sh script:'''
        #!/bin/bash
        cd $CBL_DEVELOP_WORKSPACE
        echo "Now we are in $(pwd)"
        /usr/local/bin/ionic build
        '''


      }
      
     }

    //  stage('Sync Capacitor using Ionic') {
    //   steps {

    //      sh script:'''
    //     #!/bin/bash
    //     cd $SHALBY_DEVELOP_WORKSPACE
    //     echo "Now we are in $(pwd)"
    //     /usr/local/bin/ionic cap sync
    //     '''


    //   }
      
    //  }

       stage('Sync Capacitor using npx') {
      steps {

         sh script:'''
        #!/bin/bash
        cd $CBL_DEVELOP_WORKSPACE
        echo "Now we are in $(pwd)"
        /usr/bin/npx cap sync android
        '''


      }
      
     }

       stage('Create dbg apk') {
      steps {

         sh script:'''
        #!/bin/bash
        cd $CBL_DEVELOP_WORKSPACE/android
        echo "Now we are in $(pwd)"
        chmod 777 gradlew
        ./gradlew clean assembleDebug
        '''


      }
      
     }
     
       
  }
//   post {

//         always {
//             junit allowEmptyResults: true, testResults: 'modules/**/build/test-results/**/*.xml,modules/**/**/build/test-results/**/*.xml'    
                  
            
//                }
//         success {   
//             mail to: 'shubham.nagar@infoaxon.com,amitesh.anand@infoaxon.com',
//             from: 'jenkins@infoaxon.com',
//             subject: "BUILD SUCCESSFUL!: ${currentBuild.fullDisplayName}",
//             body: 
//             "${env.BUILD_URL} has result ${currentBuild.result}\n\n Git Branch : ${env.GIT_BRANCH}"
                  
            
//                }

//         failure {    
//             mail to: 'shubham.nagar@infoaxon.com,amitesh.anand@infoaxon.com,anilkumar.yadav@infoaxon.com,vishal.srivastava@infoaxon.com,tapan.rana@infoaxon.com',
//             from: 'jenkins@infoaxon.com',
//             subject: "BUILD FAILED!: ${currentBuild.fullDisplayName}",
//             body: 
//             "${env.BUILD_URL} has result ${currentBuild.result}\n\n Git Branch : ${env.GIT_BRANCH}"
                  
            
//                }
//   }
}




        
               
  


    
            
               
  

