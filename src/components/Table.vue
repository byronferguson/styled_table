<script setup>
import { computed, ref, defineProps } from 'vue';

const props = defineProps({
  title: String,
  fields: Array,
  data: Array,
});

const fieldsArr = computed(() => {
  return props.title ? props.fields.slice(1) : props.fields;
});

const dataArr = computed(() => {
  return props.data.map((record) => Object.values(record));
});

const titleColspan = computed(() => props.fields.length - 1);

function formatField(value, config) {
  const { format = 'string', scale = 1 } = config;

  const FORMATTERS = {
    currency: formatCurrency,
    currencyCompact: formatCurrencyCompact,
    percent: formatPercent,
    string: (val) => val,
    integer: (val) => val.toFixed(0),
    decimal: (val) => val.toFixed(scale),
  };
  return FORMATTERS?.[format]?.(value) ?? value;
}

function formatCurrency(value, currency = 'USD', i18n = 'en-US') {
  return new Intl.NumberFormat(i18n, {
    style: 'currency',
    currency,
  }).format(value);
}

// Currently "dumb" for only thousands
function formatCurrencyCompact(value) {
  const _value = Math.floor(value / 1000);
  return `$${_value}K`;
}

function formatPercent(value, precision = 0) {
  return (value * 100).toFixed(precision) + '%';
}
</script>

<template>
  <table>
    <thead>
      <tr v-if="title">
        <th :rowspan="2">{{ fields[0].title }}</th>
        <th :colspan="titleColspan">{{ title }}</th>
      </tr>
      <tr>
        <th
          v-for="(field, fieldIndex) in fieldsArr"
          :key="`${field.title}-${fieldIndex}`"
          :data-group="field.group"
          :data-color="field.color"
        >
          {{ field.title }}
        </th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="(record, recordIndex) in dataArr" :key="recordIndex">
        <component
          :is="fieldIndex === 0 ? 'th' : 'td'"
          v-for="(fieldValue, fieldIndex) in record"
          :key="fieldIndex"
        >
          {{ formatField(fieldValue, fields[fieldIndex]) }}
        </component>
      </tr>
    </tbody>
  </table>
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

thead th[data-color='dark-blue'] {
  background-color: #1f145d;
  color: white;
}

thead th[data-color='blue'] {
  background-color: #2157d6;
  color: white;
}

thead th[data-color='light-blue'] {
  background-color: #99e3fa;
  color: #1f145d;
}

thead th[data-color='red'] {
  background-color: #f8564b;
  color: white;
}

thead th[data-color='pink'] {
  background-color: #ffd0d3;
  color: #1f145d;
}

thead th[data-color='yellow'] {
  background-color: #ffcf34;
  color: #1f145d;
}

tbody th {
  text-align: left;
}

tbody tr:nth-child(odd) {
  background-color: #eee;
}

tbody tr:nth-child(even) {
  background-color: #ccc;
}

/* tbody th {
  background-color: #36c;
  color: white;
  text-align: left;
}

tbody tr:nth-child(even) th {
  background-color: #25c;
} */

tbody tr:hover th {
  background-color: #ffcf34;
  font-weight: 900;
  color: #1f145d;
}

tbody tr:hover td {
  background-color: #ffcf34;
  font-weight: 900;
}
</style>
