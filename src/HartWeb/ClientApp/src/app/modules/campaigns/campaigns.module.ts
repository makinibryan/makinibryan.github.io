import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../app/shared/shared.module';

import { CampaignsRoutingModule } from './campaigns-routing.module';

import { AllCampaignsComponent,
         LongonotComponent,
         ThreeDaysDianiXWasiniIslandExcursionComponent,
         MombasaThreeDaysTwoNightsBeachDazeComponent,
         CampaignMaasaiMaraThreeDaysComponent
         } from './components';


@NgModule({
  declarations: [LongonotComponent,
    ThreeDaysDianiXWasiniIslandExcursionComponent,
    AllCampaignsComponent,
    MombasaThreeDaysTwoNightsBeachDazeComponent,
    CampaignMaasaiMaraThreeDaysComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CampaignsRoutingModule
  ]
})
export class CampaignsModule { }
