import React from 'react';

//loading component. Displays the loading on the screen. Used Font-Awesome for spinner.
export const Loading = () => {
    return(
        <div className="col-12">
            <span className="fa fa-spinner fa-pulse fa-3x fa-fw text-primary"></span>
            <p>Loading . . .</p>
        </div>
    );
};
