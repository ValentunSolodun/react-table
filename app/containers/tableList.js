// import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import { addcolrow } from '../actions/index'

// class TableList extends Component {

//     generateTable(col, row) {
//         console.log(this.props);
//         let key = 0;
//         return this.props.table.map((item) => {
//             return (
//                 <tr key={key++}>{item.map((item) => <td key={key++}> <input type="text"/> </td> )}</tr>
//             );
//         });
//     }

//     render() {
//         return (
//             <table>
//                 <tbody>
//                     {this.generateTable([1,5,5], [4, 6, 6, 6])}
//                 </tbody>
//             </table>
//         );
//     }
// }

// function mapStateToProps(state) {
//     return {
//         table: state.table
//     }
// }

// function matchDispatchToProps(dispatch) {
//     return bindActionCreators({addcolrow : addcolrow}, dispatch);
// }


// export default connect(mapStateToProps, matchDispatchToProps)(TableList);