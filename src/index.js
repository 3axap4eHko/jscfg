import ascertain from 'ascertain';
import merge from 'deepmerge';

const CONFIG = {};

export const set = (config, swallow = false) => {
  if (swallow) {
    Object.assign(CONFIG, { ...CONFIG, ...config });
  } else {
    Object.assign(CONFIG, merge(CONFIG, config));
  }
};

export const assert = schema => ascertain(schema, CONFIG);

export default CONFIG;
