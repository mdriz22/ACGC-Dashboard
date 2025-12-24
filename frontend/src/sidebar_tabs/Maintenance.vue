<template>
    <!-- Tabs -->
    <div class="bg-white flex flex-nowrap gap-2 justify-center overflow-x-auto items-center">
    <button @click="activeTab='Overall Scheduled vs Accomplished'" class="font-semibold w-full text-sm text-center h-8 pt-1 px-2"
      :class="{'border-b-2 border-b-[#fba800] bg-[#fefdec]': activeTab === 'Overall Scheduled vs Accomplished' }">
      PM / CM / WR
    </button @click="activeTab">
    <p>|</p>
    <button @click="activeTab='Catering and Laundry Services'" class="font-semibold w-full text-sm text-center h-8 pt-1 px-2"
      :class="{'border-b-2 border-b-[#fba800] bg-[#fefdec]': activeTab === 'Catering and Laundry Services' }">
      Catering and Laundry Services
    </button @click="activeTab">
    <p>|</p>
    <button @click="activeTab='Room Occupancy'" class="font-semibold w-full text-sm text-center h-8 pt-1 px-2"
      :class="{'border-b-2 border-b-[#fba800] bg-[#fefdec]': activeTab === 'Room Occupancy' }">
      Room Occupancy
    </button @click="activeTab">
  </div>

    <!-- Charts -->
