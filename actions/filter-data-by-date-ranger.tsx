import { DataPoint } from "@/lib/custom-data";

// Function to filter data by the last 'n' days
export const filterDataByDateRange = (
  data: DataPoint[],
  range: string
): DataPoint[] => {
  let days = 0;

  switch (range) {
    case "7":
      days = 7;
      break;
    case "14":
      days = 14;
      break;
    case "21":
      days = 21;
      break;
    case "30":
      days = 30;
      break;
    default:
      return data; // If range is not recognized, return all data
  }

  // Return the last 'days' entries from the data array
  return data.slice(-days);
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString); // Convert string to Date object
  return date.toLocaleDateString("en-US", {
    month: "short", 
    day: "numeric", 
  });
};
