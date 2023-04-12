/*Author: Sumit Kumar B00904097*/
import { Items } from './../../interfaces/InvoiceDetails';
import { InvoiceService } from './../../services/invoice.service';
import { Component, OnInit } from '@angular/core';

import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { BillingAddress, InvoiceDetail } from 'src/app/interfaces/InvoiceDetails';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {

  displayedColumns: string[] = ['invoice', 'date', 'total', 'paid', 'owing', 'print', 'download'];
  dataSource!: InvoiceDetail[];

  constructor(private invoiceService: InvoiceService) { }

  ngOnInit(): void {
    this.invoiceService.getAllInvoices().subscribe((data: any) => {
      const invoices = data.filter((item: any) => item.userid === localStorage.getItem('userid'));
      this.dataSource = invoices;
    });
  }

  generatePDF(action: string, _id: string) {
    const invoiceData = this.dataSource.filter((item: InvoiceDetail) => item._id === _id)[0];
    let documentDefinition: any = {
      content: [
        {
          columns: [
            {
              image: 'data:image/jpeg;base64,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',
              width: 200,
              height: 200
            },
            [
              {
                text: 'Receipt',
                color: '#333333',
                width: '*',
                fontSize: 28,
                bold: true,
                alignment: 'right',
                margin: [0, 0, 0, 15],
              },
              {
                stack: [
                  {
                    columns: [
                      {
                        text: 'Receipt No.',
                        color: '#aaaaab',
                        bold: true,
                        width: '*',
                        fontSize: 12,
                        alignment: 'right',
                      },
                      {
                        text: invoiceData._id.substr(-5).toUpperCase(),
                        bold: true,
                        color: '#333333',
                        fontSize: 12,
                        alignment: 'right',
                        width: 100,
                      },
                    ],
                  },
                  {
                    columns: [
                      {
                        text: 'Date Issued',
                        color: '#aaaaab',
                        bold: true,
                        width: '*',
                        fontSize: 12,
                        alignment: 'right',
                      },
                      {
                        text: this.getBookingDate(invoiceData.date),
                        bold: true,
                        color: '#333333',
                        fontSize: 12,
                        alignment: 'right',
                        width: 100,
                      },
                    ],
                  },
                  {
                    columns: [
                      {
                        text: 'Status',
                        color: '#aaaaab',
                        bold: true,
                        fontSize: 12,
                        alignment: 'right',
                        width: '*',
                      },
                      {
                        text: invoiceData.paid == invoiceData.total ? 'PAID' : 'PENDING',
                        bold: true,
                        fontSize: 14,
                        alignment: 'right',
                        color: invoiceData.paid == invoiceData.total ? 'green' : 'red',
                        width: 100,
                      },
                    ],
                  },
                ],
              },
            ],
          ],
        },
        {
          columns: [
            {
              text: 'From',
              color: '#aaaaab',
              bold: true,
              fontSize: 14,
              alignment: 'left',
              margin: [0, 20, 0, 5],
            },
            {
              text: 'To',
              color: '#aaaaab',
              bold: true,
              fontSize: 14,
              alignment: 'left',
              margin: [0, 20, 0, 5],
            },
          ],
        },
        {
          columns: [
            {
              text: 'Dalhousie Athletics and Recreation',
              bold: true,
              color: '#333333',
              alignment: 'left',
            },
            {
              text: invoiceData.billingAddress.name,
              bold: true,
              color: '#333333',
              alignment: 'left',
            },
          ],
        },
        {
          columns: [
            {
              text: 'Address',
              color: '#aaaaab',
              bold: true,
              margin: [0, 7, 0, 3],
            },
            {
              text: 'Address',
              color: '#aaaaab',
              bold: true,
              margin: [0, 7, 0, 3],
            },
          ],
        },
        {
          columns: [
            {
              text: '6260 South Street, PO BOX 15000,\nHalifax, Nova Scotia, B3H 4R2',
              style: 'invoiceBillingAddress',
            },
            {
              text: this.getBillingAddress(invoiceData.billingAddress),
              style: 'invoiceBillingAddress',
            },
          ],
        },
        '\n\n',
        {
          width: '100%',
          alignment: 'center',
          text: 'Invoice No. ' + invoiceData._id.substr(-5).toUpperCase(),
          bold: true,
          margin: [0, 10, 0, 10],
          fontSize: 15,
        },
        {
          layout: {
            defaultBorder: false,
            hLineWidth: function (i: any, node: any) {
              return 1;
            },
            vLineWidth: function (i: any, node: any) {
              return 1;
            },
            hLineColor: function (i: any, node: any) {
              if (i === 1 || i === 0) {
                return '#bfdde8';
              }
              return '#eaeaea';
            },
            vLineColor: function (i: any, node: any) {
              return '#eaeaea';
            },
            hLineStyle: function (i: any, node: any) {
              // if (i === 0 || i === node.table.body.length) {
              return null;
              //}
            },
            // vLineStyle: function (i: any, node: any) { return {dash: { length: 10, space: 4 }}; },
            paddingLeft: function (i: any, node: any) {
              return 10;
            },
            paddingRight: function (i: any, node: any) {
              return 10;
            },
            paddingTop: function (i: any, node: any) {
              return 2;
            },
            paddingBottom: function (i: any, node: any) {
              return 2;
            },
            fillColor: function (rowIndex: any, node: any, columnIndex: any) {
              return '#fff';
            },
          },
          table: {
            headerRows: 1,
            widths: ['*', 80],
            body: this.getBookingdata(invoiceData.items),
          },
        },
        '\n',
        '\n\n',
        {
          layout: {
            defaultBorder: false,
            hLineWidth: function (i: any, node: any) {
              return 1;
            },
            vLineWidth: function (i: any, node: any) {
              return 1;
            },
            hLineColor: function (i: any, node: any) {
              return '#eaeaea';
            },
            vLineColor: function (i: any, node: any) {
              return '#eaeaea';
            },
            hLineStyle: function (i: any, node: any) {
              // if (i === 0 || i === node.table.body.length) {
              return null;
              //}
            },
            // vLineStyle: function (i: any, node: any) { return {dash: { length: 10, space: 4 }}; },
            paddingLeft: function (i: any, node: any) {
              return 10;
            },
            paddingRight: function (i: any, node: any) {
              return 10;
            },
            paddingTop: function (i: any, node: any) {
              return 3;
            },
            paddingBottom: function (i: any, node: any) {
              return 3;
            },
            fillColor: function (rowIndex: any, node: any, columnIndex: any) {
              return '#fff';
            },
          },
          table: {
            headerRows: 1,
            widths: ['*', 'auto'],
            body: [
              [
                {
                  text: 'Payment Subtotal',
                  border: [false, true, false, true],
                  alignment: 'right',
                  margin: [0, 5, 0, 5],
                },
                {
                  border: [false, true, false, true],
                  text: this.formatCurrency(invoiceData.subTotal),
                  alignment: 'right',
                  fillColor: '#f5f5f5',
                  margin: [0, 5, 0, 5],
                },
              ],
              [
                {
                  text: 'HST 15.000 %',
                  border: [false, false, false, true],
                  alignment: 'right',
                  margin: [0, 5, 0, 5],
                },
                {
                  text: this.formatCurrency(invoiceData.tax),
                  border: [false, false, false, true],
                  fillColor: '#f5f5f5',
                  alignment: 'right',
                  margin: [0, 5, 0, 5],
                },
              ],
              [
                {
                  text: 'Total Amount',
                  bold: true,
                  fontSize: 20,
                  alignment: 'right',
                  border: [false, false, false, true],
                  margin: [0, 5, 0, 5],
                },
                {
                  text: this.formatCurrency(parseFloat(invoiceData.total)),
                  bold: true,
                  fontSize: 20,
                  alignment: 'right',
                  border: [false, false, false, true],
                  fillColor: '#f5f5f5',
                  margin: [0, 5, 0, 5],
                },
              ],
            ],
          },
        },
        '\n\n',
        {
          text: 'SEE YOU SOON',
          style: 'notesTitle',
        },
        {
          text: 'Thank you for choosing Dalplex\nWe wish to see you again',
          style: 'notesText',
        },
      ],
      styles: {
        notesTitle: {
          fontSize: 10,
          bold: true,
          margin: [0, 50, 0, 3],
        },
        notesText: {
          fontSize: 10,
        },
      }
    };
    if (action == 'print') {
      pdfMake.createPdf(documentDefinition).print();
    } else if (action == 'download') {
      pdfMake.createPdf(documentDefinition).download();
    } else {
      pdfMake.createPdf(documentDefinition).open();
    }
  }

  getBookingDate(dateString: string) {
    const date = new Date(dateString);
    const bookingDate = `${date.toLocaleString('default', { month: 'short' })}-${date.getDate()}-${date.getFullYear()}`;
    return bookingDate;
  }

  getBillingAddress(billingAddress: BillingAddress) {    
    const formattedAddress = `${billingAddress.street}, ${billingAddress.apt},\n${billingAddress.city}, ${billingAddress.province},\n${billingAddress.postal}`;
    return formattedAddress;
  }

  formatCurrency(amount: any) {
    return parseFloat(amount).toLocaleString("en-US", { style: "currency", currency: "USD" });
  }

  getBookingdata(items: Items[]) {
    let bookingData = [];
    bookingData.push([
      {
        text: 'ITEM DESCRIPTION',
        fillColor: '#eaf2f5',
        border: [false, true, false, true],
        margin: [0, 5, 0, 5],
        textTransform: 'uppercase',
      },
      {
        text: 'ITEM TOTAL',
        border: [false, true, false, true],
        alignment: 'right',
        fillColor: '#eaf2f5',
        margin: [0, 5, 0, 5],
        textTransform: 'uppercase',
      },
    ]);

    items.forEach((element: Items) => {
      let item = [];
      item.push({
        text: element.program,
        border: [false, false, false, true],
        margin: [0, 5, 0, 5],
        alignment: 'left',
      });
      item.push({
        border: [false, false, false, true],
        text: this.formatCurrency(parseFloat(element.price)),
        fillColor: '#f5f5f5',
        alignment: 'right',
        margin: [0, 5, 0, 5],
      });
      bookingData.push(item);
    });

    return bookingData;
  }

}
