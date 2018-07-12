import React, { Component } from 'react';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';

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
           return ( <React.Fragment>
                                <ListItem button>
                                  <ListItemText primary={d.title} />
                                </ListItem>
                                <Divider/>
                    </React.Fragment>);
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
