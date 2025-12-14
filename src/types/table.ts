type Align = 'left' | 'center' | 'right';

type TableRow = {
  id: number;
  styleNo: string;
  supplierItemNo: string;
  fabricName: string;
  fabricColor: string;
  orderQty: number;
  unit: string;
  unitPrice: number;
  amount: number;
  groupKey: string;
};

type Column<T> = {
  key: string; // 컬럼 고유키입니다.
  title: React.ReactNode; // 헤더 텍스트입니다.
  dataIndex?: keyof T; // rowData
  accessor?: (row: T) => unknown; // row에서 값 추출 함수
  render?: (value: unknown, row: T, rowIndex: number) => React.ReactNode; // 셀 렌더링 커스터마이징 하도록 하는 props입니다.
  align?: Align; // 각 셀 텍스트 정렬 props입니다.
  width?: number | string; // 너비 조절 가능하기 위한 props입니다.
  ellipsis?: boolean; // 셀 너비에 대한 overflow 대비 위한 ellipsis입니다.
};

type SummarySpec<T> = {
  groupBy?: (row: T) => string; // 그룹핑 여부를 묻습니다.
  groupLabel?: React.ReactNode; // 그룹별 소계 행 라벨을 의미합니다.
  grandLabel?: React.ReactNode; // 전체 총계 행 라벨을 의미합니다.
  sumKeys?: string[]; // 집계할 컬럼 키 목록입니다.
  formatSum?: (colKey: string, sum: number) => React.ReactNode; // 합계 값에 대한 포맷터입니다.
};

export type { Align, TableRow, Column, SummarySpec };
