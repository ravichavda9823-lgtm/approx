import React from "react";
import Footer from "../common/Footer";

function Formscrop() {
  return (
    <>
      <div className="page-wrapper">
        {/* Page Content*/}
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <div className="page-title-box d-md-flex justify-content-md-between align-items-center">
                  <h4 className="page-title">Image Crop</h4>
                  <div className>
                    <ol className="breadcrumb mb-0">
                      <li className="breadcrumb-item">
                        <a href="#">Approx</a>
                      </li>
                      {/*end nav-item*/}
                      <li className="breadcrumb-item">
                        <a href="#">Forms</a>
                      </li>
                      {/*end nav-item*/}
                      <li className="breadcrumb-item active">Image Crop</li>
                    </ol>
                  </div>
                </div>
                {/*end page-title-box*/}
              </div>
              {/*end col*/}
            </div>
            {/*end row*/}
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <div className="card">
                  <div className="card-header">
                    <div className="row align-items-center">
                      <div className="col">
                        <h4 className="card-title">Image Cropper</h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <div className="img-container mb-0">
                      <img
                        id="image"
                        src="assets/images/extra/card/img-1.jpg"
                        alt="Picture"
                      />
                    </div>
                  </div>
                  {/*end card-body*/}
                </div>
                {/*end card*/}
                <div id="actions">
                  <div className="card docs-buttons">
                    <div className="card-body">
                      {/* <h3>Toolbar:</h3> */}
                      <div className="btn-group mb-2 mr-1">
                        <button
                          type="button"
                          className="btn btn-light"
                          data-method="setDragMode"
                          data-option="move"
                          title="Move"
                        >
                          <span
                            className="docs-tooltip"
                            data-bs-toggle="tooltip"
                            data-animation="false"
                            title='$().cropper("setDragMode", "move")'
                          >
                            <span className="fas fa-expand-arrows-alt" />
                          </span>
                        </button>
                        <button
                          type="button"
                          className="btn btn-light"
                          data-method="setDragMode"
                          data-option="crop"
                          title="Crop"
                        >
                          <span
                            className="docs-tooltip"
                            data-bs-toggle="tooltip"
                            data-animation="false"
                            title='$().cropper("setDragMode", "crop")'
                          >
                            <span className="fas fa-crop" />
                          </span>
                        </button>
                      </div>
                      <div className="btn-group mb-2 mr-1">
                        <button
                          type="button"
                          className="btn btn-light"
                          data-method="zoom"
                          data-option="0.1"
                          title="Zoom In"
                        >
                          <span
                            className="docs-tooltip"
                            data-bs-toggle="tooltip"
                            data-animation="false"
                            title='$().cropper("zoom", 0.1)'
                          >
                            <span className="fas fa-search-plus" />
                          </span>
                        </button>
                        <button
                          type="button"
                          className="btn btn-light"
                          data-method="zoom"
                          data-option="-0.1"
                          title="Zoom Out"
                        >
                          <span
                            className="docs-tooltip"
                            data-bs-toggle="tooltip"
                            data-animation="false"
                            title='$().cropper("zoom", -0.1)'
                          >
                            <span className="fas fa-search-minus" />
                          </span>
                        </button>
                      </div>
                      <div className="btn-group mb-2 mr-1">
                        <button
                          type="button"
                          className="btn btn-light"
                          data-method="move"
                          data-option={-10}
                          data-second-option={0}
                          title="Move Left"
                        >
                          <span
                            className="docs-tooltip"
                            data-bs-toggle="tooltip"
                            data-animation="false"
                            title='$().cropper("move", -10, 0)'
                          >
                            <span className="fas fa-arrow-left" />
                          </span>
                        </button>
                        <button
                          type="button"
                          className="btn btn-light"
                          data-method="move"
                          data-option={10}
                          data-second-option={0}
                          title="Move Right"
                        >
                          <span
                            className="docs-tooltip"
                            data-bs-toggle="tooltip"
                            data-animation="false"
                            title='$().cropper("move", 10, 0)'
                          >
                            <span className="fas fa-arrow-right" />
                          </span>
                        </button>
                        <button
                          type="button"
                          className="btn btn-light"
                          data-method="move"
                          data-option={0}
                          data-second-option={-10}
                          title="Move Up"
                        >
                          <span
                            className="docs-tooltip"
                            data-bs-toggle="tooltip"
                            data-animation="false"
                            title='$().cropper("move", 0, -10)'
                          >
                            <span className="fas fa-arrow-up" />
                          </span>
                        </button>
                        <button
                          type="button"
                          className="btn btn-light"
                          data-method="move"
                          data-option={0}
                          data-second-option={10}
                          title="Move Down"
                        >
                          <span
                            className="docs-tooltip"
                            data-bs-toggle="tooltip"
                            data-animation="false"
                            title='$().cropper("move", 0, 10)'
                          >
                            <span className="fa fa-arrow-down" />
                          </span>
                        </button>
                      </div>
                      <div className="btn-group mb-2 mr-1">
                        <button
                          type="button"
                          className="btn btn-light"
                          data-method="rotate"
                          data-option={-45}
                          title="Rotate Left"
                        >
                          <span
                            className="docs-tooltip"
                            data-bs-toggle="tooltip"
                            data-animation="false"
                            title='$().cropper("rotate", -45)'
                          >
                            <span className="fas fa-reply" />
                          </span>
                        </button>
                        <button
                          type="button"
                          className="btn btn-light"
                          data-method="rotate"
                          data-option={45}
                          title="Rotate Right"
                        >
                          <span
                            className="docs-tooltip"
                            data-bs-toggle="tooltip"
                            data-animation="false"
                            title='$().cropper("rotate", 45)'
                          >
                            <span className="fas fa-share" />
                          </span>
                        </button>
                      </div>
                      <div className="btn-group mb-2 mr-1">
                        <button
                          type="button"
                          className="btn btn-light"
                          data-method="scaleX"
                          data-option={-1}
                          title="Flip Horizontal"
                        >
                          <span
                            className="docs-tooltip"
                            data-bs-toggle="tooltip"
                            data-animation="false"
                            title='$().cropper("scaleX", -1)'
                          >
                            <span className="fa fa-arrows-alt-h" />
                          </span>
                        </button>
                        <button
                          type="button"
                          className="btn btn-light"
                          data-method="scaleY"
                          data-option={-1}
                          title="Flip Vertical"
                        >
                          <span
                            className="docs-tooltip"
                            data-bs-toggle="tooltip"
                            data-animation="false"
                            title='$().cropper("scaleY", -1)'
                          >
                            <span className="fas fa-arrows-alt-v" />
                          </span>
                        </button>
                      </div>
                      <div className="btn-group mb-2 mr-1">
                        <button
                          type="button"
                          className="btn btn-light"
                          data-method="crop"
                          title="Crop"
                        >
                          <span
                            className="docs-tooltip"
                            data-bs-toggle="tooltip"
                            data-animation="false"
                            title='$().cropper("crop")'
                          >
                            <span className="fas fa-check" />
                          </span>
                        </button>
                        <button
                          type="button"
                          className="btn btn-light"
                          data-method="clear"
                          title="Clear"
                        >
                          <span
                            className="docs-tooltip"
                            data-bs-toggle="tooltip"
                            data-animation="false"
                            title='$().cropper("clear")'
                          >
                            <span className="fas fa-times" />
                          </span>
                        </button>
                      </div>
                      <div className="btn-group mb-2 mr-1">
                        <button
                          type="button"
                          className="btn btn-light"
                          data-method="disable"
                          title="Disable"
                        >
                          <span
                            className="docs-tooltip"
                            data-bs-toggle="tooltip"
                            data-animation="false"
                            title='$().cropper("disable")'
                          >
                            <span className="fas fa-lock" />
                          </span>
                        </button>
                        <button
                          type="button"
                          className="btn btn-light"
                          data-method="enable"
                          title="Enable"
                        >
                          <span
                            className="docs-tooltip"
                            data-bs-toggle="tooltip"
                            data-animation="false"
                            title='$().cropper("enable")'
                          >
                            <span className="fas fa-unlock" />
                          </span>
                        </button>
                      </div>
                      <div className="btn-group mb-2 mr-1">
                        <button
                          type="button"
                          className="btn btn-light"
                          data-method="reset"
                          title="Reset"
                        >
                          <span
                            className="docs-tooltip"
                            data-bs-toggle="tooltip"
                            data-animation="false"
                            title='$().cropper("reset")'
                          >
                            <span className="fas fa-redo" />
                          </span>
                        </button>
                        <button
                          type="button"
                          className="btn btn-light btn-upload"
                          title="Upload image file"
                        >
                          <span
                            className="docs-tooltip"
                            data-bs-toggle="tooltip"
                            data-animation="false"
                            title="Import image with Blob URLs"
                          >
                            <span className="fas fa-upload" />
                          </span>
                        </button>
                        <button
                          type="button"
                          className="btn btn-light"
                          data-method="destroy"
                          title="Destroy"
                        >
                          <span
                            className="docs-tooltip"
                            data-bs-toggle="tooltip"
                            data-animation="false"
                            title='$().cropper("destroy")'
                          >
                            <span className="fas fa-power-off" />
                          </span>
                        </button>
                      </div>
                      <div className="btn-group btn-group-crop mb-2 mr-1">
                        <button
                          type="button"
                          className="btn btn-primary"
                          data-method="getCroppedCanvas"
                          data-option='{ "width": 160, "height": 90 }'
                        >
                          <span
                            className="docs-tooltip"
                            data-bs-toggle="tooltip"
                            data-animation="false"
                            title='$().cropper("getCroppedCanvas", { width: 160, height: 90 })'
                          >
                            160×90
                          </span>
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary"
                          data-method="getCroppedCanvas"
                          data-option='{ "width": 320, "height": 180 }'
                        >
                          <span
                            className="docs-tooltip"
                            data-bs-toggle="tooltip"
                            data-animation="false"
                            title='$().cropper("getCroppedCanvas", { width: 320, height: 180 })'
                          >
                            320×180
                          </span>
                        </button>
                      </div>
                      {/* Show the cropped image in modal */}
                      <div
                        className="modal fade docs-cropped"
                        id="getCroppedCanvasModal"
                        aria-hidden="true"
                        aria-labelledby="getCroppedCanvasTitle"
                        role="dialog"
                        tabIndex={-1}
                      >
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5
                                className="modal-title"
                                id="getCroppedCanvasTitle"
                              >
                                Cropped
                              </h5>
                              <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                              >
                                <span aria-hidden="true">×</span>
                              </button>
                            </div>
                            <div className="modal-body" />
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                data-dismiss="modal"
                              >
                                Close
                              </button>
                              <a
                                className="btn btn-primary"
                                id="download"
                                href="javascript:void(0);"
                                download="cropped.html"
                              >
                                Download
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* /.modal */}
                      <button
                        type="button"
                        className="btn btn-secondary mb-2 mr-1"
                        data-method="getData"
                        data-option
                        data-target="#putData"
                      >
                        <span
                          className="docs-tooltip"
                          data-bs-toggle="tooltip"
                          data-animation="false"
                          title='$().cropper("getData")'
                        >
                          Get Data
                        </span>
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary mb-2 mr-1"
                        data-method="setData"
                        data-target="#putData"
                      >
                        <span
                          className="docs-tooltip"
                          data-bs-toggle="tooltip"
                          data-animation="false"
                          title='$().cropper("setData", data)'
                        >
                          Set Data
                        </span>
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary mb-2 mr-1"
                        data-method="getContainerData"
                        data-option
                        data-target="#putData"
                      >
                        <span
                          className="docs-tooltip"
                          data-bs-toggle="tooltip"
                          data-animation="false"
                          title='$().cropper("getContainerData")'
                        >
                          Get Container Data
                        </span>
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary mb-2 mr-1"
                        data-method="getImageData"
                        data-option
                        data-target="#putData"
                      >
                        <span
                          className="docs-tooltip"
                          data-bs-toggle="tooltip"
                          data-animation="false"
                          title='$().cropper("getImageData")'
                        >
                          Get Image Data
                        </span>
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary mb-2 mr-1"
                        data-method="getCanvasData"
                        data-option
                        data-target="#putData"
                      >
                        <span
                          className="docs-tooltip"
                          data-bs-toggle="tooltip"
                          data-animation="false"
                          title='$().cropper("getCanvasData")'
                        >
                          Get Canvas Data
                        </span>
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary mb-2 mr-1"
                        data-method="setCanvasData"
                        data-target="#putData"
                      >
                        <span
                          className="docs-tooltip"
                          data-bs-toggle="tooltip"
                          data-animation="false"
                          title='$().cropper("setCanvasData", data)'
                        >
                          Set Canvas Data
                        </span>
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary mb-2 mr-1"
                        data-method="getCropBoxData"
                        data-option
                        data-target="#putData"
                      >
                        <span
                          className="docs-tooltip"
                          data-bs-toggle="tooltip"
                          data-animation="false"
                          title='$().cropper("getCropBoxData")'
                        >
                          Get Crop Box Data
                        </span>
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary mb-2 mr-1"
                        data-method="setCropBoxData"
                        data-target="#putData"
                      >
                        <span
                          className="docs-tooltip"
                          data-bs-toggle="tooltip"
                          data-animation="false"
                          title='$().cropper("setCropBoxData", data)'
                        >
                          Set Crop Box Data
                        </span>
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary mb-2 mr-1"
                        data-method="moveTo"
                        data-option={0}
                      >
                        <span
                          className="docs-tooltip"
                          data-bs-toggle="tooltip"
                          data-animation="false"
                          title="cropper.moveTo(0)"
                        >
                          Move to [0,0]
                        </span>
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary mb-2 mr-1"
                        data-method="zoomTo"
                        data-option={1}
                      >
                        <span
                          className="docs-tooltip"
                          data-bs-toggle="tooltip"
                          data-animation="false"
                          title="cropper.zoomTo(1)"
                        >
                          Zoom to 100%
                        </span>
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary mb-2 mr-1"
                        data-method="rotateTo"
                        data-option={180}
                      >
                        <span
                          className="docs-tooltip"
                          data-bs-toggle="tooltip"
                          data-animation="false"
                          title="cropper.rotateTo(180)"
                        >
                          Rotate 180°
                        </span>
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary mb-2 mr-1"
                        data-method="scale"
                        data-option={-2}
                        data-second-option={-1}
                      >
                        <span
                          className="docs-tooltip"
                          data-bs-toggle="tooltip"
                          title="cropper.scale(-2, -1)"
                        >
                          Scale (-2, -1)
                        </span>
                      </button>
                      <textarea
                        className="form-control"
                        id="putData"
                        rows={3}
                        placeholder="Get data to here or set data with this value"
                        defaultValue={""}
                      />
                    </div>
                    {/*end card-body*/}
                  </div>
                  {/*end card*/}
                </div>
                {/*end action*/}
              </div>{" "}
              {/*end col*/}
              <div className="col-lg-3">
                <div className="card">
                  <div className="card-body">
                    <div className="docs-preview clearfix">
                      <div className="img-preview preview-lg" />
                      <div className="img-preview preview-md" />
                      <div className="img-preview preview-sm" />
                      <div className="img-preview preview-xs" />
                    </div>
                    {/* <h3>Data:</h3> */}
                    <div className="docs-data">
                      <div className="input-group mb-2">
                        <span className="input-group-text">X</span>
                        <input
                          type="text"
                          className="form-control"
                          id="dataX"
                          placeholder="x"
                        />
                        <span className="input-group-text">px</span>
                      </div>
                      <div className="input-group mb-2">
                        <span className="input-group-text">Y</span>
                        <input
                          type="text"
                          className="form-control"
                          id="dataY"
                          placeholder="y"
                        />
                        <span className="input-group-text">px</span>
                      </div>
                      <div className="input-group mb-2">
                        <span className="input-group-text">Width</span>
                        <input
                          type="text"
                          className="form-control"
                          id="dataWidth"
                          placeholder="width"
                        />
                        <span className="input-group-text">px</span>
                      </div>
                      <div className="input-group mb-2">
                        <span className="input-group-text">Height</span>
                        <input
                          type="text"
                          className="form-control"
                          id="dataHeight"
                          placeholder="height"
                        />
                        <span className="input-group-text">px</span>
                      </div>
                      <div className="input-group mb-2">
                        <span className="input-group-text">Rotate</span>
                        <input
                          type="text"
                          className="form-control"
                          id="dataRotate"
                          placeholder="rotate"
                        />
                        <span className="input-group-text">deg</span>
                      </div>
                      <div className="input-group mb-2">
                        <span className="input-group-text">ScaleX</span>
                        <input
                          type="text"
                          className="form-control"
                          id="dataScaleX"
                          placeholder="scaleX"
                        />
                      </div>
                      <div className="input-group mb-0">
                        <span className="input-group-text">ScaleY</span>
                        <input
                          type="text"
                          className="form-control"
                          id="dataScaleY"
                          placeholder="scaleY"
                        />
                      </div>
                    </div>
                  </div>
                  {/*end card-body*/}
                </div>
                {/*end card*/}
                <div className="card docs-toggles">
                  <div className="card-body">
                    <div
                      className="btn-group d-flex flex-nowrap"
                      data-toggle="buttons"
                    >
                      <label className="btn btn-light mb-1 active">
                        <input
                          type="radio"
                          className="sr-only"
                          id="aspectRatio0"
                          name="aspectRatio"
                          defaultValue="1.7777777777777777"
                        />
                        <span
                          className="docs-tooltip"
                          data-bs-toggle="tooltip"
                          data-animation="false"
                          title="aspectRatio: 16 / 9"
                        >
                          16:9
                        </span>
                      </label>
                      <label className="btn btn-light mb-1">
                        <input
                          type="radio"
                          className="sr-only"
                          id="aspectRatio1"
                          name="aspectRatio"
                          defaultValue="1.3333333333333333"
                        />
                        <span
                          className="docs-tooltip"
                          data-bs-toggle="tooltip"
                          data-animation="false"
                          title="aspectRatio: 4 / 3"
                        >
                          4:3
                        </span>
                      </label>
                      <label className="btn btn-light mb-1">
                        <input
                          type="radio"
                          className="sr-only"
                          id="aspectRatio2"
                          name="aspectRatio"
                          defaultValue={1}
                        />
                        <span
                          className="docs-tooltip"
                          data-bs-toggle="tooltip"
                          data-animation="false"
                          title="aspectRatio: 1 / 1"
                        >
                          1:1
                        </span>
                      </label>
                      <label className="btn btn-light mb-1">
                        <input
                          type="radio"
                          className="sr-only"
                          id="aspectRatio3"
                          name="aspectRatio"
                          defaultValue="0.6666666666666666"
                        />
                        <span
                          className="docs-tooltip"
                          data-bs-toggle="tooltip"
                          data-animation="false"
                          title="aspectRatio: 2 / 3"
                        >
                          2:3
                        </span>
                      </label>
                      <label className="btn btn-light mb-1">
                        <input
                          type="radio"
                          className="sr-only"
                          id="aspectRatio4"
                          name="aspectRatio"
                          defaultValue="NaN"
                        />
                        <span
                          className="docs-tooltip"
                          data-bs-toggle="tooltip"
                          data-animation="false"
                          title="aspectRatio: NaN"
                        >
                          Free
                        </span>
                      </label>
                    </div>
                    <div
                      className="btn-group d-flex flex-nowrap"
                      data-toggle="buttons"
                    >
                      <label className="btn btn-light mb-1 active">
                        <input
                          type="radio"
                          className="sr-only"
                          id="viewMode0"
                          name="viewMode"
                          defaultValue={0}
                          defaultChecked
                        />
                        <span
                          className="docs-tooltip"
                          data-bs-toggle="tooltip"
                          data-animation="false"
                          title="View Mode 0"
                        >
                          VM0
                        </span>
                      </label>
                      <label className="btn btn-light mb-1">
                        <input
                          type="radio"
                          className="sr-only"
                          id="viewMode1"
                          name="viewMode"
                          defaultValue={1}
                        />
                        <span
                          className="docs-tooltip"
                          data-bs-toggle="tooltip"
                          data-animation="false"
                          title="View Mode 1"
                        >
                          VM1
                        </span>
                      </label>
                      <label className="btn btn-light mb-1">
                        <input
                          type="radio"
                          className="sr-only"
                          id="viewMode2"
                          name="viewMode"
                          defaultValue={2}
                        />
                        <span
                          className="docs-tooltip"
                          data-bs-toggle="tooltip"
                          data-animation="false"
                          title="View Mode 2"
                        >
                          VM2
                        </span>
                      </label>
                      <label className="btn btn-light mb-1">
                        <input
                          type="radio"
                          className="sr-only"
                          id="viewMode3"
                          name="viewMode"
                          defaultValue={3}
                        />
                        <span
                          className="docs-tooltip"
                          data-bs-toggle="tooltip"
                          data-animation="false"
                          title="View Mode 3"
                        >
                          VM3
                        </span>
                      </label>
                    </div>
                    <div className="dropdown dropup docs-options mt-2">
                      <button
                        type="button"
                        className="btn btn-secondary dropdown-toggle w-100"
                        id="toggleOptions"
                        data-bs-toggle="dropdown"
                        aria-expanded="true"
                      >
                        Toggle Options
                        <span className="caret" />
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="toggleOptions"
                        role="menu"
                      >
                        <li className="dropdown-item">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              id="responsive"
                              type="checkbox"
                              name="responsive"
                              defaultChecked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="responsive"
                            >
                              responsive
                            </label>
                          </div>
                        </li>
                        <li className="dropdown-item">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              id="restore"
                              type="checkbox"
                              name="restore"
                              defaultChecked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="restore"
                            >
                              restore
                            </label>
                          </div>
                        </li>
                        <li className="dropdown-item">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              id="checkCrossOrigin"
                              type="checkbox"
                              name="checkCrossOrigin"
                              defaultChecked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="checkCrossOrigin"
                            >
                              checkCrossOrigin
                            </label>
                          </div>
                        </li>
                        <li className="dropdown-item">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              id="checkOrientation"
                              type="checkbox"
                              name="checkOrientation"
                              defaultChecked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="checkOrientation"
                            >
                              checkOrientation
                            </label>
                          </div>
                        </li>
                        <li className="dropdown-item">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              id="modal"
                              type="checkbox"
                              name="modal"
                              defaultChecked
                            />
                            <label className="form-check-label" htmlFor="modal">
                              modal
                            </label>
                          </div>
                        </li>
                        <li className="dropdown-item">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              id="guides"
                              type="checkbox"
                              name="guides"
                              defaultChecked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="guides"
                            >
                              guides
                            </label>
                          </div>
                        </li>
                        <li className="dropdown-item">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              id="center"
                              type="checkbox"
                              name="center"
                              defaultChecked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="center"
                            >
                              center
                            </label>
                          </div>
                        </li>
                        <li className="dropdown-item">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              id="highlight"
                              type="checkbox"
                              name="highlight"
                              defaultChecked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="highlight"
                            >
                              highlight
                            </label>
                          </div>
                        </li>
                        <li className="dropdown-item">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              id="background"
                              type="checkbox"
                              name="background"
                              defaultChecked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="background"
                            >
                              background
                            </label>
                          </div>
                        </li>
                        <li className="dropdown-item">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              id="autoCrop"
                              type="checkbox"
                              name="autoCrop"
                              defaultChecked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="autoCrop"
                            >
                              autoCrop
                            </label>
                          </div>
                        </li>
                        <li className="dropdown-item">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              id="movable"
                              type="checkbox"
                              name="movable"
                              defaultChecked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="movable"
                            >
                              movable
                            </label>
                          </div>
                        </li>
                        <li className="dropdown-item">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              id="rotatable"
                              type="checkbox"
                              name="rotatable"
                              defaultChecked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="rotatable"
                            >
                              rotatable
                            </label>
                          </div>
                        </li>
                        <li className="dropdown-item">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              id="scalable"
                              type="checkbox"
                              name="scalable"
                              defaultChecked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="scalable"
                            >
                              scalable
                            </label>
                          </div>
                        </li>
                        <li className="dropdown-item">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              id="zoomable"
                              type="checkbox"
                              name="zoomable"
                              defaultChecked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="zoomable"
                            >
                              zoomable
                            </label>
                          </div>
                        </li>
                        <li className="dropdown-item">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              id="zoomOnTouch"
                              type="checkbox"
                              name="zoomOnTouch"
                              defaultChecked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="zoomOnTouch"
                            >
                              zoomOnTouch
                            </label>
                          </div>
                        </li>
                        <li className="dropdown-item">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              id="zoomOnWheel"
                              type="checkbox"
                              name="zoomOnWheel"
                              defaultChecked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="zoomOnWheel"
                            >
                              zoomOnWheel
                            </label>
                          </div>
                        </li>
                        <li className="dropdown-item">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              id="cropBoxMovable"
                              type="checkbox"
                              name="cropBoxMovable"
                              defaultChecked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="cropBoxMovable"
                            >
                              cropBoxMovable
                            </label>
                          </div>
                        </li>
                        <li className="dropdown-item">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              id="cropBoxResizable"
                              type="checkbox"
                              name="cropBoxResizable"
                              defaultChecked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="cropBoxResizable"
                            >
                              cropBoxResizable
                            </label>
                          </div>
                        </li>
                        <li className="dropdown-item">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              id="toggleDragModeOnDblclick"
                              type="checkbox"
                              name="toggleDragModeOnDblclick"
                              defaultChecked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="toggleDragModeOnDblclick"
                            >
                              toggleDragModeOnDblclick
                            </label>
                          </div>
                        </li>
                      </ul>
                    </div>
                    {/* /.dropdown */}
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

export default Formscrop;
