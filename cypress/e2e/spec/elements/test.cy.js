import {faker} from '@faker-js/faker';
import {ApiHelper, HEADER, header} from "../../modules/pages/apiHelper";
import {BaseApi} from "../../modules/pages/baseApi";

const apiHelper = new ApiHelper()
const baseApi = new BaseApi()
describe('Api test', () => {

    it('', () => {
        const DATA = {
            username: faker.person.fullName(),
            firstname: faker.person.firstName(),
            lastname: faker.person.lastName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
            phone: faker.phone.number(),
            id: faker.random.numeric(15),
        }
        
        apiHelper.createUser(DATA).then((data) => {
            expect(data.status).to.eq(200)
            expect(data.body.code).to.eq(200)
            expect(data.body.type).to.eq("unknown")
        })

        baseApi.get(`user/${DATA.username}`, HEADER)
        
        const a = DATA.username
        DATA.username =  faker.person.fullName()

        apiHelper.updatedUser(DATA,a).then((data)=>{
          expect(data.status).to.eq(200)
          expect(data.body.type).to.eq("unknown")
        })
        

        apiHelper.getDataUser(DATA.username).then((data)=>{
          expect(data.status).to.eq(200)
          expect(data.body.username).to.eq(DATA.username)
        })


        apiHelper.deleteUser(DATA.username).then((data)=>{
          expect(data.status).to.eq(200)
          expect(data.body.type).to.eq("unknown")
        })

        apiHelper.getDataUser(DATA.username).then((data)=>{
          cy.log(data)
          expect(data.status).to.eq(404)
          expect(data.body.message).to.eq("User not found")
        })
    })
})