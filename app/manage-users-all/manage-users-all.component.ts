import { Component, ViewEncapsulation} from '@angular/core';
import { Location }                 from '@angular/common';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { SortDescriptor, orderBy } from '@progress/kendo-data-query';

import { UserType } from '../user';

@Component ({
    selector: 'manage-users-all',
    templateUrl: 'app/manage-users-all/manage-users-all.component.html',
    encapsulation: ViewEncapsulation.None
})

export class ManageUsersAllComponent {

    private editForm;

    private userdata;

    public rolelist: Array<string> = [
       "Admin","User"
    ];

    constructor(
        private location: Location,
        private _router: Router
    ) {
        this.loadProducts();
        this.editForm = new FormGroup({
            'firstname': new FormControl("", Validators.required),
            'lastname': new FormControl("", Validators.required),
            'email': new FormControl("", Validators.required),
            'role': new FormControl("", Validators.required)
        })
    }

    goBack(): void {
        this.location.back();
    }

    private sort: SortDescriptor[] = [];
    private gridView: GridDataResult;

    private pageSize: number = 2;
    private skip: number = 0;

    public genders: Array<{ text: string, value: number }> = [
        { text: "Male", value: 1 },
        { text: "Female", value: 2 }
    ];

    private gridData: Array<UserType> = [
        {
            "userAvatar": "JS",
            "userAvatarColour" : "#048586",
            "userFname": "John",
            "userLname": "Smith",
            "userEmail": "johns@thentia.com",
            "userRole": 1
        },
        {
            "userAvatar": "BE",
            "userAvatarColour" : "#ad2c57",
            "userFname": "Beth",
            "userLname": "Ericksen",
            "userEmail": "bethe@thentia.com",
            "userRole": 2
        },
        {
            "userAvatar": "WP",
            "userAvatarColour" : "#185ba6",
            "userFname": "William",
            "userLname": "Powell",
            "userEmail": "willp@thentia.com",
            "userRole": "User"
        }
    ];

    protected sortChange(sort: SortDescriptor[]): void {
        this.sort = sort;
        this.loadProducts();
    }

    protected pageChange(event: PageChangeEvent): void {
        this.skip = event.skip;
        this.loadProducts();
    }

    private loadProducts(): void {
        this.gridView = {
            data: orderBy(this.gridData.slice(this.skip, this.skip + this.pageSize), this.sort),
            total: this.gridData.length
        };
    }

    // init dialog hidden
    public ConfirmDialogOpened: boolean = false;
    public EditDialogOpened: boolean = false;

    public openConfirmDialog(data): void {
        this.ConfirmDialogOpened = true;
        this.userdata = data;
    }

    public openEditDialog(data): void {
        this.EditDialogOpened = true;
        this.userdata = data;
    }

    public closeConfirmDialog(): void {
        this.ConfirmDialogOpened = false;
    }

    public closeEditDialog(): void {
        this.EditDialogOpened = false;
    }

}