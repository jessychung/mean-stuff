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

    private newform:boolean = false;

    constructor(
        private location: Location,
        private _router: Router
    ) {
        this.loadProducts();
        this.editForm = this.getnewform();
    }

    goBack(): void {
        this.location.back();
    }

    private sort: SortDescriptor[] = [];
    private gridView: GridDataResult;

    private pageSize: number = 2;
    private skip: number = 0;


    private gridData: Array<UserType> = [
        {
            "userAvatar": "JS",
            "userAvatarColour" : "#048586",
            "userFname": "John",
            "userLname": "Smith",
            "userEmail": "johns@thentia.com",
            "userRole": "Admin"
        },
        {
            "userAvatar": "BE",
            "userAvatarColour" : "#ad2c57",
            "userFname": "Beth",
            "userLname": "Ericksen",
            "userEmail": "bethe@thentia.com",
            "userRole": "User"
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

    public rolelist: Array<string> = [
        "Admin", "User"
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

    public getnewform():any {
        return new FormGroup({
            'firstname': new FormControl("", Validators.required),
            'lastname': new FormControl("", Validators.required),
            'email': new FormControl("", Validators.required),
            'role': new FormControl("", Validators.required)
        })
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

    public openAddNew():void {
        this.EditDialogOpened = true;
        this.userdata = new UserType();
        console.log(this.userdata);
        this.newform = true;
        this.editForm = this.getnewform();
    }

    public closeConfirmDialog(): void {
        this.ConfirmDialogOpened = false;
    }

    public closeEditDialog(): void {
        this.EditDialogOpened = false;
        this.newform = false;
    }

}