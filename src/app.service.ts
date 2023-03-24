import {Injectable} from "@nestjs/common"


@Injectable()
export class AppService {


  getDrivers() {
    return [{id:1 , name:'Popov'}]
  }
}