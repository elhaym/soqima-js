import React from 'react';
import Icon from '../../../Icon/Icon';


export class FolderList extends React.Component {

    getBookingDates(sector) {
        return (typeof (sector) == 'object') ?
            <div>
                {sector.slice(0, 1).map((s, j) => {
                    const date = Object.create(sector);
                    return (

                        <p><Icon>date_range</Icon>
                            {" Du " + date[0].begin.substr(0, 10) + " au " + date[date.length - 1].end.substr(0, 10)}
                            <br />
                        </p>

                    )
                })}
            </div>
            : null
    }

    /**
     * Affiche le trajet du client et des voyageurs
     * @param {*} sector Tableau d'objets imbriqués
     */
    getJourneys(sector) {
        return (typeof (sector) == 'object') ?
            <div className="journey">
                <h6><strong>Itinéraire de voyage</strong></h6>
                <div className="airport-list">
                    {
                        sector.map((trip, j) => {

                            const location = Object.create(sector);
                            let locationItem;
                            switch (j) {
                                case 0: /** Alterner le cas defaut avec celui-ci une fois comparaison entre la valeur actuelle à j et celle à j + 1 est similaire
                                    pour afficher le véritable résultat désiré */
                                    locationItem = <p>
                                        {location[j].from.airport.code + " "} <Icon style="flight">local_airport</Icon> {location[j].to.airport.code + " "} 
                                    </p>;
                                    break;
                                case (location.length - 1):
                                    locationItem = <p>
                                    <Icon style="flight">local_airport</Icon> {" " + location[j].to.airport.code}
                                    </p>;
                                    break;
                                default:
                                    locationItem = <p>
                                    <Icon style="flight">local_airport</Icon>  {location[j].to.airport.code + " "} 
                                    </p>;
                            }
                            return (
                                locationItem
                            )
                        })
                    }
                </div>
            </div>
            : null
    }

    getTotals(total) {
        return (typeof (total) == 'object') ?
            total.map((price, j) => { if (price.currency === "EUR") { return price.amount + "€" } })
            : null
    }

    getTravellers(traveller) {
        return (
            traveller.length > 0 ?
                <div><Icon>person</Icon> {" Comprend " + traveller.length +
                    (traveller.length === 1 ?
                        " voyageur" :
                        " voyageurs")}</div>
                : null
        )
    }

    renderBookingList(bookings) {
        return (
            bookings.map((booking, i) => {
                const { code, whenCreated, xStatus, customer, traveller, total, sector } = booking;
                const _xStatus = (xStatus === "cancel" ?
                    <p><Icon>clear</Icon>Annulé</p>
                    : (xStatus === "actionRequired" ?
                        <p><Icon>sync</Icon>En attente d'une action</p>
                        : xStatus === "confirm" ?
                            <p><Icon>done</Icon> Terminé</p>
                            :
                            <p><Icon>info</Icon> Information</p>));

                return (
                    <div className={"row h-100 folder-" + i} key={i}>
                        <div className={"col-2 text-center fb"}>
                            <Icon>folder</Icon>
                            <h5>{code}</h5>
                            <h6>{whenCreated}</h6>
                        </div>
                        <div className="col-8 desc">
                            <div className="row h-100">
                                <div className="col-9">
                                    {
                                        customer.firstName && customer.lastName ?
                                            <div className="client">
                                                <strong>{customer.firstName + " " + customer.lastName}</strong>
                                            </div>
                                            : null
                                    }
                                    <div className="status">{_xStatus}</div>
                                    <div className="traveller">
                                        {
                                            this.getTravellers(traveller)
                                        }
                                    </div>

                                    <div className="dates">
                                        {
                                            this.getBookingDates(sector)
                                        }
                                    </div>
                                    <div className="text-left">
                                        {
                                            this.getJourneys(sector)
                                        }
                                    </div>
                                </div>
                                <div className="col-3 text-center price align-self-center">
                                    <h3 className="font-weight-bold">
                                        {
                                            this.getTotals(total)
                                        }
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })
        );
    }

    render() {
        const bookings = this.props.data;
        return <div>{this.renderBookingList(bookings)}</div>
    }
}