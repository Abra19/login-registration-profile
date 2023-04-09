const root = '';

export default {
  aboutPagePath: () => [root, ''].join('/'),
  loginPagePath: () => [root, 'login'].join('/'),
  registerPagePath: () => [root, 'register'].join('/'),
  notFoundPath: () => [root, '*'].join('/'),
};
