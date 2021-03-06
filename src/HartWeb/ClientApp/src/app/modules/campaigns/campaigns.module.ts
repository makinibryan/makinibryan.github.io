import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../app/shared/shared.module';

import { CampaignsRoutingModule } from './campaigns-routing.module';

import {
  AllCampaignsComponent,
  LongonotComponent,
  ThreeDaysDianiXWasiniIslandExcursionComponent,
  MombasaThreeDaysTwoNightsBeachDazeComponent,
  CampaignMaasaiMaraThreeDaysComponent,
  CampaignZipLiningAndTeamBuildingNgongHillsComponent,
  CampaignSamburuOverlandTruckGameDriveComponent,
  CampaignOlooluaComponent,
  CampaignNnpKitengelaComponent,
  CampaignLakeNaivashaComponent
} from './components';

@NgModule({
  declarations: [
    LongonotComponent,
    ThreeDaysDianiXWasiniIslandExcursionComponent,
    AllCampaignsComponent,
    MombasaThreeDaysTwoNightsBeachDazeComponent,
    CampaignMaasaiMaraThreeDaysComponent,
    CampaignZipLiningAndTeamBuildingNgongHillsComponent,
    CampaignSamburuOverlandTruckGameDriveComponent,
    CampaignOlooluaComponent,
    CampaignNnpKitengelaComponent,
    CampaignLakeNaivashaComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CampaignsRoutingModule
  ]
})
export class CampaignsModule { }
