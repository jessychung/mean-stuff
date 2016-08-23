
class Organization
{
    private _sso_id: string;
    private _sso_legalname: string;
    private _sso_street1: string;
    private _sso_street2: string;
    private _sso_city: string;
    private _sso_provincestate: string;
    private _sso_country: string;
    private _sso_zippostalcode: string;
    private _sso_email1: string;
    private _sso_email2: string;
    private _sso_website: string;
    private _sso_telephone1: string;

    get id(): string {
        return this._sso_id;
    }

    set id(value: string) {
        this._sso_id = value;
    }

    get legalname(): string {
        return this._sso_legalname;
    }

    set legalname(value: string) {
        this._sso_legalname = value;
    }

    get street1(): string {
        return this._sso_street1;
    }

    set street1(value: string) {
        this._sso_street1 = value;
    }

    get street2(): string {
        return this._sso_street2;
    }

    set street2(value: string) {
        this._sso_street2 = value;
    }

    get city(): string {
        return this._sso_city;
    }

    set city(value: string) {
        this._sso_city = value;
    }

    get provincestate(): string {
        return this._sso_provincestate;
    }

    set provincestate(value: string) {
        this._sso_provincestate = value;
    }

    get country(): string {
        return this._sso_country;
    }

    set country(value: string) {
        this._sso_country = value;
    }

    get zippostalcode(): string {
        return this._sso_zippostalcode;
    }

    set zippostalcode(value: string) {
        this._sso_zippostalcode = value;
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

    get website(): string {
        return this._sso_website;
    }

    set website(value: string) {
        this._sso_website = value;
    }

    get telephone1(): string {
        return this._sso_telephone1;
    }

    set telephone1(value: string) {
        this._sso_telephone1 = value;
    }
}