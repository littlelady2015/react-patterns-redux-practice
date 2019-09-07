import React from 'react';
import ReactDOM from 'react-dom';
const ThemeContext = React.createContext('light');

class App extends React.Component {
    render() {
        return (
        <ThemeContext.provider value="dark">
            <ToolBar />
        </ThemeContext.provider>
        )
    }
}

function toolBar(props) {
    return (
        <div>
            <ThemeButton />
        </div>
    )
}
class themeButton extends React.Component {
    static ContextType = ThemeContext;
    render() {
        return <Button theme={this.context} />
    }
}
