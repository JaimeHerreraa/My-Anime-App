import { NgModule } from "@angular/core";
import { NavBarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";

@NgModule({
    declarations: [
        NavBarComponent,
        FooterComponent
    ],
    exports: [
        NavBarComponent,
        FooterComponent
    ]
})
export class SharedModule {}