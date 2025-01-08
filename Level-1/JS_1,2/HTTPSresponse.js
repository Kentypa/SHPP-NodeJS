let contents = [
    'GET /sum?nums=1,2,3 HTTP/1.1\nHost: student.shpp.me\n',
    'GET /sum? HTTP/1.1\nHost: student.shpp.me\n',
    'GET /notsum HTTP/1.1\nHost: student.shpp.me\n'
];

function outputHttpResponse(statusCode, statusMessage, headers, body) {
    let response = `HTTP/1.1 ${statusCode} ${statusMessage}\n`;

    for (let [key, value] of Object.entries(headers)) {
        response += `${key}: ${value}\n`;
    }

    response += `\n${body}`;

    console.log(response + "\n");
}

function processHttpRequest($method, $uri, $headers, $body) {
    let statusCode;
    let statusMessage;
    let responseBody = "";

    let headers = $headers;
    headers['Date'] = new Date().toUTCString();
    headers['Server'] = 'Apache/2.2.14 (Win32)';

    if ($uri.includes("nums=")) {
        const numsMatch = $uri.match(/nums=([\d,]+)/);
        if (numsMatch) {
            const nums = numsMatch[1].split(',').map(Number);
            const sum = nums.reduce((acc, num) => acc + num, 0);
            statusCode = 200;
            statusMessage = "OK";
            responseBody = String(sum);
        } else {
            statusCode = 400;
            statusMessage = "Bad Request";
            responseBody = "bad request";
        }
    } else if ($uri.startsWith("/sum")) {
        statusCode = 400;
        statusMessage = "Bad Request";
        responseBody = "bad request";
    } else {
        statusCode = 404;
        statusMessage = "Not Found";
        responseBody = "not found";
    }

    headers['Content-Length'] = responseBody.length;
    headers['Connection'] = 'Closed';
    headers['Content-Type'] = 'text/html; charset=utf-8';

    outputHttpResponse(statusCode, statusMessage, headers, responseBody);
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

for (let content of contents) {
    let httpRequest = parseTcpStringAsHttpRequest(content);
    processHttpRequest(httpRequest.method, httpRequest.uri, httpRequest.headers, httpRequest.body);
}
