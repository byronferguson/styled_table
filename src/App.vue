<script setup>
import Table from './components/Table.vue';

const title = 'Promo Sales';

const fields = [
  {
    title: 'Locations',
    hint: '',
  },
  {
    title: 'Total Sales',
    hint: '',
    format: 'currency',
    scale: 0,
    group: 1,
  },
  {
    title: 'Goal Sales',
    hint: '',
    format: 'currency',
    scale: 0,
    group: 1,
  },
  {
    title: '% to Goal',
    hint: '',
    format: 'percent',
    scale: 0,
    group: 1,
  },
  {
    title: 'Avg. Sales Per Day',
    hint: '',
    format: 'currency',
    scale: 0,
    group: 1,
  },
  {
    title: 'Total Scheduled',
    hint: '',
    format: 'integer',
    group: 2,
  },
  {
    title: '% Scheduled',
    hint: '',
    format: 'percent',
    scale: 0,
    group: 2,
  },
  {
    title: '# of Withdrawels',
    hint: '',
    format: 'integer',
    group: 3,
  },
  {
    title: 'Total Sales',
    hint: '',
    format: 'currency',
    scale: 0,
    group: 3,
  },
];

const data = ref([
  {
    locationName: 'Buffalo Grove',
    salesTotal: 90,
    salesGoal: 100,
    goalPercent: 0.9,
    salesAverage: 10,
    scheduleTotal: 10,
    schedulePercent: 0.5,
    withdrawals: 5,
    withdrawalsPercent: 0.15,
  },
  {
    locationName: 'Chicago - North Center',
    salesTotal: 90,
    salesGoal: 100,
    goalPercent: 0.9,
    salesAverage: 10,
    scheduleTotal: 10,
    schedulePercent: 0.5,
    withdrawals: 5,
    withdrawalsPercent: 0.15,
  },
  {
    locationName: 'Hoffman Estates',
    salesTotal: 90,
    salesGoal: 100,
    goalPercent: 0.9,
    salesAverage: 10,
    scheduleTotal: 10,
    schedulePercent: 0.5,
    withdrawals: 5,
    withdrawalsPercent: 0.15,
  },
  {
    locationName: 'Niles',
    salesTotal: 90,
    salesGoal: 100,
    goalPercent: 0.9,
    salesAverage: 10,
    scheduleTotal: 10,
    schedulePercent: 0.5,
    withdrawals: 5,
    withdrawalsPercent: 0.15,
  },
  {
    locationName: 'Wilmette',
    salesTotal: 90,
    salesGoal: 100,
    goalPercent: 0.9,
    salesAverage: 10,
    scheduleTotal: 10,
    schedulePercent: 0.5,
    withdrawals: 5,
    withdrawalsPercent: 0.15,
  },
  {
    locationName: 'Johns Creek',
    salesTotal: 90,
    salesGoal: 100,
    goalPercent: 0.9,
    salesAverage: 10,
    scheduleTotal: 10,
    schedulePercent: 0.5,
    withdrawals: 5,
    withdrawalsPercent: 0.15,
  },
  {
    locationName: 'Total',
    salesTotal: 90,
    salesGoal: 100,
    goalPercent: 0.9,
    salesAverage: 10,
    scheduleTotal: 10,
    schedulePercent: 0.5,
    withdrawals: 5,
    withdrawalsPercent: 0.15,
  },
]);
</script>

<template>
  <main class="min-h-screen bg-gray-100 p-12">
    <Table :title="title" :fields="fields" :data="data" />
  </main>
</template>
