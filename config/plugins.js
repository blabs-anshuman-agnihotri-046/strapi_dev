module.exports = ({ env }) => ({
    upload: {
      config: {
        provider: "strapi-provider-upload-azure-storage",
        providerOptions: {
          account: env("STORAGE_ACCOUNT"),
          accountKey: env("STORAGE_ACCOUNT_KEY"),
 //         serviceBaseURL: env("STORAGE_URL"), // optional
          serviceBaseURL: 'https://csstrapistorage.blob.core.windows.net/strapicontainer',
          containerName: env("STORAGE_CONTAINER_NAME"),
//          defaultPath: "assets",
//          cdnBaseURL: env("STORAGE_CDN_URL"), // optional
        },
      },
    },
  });