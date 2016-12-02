import { Component, ViewEncapsulation} from '@angular/core';
import { Location }                 from '@angular/common';

@Component ({
    selector: 'address-company',
    templateUrl: 'app/address-company/address-company.component.html',
    encapsulation: ViewEncapsulation.None
})

export class AddressCompanyComponent {

    constructor(
        private location: Location
    ) {}

    goBack(): void {
        this.location.back();
    }

}