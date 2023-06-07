import { faker } from '@faker-js/faker';

it('',()=>{
const DATA = {
    username: faker.person.fullName(),
    firstname: faker.person.firstName(),
    lastname: faker.person.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    phone: faker.phone.number(),
    id: faker.random.numeric(15),
}
cy.request({
    method: 'POST',
    url: 'https://petstore.swagger.io/v2/user', 
    body: {
      "id": DATA.id,
      "username": DATA.username,
      "firstName": DATA.firstname,
      "lastName": DATA.lastname,
      "email": DATA.email,
      "password": DATA.password,
      "phone": DATA.phone,
      "userStatus": 1
    },
  }).then((data)=>{
   cy.log(data)
    expect(data.status).to.eq(200)
    expect(data.body.code).to.eq(200)
    expect(data.body.type).to.eq("unknown")
  })
  cy.request({
    method: 'GET',
    url: `https://petstore.swagger.io/v2/user/${DATA.username}`,
  }).then((data)=>{
    cy.log(data)
    expect(data.status).to.eq(200)
    expect(data.body.email).to.eq(DATA.email)
    expect(String(data.body.id)).to.eq(DATA.id)
    expect(data.body.username).to.eq(DATA.username)
    expect(data.body.firstName).to.eq(DATA.firstname)
    expect(data.body.lastName).to.eq(DATA.lastname)
    expect(data.body.password).to.eq(DATA.password)
    expect(data.body.phone).to.eq(DATA.phone)
  })
  const UPDATE_NAME = faker.person.fullName()
  cy.request({
    method: 'PUT',
    url: `https://petstore.swagger.io/v2/user/${DATA.username}`,
    body:{
        "id": DATA.id,
        "username": UPDATE_NAME,
        "firstName": DATA.firstname,
        "lastName": DATA.lastname,
        "email": DATA.email,
        "password": DATA.password,
        "phone": DATA.phone,
        "userStatus": 0
      }
  }).then((data)=>{
    cy.log(data)
    expect(data.status).to.eq(200)
    expect(data.body.type).to.eq("unknown")
  })
  cy.request({
    method: 'GET',
    url: `https://petstore.swagger.io/v2/user/${UPDATE_NAME}`,
  }).then((data)=>{
    cy.log(data)
    expect(data.status).to.eq(200)
    expect(data.body.username).to.eq(UPDATE_NAME)
  })
  cy.request({
    method: 'DELETE',
    url: `https://petstore.swagger.io/v2/user/${UPDATE_NAME}`,
  }).then((data)=>{
    cy.log(data)
    expect(data.status).to.eq(200)
    expect(data.body.type).to.eq("unknown")
  })
  cy.request({
    method: 'GET',
    failOnStatusCode: false,
    url: `https://petstore.swagger.io/v2/user/${UPDATE_NAME}`,
  }).then((data)=>{
    cy.log(data)
    expect(data.status).to.eq(404)
    expect(data.body.message).to.eq("User not found")
  })
})