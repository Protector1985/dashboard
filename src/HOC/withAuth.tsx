import React from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@auth0/nextjs-auth0/client';
import {HashLoader} from "react-spinners";
import css from './styles/styles.module.css'


function withAuth(WrappedComponent: React.FC) {
    const WithAuthComponent: React.FC = (props) => {
        const { user, error, isLoading } = useUser();
        const router = useRouter()
      

        // You can add authentication logic here
        if (isLoading) {
            return ( 
                <div className={css.wrapper}>
                    <HashLoader className={css.loadingSymbol} color="#116dff" />
                </div>
            )  
        }

        if (error) {
            return <div>Error: {error.message}</div>;
        }

        if (!user) {
            // Perform actions if user is not authenticated
            router.push("/api/auth/login")
            return
        }

        return <WrappedComponent {...props} />;
    };

    WithAuthComponent.displayName = `withAuth(${WrappedComponent.displayName || WrappedComponent.name})`;

    return WithAuthComponent;
}

export default withAuth;