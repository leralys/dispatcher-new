import { isEmpty, pick } from 'lodash';

import axios from '../../../utils/axios.config';
import { ENDPOINTS, IFilterObject } from '../../../utils/types/types';
import { defaultLanguage, defaultDomains } from '../../../utils/consts/consts';

interface IParamsObj {
  [key: string]: string;
}

const makeTopHeadlinesParams = (filterObject: IFilterObject) => {
  let paramsObj: IParamsObj = pick(filterObject, [
    'country',
    'category',
    'sources',
    'q',
  ]);
  if (Object.values(paramsObj).every((value) => isEmpty(value))) {
    paramsObj.language = defaultLanguage;
  } else if (isEmpty(filterObject.sources)) {
    paramsObj = pick(filterObject, ['country', 'category', 'q']);
  } else if (!isEmpty(filterObject.sources)) {
    paramsObj = pick(filterObject, ['sources', 'q']);
  }
  return { ...paramsObj, endpoint: filterObject.endpoint };
};

const makeEverythingParams = (filterObject: IFilterObject) => {
  let paramsObj: IParamsObj = pick(filterObject, [
    'q',
    'sortBy',
    'language',
    'sources',
    'from',
    'to',
  ]);
  if (Object.values(paramsObj).every((value) => isEmpty(value))) {
    paramsObj.domains = defaultDomains.join(',');
    paramsObj.language = defaultLanguage;
  }
  return { ...paramsObj, endpoint: filterObject.endpoint };
};

const buildAxiosParams = (
  filterObject: IFilterObject,
  endpoint: ENDPOINTS,
  page: number = 1,
  pageSize: number = 10
) => {
  let paramsObj: IParamsObj = {};

  if (endpoint === ENDPOINTS.TOP_HEADLINES) {
    paramsObj = makeTopHeadlinesParams(filterObject);
  }
  if (endpoint === ENDPOINTS.EVERYTHING) {
    paramsObj = makeEverythingParams(filterObject);
  }

  paramsObj = {
    ...paramsObj,
    pageSize: pageSize.toString(),
    page: page.toString(),
  };

  const searchParams = new URLSearchParams(paramsObj);
  return searchParams;
};

export const getNewsData = async (
  filterObject: IFilterObject,
  endpoint: ENDPOINTS,
  page: number = 1
) => {
  const params = buildAxiosParams(filterObject, endpoint, page);
  // const res = await axios.get(`/${endpoint}`, { params });
  // if (res.status === 200) return res;
  // else throw new Error('Could not fetch news');
};

// export const getSourcesData = async () => {
//   const res = await axios.get(`/${ENDPOINTS.TOP}/sources`);
//   if (res.status === 200) return res;
//   else throw new Error('Could not fetch sources');
// };
