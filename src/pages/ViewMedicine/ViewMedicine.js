import React from 'react';
import MaterialTable from 'material-table'

export const ViewMedicine = () => {

    return (
      <MaterialTable
        title={<h1 >Medicine Store View</h1>}
        columns={[
            {
                title: 'Medicine ID', field: 'medicine_id',
                cellStyle: {
                    backgroundColor: '#039be5',
                    color: '#FFF'
                  },
                  headerStyle: {
                    backgroundColor: '#039be5',
                  }
            },
            
            {
                title: 'Medicine Name', field: 'medicine_name',
                
            },
            {
                title: 'Medicine Manufacure Date', field: 'medicine_manufactureDate',
            },
            {
                title: 'Medicine Expire Date', field: 'medicine_expireDate',
          },
            {
                title: 'Medicine Categories', field: 'medicine_categories',
          
            },
            {
                title: 'Medicine Price', field: 'medicine_price',
                
            },
        ]}
        data={[
        { medicine_id: '1', medicine_name: 'Advil', medicine_manufactureDate: '12/3/2020', medicine_expireDate: '12/3/2022', medicine_categories: 'for Adults', medicine_price: '100.00 Birr' },
        { medicine_id: '2', medicine_name: 'Paracitamol', medicine_manufactureDate: '12/3/2020', medicine_expireDate: '12/3/2022', medicine_categories: 'For pregnant', medicine_price: '100.00 Birr' },
        { medicine_id: '3', medicine_name: 'Advil', medicine_manufactureDate: '1/3/2020', medicine_expireDate: '12/3/2022', medicine_categories: 'Ratings', medicine_price: '100.00 Birr' },
        { medicine_id: '4', medicine_name: 'Paracitamol', medicine_manufactureDate: '2/3/2020', medicine_expireDate: '12/3/2022', medicine_categories: 'normalll', medicine_price: '100.00 Birr' },
        { medicine_id: '5', medicine_name: 'Advil', medicine_manufactureDate: '3/3/2020', medicine_expireDate: '12/3/2022', medicine_categories: 'normalll', medicine_price: '100.00 Birr' },
        { medicine_id: '6', medicine_name: 'Paracitamol', medicine_manufactureDate: '4/3/2020', medicine_expireDate: '12/3/2022', medicine_categories: 'normalll', medicine_price: '100.00 Birr' },
        { medicine_id: '7', medicine_name: 'Advil', medicine_manufactureDate: '5/3/2020', medicine_expireDate: '12/3/2022', medicine_categories: 'normalll', medicine_price: '100.00 Birr' },
        { medicine_id: '8', medicine_name: 'Paracitamol', medicine_manufactureDate: '6/3/2020', medicine_expireDate: '12/3/2022', medicine_categories: 'normalll', medicine_price: '100.00 Birr' },
        { medicine_id: '9', medicine_name: 'Advil', medicine_manufactureDate: '7/3/2020', medicine_expireDate: '12/3/2022', medicine_categories: 'normalll', medicine_price: '100.00 Birr' },
        { medicine_id: '10', medicine_name: 'Paracitamol', medicine_manufactureDate: '9/3/2020', medicine_expireDate: '12/3/2022', medicine_categories: 'normalll', medicine_price: '100.00 Birr' },
        { medicine_id: '11', medicine_name: 'Advil', medicine_manufactureDate: '10/3/2020', medicine_expireDate: '12/3/2022', medicine_categories: 'normalll', medicine_price: '100.00 Birr' },
        { medicine_id: '12', medicine_name: 'Paracitamol', medicine_manufactureDate: '11/3/2020', medicine_expireDate: '12/3/2022', medicine_categories: 'normalll', medicine_price: '100.00 Birr' },
        { medicine_id: '13', medicine_name: 'Advil', medicine_manufactureDate: '12/3/2020', medicine_expireDate: '12/3/2022', medicine_categories: 'normalll', medicine_price: '100.00 Birr' },
        { medicine_id: '14', medicine_name: 'Paracitamol', medicine_manufactureDate: '14/3/2020', medicine_expireDate: '12/3/2022', medicine_categories: 'normalll', medicine_price: '100.00 Birr' },
        { medicine_id: '15', medicine_name: 'Advil', medicine_manufactureDate: '15/3/2020', medicine_expireDate: '12/3/2022', medicine_categories: 'normalll', medicine_price: '100.00 Birr' },
        { medicine_id: '16', medicine_name: 'Paracitamol', medicine_manufactureDate: '16/3/2020', medicine_expireDate: '12/3/2022', medicine_categories: 'normalll', medicine_price: '100.00 Birr' },
        { medicine_id: '17', medicine_name: 'Advil', medicine_manufactureDate: '17/3/2020', medicine_expireDate: '12/3/2022', medicine_categories: 'normalll', medicine_price: '100.00 Birr' },
        { medicine_id: '18', medicine_name: 'Paracitamol', medicine_manufactureDate: '18/3/2020', medicine_expireDate: '12/3/2022', medicine_categories: 'normalll', medicine_price: '100.00 Birr' },
        { medicine_id: '19', medicine_name: 'Advil', medicine_manufactureDate: '19/3/2020', medicine_expireDate: '12/3/2022', medicine_categories: 'normalll', medicine_price: '100.00 Birr' },
        { medicine_id: '20', medicine_name: 'Paracitamol', medicine_manufactureDate: '20/3/2020', medicine_expireDate: '12/3/2022', medicine_categories: 'normalll', medicine_price: '100.00 Birr' },
        
        
        ]}        
        options={{
        headerStyle: {
                backgroundColor: '#01579b',
                color: '#FFF'
              }, 
          searchFieldvarient: "standard",
          filtering: true,
          pageSizeoptions: [3, 7, 10,], 
        pageSize: 10,
        }}
      />
    )
  }
  export default ViewMedicine