import { Injectable } from '@angular/core';
import {Pump} from '../../../entity/Pump';
import {MockPumpRepositoryService} from './mock-pump-repository.service';
import {PumpRepositoryService} from './pump-repository.service';

@Injectable({
  providedIn: 'root'
})
export class PumpService {

  constructor(
    private pumpRepository: PumpRepositoryService
  ) { }

  findAll(): Promise<Pump[]> {
    return this.pumpRepository.findAll();
  }

  update(pump: Pump): Promise<Pump> {
    return this.pumpRepository.update(pump);
  }
}
