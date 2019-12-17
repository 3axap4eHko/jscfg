import ascertain, * as validations from 'ascertain';
import merge from 'deepmerge';

const CONFIG = {};

export const set = (config: object, swallow = false) => {
  if (swallow) {
    Object.assign(CONFIG, { ...CONFIG, ...config });
  } else {
    Object.assign(CONFIG, merge(CONFIG, config));
  }
};

export const { optional, and, or, $keys, $values } = validations;

export const assert = (schema: validations.Schema) => ascertain(schema)(CONFIG);

export default CONFIG;
