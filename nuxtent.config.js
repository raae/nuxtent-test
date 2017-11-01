module.exports = {
  content: [
    [
      'projects',
      {
        permalink: ':slug',
        page: 'projects/_slug',
        isPost: false,
        generate: [
          // for static build
          'get',
          'getAll'
        ]
      }
    ],
    [
      'posts',
      {
        permalink: ':slug',
        page: '/posts/_slug',
        isPost: false,
        generate: [
          // for static build
          'get',
          'getAll'
        ]
      }
    ]
  ]
}
