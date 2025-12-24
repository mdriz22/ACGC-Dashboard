<template>
  <!-- Tabs -->
  <div class="bg-white flex flex-nowrap gap-2 justify-center overflow-x-auto items-center">

    <button @click="activeTab='Saudization'" class="font-semibold w-full text-sm text-center h-8 pt-1 px-2"
      :class="{'border-b-2 border-b-[#fba800] bg-[#fefdec]': activeTab === 'Saudization' }">
      Saudization
    </button @click="activeTab">

     <p>|</p>

    <button @click="activeTab='Management KPI'" class="font-semibold w-full text-sm text-center h-8 pt-1 px-2"
      :class="{'border-b-2 border-b-[#fba800] bg-[#fefdec]': activeTab === 'Management KPI' }">
      Management KPI
    </button @click="activeTab">
    <p>|</p>
    <button @click="activeTab='Man Power Trends'" class="font-semibold w-full text-sm text-center h-8 pt-1 px-2"
      :class="{'border-b-2 border-b-[#fba800] bg-[#fefdec]': activeTab === 'Man Power Trends' }">
      Man Power
    </button @click="activeTab">
   
    
  </div>
  <!-- Charts -->

<div class="mt-4 bg-white">
   <!-- Saudization -->
  <div v-if="activeTab =='Saudization'" style="background-color: white;" >



    <!-- Total Manpower vs Saudi National -->

         <div>
            <div>
                <h1 class="text-3xl font-semibold text-center mb-3 mt-5 pt-5">Total Manpower vs Saudi National</h1>
                       
            </div>

            <div class="flex gap-5 justify-center">
                <div  class="flex flex-col gap-4  w-full">
                    <SemiCircleGauge :total="154" :saudi="10"  />
                </div>
                
            </div>

            <div class="flex gap-5 justify-center">
                <div  class="flex flex-col gap-4  w-full">
                    <RadialGauge :chartData="manpowerSaudiNationalData"  />
                </div>
                
            </div>

            
        </div>


  </div>


  <!-- Management KPI -->

   <div v-if="activeTab =='Management KPI'" style="background-color: white;" >

     <!-- KPI Performance Measure -->

         <div>
            <div>
                <h1 class="text-3xl font-semibold text-center mb-3 mt-5 pt-5">KPI Performance Measure</h1>
                
                
            </div>

            <div class="flex gap-5 justify-center">
                <div  class="flex flex-col gap-4  w-full">
                    <RadarChart :chartData="kpiPerformanceMeasure" title="" />
                </div>
                
            </div>
        </div>



   </div>


  <!-- Man Power Trends  -->

  <div v-if="activeTab =='Man Power Trends'" style="background-color: white;" >

    <!-- Manpower Summary -->

         <div>
            <div>
                <h1 class="text-3xl font-semibold text-center mb-3 mt-5 pt-5">Manpower Summary</h1>
                
                
                
            </div>

            <div class="flex gap-5 justify-center">
                <div  class="flex flex-col gap-4  w-full">
                    <BulletChart :chartData="manpowerSummaryData"  />
                </div>
                
            </div>
        </div>


     <!-- Manpower Detail -->

         <div>
            <div>
                <h1 class="text-3xl font-semibold text-center mb-3 mt-5">Manpower Detail</h1>
                
                
                
            </div>

             <div class="ml-[10px] my-[20px] w-full h-[100px] flex gap-10">

                <CountCard 
                    :countCardData="{
                        count: manpowerDetailsData.totals.indicative,
                        title: 'Indicative Total',
                        data: manpowerDetailsData.series[0].data
                    }"
                    />

                <CountCard 
                :countCardData="{
                    count: manpowerDetailsData.totals.actual,
                    title: 'Actual Total',
                    data: manpowerDetailsData.series[1].data
                }"
                />    

            </div>

            <div class="flex gap-5 justify-center">
                <div  class="flex flex-col gap-4  w-full">
                    <LineLableChart :chartData="manpowerDetailsData" title="" />
                </div>
                
            </div>
        </div>    



  </div>

<div class="w-full" style="color:#666666; text-align:end;"><p>Powered by <b style='color:#211a4b;'>TEAMPRO</b></p></div>

</div>
 



   
</template>

<script>


import SemiCircleGauge from '@/components/chart/SemiCircleGauge.vue';
import RadialGauge from '@/components/chart/RadialGauge.vue';
import RadarChart from '@/components/chart/RadarChart.vue';
import BulletChart from '@/components/chart/BulletChart.vue';
import LineLableChart from '@/components/chart/LineLableChart.vue';
 import CountCard from '@/components/CountCard.vue';


import manpowerSaudiNationalData from '@/data/maintenance/manpower_saudi_national.js';
import kpiPerformanceMeasure from '@/data/maintenance/kpi_performance_measure.js';
import manpowerSummaryData from '@/data/maintenance/manpower_summary.js';
import manpowerDetailsData from '@/data/maintenance/manpower_details.js';



export default {
  data() {
    return {
      activeTab: 'Saudization',
      kpiPerformanceMeasure,
      manpowerSummaryData,
      manpowerDetailsData
      
    };
  },

  components: {

    SemiCircleGauge,
    RadialGauge,
    RadarChart,
    BulletChart,
    LineLableChart,
    CountCard


  }
};



</script>
