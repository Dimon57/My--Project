export class BaseApi {
    // 'https://petstore.swagger.io/v2/user'
    structureApi(method, endpoint, body, headers) {
        return cy.request({
            method: method,
            url: "https://petstore.swagger.io/v2/" + endpoint,
            headers: headers,
            failOnStatusCode: false,
            body: body,
        })
    }

    post(endpoint, body, headers) {
        return this.structureApi("POST", endpoint, body, headers)
    }

    get(endpoint, headers) {
        return this.structureApi("GET", endpoint, null, headers)
    }

    put(endpoint, body, headers) {
        return this.structureApi("PUT", endpoint, body, headers)
    }

    delete(endpoint, body, headers) {
        return this.structureApi("DELETE", endpoint, null, headers)
    }
}