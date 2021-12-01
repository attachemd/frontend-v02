import {NgModule} from "@angular/core";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatNativeDateModule} from "@angular/material/core";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatListModule} from "@angular/material/list";
import {MatTabsModule} from "@angular/material/tabs";
import {MatCardModule} from "@angular/material/card";
import {MatSelectModule} from "@angular/material/select";

@NgModule({
  imports: [
      MatButtonModule,
      MatIconModule,
      MatInputModule,
      MatFormFieldModule,
      FlexLayoutModule,
      MatNativeDateModule,
      MatDatepickerModule,
      MatCheckboxModule,
      MatSidenavModule,
      MatToolbarModule,
      MatListModule,
      MatTabsModule,
      MatCardModule,
      MatSelectModule
  ],
  exports: [
      MatButtonModule,
      MatIconModule,
      MatInputModule,
      MatFormFieldModule,
      FlexLayoutModule,
      MatNativeDateModule,
      MatDatepickerModule,
      MatCheckboxModule,
      MatSidenavModule,
      MatToolbarModule,
      MatListModule,
      MatTabsModule,
      MatCardModule,
      MatSelectModule
  ]
})
export class MaterialModule {

}
