class Human {
  
  // Властивості:
  // імʼя;
  // вік.
  // и ожидаемый тип данных в свойствах
  name = '';
  age = '';
  // констуруктор 
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // метод выводящий информцию
  info(){
    console.log(`Возраст - ${this.age}. Имя - ${this.name}`);
  }

}

class Car {
  // марка, модель, рік виписку, номерний знак и ожидаемый тип данных в свойствах
  carBrad = '';
  carModel = '';
  carYear = '';
  numberPlate = '';
  //null потому что ожидаеться присвоение єкземпляра класса но по умолчанию свойство пустоеж
  carOwner = null;

  // констуруктор 
  constructor(carBrad,carModel,carYear,numberPlate) {
    this.carBrad = carBrad;
    this.carModel = carModel;
    this.carYear = carYear;
    this.numberPlate = numberPlate;

  }
  // присвоїти власника - метод повинен приймати екземпляр класу Людина, та зберігати екземпляр класу Людина у відповідному полі, якщо вік більше 18, інакше виводити у консоль відповідне повідомлення
  assignCar(human){
    if(human.age > 18) {
      this.carOwner = human;
    } else {
      console.log('Ты слишком юн падаван');
    }
  }

  // метод, який виводить у консоль інформацію про автомобіль та викликає метод виводу інформації класу Людина для виведення інформації про власника
  сarInfo(){
    console.log(`Бренд : ${this.carBrad},Модель : ${this.carModel},Год выпуска : ${this.carModel},Номера : ${this.carModel}`);
    this.carOwner === null ? console.log("Нет собственника") : this.carOwner.info();
  }
}

// Создание экземпляров класса Human
const lukeSkywalker = new Human('Люк Скайуокер', 35);
const leiaOrgana = new Human('Лея Органа', 28);
const youngAnakin = new Human('Молодой Анакин', 15);

// Создание экземпляров класса Car
const teslaModelS = new Car('Tesla', 'Model S', 2023, 'TSL001');
const mercedesBenzGClass = new Car('Mercedes-Benz', 'G-Class', 2015, 'MBG002');
const fordMustang = new Car('Ford', 'Mustang', 2018, 'FM003');

// Присвоение владельцев автомобилям
teslaModelS.assignCar(lukeSkywalker);
mercedesBenzGClass.assignCar(leiaOrgana);
fordMustang.assignCar(youngAnakin);

// Вывод информации об автомобилях и их владельцах
teslaModelS.сarInfo();
mercedesBenzGClass.сarInfo();
fordMustang.сarInfo();