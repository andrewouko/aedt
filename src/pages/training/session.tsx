import Button from "@/components/form/Button";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { TextField } from "@mui/material";

export default function Session() {
  return (
    <DashboardLayout
      title="Session Management"
      crumbs={["Home", "Manage", "Sessions"]}
    >
      <div className="bg-white p-6">
        <div className="grid grid-flow-col auto-cols-max gap-4 border-b-2 border-gray-200 pb-5 items-center">
          <div className="text-2xl font-bold text-gray-500">Join Session</div>
          <TextField
            id="session"
            type="search"
            variant="outlined"
            placeholder="Paste Session Id here"
          />
          <Button
            onClick={() => {}}
            label="Confirm"
            type="button"
            color="yellow"
          />
        </div>
        <div className="grid grid-flow-row auto-rows-max gap-4 mt-6 pb-6">
          <div className="text-sm text-gray-500">
            A Unique Session Id will appear after creating a session. You can
            share it
          </div>
          <div className="flex items-center space-x-8">
            <div className="text-3xl font-bold text-gray-500">Create New Session</div>
            <Button
              onClick={() => {}}
              label="Create"
              type="button"
              color="pink"
            />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
