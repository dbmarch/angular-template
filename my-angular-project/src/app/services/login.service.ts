import { Injectable } from "@angular/core";
import { Login } from "../models/login.model";
import { customError, CustomValidationError, FieldTree } from "@angular/forms/signals";

@Injectable({providedIn: 'root'})
export class LoginService {

    async submitReview(reviewForm: FieldTree<Login>) {
        await new Promise(resolve => setTimeout(resolve, 3000));
        const res: CustomValidationError[] = [];

        const review = reviewForm().value();

        return res.length ? res : undefined;
    }
    
}