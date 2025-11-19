<template>
  <!-- Header Section -->
  <div class="bg-white flex p-5 items-center">
    <div class="flex flex-row">
      <h1 class="font-semibold text-2xl">Analytics</h1>
    </div>

    <!-- Filter Section -->
    <div class="ml-auto flex gap-3">
      <!-- Date -->
      <input type="date" value="2025-11-12" class="border border-gray-300 rounded-md px-3 py-1 text-sm"></input>
      <input type="date" value="2025-11-12" class="border border-gray-300 rounded-md px-3 py-1 text-sm"></input>
      <!-- Department -->
      <select v-model="selectedDepartment" class="border border-gray-300 rounded-md px-3 py-1 text-sm w-20">
        <option value="" disabled>Select an department</option>
        <option
            v-for="department in departments" :key="department.id" :value="department.name"
        >
            {{ department.name }}
        </option>
      </select>
      <!-- Employee -->
      <select v-model="selectedEmployee" class="border border-gray-300 rounded-md px-3 py-1 text-sm w-20">
        <option value="" disabled>Select an employee</option>
        <option
            v-for="employee in employees" :key="employee.id" :value="employee.name"
        >
            {{ employee.name }}
        </option>
      </select>
      <button class="bg-black text-white rounded-md px-5 py-1.5 text-sm">Filter</button>
    </div>
  </div>
  <!-- Tabs Section -->
  <div class="grid grid-cols-12 gap-5 mt-5">
    <div class="bg-white col-span-3 p-5 h-[400px]">
        <h1 class="text-gray-400 font-medium">Departments</h1>
        <div>
            <!-- Management Button -->
            <router-link to="/management" @click="activeDepartment='management'" class="flex font-semibold px-3 py-1 mt-3 w-full text-left border border-gray-300 rounded-md transition-all duration-300 ease-in-out"
            active-class="border border-[#fba800] bg-[#fefdec]">
                Management
                <span class="ml-auto flex items-center">
                    <svg class="h-4 w-4 text-gray-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <polyline points="7 7 12 12 7 17" />
                        <polyline points="13 7 18 12 13 17" />
                    </svg>
                </span>
            </router-link>
            <!-- Maintenance Button -->
            <router-link to="/maintenance" @click="activeDepartment='maintenance'" class="flex font-semibold px-3 py-1 mt-3 w-full text-left border border-gray-300 rounded-md transition-all duration-300 ease-in-out"
            active-class="border border-[#fba800] bg-[#fefdec]">
                Maintenance
                <span class="ml-auto flex items-center">
                    <svg class="h-4 w-4 text-gray-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <polyline points="7 7 12 12 7 17" />
                        <polyline points="13 7 18 12 13 17" />
                    </svg>
                </span>
            </router-link>
            <!-- HR Button -->
            <router-link to="/hr" @click="activeDepartment='hr'" class="flex font-semibold px-3 py-1 mt-3 w-full text-left border border-gray-300 rounded-md transition-all duration-300 ease-in-out"
            active-class="border border-[#fba800] bg-[#fefdec]">
                HR
                <span class="ml-auto flex items-center">
                    <svg class="h-4 w-4 text-gray-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <polyline points="7 7 12 12 7 17" />
                        <polyline points="13 7 18 12 13 17" />
                    </svg>
                </span>
            </router-link>
            <!-- Safety, health & Environment Button -->
            <router-link to="/safety" @click="activeDepartment='safety'" class="flex font-semibold px-3 py-1 mt-3 w-full text-left border border-gray-300 rounded-md transition-all duration-300 ease-in-out"
            active-class="border border-[#fba800] bg-[#fefdec]">
                Safety, health & Environment
                <span class="ml-auto flex items-center">
                    <svg class="h-4 w-4 text-gray-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <polyline points="7 7 12 12 7 17" />
                        <polyline points="13 7 18 12 13 17" />
                    </svg>
                </span>
            </router-link>
            <!-- Warehouse & Procurement Button -->
            <router-link to="/warehouse" @click="activeDepartment='warehouse'" class="flex font-semibold px-3 py-1 mt-3 w-full text-left border border-gray-300 rounded-md transition-all duration-300 ease-in-out"
            active-class="border border-[#fba800] bg-[#fefdec]">
                Warehouse & Procurement
                <span class="ml-auto flex items-center">
                    <svg class="h-4 w-4 text-gray-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <polyline points="7 7 12 12 7 17" />
                        <polyline points="13 7 18 12 13 17" />
                    </svg>
                </span>
            </router-link>
            <!-- Customer SLA Button -->
            <router-link to="/customer-sla" @click="activeDepartment='customer'" class="flex font-semibold px-3 py-1 mt-3 w-full text-left border border-gray-300 rounded-md transition-all duration-300 ease-in-out"
            active-class="border border-[#fba800] bg-[#fefdec]">
                Customer SLA
                <span class="ml-auto flex items-center">
                    <svg class="h-4 w-4 text-gray-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <polyline points="7 7 12 12 7 17" />
                        <polyline points="13 7 18 12 13 17" />
                    </svg>
                </span>
            </router-link>
            <!-- Operations Button -->
            <router-link to="/operations" @click="activeDepartment='operations'" class="flex font-semibold px-3 py-1 mt-3 w-full text-left border border-gray-300 rounded-md transition-all duration-300 ease-in-out"
            active-class="border border-[#fba800] bg-[#fefdec]">
                Operations
                <span class="ml-auto flex items-center">
                    <svg class="h-4 w-4 text-gray-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <polyline points="7 7 12 12 7 17" />
                        <polyline points="13 7 18 12 13 17" />
                    </svg>
                </span>
            </router-link>
        </div>
    </div>
    <div class="col-span-9">
        <router-view />
    </div>
</div>


</template>

<script>
export default {
  data() {
    return {
      employees: [
        { id: 1, name: "Riyaz" },
        { id: 2, name: "Amar" },
      ],
      departments: [
        { id: 1, name: "MRU" },
        { id: 2, name: "IT" },
      ],
      selectedEmployee: "Riyaz",
      selectedDepartment: "MRU",
    };
  }
};
</script>

<style scoped>
    option {
        width: 10px;
    }
</style>
