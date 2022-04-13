import Controller from '@ember/controller';
// import { html2pdf } from 'node_modules/html2pdf.js/dist/html2pdf.js';
import html2pdf from 'html2pdf.js';

export default Controller.extend({
  actions: {
    printPdf() {
      var element = document.getElementById('printInvoice');
      html2pdf(element);
    }
  }
});
