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
        <CardMedia
          className={classes.media}
          image="assets/images/me.jpg"
          style={{ minHeight: '320px' }}
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h4">
            Mark Kenneth Ranosa
          </Typography>
          <Typography component="p">
            <span style={{'font-size':'16px'}}>Fullstack Software Engineer</span>
            <br />
            <br />
            <i className="fas fa-graduation-cap"></i>
            <span>
              <i style={{'vertical-align':'middle'}} className="material-icons">home</i>
              &nbsp;Manila, Philippines
            </span>
            <br />
            <span>
              <i style={{'vertical-align':'middle'}} className="material-icons">school</i>
              &nbsp;AMA Computer College, 2010
            </span>
            <br />
            <span>
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
