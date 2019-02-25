const { Storage } = require('@google-cloud/storage');

const storage = new Storage();

module.exports = {
  upload(bucketName, fileName) {
    return storage
      .bucket(bucketName)
      .upload(fileName, {
        gzip: true,
        metadata: {
          cacheControl: 'public, max-age=31536000',
        },
      });
  },
};
