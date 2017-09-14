export class Student {
  private static _id = 0;
  public id = Student._id++;

  constructor(public name: string,
              public desc: string) {
  }
}
