# JS Config

[![Coverage Status][codecov-image]][codecov-url]
[![Build Status][travis-image]][travis-url]
[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][npm-url]

## Usage

Common config file
```js
// config/common.js
import { set } from 'jscfg';

set({
  app: {
    id: 'appId',
    secret: 'appSecret',
  }
});
```

Environment specific file
```js
// config/production.js
import { set } from 'jscfg';

set({
  database: 'production-connection-string',
});
```

Application entry point
```js
// index.js
import config, { assert } from 'jscfg';
import './config/common';
import './config/production';
import appStart from './application';

assert({
  app: {
    id: String,
    secret: String,
  }
});

appStart(config.app);
```

Database module
```js
// index.js
import config, { assert } from 'jscfg';
import connect from 'my-db-driver';

assert({
  database: String,
});

connect(config.database);
```

## License
License [The MIT License](http://opensource.org/licenses/MIT)
Copyright (c) 2019 Ivan Zakharchanka


[npm-url]: https://www.npmjs.com/package/jscfg
[downloads-image]: https://img.shields.io/npm/dw/jscfg.svg?maxAge=43200
[npm-image]: https://img.shields.io/npm/v/jscfg.svg?maxAge=43200
[travis-url]: https://travis-ci.org/3axap4eHko/jscfg
[travis-image]: https://travis-ci.org/3axap4eHko/jscfg.svg?maxAge=43200&branch=master
[codecov-url]: https://codecov.io/gh/3axap4eHko/jscfg
[codecov-image]: https://img.shields.io/codecov/c/github/3axap4eHko/jscfg/master.svg?maxAge=43200
