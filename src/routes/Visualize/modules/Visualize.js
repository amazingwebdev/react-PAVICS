import * as constants from './../constants';
// ------------------------------------
// Constants
// These should go in the constants.js file as well at some point
// ------------------------------------
export const COUNTER_INCREMENT = 'Visualize.COUNTER_INCREMENT';
// SYNC
export const SELECT_FACET_KEY = 'Visualize.SELECT_FACET_KEY';
export const SELECT_FACET_VALUE = 'Visualize.SELECT_FACET_VALUE';
export const ADD_FACET_KEY_VALUE_PAIR = 'Visualize.ADD_FACET_KEY_VALUE_PAIR';
export const REMOVE_FACET_KEY_VALUE_PAIR = 'Visualize.REMOVE_FACET_KEY_VALUE_PAIR';
export const OPEN_DATASET_DETAILS = 'Visualize.OPEN_DATASET_DETAILS';
export const CLOSE_DATASET_DETAILS = 'Visualize.CLOSE_DATASET_DETAILS';
export const OPEN_DATASET_WMS_LAYERS = 'Visualize.OPEN_DATASET_WMS_LAYERS';
export const OPEN_WMS_LAYER = 'Visualize.OPEN_WMS_LAYER';
export const SELECT_LOAD_WMS = 'Visualize.SELECT_LOAD_WMS';
export const CLICK_TOGGLE_PANEL = 'Visualize.CLICK_TOGGLE_PANEL';
// ASYNC
export const FETCH_CLIMATE_INDICATORS_REQUEST = 'Visualize.FETCH_CLIMATE_INDICATORS_REQUEST';
export const FETCH_CLIMATE_INDICATORS_FAILURE = 'Visualize.FETCH_CLIMATE_INDICATORS_FAILURE';
export const FETCH_CLIMATE_INDICATORS_SUCCESS = 'Visualize.FETCH_CLIMATE_INDICATORS_SUCCESS';
export const FETCH_FACETS_REQUEST = 'Visualize.FETCH_FACETS_REQUEST';
export const FETCH_FACETS_FAILURE = 'Visualize.FETCH_FACETS_FAILURE';
export const FETCH_FACETS_SUCCESS = 'Visualize.FETCH_FACETS_SUCCESS';
export const FETCH_DATASET_REQUEST = 'Visualize.FETCH_DATASET_REQUEST';
export const FETCH_DATASET_FAILURE = 'Visualize.FETCH_DATASET_FAILURE';
export const FETCH_DATASET_SUCCESS = 'Visualize.FETCH_DATASET_SUCCESS';
export const FETCH_CATALOG_DATASETS_REQUEST = 'Visualize.FETCH_CATALOG_DATASETS_REQUEST';
export const FETCH_CATALOG_DATASETS_FAILURE = 'Visualize.FETCH_CATALOG_DATASETS_FAILURE';
export const FETCH_CATALOG_DATASETS_SUCCESS = 'Visualize.FETCH_CATALOG_DATASETS_SUCCESS';
export const FETCH_DATASET_WMS_LAYERS_REQUEST = 'Visualize.FETCH_DATASET_WMS_LAYERS_REQUEST';
export const FETCH_DATASET_WMS_LAYERS_FAILURE = 'Visualize.FETCH_DATASET_WMS_LAYERS_FAILURE';
export const FETCH_DATASET_WMS_LAYERS_SUCCESS = 'Visualize.FETCH_DATASET_WMS_LAYERS_SUCCESS';
export const FETCH_WMS_LAYER_DETAILS_REQUEST = 'Visualize.FETCH_WMS_LAYER_DETAILS_REQUEST';
export const FETCH_WMS_LAYER_DETAILS_FAILURE = 'Visualize.FETCH_WMS_LAYER_DETAILS_FAILURE';
export const FETCH_WMS_LAYER_DETAILS_SUCCESS = 'Visualize.FETCH_WMS_LAYER_DETAILS_SUCCESS';
// ------------------------------------
// Actions
// ------------------------------------
export function selectFacetKey (key) {
  return {
    type: SELECT_FACET_KEY,
    key: key,
    value: ''
  };
}
export function selectFacetValue (value) {
  return {
    type: SELECT_FACET_VALUE,
    value: value
  };
}
export function addFacetKeyValue (key, value) {
  return {
    type: ADD_FACET_KEY_VALUE_PAIR,
    key: key,
    value: value
  };
}
export function removeFacetKeyValue (key, value) {
  return {
    type: REMOVE_FACET_KEY_VALUE_PAIR,
    key: key,
    value: value
  };
}
export function openDatasetDetails (id) {
  return {
    type: OPEN_DATASET_DETAILS,
    id: id
  };
}
export function closeDatasetDetails () {
  return {
    type: OPEN_DATASET_DETAILS
  };
}
export function openDatasetWmsLayers (dataset) {
  return {
    type: OPEN_DATASET_WMS_LAYERS,
    dataset: dataset
  };
}
export function openWmsLayer (layer) {
  return {
    type: OPEN_WMS_LAYER,
    layer: layer
  };
}
export function selectLoadWms (url, name, start, end, style, opacity) {
  return {
    type: SELECT_LOAD_WMS,
    url: url,
    name: name,
    start: start,
    end: end,
    style: style,
    opacity: opacity
  };
}
export function clickTogglePanel (panel, show) {
  return {
    type: CLICK_TOGGLE_PANEL,
    panel: panel,
    show: show
  };
}
export function requestClimateIndicators () {
  return {
    type: FETCH_CLIMATE_INDICATORS_REQUEST,
    climateIndicators: {
      requestedAt: Date.now(),
      isFetching: true
    }
  };
}
export function receiveClimateIndicatorsFailure (error) {
  return {
    type: FETCH_CLIMATE_INDICATORS_FAILURE,
    climateIndicators: {
      receivedAt: Date.now(),
      isFetching: false,
      error: error
    }
  };
}
export function receiveClimateIndicators (items) {
  return {
    type: FETCH_CLIMATE_INDICATORS_SUCCESS,
    climateIndicators: {
      receivedAt: Date.now(),
      isFetching: false,
      items: items
    }
  };
}
export function requestFacets () {
  return {
    type: FETCH_FACETS_REQUEST,
    facets: {
      receivedAt: 1, // TODO: Fix
      requestedAt: Date.now(),
      isFetching: true,
      items: []
    }
  };
}
export function receiveFacetsFailure (error) {
  return {
    type: FETCH_FACETS_FAILURE,
    facets: {
      receivedAt: Date.now(),
      isFetching: false,
      items: [],
      error: error
    }
  };
}
export function receiveFacets (facets) {
  return {
    type: FETCH_FACETS_SUCCESS,
    facets: {
      receivedAt: Date.now(),
      isFetching: false,
      items: facets,
      error: null
    }
  };
}
export function requestDataset () {
  return {
    type: FETCH_DATASET_REQUEST,
    selectedDatasets: {
      receivedAt: 1, // TODO: Fix
      requestedAt: Date.now(),
      isFetching: true,
      items: []
    }
  };
}
export function receiveDatasetFailure (error) {
  return {
    type: FETCH_DATASET_FAILURE,
    selectedDatasets: {
      receivedAt: Date.now(),
      isFetching: false,
      items: [],
      error: error
    }
  };
}
export function receiveDataset (dataset) {
  return {
    type: FETCH_DATASET_SUCCESS,
    selectedDatasets: {
      receivedAt: Date.now(),
      isFetching: false,
      items: [dataset],
      error: null
    }
  };
}
export function requestCatalogDatasets () {
  return {
    type: FETCH_CATALOG_DATASETS_REQUEST,
    datasets: {
      requestedAt: Date.now(),
      isFetching: true,
      items: []
    }
  };
}
export function receiveCatalogDatasetsFailure (error) {
  return {
    type: FETCH_CATALOG_DATASETS_FAILURE,
    datasets: {
      receivedAt: Date.now(),
      isFetching: false,
      items: [],
      error: error
    }
  };
}
export function receiveCatalogDatasets (datasets) {
  return {
    type: FETCH_CATALOG_DATASETS_SUCCESS,
    datasets: {
      receivedAt: Date.now(),
      isFetching: false,
      items: datasets,
      error: null
    }
  };
}
export function requestDatasetWMSLayers () {
  return {
    type: FETCH_DATASET_WMS_LAYERS_REQUEST,
    selectedWMSLayers: {
      requestedAt: Date.now(),
      isFetching: true,
      items: []
    }
  };
}
export function receiveDatasetWMSLayersFailure (error) {
  return {
    type: FETCH_DATASET_WMS_LAYERS_FAILURE,
    selectedWMSLayers: {
      receivedAt: Date.now(),
      isFetching: false,
      items: [],
      error: error
    }
  };
}
export function receiveDatasetWMSLayers (layers) {
  return {
    type: FETCH_DATASET_WMS_LAYERS_SUCCESS,
    selectedWMSLayers: {
      receivedAt: Date.now(),
      isFetching: false,
      items: layers,
      error: null
    }
  };
}
export function requestWMSLayerDetails (layer, url) {
  return {
    type: FETCH_WMS_LAYER_DETAILS_REQUEST,
    selectedWMSLayer: {
      requestedAt: Date.now(),
      layer: layer,
      wmsUrl: url,
      isFetching: true,
      data: {}
    }
  };
}
export function receiveWMSLayerDetailsFailure (error) {
  return {
    type: FETCH_WMS_LAYER_DETAILS_FAILURE,
    selectedWMSLayer: {
      receivedAt: Date.now(),
      isFetching: false,
      data: {},
      error: error
    }
  };
}
export function receiveWMSLayerDetails (data) {
  return {
    type: FETCH_WMS_LAYER_DETAILS_SUCCESS,
    selectedWMSLayer: {
      receivedAt: Date.now(),
      isFetching: false,
      data: data,
      error: null
    }
  };
}
// ASYNC
export function fetchClimateIndicators () {
  return function (dispatch) {
    dispatch(requestClimateIndicators());
    return fetch('/api/climate_indicators')
      .then(response => response.json())
      .then(json => dispatch(receiveClimateIndicators(json)))
      .catch(error => dispatch(receiveClimateIndicatorsFailure(error)));
  };
}
export function fetchFacets () {
  return function (dispatch) {
    dispatch(requestFacets());
    return fetch('/api/facets')
      .then(response => response.json())
      .then(json => dispatch(receiveFacets(json)))
      .catch(error => dispatch(receiveFacetsFailure(error)));
  };
}
export function fetchDataset (url) {
  return function (dispatch) {
    dispatch(requestDataset());
    return fetch(`/api/dataset?url=${url}`)
      .then(response => response.json())
      .then(json =>
        dispatch(receiveDataset(json))
      );
    // TODO FIX THIS HAPPEN FOR NO REASON
    /* .catch(error =>
     dispatch(receiveDatasetFailure(error))
     ) */
  };
}
export function fetchCatalogDatasets () {
  return function (dispatch, getState) {
    dispatch(requestCatalogDatasets());
    // Get current added facets by querying store
    let facets = getState().visualize.selectedFacets;
    let constraints = '';
    facets.forEach(function (facet, i) {
      constraints += `${(i > 0) ? ',' : ''}${facet.key}:${facet.value}`;
    });
    console.log(getState().visualize);
    return fetch(`/api/datasets?constraints=${constraints}`)
      .then(response => response.json())
      .then(json =>
        dispatch(receiveCatalogDatasets(json))
      )
      .catch(error =>
        dispatch(receiveCatalogDatasetsFailure(error))
      );
  };
}
export function fetchDatasetWMSLayers (url, dataset) {
  return function (dispatch) {
    dispatch(requestDatasetWMSLayers());
    dataset = 'outputs/ouranos/subdaily/aet/pcp/aet_pcp_1970.nc'; // TODO, Dynamically use datasetid
    return fetch(`/api/wms/dataset/layers?url=${url}&dataset=${dataset}`)
      .then(response => response.json())
      .then(json =>
        dispatch(receiveDatasetWMSLayers(json))
      )
      .catch(error =>
        dispatch(receiveDatasetWMSLayersFailure(error))
      );
  };
}
export function fetchWMSLayerDetails (url, layer) {
  return function (dispatch) {
    dispatch(requestWMSLayerDetails());
    return fetch(`${url}?request=GetMetadata&item=layerDetails&layerName=${layer}`)
      .then(response => response.json())
      .then(json =>
        dispatch(receiveWMSLayerDetails(json))
      )
      .catch(error =>
        dispatch(receiveWMSLayerDetailsFailure(error))
      );
  };
}
// MERGE
/* The implementation for this will merge an update into the old state,
 *  where the first two entries are put in one List, and the rest in the new version of entries:
 */
