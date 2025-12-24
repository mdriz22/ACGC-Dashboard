<template>
  <!-- Tabs Section -->
  <div class="bg-white flex flex-nowrap gap-2 justify-center overflow-x-auto items-center">

     <button @click="activeTab= 'Organisation Chart'" class="font-semibold w-full text-sm text-center h-8 pt-0.5 px-2"
      :class="{'border-b-2 border-b-[#fba800] bg-[#fefdec]': activeTab === 'Organisation Chart' }">
      Organisation Chart
    </button>

    <p>|</p>

    <button @click="activeTab='Maintenance'" class="font-semibold w-full text-sm text-center h-8 pt-0.5 px-2"
      :class="{'border-b-2 border-b-[#fba800] bg-[#fefdec]': activeTab === 'Maintenance' }">
      Maintenance
    </button>
    <p>|</p>
    <button @click="activeTab='HR'" class="font-semibold w-full text-sm text-center h-8 pt-0.5 px-2"
      :class="{'border-b-2 border-b-[#fba800] bg-[#fefdec]': activeTab === 'HR' }">
      HR
    </button>
    <p>|</p>

    <button @click="activeTab='safety'" class="font-semibold w-full text-sm text-center h-8 pt-0.5 px-2"
      :class="{'border-b-2 border-b-[#fba800] bg-[#fefdec]': activeTab === 'safety' }">
      SHE
    </button>

    <p>|</p>

    <button @click="activeTab= 'Operations'" class="font-semibold w-full text-sm text-center h-8 pt-0.5 px-2"
      :class="{'border-b-2 border-b-[#fba800] bg-[#fefdec]': activeTab === 'Operations' }">
      Operations
    </button>

    

   
    
  </div>

  <!-- Charts Section -->
  <div class="mt-4 bg-white">
    
    
    <!-- Maintenance -->
    <div v-if="activeTab==='Maintenance'" class="bg-white pt-5  w-full">

       <div class=" bg-white ml-[10px] pb-[20px] w-full  flex gap-10 flex-wrap">

                <CountCard 
                    :countCardData="{
                        count: overallSchvsAccData.completion_rate,
                        title: 'PM Completion Rate',
                        data: overallSchvsAccData.per
                    }"
                    /> 

                <CountCard 
                    :countCardData="{
                        count: overallSchvsAccData.totals.Planned,
                        title: 'PM Planned Total',
                        data: overallSchvsAccData.per
                    }"
                    />

                <CountCard 
                    :countCardData="{
                        count: overallSchvsAccData.totals.Completed,
                        title: 'PM Completed Total',
                        data: overallSchvsAccData.per
                    }"
                    /> 

                <!-- <CountCard 
                    :countCardData="{
                        count: overallSchvsAccData.completion_rate,
                        title: 'PM Outstanding Total',
                        data: overallSchvsAccData.per
                    }"
                    />    -->


                    <CountCard 
                    :countCardData="{
                        count: cmOverallData.completion_rate,
                        title: 'CM Completion Rate',
                        data: cmOverallData.per
                    }"
                    /> 

                <CountCard 
                    :countCardData="{
                        count: cmOverallData.totals.scheduled,
                        title: 'CM Scheduled Total',
                        data: cmOverallData.scheduled
                    }"
                    />

                <CountCard 
                    :countCardData="{
                        count: cmOverallData.totals.accomplished,
                        title: 'CM Accomplished Total',
                        data: cmOverallData.accomplished
                    }"
                    />

                    <CountCard 
                    :countCardData="{
                        count: wrOverallData.completion_rate,
                        title: 'WR Completion Rate',
                        data: cmOverallData.per
                    }"
                    /> 

                <CountCard 
                    :countCardData="{
                        count: wrOverallData.total.scheduled,
                        title: 'WR Scheduled Total',
                        data: cmOverallData.scheduled
                    }"
                    />

                <CountCard 
                    :countCardData="{
                        count: wrOverallData.total.accomplished,
                        title: 'WR Accomplished Total',
                        data: cmOverallData.accomplished
                    }"
                    />


                <CountCard 
                :countCardData="{
                count: overallOccupancy,
                title: 'Room Occupancy - Building wise',
                data: roomOccupancyTypeData.map(item => item.occupancy)
                }"
            />  
               
                <CountCard 
                :countCardData="{
                count: overallOccupancy,
                title: 'Room Occupancy - Building Type wise',
                data: roomOccupancyTypeData.map(item => item.occupancy)
                }"
            />     





            </div>
            
      
      
    </div>
  
    <!-- HR -->

    <div v-if="activeTab==='HR'" class="bg-white pt-5  w-full">

      <div class="ml-[10px] pb-[20px] w-full  flex gap-10">

                <CountCard 
                    :countCardData="{
                        count: manpowerDetailsData.totals.indicative,
                        title: 'ManPower Indicative Total',
                        data: manpowerDetailsData.series[0].data
                    }"
                    />

                <CountCard 
                :countCardData="{
                    count: manpowerDetailsData.totals.actual,
                    title: 'ManPower Actual Total',
                    data: manpowerDetailsData.series[1].data
                }"
                />    

            </div>
            


    </div>

   <!-- Safety  -->
  <div v-if="activeTab==='safety'" class="bg-white pt-5  w-full">

     <div class="ml-[10px] pb-[20px] w-full  flex gap-10">

                <CountCard 
                    :countCardData="{
                        count: safetyEnvironmentData.totals.applicable,
                        title: 'Applicable',
                        data: safetyEnvironmentData.applicable
                    }"
                    />

                <CountCard 
                :countCardData="{
                    count: safetyEnvironmentData.totals.actual,
                    title: 'Actual',
                    data: safetyEnvironmentData.actual
                }"
                /> 

                <CountCard 
                :countCardData="{
                    count: safetyEnvironmentData.totals.percentage,
                    title: 'Overall Percentage',
                    data: safetyEnvironmentData.percentage
                }"
                />    

            </div>


  </div>

  <!-- Operations -->
   <div v-if="activeTab==='Operations'" class="bg-white pt-5  w-full">

    <div class="ml-[10px] pb-[20px] w-full  flex flex-wrap gap-10">

                <CountCard 
                    :countCardData="{
                        count: gasolineConsumption.totals.gasoline91,
                        title: 'GASOLINE 91 Total',
                        data: gasolineConsumption.series[0].data
                    }"
                    />

                <CountCard 
                :countCardData="{
                    count: gasolineConsumption.totals.diesel,
                    title: 'Diesel Total',
                    data: gasolineConsumption.series[1].data
                }"
                />    

                <CountCard 
                    :countCardData="{
                        count: waterConsumption.totals.raw,
                        title: 'RAW Water Total',
                        data: waterConsumption.series[0].data
                    }"
                    />

                <CountCard 
                :countCardData="{
                    count: waterConsumption.totals.sweet,
                    title: 'Sweet Water Total',
                    data: waterConsumption.series[1].data
                }"
                />   

                  <CountCard 
                    :countCardData="{
                        count: garbageCollectionData.totals,
                        title: 'Garbage Collection Total',
                        data: garbageCollectionData.capacities
                    }"
                    />

                     <CountCard 
                    :countCardData="{
                        count: sewageWaterData.totals,
                        title: 'Sewage Water Total (In Ltrs)',
                        data: sewageWaterData.capacities
                    }"
                    />

            </div>


   </div>

  <!-- Organisation Chart  -->

  <div v-if="activeTab==='Organisation Chart'" class="bg-white pt-5  w-full">

     <!-- ORGANISATION CHART - SITE MANAGEMENT -->

        <div>
            <div>
                <h1 class="text-3xl font-semibold text-center mb-8 mt-5 pt-5">Organisation Chart - <span class="bg-gradient-to-t from-[#fd2b94] via-[#fba800] to-[#fd2b94] bg-clip-text text-transparent">Site Management</span></h1>
            </div>


            <div >
                <!-- <div>
                    <FlowChart :chartData="OrganisationChartData"  />
                </div> -->
                 
               <div class="p-5">
                    <img src="../assets/icons/Artboard 18-100.jpg"  />

               </div> 
               
                
            </div>

        </div>

  </div>

  <div class="w-full" style="color:#666666; text-align:end;"><p>Powered by <b style='color:#211a4b;'>TEAMPRO</b></p></div>


  </div>
