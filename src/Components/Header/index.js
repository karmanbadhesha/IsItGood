import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';


const theme = createMuiTheme();

theme.typography.h3 = {
    fontSize: '1.2rem',
    '@media (min-width:600px)': {
        fontSize: '1.5rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '2rem',
    },
};


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        return (
            <div>
                <table className="App-header">
                    <tbody>
                        <tr>
                            <td><img alt="Logo" src="https://img.icons8.com/pastel-glyph/64/000000/movie-theater.png" /></td>
                            <td>
                                <ThemeProvider theme={theme}>
                                    <Typography variant="h3">Is It Good?</Typography>
                                </ThemeProvider>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Header;