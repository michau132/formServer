import { Model } from 'mongoose';
import { FormApp } from "../mongo/form.schema";
export declare class FormService {
    private formSchema;
    constructor(formSchema: Model<FormApp>);
    createFormApp(data: FormApp): Promise<FormApp>;
}
