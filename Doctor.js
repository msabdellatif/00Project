class Doctor {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    // Getter
    get info() {
      return this.name + " " + this.age;
    }
   
  }
  
  const Mohamed = new Doctor("mohamed", 10);
  
  console.log(Mohamed.info); // 100