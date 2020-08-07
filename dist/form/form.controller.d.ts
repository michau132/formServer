import { FormApp } from '../mongo/form.schema';
import { FormService } from "./form.service";
export declare class FormController {
    private readonly formService;
    constructor(formService: FormService);
    saveForm(form: FormApp): Promise<FormApp>;
}
