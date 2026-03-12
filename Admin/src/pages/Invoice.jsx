import React from 'react'
import Footer from '../common/Footer';

function Invoice() {
  return (
   <>
          <div className="page-wrapper">
  {/* Page Content*/}
  <div className="page-content">
    <div className="container-fluid"> 
      <div className="row">
        <div className="col-sm-12">
          <div className="page-title-box d-md-flex justify-content-md-between align-items-center">
            <h4 className="page-title">Invoice</h4>
            <div className>
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item"><a href="#">Approx</a>
                </li>{/*end nav-item*/}
                <li className="breadcrumb-item"><a href="#">Apps</a>
                </li>{/*end nav-item*/}
                <li className="breadcrumb-item active">Invoice</li>
              </ol>
            </div>                                
          </div>{/*end page-title-box*/}
        </div>{/*end col*/}
      </div>{/*end row*/}
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body bg-black rounded-top"> 
              <div className="row">
                <div className="col-4 align-self-center">                                                
                  <img src="assets/images/logo-sm.png" alt="logo-small" className="logo-sm me-1" height={70} /> 
                </div>{/*end col*/}    
                <div className="col-8 text-end align-self-center">                                                
                  <h5 className="mb-1 fw-semibold text-white"><span className="text-muted">Invoice:</span> #BBN2351D458</h5> 
                  <h5 className="mb-0 fw-semibold text-white"><span className="text-muted">Issue Date:</span> 20/07/2024</h5> 
                </div>{/*end col*/}    
              </div>{/*end row*/}     
            </div>{/*end card-body*/}
            <div className="card-body">
              <div className="row row-cols-3 d-flex justify-content-md-between">
                <div className="col-md-3 d-print-flex align-self-center">
                  <div className>
                    <span className="badge rounded text-dark bg-light">Invoice to</span>
                    <h5 className="my-1 fw-semibold fs-18">Michael Reyes</h5>
                    <p className="text-muted ">@Michael_Reyes|+1 123 456 789</p>
                  </div>
                </div>{/*end col*/} 
                <div className="col-md-3 d-print-flex align-self-center">                                            
                  <div className>
                    <address className="fs-13">
                      <strong className="fs-14">Billed To :</strong><br />
                      854 Ave Folsom <br />
                      San Francisco, CA 36925<br />
                      <abbr title="Phone">P:</abbr> (123) 456-7890
                    </address>
                  </div>
                </div>{/*end col*/} 
                <div className="col-md-3 d-print-flex align-self-center">
                  <div className>
                    <address className="fs-13">
                      <strong className="fs-14">Shipped To:</strong><br />
                      795 Folsom Ave<br />
                      San Francisco, CA 94107<br />
                      <abbr title="Phone">P:</abbr> (123) 456-7890
                    </address>
                  </div>
                </div> {/*end col*/}                       
              </div>{/*end row*/}
              <div className="row">
                <div className="col-lg-12">
                  <div className="table-responsive project-invoice">
                    <table className="table table-bordered mb-0">
                      <thead className="table-light">
                        <tr>
                          <th>Project Breakdown</th>
                          <th>Hours</th>
                          <th>Rate</th> 
                          <th>Subtotal</th>
                        </tr>{/*end tr*/}
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <h5 className="mt-0 mb-1 fs-14">Project Design</h5>
                            <p className="mb-0 text-muted">It is a long established fact that a reader will be distracted.</p>
                          </td>
                          <td>60</td>
                          <td>$50</td>
                          <td>$3000.00</td>
                        </tr>{/*end tr*/}
                        <tr>
                          <td>
                            <h5 className="mt-0 mb-1 fs-14">Development</h5>
                            <p className="mb-0 text-muted">It is a long established fact that a reader will be distracted.</p>
                          </td>
                          <td>100</td>
                          <td>$50</td>
                          <td>$5000.00</td>
                        </tr>{/*end tr*/}
                        <tr>
                          <td>
                            <h5 className="mt-0 mb-1 fs-14">Testing &amp; Bug Fixing</h5>
                            <p className="mb-0 text-muted">It is a long established fact that a reader will be distracted.</p>
                          </td>
                          <td>10</td>
                          <td>$20</td>
                          <td>$200.00</td>
                        </tr>{/*end tr*/}
                        <tr>                                                        
                          <td colSpan={1} className="border-0" />
                          <td colSpan={2} className="border-0 fs-14 text-dark"><b>Sub Total</b></td>
                          <td className="border-0 fs-14 text-dark"><b>$82,000.00</b></td>
                        </tr>{/*end tr*/}
                        <tr>
                          <th colSpan={1} className="border-0" />                                                        
                          <td colSpan={2} className="border-0 fs-14 text-dark"><b>Tax Rate</b></td>
                          <td className="border-0 fs-14 text-dark"><b>$0.00%</b></td>
                        </tr>{/*end tr*/}
                        <tr className>
                          <th colSpan={1} className="border-0" />                                                        
                          <td colSpan={2} className="border-0 fs-14"><b>Total</b></td>
                          <td className="border-0 fs-14"><b>$82,000.00</b></td>
                        </tr>{/*end tr*/}
                      </tbody>
                    </table>{/*end table*/}
                  </div>  {/*end /div*/}                                          
                </div>  {/*end col*/}                                      
              </div>{/*end row*/}
              <div className="row">
                <div className="col-lg-6">
                  <h5 className="mt-4">Terms And Condition :</h5>
                  <ul className="ps-3">
                    <li><small className="fs-12">All accounts are to be paid within 7 days from receipt of invoice. </small></li>
                    <li><small className="fs-12">To be paid by cheque or credit card or direct payment online.</small></li>
                    <li><small className="fs-12"> If account is not paid within 7 days the credits details supplied as confirmation of work undertaken will be charged the agreed quoted fee noted above.</small></li>                                            
                  </ul>
                </div> {/*end col*/}                                       
                <div className="col-lg-6 align-self-center">
                  <div className="float-none float-md-end" style={{width: '30%'}}>
                    <small>Account Manager</small>
                    <img src="assets/images/extra/signature.png" alt className="mt-2 mb-1" height={24} />
                    <p className="border-top">Signature</p>
                  </div>
                </div>{/*end col*/}
              </div>{/*end row*/}
              <hr />
              <div className="row d-flex justify-content-center">
                <div className="col-lg-12 col-xl-4 ms-auto align-self-center">
                  <div className="text-center"><small className="fs-12">Thank you very much for doing business with us.</small></div>
                </div>{/*end col*/}
                <div className="col-lg-12 col-xl-4">
                  <div className="float-end d-print-none mt-2 mt-md-0">
                    <a href="javascript:window.print()" className="btn btn-info">Print</a>
                    <a href="#" className="btn btn-primary">Submit</a>
                    <a href="#" className="btn btn-danger">Cancel</a>
                  </div>
                </div>{/*end col*/}
              </div>{/*end row*/}
            </div>
          </div>
        </div> {/* end col */}
      </div> {/* end row */}                                     
    </div>{/* container */}
    {/*Start Rightbar*/}
    {/*Start Rightbar/offcanvas*/}
    <div className="offcanvas offcanvas-end" tabIndex={-1} id="Appearance" aria-labelledby="AppearanceLabel">
      <div className="offcanvas-header border-bottom justify-content-between">
        <h5 className="m-0 font-14" id="AppearanceLabel">Appearance</h5>
        <button type="button" className="btn-close text-reset p-0 m-0 align-self-center" data-bs-dismiss="offcanvas" aria-label="Close" />
      </div>
      <div className="offcanvas-body">  
        <h6>Account Settings</h6>
        <div className="p-2 text-start mt-3">
          <div className="form-check form-switch mb-2">
            <input className="form-check-input" type="checkbox" id="settings-switch1" />
            <label className="form-check-label" htmlFor="settings-switch1">Auto updates</label>
          </div>{/*end form-switch*/}
          <div className="form-check form-switch mb-2">
            <input className="form-check-input" type="checkbox" id="settings-switch2" defaultChecked />
            <label className="form-check-label" htmlFor="settings-switch2">Location Permission</label>
          </div>{/*end form-switch*/}
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="settings-switch3" />
            <label className="form-check-label" htmlFor="settings-switch3">Show offline Contacts</label>
          </div>{/*end form-switch*/}
        </div>{/*end /div*/}
        <h6>General Settings</h6>
        <div className="p-2 text-start mt-3">
          <div className="form-check form-switch mb-2">
            <input className="form-check-input" type="checkbox" id="settings-switch4" />
            <label className="form-check-label" htmlFor="settings-switch4">Show me Online</label>
          </div>{/*end form-switch*/}
          <div className="form-check form-switch mb-2">
            <input className="form-check-input" type="checkbox" id="settings-switch5" defaultChecked />
            <label className="form-check-label" htmlFor="settings-switch5">Status visible to all</label>
          </div>{/*end form-switch*/}
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="settings-switch6" />
            <label className="form-check-label" htmlFor="settings-switch6">Notifications Popup</label>
          </div>{/*end form-switch*/}
        </div>{/*end /div*/}               
      </div>{/*end offcanvas-body*/}
    </div>
    {/*end Rightbar/offcanvas*/}
    {/*end Rightbar*/}
    {/*Start Footer*/}
    <Footer />
    {/*end footer*/}
  </div>
  {/* end page content */}
</div>

   </>
  )
}

export default Invoice;