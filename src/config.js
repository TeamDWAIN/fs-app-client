export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: "us-east-1",
      BUCKET: "aws-app-uploads"
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://5jcl1gok19.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_MRaVv6hVs",
      APP_CLIENT_ID: "1rpinntg0js7drspp7kqofm7u8",
      IDENTITY_POOL_ID: "us-east-1:90f73d29-13a7-4dfb-9c85-996141fd5739"
    }
  };
