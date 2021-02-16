import './cell-list.css'
import { useTypedSelector } from '../hooks/use-typed-selector';
import CellListItem from './cell-list-item';
import AddCell from './add-cell';
import { Fragment, useEffect } from 'react';
import { useActions } from '../hooks/use-actions';


const CellList: React.FC = () => {
  const cells = useTypedSelector(({cells: {order, data}}) => {
    return order.map((id) =>data[id]);
  });

  const { fetchCells, saveCells } = useActions();

  useEffect(() => {
    fetchCells();
  }, []);

  useEffect(()=> {
    saveCells();
  }, []);


  const renderedCells = cells.map((cell) => (
    <Fragment key={cell.id}>
      <CellListItem key={cell.id} cell={cell} />
      <AddCell previousCellId={cell.id}/>
    </Fragment>
  ))

  return (
    <div className="cell-list">
    <div className={cells.length === 0 ? 'force-visible' : ''}>
        <AddCell  previousCellId={null}/>
      </div>
    {renderedCells}
    </div>
  )
};

export default CellList;