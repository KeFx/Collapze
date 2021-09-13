var singleNodeOjbect = {
    key: "value"
}

var twoSiblingsNodesOjbect = {
    key1: "value",
    key2: "valu2",
}

var singleObjectOjbect = {
    "key": {
        "keyUnderKey" : "value"
    }
}

var singleWithSibling = {
    "key" :{
        "subkey" : "subvalue",
    },
    "key2" : "value2"        
    };

var demoJSON = {
    "request": {
        "geolocation": {
            "propertyName" : 3,
            "p2": "this is p2"
        }
    },
    "deviceInfo": {
        "os": "Android"
        }
    };

var demoJSON = {
        "request": {
        "geolocation": {
            "latitude": 0,
            "longitude": 0
        },
        "deviceInfo": {
            "os": "Android",
            "osVersion": "8.1.0",
            "deviceInputMethod": "com.google.android.inputmethod.latin/com.android.inputmethod.latin.LatinIME",
            "uniqueId": "f7a1f99c7d8c0650",
            "deviceIntegrity": 0,
            "type": "Android SDK built for x86",
            "deviceCustomInputMethod": "0",
            "screenWidth": 1080,
            "userAgent": "",
            "screenHeight": 1794,
            "phoneNumber": "",
            "notificationAddress": "",
            "name": "sdk_gphone_x86"
        },
        "applicationPushInfo": {
            "pushAppId": "1234",
            "pushProvider": "GCM"
        },
        "locale": "en-US",
        "applicationInfo": {
            "versionNumber": "3.11.0",
            "brandingVersion": "3.11.0",
            "protocolVersion": "3.11.0",
            "clientVersion": "3.11.0",
            "clientType": "android"
        }
        }
    };
var newJSON = {
    "apiUrl": "api/v1/registration/authentication/accountNumber",
    "method": "POST",
    "processingMode": "E",
    "processingEnabled": true,
    "processKey": "FIFO",
    "attributes": {
      "body": [
        {
          "path": "accountNumber",
          "processingMode": 100,
          "isOptional": false
        },
        {
          "path": "citizenId",
          "processingMode": "E",
          "isOptional": false
        }
      ]
    }
  }