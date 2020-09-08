import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavModule } from './nav/nav.module';
import { InteractionsModule } from './interactions/interactions.module';
import { ElementsModule } from './elements/elements.module';
import { ChartsModule } from './charts/charts.module';
import { ListsModule } from './lists/lists.module';
import { GridsModule } from './grids/grids.module';
import { DialogsModule } from './dialogs/dialogs.module';
import { TablesModule } from './tables/tables.module';
import { SharedModule } from '../shared/shared.module';
import { FiltersModule } from './filters/filters.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    NavModule,
    InteractionsModule,
    ElementsModule,
    ChartsModule,
    ListsModule,
    GridsModule,
    DialogsModule,
    TablesModule,
    FiltersModule
  ]
})
export class ComponentsModule { }
