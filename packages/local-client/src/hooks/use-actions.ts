import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';

export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(()=> {
    return bindActionCreators(actionCreators, dispatch);
  }, [dispatch]); //dispacth is declared inside the component (of if recieved as props) must be in dependency array
};
