export interface ModelParser {
  toConnection(model: any): any
  toConnection(form: any): any
  fromConnection(model: any): any
  fromConnection_(models: any): any
}
