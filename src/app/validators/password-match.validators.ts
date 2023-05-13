import { AbstractControl } from "@angular/forms";


export class PasswordMatchValidator {
    
    static MatchPassword(abstractControl: AbstractControl){
        let senha = abstractControl.get('senha')?.value;
        let senhaConfirmacao = abstractControl.get('senhaConfirmacao')?.value;
        
        if(senha != senhaConfirmacao){
            abstractControl.get('senhaConfirmacao')?.setErrors({
                //nome do erro atribuido ao campo
                matchPassword: true
            });

        }

        return null;
    }
}