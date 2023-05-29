import { FormProps } from "react-router-dom"
import { ModelParser } from "./ModelParser"

export class UserModel{
  name: String
  cpf: String
  password: String
  acessLevel: String

  constructor(name: String, cpf: String, password: String, acessLevel: String) {
    this.name = name
    this.cpf = cpf
    this.password = password
    this.acessLevel = acessLevel
  }
}
