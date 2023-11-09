import { NavigationItem } from 'src/components/Headers/header-with-stacked-flyout-menu';
import { Card } from 'src/components/ui/card';
import { cn } from 'src/lib-utils/utils';

export interface SidebarBasicProps {
  navigationItems: NavigationItem[];
  userName: string;
  userProfileImage: string;
  className?: string;
  disableImage?: boolean;
}

export const SidebarBasic: React.FC<SidebarBasicProps> = ({
  navigationItems,
  userName,
  userProfileImage,
  className,
  disableImage,
}) => {
  return (
    <Card
      className={cn(
        'flex grow flex-col gap-y-5 overflow-y-auto bg-black px-6',
        className,
      )}
    >
      <div className="flex items-center h-16 shrink-0"></div>
      <nav className="flex flex-col flex-1">
        <ul role="list" className="flex flex-col flex-1 gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {navigationItems.map((item) => (
                <li key={item.name}>
                  <p
                    className={cn(
                      item.current
                        ? 'bg-white text-black'
                        : 'text-white hover:text-white hover:bg-black',
                      'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold',
                    )}
                  >
                    <item.icon
                      className={cn(
                        item.current
                          ? 'text-black'
                          : 'text-white group-hover:text-white',
                        'h-6 w-6 shrink-0',
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </p>
                </li>
              ))}
            </ul>
          </li>

          {disableImage === false && (
            <li className="mt-auto -mx-6">
              <div className="flex items-center px-6 py-3 text-sm font-semibold leading-6 text-white gap-x-4 hover:bg-black">
                <img
                  className="w-8 h-8 bg-black rounded-full"
                  src={userProfileImage}
                  alt=""
                />
                <span className="sr-only">Your profile</span>
                <span aria-hidden="true">{userName}</span>
              </div>
            </li>
          )}
        </ul>
      </nav>
    </Card>
  );
};
