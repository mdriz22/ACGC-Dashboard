<template>
  <!-- Tabs -->
  <div class="bg-white flex flex-nowrap gap-2 justify-center overflow-x-auto items-center">
    <button @click="activeTab='Summary'" class="font-semibold w-full text-sm text-center h-8 pt-1 px-2"
      :class="{'border-b-2 border-b-[#fba800] bg-[#fefdec]': activeTab === 'Summary' }">
      Summary
    </button @click="activeTab">
    <p>|</p>
    <button @click="activeTab='Safety'" class="font-semibold w-full text-sm text-center h-8 pt-1 px-2"
      :class="{'border-b-2 border-b-[#fba800] bg-[#fefdec]': activeTab === 'Safety' }">
      Safety
    </button @click="activeTab">
    <p>|</p>
    <button @click="activeTab='Safety Training'" class="font-semibold w-full text-sm text-center h-8 pt-1 px-2"
      :class="{'border-b-2 border-b-[#fba800] bg-[#fefdec]': activeTab === 'Safety Training' }">
      Safety Training
    </button @click="activeTab">
  </div>
  <!-- Charts -->

  <div class="mt-4 bg-white">

  <!-- Summary -->
   <div v-if="activeTab =='Summary'" style="background-color: white;" class="pb-[10px]" >

     <div>
                <h1 class="text-3xl font-semibold text-center mb-3 mt-5 pt-5">Safety and Environment Summary</h1>
                
                
                
    </div>

      <div class="ml-[10px] my-[20px] w-full h-[100px] flex gap-10">

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

  <!-- Safety  -->

  <div v-if="activeTab =='Safety'" style="background-color: white;" >


     <!-- Safety -->

         <div>
            <div>
                <h1 class="text-3xl font-semibold text-center mb-3 mt-5 pt-5">Safety - <span class="bg-gradient-to-t from-[#fd2b94] via-[#fba800] to-[#fd2b94] bg-clip-text text-transparent">Casewise</span></h1>
                
                
                
            </div>

            <div class="flex gap-5 justify-center">
                <div  class="flex flex-col gap-4  w-full">
                    <PolarAreaChart :chartData="safetyData" title="" />
                </div>
                
            </div>
        </div>

       


         <!-- Safety And Environment -->

         <div>
            <div>
                <h1 class="text-3xl font-semibold text-center mb-3 mt-5 pt-5">Safety and Environment</h1>
                
                
                
            </div>

            <div class="ml-[10px] my-[20px] w-full h-[100px] flex gap-10">

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

            <div class="ml-[150px]">
                <div  class=" ">
                    <HeatMapChart :chartData="safetyEnvironmentData" title="" />
                </div>

            </div>    
                
            
        </div>



  </div>



  <!-- Safety Training -->
  <div v-if="activeTab =='Safety Training'" style="background-color: white;" >

     <!-- Safety Training On -->

         <div>
            <div>
                <h1 class="text-3xl font-semibold text-center mb-3 mt-5 pt-5">Safety Training On</h1>
                
                
                
            </div>

            <div class="">
                <div  class=" ">
                    <HorizontalBarChart :chartData="safetyTrainingOnData" title="" />
                </div>

            </div>    
                
            
        </div>


  </div>


  <div class="w-full" style="color:#666666; text-align:end;"><p>Powered by <b style='color:#211a4b;'>TEAMPRO</b></p></div>
  </div>
   
</template>

<script>


import HorizontalBarChart from '@/components/chart/HorizontalBarChart.vue';
import PolarAreaChart from '@/components/chart/PolarAreaChart.vue';
import HeatMapChart from '@/components/chart/HeatMapChart.vue';
import CountCard from '@/components/CountCard.vue';


import safetyTrainingOnData from '@/data/maintenance/safety_training_on.js';
import safetyData from '@/data/maintenance/safety.js';
import safetyEnvironmentData from '@/data/maintenance/safety_and_environment.js';



export default {
  data() {
    return {
      activeTab: 'Summary',
      safetyTrainingOnData,
      safetyData,
      safetyEnvironmentData

    };
  },

  components: {

    HorizontalBarChart,
    PolarAreaChart,
    HeatMapChart,
    CountCard


  }
};
</script>
