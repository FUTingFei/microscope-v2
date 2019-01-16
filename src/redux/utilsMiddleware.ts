import { toast } from '../redux/actions/appAction';
// import { hashHistory } from 'react-router';
// import { apiUnAuthMsg } from '../utils/config';

export default function utilsMiddleware({ dispatch }) {
  return next => action => {
    const { type } = action;
    if (!type) {
      return next(action);
    }
    if (type.indexOf('FAIL') > -1) {
      dispatch(toast(action.error.message));
    }
    next(action);
  }
}