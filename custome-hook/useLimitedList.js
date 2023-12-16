import { useState, useEffect } from "react";

// Custom hook to limit the number of items in a list
const useLimitedList = (listData, limit) => {
  const [limitedList, setLimitedList] = useState([]);

  useEffect(() => {
    if (listData && Array.isArray(listData)) {
      const slicedData = listData.slice(0, limit);
      setLimitedList(slicedData);
    }
  }, [listData, limit]);

  return limitedList;
};

export default useLimitedList;
