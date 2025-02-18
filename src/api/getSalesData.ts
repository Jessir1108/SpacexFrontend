export const fetchSalesData = async () => {
  try {
    const response = await fetch('http://ec2-3-86-71-245.compute-1.amazonaws.com:3001/sales-data');
    if (!response.ok) {
      throw new Error('Error fetching sales data from backend');
    }
    const counts = await response.json();
    return counts;
  } catch (error) {
    console.error('Error fetching sales data from backend:', error);
    return {
      success: 0,
      upcoming: 0,
      failed: 0,
    };
  }
};

export const fetchTravelsData = async () => {
  try {
    const response = await fetch('http://ec2-3-86-71-245.compute-1.amazonaws.com:3001/travels-by-year');
    if (!response.ok) {
      throw new Error('Error fetching travels data from backend');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching travels data from backend:', error);
    return {};
  }
};