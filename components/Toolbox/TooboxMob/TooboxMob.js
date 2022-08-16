import React from 'react';

const TooboxMob = () => {
    return (
        <div className='toolbox-web'>
            <div className="row row-cols-2 row-cols-md-4 row-cols-lg-6 g-4">
                <div className="col">
                    <div className="card h-100 p-3">
                        <img src="./images/services/toolbox/mob/java.png"
                            className="card-img-top img-fluid" alt="Java" />
                    </div>
                </div>          
                <div className="col">
                    <div className="card h-100 p-3">
                        <img src="./images/services/toolbox/mob/android sdk.png"
                            className="card-img-top img-fluid" alt="Android SDK" />
                    </div>
                </div>          
                <div className="col">
                    <div className="card h-100 p-3">
                        <img src="./images/services/toolbox/mob/dart.png"
                            className="card-img-top img-fluid" alt="Dart" />
                    </div>
                </div>          
                <div className="col">
                    <div className="card h-100 p-3">
                        <img src="./images/services/toolbox/mob/flutter.png"
                            className="card-img-top img-fluid" alt="Flutter" />
                    </div>
                </div>          
                <div className="col">
                    <div className="card h-100 p-3">
                        <img src="./images/services/toolbox/mob/firebase.png"
                            className="card-img-top img-fluid" alt="Firebase" />
                    </div>
                </div>          
                <div className="col">
                    <div className="card h-100 p-3">
                        <img src="./images/services/toolbox/mob/sqlite.png"
                            className="card-img-top img-fluid" alt="SQLite" />
                    </div>
                </div>          
            </div>
        </div>
    );
};

export default TooboxMob;