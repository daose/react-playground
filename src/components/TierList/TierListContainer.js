import React, { Component } from 'react';
import { connect } from 'react-redux';
import TierListComponent from './TierListComponent';

class TierListContainer extends Component {
    static defaultProps = {
        tiers: [
            {
                tier: 'Free',
                description: 'Free description',
                perks: ['No perks'],
                price: 'FREE'
            },
            {
                tier: 'Basic',
                description: 'Basic description',
                perks: ['One perk', 'Two perk'],
                price: '$100.00'
            },
            {
                tier: 'Premium',
                description: 'Premium description',
                perks: ['One perk', 'Two perk', 'Three perks'],
                price: '$200.00'
            }
        ]
    }

    render() {
        return (
            <TierListComponent tiers={this.props.tiers}/>
        );
    }
}

export default connect(
    null
)(TierListContainer);
