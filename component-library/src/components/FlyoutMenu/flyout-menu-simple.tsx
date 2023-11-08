import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";

export type FlyoutMenuOption = {
  name: string;
  href: string;
  icon?: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
      title?: string | undefined;
      titleId?: string | undefined;
    } & React.RefAttributes<SVGSVGElement>
  >;
  description?: string;
};

const FlyoutMenuSimple: React.FC<{
  title: string;
  options: FlyoutMenuOption[];
}> = ({ title, options }) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
        >
          {title}
          <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-min -translate-x-1/2 px-4">
        <div className="w-56 shrink rounded-xl bg-white p-4 text-sm font-semibold leading-6 text-gray-900 shadow-lg ring-1 ring-gray-900/5">
          {options.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block p-2 hover:text-indigo-600"
            >
              {item.name}
            </a>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export { FlyoutMenuSimple };
