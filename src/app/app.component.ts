import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Customer } from './model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    public view: Customer[] = [];

    public allowCustom: boolean = true;

    constructor(private formBuilder: FormBuilder) {
    }

    public addHandler({ sender }) {
        let customer = new Customer();
        console.log('customer: ', customer);
        let form = this.createFormGroup(customer);
        sender.addRow(form);
    }


    public saveHandler({ sender, rowIndex, dataItem, isNew, formGroup }) {

        if (isNew) {
            console.log('dataItem: ', dataItem);
            this.view.push(dataItem);
            sender.closeRow(rowIndex);
        }
        else {

            this.view[this.view.indexOf(dataItem)] = formGroup.value;
            sender.closeRow(rowIndex);
        }
    }

    public editHandler({ sender, dataItem, rowIndex }) {
        console.log('dataItem: ', dataItem);

        let form = this.createFormGroup(dataItem);
        sender.editRow(rowIndex, form);
    }

    public cancelHandler({ sender, rowIndex }) {
        sender.closeRow(rowIndex);
    }

    public removeHandler({ dataItem }) {

        console.log('dataItem: ', dataItem);
        this.view.splice(dataItem, 1);
    }


    public createFormGroup(dataItem: any): FormGroup {
        return this.formBuilder.group({

            'CustomerName': [dataItem.CustomerName, Validators.required],
            'CustomerAddress': [dataItem.CustomerAddress, Validators.required],
            'CustomerDOB': [dataItem.CustomerDOB, Validators.required],
            'CustomerDepartment': [dataItem.CustomerDepartment, Validators.required],

        });
    }

    public ngOnInit(): void {

    }
}