import {createResource, mergeReducers} from './../../lib/redux-rest-resource';

const research = createResource({
  name: 'research',
  url: `${__PAVICS_PROJECT_API_PATH__}/Researchs/:id?filter=:filter`
});
const researchDataset = createResource({
  name: 'researchDatasets',
  pluralName: 'researchDatasets',
  url: `${__PAVICS_PROJECT_API_PATH__}/Researchs/:researchId/datasets`
});
const researchFacet = createResource({
  name: 'researchFacets',
  pluralName: 'researchFacets',
  url: `${__PAVICS_PROJECT_API_PATH__}/Researchs/:researchId/facets`
});

const types = {
  ...research.types,
  ...researchDataset.types,
  ...researchFacet.types
};
const actions = {
  ...research.actions,
  ...researchDataset.actions,
  ...researchFacet.actions
};
const reducers = mergeReducers(research.reducers, {
  facets: researchFacet.reducers,
  datasets: researchDataset.reducers
});
export {types, actions, reducers};
