import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import '../../../App.css';
import './MemoryGameOverPage.css';

const MemoryGameOverPage = (props) => {

    return (
        <Fragment>
            <div className="GameOverScreen">
                <div className="GameOverTextContainer">
                    <div className="GameOverText">
                        Congratulations!
                    </div>
                    <div className="GameOverText">
                        All {props.match_count} matches were found in {props.round_count} rounds.
                    </div>
                </div>
                <button onClick={() => window.location.reload(true)}>PLAY AGAIN</button>
            </div>
            <footer className="copyright">&copy; Nat Geyzen 2020</footer>    
        </Fragment>
    )
};

const mapStateToProps = state => {
    return {
        round_count: state.roundCount,
        match_count: state.matchCount
    }
};

export default connect(mapStateToProps)(MemoryGameOverPage);