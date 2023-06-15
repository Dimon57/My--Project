import {faker, it} from '@faker-js/faker';
import {ApiHelper, HEADER, header} from "../../../modules/pages/apiHelper";

const apiHelper = new ApiHelper()


describe('Get user', () => {
    
    const DATA = {
        username: faker.person.fullName(),
        firstname: faker.person.firstName(),
        lastname: faker.person.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        phone: faker.phone.number(),
        id: faker.random.numeric(15),
      }

it('200 status code get user', () => { 
      
        apiHelper.createUser(DATA).then((data) => {
            expect(data.status).to.eq(200)
            expect(data.body.code).to.eq(200)
            expect(data.body.type).to.eq("unknown")
        })

        apiHelper.getDataUser(DATA.username).then((data)=>{
          expect(data.status).to.eq(200)
          expect(data.body.email).to.eq(DATA.email)
          expect(String(data.body.id)).to.eq(DATA.id)
          expect(data.body.username).to.eq(DATA.username)
          expect(data.body.firstName).to.eq(DATA.firstname)
          expect(data.body.lastName).to.eq(DATA.lastname)
          expect(data.body.password).to.eq(DATA.password)
          expect(data.body.phone).to.eq(DATA.phone)
        })
})

it('Wrong user name', () => { 

        const NAME = DATA.username

        apiHelper.get(`user/${NAME}`,HEADER).then((data)=>{
            expect(data.status).to.eq(404)
            expect(data.body.message).to.eq("User not found")
        })

    })
           
})