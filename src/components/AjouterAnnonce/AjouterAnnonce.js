import React, { Component } from "react";
import {withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import axios from "axios";
import { addAnnoncementAction } from "../../actions/annoncesActions"
import { loginAction } from "../../actions/userActions";
import { villes, categories, numbers,checkboxes } from "./static";
import Checkbox from "./checkbox";
import"./AjouterAnnonce.css"
import { thisExpression } from "@babel/types";

class AjouterAnnonce extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titre: "",
      region: "",
      surface: "",
      adresse: "",
      prix: "",
      nombreEtage: "",
      nombrePiece: "",
      nombreFacade: "",
      nombreSalleDeBain: "",
      statut: "",
      description: "",
      ALaUne: false,
      ValableAPartirDe: "",
      etat: "non confirme",
      categorie: "",
      options: {
        piscine: false,
        jardin: false,
        interphone: false,
        internet: false,
        vueSurMer: false,
        camera: false,
        chauffage: false,
        balcon: false,
        climatisation: false
      },
      myoptions:[],
      imagesUrl: [],
      files : [],
      imagesUrl: [],
      message: "",
      nombreGarage: "",
      nombreSalon: "",
      situation : false,
      agentId:"",
      video:"",
      lat:"",
      lng:""
    };
   // this.remplir = this.remplir.bind(this);
  }

