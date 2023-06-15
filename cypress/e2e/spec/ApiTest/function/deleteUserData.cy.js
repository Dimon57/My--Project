import {faker} from '@faker-js/faker';
import {ApiHelper, HEADER, header} from "../../../modules/pages/apiHelper";

const apiHelper = new ApiHelper()

const DATA = {
  username: faker.person.fullName(),
  firstname: faker.person.firstName(),
  lastname: faker.person.lastName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  phone: faker.phone.number(),
  id: faker.random.numeric(15),
}

describe('Delete user', () => {

    it('200 status code delete user', () => { 

        apiHelper.createUser(DATA).then((data) => {
            expect(data.status).to.eq(200)
            expect(data.body.code).to.eq(200)
            expect(data.body.type).to.eq("unknown")
        })
        
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
            expect(data.status).to.eq(404)
            expect(data.body.message).to.eq("User not found")
          })
    })

it('Wrong user name', () => {

        const NAME = DATA.username

        apiHelper.delete(`user/${NAME}`,HEADER).then((data)=>{
        expect(data.status).to.eq(404)
      })
})

})