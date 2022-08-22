import React from 'react'
import styled from 'styled-components'
import { useTable } from 'react-table'

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`

function Table({ columns, data }) {
    // Use the state and functions returned from useTable to build your UI
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns,
        data,
    })

    // Render the UI for your table
    return (
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}



function ReportTable(props) {
    const columns = React.useMemo(
        () => [
            {
                Header: "Sr No",
                accessor: "srno"
            },
            {
                Header: "Company",
                accessor: "companyName"
            },
            {
                Header: "Criteria",
                columns: [
                    {
                        Header: "CGPA",
                        accessor: "cgpa"
                    },
                    {
                        Header: "Branch",
                        accessor: "branches"
                    }
                ]
            },
            {
                Header: "UG",
                columns: [
                    {
                        Header: "CE",
                        accessor: "ugCsStudentsCount"
                    },
                    {
                        Header: "E&TC",
                        accessor: "ugEntcStudentsCount"
                    },
                    {
                        Header: "IT",
                        accessor: "ugItStudentsCount"
                    }
                ]
            },
            {
                Header: "PG",
                columns: [
                    {
                        Header: "CE",
                        accessor: "pgCsStudentsCount"
                    },
                    {
                        Header: "E&TC",
                        accessor: "pgEntcStudentsCount"
                    },
                    {
                        Header: "IT",
                        accessor: "pgItStudentsCount"
                    }
                ]
            },
            {
                Header: "Total",
                columns: [
                    {
                        Header: "M",
                        accessor: "male"
                    },
                    {
                        Header: "F",
                        accessor: "female"
                    },
                    {
                        Header: "T",
                        accessor: "total"
                    }
                ]
            },
            {
                Header: "Sal LPA",
                accessor: "salary"
            },
            {
                Header: "Date visited",
                accessor: "visitDate"
            },
        ],
        []
    );

    const data = props.reportData;
    // console.log(props.reportData);

    return (
        <Styles>
            <Table columns={columns} data={data} />
        </Styles>
    )
}

export default ReportTable;