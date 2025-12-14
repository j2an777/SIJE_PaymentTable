import React, { useEffect, useMemo, useRef, useState } from 'react';

import * as S from './styles';

export type DropdownOption<V extends string | number> = {
  label: React.ReactNode;
  value: V;
  disabled?: boolean;
};

type SearchConfig<V extends string | number> = {
  placeholder?: string;
  /** 기본 필터: label에 query 포함(대소문자 무시) */
  filter?: (query: string, option: DropdownOption<V>) => boolean;
};

type Props<V extends string | number> = {
  value?: V;
  onChange: (value: V, option: DropdownOption<V>) => void;
  options: Array<DropdownOption<V>>;
  placeholder?: string;
  disabled?: boolean;
  width?: number | string;
  search?: false | SearchConfig<V>;
  renderValue?: (option?: DropdownOption<V>) => React.ReactNode;
};

const defaultFilter = <V extends string | number>(query: string, option: DropdownOption<V>) => {
  const q = query.trim().toLowerCase();
  if (!q) return true;

  const label = typeof option.label === 'string' || typeof option.label === 'number' ? String(option.label) : '';

  return label.toLowerCase().includes(q);
};

const findOption = <V extends string | number>(options: Array<DropdownOption<V>>, value?: V) =>
  options.find(o => o.value === value);

const Dropdown = <V extends string | number>({
  value,
  onChange,
  options,
  placeholder = 'Select...',
  disabled,
  width,
  search = false,
  renderValue,
}: Props<V>) => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const rootRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const selected = useMemo(() => findOption(options, value), [options, value]);

  const filterFn = search && search.filter ? search.filter : (q: string, o: DropdownOption<V>) => defaultFilter(q, o);

  const filteredOptions = useMemo(() => {
    if (!search) return options;
    return options.filter(o => filterFn(query, o));
  }, [options, search, query, filterFn]);

  useEffect(() => {
    if (open && search) {
      setTimeout(() => inputRef.current?.focus(), 0);
    }
  }, [open, search]);

  useEffect(() => {
    const onDocMouseDown = (e: MouseEvent) => {
      if (!open) return;
      const el = rootRef.current;
      if (!el) return;
      if (e.target instanceof Node && !el.contains(e.target)) {
        setOpen(false);
        setQuery('');
      }
    };

    document.addEventListener('mousedown', onDocMouseDown);
    return () => document.removeEventListener('mousedown', onDocMouseDown);
  }, [open]);

  const toggle = () => {
    if (disabled) return;
    setOpen(v => !v);
    if (open) setQuery('');
  };

  const handleSelect = (opt: DropdownOption<V>) => {
    if (opt.disabled) return;
    onChange(opt.value, opt);
    setOpen(false);
    setQuery('');
  };

  const display = renderValue ? renderValue(selected) : selected?.label;

  return (
    <S.Root ref={rootRef} style={{ width }}>
      <S.Trigger type="button" onClick={toggle} disabled={disabled} $open={open}>
        <S.TriggerValue $muted={!selected}>{display ?? placeholder}</S.TriggerValue>
        <S.Chevron $open={open} aria-hidden>
          ⌄
        </S.Chevron>
      </S.Trigger>

      {open && (
        <S.Menu role="listbox">
          {search && (
            <S.SearchWrap>
              <S.SearchIcon aria-hidden>⌕</S.SearchIcon>
              <S.SearchInput
                ref={inputRef}
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder={search.placeholder ?? 'Search...'}
              />
            </S.SearchWrap>
          )}

          <S.Options>
            {filteredOptions.length === 0 ? (
              <S.Empty>Nothing found</S.Empty>
            ) : (
              filteredOptions.map(opt => {
                const active = opt.value === value;
                return (
                  <S.Item
                    key={String(opt.value)}
                    type="button"
                    onClick={() => handleSelect(opt)}
                    disabled={opt.disabled}
                    $active={active}
                  >
                    {opt.label}
                  </S.Item>
                );
              })
            )}
          </S.Options>
        </S.Menu>
      )}
    </S.Root>
  );
};

export default Dropdown;
