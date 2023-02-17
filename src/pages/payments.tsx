import DashboardLayout from "@/components/layout/DashboardLayout";
import { Payment, SubscriptionType } from "@/types";
import { Chip, Link } from "@mui/material";
import {
    DataGrid,
    GridColDef,
    GridRenderCellParams,
    GridRowsProp,
    GridToolbar
} from "@mui/x-data-grid";
import { parsePhoneNumber } from "libphonenumber-js";
import React from "react";

export default function Payments() {
  return (
    <DashboardLayout title="Payments" crumbs={["Payments", "All Payments"]}>
      <div style={{ height: 600, width: "100%" }} className="bg-white p-6">
        <PaymentsDataGrid />
      </div>
    </DashboardLayout>
  );
}

const payments: Payment[] = [
  {
    ref: "REF9823",
    subscriber_name: "Paul J. Friend",
    phone: { number: "937-330-1634", country_code: "US" },
    email: "pauljfrnd@jourrapide.com",
    amount: 1000,
    date: new Date("07/07/2018"),
    subscription_type: "basic",
  },
  {
    ref: "REF0123",
    subscriber_name: "Bryan J Luellen",
    phone: { number: "215-302-3376", country_code: "US" },
    email: "bryuellen@dayrep.com",
    amount: 1000,
    date: new Date("09/12/2018"),
    subscription_type: "basic",
  },
  {
    ref: "REF3223",
    subscriber_name: "Zara Raws",
    phone: { number: "(02)75150655", country_code: "GB" },
    email: "austin@dayrep.com",
    amount: 2000,
    date: new Date("07/15/2018"),
    subscription_type: "silver",
  },
  {
    ref: "REF463",
    subscriber_name: "Annette P. Kelsch",
    phone: { number: "(+15)73483758", country_code: "US" },
    email: "annette@email.net",
    amount: 2000,
    date: new Date("09/05/2018"),
    subscription_type: "silver",
  },
  {
    ref: "REF0233",
    subscriber_name: "Kathryn S. Collier",
    phone: { number: "828-216-2190", country_code: "US" },
    email: "collier@jourrapide.com",
    amount: 3000,
    date: new Date("06/30/2018"),
    subscription_type: "gold",
  },
  {
    ref: "REF1123",
    subscriber_name: "Timothy Kauper",
    phone: { number: "(216) 75 612 706", country_code: "US" },
    email: "thykauper@rhyta.com",
    amount: 3000,
    date: new Date("09/08/2018"),
    subscription_type: "gold",
  },
  {
    ref: "REF3453",
    subscriber_name: "Jenny C. Gero",
    phone: { number: "078 7173 9261", country_code: "US" },
    email: "jennygero@teleworm.us",
    amount: 3000,
    date: new Date("08/02/2018"),
    subscription_type: "gold",
  },
];

const rows: GridRowsProp = payments.map((payment: Payment, index: number) => {
  const parsed_phone = parsePhoneNumber(
    payment.phone.number,
    payment.phone.country_code
  );
  return (({ phone, ...o }) => ({
    ...o,
    phone: parsed_phone.formatInternational(),
    id: index + 1,
  }))(payment);
});

const columns: GridColDef[] = [
  {
    field: "ref",
    headerName: "Payment REF",
    renderCell: (params: GridRenderCellParams) => {
      return (
        <div className="font-semibold">
          {params.row.ref}
        </div>
      );
    },
  },
  {
    field: "subscriber_name",
    headerName: "Subscriber Name",
  },
  {
    field: "phone",
    headerName: "Phone",
    renderCell: (params: GridRenderCellParams) => {
      const parsed_phone = parsePhoneNumber(params.row.phone);
      return (
        <Link href={parsed_phone.getURI()}>
          {parsed_phone.formatInternational()}
        </Link>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    type: "number",
  },
  {
    field: "amount",
    headerName: "Amount",
    type: "number",
  },
  {
    field: "date",
    headerName: "Date",
    type: "date",
  },
  {
    field: "subscription_type",
    headerName: "Subscription Type",
    renderCell: (params: GridRenderCellParams) => {
      const className = {
        basic: `bg-blue-200 text-blue-500`,
        silver: `bg-gray-200 text-gray-500`,
        gold: `bg-yellow-200 text-yellow-500`,
      };
      return (
        <Chip
          color="primary"
          size="small"
          label={
            params.row.subscription_type.charAt(0).toUpperCase() +
            params.row.subscription_type.slice(1)
          }
          className={`hover:cursor-pointer text-xs font-semibold ${
            className[params.row.subscription_type as SubscriptionType]
          }`}
        />
      );
    },
  },
].map((col: GridColDef) => {
  col.flex = 1;
  col.headerAlign = "center";
  col.align = "center";
  return col;
});

function PaymentsDataGrid() {
  const [pageSize, setPageSize] = React.useState<number>(5);
  return (
    <DataGrid
      rows={rows}
      columns={columns}
      checkboxSelection
      disableSelectionOnClick
      sx={{
        ".MuiDataGrid-columnSeparator": {
          display: "none",
        },
        "&.MuiDataGrid-root": {
          border: "none",
        },
      }}
      getRowClassName={(params) =>
        `even:bg-white odd:bg-gray-100 border-t border-b border-slate-300 py-4 items-center`
      }
      components={{ Toolbar: GridToolbar }}
      pageSize={pageSize}
      onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
      rowsPerPageOptions={[5, 10, 20]}
      className="text-gray-500 text-base"
    />
  );
}
