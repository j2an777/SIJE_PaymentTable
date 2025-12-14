import type { Column } from '@/types/table';

const getCellValue = <T>(col: Column<T>, row: T) => {
  if (col.accessor) return col.accessor(row);
  if (col.dataIndex) return row[col.dataIndex];
  return undefined;
};

export default getCellValue;
