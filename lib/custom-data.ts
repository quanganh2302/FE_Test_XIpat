export interface DataPoint {
  date: string;
  customer: number;
}

// Function to generate data for the last 30 days
export const generateLast30DaysData = (): DataPoint[] => {
  const data: DataPoint[] = [];
  const today = new Date();

  for (let i = 0; i < 30; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() - i); // Set the date to the past i days
    const customer = Math.floor(Math.random() * 100); // Random value between 0 and 100

    data.push({
      date: date.toISOString().split("T")[0], // Format as YYYY-MM-DD
      customer,
    });
  }

  return data.reverse(); // Reverse to show oldest to newest
};
