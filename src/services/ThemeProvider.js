import React, { Component } from 'react';

const DARK = 'dark';
const WHITE = 'white';
const COLORFUL = 'colorful';
const RETRO = 'retro';
const THEME = [DARK, WHITE];
const DEFAULT_THEME = WHITE;

export default function WithThemeProvider(WrappedComponent) {
    return class ThemeProvider extends Component {
        constructor() {
            super();
            this.state = {
                currentTheme: DEFAULT_THEME,
            }
        }

        updateTheme = (theme) => {
            this.setState({ currentTheme: theme });
        }
        
        render() {
            return <WrappedComponent theme={this.state.currentTheme} />;
        }
    };
}
