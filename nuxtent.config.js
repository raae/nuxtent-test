module.exports = {
  content: [
    [
      "projects",
      {
        permalink: "projects/:slug",
        page: "projects/_slug",
        isPost: false,
        generate: [
          // for static build
          "get",
          "getAll"
        ]
      }
    ],
    [
      "posts",
      {
        permalink: "posts/:slug",
        page: "/posts/_slug",
        isPost: false,
        generate: [
          // for static build
          "get",
          "getAll"
        ]
      }
    ]
  ]
};
