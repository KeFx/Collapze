'use strict'
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

console.log(generateCollapsibleObjectHTML(demoJSON));

function generateCollapsibleObjectHTML(object){
    var HTML = `<!DOCTYPE html>
    <html>
    <head>
        <style>
            body {
                margin: auto;
                margin-top: 1%;
                width: 50%;
                border: 3px solid rgb(0, 0, 0);
                padding: 10px;
                font-size: 18px ;
                font-family: "courier new";
                
            }
    
            h1 {
                text-align: center;
                font-weight: bold;
                font-size: 350%;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            }
    
            #main_content {
                word-wrap: break-word;
                margin: 10px;
                position:sticky;
            }
    
            h3 {
                /* display:inline;  */
                font-size:1em; 
                font-weight:normal;
                margin: 0;
                padding: 4px;
                padding-top: 0px;
                padding-bottom: 0px;
                font-size: 18px;
                float: left;
            }
    
            button {
                background-image: url("http://bodurov.com/jsonformatter/images/Expanded.gif");
                background-color: transparent;
                background-repeat: no-repeat;
                appearance: none;
                border: none;
                height: 10.5px;
                width: 10px;
                padding-top: 4px;
                cursor:pointer;
            }
    
            .expanded{
                background-image: url("http://bodurov.com/jsonformatter/images/Collapsed.gif") !important;
            }
    
            .collapsible {
                margin-left: 50px;
            }
        </style>
    </head>
    
    <body>
        <h1>The contents</h1>
    
        <div id="main_content">
    `;
    HTML += formatObject(object)
    return HTML + `</div>
            <script>
                var buttons = document.getElementsByTagName("button");
                var i;
                
                console.log("buttons : ", buttons)
                for (i = 0; i < buttons.length; i++) {
                    const currentIndex = i;
                    buttons[i].addEventListener("click", function () {
                        this.classList.toggle("expanded");
                        var collapsible = document.getElementsByClassName('collapsible')[currentIndex];
                        console.log("collapsible", collapsible);
                        if (collapsible.style.display === "none") {
                            console.log("index", currentIndex, "in if");
                            collapsible.style.display = "block";
                        }
                        else {
                            console.log("index", currentIndex, "in else");
                            collapsible.style.display = "none";
                        }
                
                    });
                }
                
            </script>
        </body>
        </html>
    `
}

function formatObject(o){
    var HTML = "";
    for (var n in o){
        if (typeof(o[n]) === "object"){
            HTML += insertKey(n); //add button is included in this function.
            HTML += insertOPTag();
            HTML += formatObject(o[n]);
            HTML += insertEDTag();   
        }
        else {
            HTML += insertValue(n, o[n]);
        }
    }
    return HTML
};

function insertValue(key, value){
    var snippet = '<div><h3>"' + key + '" : </h3>' + JSON.stringify(value) + '</div>';
    return snippet;
};
function insertKey(key){
    var snippet = '<h3>"' + key + '" : </h3><button></button><br>';
    return snippet;
};
function insertOPTag(){
    var snippet = '<div class="collapsible">';
    return snippet;
};
function insertEDTag(){
    var snippet = '</div>';
    return snippet;
};