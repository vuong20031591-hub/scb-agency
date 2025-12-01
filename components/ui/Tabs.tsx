'use client';

import { useState, useCallback } from 'react';
import { cn } from '@/lib/utils';
import type { TabsProps } from '@/types';

export function Tabs({ tabs, defaultTab, onChange }: TabsProps) {
  const [activeTab, setActiveTab] = useState<string>(() => {
    return defaultTab || (tabs.length > 0 ? tabs[0].id : '');
  });

  const handleTabChange = useCallback((tabId: string) => {
    setActiveTab(tabId);
    onChange?.(tabId);
  }, [onChange]);

  const activeTabContent = tabs.find((tab) => tab.id === activeTab)?.content;

  return (
    <div>
      {/* Tab Headers */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => handleTabChange(tab.id)}
            className={cn(
              'px-4 py-2 rounded-full font-medium transition-all duration-300',
              activeTab === tab.id
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-text-secondary hover:bg-gray-200'
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTabContent && (
        <div className="tab-content">
          {activeTabContent}
        </div>
      )}
    </div>
  );
}

export default Tabs;
