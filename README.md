Access [Amazon Translate] via HTTP API.
<br>


## setup

### microservice

1. Download [this package] as `.zip`.
2. Create a new lambda function on [AWS Lambda].
3. In **Function Code**, select **Code entry type** as `.zip`.
4. Select **Add triggers** , `API Gateway`.
5. In **API**, select `Create a new API`.
6. For **Security**, select `Open`.
7. Select `Add`, and `Save`.
8. Copy the **API endpoint** URL.

### test

1. Install [RestMan] extension for using HTTP API.
2. For **Enter url here...**, paste **API endpoint** URL.
3. API data is sent through **Body** -> **RAW**.
<br>


## usage

```javascript
{
  "method": "translateText",
  "params": {
    "Text": "I like milk.",
    "SourceLanguageCode": "auto",
    "TargetLanguageCode": "es"
  }
}
// {
//     "data": {
//         "TranslatedText": "me gusta la leche,",
//         "SourceLanguageCode": "en",
//         "TargetLanguageCode": "es"
//     }
// }


{
  "method": "translateText",
  "params": {
    "Text": "I like milk.",
    "TargetLanguageCode": "es"
  }
}
// {
//     "err": {
//         "message": "Missing required key 'SourceLanguageCode' in params",
//         "code": "MissingRequiredParameter",
//         "time": "2019-01-05T10:48:59.718Z"
//     }
// }
```
<br>


[![serverlessf](https://i.imgur.com/RBjDIUp.jpg)](https://serverlessf.github.io)
> References: [AWS Translate SDK].

[Amazon Translate]: https://aws.amazon.com/translate/

[this package]: https://github.com/serverlessf/api-amazontranslate/releases
[AWS Lambda]: https://console.aws.amazon.com/lambda/home
[RestMan]: https://chrome.google.com/webstore/detail/restman/ihgpcfpkpmdcghlnaofdmjkoemnlijdi?hl=en

[AWS Translate SDK]: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Translate.html
