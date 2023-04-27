import { NgModule } from "@angular/core";
import { NavBarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { SpinnerComponent } from "./spinner/spinner.component";

@NgModule({
    declarations: [
        NavBarComponent,
        FooterComponent,
        SpinnerComponent
    ],
    exports: [
        NavBarComponent,
        FooterComponent,
        SpinnerComponent
    ]
})
export class SharedModule {}