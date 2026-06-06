import { Component, input, computed } from '@angular/core';

@Component({
  selector: 'lib-table',
  standalone: true,
  imports: [],
  templateUrl: './table.html',
  styleUrl: './table.css',
})
export class Table {
  /** Array of objects to display as table rows. */
  data = input<Record<string, unknown>[]>([]);

  /** Optional custom column headers (defaults to object keys). */
  columns = input<string[] | undefined>(undefined);

  /** Computed column list — uses explicit columns or derives from first row. */
  displayColumns = computed(() => {
    const cols = this.columns();
    if (cols && cols.length) return cols;
    const rows = this.data();
    return rows.length ? Object.keys(rows[0]) : [];
  });

  /** Pretty-print a column key as a header label. */
  formatHeader(key: string): string {
    return key
      .replace(/([a-z])([A-Z])/g, '$1 $2') // camelCase → spaced
      .replace(/[_-]/g, ' ')                // snake/kebab → spaced
      .replace(/\b\w/g, c => c.toUpperCase()); // Title Case
  }

  /** Safely read a cell value and stringify it for display. */
  cellValue(row: Record<string, unknown>, key: string): string {
    const val = row[key];
    if (val == null) return '—';
    return String(val);
  }
}
