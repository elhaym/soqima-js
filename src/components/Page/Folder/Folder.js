import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';


import { Container } from '../../Container/Container';
import { FolderList } from './FolderList/FolderList';

export class Folder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookings: null,
            isLoading: true
        };
    }
    /**
     * Make a HTTP request for data using axios 
     */
    getBookings() {
        const proxyurl = "https://cors-anywhere.herokuapp.com/"; // Proxy used to access any CORS
        const url = 'https://www.ghusse.com/afidium/response.json'; // API where data is hosted
        axios
            .get(proxyurl + url)
            // Get and store data, then change the loading state
            .then(response => {
                const bookings = response.data.data.booking;
                this.setState({
                    bookings: bookings,
                    isLoading: false
                })
            })

            // Display the error encountered in an alert popup
            // and change the loading state
            .catch(error => {
                alert(error);
                this.setState({
                    isLoading: false
                })
            })
    }

    componentDidMount() {
        // Let the app know the data is ready to be rendered
        this.getBookings();
    }
    render() {
        const { bookings, isLoading } = this.state;
        return (
            <section id="folders" >

                <Container>
                    <div className="slideInLeft">
                        <h4 className="title">Soqima/Afidium - Dossiers de voyages</h4>
                        <h5>Résultats de recherche</h5>

                        {!isLoading ? (
                            <div className="slideInUp">
                                <FolderList data={bookings} />
                            </div>
                        )

                            : (<p>'Chargement des réservations...'</p>)
                        }</div>
                </Container>

            </section>
        )
    }
}

Folder.propTypes = {
    data: PropTypes.array.isRequired
};

export default Folder;