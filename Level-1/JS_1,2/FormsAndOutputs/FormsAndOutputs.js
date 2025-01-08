let content = `POST /api/checkLoginAndPassword HTTP/1.1
Accept: */*
Content-Type: application/x-www-form-urlencoded
User-Agent: Mozilla/4.0
Content-Length: 35

login=student&password=12345`

function outputHttpResponse(statusCode, statusMessage, headers, body = '') {
    let response = `HTTP/1.1 ${statusCode} ${statusMessage}\n`;

    for (let [key, value] of Object.entries(headers)) {
        response += `${key}: ${value}\n`;
    }

    console.log(response + `\n${body}`);
}

function processHttpRequest($method, $uri, $headers, $body) {
    let statusCode, statusMessage, body;

    const [userLogin,userPassword] = $body.toString().split("&").map(value => value.split("=")[1]);

    try {
        const fs = require("fs").readFileSync("passwords.txt").toString();

        let user = {userLogin, userPassword};

        let isUserFound = ({userLogin, userPassword}, fileStream) => {
            let usersData = fileStream.split('\n').map(value => value.split(":").map(value => value.replaceAll('\r', '')));

            for (let [usrLogin, usrPassword] of usersData) {
                if (usrLogin === userLogin && usrPassword === userPassword) {
                    return true;
                }
            }


            return false;
        }

        if ($uri.toString().startsWith("/api/")) {
            if ($uri.match(/^\/api\/checkLoginAndPassword/gi) && isUserFound({...user}, fs)) {
                statusCode = 200;
                statusMessage = "OK";
                body = "<h1 style=\"color:green\">FOUND</h1>";
            } else {
                statusCode = 404;
                statusMessage = "Not Found";
            }
        } else {
            statusCode = 400;
            statusMessage = "Bad Request";
        }
    } catch(err) {
        statusCode = 500;
        statusMessage = "Internal Server Error";
    }

    outputHttpResponse(statusCode, statusMessage, $headers, body);
}

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

httpRequest = parseTcpStringAsHttpRequest(content);
processHttpRequest(httpRequest.method, httpRequest.uri, httpRequest.headers, httpRequest.body);

