import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';

// modules
import { MapModule } from '../map/map.module';
import { ProjectsRoutingModule } from './projects-routing.module';

// components
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { OverviewTabContentComponent } from './project-detail/overview/overview-tab-content.component';
import { AuthorizationsTabContentComponent } from './project-detail/authorizations/authorizations-tab-content.component';
import { ComplianceTabContentComponent } from './project-detail/compliance/compliance-tab-content.component';
import { DocumentsTabContentComponent } from './project-detail/documents/documents-tab-content.component';
import { SiteActivitiesComponent } from './site-activities/site-activities.component';
import { OrderByPipe } from '../pipes/filters/order-by.pipe';

// services
import { Api } from '../services/api';
import { ProjectService } from '../services/project.service';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    NgxPaginationModule,
    ProjectsRoutingModule,
    MapModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    ProjectListComponent,
    ProjectDetailComponent,
    OverviewTabContentComponent,
    AuthorizationsTabContentComponent,
    ComplianceTabContentComponent,
    DocumentsTabContentComponent,
    SiteActivitiesComponent,
    OrderByPipe,
  ],
  exports: [
    ProjectListComponent,
    ProjectDetailComponent
  ],
  providers: [
    Api,
    ProjectService
  ]
})
export class ProjectsModule { }
