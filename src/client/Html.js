// DO NOT USE JSON.Stringify -- vulnerable to cors attacks. Use serialize!
// Src: https://medium.com/styled-components/the-simple-guide-to-server-side-rendering-react-with-styled-components-d31c6b2b8fbf
import serialize from "serialize-javascript";
import {Helmet} from "react-helmet";

      // <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
      // <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
// Possible memory leak. See https://github.com/nfl/react-helmet
const helmet = Helmet.renderStatic();

// {title: String}
// {meta: Array[{name: String, content: String}]}
// {body: Object}
// Possible ConsoleWarning: https://github.com/nozzle/react-static/issues/144
const Html = (body, initialData) => `
  <!DOCTYPE html>
  <html>
    <head>
      <script async src="/bundle.js"></script>
      ${helmet.title.toString()}
      ${helmet.meta.toString()}
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
      <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      <link rel="stylesheet" href="/css/main.css">
      <script>window.__initialData__ = ${serialize(initialData)}</script>
    </head>
    <body>
      <div id="root">${body}</div>
    </body>
  </html>
`;

export default Html;

// Used to replace Html(markup, initialData), generate html without import.
// var bob = `
//     <!DOCTYPE html>
//     <head>
//       ${helmet.title.toString()}
//       ${helmet.meta.toString()}
//       <link rel="stylesheet" href="/css/main.css">
//       <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
// <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
//       <script>window.__initialData__ = ${serialize(initialData)}</script>
//     </head>
//     <body>
//       <div id="root">${markup}</div>
//       <script src="/bundle.js"></script>
//     </body>
//     </html>
//   `;