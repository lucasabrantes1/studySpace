import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export class StoreValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    title: schema.string({ trim: true }, [rules.unique({ table: 'posts', column: 'title' })]),
    content: schema.string({ trim: true })
  })

  public messages = {
    // 'title.unique': 'O {{field}} precisa ser único.' - can be displayed like an error when the requisition be solicited
    require: 'Este campo é obrigatório.' //this gonna broken que rule of the require, and gonna show the message passed by the string.
  }
}
