import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from "./login.component";

@NgModule({
    imports: [
        ReactiveFormsModule,
        FormsModule
    ],
    declarations: [
        LoginComponent
    ]
})
export class LoginModule {}