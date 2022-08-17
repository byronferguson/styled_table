<script setup>
import { computed, ref } from 'vue';

const title = 'Promo Sales';

const fields = [
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

const promoData = ref([
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

const data = computed(() => {
  return promoData.value.map((record) => Object.values(record));
});

function formatField(value, config) {
  const FORMATTERS = {
    current: formatCurrency,
    percent: formatPercent,
    integer: (val) => val,
    string: (val) => val,
  };

  const { format = 'string', scale } = config;

  return FORMATTERS[format](value);
}

function formatCurrency(value, currency = 'USD', i18n = 'en-US') {
  return new Intl.NumberFormat(i18n, {
    style: 'currency',
    currency,
  }).format(value);
}

function formatPercent(value, precision = 0) {
  return (value * 100).toFixed(precision) + '%';
}
</script>

<template>
  <table>
    <thead>
      <tr>
        <th rowspan="2">Locations</th>
        <th colspan="8">Promo Sales</th>
      </tr>
      <tr>
        <th
          v-for="(field, idx) in fields"
          :key="`${field.slug}-${idx}`"
          :data-group="field.group"
        >
          {{ field.title }}
        </th>
      </tr>
    </thead>

    <tbody>
      <!-- <tr v-for="data in promoData" :key="data.locationName">
        <td>{{ data.locationName }}</td>
        <td>{{ formatCurrency(data.salesTotal) }}</td>
        <td>{{ formatCurrency(data.salesGoal) }}</td>
        <td>{{ formatPercent(data.goalPercent) }}</td>
        <td>{{ formatCurrency(data.salesAverage) }}</td>
        <td>{{ data.scheduleTotal }}</td>
        <td>{{ formatPercent(data.schedulePercent) }}</td>
        <td>{{ data.withdrawals }}</td>
        <td>{{ formatPercent(data.schedulePercent) }}</td>
      </tr> -->
      <tr v-for="(record, recordIndex) in data" :key="recordIndex">
        <td v-for="(fieldValue, fieldIndex) in record" :key="fieldIndex">
          {{ formatField(fieldValue, fields[fieldIndex]) }}
        </td>
      </tr>
    </tbody>
  </table>
  <pre>{{ data }}</pre>
</template>

<style lang="postcss">
table {
  color: #1f145d;
  border-collapse: collapse;
  border-style: hidden;
  text-align: center;
  vertical-align: middle;
}

caption {
  font-weight: bold;
  font-size: 24px;
  text-align: left;
  color: #333;
  margin-bottom: 16px;
}

thead {
  background-color: #1f145d;
  color: white;
  font-size: 0.875rem;
  font-weight: 900;
}

th,
td {
  padding: 8px;
  border: 2px solid white;
}

thead th {
  width: 11%;
}

thead th[data-group='1'] {
  background-color: #2157d6;
  color: white;
}

thead th[data-group='2'] {
  background-color: #ffcf34;
  color: #1f145d;
}

thead th[data-group='3'] {
  background-color: #f8564b;
  color: white;
}

tbody tr:nth-child(odd) {
  background-color: #eee;
}

tbody tr:nth-child(even) {
  background-color: #ccc;
}

tbody tr:hover td {
  background-color: #ffcf34;
  font-weight: 900;
}

/* tbody th {
  background-color: #36c;
  color: white;
  text-align: left;
}

tbody tr:nth-child(even) th {
  background-color: #25c;
} */
</style>
