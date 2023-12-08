import React, { useState } from "react";
import styles from "./css/dynimicTable.module.css";
import SwitchBtn from "../Custome Components/SwitchBtn";
import ButtonElements from "../Custome Components/ButtonElement";
import { formatDate } from "../DateFormate/formatDate";

export default function DynamicTable(props) {
  const {
    tableData,
    tableColumns,
    handleCheckboxChange,
    handelbtnAction,
    handelSwitch,
    handelUpdateAction,
  } = props;

  const handlers = {
    checkbox: handleCheckboxChange,
    delete: handelbtnAction,
    switch: handelSwitch,
    update: handelUpdateAction,
    // Add more handlers as needed based on component types
  };

  return (
    <div className={styles.table_container}>
      <div className={styles.table_wrapper}>
        <table className={styles.table}>
          <thead className={styles.tableHeader}>
            <tr className={styles.tableTr}>
              {tableColumns.map((column) => (
                <th key={column.label}>{column.label}</th>
              ))}
            </tr>
          </thead>
          <tbody className={styles.table_body}>
            {tableData.map((row, no) => (
              <tr key={row.id}>
                {tableColumns.map((column) => (
                  <td key={column.label}>
                    {renderCellContent(
                      no,
                      row[column.key],
                      row._id,
                      column.component,
                      handlers[column.component]
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Helper function to render cell content based on component type
const renderCellContent = (indexNo, data, id, componentType, handler) => {
  switch (componentType) {
    case "number":
      return indexNo + 1;
    case "text":
      return data;

    case "date":
      return formatDate(data);

    case "checkbox":
      if (handler) {
        return <p>Check box</p>;
      }

    case "switch":
      if (handler) {
        return (
          <>
            <SwitchBtn btnSatus={data} handelAction={handler} dataId={id} />
          </>
        );
      }

    case "delete":
      if (handler) {
        return (
          <>
            <ButtonElements
              label="DELETE"
              onClick={handler}
              btnDesign={"DeleteButton"}
              itemId={id}
            />
          </>
        );
      }

    case "update":
      if (handler) {
        return (
          <>
            <ButtonElements
              label="UPDATE"
              onClick={handler}
              btnDesign={"EditButton"}
              itemId={id}
            />
          </>
        );
      }

    default:
      return data;
  }
};
