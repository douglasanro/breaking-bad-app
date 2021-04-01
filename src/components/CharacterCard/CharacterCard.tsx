import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ICharacter from 'models/ICharacter';
import getCurrentAgeByDate from 'utils/getCurrentAgeByDate';

type TCharacterCardProps = Pick<ICharacter, 'name' | 'birthday' | 'img'>;

const useStyles = makeStyles(() =>
  createStyles({
    card: {
      maxWidth: 600,
    },
    media: {
      height: 450,
      objectPosition: 'top',
    },
  })
);

const CharacterCard: React.FC<TCharacterCardProps> = ({ name, birthday, img }) => {
  const classes = useStyles();
  const age = getCurrentAgeByDate(birthday);

  return (
    <Card className={classes.card}>
      <CardMedia component="img" image={img} title={name} alt={name} className={classes.media} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Age: {age}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default React.memo(CharacterCard);
