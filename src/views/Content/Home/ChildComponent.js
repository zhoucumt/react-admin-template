import React, {PureComponent} from 'react';

class ChildComponent extends PureComponent {
    render() {
        return(
            <div>
                {this.props.numbers}
            </div>
        );
    }
}
export default ChildComponent;
