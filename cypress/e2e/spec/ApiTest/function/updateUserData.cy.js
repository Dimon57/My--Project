import {faker} from '@faker-js/faker';
import {ApiHelper, HEADER, header} from "../../../modules/pages/apiHelper";

const apiHelper = new ApiHelper()

describe('Updated user', () => {
    
    const DATA = {
        username: faker.person.fullName(),
        firstname: faker.person.firstName(),
        lastname: faker.person.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        phone: faker.phone.number(),
        id: faker.random.numeric(15),
      }

it('200 status code update user', () => {

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

})

it('Wrong user name', () => {
        
        const NAME = 'wrongUserNameForTest1234@#@$#%#^'

        apiHelper.put(`user/${NAME}`,'test', HEADER).then((data)=>{
            expect(data.status).to.eq(400)
            expect(data.body.type).to.eq("unknown")
          })

})

})