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
          image="https://scontent.fmnl3-1.fna.fbcdn.net/v/t1.0-9/64398476_10216938360306099_4109669839776251904_n.jpg?_nc_cat=108&_nc_oc=AQl4x9OyUG_Zlrl8akgR52SwEjynOiAmy7NnLYG5-k6VA-y1sf93crNS010BFF159b4&_nc_ht=scontent.fmnl3-1.fna&oh=463b273e7413707a69aa9276e48f5593&oe=5E2DF695"
          title="Contemplative Reptile"
          style={{ minHeight: '320px' }}
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Hi! Im Ken!
          </Typography>
          <Typography component="p">
            What to put here?
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
