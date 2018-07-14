import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import {getTips} from '../../../../services';
import {getPost} from '../../../../utils'
import './TipList.css';



class TipList extends Component
{

  constructor(props) {
      super(props);
      this.state = {
        tip_list: []
      }
  };


  render() {
    return (
      <div className={'tip-list'}>
        <List component="nav">
        {this.state.tip_list.map(function(d){
           return (
             <React.Fragment>
                  <ListItem button>
                    <ListItemText primary={d.title} />   <Chip label={d.category}/>
                  </ListItem>
                  <Divider/>
             </React.Fragment>
           );
         })}

       </List>
      </div>
    );
  }


  componentWillMount() {
    getTips(getPost()).then(data => {
      this.setState({
        tip_list:data
      })
    })
  }


  componentWillUnmount(){
  }

}


export default TipList;