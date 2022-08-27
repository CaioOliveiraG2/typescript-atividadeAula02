export class Person {
  firstName: string;
  middleName: string;
  lastName: string;
  age: number;
  emails: Array<string> = [
    'ciclano@hotmail.com',
    'beltrano@outlook.com',
    'Lukinhas123@livemail.com',
  ];

  constructor(
    firstName: string,
    middleName: string,
    lastName: string,
    age: number
  ) {
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
    this.age = age;
  }

  getFullName() {
    return this.firstName + ' ' + this.middleName + ' ' + this.lastName;
  }

  getBirthdayYear() {
    return 2022 - this.age;
  }
}
