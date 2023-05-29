import { FormProps } from "react-router-dom";
import { ModelParser } from "../../../Models/ModelParser";
import { UserModel } from "../../../Models/UserModel";

export class UserParser implements ModelParser {
    toConnection(model: UserModel) {
      return {
        name: model.name,
        cpf: model.cpf,
        password: model.password,
        acessLevel: model.acessLevel,
      }
    }
}