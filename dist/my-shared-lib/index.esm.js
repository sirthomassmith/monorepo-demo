import { jsx } from 'react/jsx-runtime';

var styles$1 = {};

function SimpleLabel() {
  return jsx("div", {
    className: styles$1['container'],
    children: jsx("h1", {
      className: '',
      children: "This is a SimpleLabel!"
    })
  });
}

var styles = {};

function MySharedLib() {
  return jsx("div", {
    className: styles['container'],
    children: jsx("h1", {
      children: "Welcome to MySharedLib!"
    })
  });
}

export { MySharedLib, SimpleLabel };
