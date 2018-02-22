module.exports = {
  servers: {
    memosaDev: {
        host: '158.197.204.103',
        username: 'meteor'
    }
  },
  meteor: {
    name: 'jefte-app',
    path: '../',
    servers: {
      memosaDev: {},
    },
    buildOptions: {
      // build with the debug mode on
        serverOnly: true,
      cleanAfterBuild: true, // default
      debug: true,
    },
    env: {
        PORT: 3000,
      ROOT_URL: 'https://158.197.204.103:3000/',
      MONGO_URL: 'mongodb://158.197.204.103:27018/meteor',
      METEOR_ALLOW_SUPERUSER: '1'
    },
//    ssl: {
      // Enables let's encrypt (optional)
//      autogenerate: {
//        email: '',
//        domains: 'example.memosa.tech'
//      }
//    },
    // change to 'kadirahq/meteord' if your app is not using Meteor 1.4
    docker: {
      image: 'abernix/meteord:base',
        imagePort: 3000
    },
    deployCheckWaitTime: 120,
    deployCheckPort: 3000,
    // Show progress bar while uploading bundle to server
    // You might need to disable it on CI servers
    enableUploadProgressBar: false
  }
//,
//  mongo: {
//    oplog: true,
//    port: 27018,
//    version: '3.4.1',
//    servers: {
//      memosaDev: {},
//    },
//  },
};
