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

const colWidth = computed(() => `${100 / props.fields.length}%`);

function formatField(value, config) {
  const { format = 'string', scale = 2 } = config;

  const FORMATTERS = {
    currency: (val, scale) => formatCurrency(val, scale),
    currencyCompact: formatCurrencyCompact,
    percent: formatPercent,
    integer: (val) => val.toFixed(0),
    decimal: (val, scale) => val.toFixed(scale),
  };
  return FORMATTERS?.[format]?.(value, scale) ?? value;
}

function formatCurrency(value, scale, currency = 'USD', i18n = 'en-US') {
  const integerFormatter = new Intl.NumberFormat(i18n, {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  const fractionFormatter = new Intl.NumberFormat(i18n, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
  });

  return value % 1 === 0
    ? integerFormatter.format(value)
    : fractionFormatter.format(value);
}

// Currently "dumb" for only thousands
function formatCurrencyCompact(value, scale = 2) {
  let suffix;
  let _value;

  const kValue = value / 1000;
  const mValue = kValue / 1000;

  if (mValue >= 1) {
    _value = mValue;
    suffix = 'M';
  } else if (kValue >= 1) {
    _value = kValue;
    suffix = 'K';
  } else {
    _value = value;
    suffix = '';
  }

  const fixedValue = new Intl.NumberFormat('en-us', {
    maximumFractionDigits: scale,
  }).format(_value);

  return '$' + fixedValue + suffix;
}

function formatPercent(value, scale = 0) {
  return new Intl.NumberFormat('en-us', {
    style: 'percent',
    maximumFractionDigits: scale,
  }).format(value);
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
  width: 100%;
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
  font-size: 1rem;
  font-weight: 900;
}

th,
td {
  padding: 8px;
  border: 2px solid white;
}

thead th {
  width: v-bind(colWidth);
}

thead tr:first-of-type th:first-of-type {
  text-align: left;
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
  color: #1f145d;
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
