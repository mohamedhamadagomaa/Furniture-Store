import day from "dayjs";
import React from "react";
import { useLoaderData } from "react-router-dom";
import advancedFormat from "dayjs/plugin/advancedFormat";
day.extend(advancedFormat);

const OrdersList = () => {
  const { orders, meta } = useLoaderData();

  return (
    <div className="mt-8">
      <h4 className="mb-4 capitalize">
        total orders : {meta.pagination.totals}
      </h4>
    </div>
  );
};

export default OrdersList;
