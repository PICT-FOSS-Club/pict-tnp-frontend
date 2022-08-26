import jsPDF from "jspdf";
import "jspdf-autotable";

const PdfGenerator = companies => {
    // initialize jsPDF
  const doc = new jsPDF();

  // define the columns we want and their titles
  const tableColumn = ["Roll No", "College Id", "Name", "Mobile No", "Branch", "Placed Company"];
  // define an empty array of rows
  const tableRows = [];

  // for each ticket pass all its data into an array
  companies.forEach(compan => {
    const companyData = [
        compan.rollNumber,
        compan.pictRegistrationId,
        compan.firstName+" "+compan.lastName,
        compan.phone,
        compan.branch,
        "PhonePe"
    ];
    // push each tickcet's info into a row
    tableRows.push(companyData);
  });


  // startY is basically margin-top
  doc.autoTable(tableColumn, tableRows, { startY: 20 });
  const date = Date().split(" ");
  // we use a date string to generate our filename.
  const dateStr = date[0] + date[1] + date[2] + date[3] + date[4];
  // ticket title. and margin-top + margin-left
  doc.text("Placed students list", 14, 15);
  // we define the name of our PDF file.
  doc.save(`report_${dateStr}.pdf`);
}
 
export default PdfGenerator;