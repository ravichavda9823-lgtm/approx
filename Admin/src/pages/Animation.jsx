import React from "react";
import Footer from "../common/Footer";

function Animation() {
  return (
    <>
      <div className="page-wrapper">
        {/* Page Content*/}
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <div className="page-title-box d-md-flex justify-content-md-between align-items-center">
                  <h4 className="page-title">Animation</h4>
                  <div className>
                    <ol className="breadcrumb mb-0">
                      <li className="breadcrumb-item">
                        <a href="#">Approx</a>
                      </li>
                      {/*end nav-item*/}
                      <li className="breadcrumb-item">
                        <a href="#">Advanced UI</a>
                      </li>
                      {/*end nav-item*/}
                      <li className="breadcrumb-item active">Animation</li>
                    </ol>
                  </div>
                </div>
                {/*end page-title-box*/}
              </div>
              {/*end col*/}
            </div>
            {/*end row*/}
            <div className="row justify-content-center">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <div className="row align-items-center">
                      <div className="col">
                        <h4 className="card-title">Masic Animation</h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <div className="text-center">
                      <div className="position-relative d-inline-block mx-auto">
                        <div id="animate-me">
                          <div className="shadow-sm p-4 d-inline-block rounded-circle">
                            <img
                              src="assets/images/logo-sm.png"
                              alt
                              className="center-block thumb-xl"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-5">
                      <div className="row">
                        <div
                          id="content"
                          className="col-lg-6 mx-auto text-center button-list container-magic-bottom container text-center"
                        >
                          <div style={{ height: 450 }} data-simplebar>
                            <h5 className="my-3 fs-15">Magic Effects</h5>
                            <button
                              type="button"
                              className="btn btn-outline-secondary btn-sm mb-1"
                              data-test="vanishIn"
                            >
                              Masic
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary btn-sm btn-animation mb-1"
                              data-test="twisterInDown"
                            >
                              TwisterInDown
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary btn-sm btn-animation mb-1"
                              data-test="twisterInUp"
                            >
                              TwisterInUp
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary btn-sm btn-animation mb-1"
                              data-test="swap"
                            >
                              Swap
                            </button>
                            <h5 className="my-3 fs-15">Bling</h5>
                            <button
                              type="button"
                              className="btn btn-outline-secondary btn-sm btn-animation mb-1"
                              data-test="puffIn"
                            >
                              PuffIn
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary btn-sm btn-animation mb-1"
                              data-test="puffOut"
                            >
                              PuffOut
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary btn-sm btn-animation mb-1"
                              data-test="vanishIn"
                            >
                              VanishIn
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary btn-sm btn-animation mb-1"
                              data-test="vanishOut"
                            >
                              VanishOut
                            </button>
                            <h5 className="my-3 fs-15">Static Effects</h5>
                            <button
                              type="button"
                              className="btn btn-outline-secondary btn-sm btn-animation mb-1"
                              data-test="openDownLeft"
                            >
                              OpenDownLeft
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary btn-sm btn-animation mb-1"
                              data-test="openDownRight"
                            >
                              OpenDownRight
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary btn-sm btn-animation mb-1"
                              data-test="openUpLeft"
                            >
                              OpenUpLeft
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary btn-sm btn-animation mb-1"
                              data-test="openUpRight"
                            >
                              OpenUpRight
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary btn-sm btn-animation mb-1"
                              data-test="openDownLeftReturn"
                            >
                              OpenDownLeftReturn
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary btn-sm btn-animation mb-1"
                              data-test="openDownRightReturn"
                            >
                              OpenDownRightReturn
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary btn-sm btn-animation mb-1"
                              data-test="openUpLeftReturn"
                            >
                              OpenUpLeftReturn
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary btn-sm btn-animation mb-1"
                              data-test="openUpRightReturn"
                            >
                              OpenUpRightReturn
                            </button>
                            <h5 className="my-3 fs-15">Static Effects Out</h5>
                            <button
                              type="button"
                              className="btn btn-outline-secondary btn-sm btn-animation mb-1"
                              data-test="openDownLeftOut"
                            >
                              OpenDownLeftOut
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary btn-sm btn-animation mb-1"
                              data-test="openDownRightOut"
                            >
                              OpenDownRightOut
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary btn-sm btn-animation mb-1"
                              data-test="openUpLeftOut"
                            >
                              OpenUpLeftOut
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary btn-sm btn-animation mb-1"
                              data-test="openUpRightOut"
                            >
                              OpenUpRightOut
                            </button>
                            <h5 className="my-3 fs-15">Perspective</h5>
                            <button
                              type="button"
                              className="btn btn-outline-secondary btn-sm btn-animation mb-1"
                              data-test="perspectiveDown"
                            >
                              PerspectiveDown
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary btn-sm btn-animation mb-1"
                              data-test="perspectiveUp"
                            >
                              PerspectiveUp
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary btn-sm btn-animation mb-1"
                              data-test="perspectiveLeft"
                            >
                              PerspectiveLeft
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary btn-sm btn-animation mb-1"
                              data-test="perspectiveRight"
                            >
                              PerspectiveRight
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary btn-sm btn-animation mb-1"
                              data-test="perspectiveDownReturn"
                            >
                              PerspectiveDownReturn
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary btn-sm btn-animation mb-1"
                              data-test="perspectiveUpReturn"
                            >
                              PerspectiveUpReturn
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary btn-sm btn-animation mb-1"
                              data-test="perspectiveLeftReturn"
                            >
                              PerspectiveLeftReturn
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary btn-sm btn-animation mb-1"
                              data-test="perspectiveRightReturn"
                            >
                              PerspectiveRightReturn
                            </button>
                            <h5 className="my-3 fs-15">Rotate</h5>
                            <button
                              type="button"
                              className="btn btn-outline-secondary btn-sm btn-animation mb-1"
                              data-test="rotateDown"
                            >
                              RotateDown
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary btn-sm btn-animation mb-1"
                              data-test="rotateUp"
                            >
                              RotateUp
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary btn-sm btn-animation mb-1"
                              data-test="rotateLeft"
                            >
                              RotateLeft
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary btn-sm btn-animation mb-1"
                              data-test="rotateRight"
                            >
                              RotateRight
                            </button>
                            <h5 className="my-3 fs-15">Slide</h5>
                            <button
                              type="button"
                              className="btn btn-outline-secondary btn-sm btn-animation mb-1"
                              data-test="slideDown"
                            >
                              SlideDown
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary btn-sm btn-animation mb-1"
                              data-test="slideUp"
                            >
                              SlideUp
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary btn-sm btn-animation mb-1"
                              data-test="slideLeft"
                            >
                              SlideLeft
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary btn-sm btn-animation mb-1"
                              data-test="slideRight"
                            >
                              SlideRight
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary btn-sm btn-animation mb-1"
                              data-test="slideDownReturn"
                            >
                              SlideDownReturn
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary btn-sm btn-animation mb-1"
                              data-test="slideUpReturn"
                            >
                              SlideUpReturn
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary btn-sm btn-animation mb-1"
                              data-test="slideLeftReturn"
                            >
                              SlideLeftReturn
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary btn-sm btn-animation mb-1"
                              data-test="slideRightReturn"
                            >
                              SlideRightReturn
                            </button>
                            <h5 className="my-3 fs-15">Math</h5>
                            <button
                              type="button"
                              className="btn btn-outline-secondary btn-sm btn-animation mb-1"
                              data-test="swashOut"
                            >
                              SwashOut
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary btn-sm btn-animation mb-1"
                              data-test="swashIn"
                            >
                              SwashIn
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary btn-sm btn-animation mb-1"
                              data-test="foolishIn"
                            >
                              FoolishIn
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary btn-sm btn-animation mb-1"
                              data-test="holeOut"
                            >
                              HoleOut
                            </button>
                            <h5 className="my-3 fs-15">Tin</h5>
                            <button
                              type="button"
                              className="btn btn-outline-secondary btn-sm btn-animation mb-1"
                              data-test="tinRightOut"
                            >
                              TinRightOut
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary btn-sm btn-animation mb-1"
                              data-test="tinLeftOut"
                            >
                              TinLeftOut
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary btn-sm btn-animation mb-1"
                              data-test="tinUpOut"
                            >
                              TinUpOut
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary btn-sm btn-animation mb-1"
                              data-test="tinDownOut"
                            >
                              TinDownOut
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary btn-sm btn-animation mb-1"
                              data-test="tinRightIn"
                            >
                              TinRightIn
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary btn-sm btn-animation mb-1"
                              data-test="tinLeftIn"
                            >
                              TinLeftIn
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary btn-sm btn-animation mb-1"
                              data-test="tinUpIn"
                            >
                              TinUpIn
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary btn-sm btn-animation mb-1"
                              data-test="tinDownIn"
                            >
                              TinDownIn
                            </button>
                            <h5 className="my-3 fs-15">Bomb</h5>
                            <button
                              type="button"
                              className="btn btn-outline-secondary btn-sm btn-animation mb-1"
                              data-test="bombRightOut"
                            >
                              BombRightOut
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary btn-sm btn-animation mb-1"
                              data-test="bombLeftOut"
                            >
                              BombLeftOut
                            </button>
                            <h5 className="my-3 fs-15">Boing</h5>
                            <button
                              type="button"
                              className="btn btn-outline-secondary btn-sm btn-animation mb-1"
                              data-test="boingInUp"
                            >
                              BoingInUp
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary btn-sm btn-animation mb-1"
                              data-test="boingOutDown"
                            >
                              BoingOutDown
                            </button>
                            <h5 className="my-3 fs-15">On The Space</h5>
                            <button
                              type="button"
                              className="btn btn-outline-secondary btn-sm btn-animation mb-1"
                              data-test="spaceOutUp"
                            >
                              SpaceOutUp
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary btn-sm btn-animation mb-1"
                              data-test="spaceOutRight"
                            >
                              SpaceOutRight
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary btn-sm btn-animation mb-1"
                              data-test="spaceOutDown"
                            >
                              SpaceOutDown
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary btn-sm btn-animation mb-1"
                              data-test="spaceOutLeft"
                            >
                              SpaceOutLeft
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary btn-sm btn-animation mb-1"
                              data-test="spaceInUp"
                            >
                              SpaceInUp
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary btn-sm btn-animation mb-1"
                              data-test="spaceInRight"
                            >
                              SpaceInRight
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary btn-sm btn-animation mb-1"
                              data-test="spaceInDown"
                            >
                              SpaceInDown
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary btn-sm btn-animation mb-1"
                              data-test="spaceInLeft"
                            >
                              SpaceInLeft
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*end card-body*/}
                </div>
                {/*end card*/}
              </div>{" "}
              {/*end col*/}
            </div>
            {/*end row*/}
          </div>
          {/* container */}
          {/*Start Rightbar*/}
          {/*Start Rightbar/offcanvas*/}
          <div
            className="offcanvas offcanvas-end"
            tabIndex={-1}
            id="Appearance"
            aria-labelledby="AppearanceLabel"
          >
            <div className="offcanvas-header border-bottom justify-content-between">
              <h5 className="m-0 font-14" id="AppearanceLabel">
                Appearance
              </h5>
              <button
                type="button"
                className="btn-close text-reset p-0 m-0 align-self-center"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
            <div className="offcanvas-body">
              <h6>Account Settings</h6>
              <div className="p-2 text-start mt-3">
                <div className="form-check form-switch mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="settings-switch1"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="settings-switch1"
                  >
                    Auto updates
                  </label>
                </div>
                {/*end form-switch*/}
                <div className="form-check form-switch mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="settings-switch2"
                    defaultChecked
                  />
                  <label
                    className="form-check-label"
                    htmlFor="settings-switch2"
                  >
                    Location Permission
                  </label>
                </div>
                {/*end form-switch*/}
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="settings-switch3"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="settings-switch3"
                  >
                    Show offline Contacts
                  </label>
                </div>
                {/*end form-switch*/}
              </div>
              {/*end /div*/}
              <h6>General Settings</h6>
              <div className="p-2 text-start mt-3">
                <div className="form-check form-switch mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="settings-switch4"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="settings-switch4"
                  >
                    Show me Online
                  </label>
                </div>
                {/*end form-switch*/}
                <div className="form-check form-switch mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="settings-switch5"
                    defaultChecked
                  />
                  <label
                    className="form-check-label"
                    htmlFor="settings-switch5"
                  >
                    Status visible to all
                  </label>
                </div>
                {/*end form-switch*/}
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="settings-switch6"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="settings-switch6"
                  >
                    Notifications Popup
                  </label>
                </div>
                {/*end form-switch*/}
              </div>
              {/*end /div*/}
            </div>
            {/*end offcanvas-body*/}
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
  );
}

export default Animation;
