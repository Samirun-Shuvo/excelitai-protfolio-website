import React from 'react';

const ToolboxUIUX = () => {
    return (
        <div className='toolbox-web'>
            <div className="row row-cols-2 row-cols-md-4 row-cols-lg-6 g-4">
                <div className="col">
                    <div className="card h-100 p-4">
                        <img src="./images/services/toolbox/uiux/figma.png"
                            className="card-img-top img-fluid" alt="Figma" />
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 p-4">
                        <img src="./images/services/toolbox/uiux/xd.png"
                            className="card-img-top img-fluid" alt="Adobe XD" />
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 p-4">
                        <img src="./images/services/toolbox/uiux/ps.png"
                            className="card-img-top img-fluid" alt="Adobe Photoshop" />
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 p-4">
                        <img src="./images/services/toolbox/uiux/ai.png"
                            className="card-img-top img-fluid" alt="Adobe Illustrator" />
                    </div>
                </div>


            </div>
        </div>
    );
};

export default ToolboxUIUX;