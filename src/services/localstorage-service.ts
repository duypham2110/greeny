import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {
    userData: any
    currentUser: any

    constructor() {
        this.userData = this.GetSavedUser();
        console.log(this.userData);
    }

    GetSavedUser = function () {
        const userJSON = localStorage.getItem('user');

        if (userJSON !== null) {
            return JSON.parse(userJSON);
        } else {
            return [];
        }
    }

    SignIn(email, password) {
        for (var i = 0; i < this.userData.length; i++) {
            if (this.userData[i].email == email && this.userData[i].password == password) {
                this.currentUser = this.userData.filter((user) => {
                    return user.email == email;
                });
                
                return true;
            }
        }
        return false;
    }

    RegisterUser(email, password) {
        for (var i = 0; i < this.userData.length; i++) {
            if (this.userData[i].email == email) {
                return false;
            }
        }

        const user: User = {
            email: email,
            password: password,
            amount: 1000
        }

        this.userData.push(user);

        localStorage.setItem('user', JSON.stringify(this.userData));

        return true;
    }

    deleteUser(email, password) {
        for (var i = 0; i < this.userData.length; i++) {
            if (this.userData[i].email == email && this.userData[i].password == password) {
                this.userData = this.userData.filter((user) => {
                    return user.email !== email;
                });
                localStorage.setItem('user', JSON.stringify(this.userData));
                return true;
            }
        }
        return false;
    }
}