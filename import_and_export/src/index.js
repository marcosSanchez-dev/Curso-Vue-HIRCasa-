import { dc, marvel, getHeroById, getHeroByOwner } from "./bases/08-imp-exp";
import { owners } from "./data/heroes";

console.log(owners);

console.log(dc);
console.log(marvel);

console.log(getHeroById(2));

console.log(getHeroByOwner("Marvel"));
console.log(getHeroByOwner("DC"));
