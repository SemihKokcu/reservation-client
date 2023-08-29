import React from "react";
import { useNavigate } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import { checkAuthAction } from "store/actions/AuthActions";
import { checkAuth } from "services/AuthService";
const PrivateComponent = ({ children }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const { status } = useSelector((state) => state.auth);

    React.useEffect(() => {
        const checkAuthentication = async () => {
          const isAuthenticated = await checkAuth();
          if (!isAuthenticated) {
            navigate("/auth/login", { replace: true });
          }
        };
    
        checkAuthentication();
      }, [navigate]);
    
      return <>{children}</>;
    
    return <>{children}</>;
}

    const mapStateToProps = (state) => {
        return {
            errorMessage: state.errorMessage,
            successMessage: state.successMessage,
            showLoading: state.showLoading,
            status: state.status,
            role:state.role,
        };
      };
export default connect(mapStateToProps)(PrivateComponent);