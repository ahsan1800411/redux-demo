// import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';

import { buyCake } from './redux/cake/CakeActions';

const CakeContainer = (props) => {
  const numOfCakes = useSelector((state) => state.numOfCakes);
  const dispatch = useDispatch();
  return (
    <>
      {/* old way */}
      {/* <h2>Number of Cakes - {props.numOfCakes}</h2>
    <button onClick={props.buyCake}>Buy Cake</button> */}

      {/* new way */}
      <h2>Number of Cakes - {numOfCakes} </h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </>
  );
};

export default CakeContainer;
// >>>>>>>>>>>>>  old way
// const mapStateToProps = (state) => {
//   return {
//     numOfCakes: state.numOfCakes,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     buyCake: () => dispatch(buyCake()),
//   };
// };

//>>>>>>>>>>> old way
// export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
