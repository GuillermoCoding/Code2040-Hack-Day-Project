import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';


class RequestForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            classSize: 0,
        }
    }
    render() {
        console.log(this.state.classSize);
        return (
            <div className={this.props.classes.container}>
                <h5>Workshop request</h5>
                <TextField
                  label='School name'
                />
                <Select
                    value={this.state.classSize}
                    onChange={(event) => this.setState({classSize: event.target.value})}
                    inputProps={{
                    name: 'class size',
                    id: 'size-simple',
                    }}
                >
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                    <MenuItem value={30}>30</MenuItem>
                </Select>
                
            </div>
        );
    }
}
const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
}
export default withStyles(styles)(RequestForm);