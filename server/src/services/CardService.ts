import core_encounter from '../../../arkhamdb-json-data/pack/core/core_encounter.json';
import core from '../../../arkhamdb-json-data/pack/core/core.json';
import rcore from '../../../arkhamdb-json-data/pack/core/rcore.json';

export class CardService {
  getAllCards() {
    const union_of_all_packs = [
      ...new Set([...core, ...core_encounter, ...rcore]),
    ];
    console.log(union_of_all_packs.length);
    return union_of_all_packs; // Syntax reference: https://stackoverflow.com/questions/3629817/getting-a-union-of-two-arrays-in-javascript
  }
}
