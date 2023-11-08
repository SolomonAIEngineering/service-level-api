import { Button } from '../ui/button';
import {
  ArrowUpNarrowWide,
  BadgeDollarSign,
  BatteryChargingIcon,
  CandlestickChart,
} from 'lucide-react';
import { cn } from 'src/lib-utils/utils';
import { SubscriptionsSidebarOption } from 'src/types/common/sidebar-options';

interface SubscriptionSidebarProps {
  className?: React.ReactNode;
  setSelectedOption: (option: SubscriptionsSidebarOption) => void;
}

type OptionType = {
  type: SubscriptionsSidebarOption;
  Icon:
    | typeof CandlestickChart
    | typeof BadgeDollarSign
    | typeof BatteryChargingIcon
    | typeof ArrowUpNarrowWide;
  label: string;
};

const options: OptionType[] = [
  { type: 'OVERVIEW', Icon: CandlestickChart, label: 'Overview' },
  { type: 'INFLOW', Icon: BadgeDollarSign, label: 'Inflow' },
  { type: 'OUTFLOW', Icon: BatteryChargingIcon, label: 'Outflow' },
  { type: 'UPCOMING', Icon: ArrowUpNarrowWide, label: 'Upcoming' },
];

const SubscriptionSidebar: React.FC<SubscriptionSidebarProps> = ({
  className,
  setSelectedOption,
}) => {
  return (
    <div className={cn('pb-12', className)}>
      <div className="py-4 space-y-4">
        <div className="px-3 py-2">
          <h2 className="px-4 mb-2 text-lg font-semibold tracking-tight">
            Details
          </h2>
          <div className="space-y-1">
            {options.map(({ type, Icon, label }) => (
              <Button
                key={type}
                variant="ghost"
                className="justify-start w-full"
                onClick={() => setSelectedOption(type)}
              >
                <Icon className="w-4 h-4 mr-2" />
                {label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export { SubscriptionSidebar };
