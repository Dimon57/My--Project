import {BaseApi} from "./baseApi";

export const HEADER = {
    "accept": "application/json",
    "Content-Type": "application/json"
}

export class ApiHelper extends BaseApi {

    bodyUserCreate = (data) => {
        return {
            "id": data.id,
            "username": data.username,
            "firstName": data.firstname,
            "lastName": data.lastname,
            "email": data.email,
            "password": data.password,
            "phone": data.phone,
            "userStatus": 1
        }
    }

    createUser(data) {
       return this.post("user", this.bodyUserCreate(data), HEADER)
    }


    getDataUser(name){
        return this.get(`user/${name}`, HEADER)
    }


    updatedUser(data,name) {
        return this.put(`user/${name}`, this.bodyUserCreate(data), HEADER)
    }


    deleteUser(name){
        return this.delete(`user/${name}`, HEADER)
    }

    
}