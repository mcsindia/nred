import React from 'react';
import { Button } from 'react-bootstrap';
import { AdminLayout } from '../../../../layouts/dms/AdminLayout/AdminLayout';

export const LoaForm = () => {
  // Function to trigger print
  const handlePrint = () => {
    window.print(); // This opens the browser's print dialog
  };

  return (
    <AdminLayout>
      <div className="loa-form-container p-3">
        <h4 className="text-center">
          <p><strong>Office of the Commissioner</strong></p>
          <p><strong>New and Renewable Energy</strong></p>
          <p>“Urja Bhawan”, Main Road No.-2, Near 5 Number Bus Stop.</p>
          <p>Phone no: 0755-3510945, Bhopal - 462 016 (M.P.)</p>
        </h4>

        {/* LOA Content */}
        <div id="loa-content" className=" p-4 bg-white">
          <p><strong>Ref No:</strong> NRE/2024-25/SOR- ----/ <span>Date: / /2024</span></p>
          <p><strong>To,</strong></p>
          <p>M/s [Company Name]</p>
          <p>[Address Line 1]</p>
          <p>[Address Line 2]</p>

          <p><strong>Sub:</strong> In-principle approval for the Registration of the Solar Power Project [MW] proposed/applied under Application No. Dated [Date].</p>

          <p><strong>Kind Attention:</strong></p>
          <p>
            This is to confirm that in-principle approval for the registration of the Solar Power Project proposed to be developed by M/s [Company Name] for a capacity of [MW] at Village [Village Name], Tehsil [Tehsil Name], District [District Name], in the state of Madhya Pradesh is hereby granted under the “Policy for implementation of Madhya Pradesh, Renewable Energy Policy- 2022”.
          </p>
          <p>
            The above in-principle approval is based on the evaluation carried out by The Office of Commissioner, New & Renewable Energy of the Proposal submitted by M/s [Company Name] for setting up the above-mentioned Project and the details submitted along with the Application, to The Office of Commissioner, New & Renewable Energy. 
            Further, this in-principle approval is subject to the fulfillment of terms, conditions, and provisions of the Policy referred to in the above paragraph.
          </p>
          
          <p>
            You are hereby requested to pay a total Registration Cum Facilitation Fee (non-refundable) of Rs. [Amount]. Out of the total Fee, an amount of Rs. [Amount] shall be deposited by way of challan as per the details mentioned below:
          </p>

          <h5>A. Cyber Treasury Details:</h5>
          <p>
            <a href="http://www.mptreasury.org/mpt/dynamic/cybertreasuryhome.htm">http://www.mptreasury.org/mpt/dynamic/cybertreasuryhome.htm</a><br />
            Department – (61) Non Conventional Energy Resources <br />
            Head of Account – 0810-00-102-0000-Solar
          </p>

          <p>
            The remaining fees of Rs. [Amount] plus GST @ 18% Rs. [Amount] i.e. a total amount of Rs. [Total Amount] shall be deposited by way of RTGS/NEFT as per the details mentioned below:
          </p>

          <h5>B. MPUVN Details:</h5>
          <p>
            Bank Name – ICICI Bank, <br />
            Branch Name – Shivaji Nagar Branch <br />
            Address – M.P. Urja Vikas Nigam Ltd., Urja Bhawan (M.P) – 462016 <br />
            Account No. – 656501700049 <br />
            IFSC Code No. – ICIC0006565
          </p>

          <p>
            It is directed to complete the Registration formalities and pay the Registration Cum Facilitation Fee within 30 working days from the date of communication. In case of failure to submit the Registration Cum Facilitation Fee within the stipulated timeline, the application for the Registration of the Project can be taken up for cancellation.
          </p>
          <ul className='salutation-list'>
          <li>Yours sincerely,</li>
          <li><strong>Avaneesh Shukla</strong></li>
          <li>Executive Engineer</li>
          <li>Project In-charge (Solar Energy)</li>
          <li>New & Renewable Energy</li>
          </ul>
          <p><strong>CC:</strong></p>
          <ul>
            <li>Accounts Officers, Office of Commissioner, New and Renewable Energy, Bhopal.</li>
            <li>CFA, Urja Vikas Nigam</li>
          </ul>
          <ul className='salutation-list'>
        <li><strong> Executive Engineer</strong></li>
        <li>New & Renewable Energy</li>
        </ul>
        </div>
        
        {/* Print Button */}
        <div className="mt-3 text-center print-button">
          <Button variant="primary" onClick={handlePrint}>Print / Save as PDF</Button>
        </div>
      </div>
    </AdminLayout>
  );
};
