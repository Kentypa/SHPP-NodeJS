function readHttpLikeInput(){
    var fs = require("fs");
    var res = "";
    var buffer = Buffer.alloc ? Buffer.alloc(1) : new Buffer(1);
    let was10 = 0;
    for(;;){
        try { fs.readSync(0 /*stdin fd*/, buffer, 0, 1); } catch (e) {break; /* windows */}
        if(buffer[0] === 10 || buffer[0] === 13) {
            if (was10 > 10)
                break;
            was10++;
        } else
            was10 = 0;
        res += new String(buffer);
    }

    return res;
}

let contents = readHttpLikeInput();

function parseTcpStringAsHttpRequest(string) {
    let pascalCase = (s) => {
        return s.replace(/\w+/g, w => w[0].toUpperCase() + w.slice(1).toLowerCase());
    };

    const lines = string.split("\n").filter(value => value !== '');
    const [method, uri, protocol] = lines[0].split(' ');
    const LINES_MINUS_ONE_LENGTH = lines.length - 1;
    let headers = {};

    for (let i = 1; i < LINES_MINUS_ONE_LENGTH; i++) {
        let [key, ...values] = lines[i].split(':');
        headers[pascalCase(key.trim())] = values.join(',').trim();
    }
    let body = lines[lines.length - 1];

    return {
        method: method,
        uri: uri,
        headers: headers,
        body: body,
    };
}

http = parseTcpStringAsHttpRequest(contents);
console.log(JSON.stringify(http, undefined, 2));