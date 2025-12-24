<template>
  <!-- Tabs -->
  <div class="bg-white flex flex-nowrap gap-2 justify-center overflow-x-auto items-center">
    <button @click="activeTab='Energy'" class="font-semibold w-full text-sm text-center h-8 pt-1 px-2"
      :class="{'border-b-2 border-b-[#fba800] bg-[#fefdec]': activeTab === 'Energy' }">
      Energy
    </button @click="activeTab">
    <p>|</p>
    <button @click="activeTab='Water'" class="font-semibold w-full text-sm text-center h-8 pt-1 px-2"
      :class="{'border-b-2 border-b-[#fba800] bg-[#fefdec]': activeTab === 'Water' }">
      Water
    </button @click="activeTab">
    <p>|</p>
    <button @click="activeTab='Waste'" class="font-semibold w-full text-sm text-center h-8 pt-1 px-2"
      :class="{'border-b-2 border-b-[#fba800] bg-[#fefdec]': activeTab === 'Waste' }">
      Waste
    </button @click="activeTab">
  </div>
  <!-- Charts -->
<div class="mt-4 bg-white">

  <!-- Energy -->

  <div v-if="activeTab =='Energy'" style="background-color: white;" class="pb-[5px] " >

    <!-- Gasoline Consumption -->


        
         <div>
            <div>
                <h1 class="text-3xl font-semibold text-center  mb-3 mt-5 pt-5">Gasoline Consumption - <span class="bg-gradient-to-t from-[#fd2b94] via-[#fba800] to-[#fd2b94] bg-clip-text text-transparent">Daywise</span></h1>
               
                
                
                
            </div>


             <div class="ml-[10px] my-[20px] w-full h-[100px] flex gap-10">

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

            </div>



            <div class="flex gap-5 justify-center">
                <div  class="flex flex-col gap-4  w-full">
                    <StackedAreaChart :chartData="gasolineConsumption" title="" />
                </div>
                
            </div>
        </div>

  </div>


  <!-- Water -->

  <div v-if="activeTab =='Water'" style="background-color: white;" class="pb-[5px]" >



     <!-- Water Consumption	 -->

          <div>
            <div>
                <h1 class="text-3xl font-semibold text-center mb-3 mt-5 pt-5">Water Consumption - <span class="bg-gradient-to-t from-[#fd2b94] via-[#fba800] to-[#fd2b94] bg-clip-text text-transparent">Daywise</span> </h1>
                
                
            </div>

            <div class="ml-[10px] my-[20px] w-full h-[100px] flex gap-10">

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

            </div>


            <div class="flex gap-5 justify-center">
                <div  class="flex flex-col gap-4 w-full">
                    <DashedLineChart :chartData="waterConsumption" title="" />
                </div>
                
            </div>
        </div>



  </div>

  <!-- Waste -->

  <div v-if="activeTab =='Waste'" style="background-color: white;" class="pb-[5px]" >


    <!-- Garbage Collection -->

         <div>
            <div>
                <h1 class="text-3xl font-semibold text-center mb-3 mt-5 pt-5">Garbage Collection - <span class="bg-gradient-to-t from-[#fd2b94] via-[#fba800] to-[#fd2b94] bg-clip-text text-transparent">Daywise</span></h1>
                
                
                
            </div>


             <div class="ml-[10px] my-[20px] w-full h-[100px] flex gap-10">

                <CountCard 
                    :countCardData="{
                        count: garbageCollectionData.totals,
                        title: 'Garbage Collection Total',
                        data: garbageCollectionData.capacities
                    }"
                    />
  

            </div>




            <div class="flex gap-5 justify-center">
                <div  class="flex flex-col gap-4  w-full">
                    <LineTimeSeriesChart :chartData="garbageCollectionData" title="" />
                </div>
                
            </div>
        </div>





      <!-- Sewage Water Consumption-->

         <div>
            <div>
                <h1 class="text-3xl font-semibold text-center mb-3 mt-5">Sewage Water Consumption - <span class="bg-gradient-to-t from-[#fd2b94] via-[#fba800] to-[#fd2b94] bg-clip-text text-transparent">Daywise</span></h1>
                
                
                
            </div>


             <div class="ml-[10px] my-[20px] w-full h-[100px] flex gap-10">

                <CountCard 
                    :countCardData="{
                        count: sewageWaterData.totals,
                        title: 'Sewage Water Total (In Ltrs)',
                        data: sewageWaterData.capacities
                    }"
                    />
  

            </div>

            <div class="flex gap-5 justify-center">
                <div  class="flex flex-col gap-4  w-full">
                    <StepLineChart :chartData="sewageWaterData" title="" />
                </div>
                
            </div>
        </div>



  </div>

<div class="w-full" style="color:#666666; text-align:end;"><p>Powered by <b style='color:#211a4b;'>TEAMPRO</b></p></div>

</div>
   
</template>

<script>
import ApexCharts from 'apexcharts';


import StepLineChart from '@/components/chart/StepLineChart.vue';
import LineTimeSeriesChart from '@/components/chart/LineTimeSeriesChart.vue';
import CountCard from '@/components/CountCard.vue';
import StackedAreaChart from '@/components/chart/StackedAreaChart.vue';
import DashedLineChart from '@/components/chart/DashedLineChart.vue';



import sewageWaterData from '@/data/maintenance/sewage_water_consumption.js';
import garbageCollectionData from '@/data/maintenance/garbage_collection.js';
import gasolineConsumption from '@/data/maintenance/gasoline_consumption.js';
 import waterConsumption from '@/data/maintenance/water_consumption.js';

export default {
  data() {
    return {
      activeTab: 'Energy',
      sewageWaterData,
      garbageCollectionData,
      gasolineConsumption,
      waterConsumption
    }

  },
   components: {

    StepLineChart,
    LineTimeSeriesChart,
    CountCard,
    StackedAreaChart,
    DashedLineChart


   }
};
</script>
