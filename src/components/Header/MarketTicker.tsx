import React from 'react';
import { MARKET_COMMODITIES } from '../../data/newspaperData';
import { TrendingUp, TrendingDown, DollarSign } from 'lucide-react';

export const MarketTicker: React.FC = () => {
  return (
    <div className="w-full bg-[var(--bg-paper-card)] border-b border-[var(--border-dark)] py-1.5 px-4 font-typewriter text-[11px] overflow-x-auto no-scrollbar">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 min-w-max">
        
        <div className="flex items-center gap-1 font-bold uppercase tracking-wider text-[var(--text-muted)] shrink-0 border-r border-[var(--border-light)] pr-3">
          <DollarSign className="w-3.5 h-3.5" />
          <span>TECH STOCKS:</span>
        </div>

        <div className="flex items-center gap-6 flex-1 justify-around">
          {MARKET_COMMODITIES.map((stock) => (
            <div key={stock.symbol} className="flex items-center gap-2 group cursor-pointer hover:bg-[var(--bg-accent)] px-2 py-0.5 rounded-xs transition-colors">
              <span className="font-bold text-[var(--text-main)] group-hover:underline">
                {stock.symbol}
              </span>
              <span className="text-[var(--text-muted)]">{stock.price}</span>
              <span className={`flex items-center font-bold text-[10px] ${stock.isUp ? 'text-emerald-700 dark:text-emerald-400' : 'text-rose-700 dark:text-rose-400'}`}>
                {stock.isUp ? <TrendingUp className="w-3 h-3 mr-0.5 inline" /> : <TrendingDown className="w-3 h-3 mr-0.5 inline" />}
                {stock.change}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
