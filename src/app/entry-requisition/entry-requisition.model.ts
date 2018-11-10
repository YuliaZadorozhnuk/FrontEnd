export class EntryRequisition {
  id: number;
  idUser: number;
  customer: string;
  person: string;
  phone: number;
  email: string;
  notes: string;
  idCityZ: number;
  idCityR: number;
  dateZ: number;
  dateR: number;
  cargo: string;
  weight: number;
  volume: number;
  pto: string;
  idSource: number;
  cityByIdCityR: CityR;
  cityByIdCityZ: CityZ;
  sourceByIdSource: Source;
  userByIdUser: User;

  initEntryRequisition(response) {
    this.id = response.id;
    this.idUser = response.idUser;
    this.customer = response.customer;
    this.person = response.person;
    this.phone = response.phone;
    this.email = response.email;
    this.notes = response.notes;
    this.idCityZ = response.idCityZ;
    this.idCityR = response.idCityR;
    this.dateZ = response.dateZ;
    this.dateR = response.dateR;
    this.cargo = response.cargo;
    this.weight = response.weight;
    this.volume = response.volume;
    this.pto = response.pto;
    this.idSource = response.idSource;
    this.cityByIdCityZ = response.cityByIdCityZ;
    this.cityByIdCityR = response.cityByIdCityR;
    this.sourceByIdSource = response.sourceByIdSource;
    this.userByIdUser = response.userByIdUser;
  }
}

export class Requisition {
  id: number;
  idDistance: number;
  idDriver: number;
  idEntryRequisition: number;
  cost: number;
  status: number;
  distanceByIdDistance: Distance;
  driverByIdDriver: Driver;
  entryRequisitionByIdEntryRequisition: EntryRequisition;

  constructor(id, idDistance, idDriver, idEntryRequisition, cost, status, distanceByIdDistance,
              driverByIdDriver, entryRequisitionByIdEntryRequisition: EntryRequisition) {
    this.id = id;
    this.idDistance = idDistance;
    this.idDriver = idDriver;
    this.idEntryRequisition = idEntryRequisition;
    this.cost = cost;
    this.status = status;
    this.distanceByIdDistance = distanceByIdDistance;
    this.driverByIdDriver = driverByIdDriver;
    this.entryRequisitionByIdEntryRequisition = entryRequisitionByIdEntryRequisition;
  }
}

export class Driver {
  id: number;
  fio: string;
  rate: number;
  status: number;

  constructor(id, fio, rate, status) {
    this.id = id;
    this.fio = fio;
    this.rate = rate;
    this.status = status;
  }
}

export class Distance {
  id: number;
  cityFromCityTo: string;
  distance: number;

  constructor(id, cityToCityFrom, distance) {
    this.id = id;
    this.cityFromCityTo = cityToCityFrom;
    this.distance = distance;
  }
}

export class User {
  id: number;
  login: string;
  name: string;
  password: string;
  role: number;
  status: number;

  constructor(id, login, name, password, role, status) {
    this.id = id;
    this.login = login;
    this.name = name;
    this.password = password;
    this.role = role;
    this.status = status;
  }
}

export class CityZ {
  id: number;
  city: string;

  constructor(id, city) {
    this.id = id;
    this.city = city;
  }
}

export class CityR {
  id: number;
  city: string;

  constructor(id, city) {
    this.id = id;
    this.city = city;
  }
}

export class Source {
  id: number;
  source: string;

  constructor(id, source) {
    this.id = id;
    this.source = source;
  }

}
