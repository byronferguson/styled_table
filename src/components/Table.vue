<script setup>
import { computed, ref } from 'vue';

const props = defineProps({
  title: String,
  fields: Array,
  fieldDescriptions: Array,
  data: Array,
});

const dataArr = computed(() => {
  return props.data.map((record) => Object.values(record));
});

const hasSubTitles = computed(() =>
  props.fields.some((field) => field.subTitle)
);

const titleColSpan = computed(() => props.fields.length - 1);
const titleRowSpan = computed(() => {
  const initialSpan = props.title ? 2 : 1;
  const subTitleOffest = hasSubTitles.value ? 1 : 0;

  return initialSpan + subTitleOffest;
});

const colWidth = computed(() => `${100 / props.fields.length}%`);

function isPrimitiveValue(value) {
  return ['number', 'string'].includes(typeof value);
}

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
        <th :rowspan="titleRowSpan">{{ fields[0].title }}</th>
        <th :colspan="titleColSpan">{{ title }}</th>
      </tr>
      <tr>
        <th v-if="!title" :rowspan="titleRowSpan">
          {{ fields[0].title }}
        </th>
        <th
          v-for="(field, fieldIndex) in fields.slice(1)"
          :key="`${field.title}-${fieldIndex}`"
          :data-group="field.group"
          :data-color="field.color"
        >
          {{ field.title }}
        </th>
      </tr>
      <tr v-if="hasSubTitles">
        <td
          v-for="(field, fieldIndex) in fields.slice(1)"
          :key="`${field.title}-${fieldIndex}`"
        >
          {{ field.subTitle }}
        </td>
      </tr>
    </thead>

    <tbody>
      <tr v-for="(record, recordIndex) in dataArr" :key="recordIndex">
        <component
          :is="fieldIndex === 0 ? 'th' : 'td'"
          v-for="(fieldValue, fieldIndex) in record"
          :key="fieldIndex"
          v-tooltip="{ text: fieldValue?.tooltip ?? '', displayArrow: true }"
        >
          <template v-if="isPrimitiveValue(fieldValue)">
            {{ formatField(fieldValue, fields[fieldIndex]) }}
          </template>
          <template v-else>
            <div class="flex justify-center align-center">
              <span>{{
                formatField(fieldValue.value, fields[fieldIndex])
              }}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-3 w-3 fill-red-600"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </template>
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
  position: relative;
}

thead th {
  width: v-bind(colWidth);
}

thead td {
  background-color: #ccc;
  color: #1f145d;
  font-size: 0.85rem;
  font-weight: 400;
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

.tooltip {
  position: relative;
}

.tooltip:after {
  --tooltip-color: #2157d6;
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 0;
  height: 0;
  display: block;
  border-left: 12px solid transparent;
  border-bottom: 12px solid transparent;
  border-top: 12px solid var(--tooltip-color);
}
</style>
