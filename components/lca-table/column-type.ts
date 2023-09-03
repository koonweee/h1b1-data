import { LcaTableData } from "./formatters";
import type { ColumnsType,  } from 'antd/es/table';

export const LCA_TABLE_COLUMNS: ColumnsType<LcaTableData> = [
  {
    title: 'LCA Case Number',
    dataIndex: 'lcaCaseNumber',
    key: 'lcaCaseNumber',
  },
  {
    title: 'Received Date',
    dataIndex: 'receivedDate',
    key: 'receivedDate',
  },
  {
    title: 'Decision Date',
    dataIndex: 'decisionDate',
    key: 'decisionDate',
  },
  {
    title: 'Status',
    dataIndex: 'caseStatus',
    key: 'caseStatus',
  },
  {
    title: 'Job title',
    dataIndex: 'jobTitle',
    key: 'jobTitle',
    filters: [],
    filterMode: 'tree',
    filterSearch: true,
    onFilter: (value, record) => record.jobTitle.startsWith(value as string), //type assertion because we know the values have to be strings
  },
  {
    title: 'Base salary',
    dataIndex: 'baseSalary',
    key: 'baseSalary',
    
  },
  {
    title: 'Employer Name',
    dataIndex: 'employerName',
    key: 'employerName',
    filters: [],
    filterMode: 'tree',
    filterSearch: true,
    onFilter: (value, record) => record.employerName.startsWith(value as string), //type assertion because we know the values have to be strings
  },
  {
    title: 'Employer City',
    dataIndex: 'employerCity',
    key: 'employerCity',
    filterMode: 'tree',
    filterSearch: true,
    onFilter: (value, record) => record.employerCity.startsWith(value as string), //type assertion because we know the values have to be strings
  },
  {
    title: 'Employer State',
    dataIndex: 'employerState',
    key: 'employerState',
    filterMode: 'tree',
    filterSearch: true,
    onFilter: (value, record) => record.employerState.startsWith(value as string), //type assertion because we know the values have to be strings
  },
];


// this function pulls the current column types and adds the filters to them based on the data
export const formatColumnTypesWithFilters = (columns: ColumnsType<LcaTableData>, data: LcaTableData[]): ColumnsType<LcaTableData> => {
   //function that takes all values for specific attribute in lca data and returns an array of unique values
    const getUniqueValuesFromLcaTableData = (attribute: keyof LcaTableData): (string| number)[] => {
      const values = data.map((d) => d[attribute]).filter((v) => v !== undefined);
      return [...new Set(values)];
    }

    //pulls for one specific attribute, in this case its the job title
    columns.map((column) => {
      if (column.filterMode === 'tree') {
        column.filters = getUniqueValuesFromLcaTableData(column.key as keyof LcaTableData).map((value) => ({ text: value , value: value }));
      }
    })

    return columns;
}