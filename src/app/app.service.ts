import { Injectable } from "@angular/core"

interface Person{
    firstName: string,
    lastName: string,
    about: string,
    dateOfBirth: Date,
    status: string
}

@Injectable({
    providedIn: 'root'
})
export class AppService{
    persons: Person[] = [
        {
            firstName: "Giorgi",
            lastName: "Bazerashvili",
            about: "About Giorgi",
            dateOfBirth: new Date(" 02 / 01 / 1996"),
            status: "Active"
        },
        {
            firstName: "Sandro",
            lastName: "Baxtadze",
            about: "About Baxto",
            dateOfBirth: new Date(" 09 / 19 / 2000"),
            status: "Inactive"
        },
        {
            firstName: "John",
            lastName: "Doe",
            about: "About John",
            dateOfBirth: new Date(" 01 / 01 / 1970"),
            status: "Deleted"
        }
    ]
}