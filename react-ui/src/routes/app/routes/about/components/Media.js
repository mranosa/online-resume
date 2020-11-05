import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};

function SimpleMediaCard(props) {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography style={{'font-size':'19px'}} gutterBottom variant="headline" component="h5">
            Mark Kenneth Ranosa
            <br />
            <span style={{'font-size':'14px', 'font-weight':'normal'}}>Fullstack Software Engineer</span>
          </Typography>
          <Typography component="p">
            <i className="fas fa-graduation-cap"></i>
            <span style={{'font-size':'12px'}}>
              <i style={{'vertical-align':'middle'}} className="material-icons">home</i>
              &nbsp;Manila, Philippines
            </span>
            <br />
            <span style={{'font-size':'12px'}}>
              <i style={{'vertical-align':'middle'}} className="material-icons">school</i>
              &nbsp;AMA Computer College, 2010
            </span>
            <br />
            <span style={{'font-size':'12px'}}>
              <i style={{'vertical-align':'middle'}} className="material-icons">email</i>
              &nbsp;ken.ranosa@gmail.com
            </span>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleMediaCard);
