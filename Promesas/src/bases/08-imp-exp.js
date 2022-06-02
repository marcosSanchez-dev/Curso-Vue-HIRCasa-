import superHeroes, { owners } from "../data/heroes";

const [dc, marvel] = owners;

const getHeroById = (id) => superHeroes.find((heroes) => heroes.id === id);

const getHeroByOwner = (owner) =>
  superHeroes.filter((heroes) => heroes.owner === owner);

export { dc, marvel, getHeroById, getHeroByOwner };
