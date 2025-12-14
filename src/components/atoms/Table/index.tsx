import React, { useMemo } from 'react';

import type { Column, SummarySpec } from '@/types/table';
import getCellValue from '@/utils/getCellValue';
import { colors } from '@/styles/colors';
import sumBy from '@/utils/sumBy';

import * as S from './styles';

const GapRow = ({ colSpan }: { colSpan: number }) => (
  <tr>
    <td colSpan={colSpan} style={{ height: 18, background: colors.white30 }} />
  </tr>
);

type Props<T> = {
  columns: Array<Column<T>>;
  data: T[];
  getRowId?: (row: T, index: number) => string | number;
  summary?: SummarySpec<T>;
  className?: string;
};

const DataTable = <T,>({ columns, data, getRowId, summary, className }: Props<T>) => {
  const grouped = useMemo(() => {
    const groupBy = summary?.groupBy;
    if (!groupBy) return [{ key: '__ALL__', rows: data }];

    const map = new Map<string, T[]>();
    for (const row of data) {
      const k = groupBy(row);
      map.set(k, [...(map.get(k) ?? []), row]);
    }
    return Array.from(map.entries()).map(([key, rows]) => ({ key, rows }));
  }, [data, summary?.groupBy]);

  const sumKeys = summary?.sumKeys ?? [];

  const grandSums = useMemo(() => {
    if (!sumKeys.length) return new Map<string, number>();
    const m = new Map<string, number>();
    for (const key of sumKeys) {
      const col = columns.find(c => c.key === key);
      if (!col) continue;
      m.set(key, sumBy(data, col));
    }
    return m;
  }, [columns, data, sumKeys]);

  return (
    <S.Wrap className={className}>
      <S.Table>
        <thead>
          <tr>
            {columns.map(c => (
              <S.Th key={c.key} $align={c.align ?? 'left'} style={{ width: c.width }}>
                {c.title}
              </S.Th>
            ))}
          </tr>
        </thead>

        <tbody>
          {grouped.map((g, gi) => {
            const groupSums = new Map<string, number>();
            if (sumKeys.length) {
              for (const key of sumKeys) {
                const col = columns.find(c => c.key === key);
                if (!col) continue;
                groupSums.set(key, sumBy(g.rows, col));
              }
            }

            return (
              <React.Fragment key={g.key}>
                {gi > 0 && <GapRow colSpan={columns.length} />}

                {g.rows.map((row, ri) => {
                  const rowKey = getRowId?.(row, ri) ?? `${g.key}-${ri}`;

                  return (
                    <S.Tr key={rowKey}>
                      {columns.map(col => {
                        const raw = getCellValue(col, row);
                        const content = col.render ? col.render(raw, row, ri) : (raw as React.ReactNode);

                        return (
                          <S.Td
                            key={col.key}
                            $align={col.align ?? 'left'}
                            $ellipsis={!!col.ellipsis}
                            title={col.ellipsis ? String(raw ?? '') : undefined}
                          >
                            {content}
                          </S.Td>
                        );
                      })}
                    </S.Tr>
                  );
                })}

                {sumKeys.length > 0 && (
                  <S.SummaryRow>
                    {columns.map((col, idx) => {
                      const isLastCol = idx === columns.length - 1;
                      const sum = groupSums.get(col.key);

                      if (idx === columns.length - 2) {
                        return (
                          <S.SummaryLabelCell key={col.key} $align="right">
                            {summary?.groupLabel ?? 'Sub.TTL'}
                          </S.SummaryLabelCell>
                        );
                      }

                      if (isLastCol) {
                        return (
                          <S.SummaryValueCell key={col.key} $align="right">
                            {typeof sum === 'number' ? summary?.formatSum?.(col.key, sum) ?? sum.toLocaleString() : ''}
                          </S.SummaryValueCell>
                        );
                      }

                      return <S.SummaryEmptyCell key={col.key} />;
                    })}
                  </S.SummaryRow>
                )}
              </React.Fragment>
            );
          })}

          {sumKeys.length > 0 && (
            <S.GrandRow>
              {columns.map((col, idx) => {
                const isLastCol = idx === columns.length - 1;
                const sum = grandSums.get(col.key);

                if (idx === columns.length - 2) {
                  return (
                    <S.GrandLabelCell key={col.key} $align="right">
                      {summary?.grandLabel ?? 'G.TTL'}
                    </S.GrandLabelCell>
                  );
                }

                if (isLastCol) {
                  return (
                    <S.GrandValueCell key={col.key} $align="right">
                      {typeof sum === 'number' ? summary?.formatSum?.(col.key, sum) ?? sum.toLocaleString() : ''}
                    </S.GrandValueCell>
                  );
                }

                return <S.GrandEmptyCell key={col.key} />;
              })}
            </S.GrandRow>
          )}
        </tbody>
      </S.Table>
    </S.Wrap>
  );
};

export default DataTable;
