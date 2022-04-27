class Document {
  constructor(EmployeeName) {
    this.EmployeeName = EmployeeName;
  }
}

class Employee {
  constructor(name) {
    this.name = name;
  }

  work = function (office) {
    for (let i = 0; i < 10; i++) {
      office.documents.push(new Document(this.name));
    }
  };
}

class Manager {
  constructor(name) {
    (this.employees = []), (this.name = name);
  }
  hireEmployee = function (name) {
    this.employees.push(new Employee(name));
  };
  askEmployeesToWork = function (office) {
    this.employees.forEach((employee) => employee.work(office));
  };
}

class Cleaner {
  constructor(name) {
    this.name = name;
  }
  clean = function () {
    console.log('Clean');
  };
}

class Office {
  constructor(managers, cleaners) {
    (this.documents = []), (this.managers = []), (this.cleaners = []);
  }

  hireCleaner = function (name) {
    this.cleaners.push(new Cleaner(name));
  };
  hireManager = function (name) {
    this.managers.push(new Manager(name));
  };
  startWorkDay = function () {
    this.managers.forEach((manager) => manager.askEmployeesToWork(this));
  };
}
