import React from 'react'

function Uiprogress() {
  return (
    <>
          <div className="page-wrapper">
  {/* Page Content*/}
  <div className="page-content">
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <div className="page-title-box d-md-flex justify-content-md-between align-items-center">
            <h4 className="page-title">Progress</h4>
            <div className>
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item"><a href="#">Approx</a>
                </li>{/*end nav-item*/}
                <li className="breadcrumb-item"><a href="#">UI Kit</a>
                </li>{/*end nav-item*/}
                <li className="breadcrumb-item active">Progress</li>
              </ol>
            </div>                                
          </div>{/*end page-title-box*/}
        </div>{/*end col*/}
      </div>{/*end row*/}
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-6">
          <div className="card">
            <div className="card-header">
              <div className="row align-items-center">
                <div className="col">                      
                  <h4 className="card-title">Basic</h4>                      
                </div>{/*end col*/}
              </div>  {/*end row*/}                                  
            </div>{/*end card-header*/}
            <div className="card-body pt-0">
              <div className="progress mb-3">
                <div className="progress-bar" role="progressbar" style={{width: '10%'}} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100} />
              </div>
              <div className="progress mb-3">
                <div className="progress-bar" role="progressbar" style={{width: '20%'}} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} />
              </div>                                    
              <div className="progress mb-3">
                <div className="progress-bar" role="progressbar" style={{width: '30%'}} aria-valuenow={30} aria-valuemin={0} aria-valuemax={100} />
              </div>
              <div className="progress mb-3">
                <div className="progress-bar" role="progressbar" style={{width: '40%'}} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} />
              </div>
              <div className="progress mb-3">
                <div className="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
              </div>
              <div className="progress">
                <div className="progress-bar" role="progressbar" style={{width: '60%'}} aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
              </div>                        
            </div>{/*end card-body*/} 
          </div>{/*end card*/} 
        </div> {/*end col*/} 
        <div className="col-md-6 col-lg-6">
          <div className="card">
            <div className="card-header">
              <div className="row align-items-center">
                <div className="col">                      
                  <h4 className="card-title">Striped And Animated</h4>                      
                </div>{/*end col*/}
              </div>  {/*end row*/}                                  
            </div>{/*end card-header*/}
            <div className="card-body pt-0">
              <div className="progress mb-3">
                <div className="progress-bar bg-warning progress-bar-striped" role="progressbar" style={{width: '15%'}} aria-valuenow={15} aria-valuemin={0} aria-valuemax={100} />
              </div>
              <div className="progress mb-3">
                <div className="progress-bar bg-success progress-bar-striped" role="progressbar" style={{width: '30%'}} aria-valuenow={30} aria-valuemin={0} aria-valuemax={100} />
              </div>
              <div className="progress mb-3">
                <div className="progress-bar bg-primary progress-bar-striped" role="progressbar" style={{width: '45%'}} aria-valuenow={45} aria-valuemin={0} aria-valuemax={100} />
              </div>
              <div className="progress mb-3">
                <div className="progress-bar bg-info progress-bar-striped progress-bar-animated" role="progressbar" style={{width: '60%'}} aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
              </div>
              <div className="progress mb-3">
                <div className="progress-bar bg-danger progress-bar-striped progress-bar-animated" role="progressbar" style={{width: '75%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
              </div>
              <div className="progress">
                <div className="progress-bar bg-gray progress-bar-striped progress-bar-animated" role="progressbar" style={{width: '90%'}} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>{/*end card-body*/} 
          </div>{/*end card*/} 
        </div> {/*end col*/}                                                       
      </div>{/*end row*/}
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-6">
          <div className="card">
            <div className="card-header">
              <div className="row align-items-center">
                <div className="col">                      
                  <h4 className="card-title">Labels And Multiple Bars</h4>                      
                </div>{/*end col*/}
              </div>  {/*end row*/}                                  
            </div>{/*end card-header*/}
            <div className="card-body pt-0">
              <div className="progress mb-3">
                <div className="progress-bar bg-secondary" role="progressbar" style={{width: '20%'}} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100}>20%</div>
              </div>
              <div className="progress mb-3">
                <div className="progress-bar bg-secondary progress-bar-striped" role="progressbar" style={{width: '40%'}} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100}>40%</div>
              </div> 
              <div className="progress mb-3">
                <div className="progress-bar" role="progressbar" style={{width: '20%'}} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100}>20%</div>
                <div className="progress-bar progress-bar-striped bg-secondary" role="progressbar" style={{width: '20%'}} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100}>20%</div>
                <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar" style={{width: '20%'}} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100}>20%</div>
              </div>
              <div className="progress">
                <div className="progress-bar" role="progressbar" style={{width: '20%'}} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} />
                <div className="progress-bar bg-secondary" role="progressbar" style={{width: '40%'}} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} />
                <div className="progress-bar bg-info" role="progressbar" style={{width: '20%'}} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} />
              </div>              
            </div>{/*end card-body*/} 
          </div>{/*end card*/} 
        </div> {/*end col*/} 
        <div className="col-md-6 col-lg-6">
          <div className="card">
            <div className="card-header">
              <div className="row align-items-center">
                <div className="col">                      
                  <h4 className="card-title">Height</h4>                      
                </div>{/*end col*/}
              </div>  {/*end row*/}                                  
            </div>{/*end card-header*/}
            <div className="card-body pt-0">
              <div className="progress mb-3" style={{height: 3}}>
                <div className="progress-bar" role="progressbar" style={{width: '15%'}} aria-valuenow={15} aria-valuemin={0} aria-valuemax={100} />
              </div>
              <div className="progress mb-3" >
                <div className="progress-bar  progress-bar-striped" role="progressbar" style={{width: '45%'}} aria-valuenow={45} aria-valuemin={0} aria-valuemax={100} />
              </div>
              <div className="progress" style={{height: 14}}>
                <div className="progress-bar  progress-bar-striped progress-bar-animated" role="progressbar" style={{width: '60%'}} aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
              </div>         
            </div>{/*end card-body*/} 
          </div>{/*end card*/} 
        </div> {/*end col*/}                                                       
      </div>{/*end row*/}
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <div className="row align-items-center">
                <div className="col">                      
                  <h4 className="card-title">Vertical</h4>                      
                </div>{/*end col*/}
              </div>  {/*end row*/}                                  
            </div>{/*end card-header*/}
            <div className="card-body pt-0">                                    
              <div className="row">
                <div className="col-md-4 d-flex justify-content-center">                                                
                  <div className="progress progress-vertical my-3" style={{height: 8}}>
                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" style={{height: '25%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                  <div className="progress progress-vertical my-3" style={{height: 8}}>
                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-secondary" role="progressbar" style={{height: '50%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                  <div className="progress progress-vertical my-3" style={{height: 8}}>
                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{height: '75%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                  </div>                                                
                </div>{/*end col*/}
                <div className="col-md-4  d-flex justify-content-center">
                  <div className="progress progress-vertical-bottom my-3" style={{height: 8}}>
                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-primary" role="progressbar" style={{height: '10%'}} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                  <div className="progress progress-vertical-bottom my-3" style={{height: 8}}>
                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" style={{height: '25%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                  <div className="progress progress-vertical-bottom my-3" style={{height: 8}}>
                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-secondary" role="progressbar" style={{height: '50%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </div>{/*end col*/}
                <div className="col-md-4 d-flex justify-content-center">
                  <div className="progress progress-vertical-bottom my-3" style={{width: 30}}>
                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{height: '75%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                  <div className="progress progress-vertical-bottom my-3" style={{width: 30}}>
                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-secondary" role="progressbar" style={{height: '100%'}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}>100%</div>
                  </div>
                </div>{/*end col*/}
              </div>{/*end row*/}       
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
    <footer className="footer text-center text-sm-start d-print-none">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="card mb-0 rounded-bottom-0">
              <div className="card-body">
                <p className="text-muted mb-0">
                  ©
                  Approx
                  <span className="text-muted d-none d-sm-inline-block float-end">
                    Design with
                    <i className="iconoir-heart-solid text-danger align-middle" />
                    by Mannatthemes</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    {/*end footer*/}
  </div>
  {/* end page content */}
  </div>


        
    </>
  )
}

export default Uiprogress