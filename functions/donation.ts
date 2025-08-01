import { DonationStatus, AcceptMethod } from '../constants';

// convert donation status to display text and style
export const getStatusDisplay = (status: number | string) => {
  const statusNum = typeof status === 'string' ? parseInt(status) : status;
  
  switch (statusNum) {
    case DonationStatus.Pending:
      return {
        text: "Pending",
        className: "bg-gray-100 text-gray-600 rounded-sm"
      };
    case DonationStatus.Processing:
      return {
        text: "Processing",
        className: "bg-amber-100 text-yellow-600 rounded-sm"
      };
    case DonationStatus.Successful:
      return {
        text: "Successful",
        className: "bg-green-100 text-green-600 rounded-sm"
      };
    case DonationStatus.Failed:
      return {
        text: "Failed",
        className: "bg-red-100 text-red-600 rounded-sm"
      };
    case DonationStatus.Refunded:
      return {
        text: "Refunded",
        className: "bg-blue-100 text-blue-600 rounded-sm"
      };
    case DonationStatus.Cancelled:
      return {
        text: "Cancelled",
        className: "bg-gray-100 text-gray-600 rounded-sm"
      };
    default:
      return {
        text: "Unknown",
        className: "bg-gray-100 text-gray-600 rounded-sm"
      };
  }
};

// convert accept method to display text
export const getMethodDisplay = (method: number | string) => {
  const methodNum = typeof method === 'string' ? parseInt(method) : method;
  
  switch (methodNum) {
    case AcceptMethod.Crypto:
      return "Crypto";
    case AcceptMethod.Cash:
      return "Cash";
    case AcceptMethod['Both crypto and cash']:
      return "Both crypto and cash";
    default:
      return "Unknown";
  }
};
