export class UserModel {
  identifier: String
  name: String
  cpf: String
  password: String
  acessLevel: String

  constructor(
    identifier: String,
    name: String,
    cpf: String,
    password: String,
    acessLevel: String,
  ) {
    this.identifier = identifier
    this.name = name
    this.cpf = cpf
    this.password = password
    this.acessLevel = acessLevel
  }
}
