import React, {Componant} from "React";
import {toggleRegisterModel} from '../../js/actions/uiActions';
import {connect} from "react-redux";

const mapStateToProps = state => {
    return{
        isOpen:false
    }
}

const mapDispatchToProps = {
    toggleRegisterModel
}

class RegisterButton extends Component {
    constructor(props){
        super(props);
        this.props = props;
}
    render(){
        const {toggleRegisterModel} = thi.props;
        return(
            <div className="registerButton right menu" >
                <a className="ui item" onClick={toggleRegisterModel}>
                        Register
                    </a>
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(RegisterButton);