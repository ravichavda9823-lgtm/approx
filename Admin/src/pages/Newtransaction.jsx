import React from 'react'
import Footer from '../common/Footer'

function Newtransaction() {
  return (
   <>
        
   <div className="page-wrapper">
  {/* Page Content*/}
  <div className="page-content">
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <div className="page-title-box d-md-flex justify-content-md-between align-items-center">
            <h4 className="page-title">New Transaction</h4>
            <div className>
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item"><a href="#">Approx</a>
                </li>{/*end nav-item*/}
                <li className="breadcrumb-item active">New Transaction</li>
              </ol>
            </div>                            
          </div>{/*end page-title-box*/}
        </div>{/*end col*/}
      </div>{/*end row*/}
      <div className="row">                            
        <div className="col-md-4">
          <div className="card bg-globe-img">
            <div className="card-body">
              <div>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="fs-16 fw-semibold">Balance</span>
                  <form className>
                    <select id="dynamic-select" name="example-select" data-placeholder="Select an option" data-dynamic-select>
                      <option value={1} data-img="assets/images/logos/m-card.png">xx25</option>
                      <option value={2} data-img="assets/images/logos/ame-bank.png">xx56</option>
                    </select>
                  </form>
                </div>
                <h4 className="my-2 fs-24 fw-semibold">122.5692.00 <small className="font-14">BTC</small></h4>                                            
                <p className="mb-3 text-muted fw-semibold">
                  <span className="text-success"><i className="fas fa-arrow-up me-1" />11.1%</span> Outstanding balance boost
                </p> 
                <button type="submit" className="btn btn-soft-primary">Transfer</button>
                <button type="button" className="btn btn-soft-danger">Request</button> 
              </div>                                
            </div>{/*end card-body*/}
          </div>{/*end card*/}
          <div className="card">
            <div className="card-header">
              <div className="row align-items-center">
                <div className="col">                      
                  <h4 className="card-title">Recent Transactions</h4>                      
                </div>{/*end col*/}
              </div>  {/*end row*/}                                  
            </div>{/*end card-header*/}
            <div className="card-body pt-0">
              <div className="table-responsive">
                <table className="table mb-0">
                  <tbody>
                    <tr className>                                                        
                      <td className="px-0">
                        <div className="d-flex align-items-center">
                          <span className="thumb-md justify-content-center d-flex align-items-center bg-success-subtle text-success rounded-circle me-2">SF</span>
                          <div className="flex-grow-1 text-truncate"> 
                            <h6 className="m-0 text-truncate">Service Fee</h6>
                            <p className="font-12 mb-0 text-muted">20 August 2024</p>                                                                                           
                          </div>{/*end media body*/}
                        </div>{/*end media*/}
                      </td>
                      <td className="px-0 text-end"><span className="text-primary ps-2 align-self-center text-end">$3325.00</span></td>  
                    </tr>{/*end tr*/}  
                    <tr className>                                                        
                      <td className="px-0">
                        <div className="d-flex align-items-center">
                          <span className="thumb-md justify-content-center d-flex align-items-center bg-warning-subtle text-warning rounded-circle me-2">UI</span>
                          <div className="flex-grow-1 text-truncate"> 
                            <h6 className="m-0 text-truncate">UI/UX Project</h6>
                            <p className="font-12 mb-0 text-muted">15 August 2024</p>                                                                                           
                          </div>{/*end media body*/}
                        </div>{/*end media*/}
                      </td>
                      <td className="px-0 text-end"><span className="text-primary ps-2 align-self-center text-end">$2548.00</span></td>  
                    </tr>{/*end tr*/}  
                    <tr className>                                                        
                      <td className="px-0">
                        <div className="d-flex align-items-center">
                          <span className="thumb-md justify-content-center d-flex align-items-center bg-purple-subtle text-purple rounded-circle me-2">FF</span>
                          <div className="flex-grow-1 text-truncate"> 
                            <h6 className="m-0 text-truncate">Freelancer Fee</h6>
                            <p className="font-12 mb-0 text-muted">12 August 2024</p>                                                                                           
                          </div>{/*end media body*/}
                        </div>{/*end media*/}
                      </td>
                      <td className="px-0 text-end"><span className="text-primary ps-2 align-self-center text-end">$2985.00</span></td>  
                    </tr>{/*end tr*/}  
                    <tr className>                                                        
                      <td className="px-0">
                        <div className="d-flex align-items-center">
                          <span className="thumb-md justify-content-center d-flex align-items-center bg-danger-subtle text-danger rounded-circle me-2">MS</span>
                          <div className="flex-grow-1 text-truncate"> 
                            <h6 className="m-0 text-truncate">Monthly SIP Plan</h6>
                            <p className="font-12 mb-0 text-muted">08 August 2024</p>                                                                                           
                          </div>{/*end media body*/}
                        </div>{/*end media*/}
                      </td>
                      <td className="px-0 text-end"><span className="text-primary ps-2 align-self-center text-end">$1845.00</span></td>  
                    </tr>{/*end tr*/}   
                  </tbody>
                </table> {/*end table*/}                                               
              </div>{/*end /div*/}                           
            </div>{/*end card-body*/} 
          </div>{/*end card*/} 
        </div>{/*end col*/}
        <div className="col-md-12 col-lg-8">
          <div className="card">
            <div className="card-body">
              <form className>
                <div className="row">
                  <div className="col-md-12">                            
                    <div className="mb-3">
                      <label className="form-label" htmlFor="description">Description</label>
                      <textarea className="form-control" rows={2} id="description" placeholder="Enter Description" defaultValue={""} />
                    </div>
                  </div>{/*end col*/}
                </div>{/*end row*/}
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label" htmlFor="Card">Card</label>
                      <select className="form-select" id="Card">
                        <option>-- Select --</option>
                        <option>Credit</option>
                        <option>Debit</option>
                      </select>
                    </div>
                  </div>{/*end col*/}
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label" htmlFor="aApprox">AApprox</label>
                      <input type="email" className="form-control" id="aApprox" required placeholder={"00.00"} />
                    </div>
                  </div>{/*end col*/}
                </div>{/*end row*/}
                <div className="row">
                  <div className="col-md-12">                            
                    <div className="mb-3">
                      <label className="form-label" htmlFor="attachment">Attachment</label>
                      <div id="drag-drop-area" />  
                    </div>
                  </div>{/*end col*/}
                </div>{/*end row*/}
                <div className="row">
                  <div className="col-sm-12 text-start">
                    <button type="submit" className="btn btn-primary px-4">Pay Now</button>
                    <button type="submit" className="btn btn-danger px-4">Cancle</button>
                  </div>
                </div>
              </form>   
            </div>{/*end card-body*/} 
          </div>{/*end card*/} 
        </div> {/*end col*/} 
      </div>{/*end row*/}
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

export default Newtransaction