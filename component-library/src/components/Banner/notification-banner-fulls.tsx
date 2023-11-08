import { Card } from '../ui/card';

export default function NotificationBannerSimple({
  position = 'bottom',
  centered = false,
  fullScreen = false,
  marginLeft = false,
  message = '',
} = {}) {
  const baseStyles =
    'pointer-events-none fixed inset-x-0 px-6 p-6 ring-1 ring-gray-900/10';
  const bannerPosition = position === 'bottom' ? 'bottom-0' : 'top-0';
  const bannerCentered = centered ? 'mx-auto' : '';
  const bannerFullScreen = fullScreen
    ? 'flex flex-col justify-between gap-x-8 gap-y-4 md:flex-row md:items-center'
    : '';
  const bannerMarginLeft = marginLeft ? 'ml-auto' : '';

  return (
    <div className={`${baseStyles} ${bannerPosition} ${bannerFullScreen}`}>
      <Card
        className={`pointer-events-auto max-w-xl rounded-xl border-4 border-white bg-white p-6 shadow-lg ${bannerCentered} ${bannerMarginLeft}`}
      >
        <p className="text-sm leading-6 text-gray-900">{message}</p>
        <div className="flex items-center mt-4 gap-x-5">
          <button
            type="button"
            className="px-3 py-2 text-sm font-semibold text-white bg-gray-900 rounded-md shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
          >
            Accept
          </button>
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Reject
          </button>
        </div>
      </Card>
    </div>
  );
}