</template>

<script>
import PercentageCard from '@/components/PercentageCard.vue';
import MultiSeriesChart from '@/components/chart/MultiSeriesChart.vue';
import CountCard from '@/components/CountCard.vue';
import FlowChart from '@/components/chart/FlowChart.vue';


import overallData from '@/data/management/overall.js';
import maintenanceData from '@/data/management/maintenance.js';
import overallSchvsAccData from '@/data/maintenance/overall_scheduled_vs_accomplished.js';
import cmOverallData from '@/data/maintenance/cm_overall_scheduled_accomplished.js';
import wrOverallData from '@/data/maintenance/wr_overall_schedule.js';
import roomOccupancyTypeData from '@/data/maintenance/room_occupancy_typewise.js';
import roomOccupancyData from '@/data/maintenance/room_occupancy.js';
import manpowerDetailsData from '@/data/maintenance/manpower_details.js';
import safetyEnvironmentData from '@/data/maintenance/safety_and_environment.js';
import sewageWaterData from '@/data/maintenance/sewage_water_consumption.js';
import garbageCollectionData from '@/data/maintenance/garbage_collection.js';
import gasolineConsumption from '@/data/maintenance/gasoline_consumption.js';
 import waterConsumption from '@/data/maintenance/water_consumption.js';
 import OrganisationChartData from '@/data/maintenance/organisation_chart.js';

export default {
  name: 'Management',
  components: { PercentageCard, MultiSeriesChart, CountCard,FlowChart },
         computed: {
  overallOccupancy() {
    const totalOccupied = this.roomOccupancyTypeData.reduce((sum, item) => sum + item.occupied, 0);
    const totalRooms = this.roomOccupancyTypeData.reduce((sum, item) => sum + item.total, 0);
    return ((totalOccupied / totalRooms) * 100).toFixed(0) + ' %';
  }
},
  data() {
    return {
      activeTab: 'Organisation Chart',
      overallData,
      maintenanceData,
      overallSchvsAccData,
      cmOverallData,
      wrOverallData,
      roomOccupancyData,
      roomOccupancyTypeData,
      manpowerDetailsData,
      safetyEnvironmentData,
      gasolineConsumption,
      sewageWaterData,
      garbageCollectionData,
      waterConsumption,
      OrganisationChartData
    };
  }
};
</script>
