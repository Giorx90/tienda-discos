import { NgModule } from '@angular/core';
import { FilterPipe } from './pipes/filter.pipe';


@NgModule({
    imports: [],
    declarations: [
        FilterPipe
    ],
    exports: [
        FilterPipe
    ]
})
export class AppPipesModule { }