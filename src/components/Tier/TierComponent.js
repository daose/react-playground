import React from 'react';
import { Card, CardText, CardHeader, CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import './styles.css';

const TierComponent = ({tier}) => (
    <Card className="tier-card">
        <CardHeader
            title={tier.tier}
            subtitle={tier.description} />
        <CardText>
            <ul>
            {tier.perks.map((perk) => (
                <li key={perk}>{perk}</li>
            ))}
            </ul>
        </CardText>
        <CardActions>
            <FlatButton primary label={tier.price} />
        </CardActions>
    </Card>
);

export default TierComponent;
