import React, { Component } from "react";
import CsvDownloader from 'react-csv-downloader';



class Contact extends Component {
  render() {
    const columns = [{
      id: 'first',
      displayName: 'First column'
    }, {
      id: 'second',
      displayName: 'Second column'
    }];
   
    const datas = [{
      first: 'Location',
      second: 'Yone-Dundas Toronto'
    }, {
      first: 'Hours',
      second: '6PM - 10PM'
    }, {
      first: 'Organiser',
      second: 'Intellitix'
    }, {
      first: 'Sponsors',
      second: 'Budweiser and Bell'
    }, {
      first: 'Bar',
      second: 'Open to 19+'
    }];

    return (
      
      <div>
              <h2>EXPORT YOUR EVENT DATA TO CSV</h2>
              <p></p>
              <CsvDownloader
            filename="myfile"
            separator=";"
            wrapColumnChar="'"
            columns={columns}
            datas={datas}
            text="EXPORT CSV" />
        <p></p>
        <h2>GOT QUESTIONS?</h2>
        <p>The easiest way to connect is via
        <a href="https://www.linkedin.com/in/deepakdal">  LinkedIn</a>.
        </p>
      
    
        </div>
    );
  }
}
 
export default Contact;