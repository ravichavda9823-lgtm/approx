import React from 'react'
import Footer from '../common/Footer'

function Rating() {
  return (
    <div className="page-wrapper">
  {/* Page Content*/}
  <div className="page-content">
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <div className="page-title-box d-md-flex justify-content-md-between align-items-center">
            <h4 className="page-title">Ratings</h4>
            <div className>
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item"><a href="#">Approx</a>
                </li>{/*end nav-item*/}
                <li className="breadcrumb-item"><a href="#">Advanced UI</a>
                </li>{/*end nav-item*/}
                <li className="breadcrumb-item active">Ratings</li>
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
                  <h4 className="card-title">Default star rating</h4>                      
                </div>{/*end col*/}
              </div>  {/*end row*/}                                  
            </div>{/*end card-header*/}
            <div className="card-body pt-0">
              <form>
                <div className="starability-basic">
                  <input type="radio" id="rate5" name="rating" defaultValue={5} />
                  <label htmlFor="rate5" title="Amazing">5 stars</label>
                  <input type="radio" id="rate4" name="rating" defaultValue={4} />
                  <label htmlFor="rate4" title="Very good">4 stars</label>
                  <input type="radio" id="rate3" name="rating" defaultValue={3} />
                  <label htmlFor="rate3" title="Average">3 stars</label>
                  <input type="radio" id="rate2" name="rating" defaultValue={2} />
                  <label htmlFor="rate2" title="Not good">2 stars</label>
                  <input type="radio" id="rate1" name="rating" defaultValue={1} />
                  <label htmlFor="rate1" title="Terrible">1 star</label>
                </div>
              </form>              
            </div>{/*end card-body*/} 
          </div>{/*end card*/} 
        </div> {/*end col*/} 
        <div className="col-md-6 col-lg-6">
          <div className="card">
            <div className="card-header">
              <div className="row align-items-center">
                <div className="col">                      
                  <h4 className="card-title">Slot machine rating</h4>                      
                </div>{/*end col*/}
              </div>  {/*end row*/}                                  
            </div>{/*end card-header*/}
            <div className="card-body pt-0">
              <form>
                <div className="starability-slot">
                  <input type="radio" id="slot-rate5" name="rating" defaultValue={5} />
                  <label htmlFor="slot-rate5" title="Amazing">5 stars</label>
                  <input type="radio" id="slot-rate4" name="rating" defaultValue={4} />
                  <label htmlFor="slot-rate4" title="Very good">4 stars</label>
                  <input type="radio" id="slot-rate3" name="rating" defaultValue={3} />
                  <label htmlFor="slot-rate3" title="Average">3 stars</label>
                  <input type="radio" id="slot-rate2" name="rating" defaultValue={2} />
                  <label htmlFor="slot-rate2" title="Not good">2 stars</label>
                  <input type="radio" id="slot-rate1" name="rating" defaultValue={1} />
                  <label htmlFor="slot-rate1" title="Terrible">1 star</label>
                </div>
              </form>
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
                  <h4 className="card-title">Growing star rating</h4>                      
                </div>{/*end col*/}
              </div>  {/*end row*/}                                  
            </div>{/*end card-header*/}
            <div className="card-body pt-0">
              <form>
                <div className="starability-grow">
                  <input type="radio" id="growing-rate5" name="rating" defaultValue={5} />
                  <label htmlFor="growing-rate5" title="Amazing">5 stars</label>
                  <input type="radio" id="growing-rate4" name="rating" defaultValue={4} />
                  <label htmlFor="growing-rate4" title="Very good">4 stars</label>
                  <input type="radio" id="growing-rate3" name="rating" defaultValue={3} />
                  <label htmlFor="growing-rate3" title="Average">3 stars</label>
                  <input type="radio" id="growing-rate2" name="rating" defaultValue={2} />
                  <label htmlFor="growing-rate2" title="Not good">2 stars</label>
                  <input type="radio" id="growing-rate1" name="rating" defaultValue={1} />
                  <label htmlFor="growing-rate1" title="Terrible">1 star</label>
                </div>
              </form>          
            </div>{/*end card-body*/} 
          </div>{/*end card*/} 
        </div> {/*end col*/} 
        <div className="col-md-6 col-lg-6">
          <div className="card">
            <div className="card-header">
              <div className="row align-items-center">
                <div className="col">                      
                  <h4 className="card-title">Growing &amp; rotating star rating</h4>                      
                </div>{/*end col*/}
              </div>  {/*end row*/}                                  
            </div>{/*end card-header*/}
            <div className="card-body pt-0">
              <form>
                <div className="starability-growRotate">
                  <input type="radio" id="growing-rotating-rate5" name="rating" defaultValue={5} />
                  <label htmlFor="growing-rotating-rate5" title="Amazing">5 stars</label>
                  <input type="radio" id="growing-rotating-rate4" name="rating" defaultValue={4} />
                  <label htmlFor="growing-rotating-rate4" title="Very good">4 stars</label>
                  <input type="radio" id="growing-rotating-rate3" name="rating" defaultValue={3} />
                  <label htmlFor="growing-rotating-rate3" title="Average">3 stars</label>
                  <input type="radio" id="growing-rotating-rate2" name="rating" defaultValue={2} />
                  <label htmlFor="growing-rotating-rate2" title="Not good">2 stars</label>
                  <input type="radio" id="growing-rotating-rate1" name="rating" defaultValue={1} />
                  <label htmlFor="growing-rotating-rate1" title="Terrible">1 star</label>
                </div>
              </form>        
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
                  <h4 className="card-title">Fading star rating</h4>                      
                </div>{/*end col*/}
              </div>  {/*end row*/}                                  
            </div>{/*end card-header*/}
            <div className="card-body pt-0">                                    
              <form>
                <div className="starability-fade">
                  <input type="radio" id="fading-rate5" name="rating" defaultValue={5} />
                  <label htmlFor="fading-rate5" title="Amazing">5 stars</label>
                  <input type="radio" id="fading-rate4" name="rating" defaultValue={4} />
                  <label htmlFor="fading-rate4" title="Very good">4 stars</label>
                  <input type="radio" id="fading-rate3" name="rating" defaultValue={3} />
                  <label htmlFor="fading-rate3" title="Average">3 stars</label>
                  <input type="radio" id="fading-rate2" name="rating" defaultValue={2} />
                  <label htmlFor="fading-rate2" title="Not good">2 stars</label>
                  <input type="radio" id="fading-rate1" name="rating" defaultValue={1} />
                  <label htmlFor="fading-rate1" title="Terrible">1 star</label>
                </div>
              </form>    
            </div>{/*end card-body*/} 
          </div>{/*end card*/} 
        </div> {/*end col*/} 
        <div className="col-md-6 col-lg-6">
          <div className="card">
            <div className="card-header">
              <div className="row align-items-center">
                <div className="col">                      
                  <h4 className="card-title">Checkmark rating</h4>                      
                </div>{/*end col*/}
              </div>  {/*end row*/}                                  
            </div>{/*end card-header*/}
            <div className="card-body pt-0">
              <form>
                <div className="starability-checkmark">
                  <input type="radio" id="checkmark-rate5" name="rating" defaultValue={5} />
                  <label htmlFor="checkmark-rate5" title="Amazing">5 stars</label>
                  <input type="radio" id="checkmark-rate4" name="rating" defaultValue={4} />
                  <label htmlFor="checkmark-rate4" title="Very good">4 stars</label>
                  <input type="radio" id="checkmark-rate3" name="rating" defaultValue={3} />
                  <label htmlFor="checkmark-rate3" title="Average">3 stars</label>
                  <input type="radio" id="checkmark-rate2" name="rating" defaultValue={2} />
                  <label htmlFor="checkmark-rate2" title="Not good">2 stars</label>
                  <input type="radio" id="checkmark-rate1" name="rating" defaultValue={1} />
                  <label htmlFor="checkmark-rate1" title="Terrible">1 star</label>
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

  )
}

export default Rating