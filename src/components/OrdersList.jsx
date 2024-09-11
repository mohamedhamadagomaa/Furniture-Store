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
        total orders : {meta.pagination.total}
      </h4>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* header */}
        </table>
      </div>
    </div>
  );
};

export default OrdersList;
