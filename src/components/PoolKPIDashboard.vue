<script setup>
import Table from './Table.vue';

const title = 'Promo Sales';

const fields = [
  {
    title: '',
    color: 'white',
  },
  {
    title: 'Financial Performance',
    format: 'currency',
    scale: 0,
    color: 'dark-blue',
    children: [
      {
        title: 'Total Revenue',
      },
      {
        title: 'ARPU',
      },
      {
        title: 'VC % of Rev',
      },
    ],
  },
  {
    title: 'Lesson Performance',
    format: 'currency',
    scale: 0,
    color: 'blue',
    children: [
      {
        title: 'ATLs',
      },
      {
        title: 'AWLs',
      },
      {
        title: 'Net Lessons',
      },
      {
        title: 'Churn Rate',
      },
    ],
  },
  {
    title: 'Trial Performance',
    format: 'currency',
    scale: 0,
    color: 'light-blue',
    children: [
      {
        title: 'Attended Trials',
      },
      {
        title: 'Total Trial Conversions',
      },
    ],
  },
  {
    title: 'Operational Performance',
    format: 'integer',
    color: 'yellow',
    children: [
      {
        title: 'Deployed Capacity',
      },
      {
        title: 'ATL Capacity Utilization',
      },
      {
        title: 'AQL Capacity Utilization',
      },
      {
        title: 'NPS Score',
      },
    ],
  },
];

const data = [
  {
    locationName: 'Buffalo Grove',
    salesTotal: 90.5,
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
];
</script>

<template>
  <main>
    <Table :fields="fields" :data="[]" />
  </main>
</template>
