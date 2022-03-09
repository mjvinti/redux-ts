import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';

export const useActions = (): typeof actionCreators => {
    const dispatch = useDispatch();
    return bindActionCreators(actionCreators, dispatch);
};