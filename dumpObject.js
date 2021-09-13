var demoObject = {
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

function dumpObject(parent, o){
    for (var n in o){
        if (typeof(o[n]) === "object"){
            if (parent === ""){
                parent = n;
            }
            else{
                parent = parent + "." + n;
            }   
           
            dumpObject(parent, o[n]);
        }
        else {
            console.log(parent + "." + n + "." + o[n]);
        }
    }

}

dumpObject("", demoObject);//fully dumps the object tree.(with parents paths)