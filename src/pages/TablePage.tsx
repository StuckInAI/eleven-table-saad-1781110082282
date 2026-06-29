import { useState } from 'react';
import clsx from 'clsx';

export default function TablePage() {
  const number = 11;
  const rows = Array.from({ length: 10 }, (_, i) => i + 1);
  const [highlighted, setHighlighted] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-amber-50 to-yellow-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden w-full max-w-md">
        {/* Header */}
        <div className="bg-gradient-to-r from-yellow-500 to-amber-500 px-8 py-6 text-center">
          <h1 className="text-4xl font-extrabold text-white tracking-wide">
            Table of {number}
          </h1>
          <p className="text-yellow-50 mt-1 text-sm">
            Hover over a row to highlight
          </p>
        </div>

        {/* Table */}
        <div className="p-6">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-yellow-50">
                <th className="py-3 px-4 text-left text-yellow-700 font-semibold text-sm uppercase tracking-wider rounded-tl-xl">
                  Multiplier
                </th>
                <th className="py-3 px-4 text-center text-yellow-700 font-semibold text-sm uppercase tracking-wider">
                  Operation
                </th>
                <th className="py-3 px-4 text-right text-yellow-700 font-semibold text-sm uppercase tracking-wider rounded-tr-xl">
                  Result
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((multiplier) => {
                const result = number * multiplier;
                const isHighlighted = highlighted === multiplier;
                return (
                  <tr
                    key={multiplier}
                    onMouseEnter={() => setHighlighted(multiplier)}
                    onMouseLeave={() => setHighlighted(null)}
                    className={clsx(
                      'transition-colors duration-150 cursor-pointer border-b border-gray-100 last:border-b-0',
                      isHighlighted
                        ? 'bg-yellow-500'
                        : multiplier % 2 === 0
                        ? 'bg-gray-50 hover:bg-yellow-50'
                        : 'bg-white hover:bg-yellow-50'
                    )}
                  >
                    <td
                      className={clsx(
                        'py-4 px-4 font-bold text-lg',
                        isHighlighted ? 'text-white' : 'text-gray-700'
                      )}
                    >
                      {multiplier}
                    </td>
                    <td
                      className={clsx(
                        'py-4 px-4 text-center font-mono text-base',
                        isHighlighted ? 'text-yellow-50' : 'text-gray-500'
                      )}
                    >
                      {number} &times; {multiplier}
                    </td>
                    <td
                      className={clsx(
                        'py-4 px-4 text-right font-extrabold text-xl',
                        isHighlighted ? 'text-white' : 'text-yellow-600'
                      )}
                    >
                      {result}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-8 py-4 text-center">
          <p className="text-gray-400 text-xs">
            {number} &times; 1 through {number} &times; 10
          </p>
        </div>
      </div>
    </div>
  );
}
