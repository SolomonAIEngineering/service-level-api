import { CandlestickChart, Bitcoin, CircleDollarSign } from 'lucide-react';
import { Button } from '../ui/button';
import { cn } from 'src/lib-utils/utils';
import { InvestmentSidebarOption } from 'src/types/common/sidebar-options';

interface IProps {
  className?: React.ReactNode;
  selectedOption: InvestmentSidebarOption;
  setSelectedOption: (option: InvestmentSidebarOption) => void;
}

const InvestmentViewSidebar: React.FC<IProps> = (props) => {
  const { className, setSelectedOption } = props;
  return (
    <div className={cn('pb-12', className)}>
      <div className="py-4 space-y-4">
        <div className="px-3 py-2">
          <h2 className="px-4 mb-2 text-lg font-semibold tracking-tight">
            Details
          </h2>
          <div className="space-y-1">
            <Button
              variant="ghost"
              className="justify-start w-full"
              onClick={() => {
                setSelectedOption('OVERVIEW');
              }}
            >
              <CandlestickChart className="w-4 h-4 mr-2" />
              Overview
            </Button>
            <Button
              variant="ghost"
              className="justify-start w-full"
              onClick={() => {
                setSelectedOption('CRYPTO');
              }}
            >
              <Bitcoin className="w-4 h-4 mr-2" />
              CryptoCurrencies
            </Button>
            <Button
              variant="ghost"
              className="justify-start w-full"
              onClick={() => {
                setSelectedOption('STOCKS');
              }}
            >
              <CircleDollarSign className="w-4 h-4 mr-2" />
              Stocks
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { InvestmentViewSidebar };
