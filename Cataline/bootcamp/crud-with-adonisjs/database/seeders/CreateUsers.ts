import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'
export default class CreateUsersSeeder extends BaseSeeder {
  public async run() {
    await User.createMany([
      {
        name: 'Lucas Abrantes',
        email: 'admin@abrantescorp.com',
        password: 'secret',
        role: 'admin'
      },
      {
        name: 'João da silva ',
        email: 'normal@abrantescorp.com',
        password: 'secret',
        role: 'normal'
      }
    ])
  }
}
