import { FormProps } from "react-router-dom";

export interface ModelParser{
    toConnection(model: any): any
    fromConnection(model: any): any
    fromConnection_(models: any ): any
}