/* export function next(state) {
 const entries = state.get('entries').concat(getWinners(state.get('vote')));
 return state.merge({
 vote: Map({pair: entries.take(2)}),
 entries: entries.skip(2)
 });
 } */

// UPDATEIN
/* Using updateIn makes this pleasingly succinct.
 *  What the code expresses is "reach into the nested data structure path ['vote', 'tally', 'Trainspotting'],
 *  and apply this function there. If there are keys missing along the path, create new Maps in their place.
 *  If the value at the end is missing, initialize it with 0".
 */
/* export function vote(state, entry) {
 return state.updateIn(
 ['vote', 'tally', entry],
 0,
 tally => tally + 1
 );
 } */
export const actions = {
  // Sync Panels
  clickTogglePanel,
  // Sync Facets
  selectFacetKey,
  selectFacetValue,
  addFacetKeyValue,
  removeFacetKeyValue,
  requestFacets,
  receiveFacetsFailure,
  receiveFacets,
  requestClimateIndicators,
  receiveClimateIndicatorsFailure,
  receiveClimateIndicators,
  // Sync Datasets
  openDatasetDetails,
  closeDatasetDetails,
  requestDataset,
  receiveDatasetFailure,
  receiveDataset,
  requestCatalogDatasets,
  receiveCatalogDatasetsFailure,
  receiveCatalogDatasets,
  openDatasetWmsLayers,
  openWmsLayer,
  selectLoadWms,
  // Async
  fetchFacets,
  fetchDataset,
  fetchCatalogDatasets,
  fetchDatasetWMSLayers,
  fetchWMSLayerDetails,
  fetchClimateIndicators
};
// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SELECT_FACET_KEY]: (state, action) => {
    return ({...state, currentSelectedKey: action.key, currentSelectedValue: action.value});
  },
  [SELECT_FACET_VALUE]: (state, action) => {
    return ({...state, currentSelectedValue: action.value});
  },
  [ADD_FACET_KEY_VALUE_PAIR]: (state, action) => {
    let facets = state.selectedFacets.concat({key: action.key, value: action.value});
    facets.sort(function (a, b) {
      if (a.key + a.value < b.key + b.value) {
        return -1;
      }
      if (a.key + a.value > b.key + b.value) {
        return 1;
      }
      return 0;
    });
    return ({...state, selectedFacets: facets});
  },
  [REMOVE_FACET_KEY_VALUE_PAIR]: (state, action) => {
    let selectedFacets = state.selectedFacets.slice();
    let index = selectedFacets.findIndex(x => x.key === action.key && x.value === action.value);
    if (index > -1) {
      selectedFacets.splice(index, 1);
    }
    return ({...state, selectedFacets: selectedFacets});
  },
  [OPEN_DATASET_DETAILS]: (state, action) => {
    return ({...state, currentOpenedDataset: action.id});
  },
  [CLOSE_DATASET_DETAILS]: (state) => {
    return ({...state, currentOpenedDataset: ''});
  },
  [OPEN_DATASET_WMS_LAYERS]: (state, action) => {
    return ({...state, currentOpenedDatasetWMSFile: action.dataset});
  },
  [OPEN_WMS_LAYER]: (state, action) => {
    return ({...state, currentOpenedWMSLayer: action.layer});
  },
  [SELECT_LOAD_WMS]: (state, action) => {
    return ({
      ...state, loadedWmsDatasets: state.loadedWmsDatasets.concat({
        url: action.url,
        name: action.name,
        start: action.start,
        end: action.end,
        style: action.style,
        opacity: action.opacity
      })
    });
  },
  [CLICK_TOGGLE_PANEL]: (state, action) => {
    // TODO: deepcopy With Immutable.js or something like that
    let panelControls = JSON.parse(JSON.stringify(state.panelControls));
    panelControls[action.panel].show = action.show;
    return ({...state, panelControls: panelControls});
  },
  [FETCH_DATASET_REQUEST]: (state, action) => {
    return ({...state, selectedDatasets: action.selectedDatasets});
  },
  [FETCH_DATASET_FAILURE]: (state, action) => {
    return ({...state, selectedDatasets: action.selectedDatasets});
  },
  [FETCH_DATASET_SUCCESS]: (state, action) => {
    return ({...state, selectedDatasets: action.selectedDatasets});
  },
  [FETCH_FACETS_REQUEST]: (state, action) => {
    return ({...state, facets: action.facets});
  },
  [FETCH_FACETS_FAILURE]: (state, action) => {
    return ({...state, facets: action.facets});
  },
  [FETCH_FACETS_SUCCESS]: (state, action) => {
    return ({...state, facets: action.facets});
  },
  [FETCH_CLIMATE_INDICATORS_REQUEST]: (state, action) => {
    return ({...state, climateIndicators: Object.assign({}, state.climateIndicators, action.climateIndicators)});
  },
  [FETCH_CLIMATE_INDICATORS_FAILURE]: (state, action) => {
    return ({...state, climateIndicators: Object.assign({}, state.climateIndicators, action.climateIndicators)});
  },
  [FETCH_CLIMATE_INDICATORS_SUCCESS]: (state, action) => {
    return ({...state, climateIndicators: Object.assign({}, state.climateIndicators, action.climateIndicators)});
  },
  [FETCH_CATALOG_DATASETS_REQUEST]: (state, action) => {
    return ({...state, datasets: action.datasets});
  },
  [FETCH_CATALOG_DATASETS_FAILURE]: (state, action) => {
    return ({...state, datasets: action.datasets});
  },
  [FETCH_CATALOG_DATASETS_SUCCESS]: (state, action) => {
    return ({...state, datasets: action.datasets});
  },
  [FETCH_DATASET_WMS_LAYERS_REQUEST]: (state, action) => {
    return ({...state, selectedWMSLayers: action.selectedWMSLayers});
  },
  [FETCH_DATASET_WMS_LAYERS_FAILURE]: (state, action) => {
    return ({...state, selectedWMSLayers: action.selectedWMSLayers});
  },
  [FETCH_DATASET_WMS_LAYERS_SUCCESS]: (state, action) => {
    return ({...state, selectedWMSLayers: action.selectedWMSLayers});
  },
  [FETCH_WMS_LAYER_DETAILS_REQUEST]: (state, action) => {
    return ({...state, selectedWMSLayer: action.selectedWMSLayer});
  },
  [FETCH_WMS_LAYER_DETAILS_FAILURE]: (state, action) => {
    return ({...state, selectedWMSLayer: action.selectedWMSLayer});
  },
  [FETCH_WMS_LAYER_DETAILS_SUCCESS]: (state, action) => {
    return ({...state, selectedWMSLayer: action.selectedWMSLayer});
  }
};
// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  currentSelectedKey: constants.DEFAULT_SELECTED_KEY,
  currentSelectedValue: '',
  currentOpenedDataset: '',
  currentOpenedDatasetWMSFile: '',
  currentOpenedWMSLayer: '',
  loadedWmsDatasets: [],
  selectedFacets: [],
  selectedDatasets: {
    requestedAt: null,
    receivedAt: null,
    isFetching: false,
    items: [],
    error: null
  },
  selectedWMSLayers: {
    requestedAt: null,
    receivedAt: null,
    isFetching: false,
    items: [],
    error: null
  },
  selectedWMSLayer: {
    layerDetails: {
      requestedAt: null,
      receivedAt: null,
      isFetching: false,
      data: {},
      error: null
    },
    timesteps: {
      requestedAt: null,
      receivedAt: null,
      isFetching: false,
      data: {},
      error: null
    }
  },
  facets: {
    requestedAt: null,
    receivedAt: null,
    isFetching: false,
    items: [],
    error: null
  },
  climateIndicators: {
    requestedAt: null,
    receivedAt: null,
    isFetching: false,
    items: [],
    error: null
  },
  datasets: {
    requestedAt: null,
    receivedAt: null,
    isFetching: false,
    items: [],
    error: null
  },
  plotlyData: {
    data: [{
      y: [7.943447712932539e-07, 1.2638314217383595e-07, 3.993015525338706e-06, 7.34576724426006e-06, 6.2191679717216175e-06, 1.4611298837508002e-08, 3.4532988024693623e-07, 3.2286602618114557e-06, 1.5983796401997097e-05, 3.753113446691714e-07, 4.831814294448122e-06, 1.0475941962795332e-05, 1.7932408809429035e-05, 1.461923375245533e-06, 3.4991499715114616e-12, 1.0502822078706231e-07, 1.2535257155832369e-05, 2.682241756701842e-05, 7.159347660490312e-06, 1.0050877790490631e-05, 5.3258336265571415e-05, 2.3964521460584365e-05, 2.094155024678912e-05, 2.24968744078069e-06, 7.33713886802434e-06, 3.332277458412136e-07, 7.112289068800237e-08, 4.325364386659203e-07, 1.0843651807590504e-06, 4.7252086687876727e-08, 2.2990370496245305e-08, 4.0147125446310383e-07, 5.317721161191002e-07, 7.630040488315615e-10, 8.983653265737246e-10, 1.664806426049381e-08, 3.9202183188535855e-07, 4.746481863548979e-06, 8.13306360214483e-06, 3.7704453461628873e-06, 2.9279268346726894e-05, 8.322562644025311e-05, 1.1614231880230363e-05, 5.660797910422843e-07, 2.1551525719587517e-07, 8.800532258645608e-23, 9.72816271982424e-12, 1.038071863711243e-12, 1.768828855203714e-22, 1.5152471821921404e-22, 1.1150334325132782e-22, 2.8679608021775493e-06, 1.3273105651023798e-05, 5.451128970435093e-08, 2.683073963273195e-22, 9.080933338623254e-09, 8.030237097500503e-08, 3.57453067145741e-10, 9.956030311286668e-08, 3.990248235996585e-12, 4.5470962106719526e-08, 1.1595031992328586e-06, 3.3429446375521366e-06, 5.341069595488079e-07, 2.982934255952868e-23, 1.3721295124120477e-22, 7.052507369452127e-23, 3.2739264898804085e-22, 7.327621005970286e-06, 1.647268254600931e-05, 1.1210780030523892e-05, 2.5518918391753687e-06, 4.409619123180164e-06, 2.5352615011797752e-06, 2.5445160645176657e-06, 3.0301082006189972e-05, 8.604677714174613e-05, 1.380898174829781e-05, 1.2016889741062187e-05, 1.5229652490234002e-05, 1.557026189402677e-05, 1.0757070124484555e-22, 2.4338876301044365e-06, 1.1281331353529822e-05, 7.349912323206809e-08, 1.2407502936184756e-06, 2.6402713615425455e-07, 2.1046125766588375e-06, 4.651398910482385e-08, 5.524908863741018e-10, 4.1468641853725785e-08, 4.628498572856188e-06, 1.2625181625480764e-05, 4.047810620022574e-08, 1.5387363045060012e-22, 1.4411490356026238e-22, 1.1054594379142815e-22, 5.299708294060249e-23, 1.276314845517138e-22, 8.274755834227079e-23, 1.2438303542694484e-07, 2.2956833163334522e-06, 1.2256541594979353e-06, 2.9235451393105905e-08, 1.1669367694366883e-09, 1.0745581676019356e-05, 0.0001874634763225913, 1.3006334484089166e-05, 7.119100246200105e-06, 2.933570613095071e-05, 0.00023715550196357071, 0.00017833641322795302, 3.173035293002613e-05, 1.3099767784297e-05, 2.1431080313050188e-05, 1.3170466445444617e-05, 1.0637037121341564e-05, 2.046973804681329e-06, 3.4808329019142548e-06, 2.8254471544642e-06, 2.2472233922599116e-06, 1.6952303667494562e-06, 4.4809215182795015e-07, 1.8463680362401647e-07, 3.425263059853023e-07, 2.2878222694089345e-07, 2.151678479833663e-08, 1.7038007157580666e-24, 1.286055068886083e-22, 1.6937752402857938e-22, 2.8867639074530124e-23, 7.72353736522291e-09, 1.5814843209227547e-05, 2.7008445613319054e-05, 0.00014103348075877875, 0.00011218320287298411, 1.9715627786354162e-05, 1.9720098862308078e-05, 2.5473967980360612e-05, 2.056165612884797e-05, 1.0322532034479082e-05, 3.162995199090801e-05, 2.3640957351744873e-06, 2.3826744683875854e-22, 1.7599661532585742e-06, 8.6334184743464e-06, 1.322953357885126e-05, 6.663899966952158e-06, 2.7393482469051378e-06, 2.9105801861614865e-22, 9.94628204154202e-23, 1.595499954376578e-09, 9.960786984778499e-23, 1.1075162822841185e-22, 3.3931739835679764e-06, 7.70019232732011e-06, 1.953549002564614e-07, 2.4326943082303496e-22, 2.0065672856617311e-07, 3.3681683930808504e-07, 1.2844848242821172e-06, 7.801715530461958e-25, 1.2861568003884203e-22, 1.8633548389238546e-22, 9.029984128070536e-23, 1.890536461362874e-22, 2.3851504105110166e-11, 8.79792523278411e-08, 3.979793291364331e-06, 4.329987132223323e-05, 0.00017291607218794525, 5.129608325660229e-05, 1.082048038369976e-05, 1.4995259334682487e-05, 2.1604473658953793e-05, 1.6206598729695543e-06, 1.1893978353327839e-06, 1.1297028201795456e-08, 2.1140240374733523e-22, 2.0617614282514296e-08, 4.508823622018099e-06, 7.93669096310623e-06, 6.48865852781455e-06, 4.4696971599478275e-06, 9.727825818117708e-05, 5.153214078745805e-05, 1.2082390639989171e-05, 3.5890848266717512e-06, 2.283250296386541e-06, 1.5928663970044e-06, 1.3286344255902804e-06, 6.949400813027751e-06, 4.041075590066612e-05, 9.626792234485038e-06, 4.738102688861545e-06, 2.467523017912754e-06, 2.546153700677678e-05, 0.0001366021460853517, 2.975834547669365e-07, 7.152020771172829e-06, 7.414809260808397e-06, 6.086009420869232e-07, 1.3837579899700359e-06, 5.784796030638972e-06, 1.5157828784140293e-05, 9.781034577827086e-07, 4.844645445700735e-06, 1.3234282050689217e-05, 1.0625904906191863e-05, 3.3489359339000657e-06, 2.1891803925200293e-08, 7.981171989968061e-08, 7.127463959477609e-06, 3.526595173752867e-05, 1.5540114191026078e-06, 2.0228156927259988e-07, 3.8367463162103377e-07, 1.0940908623524592e-06, 2.817088443407556e-06, 1.5341898915721686e-06, 5.985891959880973e-08, 2.524046294638538e-06, 3.37786309501098e-06, 5.606952413472754e-07, 4.557083684630925e-06, 2.4557311917305924e-06, 3.5565792586567113e-06, 1.484546032770595e-06, 1.4732454474142287e-06, 9.138377095041506e-07, 1.2222623801960708e-08, 3.1352246310234477e-07, 1.3915835097577656e-06, 1.8707577620939382e-22, 1.3674411542801382e-22, 2.8179467093103483e-10],
      x: ["1970-02-01 00:00:00", "1970-02-01 06:00:00", "1970-02-01 12:00:00", "1970-02-01 18:00:00", "1970-02-02 00:00:00", "1970-02-02 06:00:00", "1970-02-02 12:00:00", "1970-02-02 18:00:00", "1970-02-03 00:00:00", "1970-02-03 06:00:00", "1970-02-03 12:00:00", "1970-02-03 18:00:00", "1970-02-04 00:00:00", "1970-02-04 06:00:00", "1970-02-04 12:00:00", "1970-02-04 18:00:00", "1970-02-05 00:00:00", "1970-02-05 06:00:00", "1970-02-05 12:00:00", "1970-02-05 18:00:00", "1970-02-06 00:00:00", "1970-02-06 06:00:00", "1970-02-06 12:00:00", "1970-02-06 18:00:00", "1970-02-07 00:00:00", "1970-02-07 06:00:00", "1970-02-07 12:00:00", "1970-02-07 18:00:00", "1970-02-08 00:00:00", "1970-02-08 06:00:00", "1970-02-08 12:00:00", "1970-02-08 18:00:00", "1970-02-09 00:00:00", "1970-02-09 06:00:00", "1970-02-09 12:00:00", "1970-02-09 18:00:00", "1970-02-10 00:00:00", "1970-02-10 06:00:00", "1970-02-10 12:00:00", "1970-02-10 18:00:00", "1970-02-11 00:00:00", "1970-02-11 06:00:00", "1970-02-11 12:00:00", "1970-02-11 18:00:00", "1970-02-12 00:00:00", "1970-02-12 06:00:00", "1970-02-12 12:00:00", "1970-02-12 18:00:00", "1970-02-13 00:00:00", "1970-02-13 06:00:00", "1970-02-13 12:00:00", "1970-02-13 18:00:00", "1970-02-14 00:00:00", "1970-02-14 06:00:00", "1970-02-14 12:00:00", "1970-02-14 18:00:00", "1970-02-15 00:00:00", "1970-02-15 06:00:00", "1970-02-15 12:00:00", "1970-02-15 18:00:00", "1970-02-16 00:00:00", "1970-02-16 06:00:00", "1970-02-16 12:00:00", "1970-02-16 18:00:00", "1970-02-17 00:00:00", "1970-02-17 06:00:00", "1970-02-17 12:00:00", "1970-02-17 18:00:00", "1970-02-18 00:00:00", "1970-02-18 06:00:00", "1970-02-18 12:00:00", "1970-02-18 18:00:00", "1970-02-19 00:00:00", "1970-02-19 06:00:00", "1970-02-19 12:00:00", "1970-02-19 18:00:00", "1970-02-20 00:00:00", "1970-02-20 06:00:00", "1970-02-20 12:00:00", "1970-02-20 18:00:00", "1970-02-21 00:00:00", "1970-02-21 06:00:00", "1970-02-21 12:00:00", "1970-02-21 18:00:00", "1970-02-22 00:00:00", "1970-02-22 06:00:00", "1970-02-22 12:00:00", "1970-02-22 18:00:00", "1970-02-23 00:00:00", "1970-02-23 06:00:00", "1970-02-23 12:00:00", "1970-02-23 18:00:00", "1970-02-24 00:00:00", "1970-02-24 06:00:00", "1970-02-24 12:00:00", "1970-02-24 18:00:00", "1970-02-25 00:00:00", "1970-02-25 06:00:00", "1970-02-25 12:00:00", "1970-02-25 18:00:00", "1970-02-26 00:00:00", "1970-02-26 06:00:00", "1970-02-26 12:00:00", "1970-02-26 18:00:00", "1970-02-27 00:00:00", "1970-02-27 06:00:00", "1970-02-27 12:00:00", "1970-02-27 18:00:00", "1970-02-28 00:00:00", "1970-02-28 06:00:00", "1970-02-28 12:00:00", "1970-02-28 18:00:00", "1970-03-01 00:00:00", "1970-03-01 06:00:00", "1970-03-01 12:00:00", "1970-03-01 18:00:00", "1970-03-02 00:00:00", "1970-03-02 06:00:00", "1970-03-02 12:00:00", "1970-03-02 18:00:00", "1970-03-03 00:00:00", "1970-03-03 06:00:00", "1970-03-03 12:00:00", "1970-03-03 18:00:00", "1970-03-04 00:00:00", "1970-03-04 06:00:00", "1970-03-04 12:00:00", "1970-03-04 18:00:00", "1970-03-05 00:00:00", "1970-03-05 06:00:00", "1970-03-05 12:00:00", "1970-03-05 18:00:00", "1970-03-06 00:00:00", "1970-03-06 06:00:00", "1970-03-06 12:00:00", "1970-03-06 18:00:00", "1970-03-07 00:00:00", "1970-03-07 06:00:00", "1970-03-07 12:00:00", "1970-03-07 18:00:00", "1970-03-08 00:00:00", "1970-03-08 06:00:00", "1970-03-08 12:00:00", "1970-03-08 18:00:00", "1970-03-09 00:00:00", "1970-03-09 06:00:00", "1970-03-09 12:00:00", "1970-03-09 18:00:00", "1970-03-10 00:00:00", "1970-03-10 06:00:00", "1970-03-10 12:00:00", "1970-03-10 18:00:00", "1970-03-11 00:00:00", "1970-03-11 06:00:00", "1970-03-11 12:00:00", "1970-03-11 18:00:00", "1970-03-12 00:00:00", "1970-03-12 06:00:00", "1970-03-12 12:00:00", "1970-03-12 18:00:00", "1970-03-13 00:00:00", "1970-03-13 06:00:00", "1970-03-13 12:00:00", "1970-03-13 18:00:00", "1970-03-14 00:00:00", "1970-03-14 06:00:00", "1970-03-14 12:00:00", "1970-03-14 18:00:00", "1970-03-15 00:00:00", "1970-03-15 06:00:00", "1970-03-15 12:00:00", "1970-03-15 18:00:00", "1970-03-16 00:00:00", "1970-03-16 06:00:00", "1970-03-16 12:00:00", "1970-03-16 18:00:00", "1970-03-17 00:00:00", "1970-03-17 06:00:00", "1970-03-17 12:00:00", "1970-03-17 18:00:00", "1970-03-18 00:00:00", "1970-03-18 06:00:00", "1970-03-18 12:00:00", "1970-03-18 18:00:00", "1970-03-19 00:00:00", "1970-03-19 06:00:00", "1970-03-19 12:00:00", "1970-03-19 18:00:00", "1970-03-20 00:00:00", "1970-03-20 06:00:00", "1970-03-20 12:00:00", "1970-03-20 18:00:00", "1970-03-21 00:00:00", "1970-03-21 06:00:00", "1970-03-21 12:00:00", "1970-03-21 18:00:00", "1970-03-22 00:00:00", "1970-03-22 06:00:00", "1970-03-22 12:00:00", "1970-03-22 18:00:00", "1970-03-23 00:00:00", "1970-03-23 06:00:00", "1970-03-23 12:00:00", "1970-03-23 18:00:00", "1970-03-24 00:00:00", "1970-03-24 06:00:00", "1970-03-24 12:00:00", "1970-03-24 18:00:00", "1970-03-25 00:00:00", "1970-03-25 06:00:00", "1970-03-25 12:00:00", "1970-03-25 18:00:00", "1970-03-26 00:00:00", "1970-03-26 06:00:00", "1970-03-26 12:00:00", "1970-03-26 18:00:00", "1970-03-27 00:00:00", "1970-03-27 06:00:00", "1970-03-27 12:00:00", "1970-03-27 18:00:00", "1970-03-28 00:00:00", "1970-03-28 06:00:00", "1970-03-28 12:00:00", "1970-03-28 18:00:00", "1970-03-29 00:00:00", "1970-03-29 06:00:00", "1970-03-29 12:00:00", "1970-03-29 18:00:00", "1970-03-30 00:00:00", "1970-03-30 06:00:00", "1970-03-30 12:00:00", "1970-03-30 18:00:00", "1970-03-31 00:00:00", "1970-03-31 06:00:00", "1970-03-31 12:00:00", "1970-03-31 18:00:00"],
      type: "scatter"
    }],
    layout: {
      yaxis: {"title": "PCP (kg m-2 s-1)"},
      title: "http://132.217.140.45:8083/thredds/dodsC/birdhouse/ouranos/subdaily/aet/pcp/aet_pcp_1970.nc"
    }
  },
  panelControls: {
    [constants.PANEL_SEARCH_CATALOG]: {
      show: true
    },
    [constants.PANEL_DATASET_DETAILS]: {
      show: false
    },
    [constants.PANEL_DATASET_WMS_LAYERS]: {
      show: false
    },
    [constants.PANEL_CLIMATE_INDICATORS]: {
      show: false
    },
    [constants.PANEL_PLOTLY]: {
      show: false
    }
  }
};
export default function visualizeReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
