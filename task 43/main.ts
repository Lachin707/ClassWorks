// let nname: string = "123";
// let age: number = 123;
// console.log(nname);
// console.log(age);

// // 2

// // let num:number = 6;
// // let str:string = "fasda"
// // let bol:boolean = true;
// // let x:any = undefined;

// // console.log(str+num);

// //4
// let num2: number = 6;
// console.log(num2 + "abc");

// //5
// let asa = 5;
// console.log(typeof asa);

// //6
// let str: string = "123";
// let num: number = Number(str);

// //7

// type ASada = {
// 	SAd: string;
// 	asda: number;
// };

// //8

// let arr: number[] = [5, 4, 3, 5, 6, 7, 4];
// arr.push(8);
// arr.slice(1, 1);

// // 9

// enum Color {
// 	Red,
// 	Green,
// 	White,
// 	Blue,
// }

// let selectedColor: number = Color.Red;

// //10

// let asda: null = null;
// let asas: undefined = undefined;

interface IVehicle<T> {
	make: string;
	model: string;
	year: number;
	start(): void;
}

class Car implements IVehicle<number> {
	public make: string;
	public model: string;
	public year: number;

	constructor(make: string, model: string, year: number) {
		this.make = make;
		this.model = model;
		this.year = year;
	}	

	start(): void {
		console.log(`${this.model} engine is now running`);
	}

    printCarDetails(): void {
		console.log(`${this.model} ${this.year} `);
	}
}

class Bus extends Car {
	constructor(make: string, model: string, year: number) {
		super(make, model, year);
		this.make = make;
		this.model = model;
		this.year = year;
	}
}
const nus = new Bus("asd", "Honda", 1999);

enum RoadType {
	Asphalt,
	Gravel,
	Dirt,
}

class SUV extends Car {
	public offroadAbility: number;
	constructor(make: string, model: string, year: number, offroadAbility: number) {
		super(make, model, year);
		this.make = make;
		this.model = model;
		this.year = year;
		this.offroadAbility = offroadAbility;
	}

	drive(RoadType: number): boolean {
		if (this.offroadAbility >= RoadType) return true;
		else return false;
	}

    


}
const suv = new SUV("asd", "Toyota", 1999, 3.0);

suv.drive(RoadType.Gravel);

// enum VehicleType {
// 	Car,
// 	MotorCycle,
// }

// enum EngineType {
// 	DOHC = "DOHC",
// 	SOHC = "SOHC",
// 	TURBO = "TURBO",
// }

// type Capacity = 30 | 40 | 50 | 70 | 100;

// interface IVehicle<T> {
// 	brandName: string;
// 	modelName: string;
// 	year: number;
// 	fuelCapacity: Capacity;
// 	currentFuel: T;
// 	milage: number;
// 	fuelFor1KM: number;
// 	engine: EngineType;
// 	vehicleType: VehicleType;
// 	getInfo(): void;
// 	drive(km: number): T;
// }

// class Car implements IVehicle<number> {
// 	public brandName: string;
// 	private _modelName: string;
// 	private _year: number;
// 	private _fuelCapacity: Capacity;
// 	private _currentFuel: number;
// 	private _milage: number;
// 	private _fuelFor1KM: number;
// 	private _engine: EngineType;
// 	private _vehicleType: VehicleType;

// 	constructor(brandName: string, modelName: string, year: number, fuelCapacity: Capacity, fuelFor1KM: number, engine: EngineType) {
// 		this.brandName = brandName;
// 		this._modelName = modelName;
// 		this._year = year;
// 		this._fuelCapacity = fuelCapacity;
// 		this._currentFuel = fuelCapacity;
// 		this._milage = 0;
// 		this._fuelFor1KM = fuelFor1KM;
// 		this._engine = engine;
// 		this._vehicleType = VehicleType.Car;
// 	}

// 	get modelName(): string {
// 		return this._modelName;
// 	}

