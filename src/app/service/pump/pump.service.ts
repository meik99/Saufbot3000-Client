import { Injectable } from '@angular/core';
import {Pump} from '../../../entity/Pump';
import {MockPumpRepositoryService} from './mock-pump-repository.service';

@Injectable({
  providedIn: 'root'
})
export class PumpService {

  constructor(
    private pumpRepository: MockPumpRepositoryService
  ) { }

  findAll(): Promise<Pump[]> {
    return this.pumpRepository.findAll();
  }

  update(pump: Pump): Promise<Pump> {
    return this.pumpRepository.update(pump);
  }
}
