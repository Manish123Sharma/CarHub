import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

export default function Cards({ img, title, desc, colour, price }) {
    return (
        <Card
            sx={{
                maxWidth: 345,
                height: 550, // fixed height for all cards
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 12px 20px rgba(0, 0, 0, 0.3)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 12px 20px rgba(0, 0, 0, 0.5)',
                    zIndex: 2,
                },
                borderRadius: 5,
            }}
        >
            <CardMedia
                component="img"
                alt={title}
                image={img}
            // sx={{ height: 180, objectFit: 'fill' }}
            />
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography
                    variant="body2"
                    component="div"
                    sx={{
                        color: 'text.secondary',
                        display: '-webkit-box',
                        WebkitLineClamp: 4,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        // minHeight: '88px', // ensures consistent description space
                    }}
                >
                    {desc}
                </Typography>
                <Typography
                    component="div"
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginTop: '15px',
                        fontSize: '14px',
                    }}
                >
                    <Typography
                        component="span"
                        sx={{
                            background: '#333',
                            padding: '4px 10px',
                            borderRadius: '12px',
                            fontWeight: 500,
                            color: '#00bcd4',
                        }}
                    >
                        Color: {colour}
                    </Typography>
                    <Typography
                        sx={{
                            fontWeight: 'bold',
                            color: '#4caf50',
                        }}
                    >
                        ₹ {price.toLocaleString()}
                    </Typography>
                </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'space-between', paddingX: 2 }}>
                <Button variant="outlined" size="small">
                    BUY CAR
                </Button>
                <Button variant="contained" size="small">
                    LEARN MORE
                </Button>
            </CardActions>
        </Card>
    );
}

Cards.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    colour: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
