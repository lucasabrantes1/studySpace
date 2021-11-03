import Route from '@ioc:Adonis/Core/Route'

Route.resource('/posts', 'PostsController')
  .apiOnly()
  .middleware({
    store: ['acl:admin'],
    update: ['acl:admin'],
    destroy: ['acl:admin']
  })
