// let nname: string = "123";
// let age: number = 123;
// console.log(nname);
// console.log(age);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.start = function () {
        console.log("".concat(this.model, " engine is now running"));
    };
    Car.prototype.printCarDetails = function () {
        console.log("".concat(this.model, " ").concat(this.year, " "));
    };
    return Car;
}());
var Bus = /** @class */ (function (_super) {
    __extends(Bus, _super);
    function Bus(make, model, year) {
        var _this = _super.call(this, make, model, year) || this;
        _this.make = make;
        _this.model = model;
        _this.year = year;
        return _this;
    }
    return Bus;
}(Car));
var nus = new Bus("asd", "Honda", 1999);
var RoadType;
(function (RoadType) {
    RoadType[RoadType["Asphalt"] = 0] = "Asphalt";
    RoadType[RoadType["Gravel"] = 1] = "Gravel";
    RoadType[RoadType["Dirt"] = 2] = "Dirt";
})(RoadType || (RoadType = {}));
var SUV = /** @class */ (function (_super) {
    __extends(SUV, _super);
    function SUV(make, model, year, offroadAbility) {
        var _this = _super.call(this, make, model, year) || this;
        _this.make = make;
        _this.model = model;
        _this.year = year;
        _this.offroadAbility = offroadAbility;
        return _this;
    }
    SUV.prototype.drive = function (RoadType) {
        if (this.offroadAbility >= RoadType)
            return true;
        else
            return false;
    };
    return SUV;
}(Car));
var suv = new SUV("asd", "Toyota", 1999, 3.0);
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
