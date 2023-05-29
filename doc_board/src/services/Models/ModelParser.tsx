import { FormProps } from "react-router-dom";

export interface ModelParser{
    toConnection(model: any): any
}