// 	get year(): number {
// 		return this._year;
// 	}

// 	get fuelCapacity(): Capacity {
// 		return this._fuelCapacity;
// 	}

// 	get currentFuel(): number {
// 		return this._currentFuel;
// 	}

// 	get milage(): number {
// 		return this._milage;
// 	}

// 	get fuelFor1KM(): number {
// 		return this._fuelFor1KM;
// 	}

// 	get engine(): EngineType {
// 		return this._engine;
// 	}

// 	get vehicleType(): VehicleType {
// 		return this._vehicleType;
// 	}

// 	getInfo(): void {
// 		console.log(`${this.brandName} ${this._modelName} ${this._year} Fuel: ${this._currentFuel} milage: ${this._milage}`);
// 	}

// 	drive(km: number): number {
// 		if (this._currentFuel >= this._fuelFor1KM * km) {
// 			this._currentFuel -= this._fuelFor1KM * km;
// 			this._milage += km;
// 			return this._currentFuel;
// 		} else return -1;
// 	}
// }

// class Motorcycle implements IVehicle<number> {
// 	public brandName: string;
// 	private _modelName: string;
// 	private _year: number;
// 	private _fuelCapacity: Capacity;
// 	private _currentFuel: number;
// 	private _milage: number;
// 	private _fuelFor1KM: number;
// 	private _engine: EngineType;
// 	private _vehicleType: VehicleType;

// 	constructor(brandName: string, modelName: string, year: number, fuelCapacity: Capacity, fuelFor1KM: number, engine: EngineType) {
// 		this.brandName = brandName;
// 		this._modelName = modelName;
// 		this._year = year;
// 		this._fuelCapacity = fuelCapacity;
// 		this._currentFuel = fuelCapacity;
// 		this._milage = 0;
// 		this._fuelFor1KM = fuelFor1KM;
// 		this._engine = engine;
// 		this._vehicleType = VehicleType.MotorCycle;
// 	}

// 	get modelName(): string {
// 		return this._modelName;
// 	}

// 	get year(): number {
// 		return this._year;
// 	}

// 	get fuelCapacity(): Capacity {
// 		return this._fuelCapacity;
// 	}

// 	get currentFuel(): number {
// 		return this._currentFuel;
// 	}

// 	get milage(): number {
// 		return this._milage;
// 	}

// 	get fuelFor1KM(): number {
// 		return this._fuelFor1KM;
// 	}

// 	get engine(): EngineType {
// 		return this._engine;
// 	}

// 	get vehicleType(): VehicleType {
// 		return this._vehicleType;
// 	}

// 	getInfo(): void {
// 		console.log(`${this.brandName} ${this._modelName} ${this._year} Fuel: ${this._currentFuel} milage: ${this._milage}`);
// 	}

// 	drive(km: number): number {
// 		if (this._currentFuel >= this._fuelFor1KM * km) {
// 			this._currentFuel -= this._fuelFor1KM * km;
// 			this._milage += km;
// 			return this._currentFuel;
// 		} else return -1;
// 	}

// 	startEngine(): void {
// 		console.log(`${this.brandName} ${this._modelName} engine is now running`);
// 	}
// }

// const car = new Car("Honda", "NSX", 1999, 50, 0.4, EngineType.DOHC);
// const moto = new Motorcycle("Honda", "CBR600R", 2003, 30, 0.2, EngineType.DOHC);

// car.getInfo();
// car.drive(10);
// car.getInfo();
// moto.startEngine();
// moto.getInfo();
// moto.drive(10);
// moto.getInfo();

// const heading1 = document.getElementById("heading1");
// const heading2 = document.getElementById("heading2");

// if (heading1 && heading2) {
// 	heading1.textContent = `${car.brandName} ${car.modelName} ${car.engine}`;
// 	heading2.textContent = `${moto.brandName} ${moto.modelName} ${moto.engine}`;
// }
