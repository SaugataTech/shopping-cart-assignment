import { ACTION_TYPES } from './action-types';
import { fetchCategories } from '../service/category-service';
import { createAction } from '../utils/util';

export const fetchCategoryAsync = () => async (dispatch)=> {
  try {
    const categoryData = await fetchCategories();
    const sortedCategoryArr = categoryData.sort((a, b) => a.order - b.order);
    dispatch(createAction( ACTION_TYPES.SET_CATEGORY_SUCCESS, sortedCategoryArr ));
  } catch (error) {
    dispatch(createAction( ACTION_TYPES.SET_CATEGORY_FAILED, error ));
  }
}
