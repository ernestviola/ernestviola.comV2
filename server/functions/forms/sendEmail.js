var aws = require("aws-sdk");
var ses = new aws.SES({ region: "us-east-1" });

exports.handler = async (event, context, callback) => {
  if (event.body !== null && event.body !== undefined) {
    let data = isJsonString(event.body) ? JSON.parse(event.body) : event.body;

    if (typeof data.name === 'undefined') {
      return sendRes(404, '{ error: true, message: "Inner sendRes!." }');
    }

    const constructedEmail = data.message
    const constructedSubject = data.name + ' - ' + data.email

    var params = {
      Destination: {
        ToAddresses: [process.env.toEmail],
      },
      Message: {
        Body: {
          Text: { Data: constructedEmail },
        },

        Subject: { Data: constructedSubject },
      },
      Source: process.env.fromEmail,
    };

    const promise = await ses.sendEmail(params).promise()
    return sendRes(200, promise);
  }

  return sendRes(404, '{ error: true, message: "Outer sendRes!." }');
};
const sendRes = (status, body) => {
  var response = {
    statusCode: status,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
      "Access-Control-Allow-Methods": "OPTIONS,POST",
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Allow-Origin": "*",
      "X-Requested-With": "*"
    },
    body: body
  };
  return response;
};

const isJsonString = (j) => {
  try {
    JSON.parse(j);
  } catch (e) {
    return false;
  }
  return true;
}