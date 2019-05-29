import ascertain from 'ascertain';
import merge from 'deepmerge';

const CONFIG = {};

export const set = (config) => {
  Object.assign(CONFIG, merge(CONFIG, config));
};

export const assert = schema => ascertain(schema, CONFIG);

export default CONFIG;
