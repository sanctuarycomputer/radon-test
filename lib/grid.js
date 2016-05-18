import Atomic from './atomic';

class Grid {
  constructor(columns=12, breakpoints=['small', 'medium', 'large']) {
    this.columnTypes = [];
    this.columnCount = columns;
    this.breakpoints = breakpoints;
    this._populateColumnTypes();
  }

  _populateColumnTypes() {
    // loop through column count
    // create an atomic for each column width + breakpoint
    // push all atomics into column types array
    //
  }

  renderColumns(currentBreakpoint, activeColumnTypes=[]) {
    return activeColumnTypes.map(atomic => atomic.calculate(activeBreakpoint));
  }
}


import Atomic, { Grid, renderAtomics } from 'atomic';

let myGrid = new Grid();

const {
  small_12,
  large_6
} = myGrid.columTypes;


<div styles={
    renderAtomics(
      small_12,
      large_6,
      leftColumn.setState([this.state.active])
    )
  } />

</div>