<div class="mt-4 bg-white">
    <!-- Overall Scheduled vs Accomplished -->

    <div v-if="activeTab =='Overall Scheduled vs Accomplished'" style="background-color: white;" >


         <!-- Overall PM / CM / WR - Monthwise -->

         <div>
            <div>
                <h1 class="text-3xl font-semibold text-center mb-3 mt-5 pt-5">Overall PM / CM / WR - <span class="bg-gradient-to-t from-[#fd2b94] via-[#fba800] to-[#fd2b94] bg-clip-text text-transparent">MonthWise</span></h1>
                
                
                
            </div>


            


            <div class="flex gap-5 justify-center">
                <div  class="flex flex-col gap-4  w-full">
                    <MultiLineChart :chartData="OverallMonthAll"  />
                </div>
                
            </div>
        </div>


          <!-- PM Overall Scheduled vs Accomplished -->

        <div>
            <div>
                <h1 class="text-3xl font-semibold text-center mb-8 mt-5 pt-5">Preventive Maintainance - <span class="bg-gradient-to-t from-[#fd2b94] via-[#fba800] to-[#fd2b94] bg-clip-text text-transparent">Subjectwise</span></h1>
                
            </div>

            <div class="ml-[10px] my-[20px] w-full h-[100px] flex gap-10">

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

            </div>


           

                <div  class=" bg-[#f5f8ff] w-full">
                    <StackedBarChart
                    :chartData="overallSchvsAccData.series"
                    :categories="overallSchvsAccData.categories"
                    title=""
                    />
                </div>

                

        </div>



        <!-- CM Overall Scheduled vs Accomplished -->

         <div>
            <div>
                <h1 class="text-3xl font-semibold text-center mb-8 mt-5 pt-5">Corrective Maintainance  - <span class="bg-gradient-to-t from-[#fd2b94] via-[#fba800] to-[#fd2b94] bg-clip-text text-transparent">Subjectwise</span></h1>
                
                
                
            </div>

              <div class="ml-[10px] my-[20px] w-full h-[100px] flex gap-10">

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

            </div>




            <div class="flex gap-5 justify-center">
                <div  class="flex flex-col gap-4  w-full">
                    <ParetoVerticalBarChart :chartData="cmOverallData"  />
                </div>
                
            </div>
        </div>


        <!-- WR Overall Scheduled vs Accomplished -->

         <div>
            <div>
                <h1 class="text-3xl font-semibold text-center mb-8 mt-5 pt-5">Work Request - <span class="bg-gradient-to-t from-[#fd2b94] via-[#fba800] to-[#fd2b94] bg-clip-text text-transparent">Subjectwise</span></h1>
                
                
                
            </div>

             <div class="ml-[10px] my-[20px] w-full h-[100px] flex gap-10">

                <CountCard 
                    :countCardData="{
                        count: wrOverallData.completion_rate,
                        title: 'WR Completion Rate',
                        data: wrOverallData.per
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

            </div>



            <div class="flex gap-5 justify-center">
                <div  class="flex flex-col gap-4  w-full">
                    <TornadoChart :chartData="wrOverallData"  />
                </div>
                
            </div>
        </div>


        
        




    </div>

 
 <!-- Catering and Laundry Services -->

    <div v-if="activeTab =='Catering and Laundry Services'" style="background-color: white;" >


        <!-- Feedback -->
        <div>
            <div>
                <h1 class="text-3xl font-semibold text-center mt-5 pt-5">Feedback - <span class="bg-gradient-to-t from-[#fd2b94] via-[#fba800] to-[#fd2b94] bg-clip-text text-transparent">Weekwise</span></h1>
                <div class="flex m-5 gap-3">
                    <div @click="activeFeedbackType = 'Service'" class="w-40 cursor-pointer text-center border py-1 rounded-lg font-medium" :class="{'border-2 border-[#fba800] bg-[#fefdec]': activeFeedbackType === 'Service' }">
                        Service
                    </div>
                    <div @click="activeFeedbackType = 'Quality'" class="w-40 cursor-pointer text-center border py-1 rounded-lg font-medium" :class="{'border-2 border-[#fba800] bg-[#fefdec]': activeFeedbackType === 'Quality' }">
                        Quality
                    </div>
                </div>
            </div>

            <div class="flex gap-5 justify-center">
                <div v-if="activeFeedbackType=='Service'" class="flex flex-col gap-4 bg-[#f5f8ff] w-full">
                    <BarChart :chartData="serviceFeedbackData" />
                </div>
                <div v-if="activeFeedbackType=='Quality'" class="flex flex-col gap-4 bg-[#f5f8ff] w-full">
                    <BarChart :chartData="qualityFeedBackData" />
                </div>
            </div>
        </div>

        <!-- Testimonials -->
        <div>
            <div class="relative">
                <!-- Testimonials Header -->
                <div class="flex justify-center items-center pt-5">
                    <img src="../assets/icons/award-ceremony-left.png" class="h-40" />
                    <div class="flex flex-col items-center gap-3">
                        <h1 class="text-5xl font-semibold">Our Happy <span class="bg-gradient-to-t from-[#fd2b94] via-[#fba800] to-[#fd2b94] bg-clip-text text-transparent">Residents</span></h1>
                        <p class="text-gray-400 font-medoum text-xl">See how our residents are rated us</p>
                    </div>
                    <img src="../assets/icons/award-ceremony-right.png" class="h-40" />
                </div>
            </div>
            <!-- Testimonials Card -->
            <div class="masonry ml-14">
                <TestimonialsCard v-for="(data, index) in testimonialsData" :key="index" :testimonialsCardData="data" />
            </div>
        </div>

        <!-- Meals & Laundry -->
        <div class="grid grid-cols-12 pt-5">
          <!-- Meals -->
          <div class="col-span-6">
            <h1 class="text-3xl font-semibold text-center mt-10">
              Meals <span class="bg-gradient-to-t from-[#fd2b94] via-[#fba800] to-[#fd2b94] bg-clip-text text-transparent">Summary</span>
            </h1>

            <div class="flex justify-center mt-5">
              <DonutChart :chartData="mealsData" />
            </div>
          </div>


          <!-- Laundry -->
          <div class="col-span-6 p-3">

             <h1 class="text-3xl font-semibold text-center mt-7">
                Laundry <span class="bg-gradient-to-t from-[#fd2b94] via-[#fba800] to-[#fd2b94] bg-clip-text text-transparent"></span>
                </h1>

            <div class=" flex gap-8 shadow-lg border w-[300px;] ml-[120px;] mt-[100px]  p-6" style='border-radius:8px;'>

               
                <div class="flex flex-col justify-start relative  ">

                

                <!-- <div>
                <img src="../assets/icons/washing-machine.png" alt="laundry" class=" w-48"/>
                </div> -->

                <div class="flex  justify-start gap-3 ">

                 <p class="text-3xl font-medium ">{{laundryData[0].data}}</p>   
                
                <div class="bg-gradient-to-l from-[#fba800] to-[#232f3e] shadow ">
                    <p class="text-3xl font-medium text-white">Trips</p>
                </div>

                </div><br>
                <p class="text-sm absolute top-[40px]">Laundry</p>
                

                </div>

                <div>
                    <img src="../assets/icons/laundry.png" alt="laundry" class=" w-[60px;]"/>
                </div>


           </div>   

          </div>




        </div>


        <!-- Catering and Laundry Services -->

        <div>
            <div>
                <h1 class="text-3xl font-semibold text-center mt-5 pt-5">Catering and Laundry Services - <span class="bg-gradient-to-t from-[#fd2b94] via-[#fba800] to-[#fd2b94] bg-clip-text text-transparent">Weekwise</span></h1>
                
            </div>

            <div class="flex gap-5 justify-center">
                <div  class="flex flex-col gap-4  w-full">
                    <SlopeChart :chartData="cateringFiltered" />
                </div>
                
            </div>
        </div>



    </div>


   
   <!-- Room Occupancy  -->


   <div v-if="activeTab =='Room Occupancy'" style="background-color: white;" >


      <!-- Room Occupancy -->

         <div>
            <div>
                <h1 class="text-3xl font-semibold text-center mb-3 mt-5 pt-5">Room Occupancy - <span class="bg-gradient-to-t from-[#fd2b94] via-[#fba800] to-[#fd2b94] bg-clip-text text-transparent">Building wise</span></h1>
                 
            </div>

             <div class="ml-[10px] my-[20px] w-full h-[100px] flex gap-10">

                <CountCard 
                :countCardData="{
                count: overallOccupancy,
                title: 'Overall Occupancy',
                data: roomOccupancyTypeData.map(item => item.occupancy)
                }"
            />
   

            </div>




            <div class="flex gap-5 justify-center">
                <div  class="flex flex-col gap-4  w-full">
                    <LineColumnChart :chartData="roomOccupancyData"  />
                </div>
                
            </div>
        </div>

        <!-- Room Occupancy - Building Type Wise-->

         <div>
            <div>
                <h1 class="text-3xl font-semibold text-center mb-3 mt-5 pt-5">Room Occupancy - <span class="bg-gradient-to-t from-[#fd2b94] via-[#fba800] to-[#fd2b94] bg-clip-text text-transparent">Building Type Wise</span></h1>
                
                
                
            </div>


            <div class="ml-[10px] my-[20px] w-full h-[100px] flex gap-10">

               
                
               
                <CountCard 
                :countCardData="{
                count: overallOccupancy,
                title: 'Overall Occupancy',
                data: roomOccupancyTypeData.map(item => item.occupancy)
                }"
            />



            </div>


            <div class="flex gap-5 justify-center">
                <div  class="flex flex-col gap-4  w-full">
                    <StackedAreaMixed :chartData="roomOccupancyTypeData"  />
                </div>
                
            </div>
        </div>



    </div>