componentWillMount(){

}
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleChange= e=> {
    this.setState({
      options: {
        ...this.state.options,
        [e.target.name]: !this.state.options[e.target.name]
      }
    },()=>{
      let { options } = this.state
      let optionsKeys = Object.keys(options);
     let validOptions = optionsKeys.filter(el => options[el] === true);
      this.setState({
       myoptions:validOptions
      })
    });
  }

  onAddAnnoncementClick = () => {
    //console.log(this.state)

    if(this.state.statut=="A Vendre" || this.state.statut=="A louer"){
      this.props
      .addAnnoncementAction({
        ...this.state
      })
      .then(res => {
        res === 200 && this.props.history.push("/annonces");

      });
    }else{
      alert("add status")
    }
    
  };

  render() {
  console.log('this.props.user :',this.props.user)
    return (
      <div className="AjouterAnnonce">
        <div className="page-wrapper">
          <div className="container-fluid">
            <div className="row page-titles">
              <div className="col-md-5 align-self-center">
              
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="javascript:void(0)">Gérer Annonces</a>
                  </li>
                  <li className="breadcrumb-item active">Ajouter Annonce</li>
                </ol>
              </div>
              <div className>
                <button className="right-side-toggle waves-effect waves-light btn-inverse btn btn-circle btn-sm pull-right m-l-10">
                  <i className="ti-settings text-white" />
                </button>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-header bg-info">
                    <h4 className="m-b-0 text-white">Ajouter Annonce</h4>
                  </div>
                  <div className="card-body">
                    <form action="#">
                      <div className="form-body">
                        <h3 className="card-title">Informations du bien immobilier</h3>
                        <hr />
                        <div className="col-sm-6">
                      <div className="single-query form-group bottom20">
                      <label className="control-label">Titre</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Entrer le titre de votre bien"
                          name="titre"
                          value={this.state.titre}
                          onChange={this.onChange}
                        />
                      </div>
                    </div> 
                        <div className="row p-t-20">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="control-label">
                                Catégories
                              </label>
                              <select className="select2 form-control custom-select"
                              value={this.state.categorie}
                              onChange={this.onChange}
                              name="categorie"
                              >
                              <option>Categorie</option>
                          {categories.map((el, i) => (
                            <option key={i} value={el}>
                              {el}
                            </option>
                          ))}
                              </select>
                            </div>
                          </div>
                          {/*/span*/}
                          <div className="col-md-6">
                            <div className="form-group has-danger">
                              <label className="control-label">
                                Valables A Partir De
                              </label>
                              <input
                                type="date"
                                className="form-control"
                                placeholder="dd/mm/yyyy"
                                onChange={this.onChange}
                                value={this.state.ValableAPartirDe}
                                name="ValableAPartirDe"
                              />
                            </div>
                          </div>
                          {/*/span*/}
                        </div>
                        {/*/row*/}
                        <div className="row">
                          <div className="col-md-4">
                            <label className="control-label">Prix</label>
                            <div className="input-group mb-3">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Entrer le prix"
                                name="prix"
                          value={this.state.prix}
                          onChange={this.onChange}
                                aria-label="Username"
                              />
                              <div className="input-group-append">
                                <span className="input-group-text">DT</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <label className="control-label">adresse</label>
                            <div className="input-group mb-3">
                              <input
                                type="text"
                                className="form-control"
                                onChange={this.onChange}
                                value={this.state.adresse}
                                name="adresse"
                                aria-label="Username"
                              />
                            </div>
                          </div>
                          {/*/span*/}
                          <div className="col-md-4">
                            <div className="form-group">
                              <label className="control-label">Statut</label>
                              <select className="form-control custom-select"
                               value={this.state.statut}
                               onChange={this.onChange}
                               name="statut"
                              >
                               <option className="active">
                            Choisir un statut
                          </option>
                          <option className="active" value="A louer">
                            A louer
                          </option>
                          <option className="active" value="A Vendre">
                            A Vendre
                          </option>
                              </select>
                            </div>
                          </div>
                          {/*/span*/}
                        </div>
                        {/*/row*/}
                        <div className="row">
                        <div className="col-md-4">
                            <label className="control-label">Surface</label>
                            <div className="input-group mb-3">
                              <input
                                type="text"
                                className="form-control"
                                name="surface"
                                value={this.state.surface}
                                onChange={this.onChange}
                                aria-label="Username"
                              />
                              <div className="input-group-append">
                                <span className="input-group-text">M²</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-group">
                              <label className="control-label">
                              Chambres
                              </label>
                              <select className="form-control custom-select"
                               name="nombrePiece"
                               value={this.state.nombrePiece}
                               onChange={this.onChange}
                               >
                                <option className="active">Nombre des piéces</option>
                          {numbers.map((el, i) =>
                            el !== 3 ? (
                              <option key={i} value={el}>
                                {el}
                              </option>
                            ) : (
                              <option key={i} value={el}>
                                3 ou +
                              </option>
                            )
                          )}
                              </select>
                            </div>
                          </div>

                          {/*/span*/}
                          <div className="col-md-4">
                            <div className="form-group">
                              <label className="control-label">Façade</label>
                              <select className="form-control custom-select"
                               name="nombreFacade"
                               value={this.state.nombreFacade}
                               onChange={this.onChange}
                               >
                               <option className="active">Nombre de Façade</option>
                          {numbers.map((el, i) =>
                            el !== 3 ? (
                              <option key={i} value={el}>
                                {el}
                              </option>
                            ) : (
                              <option key={i} value={el}>
                                3 ou +
                              </option>
                            )
                          )}
                              </select>
                            </div>
                          </div>
                          {/*/span*/}
                        </div>
                        {/*/row*/}
                        <div className="row">
                          <div className="col-md-4">
                            <div className="form-group">
                              <label className="control-label">Salon</label>
                              <select className="form-control custom-select"
                               name="nombreSalon"
                               value={this.state.nombreSalon}
                               onChange={this.onChange}
                               >
                                   <option className="active">Nombre de salon</option>
                          {numbers.map((el, i) =>
                            el !== 3 ? (
                              <option key={i} value={el}>
                                {el}
                              </option>
                            ) : (
                              <option key={i} value={el}>
                                3 ou +
                              </option>
                            )
                          )}
                              </select>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-group">
                              <label className="control-label">Salle de bains</label>
                              <select className="form-control custom-select"
                              name="nombreSalleDeBain"
                              value={this.state.nombreSalleDeBain}
                              onChange={this.onChange}
                              >
                                <option className="active">
                            Nombre de salle de bains
                          </option>
                          {numbers.map((el, i) =>
                            el !== 3 ? (
                              <option key={i} value={el}>
                                {el}
                              </option>
                            ) : (
                              <option key={i} value={el}>
                                3 ou +
                              </option>
                            )
                          )}
                              </select>
                            </div>
                          </div>

                          <div className="col-md-4">
                            <div className="form-group">
                              <label className="control-label">Garages</label>
                              <select className="form-control custom-select"
                               onChange={this.onChange}
                               name="nombreGarage"
                               value={this.state.nombreGarage}
                               >
                                 <option className="active">Nombre de Garges</option>
                          {numbers.map((el, i) =>
                            el !== 3 ? (
                              <option key={i} value={el}>
                                {el}
                              </option>
                            ) : (
                              <option key={i} value={el}>
                                3 ou +
                              </option>
                            )
                          )}
                              </select>
                            </div>
                          </div>
                          {/*/span*/}
                          <div className="col-md-4">
                            <div className="form-group">
                              <label className="control-label">Région</label>
                              <select className="select2 form-control custom-select"
                               name="region"
                               value={this.state.region}
                               onChange={this.onChange}
                               >
                        <option>Localisation</option>
                          {villes.map((el, i) => (
                            <option key={i} value={el}>
                              {el}
                            </option>
                          ))}
                              </select>
                            </div>
                          </div>
                          {/*/span*/}
                          <div className="col-md-4">
                            <div className="form-group">
                              <label className="control-label">Etage</label>
                              <select className="select2 form-control custom-select"
                               name="nombreEtage"
                               value={this.state.nombreEtage}
                               onChange={this.onChange}
                               >
                        <option className="active">Nombre des étages</option>
                          {numbers.map((el, i) =>
                            el !== 3 ? (
                              <option key={i} value={el}>
                                {el}
                              </option>
                            ) : (
                              <option key={i} value={el}>
                                3 ou +
                              </option>
                            )
                          )}
                              </select>
                            </div>
                          </div>
                        </div>
                        {/*/row*/}
                        <div className="col-md-12 col-sm-12 col-xs-12">
                          <label className="opt">Options:</label>
                          <div className="row">
                            <div className="col-md-3">
                              <div className="form-group">
                                <div className="input-group">
                                  <div className="icheck-list">
                                  {checkboxes.map(item => (
                                  <div className="icheck-list">
                                    <Checkbox
                                      name={item.name}
                                      checked={this.state.options[item.name]}
                                      onChange={e => this.handleChange(e)}
                                    />
                                    <label
                                      key={item.key}
                                      style={{
                                        fontSize: "16px",
                                        textTransform: "capitalize"
                                      }}
                                    >
                                      {item.name}
                                    </label>
                                  </div>
                                ))}
                                    
                                </div>
                                </div>
                              </div>
                            </div>
                           
                            {/*/span*/}
                            <div className="col-md-3">
                              <div className="form-group">
                                <label className="control-label">A La Une</label>
                                <div className="switchery-demo m-b-30">
                                  <input
                                    type="checkbox"
                                    checked
                                    className="js-switch"
                                    data-color="#ffbc34"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="form-group">
                                <label className="control-label">Activé</label>
                                <div className="switchery-demo m-b-30">
                                  <input
                                    type="checkbox"
                                    checked
                                    className="js-switch"
                                    data-color="#ffbc34"
                                  />
                                </div>
                              </div>
                            </div>

                            {/*/span*/}

                            {/*/span*/}

                            {/*/span*/}
                          </div>
                        </div>
                      
                        <div className="col-sm-12">
                      <h3 className="box-title m-t-40"> Description</h3>
                      <br />
                      <textarea
                        className="description-taxtArea"
                        placeholder="Entrer la description de votre bien"
                        name="description"
                        value={this.state.description}
                        onChange={this.onChange}
                      ></textarea>
                      
                    </div>                      
                        <h3 className="box-title m-t-40">Photo</h3>
                        <hr />

        <div className="row">
          <div className="col-12">
            
              <div className="card-body">
                <div className="row">
                  <div className="col-md-9">
                    {/* <h3>Demo:</h3> */}
                    <div className="img-container">
                      <img id="image" src="../assets/images/big/img5.jpg" alt="Picture" />
                    </div>
                  </div>
                  <div className="col-md-3">
                    {/* <h3>Preview:</h3> */}
                    <div className="docs-preview clearfix">
                      <div className="img-preview preview-lg" />
                      <div className="img-preview preview-md" />
                      <div className="img-preview preview-sm" />
                      <div className="img-preview preview-xs" />
                    </div>
                    {/* <h3>Data:</h3> */}
                    <div className="docs-data">
                      <div className="input-group input-group-sm">
                        <span className="input-group-prepend">
                          <label className="input-group-text" htmlFor="dataX">X</label>
                        </span>
                        <input type="text" className="form-control" id="dataX" placeholder="x" />
                        <span className="input-group-append">
                          <span className="input-group-text">px</span>
                        </span>
                      </div>
                      <div className="input-group input-group-sm">
                        <span className="input-group-prepend">
                          <label className="input-group-text" htmlFor="dataY">Y</label>
                        </span>
                        <input type="text" className="form-control" id="dataY" placeholder="y" />
                        <span className="input-group-append">
                          <span className="input-group-text">px</span>
                        </span>
                      </div>
                      <div className="input-group input-group-sm">
                        <span className="input-group-prepend">
                          <label className="input-group-text" htmlFor="dataWidth">Width</label>
                        </span>
                        <input type="text" className="form-control" id="dataWidth" placeholder="width" />
                        <span className="input-group-append">
                          <span className="input-group-text">px</span>
                        </span>
                      </div>
                      <div className="input-group input-group-sm">
                        <span className="input-group-prepend">
                          <label className="input-group-text" htmlFor="dataHeight">Height</label>
                        </span>
                        <input type="text" className="form-control" id="dataHeight" placeholder="height" />
                        <span className="input-group-append">
                          <span className="input-group-text">px</span>
                        </span>
                      </div>
                      <div className="input-group input-group-sm">
                        <span className="input-group-prepend">
                          <label className="input-group-text" htmlFor="dataRotate">Rotate</label>
                        </span>
                        <input type="text" className="form-control" id="dataRotate" placeholder="rotate" />
                        <span className="input-group-append">
                          <span className="input-group-text">deg</span>
                        </span>
                      </div>
                      <div className="input-group input-group-sm">
                        <span className="input-group-prepend">
                          <label className="input-group-text" htmlFor="dataScaleX">ScaleX</label>
                        </span>
                        <input type="text" className="form-control" id="dataScaleX" placeholder="scaleX" />
                      </div>
                      <div className="input-group input-group-sm">
                        <span className="input-group-prepend">
                          <label className="input-group-text" htmlFor="dataScaleY">ScaleY</label>
                        </span>
                        <input type="text" className="form-control" id="dataScaleY" placeholder="scaleY" />
                      </div>
                    </div>
                  </div>
                </div>
              
            </div>
          </div>
        </div>
        
          <div className="card-body">
            <div className="row">
              <div className="col-md-9 docs-buttons">
                {/* <h3>Toolbar:</h3> */}
                <div className="btn-group">
                  <button type="button" className="btn btn-info" data-method="setDragMode" data-option="move" title="Move">
                    <span className="docs-tooltip" data-toggle="tooltip" data-animation="false" title="$().cropper(&quot;setDragMode&quot;, &quot;move&quot;)">
                      <span className="fas fa-arrows-alt" />
                    </span>
                  </button>
                  <button type="button" className="btn btn-info" data-method="setDragMode" data-option="crop" title="Crop">
                    <span className="docs-tooltip" data-toggle="tooltip" data-animation="false" title="$().cropper(&quot;setDragMode&quot;, &quot;crop&quot;)">
                      <span className="fa fa-crop" />
                    </span>
                  </button>
                </div>
                <div className="btn-group">
                  <button type="button" className="btn btn-info" data-method="zoom" data-option="0.1" title="Zoom In">
                    <span className="docs-tooltip" data-toggle="tooltip" data-animation="false" title="$().cropper(&quot;zoom&quot;, 0.1)">
                      <span className="fa fa-search-plus" />
                    </span>
                  </button>
                  <button type="button" className="btn btn-info" data-method="zoom" data-option="-0.1" title="Zoom Out">
                    <span className="docs-tooltip" data-toggle="tooltip" data-animation="false" title="$().cropper(&quot;zoom&quot;, -0.1)">
                      <span className="fa fa-search-minus" />
                    </span>
                  </button>
                </div>
                <div className="btn-group">
                  <button type="button" className="btn btn-info" data-method="move" data-option={-10} data-second-option={0} title="Move Left">
                    <span className="docs-tooltip" data-toggle="tooltip" data-animation="false" title="$().cropper(&quot;move&quot;, -10, 0)">
                      <span className="fa fa-arrow-left" />
                    </span>
                  </button>
                  <button type="button" className="btn btn-info" data-method="move" data-option={10} data-second-option={0} title="Move Right">
                    <span className="docs-tooltip" data-toggle="tooltip" data-animation="false" title="$().cropper(&quot;move&quot;, 10, 0)">
                      <span className="fa fa-arrow-right" />
                    </span>
                  </button>
                  <button type="button" className="btn btn-info" data-method="move" data-option={0} data-second-option={-10} title="Move Up">
                    <span className="docs-tooltip" data-toggle="tooltip" data-animation="false" title="$().cropper(&quot;move&quot;, 0, -10)">
                      <span className="fa fa-arrow-up" />
                    </span>
                  </button>
                  <button type="button" className="btn btn-info" data-method="move" data-option={0} data-second-option={10} title="Move Down">
                    <span className="docs-tooltip" data-toggle="tooltip" data-animation="false" title="$().cropper(&quot;move&quot;, 0, 10)">
                      <span className="fa fa-arrow-down" />
                    </span>
                  </button>
                </div>
                <div className="btn-group">
                  <button type="button" className="btn btn-info" data-method="rotate" data-option={-45} title="Rotate Left">
                    <span className="docs-tooltip" data-toggle="tooltip" data-animation="false" title="$().cropper(&quot;rotate&quot;, -45)">
                      <span className="fas fa-undo" />
                    </span>
                  </button>
                  <button type="button" className="btn btn-info" data-method="rotate" data-option={45} title="Rotate Right">
                    <span className="docs-tooltip" data-toggle="tooltip" data-animation="false" title="$().cropper(&quot;rotate&quot;, 45)">
                      <span className="fa fa-redo" />
                    </span>
                  </button>
                </div>
                <div className="btn-group">
                  <button type="button" className="btn btn-info" data-method="scaleX" data-option={-1} title="Flip Horizontal">
                    <span className="docs-tooltip" data-toggle="tooltip" data-animation="false" title="$().cropper(&quot;scaleX&quot;, -1)">
                      <span className="fa fa-arrows-alt-h" />
                    </span>
                  </button>
                  <button type="button" className="btn btn-info" data-method="scaleY" data-option={-1} title="Flip Vertical">
                    <span className="docs-tooltip" data-toggle="tooltip" data-animation="false" title="$().cropper(&quot;scaleY&quot;, -1)">
                      <span className="fa fa-arrows-alt-v" />
                    </span>
                  </button>
                </div>
                <div className="btn-group">
                  <button type="button" className="btn btn-info" data-method="crop" title="Crop">
                    <span className="docs-tooltip" data-toggle="tooltip" data-animation="false" title="$().cropper(&quot;crop&quot;)">
                      <span className="fa fa-check" />
                    </span>
                  </button>
                  <button type="button" className="btn btn-info" data-method="clear" title="Clear">
                    <span className="docs-tooltip" data-toggle="tooltip" data-animation="false" title="$().cropper(&quot;clear&quot;)">
                      <span className="fas fa-trash" />
                    </span>
                  </button>
                </div>
                <div className="btn-group">
                  <button type="button" className="btn btn-info" data-method="disable" title="Disable">
                    <span className="docs-tooltip" data-toggle="tooltip" data-animation="false" title="$().cropper(&quot;disable&quot;)">
                      <span className="fa fa-lock" />
                    </span>
                  </button>
                  <button type="button" className="btn btn-info" data-method="enable" title="Enable">
                    <span className="docs-tooltip" data-toggle="tooltip" data-animation="false" title="$().cropper(&quot;enable&quot;)">
                      <span className="fa fa-unlock" />
                    </span>
                  </button>
                </div>
                <div className="btn-group">
                  <button type="button" className="btn btn-info" data-method="reset" title="Reset">
                    <span className="docs-tooltip" data-toggle="tooltip" data-animation="false" title="$().cropper(&quot;reset&quot;)">
                      <span className="fas fa-undo-alt" />
                    </span>
                  </button>
                  <label className="btn btn-info btn-upload m-b-0" htmlFor="inputImage" title="Upload image file">
                    <input type="file" className="sr-only" id="inputImage" name="file" accept=".jpg,.jpeg,.png,.gif,.bmp,.tiff" />
                    <span className="docs-tooltip" data-toggle="tooltip" data-animation="false" title="Import image with Blob URLs">
                      <span className="fa fa-upload" />
                    </span>
                  </label>
                  <button type="button" className="btn btn-info" data-method="destroy" title="Destroy">
                    <span className="docs-tooltip" data-toggle="tooltip" data-animation="false" title="$().cropper(&quot;destroy&quot;)">
                      <span className="fa fa-power-off" />
                    </span>
                  </button>
                </div>
                <div className="btn-group btn-group-crop">
                  <button type="button" className="btn btn-success" data-method="getCroppedCanvas" data-option="{ &quot;maxWidth&quot;: 4096, &quot;maxHeight&quot;: 4096 }">
                    <span className="docs-tooltip" data-toggle="tooltip" data-animation="false" title="$().cropper(&quot;getCroppedCanvas&quot;, { maxWidth: 4096, maxHeight: 4096 })">
                      Get Cropped Canvas
                    </span>
                  </button>
                  <button type="button" className="btn btn-success" data-method="getCroppedCanvas" data-option="{ &quot;width&quot;: 160, &quot;height&quot;: 90 }">
                    <span className="docs-tooltip" data-toggle="tooltip" data-animation="false" title="$().cropper(&quot;getCroppedCanvas&quot;, { width: 160, height: 90 })">
                      160×90
                    </span>
                  </button>
                  <button type="button" className="btn btn-success" data-method="getCroppedCanvas" data-option="{ &quot;width&quot;: 320, &quot;height&quot;: 180 }">
                    <span className="docs-tooltip" data-toggle="tooltip" data-animation="false" title="$().cropper(&quot;getCroppedCanvas&quot;, { width: 320, height: 180 })">
                      320×180
                    </span>
                  </button>
                </div>
                {/* Show the cropped image in modal */}
                <div className="modal fade docs-cropped" id="getCroppedCanvasModal" aria-hidden="true" aria-labelledby="getCroppedCanvasTitle" role="dialog" tabIndex={-1}>
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="getCroppedCanvasTitle">Cropped</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">×</span>
                        </button>
                      </div>
                      <div className="modal-body" />
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <a className="btn btn-primary" id="download" href="javascript:void(0);" download="cropped.jpg">Download</a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /.modal */}
                <button type="button" className="btn btn-secondary" data-method="getData" data-option data-target="#putData">
                  <span className="docs-tooltip" data-toggle="tooltip" data-animation="false" title="$().cropper(&quot;getData&quot;)">
                    Get Data
                  </span>
                </button>
                <button type="button" className="btn btn-secondary" data-method="setData" data-target="#putData">
                  <span className="docs-tooltip" data-toggle="tooltip" data-animation="false" title="$().cropper(&quot;setData&quot;, data)">
                    Set Data
                  </span>
                </button>
                <button type="button" className="btn btn-secondary" data-method="getContainerData" data-option data-target="#putData">
                  <span className="docs-tooltip" data-toggle="tooltip" data-animation="false" title="$().cropper(&quot;getContainerData&quot;)">
                    Get Container Data
                  </span>
                </button>
                <button type="button" className="btn btn-secondary" data-method="getImageData" data-option data-target="#putData">
                  <span className="docs-tooltip" data-toggle="tooltip" data-animation="false" title="$().cropper(&quot;getImageData&quot;)">
                    Get Image Data
                  </span>
                </button>
                <button type="button" className="btn btn-secondary" data-method="getCanvasData" data-option data-target="#putData">
                  <span className="docs-tooltip" data-toggle="tooltip" data-animation="false" title="$().cropper(&quot;getCanvasData&quot;)">
                    Get Canvas Data
                  </span>
                </button>
                <button type="button" className="btn btn-secondary" data-method="setCanvasData" data-target="#putData">
                  <span className="docs-tooltip" data-toggle="tooltip" data-animation="false" title="$().cropper(&quot;setCanvasData&quot;, data)">
                    Set Canvas Data
                  </span>
                </button>
                <button type="button" className="btn btn-secondary" data-method="getCropBoxData" data-option data-target="#putData">
                  <span className="docs-tooltip" data-toggle="tooltip" data-animation="false" title="$().cropper(&quot;getCropBoxData&quot;)">
                    Get Crop Box Data
                  </span>
                </button>
                <button type="button" className="btn btn-secondary" data-method="setCropBoxData" data-target="#putData">
                  <span className="docs-tooltip" data-toggle="tooltip" data-animation="false" title="$().cropper(&quot;setCropBoxData&quot;, data)">
                    Set Crop Box Data
                  </span>
                </button>
                <button type="button" className="btn btn-secondary" data-method="moveTo" data-option={0}>
                  <span className="docs-tooltip" data-toggle="tooltip" data-animation="false" title="cropper.moveTo(0)">
                    Move to [0,0]
                  </span>
                </button>
                <button type="button" className="btn btn-secondary" data-method="zoomTo" data-option={1}>
                  <span className="docs-tooltip" data-toggle="tooltip" data-animation="false" title="cropper.zoomTo(1)">
                    Zoom to 100%
                  </span>
                </button>
                <button type="button" className="btn btn-secondary" data-method="rotateTo" data-option={180}>
                  <span className="docs-tooltip" data-toggle="tooltip" data-animation="false" title="cropper.rotateTo(180)">
                    Rotate 180°
                  </span>
                </button>
                <button type="button" className="btn btn-secondary" data-method="scale" data-option={-2} data-second-option={-1}>
                  <span className="docs-tooltip" data-toggle="tooltip" title="cropper.scale(-2, -1)">
                    Scale (-2, -1)
                  </span>
                </button>
              </div>
              {/* /.docs-buttons */}
              <div className="col-md-3 docs-toggles">
                {/* <h3>Toggles:</h3> */}
                <div className="btn-group d-flex flex-nowrap" data-toggle="buttons">
                  <label className="btn btn-info active">
                    <input type="radio" className="sr-only" id="aspectRatio0" name="aspectRatio" defaultValue="1.7777777777777777" />
                    <span className="docs-tooltip" data-toggle="tooltip" data-animation="false" title="aspectRatio: 16 / 9">
                      16:9
                    </span>
                  </label>
                  <label className="btn btn-info">
                    <input type="radio" className="sr-only" id="aspectRatio1" name="aspectRatio" defaultValue="1.3333333333333333" />
                    <span className="docs-tooltip" data-toggle="tooltip" data-animation="false" title="aspectRatio: 4 / 3">
                      4:3
                    </span>
                  </label>
                  <label className="btn btn-info">
                    <input type="radio" className="sr-only" id="aspectRatio2" name="aspectRatio" defaultValue={1} />
                    <span className="docs-tooltip" data-toggle="tooltip" data-animation="false" title="aspectRatio: 1 / 1">
                      1:1
                    </span>
                  </label>
                  <label className="btn btn-info">
                    <input type="radio" className="sr-only" id="aspectRatio3" name="aspectRatio" defaultValue="0.6666666666666666" />
                    <span className="docs-tooltip" data-toggle="tooltip" data-animation="false" title="aspectRatio: 2 / 3">
                      2:3
                    </span>
                  </label>
                  <label className="btn btn-info">
                    <input type="radio" className="sr-only" id="aspectRatio4" name="aspectRatio" defaultValue="NaN" />
                    <span className="docs-tooltip" data-toggle="tooltip" data-animation="false" title="aspectRatio: NaN">
                      Free
                    </span>
                  </label>
                </div>
                <div className="btn-group d-flex flex-nowrap" data-toggle="buttons">
                  <label className="btn btn-info active">
                    <input type="radio" className="sr-only" id="viewMode0" name="viewMode" defaultValue={0} defaultChecked />
                    <span className="docs-tooltip" data-toggle="tooltip" data-animation="false" title="View Mode 0">
                      VM0
                    </span>
                  </label>
                  <label className="btn btn-info">
                    <input type="radio" className="sr-only" id="viewMode1" name="viewMode" defaultValue={1} />
                    <span className="docs-tooltip" data-toggle="tooltip" data-animation="false" title="View Mode 1">
                      VM1
                    </span>
                  </label>
                  <label className="btn btn-info">
                    <input type="radio" className="sr-only" id="viewMode2" name="viewMode" defaultValue={2} />
                    <span className="docs-tooltip" data-toggle="tooltip" data-animation="false" title="View Mode 2">
                      VM2
                    </span>
                  </label>
                  <label className="btn btn-info">
                    <input type="radio" className="sr-only" id="viewMode3" name="viewMode" defaultValue={3} />
                    <span className="docs-tooltip" data-toggle="tooltip" data-animation="false" title="View Mode 3">
                      VM3
                    </span>
                  </label>
                </div>
                <div className="dropdown dropup docs-options">
                  <button type="button" className="btn btn-info btn-block dropdown-toggle" id="toggleOptions" data-toggle="dropdown" aria-expanded="true">
                    Toggle Options
                    <span className="caret" />
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="toggleOptions" role="menu">
                    <li className="dropdown-item">
                      <div className="form-check">
                        <input className="form-check-input" id="responsive" type="checkbox" name="responsive" defaultChecked />
                        <label className="form-check-label" htmlFor="responsive">responsive</label>
                      </div>
                    </li>
                    <li className="dropdown-item">
                      <div className="form-check">
                        <input className="form-check-input" id="restore" type="checkbox" name="restore" defaultChecked />
                        <label className="form-check-label" htmlFor="restore">restore</label>
                      </div>
                    </li>
                    <li className="dropdown-item">
                      <div className="form-check">
                        <input className="form-check-input" id="checkCrossOrigin" type="checkbox" name="checkCrossOrigin" defaultChecked />
                        <label className="form-check-label" htmlFor="checkCrossOrigin">checkCrossOrigin</label>
                      </div>
                    </li>
                    <li className="dropdown-item">
                      <div className="form-check">
                        <input className="form-check-input" id="checkOrientation" type="checkbox" name="checkOrientation" defaultChecked />
                        <label className="form-check-label" htmlFor="checkOrientation">checkOrientation</label>
                      </div>
                    </li>
                    <li className="dropdown-item">
                      <div className="form-check">
                        <input className="form-check-input" id="modal" type="checkbox" name="modal" defaultChecked />
                        <label className="form-check-label" htmlFor="modal">modal</label>
                      </div>
                    </li>
                    <li className="dropdown-item">
                      <div className="form-check">
                        <input className="form-check-input" id="guides" type="checkbox" name="guides" defaultChecked />
                        <label className="form-check-label" htmlFor="guides">guides</label>
                      </div>
                    </li>
                    <li className="dropdown-item">
                      <div className="form-check">
                        <input className="form-check-input" id="center" type="checkbox" name="center" defaultChecked />
                        <label className="form-check-label" htmlFor="center">center</label>
                      </div>
                    </li>
                    <li className="dropdown-item">
                      <div className="form-check">
                        <input className="form-check-input" id="highlight" type="checkbox" name="highlight" defaultChecked />
                        <label className="form-check-label" htmlFor="highlight">highlight</label>
                      </div>
                    </li>
                    <li className="dropdown-item">
                      <div className="form-check">
                        <input className="form-check-input" id="background" type="checkbox" name="background" defaultChecked />
                        <label className="form-check-label" htmlFor="background">background</label>
                      </div>
                    </li>
                    <li className="dropdown-item">
                      <div className="form-check">
                        <input className="form-check-input" id="autoCrop" type="checkbox" name="autoCrop" defaultChecked />
                        <label className="form-check-label" htmlFor="autoCrop">autoCrop</label>
                      </div>
                    </li>
                    <li className="dropdown-item">
                      <div className="form-check">
                        <input className="form-check-input" id="movable" type="checkbox" name="movable" defaultChecked />
                        <label className="form-check-label" htmlFor="movable">movable</label>
                      </div>
                    </li>
                    <li className="dropdown-item">
                      <div className="form-check">
                        <input className="form-check-input" id="rotatable" type="checkbox" name="rotatable" defaultChecked />
                        <label className="form-check-label" htmlFor="rotatable">rotatable</label>
                      </div>
                    </li>
                    <li className="dropdown-item">
                      <div className="form-check">
                        <input className="form-check-input" id="scalable" type="checkbox" name="scalable" defaultChecked />
                        <label className="form-check-label" htmlFor="scalable">scalable</label>
                      </div>
                    </li>
                    <li className="dropdown-item">
                      <div className="form-check">
                        <input className="form-check-input" id="zoomable" type="checkbox" name="zoomable" defaultChecked />
                        <label className="form-check-label" htmlFor="zoomable">zoomable</label>
                      </div>
                    </li>
                    <li className="dropdown-item">
                      <div className="form-check">
                        <input className="form-check-input" id="zoomOnTouch" type="checkbox" name="zoomOnTouch" defaultChecked />
                        <label className="form-check-label" htmlFor="zoomOnTouch">zoomOnTouch</label>
                      </div>
                    </li>
                    <li className="dropdown-item">
                      <div className="form-check">
                        <input className="form-check-input" id="zoomOnWheel" type="checkbox" name="zoomOnWheel" defaultChecked />
                        <label className="form-check-label" htmlFor="zoomOnWheel">zoomOnWheel</label>
                      </div>
                    </li>
                    <li className="dropdown-item">
                      <div className="form-check">
                        <input className="form-check-input" id="cropBoxMovable" type="checkbox" name="cropBoxMovable" defaultChecked />
                        <label className="form-check-label" htmlFor="cropBoxMovable">cropBoxMovable</label>
                      </div>
                    </li>
                    <li className="dropdown-item">
                      <div className="form-check">
                        <input className="form-check-input" id="cropBoxResizable" type="checkbox" name="cropBoxResizable" defaultChecked />
                        <label className="form-check-label" htmlFor="cropBoxResizable">cropBoxResizable</label>
                      </div>
                    </li>
                    <li className="dropdown-item">
                      <div className="form-check">
                        <input className="form-check-input" id="toggleDragModeOnDblclick" type="checkbox" name="toggleDragModeOnDblclick" defaultChecked />
                        <label className="form-check-label" htmlFor="toggleDragModeOnDblclick">toggleDragModeOnDblclick</label>
                      </div>
                    </li>
                  </ul>
                </div>
               
         
                {/* /.dropdown */}
              </div>
              {/* /.docs-toggles */}
            
            
   

</div>
        </div>
      
  
  

  
   </div>
   
   
 {/* /text editor*/}
<div className="col-12">
                        
                        <div className="text-editor">
                            <div className="summernote">
                              
                            </div>
                        </div>
        </div>
         {/* /fin text editor*/}
                    
                      <div className="form-actions">
                      <button type="button" className="btn btn-warning btn-rounded"
                      onClick={this.onAddAnnoncementClick}
                      >
                          {" "}
                          <i className="fa fa-check" /> Enregistrer
                        </button>
                        <button type="button" class="btn btn-danger btn-rounded"><i className="fa fa-window-close"></i> Annuler </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              
            </div>
   
          </div>
        </div>
        </div>
        
        
      
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.userReducer
  };
};

export default compose(
  connect(
    mapStateToProps,
    { addAnnoncementAction }
  ),
  withRouter
)(AjouterAnnonce);

