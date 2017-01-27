import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import { Location }                 from '@angular/common';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { SortDescriptor, orderBy } from '@progress/kendo-data-query';
import { UserType } from '../user';
import { userService } from "../userService.service";

@Component ({
    selector: 'manage-users-all',
    templateUrl: 'app/manage-users-all/manage-users-all.component.html',
    providers: [userService],
    encapsulation: ViewEncapsulation.None
})


export class ManageUsersAllComponent implements OnInit{


    private vectorleapid;
    private editForm;
    private userdata;

    private testData:Array<UserType>;

    private newform:boolean = false;

    users = [];

    constructor(
        private location: Location,
        private _router: Router,
        private activatedRoute: ActivatedRoute,
        private UserService: userService
    ) {

        this.editForm = this.getnewform();
        this.activatedRoute.params.subscribe(params => {
            this.vectorleapid = params; //get the project id from url
        });

    }

    ngOnInit() {

        this.activatedRoute.params.subscribe(params => {
            this.vectorleapid = params; //get the project id from url
            this.UserService.getUsers(this.vectorleapid.id)
                .subscribe(tasks => {
                    this.testData = tasks;
                    this.loadProducts();
                });
        });
    }

    goBack(): void {
        this.location.back();
    }

    private reloadUsers(id):void {
        this.UserService.getUsers(id)
            .subscribe(tasks => {
                this.testData = tasks;
                this.loadProducts();
            });
    }

    private sort: SortDescriptor[] = [];
    private gridView: GridDataResult;

    private pageSize: number = 10;
    private skip: number = 0;

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
            data: orderBy(this.testData, this.sort),
            total: this.testData.length
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

        this.newform = true;
        this.editForm = this.getnewform();
        this.userdata.userRole = "User";
    }

    public closeConfirmDialog(): void {
        this.ConfirmDialogOpened = false;
    }

    public closeEditDialog(): void {
        this.EditDialogOpened = false;
        this.newform = false;
    }

    public addUser() {
        event.preventDefault();
        this.EditDialogOpened = false;
        this.newform = false;

        var newUser = {
            vectorleapId: this.vectorleapid.id,
            userAvatar: this.editForm.value.firstname.charAt(0).toUpperCase() + this.editForm.value.lastname.charAt(0).toUpperCase(),
            userAvatarColour : '#'+(Math.random()*0xFFFFFF<<0).toString(16),
            userFname: this.editForm.value.firstname,
            userLname: this.editForm.value.lastname,
            userEmail: this.editForm.value.email,
            userRole: this.editForm.value.role
        };

        this.UserService.createUser(newUser)
            .subscribe(()=>{
            this.reloadUsers(this.vectorleapid.id);
        });
    }

    public deleteUser(id) {
        this.UserService.deleteUser(id)
            .subscribe(data => {
                console.log(data)
            });

        this.reloadUsers(this.vectorleapid.id);

        this.ConfirmDialogOpened = false;
    }

    public updateUser(id) {

        var updatedUser = {
            _id: id,
            vectorleapId: this.vectorleapid.id,
            userAvatar: this.editForm.value.firstname.charAt(0).toUpperCase() + this.editForm.value.lastname.charAt(0).toUpperCase(),
            userAvatarColour: this.userdata.userAvatarColour,
            userFname: this.editForm.value.firstname,
            userLname: this.editForm.value.lastname,
            userEmail: this.editForm.value.email,
            userRole: this.editForm.value.role
        };

        this.UserService.updateUser(updatedUser)
            .subscribe(res => {
                if(res) {
                    this.reloadUsers(this.vectorleapid.id);
                }

            });
        this.EditDialogOpened = false;

    }

}