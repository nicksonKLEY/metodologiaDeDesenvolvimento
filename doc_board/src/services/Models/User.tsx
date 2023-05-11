export class User {
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

export const UserParser = {
  toFirestore: (user: User) => {
    return {
      name: user.name,
      cpf: user.cpf,
      password: user.password,
      acessLevel: user.acessLevel,
    }
  },
  fromFirestore: (snapshot: { data: (arg0: any) => any }, options: any) => {
    const data = snapshot.data(options)
    return new User(data.name, data.cpf, data.password, data.acessLevel)
  },
}
