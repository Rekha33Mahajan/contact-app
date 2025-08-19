import { useNavigate } from "react-router-dom";

export function withNavigation(Component){
    return function WrappedComponent(props){
        const navigate = useNavigate();
        return <Component {...props} navigate={navigate}/>;
    };
}

//HOC higher order component for child to parent
