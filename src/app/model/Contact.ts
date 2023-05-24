export class Contact {
  firstname: string;
  lastname: string;
  gender: string;
  isToc: boolean;
  email: string;

  constructor(
    firstname: string,
    lastname: string,
    gender: string,
    isToc: boolean,
    email: string
  ) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.gender = gender;
    this.isToc = isToc;
    this.email = email;
  }
}
