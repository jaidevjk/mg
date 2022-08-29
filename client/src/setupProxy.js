const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    [
      "/user",
      "/products",
      "/category",
      "/subscribe",
      "/enquiry",
      "/testimonial",
      "/article",
      "/welcome",
      "/visitor",
      "/search",
      "/career",
      "/vacancy",
      "/contacts",
      "/gallery",
      "/upload",
    ],
    createProxyMiddleware({
      target: "http://localhost:5000",
    })
  );
};
