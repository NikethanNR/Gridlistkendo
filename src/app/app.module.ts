import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { IntlModule } from '@progress/kendo-angular-intl';

import { GridModule } from '@progress/kendo-angular-grid';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { DialogModule, DialogsModule } from '@progress/kendo-angular-dialog';

import { AppComponent } from './app.component';
import { EditService } from './edit.service';
@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FormsModule,
        GridModule,
        DropDownsModule,
        DialogModule,
        HttpClientModule,
        HttpClientJsonpModule,
        DialogsModule,
        DateInputsModule,
        IntlModule
    ],
    bootstrap: [AppComponent],
    providers: [EditService]
})
export class AppModule {}

