import {Pump} from '../entity/Pump';

export class PumpParser {
  fromJSON(json: any): Pump {
    if (!json) {
      return null;
    }

    return new Pump(json);
  }

  manyFromJSON(json: any): Pump[] {
    if (!json || !json.length) {
      return [];
    }

    const result = [];

    json.forEach(item => {
      result.push(this.fromJSON(item));
    });

    return result;
  }

  toJSON(pump: Pump): any {
    return {
      id: pump.id,
      colors: pump.colors,
      pin: pump.pin,
      beverageId: pump.beverageId
    };
  }
}
