
///<reference path="Organization.ts"/>

class User
{
    private _sso_id: string;
    private _sso_firstname: string;
    private _sso_lastname: string;
    private _sso_email1: string;
    private _sso_email2: string;
    private _sso_telephone1: string;
    private _sso_mobile1: string;
    private _sso_organizations: Array<Organization>;

    get id(): string {
        return this._sso_id;
    }

    set id(value: string) {
        this._sso_id = value;
    }

    get firstname(): string {
        return this._sso_firstname;
    }

    set firstname(value: string) {
        this._sso_firstname = value;
    }

    get lastname(): string {
        return this._sso_lastname;
    }

    set lastname(value: string) {
        this._sso_lastname = value;
    }

    get email1(): string {
        return this._sso_email1;
    }

    set email1(value: string) {
        this._sso_email1 = value;
    }

    get email2(): string {
        return this._sso_email2;
    }

    set email2(value: string) {
        this._sso_email2 = value;
    }

    get telephone1(): string {
        return this._sso_telephone1;
    }

    set telephone1(value: string) {
        this._sso_telephone1 = value;
    }

    get mobile1(): string {
        return this._sso_mobile1;
    }

    set mobile1(value: string) {
        this._sso_mobile1 = value;
    }

    get organizations(): Array<Organization> {
        return this._sso_organizations;
    }

    set organizations(value: Array<Organization>) {
        this._sso_organizations = value;
    }
}