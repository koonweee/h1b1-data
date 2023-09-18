import { LcaTableData } from "./formatters";
import type { ColumnsType, ColumnType } from 'antd/es/table';


export const BASE_LCA_TABLE_COLUMNS: ColumnsType<LcaTableData> = [
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
  },
  {
    title: 'Employer City',
    dataIndex: 'employerCity',
    key: 'employerCity',
  },
  {
    title: 'Employer State',
    dataIndex: 'employerState',
    key: 'employerState',
  },
];