<div class="w-full" style="color:#666666; text-align:end;"><p>Powered by <b style='color:#211a4b;'>TEAMPRO</b></p></div>

</div>
    
</template>

<script>

    import { computed } from 'vue';
    import { useFilterStore } from '@/stores/filterStore';

    import TestimonialsCard from '@/components/TestimonialsCard.vue';
    import BarChart from '@/components/chart/BarChart.vue';
    import DonutChart from '@/components/chart/DonutChart.vue';
    import HeatMapChart from '@/components/chart/HeatMapChart.vue';
    import SlopeChart from '@/components/chart/SlopeChart.vue';
    import StackedBarChart from '@/components/chart/StackedBarChart.vue';
    import RadialBarChart from '@/components/chart/RadialBarChart.vue';
    import DashedLineChart from '@/components/chart/DashedLineChart.vue';
    import SlopeChartBasic from '@/components/chart/SlopeChartBasic.vue';
    import StackedAreaChart from '@/components/chart/StackedAreaChart.vue';
    import PolarAreaChart from '@/components/chart/PolarAreaChart.vue';
    import LineLableChart from '@/components/chart/LineLableChart.vue';
    import LineTimeSeriesChart from '@/components/chart/LineTimeSeriesChart.vue';
    import LineMultipleYAxis from '@/components/chart/LineMultipleYAxis.vue';
    import LineColumnChart from '@/components/chart/LineColumnChart.vue';
    import SemiCircleGauge from '@/components/chart/SemiCircleGauge.vue';
    import ParetoVerticalBarChart from '@/components/chart/ParetoVerticalBarChart.vue';
    import TornadoChart from '@/components/chart/TornadoChart.vue';
    import StepLineChart from '@/components/chart/StepLineChart.vue';
    import HorizontalBarChart from '@/components/chart/HorizontalBarChart.vue';
    import BulletChart from '@/components/chart/BulletChart.vue';
    import PercentageCard from '@/components/PercentageCard.vue';
    import CountCard from '@/components/CountCard.vue';
    import RadarChart from '@/components/chart/RadarChart.vue';
    import StackedAreaMixed from '@/components/chart/StackedAreaMixed.vue';
    import MultiLineChart from '@/components/chart/MultiLineChart.vue';
    import FlowChart from '@/components/chart/FlowChart.vue';



    import testimonialsData from '@/data/maintenance/testimonials.js';
    import serviceFeedbackData from '@/data/maintenance/service_feedback';
    import qualityFeedBackData from '@/data/maintenance/quality_feedback.js';
    import mealsData from '@/data/maintenance/meals';
    import cateringLaundryData from '@/data/maintenance/catering_laundry_service.js';
    import laundryData from '@/data/maintenance/laundry.js';
    import overallSchvsAccData from '@/data/maintenance/overall_scheduled_vs_accomplished.js';
    import pmiOverall from '@/data/maintenance/pmi_overall.js';
    import waterConsumption from '@/data/maintenance/water_consumption.js';
    import gasolineConsumption from '@/data/maintenance/gasoline_consumption.js';
    import safetyData from '@/data/maintenance/safety.js';
    import manpowerDetailsData from '@/data/maintenance/manpower_details.js';
    import garbageCollectionData from '@/data/maintenance/garbage_collection.js';
    import safetyEnvironmentData from '@/data/maintenance/safety_and_environment.js';
    import roomOccupancyData from '@/data/maintenance/room_occupancy.js';
    import cmOverallData from '@/data/maintenance/cm_overall_scheduled_accomplished.js';
    import wrOverallData from '@/data/maintenance/wr_overall_schedule.js';
    import sewageWaterData from '@/data/maintenance/sewage_water_consumption.js';
    import safetyTrainingOnData from '@/data/maintenance/safety_training_on.js';
    import manpowerSummaryData from '@/data/maintenance/manpower_summary.js';
    import roomOccupancyTypeData from '@/data/maintenance/room_occupancy_typewise.js';
    import OverallMonthAll from '@/data/maintenance/monthwise_overall_pmi_cm_wr.js';
    import OrganisationChartData from '@/data/maintenance/organisation_chart.js';
    
    
   

    export default {
         setup() {
            const filterStore = useFilterStore();

            const cateringFiltered = computed(() =>
            filterStore.applyFilters(cateringLaundryData)
            );

            return { cateringFiltered };
        },
        data() {
            return {
                activeTab: 'Overall Scheduled vs Accomplished',
                activeFeedbackType: 'Service',
                testimonialsData,
                serviceFeedbackData,
                qualityFeedBackData,
                mealsData,
                cateringLaundryData,
                laundryData,
                overallSchvsAccData,
                pmiOverall,
                waterConsumption,
                gasolineConsumption,
                safetyData,
                garbageCollectionData,
                safetyEnvironmentData,
                roomOccupancyData,
                cmOverallData,
                wrOverallData,
                sewageWaterData,
                safetyTrainingOnData,
                manpowerSummaryData,
                roomOccupancyTypeData,
                OverallMonthAll,
                OrganisationChartData

            };
        },
        components: {
            TestimonialsCard,
            BarChart,
            DonutChart,
            HeatMapChart,
            SlopeChart,
            StackedBarChart,
            RadialBarChart,
            DashedLineChart,
            SlopeChartBasic,
            StackedAreaChart,
            PolarAreaChart,
            LineLableChart,
            LineTimeSeriesChart,
            LineMultipleYAxis,
            LineColumnChart,
            SemiCircleGauge,
            ParetoVerticalBarChart,
            TornadoChart,
            StepLineChart,
            HorizontalBarChart,
            BulletChart,
            PercentageCard,
            CountCard,
            RadarChart,
            StackedAreaMixed,
            MultiLineChart,
            FlowChart
        },
        computed: {
  overallOccupancy() {
    const totalOccupied = this.roomOccupancyTypeData.reduce((sum, item) => sum + item.occupied, 0);
    const totalRooms = this.roomOccupancyTypeData.reduce((sum, item) => sum + item.total, 0);
    return ((totalOccupied / totalRooms) * 100).toFixed(0) + ' %';
  }
}
    };
</script>

<style scoped>
    .masonry {
        columns: 3;
        /* number of columns */
        column-gap: 10px;
        /* spacing */
    }

    .masonry>* {
        break-inside: avoid;
        /* important */
        margin-bottom: 24px;
    }
</style>