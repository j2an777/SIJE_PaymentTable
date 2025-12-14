import type { Column } from '@/types/table';

import getCellValue from './getCellValue';

const sumBy = <T>(rows: T[], col: Column<T>): number => {
  let acc = 0;
  for (const r of rows) {
    const v = getCellValue(col, r);
    if (typeof v === 'number' && Number.isFinite(v)) acc += v;
  }
  return acc;
};

export default sumBy;
