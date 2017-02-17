import React, { Component } from 'react';
import Tier from '../Tier';
import './styles.css';

export default class TierListComponent extends Component {
    constructor(props) {
        super(props);

        this.renderTiers = this.renderTiers.bind(this);
    }

    renderTiers() {
        return this.props.tiers.map((tier) => {
            return (
                <div key={tier.tier}>
                    <Tier tier={tier} />
                </div>
            );
        });
    }

    render() {
        return (
            <div className="tier-list">
                {this.renderTiers()}
            </div>
        );
    }
}
