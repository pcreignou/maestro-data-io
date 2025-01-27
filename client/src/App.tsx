import React, { useEffect, useState } from "react";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import axios from 'axios';

const App: React.FC = () => {
  const [data, setData] = useState<Record<string, any>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/dataio/getAllRecords"); // Replace with your API endpoint
        setData(response.data.records);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  // Flatten nested data for better display in DataGrid
  const flattenObject = (obj: any, parentKey = ""): any => {
    return Object.entries(obj).reduce((acc: any, [key, value]) => {
      const newKey = parentKey ? `${parentKey}.${key}` : key;
      if (typeof value === "object" && value !== null && !Array.isArray(value)) {
        Object.assign(acc, flattenObject(value, newKey));
      } else {
        acc[newKey] = Array.isArray(value) ? value.join(", ") : value?.toString() ?? "";
      }
      return acc;
    }, {});
  };

  const rows = data.map((record: any, index: number) => ({ id: index + 1, ...flattenObject(record) }));

  // Mapping field names to user-friendly column headers
  const fieldNameMapping: Record<string, string> = {
    "responseHeader_overallResponse_decision": "Decision",
    "responseHeader_overallResponse_decisionText": "Decision Text",
    "responseHeader_overallResponse_decisionReasons_0": "Reason 1",
    "responseHeader_overallResponse_decisionReasons_1": "Reason 2",
    "responseHeader_overallResponse_decisionReasons_2": "Reason 3",
    "originalRequestData_application_applicants_contactId": "Applicant Contact ID",
    "originalRequestData_contacts_person_names_title": "Title",
    "originalRequestData_contacts_person_names_firstName": "First Name",
    "originalRequestData_contacts_person_names_surName": "Last Name",
    "originalRequestData_contacts_addresses_buildingNumber": "Building Number",
    "originalRequestData_contacts_addresses_street": "Street",
    "originalRequestData_contacts_addresses_postTown": "Post Town",
    "originalRequestData_contacts_addresses_postal": "Postal Code",
    "originalRequestData_contacts_bankAccount_sortCode": "Sort Code",
    "originalRequestData_contacts_bankAccount_clearAccountNumber": "Account Number",
  };

  // Dynamically create columns based on keys from the first row of data
  const columns: GridColDef[] = data.length
    ? Object.keys(flattenObject(data[0]))
    .filter((key) => key in fieldNameMapping)
    .map((key) => ({
        field: key,
        headerName: fieldNameMapping[key] || key, // Use friendly name if available, else fallback to key
        flex: 1,
        headerClassName: 'bg-gray-100',
        sortable: false,
      }))
    : [];

  return (
    <div style={{ height: 600, width: '98%', padding: '20px' }}>
      <h1 style={{ marginBottom: '20px', fontSize: '24px', fontWeight: 'bold', textAlign: 'center' }}>
        Docusign Maestro Extension App Account Verification
      </h1>
      <DataGrid 
        rows={rows} 
        columns={columns} 
        pageSize={10} 
        disableSelectionOnClick 
        sx={{
          borderRadius: 2,
          boxShadow: 2,
          border: '1px solid #ccc',
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: '#f5f5f5',
          },
        }}
      />
    </div>
  );
};


export default App;
