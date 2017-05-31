import React from 'react';
import ReactDOM from 'react-dom';
import EventTable from './events.jsx';
import NewsTable from './news.jsx';

import news from './data/testData.json';
import workshops from './data/testData.json';
import events from './data/testData.json';

// class LandingContent extends React.Component {
//   render() {
//     return(
//       <div><h1>hi</h1></div>);
//   }
// }

class LandingContent extends React.Component {
  render() {

    console.log("YoMama");
    return(
        <div>
          <div className="col-md-12">
            <div id="news-block" className="paper-content">
              <h3>News</h3>
            </div>
          </div>
          <div className="col-md-4">
            <div className="paper-content">
              <h3>Upcoming Events</h3>
            </div>
          </div>
          <div className="col-md-4">
            <div className="paper-content">
              <h3>Editing Services</h3>
    The Renbourne Editorial Agency provides expert assistance with revising and editing your work - memoirs, fiction or creative non-fiction. We use a fine-tooth comb to ready your work for publication, in person or online. We also have writing coaches available to help organize and ready your work for publication, in person or online. In addition, personal tutorials and writing classes are also available. Please contact us at writersw@gmail.com, or call 828-254-8111 to discuss our services in further detail.<br/><br/>
    The Renbourne Editorial Agency is a division of The Writers' Workshop of Asheville, NC, a literary center founded in 1985.        
            </div>
          </div>
          <div className="col-md-4">
            <div className="paper-content">
              <h3>Writers' Retreat</h3>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3244.5230481492977!2d-82.53610358399479!3d35.59016234256722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8859f3641658998d%3A0x510546e2f6b9b765!2s387+Beaucatcher+Rd%2C+Asheville%2C+NC+28805!5e0!3m2!1sen!2sus!4v1495663958658" width="100%" frameBorder="0" style={{border:0}} allowFullScreen></iframe>
    If you're planning to visit Asheville, come and stay at our own Mountain Muse Bed & Breakfast, located at 387 Beaucatcher Road. Catering to literary and artistic minded folks, this century-old farmhouse is the ideal place to relax and rediscover your muse. A peaceful place with 3 bedrooms, two porches and gardens, we're only minutes away from downtown Asheville, The Biltmore Estate, the Folk Art Center, and the Blue Ridge Parkway.<br/><br/>
    Rates are $65 (single) per night ($125 double), two night minimum. Weekly rates are $365.<br/><br/>
    Email writersw@gmail.com to make your reservation!
            </div>
          </div>
        </div>
    );
  }
}

ReactDOM.render(
  <LandingContent />,
  document.getElementById('landing-content')
)