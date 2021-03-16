import React, { Component } from 'react'

export default class Home extends Component {
    // constructor(){
    //     console.log('components constructed')
    //     super();
    //     this.state= {
    //         racers: []
    //     }
    //     console.log(this.state.racers)
    // }
    // componentDidMount(){
    //     console.log('component mounted')
    //     fetch('https://ergast.com/api/f1/2018/5/driverStandings.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         // console.log(data)
    //         this.setState({
    //             racers: data.MRData.StandingsTable.StandingsLists[0].DriverStandings
    //         })
    //     })
    //     .catch(error => console.log(error))
    // }
    render() {
        return (
            <div>
                This is the Home Page {this.props.name}
                <form onSubmit={(e)=> this.props.handleSubmit(e)}>
                    <input type = "text" className="form-control" name="year" placeholder="Year"/>
                    <input type = "text" className="form-control" name="season" placeholder="Season"/>
                    <button type="submit" className="sumbit" >Submit</button>
                </form>

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Position</th>
                            <th>Points</th>
                            <th>Wins</th>
                            <th>Name</th>
                            <th>DOB</th>
                            <th>Nationality</th>
                            <th>Contructor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.racers.map((racer, index) => (
                            <tr key={index}>
                                <td>{racer.position}</td>
                                <td>{racer.points}</td>
                                <td>{racer.wins}</td>
                                <td>{racer.Driver.givenName} {racer.Driver.familyName}</td>
                                <td>{racer.Driver.dateOfBirth}</td>
                                <td>{racer.Driver.nationality}</td>
                                <td>{racer.Constructors[0].name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}
