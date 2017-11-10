import React, { Component } from 'react';
import tcIcon from './icon_tc.png';
import GoogleButton from 'react-google-button';

class App extends Component {
    render() {
        return (
            <div>
                <table className="border-table2">
                    <tr>
                        <td className="bg-color"><p></p></td>
                    </tr>
                </table>
                <table className="border-table">
                    <tr>
                        <td className="icon-tc"><img className="img" src={tcIcon}/></td>
                    </tr>
                    <tr>
                        <td className="text-tc">Training Center</td>
                    </tr>
                    <tr>
                        <td className="text-content">
                            <p>
                                Online training courses with certificates that can help you <br/>
                                build your skills and advance your career!
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td className="icon-center">
                            <i className="material-icons icon-margin1">play_circle_filled</i>
                            <i className="material-icons icon-margin2">assignment</i>
                            <i className="material-icons icon-margin3">help_outline</i>
                        </td>
                    </tr>
                    <tr>
                        <td className="btn-center">
                            <center><GoogleButton /></center><br /><br />
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default App;
