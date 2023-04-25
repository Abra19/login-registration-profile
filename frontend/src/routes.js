const root = '';

export default {
  aboutPagePath: () => [root, ''].join('/'),
  loginPagePath: () => [root, 'login'].join('/'),
  signupPagePath: () => [root, 'register'].join('/'),
  dataPath: () => [root, 'about'].join('/'),
  notFoundPath: () => [root, '*'].join('/'),
};
