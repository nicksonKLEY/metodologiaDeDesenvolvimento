export class UserModel {
  id: String
  name: String
  cpf: String
  password: String
  acessLevel: String

  constructor(
    id: String,
    name: String,
    cpf: String,
    password: String,
    acessLevel: String,
  ) {
    this.id = id
    this.name = name
    this.cpf = cpf
    this.password = password
    this.acessLevel = acessLevel
  }
}
