SystemJS.config({
  paths: {
    "npm:": "jspm_packages/npm/",
    "systemjs-istanbul-test/": "src/"
  },
  browserConfig: {
    "baseURL": "/"
  },
  devConfig: {
    "map": {
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.15"
    }
  },
  transpiler: "plugin-babel",
  packages: {
    "systemjs-istanbul-test": {
      "main": "systemjs-istanbul-test.js",
      "meta": {
        "*.js": {
          "loader": "plugin-babel"
        }
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json"
  ],
  map: {},
  packages: {}
});
